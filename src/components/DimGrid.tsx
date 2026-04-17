import type { LbtiDimensionKey } from "@/data/dimensions";
import { DIM_ORDER, DIM_LABEL, DIM_VALUE_TEXT } from "@/data/dimensions";
import type { LbtiLevel } from "@/data/types";

function dimClass(v: LbtiLevel) {
  if (v === 0) return "low";
  if (v === 1) return "mid";
  return "high";
}

export default function DimGrid({ dims }: { dims: Record<LbtiDimensionKey, LbtiLevel> }) {
  return (
    <div className="dimGrid">
      {DIM_ORDER.map((dKey) => {
        const v = dims[dKey];
        return (
          <div key={dKey} className="dim">
            <div className="k">
              {dKey} · {DIM_LABEL[dKey] || ""}
            </div>
            <div className={`v ${dimClass(v)}`}>
              {DIM_VALUE_TEXT[v]}（{v === 0 ? "低" : v === 1 ? "中" : "高"}）
            </div>
          </div>
        );
      })}
    </div>
  );
}

