"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import type { ServiceBgKey } from "@/lib/content";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";

const ServicesShaderInner = dynamic(
  () => import("./ServicesShaderInner"),
  { ssr: false }
);

const SHADER_CONFIGS: Record<
  ServiceBgKey,
  { color1: string; color2: string; color3: string }
> = {
  website: { color1: "#1A0F08", color2: "#7C2D12", color3: "#F97316" },
  seo: { color1: "#041A14", color2: "#0E5F4B", color3: "#22C55E" },
  geo: { color1: "#0F0616", color2: "#4C1D95", color3: "#A855F7" },
  copy: { color1: "#1A1405", color2: "#1A1405", color3: "#FACC15" },
  googleAds: { color1: "#050B1A", color2: "#1E3A8A", color3: "#3B82F6" },
};

const TRANSITION = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

interface Props {
  bgKey: ServiceBgKey;
}

export default function ServicesShaderBackground({ bgKey }: Props) {
  const reducedMotion = usePrefersReducedMotionSafe();
  const colors = SHADER_CONFIGS[bgKey];

  if (reducedMotion) {
    return (
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `linear-gradient(180deg, ${colors.color1} 0%, ${colors.color2} 50%, ${colors.color3} 100%)`,
          opacity: 0.3,
        }}
        aria-hidden
      />
    );
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={bgKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={TRANSITION}
          className="absolute inset-0"
        >
          <ServicesShaderInner bgKey={bgKey} />
        </motion.div>
      </AnimatePresence>
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden />
    </div>
  );
}
