"use client";

import { useEffect, useMemo, useState } from "react";
import { LBti_TYPES } from "@/data/types";
import TypeAvatar from "@/components/TypeAvatar";

const INTERVAL = 3500;

export default function TypeCarousel() {
  const [index, setIndex] = useState(8);
  const [paused, setPaused] = useState(false);

  const current = LBti_TYPES[index];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % LBti_TYPES.length);
    }, INTERVAL);

    return () => window.clearInterval(timer);
  }, [paused]);

  const progress = useMemo(
    () => `${index + 1} / ${LBti_TYPES.length}`,
    [index],
  );

  function goTo(nextIndex: number) {
    const normalized = (nextIndex + LBti_TYPES.length) % LBti_TYPES.length;
    setIndex(normalized);
  }

  return (
    <div
      className="typeCarousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="typeCarousel__frame">
        <div className="typeCarousel__inner">
          <div className="typeCarousel__art">
            <TypeAvatar code={current.code} />
          </div>
          <div className="typeCarousel__copy">
            <div className="typeCarousel__meta">
              <span className="typeCarousel__index">{progress}</span>
            </div>
            <div className="typeCarousel__titleRow">
              <span className="typeCarousel__code">{current.displayCode}</span>
              <span className="typeCarousel__name">{current.name}</span>
            </div>
            <p className="typeCarousel__motto">{current.motto}</p>
          </div>
        </div>

        <div className="typeCarousel__controls">
          <button
            type="button"
            className="typeCarousel__btn"
            onClick={() => goTo(index - 1)}
            aria-label="上一个人格"
          >
            ‹
          </button>
          <div className="typeCarousel__dots" aria-label="人格轮播分页">
            {LBti_TYPES.map((item, dotIndex) => (
              <button
                key={item.code}
                type="button"
                className={`typeCarousel__dot${dotIndex === index ? " is-active" : ""}`}
                onClick={() => goTo(dotIndex)}
                aria-label={`切换到 ${item.displayCode}`}
                aria-pressed={dotIndex === index}
              />
            ))}
          </div>
          <button
            type="button"
            className="typeCarousel__btn"
            onClick={() => goTo(index + 1)}
            aria-label="下一个人格"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
