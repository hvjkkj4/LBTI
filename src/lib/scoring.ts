import { LBti_TYPES } from "@/data/types";
import type { LbtiTypeCode } from "@/data/types";
import { QUESTIONS } from "@/data/questions";

type NormalizedStat = { mean: number; std: number };

const NORMALIZATION_STATS: Record<LbtiTypeCode, NormalizedStat> = (() => {
  const stats = {} as Record<LbtiTypeCode, NormalizedStat>;

  LBti_TYPES.forEach((type) => {
    stats[type.code] = { mean: 0, std: 1 };
  });

  for (const type of LBti_TYPES) {
    let mean = 0;
    let variance = 0;

    for (const question of QUESTIONS) {
      const optionCount = question.options.length || 1;
      let questionMean = 0;
      let questionMeanSquare = 0;

      for (const option of question.options) {
        const points = option.vote[type.code] ?? 0;
        questionMean += points / optionCount;
        questionMeanSquare += (points * points) / optionCount;
      }

      mean += questionMean;
      variance += questionMeanSquare - questionMean * questionMean;
    }

    stats[type.code] = {
      mean,
      std: Math.sqrt(Math.max(variance, 1e-6)),
    };
  }

  return stats;
})();

export interface LbtiScoreResult {
  type: (typeof LBti_TYPES)[number];
  scores: Record<LbtiTypeCode, number>;
}

export function computeLbtiResult(
  answers: Array<number | null>,
): LbtiScoreResult {
  const scores = {} as Record<LbtiTypeCode, number>;
  LBti_TYPES.forEach((t) => {
    scores[t.code] = 0;
  });

  for (let i = 0; i < QUESTIONS.length; i++) {
    const chosen = answers[i];
    if (chosen === null || chosen === undefined) continue;
    const opt = QUESTIONS[i].options[chosen];
    Object.entries(opt.vote).forEach(([code, pts]) => {
      if (pts == null) return;
      scores[code as LbtiTypeCode] += pts;
    });
  }

  Object.entries(NORMALIZATION_STATS).forEach(([code, stat]) => {
    const typedCode = code as LbtiTypeCode;
    scores[typedCode] = (scores[typedCode] - stat.mean) / stat.std;
  });

  // pick best; tie-breaker: first in LBti_TYPES order
  let bestCode = LBti_TYPES[0].code;
  let bestScore = -Infinity;
  LBti_TYPES.forEach((t) => {
    const s = scores[t.code];
    if (s > bestScore) {
      bestScore = s;
      bestCode = t.code;
    }
  });

  const type = LBti_TYPES.find((t) => t.code === bestCode) ?? LBti_TYPES[0];
  return { type, scores };
}
