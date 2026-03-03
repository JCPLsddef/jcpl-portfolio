"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import {
  RAIL_COLORS,
  RAIL_OPACITY,
  TIMING,
  DIMENSIONS,
  BALL,
  TRAIL,
} from "@/lib/marbleConfig";

const { width: W, height: H, railGap } = DIMENSIONS;
const left = 60;
const right = 540;
const rail1Y = 70;
const rail2Y = 70 + railGap;
const rail3Y = 70 + railGap * 2;

export default function MarbleRailsAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<SVGGElement>(null);
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const inViewRef = useRef(true);
  const [trailPositions, setTrailPositions] = useState<{ x: number; y: number }[]>([]);
  const [activeRailIndex, setActiveRailIndex] = useState<number | null>(null);
  const rafRef = useRef<number>(0);

  const reduced = usePrefersReducedMotionSafe();

  useEffect(() => {
    if (reduced || !ballRef.current) return;

    const el = ballRef.current;
    gsap.set(el, { x: left, y: rail1Y });

    const tl = gsap.timeline({
      repeat: -1,
      paused: true,
      onRepeat: () => {
        trailRef.current = [];
      },
    });

    tl.to(el, {
      x: right,
      y: rail1Y,
      duration: TIMING.rollDuration,
      ease: "power2.inOut",
    })
      .to({}, { duration: TIMING.pauseAfterRoll })
      .to(el, {
        x: right,
        y: rail2Y,
        duration: TIMING.dropDuration,
        ease: "bounce.out",
      })
      .to(el, {
        x: left,
        y: rail2Y,
        duration: TIMING.rollDuration,
        ease: "power2.inOut",
      })
      .to({}, { duration: TIMING.pauseAfterRoll })
      .to(el, {
        x: left,
        y: rail3Y,
        duration: TIMING.dropDuration,
        ease: "bounce.out",
      })
      .to(el, {
        x: right,
        y: rail3Y,
        duration: TIMING.rollDuration,
        ease: "power2.inOut",
      })
      .to({}, { duration: TIMING.pauseAfterRoll })
      .to(el, {
        x: left,
        y: rail1Y,
        duration: TIMING.resetDuration,
        ease: "power2.inOut",
      });

    timelineRef.current = tl;

    const io = new IntersectionObserver(
      (entries) => {
        const isInView = entries[0]?.isIntersecting ?? false;
        inViewRef.current = isInView;
        if (isInView) tl.play();
        else tl.pause();
      },
      { root: null, rootMargin: "-5% 0px -5% 0px", threshold: 0 }
    );

    if (sectionRef.current) io.observe(sectionRef.current);
    tl.play();

    return () => {
      io.disconnect();
      tl.kill();
      timelineRef.current = null;
    };
  }, [reduced]);

  /* Trail: sample ball position and push to trail buffer */
  useEffect(() => {
    if (reduced) return;

    const updateTrail = () => {
      rafRef.current = requestAnimationFrame(updateTrail);
      const el = ballRef.current;
      if (!el || !inViewRef.current) return;

      const x = gsap.getProperty(el, "x") as number;
      const y = gsap.getProperty(el, "y") as number;

      const tolerance = 25;
      if (Math.abs(y - rail1Y) < tolerance) setActiveRailIndex(0);
      else if (Math.abs(y - rail2Y) < tolerance) setActiveRailIndex(1);
      else if (Math.abs(y - rail3Y) < tolerance) setActiveRailIndex(2);
      else setActiveRailIndex(null);

      const trail = trailRef.current;
      const last = trail[trail.length - 1];
      const dist = last ? Math.hypot(x - last.x, y - last.y) : 10;
      if (dist > 3) {
        trail.push({ x, y });
        if (trail.length > TRAIL.count) trail.shift();
        setTrailPositions([...trail]);
      }
    };

    rafRef.current = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reduced]);

  return (
    <div ref={sectionRef} className="relative w-full" style={{ minHeight: H }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        className="w-full h-auto max-w-2xl mx-auto block"
      >
        <defs>
          <filter id="marble-rail-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-purple" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-emerald" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-ball-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="marble-ball-gloss" cx="35%" cy="35%" r="50%">
            <stop offset="0%" stopColor={BALL.glossHighlight} stopOpacity="1" />
            <stop offset="70%" stopColor={BALL.baseColor} stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(240,240,245,0.98)" stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* Rails */}
        <Rail
          line={{ x1: left, y1: rail1Y, x2: right, y2: rail1Y }}
          color={RAIL_COLORS.blue}
          filter="url(#marble-rail-glow-blue)"
          active={activeRailIndex === 0}
        />
        <Rail
          line={{ x1: left, y1: rail2Y, x2: right, y2: rail2Y }}
          color={RAIL_COLORS.purple}
          filter="url(#marble-rail-glow-purple)"
          active={activeRailIndex === 1}
        />
        <Rail
          line={{ x1: left, y1: rail3Y, x2: right, y2: rail3Y }}
          color={RAIL_COLORS.emerald}
          filter="url(#marble-rail-glow-emerald)"
          active={activeRailIndex === 2}
        />

        {/* Trail */}
        {!reduced &&
          trailPositions.map((p, i) => {
            const opacity =
              TRAIL.baseOpacity * Math.pow(TRAIL.fadeFactor, trailPositions.length - 1 - i);
            return (
              <circle
                key={`trail-${i}-${p.x.toFixed(0)}-${p.y.toFixed(0)}`}
                cx={p.x}
                cy={p.y}
                r={BALL.radius * 0.6}
                fill="rgba(255,255,255,0.6)"
                opacity={opacity}
                style={{ filter: "blur(2px)" }}
              />
            );
          })}

        {/* Ball */}
        <g
          ref={ballRef}
          style={{
            transformOrigin: "0 0",
            transform: `translate(${left}px, ${rail1Y}px)`,
          }}
        >
          <circle
            cx={0}
            cy={0}
            r={BALL.radius}
            fill="url(#marble-ball-gloss)"
            filter="url(#marble-ball-glow)"
          />
        </g>
      </svg>
    </div>
  );
}

function Rail({
  line,
  color,
  filter,
  active,
}: {
  line: { x1: number; y1: number; x2: number; y2: number };
  color: string;
  filter: string;
  active?: boolean;
}) {
  const glowOpacity = active ? RAIL_OPACITY.active : RAIL_OPACITY.base;
  const lineOpacity = active ? 1 : RAIL_OPACITY.centerLine;
  return (
    <g>
      {/* Center line - 2px solid, 90% opacity (brighter when active) */}
      <line
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity={lineOpacity}
        fill="none"
        style={{ transition: "opacity 0.3s ease" }}
      />
      {/* Glow layer - base 40-60%, brightens when active */}
      <line
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke={color}
        strokeWidth="24"
        strokeLinecap="round"
        opacity={glowOpacity}
        fill="none"
        style={{ filter, transition: "opacity 0.3s ease" }}
      />
    </g>
  );
}
