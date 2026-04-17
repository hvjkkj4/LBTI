"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/data/questions";
import { LBti_TYPES } from "@/data/types";
import type { LbtiTypeCode } from "@/data/types";
import type { LbtiType } from "@/data/types";
import OptionButton from "@/components/OptionButton";
import ProgressBar from "@/components/ProgressBar";
import { computeLbtiResult } from "@/lib/scoring";

type View = "start" | "quiz";

function safeSetSessionResult(type: LbtiType) {
  try {
    sessionStorage.setItem("lbti_result", JSON.stringify(type));
  } catch {
    // ignore
  }
}

function computeAndGo(
  answers: Array<number | null>,
  router: ReturnType<typeof useRouter>,
) {
  const { type } = computeLbtiResult(answers);
  safeSetSessionResult(type);
  router.push("/result");
}

export default function TestPage() {
  const router = useRouter();
  const [view, setView] = useState<View>("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(() =>
    new Array(QUESTIONS.length).fill(null),
  );

  const q = QUESTIONS[currentIndex];
  const answered = answers[currentIndex] !== null;

  const metaText = useMemo(() => {
    return `第 ${currentIndex + 1} / ${QUESTIONS.length} 题`;
  }, [currentIndex]);

  function start() {
    setView("quiz");
    setCurrentIndex(0);
    setAnswers(new Array(QUESTIONS.length).fill(null));
  }

  function prev() {
    if (currentIndex <= 0) return;
    setCurrentIndex((v) => v - 1);
  }

  function next() {
    if (!answered) return;
    if (currentIndex >= QUESTIONS.length - 1) {
      computeAndGo(answers, router);
      return;
    }
    setCurrentIndex((v) => v + 1);
  }

  function restartAndStartOver() {
    start();
  }

  function quickDemo() {
    // Deterministic choices for a demo; cycles through options for full-length quizzes.
    const demoAnswers = QUESTIONS.map((_, idx) => idx % 3);
    computeAndGo(demoAnswers, router);
  }

  return (
    <main className="card">
      {view === "start" ? (
        <section>
          <div className="hero">
            <h1 className="test-hero__title">测测你属于哪种人间活法。</h1>
            <p className="test-hero__desc">
              LBTI
              更关心“你遇到事时怎么选”：社交靠近/退场、情绪怎么处理、行动怎么推进、规则能不能信，
              以及你到底会不会在自己身上复盘。娱乐向，不做诊断。
            </p>
            <div className="callout">
              <strong>小提示</strong>
              <div className="test-hero__hint">
                每题只有一个选择。选你最常见的那套反应就行。
              </div>
            </div>
            <div className="row test-hero__actions">
              <button type="button" onClick={start}>
                开始测试
              </button>
              <button
                type="button"
                className="ghost"
                onClick={quickDemo}
                title="直接跳到示例结果"
              >
                快速看示例
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className="row space test-meta">
            <div>
              <div className="test-meta__title">LBTI 问卷</div>
              <div className="qSub test-meta__sub">{metaText}</div>
            </div>
            <div className="test-meta__progress">
              <ProgressBar current={currentIndex} total={QUESTIONS.length} />
              <div className="test-meta__progressText">
                {currentIndex + 1} / {QUESTIONS.length}
              </div>
            </div>
          </div>

          <div className="test-question__title">{q.title}</div>
          {q.sub ? <div className="test-question__sub">{q.sub}</div> : null}

          <div className="optGrid test-question__options">
            {q.options.map((opt, idx) => (
              <OptionButton
                key={idx}
                label={opt.label}
                selected={answers[currentIndex] === idx}
                onClick={() => {
                  setAnswers((prev) => {
                    const next = [...prev];
                    next[currentIndex] = idx;
                    return next;
                  });
                }}
              />
            ))}
          </div>

          <div className="row space test-question__nav">
            <button
              type="button"
              className="secondary"
              onClick={prev}
              disabled={currentIndex === 0}
            >
              上一步
            </button>
            <button type="button" onClick={next} disabled={!answered}>
              {currentIndex === QUESTIONS.length - 1 ? "查看结果" : "下一题"}
            </button>
          </div>
        </section>
      )}
      <div className="mini test-disclaimer">
        <div className="test-disclaimer__title">免责声明</div>
        <p className="test-disclaimer__text">
          LBTI 仅用于娱乐与自我观察，不做医学或心理诊断。
        </p>
      </div>
    </main>
  );
}
