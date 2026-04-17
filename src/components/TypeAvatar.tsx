import type { LbtiTypeCode } from "@/data/types";

type Pose = "stand" | "lean" | "sit" | "dash";
type HairStyle = "crop" | "spike" | "hood" | "cap" | "bob";
type Outfit = "jacket" | "hoodie" | "robe" | "coat" | "tee";
type Expression = "smile" | "grin" | "calm" | "sleepy" | "focus";
type Prop =
  | "laptop"
  | "mic"
  | "book"
  | "heart"
  | "chart"
  | "pillow"
  | "note"
  | "halo"
  | "clipboard"
  | "bolt"
  | "bubble"
  | "megaphone"
  | "blanket"
  | "none";

interface CharacterStyle {
  bgA: string;
  bgB: string;
  line: string;
  skin: string;
  hair: string;
  clothA: string;
  clothB: string;
  accent: string;
  propColor: string;
  pose: Pose;
  hairStyle: HairStyle;
  outfit: Outfit;
  expression: Expression;
  prop: Prop;
}

const CHARACTERS: Record<LbtiTypeCode, CharacterStyle> = {
  MOYU: {
    bgA: "#eaf2ff",
    bgB: "#f8fbff",
    line: "#4968a7",
    skin: "#ffe6cc",
    hair: "#2b3557",
    clothA: "#dce8ff",
    clothB: "#c4d6ff",
    accent: "#ffbd81",
    propColor: "#7aa6ff",
    pose: "sit",
    hairStyle: "hood",
    outfit: "hoodie",
    expression: "calm",
    prop: "laptop",
  },
  XSWL: {
    bgA: "#eaf7ff",
    bgB: "#fafdff",
    line: "#3f6c9c",
    skin: "#ffe5cb",
    hair: "#2d4867",
    clothA: "#d5ebff",
    clothB: "#a9d7ff",
    accent: "#ffd06d",
    propColor: "#5ec2ff",
    pose: "dash",
    hairStyle: "spike",
    outfit: "jacket",
    expression: "grin",
    prop: "mic",
  },
  COOL: {
    bgA: "#eef2ff",
    bgB: "#fafbff",
    line: "#3d4f7e",
    skin: "#ffe4c8",
    hair: "#1f2f4a",
    clothA: "#dae2f8",
    clothB: "#b9c8eb",
    accent: "#6cc5ff",
    propColor: "#5b7dff",
    pose: "lean",
    hairStyle: "crop",
    outfit: "coat",
    expression: "calm",
    prop: "none",
  },
  SOLOX: {
    bgA: "#f1f4ff",
    bgB: "#fbfcff",
    line: "#566690",
    skin: "#ffe5ca",
    hair: "#37476b",
    clothA: "#e6ecff",
    clothB: "#cfd9f4",
    accent: "#a7b8ff",
    propColor: "#8ca4df",
    pose: "sit",
    hairStyle: "bob",
    outfit: "tee",
    expression: "calm",
    prop: "book",
  },
  CLINGY: {
    bgA: "#fff0f7",
    bgB: "#fff9fc",
    line: "#88547a",
    skin: "#ffe2d6",
    hair: "#5a3750",
    clothA: "#ffe8f2",
    clothB: "#ffd2e6",
    accent: "#ff8fbe",
    propColor: "#f06ca8",
    pose: "lean",
    hairStyle: "bob",
    outfit: "jacket",
    expression: "smile",
    prop: "heart",
  },
  INWVL: {
    bgA: "#edf5ff",
    bgB: "#f9fcff",
    line: "#345f9a",
    skin: "#ffe7d0",
    hair: "#254266",
    clothA: "#dceafe",
    clothB: "#bfd9ff",
    accent: "#78b2ff",
    propColor: "#4f8fff",
    pose: "stand",
    hairStyle: "crop",
    outfit: "coat",
    expression: "focus",
    prop: "chart",
  },
  LAZIQ: {
    bgA: "#eef9f8",
    bgB: "#fbfffe",
    line: "#456f74",
    skin: "#ffe7ce",
    hair: "#4b6165",
    clothA: "#dbf0ed",
    clothB: "#b9dbd6",
    accent: "#9bdbd0",
    propColor: "#77bbb0",
    pose: "sit",
    hairStyle: "hood",
    outfit: "hoodie",
    expression: "sleepy",
    prop: "pillow",
  },
  RERUN: {
    bgA: "#f3f1ff",
    bgB: "#fcfbff",
    line: "#5a5690",
    skin: "#ffe6d4",
    hair: "#3a3d63",
    clothA: "#e3ddff",
    clothB: "#cdc1ff",
    accent: "#b7a2ff",
    propColor: "#8c75ea",
    pose: "lean",
    hairStyle: "bob",
    outfit: "robe",
    expression: "focus",
    prop: "note",
  },
  ZENIT: {
    bgA: "#ecf9ff",
    bgB: "#f9fdff",
    line: "#3c739f",
    skin: "#ffe8d0",
    hair: "#274b6f",
    clothA: "#d6ecfb",
    clothB: "#b5dff5",
    accent: "#90d6ff",
    propColor: "#5aa6e0",
    pose: "stand",
    hairStyle: "crop",
    outfit: "robe",
    expression: "focus",
    prop: "halo",
  },
  RIGOR: {
    bgA: "#f1f4ff",
    bgB: "#fbfcff",
    line: "#465984",
    skin: "#ffe4cc",
    hair: "#273753",
    clothA: "#d9e2fa",
    clothB: "#b9c9ee",
    accent: "#91a9eb",
    propColor: "#607dc6",
    pose: "stand",
    hairStyle: "crop",
    outfit: "coat",
    expression: "calm",
    prop: "clipboard",
  },
  SPARK: {
    bgA: "#fff5eb",
    bgB: "#fffdf9",
    line: "#885036",
    skin: "#ffe2c5",
    hair: "#4a2f21",
    clothA: "#ffe7d1",
    clothB: "#ffcaa2",
    accent: "#ffb36b",
    propColor: "#f58a4d",
    pose: "dash",
    hairStyle: "spike",
    outfit: "jacket",
    expression: "grin",
    prop: "bolt",
  },
  AUTHX: {
    bgA: "#eef7ff",
    bgB: "#fafdff",
    line: "#3e678e",
    skin: "#ffe5ce",
    hair: "#2a4164",
    clothA: "#d8eaf9",
    clothB: "#b8d8f2",
    accent: "#7fc1ee",
    propColor: "#4b9dd9",
    pose: "stand",
    hairStyle: "cap",
    outfit: "jacket",
    expression: "smile",
    prop: "bubble",
  },
  FOMAX: {
    bgA: "#fff3ee",
    bgB: "#fffdfa",
    line: "#8a4d3f",
    skin: "#ffe1ca",
    hair: "#5d342b",
    clothA: "#ffe5d8",
    clothB: "#ffc5ad",
    accent: "#ff9c76",
    propColor: "#e88663",
    pose: "dash",
    hairStyle: "spike",
    outfit: "tee",
    expression: "grin",
    prop: "megaphone",
  },
  PROCRS: {
    bgA: "#eff3fa",
    bgB: "#fbfcff",
    line: "#4c5f86",
    skin: "#ffe4cb",
    hair: "#394760",
    clothA: "#dce6f5",
    clothB: "#b8c7e2",
    accent: "#9eb3d9",
    propColor: "#738ab9",
    pose: "sit",
    hairStyle: "hood",
    outfit: "hoodie",
    expression: "sleepy",
    prop: "blanket",
  },
};

