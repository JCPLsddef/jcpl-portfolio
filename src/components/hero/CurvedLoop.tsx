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
  speed = 1.2,
  curveAmount = 80,
  direction = "left",
  interactive = false,
  className,
}: Props) {
  const pathId = useId().replace(/:/g, "-");
  const textRef1 = useRef<SVGTextPathElement>(null);
  const textRef2 = useRef<SVGTextPathElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Path sits at y=150 so ascenders are fully visible inside the 200px viewBox
  const pathD = `M-200,150 Q720,${150 - curveAmount} 1640,150`;

  useEffect(() => {
    if (prefersReducedMotion()) {
      textRef1.current?.setAttribute("startOffset", "0%");
      textRef2.current?.setAttribute("startOffset", "50%");
      return;
    }

    const refs = [textRef1, textRef2];

    const tick = () => {
      // speed unit = % per frame  (at 60fps, speed=1.2 → ~72% per sec → ~1.4s full loop)
      offsetRef.current += (direction === "left" ? -speed : speed) * 0.12;

      refs.forEach((ref, idx) => {
        if (!ref.current) return;
        // Space the 2 copies exactly 50% apart so they never overlap
        let pct = idx * 50 + offsetRef.current;
        pct = ((pct % 100) + 100) % 100;
        ref.current.setAttribute("startOffset", `${pct}%`);
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, direction]);

  const svgContent = (
    <>
      <defs>
        <path id={pathId} d={pathD} />
      </defs>
      {/* fontSize + letterSpacing keep words readable and well-spaced */}
      <text
        className={className}
        fontSize="72"
        fontWeight="bold"
        letterSpacing="10"
        xmlSpace="preserve"
      >
        <textPath ref={textRef1} href={`#${pathId}`} startOffset="0%">
          {marqueeText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </textPath>
        <textPath ref={textRef2} href={`#${pathId}`} startOffset="50%">
          {marqueeText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </textPath>
      </text>
    </>
  );

  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      style={{
        width: "100%",
        height: "200px",
        display: "block",
        // overflow visible so ascenders aren't clipped
        overflow: "visible",
        pointerEvents: interactive ? "auto" : "none",
      }}
    >
      {svgContent}
    </svg>
  );
}
