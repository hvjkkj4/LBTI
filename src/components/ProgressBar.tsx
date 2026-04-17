"use client";

export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = total <= 1 ? 0 : (current / (total - 1)) * 100;
  return (
    <div className="progress" aria-label="进度条">
      <div className="bar" style={{ width: `${pct}%` }} />
    </div>
  );
}

