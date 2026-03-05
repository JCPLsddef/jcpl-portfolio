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
  speed = 16.0,
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

  // Repeat the text MANY times for a true infinite loop
  const repeatedText = Array(30)
    .fill(`${marqueeText}     `)
    .join("");

  useEffect(() => {
    if (prefersReducedMotion()) {
      textRef.current?.setAttribute("startOffset", "0%");
      return;
    }

    const tick = () => {
      offsetRef.current += (direction === "left" ? -speed : speed) * 0.5;
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
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <text
        className={className}
        fontSize="180"
        fontWeight="bold"
        letterSpacing="12"
        xmlSpace="preserve"
        filter="url(#glow)"
        style={{
          textShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)",
          animation: "letterGlow 2s ease-out",
        }}
      >
        <textPath ref={textRef} href={`#${pathId}`} startOffset="0%">
          {repeatedText}
        </textPath>
      </text>
    </svg>
  );
}