function mouthPath(exp: Expression) {
  switch (exp) {
    case "grin":
      return "M49 49 Q60 58 71 49";
    case "sleepy":
      return "M51 52 Q60 54 69 52";
    case "focus":
      return "M50 51 Q60 53 70 51";
    case "calm":
      return "M50 51 H70";
    case "smile":
    default:
      return "M50 50 Q60 56 70 50";
  }
}

function renderHair(style: HairStyle, c: CharacterStyle) {
  switch (style) {
    case "spike":
      return (
        <path
          d="M41 39 L49 29 L56 36 L63 28 L71 35 L79 32 L79 46 L41 46 Z"
          fill={c.hair}
        />
      );
    case "hood":
      return (
        <g>
          <path
            d="M37 44 Q60 18 83 44 Q74 35 60 35 Q46 35 37 44 Z"
            fill={c.clothB}
            opacity="0.9"
          />
          <path d="M42 44 Q60 26 78 44 Z" fill={c.hair} />
        </g>
      );
    case "cap":
      return (
        <g>
          <path d="M40 41 Q60 28 80 41 L80 45 L40 45 Z" fill={c.hair} />
          <path
            d="M79 43 Q87 45 90 50 Q83 49 78 46 Z"
            fill={c.hair}
            opacity="0.9"
          />
        </g>
      );
    case "bob":
      return (
        <path d="M40 39 Q60 26 80 39 L77 50 Q60 55 43 50 Z" fill={c.hair} />
      );
    case "crop":
    default:
      return (
        <path d="M42 40 Q60 30 78 40 L76 46 Q60 41 44 46 Z" fill={c.hair} />
      );
  }
}

