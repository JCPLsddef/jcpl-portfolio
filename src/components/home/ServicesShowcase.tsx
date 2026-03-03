"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  servicesShowcaseContent,
  type ServiceItem,
} from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServicesShaderBackground from "./ServicesShaderBackground";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { cn } from "@/lib/utils";

const IMAGE_TRANSITION = { duration: 0.38, ease: [0.16, 1, 0.3, 1] as const };
const BG_GLOW_TRANSITION = { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const };
const EASE = [0.16, 1, 0.3, 1] as const;

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

interface ServiceTabCardProps {
  title: string;
  subtitle?: string;
  accentColor: string;
  hoverAccentColor: string;
  isActive: boolean;
  index: number;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  reducedMotion: boolean;
}

function ServiceTabCard({
  title,
  subtitle,
  accentColor,
  hoverAccentColor,
  isActive,
  index,
  onClick,
  onKeyDown,
  reducedMotion,
}: ServiceTabCardProps) {
  const rgb = (() => {
    const hex = accentColor.replace("#", "");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `${r},${g},${b}`;
  })();

  const hoverRgb = (() => {
    const hex = hoverAccentColor.replace("#", "");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `${r},${g},${b}`;
  })();

  return (
    <motion.button
      type="button"
      role="tab"
      tabIndex={isActive ? 0 : -1}
      aria-selected={isActive}
      id={`services-tab-${index}`}
      aria-controls={`services-panel-${index}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      whileHover={reducedMotion ? undefined : { y: -2 }}
      className={cn(
        "group relative w-full text-left rounded-[10px] border transition-all duration-200",
        "min-h-[120px] md:min-h-[157px] p-5 flex flex-col justify-center pr-10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-sv-base",
        isActive
          ? "bg-[#0f2640]"
          : "border-[rgba(255,255,255,0.08)] bg-sv-surface/80"
      )}
      style={
        isActive
          ? {
              borderColor: `${accentColor}99`,
              boxShadow: `0 0 28px rgba(${rgb},0.1)`,
              ["--tw-ring-color" as string]: `${accentColor}80`,
            }
          : {
              ["--tw-ring-color" as string]: `${hoverAccentColor}80`,
            }
      }
    >
      {/* Hover border tint for inactive cards - overlay ring */}
      {!isActive && (
        <span
          className="absolute -inset-px rounded-[10px] border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          style={{
            borderColor: `rgba(${hoverRgb},0.35)`,
          }}
          aria-hidden
        />
      )}
      {/* Top strip (active only) */}
      <span
        className={cn(
          "absolute left-0 right-0 top-0 h-[3px] rounded-t-[10px] transition-all duration-200",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
        )}
        style={{ backgroundColor: hoverAccentColor }}
      />
      <h3
        className={cn(
          "text-base md:text-lg font-semibold text-white transition-colors relative z-[1]",
          isActive && "text-white"
        )}
      >
        {title}
      </h3>
      {subtitle && (
        <p className="mt-1 text-sm text-sv-text-sub relative z-[1]">
          {subtitle}
        </p>
      )}
      {/* Circular indicator dot (active only, anchored inside card) */}
      {isActive && (
        <span
          className="absolute right-5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full z-[1]"
          style={{ backgroundColor: accentColor }}
          aria-hidden
        />
      )}
    </motion.button>
  );
}

const sectionVariants = {
  hidden: (reduced: boolean) =>
    reduced
      ? { opacity: 0 }
      : { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: (reduced: boolean) =>
    reduced
      ? { opacity: 1 }
      : { opacity: 1, y: 0, filter: "blur(0px)" },
};

const leftCopyVariants = {
  hidden: (reduced: boolean) =>
    reduced ? { opacity: 0 } : { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: (reduced: boolean) =>
    reduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" },
};

const imageStageVariants = {
  hidden: (reduced: boolean) =>
    reduced
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.965, y: 18, filter: "blur(10px)" },
  visible: (reduced: boolean) =>
    reduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
};

const cardVariants = {
  hidden: (reduced: boolean) =>
    reduced ? { opacity: 0 } : { opacity: 0, x: 22, y: 10 },
  visible: (reduced: boolean) =>
    reduced ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 },
};

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotionSafe();
  const { services } = servicesShowcaseContent;
  const activeService = services[activeIndex] as ServiceItem;
  const sectionTintColor = hexToRgba(activeService.accentColor, 0.08);
  const panelGlow = hexToRgba(activeService.accentColor, 0.1);

  const imageVariants = reducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 8, scale: 1.01 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -6, scale: 0.995 },
      };

  const handleKeyDown = (index: number) => (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveIndex(index);
      return;
    }
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, services.length - 1));
      return;
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    services.forEach((s) => {
      const img = new window.Image();
      img.src = s.imageUrl;
    });
  }, [services]);

  const imageScale = activeService.imageScale ?? 1;
  const imagePosition = activeService.imagePosition ?? "center";

  return (
    <SectionWrapper
      id="services"
      variant="alt"
      className={cn(
        "[&>.container]:!max-w-[1400px]",
        "relative overflow-hidden"
      )}
    >
      {/* Shader background layer */}
      <ServicesShaderBackground bgKey={activeService.bgKey} />

      {/* Subtle section tint overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[1]"
        animate={{ backgroundColor: sectionTintColor }}
        transition={BG_GLOW_TRANSITION}
        aria-hidden
      />

      <motion.div
        className="relative z-10 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={sectionVariants}
        custom={reducedMotion}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sv-text-muted mb-4">
          WHAT WE BUILD
        </p>

        <motion.div
          className={cn(
            "flex flex-col gap-12 items-start",
            "lg:grid lg:grid-cols-[minmax(340px,460px)_minmax(520px,680px)_minmax(280px,360px)] lg:gap-x-10 lg:gap-y-0"
          )}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {/* Left column */}
          <motion.div
            className="w-full shrink-0"
            variants={leftCopyVariants}
            custom={reducedMotion}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <div className="relative min-h-[140px] md:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={imageVariants.initial}
                  animate={imageVariants.animate}
                  exit={imageVariants.exit}
                  transition={IMAGE_TRANSITION}
                  className="absolute inset-0"
                >
                  <h2 className="text-[clamp(32px,4vw,48px)] font-[800] text-white leading-[1.1] tracking-[-0.025em] mb-5">
                    {activeService.title}
                  </h2>
                  <p className="text-[16px] md:text-[17px] text-sv-text-sub leading-[1.7]">
                    {activeService.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Image panel */}
          <motion.div
            className="relative w-full aspect-[1052/776] max-w-[680px] rounded-[14px] overflow-hidden border border-[rgba(255,255,255,0.06)] bg-sv-surface shadow-[inset_0_2px_20px_rgba(0,0,0,0.4)]"
            role="tabpanel"
            id={`services-panel-${activeIndex}`}
            aria-labelledby={`services-tab-${activeIndex}`}
            variants={imageStageVariants}
            custom={reducedMotion}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {/* Ambient service-colored glow behind image */}
            <motion.div
              className="absolute inset-0 blur-3xl opacity-80 pointer-events-none"
              animate={{ backgroundColor: panelGlow }}
              transition={{ duration: 0.5, ease: EASE }}
              style={{ transform: "scale(1.2)" }}
              aria-hidden
            />

            {/* Vignette overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.4) 100%)",
              }}
              aria-hidden
            />

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={imageVariants.initial}
                animate={imageVariants.animate}
                exit={imageVariants.exit}
                transition={IMAGE_TRANSITION}
                className="absolute inset-0"
                style={{
                  transform: `scale(${imageScale})`,
                }}
              >
                <Image
                  src={activeService.imageUrl}
                  alt={activeService.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 680px"
                  className="object-cover"
                  style={{
                    objectPosition: imagePosition,
                  }}
                  priority={activeIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Vertical stack of service tab cards */}
          <motion.div
            role="tablist"
            aria-label="Services"
            className={cn(
              "flex flex-row lg:flex-col gap-3 w-full overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible",
              "min-w-0 lg:min-w-[280px]"
            )}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                custom={reducedMotion}
                transition={{ duration: 0.55, ease: EASE }}
                className="shrink-0 lg:shrink lg:w-full min-w-[240px] lg:min-w-0"
              >
                <ServiceTabCard
                  title={service.title}
                  subtitle={service.subtitle}
                  accentColor={service.accentColor}
                  hoverAccentColor={service.hoverAccentColor}
                  isActive={activeIndex === index}
                  index={index}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={handleKeyDown(index)}
                  reducedMotion={reducedMotion}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
