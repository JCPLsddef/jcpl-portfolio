"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { servicesShowcaseContent } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { cn } from "@/lib/utils";

const IMAGE_TRANSITION = { duration: 0.38, ease: [0.16, 1, 0.3, 1] as const };
const BG_GLOW_TRANSITION = { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const };

const SERVICE_BG_GLOWS: Record<string, string> = {
  website: "rgba(254,127,38,0.16)",
  seo: "rgba(56,161,105,0.16)",
  geo: "rgba(59,130,246,0.16)",
  copy: "rgba(139,92,246,0.16)",
};

type Service = (typeof servicesShowcaseContent.services)[number];

interface ServiceTabCardProps {
  title: string;
  subtitle?: string;
  accentColor: string;
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
        isActive ? "bg-[#0f2640]" : "border-[rgba(255,255,255,0.08)] bg-sv-surface/80 hover:border-white/20"
      )}
      style={
        isActive
          ? {
              borderColor: `${accentColor}99`,
              boxShadow: `0 0 28px rgba(${rgb},0.1)`,
              ["--tw-ring-color" as string]: `${accentColor}80`,
            }
          : { ["--tw-ring-color" as string]: `${accentColor}80` }
      }
    >
      {/* Top strip (active only) */}
      <span
        className={cn(
          "absolute left-0 right-0 top-0 h-[3px] rounded-t-[10px] transition-all duration-200",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
        )}
        style={{ backgroundColor: accentColor }}
      />
      <h3
        className={cn(
          "text-base md:text-lg font-semibold text-white transition-colors",
          isActive && "text-white"
        )}
      >
        {title}
      </h3>
      {subtitle && <p className="mt-1 text-sm text-sv-text-sub">{subtitle}</p>}
      {/* Circular indicator dot (active only, anchored inside card) */}
      {isActive && (
        <span
          className="absolute right-5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{ backgroundColor: accentColor }}
          aria-hidden
        />
      )}
    </motion.button>
  );
}

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotionSafe();
  const { services } = servicesShowcaseContent;
  const activeService = services[activeIndex] as Service;
  const bgGlowColor = SERVICE_BG_GLOWS[activeService.id] ?? SERVICE_BG_GLOWS.website;

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
    services.forEach((s, i) => {
      if (i !== 0) {
        const img = new window.Image();
        img.src = s.imageUrl;
      }
    });
  }, [services]);

  const imageScale = "imageScale" in activeService ? activeService.imageScale : 1;
  const imagePosition = "imagePosition" in activeService ? activeService.imagePosition : "center";
  const objectFit = ("objectFit" in activeService ? activeService.objectFit : "cover") as "cover" | "contain";
  const panelGlow = "panelGlow" in activeService ? activeService.panelGlow : "rgba(254,127,38,0.10)";

  return (
    <SectionWrapper
      id="services"
      variant="alt"
      className={cn(
        "[&>.container]:!max-w-[1400px]",
        "relative overflow-hidden"
      )}
    >
      {/* Dynamic background glow layers */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden
      >
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-[80%] h-[120%] rounded-full blur-[120px] opacity-60"
          animate={{
            background: `radial-gradient(circle, ${bgGlowColor} 0%, transparent 70%)`,
          }}
          transition={BG_GLOW_TRANSITION}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[800px] h-[80%] rounded-full blur-[100px] opacity-40"
          animate={{
            background: `radial-gradient(ellipse, ${bgGlowColor} 0%, transparent 70%)`,
          }}
          transition={BG_GLOW_TRANSITION}
        />
      </div>

      <div className="relative z-10 w-full">
        <Reveal className="mb-12 md:mb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sv-text-muted mb-4">
            WHAT WE BUILD
          </p>
        </Reveal>

        <div
          className={cn(
            "flex flex-col gap-12 items-start",
            "lg:grid lg:grid-cols-[minmax(340px,460px)_minmax(520px,680px)_minmax(280px,360px)] lg:gap-x-10 lg:gap-y-0"
          )}
        >
          {/* Left column */}
          <div className="w-full shrink-0">
            <Reveal delay={0.05} className="relative min-h-[140px] md:min-h-[180px]">
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
            </Reveal>
          </div>

          {/* Image panel */}
          <div
            className="relative w-full aspect-[1052/776] max-w-[680px] rounded-[14px] overflow-hidden border border-[rgba(255,255,255,0.06)] bg-sv-surface shadow-[inset_0_2px_20px_rgba(0,0,0,0.4)]"
            role="tabpanel"
            id={`services-panel-${activeIndex}`}
            aria-labelledby={`services-tab-${activeIndex}`}
          >
            {/* Ambient service-colored glow behind image */}
            <motion.div
              className="absolute inset-0 blur-3xl opacity-80 pointer-events-none"
              animate={{
                backgroundColor: panelGlow,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                  className={objectFit === "contain" ? "object-contain" : "object-cover"}
                  style={{
                    objectPosition: imagePosition,
                  }}
                  priority={activeIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Vertical stack of service tab cards */}
          <div
            role="tablist"
            aria-label="Services"
            className={cn(
              "flex flex-row lg:flex-col gap-3 w-full overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible",
              "min-w-0 lg:min-w-[280px]"
            )}
          >
            {services.map((service, index) => (
              <Reveal
                key={service.id}
                delay={0.08 + index * 0.05}
                className="shrink-0 lg:shrink lg:w-full min-w-[240px] lg:min-w-0"
              >
                <ServiceTabCard
                  title={service.title}
                  subtitle={service.subtitle}
                  accentColor={service.accentColor}
                  isActive={activeIndex === index}
                  index={index}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={handleKeyDown(index)}
                  reducedMotion={reducedMotion}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
