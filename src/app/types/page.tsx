import Link from "next/link";
import { LBti_TYPES } from "@/data/types";
import TypeAvatar from "@/components/TypeAvatar";

export default function TypesPage() {
  return (
    <main className="card">
      <div
        className="row"
        style={{ justifyContent: "space-between", marginBottom: 12 }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: 22 }}>类型一览</h1>
          <p
            style={{
              marginTop: 8,
              color: "var(--muted)",
              lineHeight: 1.7,
              fontSize: 14,
            }}
          >
            每个类型都是“生活策略镜子”，不是诊断结果。你可以先浏览，再去答题对号入座。
          </p>
        </div>
        <div className="row">
          <Link href="/test">
            <button type="button">去答题</button>
          </Link>
        </div>
      </div>

      <div className="types-grid">
        {LBti_TYPES.map((t) => (
          <div key={t.code} className="mini">
            <div className="typeCardTop">
              <TypeAvatar code={t.code} small />
              <div>
                <div className="typeEntry__header">
                  <div className="typeEntry__meta">
                    <div className="typeEntry__code">{t.displayCode}</div>
                    <div className="typeEntry__name">{t.name}</div>
                  </div>
                </div>
                <p className="typeEntry__motto">{t.motto}</p>
              </div>
            </div>
            <p
              style={{
                marginTop: 8,
                color: "var(--muted)",
                fontSize: 13,
                lineHeight: 1.6,
              }}
            >
              {t.tips}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
