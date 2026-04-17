import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/main.scss";

export const metadata: Metadata = {
  title: "LBTI - 人间活法类型指标",
  description: "娱乐向的生活行为类型测试",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="wrap">
          <header className="site-header">
            <div className="site-brand">
              <div className="site-brand__title">
                <Link href="/" className="site-brand__home">
                  LBTI
                </Link>
                <span className="site-brand__pill">
                  Life Behaviour Type Indicator
                </span>
              </div>
              <div className="site-brand__sub">
                把“你怎么活”翻译成可分享的类型结果（娱乐向，不做诊断）
              </div>
            </div>
            <nav className="site-nav">
              <Link href="/test" className="kbd">
                开始测试
              </Link>
              <Link href="/types" className="kbd">
                类型一览
              </Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