function renderOutfit(outfit: Outfit, c: CharacterStyle) {
  switch (outfit) {
    case "robe":
      return (
        <g>
          <path
            d="M42 62 Q60 55 78 62 L83 93 Q60 103 37 93 Z"
            fill={c.clothA}
            stroke={c.line}
            strokeWidth="2"
          />
          <path
            d="M56 63 L64 63 L61 88 L59 88 Z"
            fill={c.clothB}
            opacity="0.85"
          />
        </g>
      );
    case "coat":
      return (
        <g>
          <path
            d="M41 63 Q60 55 79 63 L80 90 Q60 98 40 90 Z"
            fill={c.clothA}
            stroke={c.line}
            strokeWidth="2"
          />
          <path
            d="M45 67 H75"
            stroke={c.clothB}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
      );
    case "tee":
      return (
        <path
          d="M43 64 Q60 57 77 64 L75 88 Q60 95 45 88 Z"
          fill={c.clothA}
          stroke={c.line}
          strokeWidth="2"
        />
      );
    case "hoodie":
      return (
        <g>
          <path
            d="M40 63 Q60 54 80 63 L79 92 Q60 100 41 92 Z"
            fill={c.clothA}
            stroke={c.line}
            strokeWidth="2"
          />
          <circle
            cx="60"
            cy="69"
            r="10"
            fill="none"
            stroke={c.clothB}
            strokeWidth="2"
            opacity="0.8"
          />
        </g>
      );
    case "jacket":
    default:
      return (
        <g>
          <path
            d="M41 63 Q60 55 79 63 L79 90 Q60 98 41 90 Z"
            fill={c.clothA}
            stroke={c.line}
            strokeWidth="2"
          />
          <path d="M52 64 L60 78 L68 64" fill={c.clothB} />
        </g>
      );
  }
}

