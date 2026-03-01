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
  speed = 0.4,
  curveAmount = 80,
  direction = "left",
  interactive = false,
  className,
}: Props) {
  const pathId = useId().replace(/:/g, "-");
  const textRef1 = useRef<SVGTextPathElement>(null);
  const textRef2 = useRef<SVGTextPathElement>(null);
  const textRef3 = useRef<SVGTextPathElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  const pathD = `M-100,100 Q500,${100 - curveAmount} 1540,100`;

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const refs = [textRef1, textRef2, textRef3];
    // Stagger the three copies evenly across the loop
    const initialOffsets = [0, 33.33, 66.66];

    const tick = () => {
      const delta = (direction === "left" ? -speed : speed) * 0.06;
      offsetRef.current += delta;

      refs.forEach((ref, idx) => {
        if (!ref.current) return;
        let pct = initialOffsets[idx] + offsetRef.current;
        // Wrap within [0, 100)
        pct = ((pct % 100) + 100) % 100;
        ref.current.setAttribute("startOffset", `${pct}%`);
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, direction]);

  if (!interactive) {
    return (
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{
          width: "100%",
          height: "160px",
          display: "block",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <defs>
          <path id={pathId} d={pathD} />
        </defs>
        <text className={className}>
          <textPath ref={textRef1} href={`#${pathId}`} startOffset="0%">
            {marqueeText}
          </textPath>
          <textPath ref={textRef2} href={`#${pathId}`} startOffset="33.33%">
            {marqueeText}
          </textPath>
          <textPath ref={textRef3} href={`#${pathId}`} startOffset="66.66%">
            {marqueeText}
          </textPath>
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      style={{
        width: "100%",
        height: "160px",
        display: "block",
        overflow: "hidden",
      }}
    >
      <defs>
        <path id={pathId} d={pathD} />
      </defs>
      <text className={className}>
        <textPath ref={textRef1} href={`#${pathId}`} startOffset="0%">
          {marqueeText}
        </textPath>
        <textPath ref={textRef2} href={`#${pathId}`} startOffset="33.33%">
          {marqueeText}
        </textPath>
        <textPath ref={textRef3} href={`#${pathId}`} startOffset="66.66%">
          {marqueeText}
        </textPath>
      </text>
    </svg>
  );
}
