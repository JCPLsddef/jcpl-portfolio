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
  speed = 3.5, // Even faster!
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

  // Add extra spaces for seamless wrapping
  const textWithSpaces = `${marqueeText}                    `;

  useEffect(() => {
    if (prefersReducedMotion()) {
      textRef1.current?.setAttribute("startOffset", "0%");
      textRef2.current?.setAttribute("startOffset", "100%"); // Start second copy off-screen
      return;
    }

    const tick = () => {
      offsetRef.current += (direction === "left" ? -speed : speed) * 0.15;
      
      // First copy
      let pct1 = ((offsetRef.current % 100) + 100) % 100;
      textRef1.current?.setAttribute("startOffset", `${pct1}%`);
      
      // Second copy offset by 100% so it only appears when first copy exits
      let pct2 = (((offsetRef.current + 100) % 100) + 100) % 100;
      textRef2.current?.setAttribute("startOffset", `${pct2}%`);
      
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
        
        {/* Premium entrance animation filters */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="shine" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
          <feSpecularLighting result="specOut" surfaceScale="20" specularConstant="0.75" specularExponent="20" lightingColor="#fff">
            <fePointLight x="-5000" y="-10000" z="20000"/>
          </feSpecularLighting>
          <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
        </filter>
      </defs>
      
      {/* Two copies ensure true infinite loop - no gaps */}
      <text
        className={className}
        fontSize="120"
        fontWeight="bold"
        letterSpacing="12"
        xmlSpace="preserve"
        filter="url(#glow)"
        style={{
          textShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)",
          animation: "letterGlow 2s ease-out",
        }}
      >
        <textPath ref={textRef1} href={`#${pathId}`} startOffset="0%">
          {textWithSpaces}
        </textPath>
      </text>
      
      <text
        className={className}
        fontSize="120"
        fontWeight="bold"
        letterSpacing="12"
        xmlSpace="preserve"
        filter="url(#glow)"
        style={{
          textShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)",
          animation: "letterGlow 2s ease-out 0.1s",
        }}
      >
        <textPath ref={textRef2} href={`#${pathId}`} startOffset="100%">
          {textWithSpaces}
        </textPath>
      </text>
    </svg>
  );
}