function renderProp(prop: Prop, c: CharacterStyle) {
  switch (prop) {
    case "laptop":
      return (
        <g>
          <rect
            x="26"
            y="84"
            width="48"
            height="12"
            rx="3"
            fill={c.propColor}
            opacity="0.95"
          />
          <rect
            x="30"
            y="79"
            width="40"
            height="8"
            rx="2"
            fill="#f8fbff"
            stroke={c.line}
            strokeWidth="1.5"
          />
        </g>
      );
    case "mic":
      return (
        <g>
          <circle cx="91" cy="67" r="5" fill={c.propColor} />
          <path
            d="M86 70 L76 79"
            stroke={c.line}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      );
    case "book":
      return (
        <g>
          <rect
            x="80"
            y="68"
            width="22"
            height="18"
            rx="3"
            fill="#ffffff"
            stroke={c.line}
            strokeWidth="1.8"
          />
          <line
            x1="91"
            y1="68"
            x2="91"
            y2="86"
            stroke={c.line}
            strokeWidth="1.8"
          />
        </g>
      );
    case "heart":
      return (
        <path
          d="M92 70 C92 66 96 64 99 67 C102 64 106 66 106 70 C106 75 99 79 99 79 C99 79 92 75 92 70 Z"
          fill={c.accent}
        />
      );
    case "chart":
      return (
        <g>
          <rect
            x="79"
            y="63"
            width="24"
            height="24"
            rx="4"
            fill="#fff"
            stroke={c.line}
            strokeWidth="1.8"
          />
          <rect
            x="83"
            y="75"
            width="3"
            height="8"
            rx="1.5"
            fill={c.propColor}
          />
          <rect x="88" y="70" width="3" height="13" rx="1.5" fill={c.accent} />
          <rect
            x="93"
            y="66"
            width="3"
            height="17"
            rx="1.5"
            fill={c.propColor}
          />
        </g>
      );
    case "pillow":
      return (
        <rect
          x="80"
          y="74"
          width="24"
          height="16"
          rx="6"
          fill={c.accent}
          opacity="0.95"
        />
      );
    case "note":
      return (
        <g>
          <rect
            x="80"
            y="65"
            width="21"
            height="27"
            rx="3"
            fill="#fff"
            stroke={c.line}
            strokeWidth="1.8"
          />
          <line
            x1="84"
            y1="73"
            x2="96"
            y2="73"
            stroke={c.line}
            strokeWidth="1.8"
          />
          <line
            x1="84"
            y1="79"
            x2="96"
            y2="79"
            stroke={c.line}
            strokeWidth="1.8"
          />
        </g>
      );
    case "halo":
      return (
        <ellipse
          cx="90"
          cy="25"
          rx="11"
          ry="4"
          fill="none"
          stroke={c.accent}
          strokeWidth="3"
        />
      );
    case "clipboard":
      return (
        <g>
          <rect
            x="80"
            y="62"
            width="23"
            height="28"
            rx="4"
            fill="#fff"
            stroke={c.line}
            strokeWidth="1.8"
          />
          <rect x="86" y="58" width="11" height="5" rx="2" fill={c.accent} />
        </g>
      );
    case "bolt":
      return (
        <polygon
          points="92,60 84,77 90,77 86,90 102,70 96,70 100,60"
          fill={c.propColor}
        />
      );
    case "bubble":
      return (
        <g>
          <ellipse
            cx="90"
            cy="27"
            rx="14"
            ry="10"
            fill={c.accent}
            opacity="0.9"
          />
          <path d="M82 33 L79 39 L86 34" fill={c.accent} />
        </g>
      );
    case "megaphone":
      return (
        <g>
          <polygon points="81,67 102,60 102,76 81,70" fill={c.propColor} />
          <rect x="76" y="67" width="6" height="11" rx="2" fill={c.line} />
        </g>
      );
    case "blanket":
      return (
        <path
          d="M78 70 Q92 71 101 80 Q98 92 84 92 Q75 88 78 78 Z"
          fill={c.accent}
          opacity="0.95"
        />
      );
    case "none":
    default:
      return null;
  }
}

function renderArms(pose: Pose, c: CharacterStyle) {
  if (pose === "dash") {
    return (
      <g stroke={c.line} strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M44 70 C35 62 33 54 29 48" />
        <path d="M76 69 C84 66 90 63 96 58" />
      </g>
    );
  }

  if (pose === "sit") {
    return (
      <g stroke={c.line} strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M44 70 C38 73 34 79 30 86" />
        <path d="M76 70 C82 73 86 80 90 88" />
      </g>
    );
  }

  if (pose === "lean") {
    return (
      <g stroke={c.line} strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M44 69 C38 60 34 54 30 49" />
        <path d="M76 69 C82 72 86 78 89 84" />
      </g>
    );
  }

  return (
    <g stroke={c.line} strokeWidth="4" strokeLinecap="round" fill="none">
      <path d="M44 69 C37 63 34 58 31 53" />
      <path d="M76 69 C83 63 86 58 89 53" />
    </g>
  );
}

