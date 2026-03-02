"use client";

import { useEffect, useRef, useId } from "react";
import { prefersReducedMotion } from "@/lib/motion";

interface Props {
  marqueeText: string;
  speed?: number;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
  className?: string;
}

export default function CurvedLoop({
  marqueeText,
  speed = 2.5, // Faster!
  curveAmount = 80,
  direction = "left",
  interactive = false,
  className,
}: Props) {
  const pathId = useId().replace(/:/g, "-");
  const textRef = useRef<SVGTextPathElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Path sits at y=150 so ascenders are fully visible inside the 200px viewBox
  const pathD = `M-200,150 Q720,${150 - curveAmount} 1640,150`;

  // Repeat the text many times with lots of spaces for a seamless infinite loop
  const repeatedText = Array(12)
    .fill(`${marqueeText}        `)
    .join("");

  useEffect(() => {
    if (prefersReducedMotion()) {
      textRef.current?.setAttribute("startOffset", "0%");
      return;
    }

    const tick = () => {
      offsetRef.current += (direction === "left" ? -speed : speed) * 0.12;
      let pct = ((offsetRef.current % 100) + 100) % 100;
      textRef.current?.setAttribute("startOffset", `${pct}%`);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, direction]);

  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      style={{
        width: "100%",
        height: "200px",
        display: "block",
        overflow: "visible",
        pointerEvents: interactive ? "auto" : "none",
      }}
    >
      <defs>
        <path id={pathId} d={pathD} />
      </defs>
      <text
        className={className}
        fontSize="120" // Bigger text!
        fontWeight="bold"
        letterSpacing="12"
        xmlSpace="preserve"
      >
        <textPath ref={textRef} href={`#${pathId}`} startOffset="0%">
          {repeatedText}
        </textPath>
      </text>
    </svg>
  );
}
