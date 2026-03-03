"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { servicesShowcaseContent } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { cn } from "@/lib/utils";

const ACCENT_ORANGE = "#FE7F26";
const IMAGE_TRANSITION = { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const };

interface ServiceTabCardProps {
  title: string;
  subtitle?: string;
  isActive: boolean;
  index: number;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  reducedMotion: boolean;
}

function ServiceTabCard({
  title,
  subtitle,
  isActive,
  index,
  onClick,
  onKeyDown,
  reducedMotion,
}: ServiceTabCardProps) {
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
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE7F26]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sv-base",
        isActive
          ? "border-[#FE7F26]/60 bg-sv-surface shadow-[0_0_24px_rgba(254,127,38,0.08)]"
          : "border-[rgba(255,255,255,0.08)] bg-sv-surface/80 hover:border-[#FE7F26]/30"
      )}
    >
      {/* Top orange strip (active only) */}
      <span
        className={cn(
          "absolute left-0 right-0 top-0 h-[3px] rounded-t-[10px] transition-all duration-200",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
        )}
        style={{ backgroundColor: ACCENT_ORANGE }}
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
      {/* Circular indicator dot (active only) */}
      {isActive && (
        <motion.span
          className="absolute right-5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{ backgroundColor: ACCENT_ORANGE }}
          animate={
            reducedMotion
              ? undefined
              : { opacity: [1, 0.5, 1], scale: [1, 0.9, 1] }
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      )}
    </motion.button>
  );
}

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotionSafe();
  const { brandTitle, brandParagraph, services } = servicesShowcaseContent;
  const activeService = services[activeIndex];

  const imageVariants = reducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
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

  // Preload other images
  useEffect(() => {
    if (typeof window === "undefined") return;
    services.forEach((s, i) => {
      if (i !== 0) {
        const img = new window.Image();
        img.src = s.imageUrl;
      }
    });
  }, [services]);

  return (
    <SectionWrapper
      id="services"
      variant="alt"
      className="[&>.container]:!max-w-[1400px]"
    >
      <div className="w-full">
        <Reveal className="mb-12 md:mb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sv-text-muted mb-4">
            WHAT WE BUILD
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:w-[38%] lg:min-w-[320px] shrink-0">
            <Reveal delay={0.05}>
              <h2 className="text-[clamp(32px,4vw,48px)] font-[800] text-white leading-[1.1] tracking-[-0.025em] mb-5">
                {brandTitle}
              </h2>
              <p className="text-[16px] md:text-[17px] text-sv-text-sub leading-[1.7]">
                {brandParagraph}
              </p>
            </Reveal>
          </div>

          {/* Right column: image + vertical service cards */}
          <div className="flex-1 w-full flex flex-col lg:flex-row gap-8 lg:gap-6 items-stretch lg:items-start min-w-0">
            {/* Main image area */}
            <div
              className="relative w-full lg:flex-1 max-w-[1052px] aspect-[1052/776] rounded-[14px] overflow-hidden border border-[rgba(255,255,255,0.08)] bg-sv-surface"
              role="tabpanel"
              id={`services-panel-${activeIndex}`}
              aria-labelledby={`services-tab-${activeIndex}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={imageVariants.initial}
                  animate={imageVariants.animate}
                  exit={imageVariants.exit}
                  transition={IMAGE_TRANSITION}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeService.imageUrl}
                    alt={activeService.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1052px"
                    className="object-cover"
                    priority={activeIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Vertical stack of service tab cards */}
            <div
              role="tablist"
              aria-label="Services"
              className="flex flex-row lg:flex-col gap-3 lg:gap-3 lg:min-w-[280px] lg:max-w-[340px] overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible"
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
      </div>
    </SectionWrapper>
  );
}
