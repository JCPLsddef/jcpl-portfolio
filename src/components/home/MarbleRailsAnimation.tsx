"use client";

import { useMemo } from "react";
import {
  RAIL_COLORS,
  RAIL_OPACITY,
  RAIL_GLOW,
  DIMENSIONS,
  BALL,
  TRAIL,
  PROGRESS_SEGMENTS,
} from "@/lib/marbleConfig";

const { width: W, height: H, railGap } = DIMENSIONS;
const left = 60;
const right = 540;
const rail1Y = 70;
const rail2Y = 70 + railGap;
const rail3Y = 70 + railGap * 2;

const {
  RAIL1_END,
  DWELL1_END,
  DROP1_END,
  RAIL2_END,
  DWELL2_END,
  DROP2_END,
  RAIL3_END,
} = PROGRESS_SEGMENTS;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/* easeOut: decelerate at end of roll */
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/* subtle bounce: slight overshoot at bottom for drop settle */
function dropBounce(t: number): number {
  if (t < 0.85) return t / 0.85;
  const overshoot = (t - 0.85) / 0.15;
  return 1 + 0.04 * Math.sin(overshoot * Math.PI);
}

function progressToPosition(progress: number): { x: number; y: number } {
  if (progress <= 0) return { x: left, y: rail1Y };
  if (progress >= 1) return { x: right, y: rail3Y };

  if (progress < RAIL1_END) {
    const t = progress / RAIL1_END;
    const eased = easeOut(t);
    return { x: lerp(left, right, eased), y: rail1Y };
  }
  if (progress < DWELL1_END) {
    return { x: right, y: rail1Y };
  }
  if (progress < DROP1_END) {
    const t = (progress - DWELL1_END) / (DROP1_END - DWELL1_END);
    const eased = dropBounce(t);
    return { x: right, y: lerp(rail1Y, rail2Y, eased) };
  }
  if (progress < RAIL2_END) {
    const t = (progress - DROP1_END) / (RAIL2_END - DROP1_END);
    const eased = easeOut(t);
    return { x: lerp(right, left, eased), y: rail2Y };
  }
  if (progress < DWELL2_END) {
    return { x: left, y: rail2Y };
  }
  if (progress < DROP2_END) {
    const t = (progress - DWELL2_END) / (DROP2_END - DWELL2_END);
    const eased = dropBounce(t);
    return { x: left, y: lerp(rail2Y, rail3Y, eased) };
  }
  if (progress < RAIL3_END) {
    const t = (progress - DROP2_END) / (RAIL3_END - DROP2_END);
    const eased = easeOut(t);
    return { x: lerp(left, right, eased), y: rail3Y };
  }
  return { x: right, y: rail3Y };
}

function progressToActiveRail(progress: number): number | null {
  if (progress < RAIL1_END) return 0;
  if (progress < DROP1_END) return null;
  if (progress < RAIL2_END) return 1;
  if (progress < DROP2_END) return null;
  if (progress <= 1) return 2;
  return 2;
}

interface MarbleRailsAnimationProps {
  progress: number;
  reduced: boolean;
}

