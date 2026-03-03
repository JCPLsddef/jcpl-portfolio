/**
 * Marble Rails Animation — tunable constants
 * Tweak here for colors, timing, spacing, and rail dimensions.
 */

/* Rail colors (soft blue, purple, emerald) */
export const RAIL_COLORS = {
  blue: "#60A5FA",
  purple: "#A78BFA",
  emerald: "#34D399",
} as const;

export const RAIL_OPACITY = {
  base: 0.5,
  active: 1,
  centerLine: 0.9,
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
  ballRadius: 12,
  trailLength: 6,
} as const;

/* Ball appearance */
export const BALL = {
  radius: 12,
  glossHighlight: "rgba(255,255,255,0.95)",
  baseColor: "rgba(255,255,255,0.98)",
  glowOpacity: 0.4,
} as const;

/* Trail appearance */
export const TRAIL = {
  count: 6,
  baseOpacity: 0.35,
  fadeFactor: 0.65,
} as const;
