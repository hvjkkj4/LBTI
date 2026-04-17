"use client";

import type { MouseEventHandler } from "react";

export default function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button type="button" className="opt" aria-pressed={selected ? "true" : "false"} onClick={onClick}>
      {label}
    </button>
  );
}

