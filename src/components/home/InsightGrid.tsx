const insights = [
  {
    title: "行为维度",
    text: "结果包含 15 个维度，帮助你看到自己在关系、行动、情绪上的常见偏好。",
  },
  {
    title: "结果解读",
    text: "每个类型都包含证据说明、微调建议和反思问题，方便你快速落地。",
  },
  {
    title: "轻量分享",
    text: "测试完成后可直接分享结果卡，把你的风格标签发给朋友一起讨论。",
  },
];

export default function InsightGrid() {
  return (
    <section className="home-insights">
      {insights.map((item) => (
        <article key={item.title} className="home-insights__card">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}
