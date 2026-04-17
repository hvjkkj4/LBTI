import Link from "next/link";
import TypeCarousel from "@/components/home/TypeCarousel";

export default function HeroSection() {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <p className="home-hero__eyebrow">LBTI · 生活人格测验</p>
        <h1>用更贴切的方式，测测你的行为风格</h1>
        <p className="home-hero__desc">
          LBTI 只关心真实生活场景：你怎么扛压力、怎么处理关系、怎么推进事情，
          以及你在关键时刻会怎么选。
        </p>

        <div className="home-hero__actions row">
          <Link href="/test" className="btn-primary">
            开始测试
          </Link>
          <Link
            href="/result"
            className="btn-secondary"
            title="示例结果（仅展示）"
          >
            查看示例结果
          </Link>
        </div>

        <ul className="home-hero__meta">
          <li>31 道题，约 6 分钟</li>
          <li>移动端与桌面端都可用</li>
          <li>娱乐向测试，不做诊断</li>
        </ul>
      </div>

      <div className="home-hero__visual">
        <div className="orb orb--1" />
        <div className="orb orb--2" />
        <TypeCarousel />
      </div>
    </section>
  );
}
