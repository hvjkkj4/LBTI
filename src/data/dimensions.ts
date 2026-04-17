export type LbtiDimensionKey =
  | "S1"
  | "S2"
  | "S3"
  | "E1"
  | "E2"
  | "E3"
  | "A1"
  | "A2"
  | "A3"
  | "Ac1"
  | "Ac2"
  | "Ac3"
  | "So1"
  | "So2"
  | "So3";

export const DIM_ORDER: LbtiDimensionKey[] = [
  "S1",
  "S2",
  "S3",
  "E1",
  "E2",
  "E3",
  "A1",
  "A2",
  "A3",
  "Ac1",
  "Ac2",
  "Ac3",
  "So1",
  "So2",
  "So3",
];

export const DIM_LABEL: Record<LbtiDimensionKey, string> = {
  S1: "Self · 稳定感",
  S2: "Self · 自我清晰",
  S3: "Self · 复原连续性",
  E1: "Emotion · 焦虑/安心",
  E2: "Emotion · 投入深度",
  E3: "Emotion · 修复速度",
  A1: "Attitude · 意义供给",
  A2: "Attitude · 规则取向",
  A3: "Attitude · 情绪态度",
  Ac1: "Action · 进攻/规避",
  Ac2: "Action · 决断力度",
  Ac3: "Action · 计划落点",
  So1: "Social · 靠近倾向",
  So2: "Social · 边界厚度",
  So3: "Social · 真实程度",
};

export const DIM_VALUE_TEXT = ["Low", "Mid", "High"] as const;