export default function MarbleRailsAnimation({ progress, reduced }: MarbleRailsAnimationProps) {
  const pos = useMemo(() => progressToPosition(progress), [progress]);
  const activeRailIndex = useMemo(() => progressToActiveRail(progress), [progress]);

  const trailPositions = useMemo(() => {
    if (reduced || progress <= 0) return [];
    const samples: { x: number; y: number }[] = [];
    const count = TRAIL.count;
    for (let i = count; i >= 0; i--) {
      const p = Math.max(0, progress - (i * 0.012));
      samples.push(progressToPosition(p));
    }
    return samples;
  }, [progress, reduced]);

  if (reduced) {
    return (
      <div className="relative w-full" style={{ minHeight: H }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          className="w-full h-auto max-w-2xl mx-auto block"
        >
          <defs>
            <filter id="marble-rail-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevBase} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="marble-rail-glow-violet" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevBase} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="marble-rail-glow-emerald" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevBase} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="marble-ball-gloss" cx="32%" cy="32%" r="50%">
              <stop offset="0%" stopColor={BALL.glossHighlight} stopOpacity="1" />
              <stop offset="55%" stopColor={BALL.baseColor} stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(248,248,252,0.98)" stopOpacity="1" />
            </radialGradient>
          </defs>
          <Rail
            line={{ x1: left, y1: rail1Y, x2: right, y2: rail1Y }}
            color={RAIL_COLORS.blue}
            filterBase="url(#marble-rail-glow-blue)"
            filterActive="url(#marble-rail-glow-blue-active)"
            active={false}
          />
          <Rail
            line={{ x1: left, y1: rail2Y, x2: right, y2: rail2Y }}
            color={RAIL_COLORS.violet}
            filterBase="url(#marble-rail-glow-violet)"
            filterActive="url(#marble-rail-glow-violet-active)"
            active={false}
          />
          <Rail
            line={{ x1: left, y1: rail3Y, x2: right, y2: rail3Y }}
            color={RAIL_COLORS.emerald}
            filterBase="url(#marble-rail-glow-emerald)"
            filterActive="url(#marble-rail-glow-emerald-active)"
            active={false}
          />
          <g
            style={{
              transformOrigin: "0 0",
              transform: `translate(${right}px, ${rail3Y}px)`,
            }}
          >
            <circle
              cx={0}
              cy={0}
              r={BALL.radius}
              fill="url(#marble-ball-gloss)"
              opacity={0.92}
            />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ minHeight: H }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        className="w-full h-auto max-w-2xl mx-auto block"
      >
        <defs>
          <filter id="marble-rail-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevBase} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-blue-active" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevActive} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-violet" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevBase} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-violet-active" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevActive} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-emerald" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevBase} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-rail-glow-emerald-active" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={RAIL_GLOW.blurStdDevActive} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="marble-ball-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="marble-ball-gloss" cx="32%" cy="32%" r="50%">
            <stop offset="0%" stopColor={BALL.glossHighlight} stopOpacity="1" />
            <stop offset="55%" stopColor={BALL.baseColor} stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(248,248,252,0.98)" stopOpacity="1" />
          </radialGradient>
        </defs>

        <Rail
          line={{ x1: left, y1: rail1Y, x2: right, y2: rail1Y }}
          color={RAIL_COLORS.blue}
          filterBase="url(#marble-rail-glow-blue)"
          filterActive="url(#marble-rail-glow-blue-active)"
          active={activeRailIndex === 0}
        />
        <Rail
          line={{ x1: left, y1: rail2Y, x2: right, y2: rail2Y }}
          color={RAIL_COLORS.violet}
          filterBase="url(#marble-rail-glow-violet)"
          filterActive="url(#marble-rail-glow-violet-active)"
          active={activeRailIndex === 1}
        />
        <Rail
          line={{ x1: left, y1: rail3Y, x2: right, y2: rail3Y }}
          color={RAIL_COLORS.emerald}
          filterBase="url(#marble-rail-glow-emerald)"
          filterActive="url(#marble-rail-glow-emerald-active)"
          active={activeRailIndex === 2}
        />

        {trailPositions.map((p, i) => {
          const opacity =
            TRAIL.baseOpacity * Math.pow(TRAIL.fadeFactor, trailPositions.length - 1 - i);
          return (
            <circle
              key={`trail-${i}-${p.x.toFixed(0)}-${p.y.toFixed(0)}`}
              cx={p.x}
              cy={p.y}
              r={BALL.radius * 0.55}
              fill="rgba(255,255,255,0.65)"
              opacity={opacity}
              style={{ filter: "blur(3px)" }}
            />
          );
        })}

        <g
          style={{
            transformOrigin: "0 0",
            transform: `translate(${pos.x}px, ${pos.y}px)`,
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
  filterBase,
  filterActive,
  active,
}: {
  line: { x1: number; y1: number; x2: number; y2: number };
  color: string;
  filterBase: string;
  filterActive: string;
  active?: boolean;
}) {
  const glowOpacity = active ? RAIL_OPACITY.active : RAIL_OPACITY.base;
  const lineOpacity = active ? RAIL_OPACITY.centerLineActive : RAIL_OPACITY.centerLine;
  const strokeWidth = active ? RAIL_GLOW.strokeWidthActive : RAIL_GLOW.strokeWidthBase;
  const filter = active ? filterActive : filterBase;

  return (
    <g>
      {/* Sharp center core */}
      <line
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity={lineOpacity}
        fill="none"
        style={{ transition: "opacity 0.4s ease" }}
      />
      {/* Soft outer glow */}
      <line
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity={glowOpacity}
        fill="none"
        style={{ filter, transition: "opacity 0.4s ease" }}
      />
    </g>
  );
}
