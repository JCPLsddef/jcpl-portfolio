/**
 * Marble Rails Animation — tunable constants
 * Tweak here for colors, timing, spacing, and rail dimensions.
 */

/* Rail colors (refined soft blue, violet, emerald) */
export const RAIL_COLORS = {
  blue: "#5B9BED",
  violet: "#9B8BC6",
  emerald: "#2EBD8A",
} as const;

export const RAIL_OPACITY = {
  base: 0.42,
  active: 1,
  centerLine: 0.7,
  centerLineActive: 1,
} as const;

export const RAIL_GLOW = {
  strokeWidthBase: 20,
  strokeWidthActive: 28,
  blurStdDevBase: 4,
  blurStdDevActive: 6,
} as const;

/* Timing (seconds) */
export const TIMING = {
  rollDuration: 1.5,
  pauseAfterRoll: 0.3,
  dropDuration: 0.5,
  resetDuration: 0.6,
} as const;

/* SVG viewBox and rail geometry */
export const DIMENSIONS = {
  width: 600,
  height: 280,
  railGap: 80,
  railLength: 480,
  ballRadius: 15,
  trailLength: 6,
} as const;

/* Ball appearance */
export const BALL = {
  radius: 15,
  glossHighlight: "rgba(255,255,255,0.98)",
  baseColor: "#FFFFFF",
  glowOpacity: 0.35,
  ambientGlow: true,
} as const;

/* Trail appearance */
export const TRAIL = {
  count: 6,
  baseOpacity: 0.28,
  fadeFactor: 0.6,
} as const;

/* Scroll pin duration (vh) */
export const SCROLL = {
  PIN_DURATION_DESKTOP: 280,
  PIN_DURATION_MOBILE: 100,
  STEP_THRESHOLDS: [0.1, 0.38, 0.68] as const,
} as const;

/* Progress segment boundaries (0–1)
 * Phase: 1.Rail1 roll, 2.Dwell1, 3.Drop1, 4.Rail2 roll, 5.Dwell2, 6.Drop2, 7.Rail3 roll, 8.Dwell3
 */
export const PROGRESS_SEGMENTS = {
  RAIL1_END: 0.22,
  DWELL1_END: 0.28,
  DROP1_END: 0.32,
  RAIL2_END: 0.55,
  DWELL2_END: 0.61,
  DROP2_END: 0.65,
  RAIL3_END: 0.88,
} as const;