export default function TypeAvatar({
  code,
  small = false,
  large = false,
}: {
  code: LbtiTypeCode;
  small?: boolean;
  large?: boolean;
}) {
  const c = CHARACTERS[code];
  const tilt = c.pose === "dash" ? -8 : c.pose === "lean" ? 6 : 0;

  return (
    <div
      className={`typeAvatar${small ? " typeAvatar--sm" : ""}${large ? " typeAvatar--lg" : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 120" width="100%" height="100%" role="presentation">
        <defs>
          <linearGradient id={`avatar-bg-${code}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c.bgA} />
            <stop offset="100%" stopColor={c.bgB} />
          </linearGradient>
          <linearGradient
            id={`avatar-cloth-${code}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor={c.clothA} />
            <stop offset="100%" stopColor={c.clothB} />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="120"
          height="120"
          fill={`url(#avatar-bg-${code})`}
        />
        <circle cx="95" cy="20" r="15" fill={c.accent} opacity="0.15" />
        <circle cx="22" cy="24" r="9" fill={c.propColor} opacity="0.13" />
        <polygon
          points="0,78 28,58 49,67 22,92"
          fill={c.accent}
          opacity="0.08"
        />
        <polygon
          points="120,54 101,46 86,62 104,74"
          fill={c.propColor}
          opacity="0.09"
        />
        <ellipse cx="60" cy="96" rx="32" ry="9" fill="#1b2b4f" opacity="0.08" />
        <g transform={`translate(60 62) rotate(${tilt}) translate(-60 -62)`}>
          <g>
            {renderOutfit(c.outfit, c)}
            {renderArms(c.pose, c)}
            <ellipse
              cx="50"
              cy={c.pose === "sit" ? "90" : "93"}
              rx="8"
              ry={c.pose === "sit" ? "12" : "10"}
              fill={c.line}
              opacity="0.82"
            />
            <ellipse
              cx="70"
              cy={c.pose === "sit" ? "90" : "93"}
              rx="8"
              ry={c.pose === "sit" ? "12" : "10"}
              fill={c.line}
              opacity="0.82"
            />
          </g>
          <rect
            x="43"
            y="37"
            width="34"
            height="28"
            rx="12"
            fill={c.skin}
            stroke={c.line}
            strokeWidth="2"
          />
          {renderHair(c.hairStyle, c)}
          <circle cx="53" cy="50" r="2.4" fill={c.line} />
          <circle cx="67" cy="50" r="2.4" fill={c.line} />
          {c.expression === "sleepy" ? (
            <path
              d="M49 49 Q53 47 57 49"
              fill="none"
              stroke={c.line}
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : null}
          <path
            d={mouthPath(c.expression)}
            fill="none"
            stroke={c.line}
            strokeWidth="2.3"
            strokeLinecap="round"
          />
          {code === "COOL" ? (
            <g stroke={c.line} strokeWidth="2.2" fill="none">
              <circle cx="53" cy="50" r="5" />
              <circle cx="67" cy="50" r="5" />
              <line x1="58" y1="50" x2="62" y2="50" />
            </g>
          ) : null}
          {renderProp(c.prop, c)}
          {code === "XSWL" ? (
            <path
              d="M39 42 L33 37"
              stroke={c.accent}
              strokeWidth="3"
              strokeLinecap="round"
            />
          ) : null}
          {code === "ZENIT" ? (
            <circle cx="60" cy="27" r="5" fill={c.accent} opacity="0.6" />
          ) : null}
          {code === "RERUN" ? (
            <path
              d="M83 48 Q89 43 95 47"
              fill="none"
              stroke={c.accent}
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          ) : null}
        </g>
      </svg>
    </div>
  );
}
