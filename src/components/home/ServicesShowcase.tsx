"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  servicesShowcaseContent,
  type ServiceItem,
  type HeroMediaType,
} from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServicesShaderBackground from "./ServicesShaderBackground";
import PillItem from "./PillItem";
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

interface ServicesShowcaseProps {
  impactRevealed?: boolean;
}

export default function ServicesShowcase({ impactRevealed = false }: ServicesShowcaseProps) {
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

  const mediaType = (activeService as ServiceItem & { mediaType?: HeroMediaType }).mediaType ?? "framed-image";
  const useGlow =
    (activeService as ServiceItem & { useGlow?: boolean }).useGlow ??
    (mediaType === "transparent-logo");
  const isTransparentLogo = mediaType === "transparent-logo";

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
        animate={impactRevealed ? "visible" : undefined}
        whileInView={!impactRevealed ? "visible" : undefined}
        viewport={!impactRevealed ? { once: true, amount: 0.35 } : undefined}
        variants={sectionVariants}
        custom={reducedMotion}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sv-text-muted mb-4">
          WHAT I BUILD
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
            className="w-full shrink-0 flex items-center lg:h-[calc(100vh-120px)]"
            variants={leftCopyVariants}
            custom={reducedMotion}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <div className="relative min-h-[140px] md:min-h-[180px] flex items-center lg:h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={imageVariants.initial}
                  animate={imageVariants.animate}
                  exit={imageVariants.exit}
                  transition={IMAGE_TRANSITION}
                  className="absolute inset-0 flex flex-col justify-center h-full px-0 lg:px-0 gap-8"
                >
                  <h2 className="text-[clamp(40px,6vw,64px)] font-extrabold text-white leading-[1.05] tracking-[-0.035em] mb-3 lg:mb-6 drop-shadow-lg text-left pl-0 lg:pl-0">
                    {activeService.title}
                  </h2>
                  {/* BY APPLICATION ONLY section image */}
                  <div className="mt-4 flex justify-center">
                    <img
                      src="https://static.wixstatic.com/media/62f926_880aac26b23148b180643d3682eadd6b~mv2.jpeg"
                      alt="BY APPLICATION ONLY"
                      style={{ width: "120px", height: "120px", borderRadius: "16px", objectFit: "cover", boxShadow: "0 4px 24px rgba(0,0,0,0.18)" }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Image panel */}
          <motion.div
            className="relative w-full overflow-visible flex items-end pt-0"
            role="tabpanel"
            id={`services-panel-${activeIndex}`}
            aria-labelledby={`services-tab-${activeIndex}`}
            variants={imageStageVariants}
            custom={reducedMotion}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {/* Removed ambient service-colored glow behind image */}

            {/* Inner stage - positioned left and lower */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Media glow - only for transparent-logo */}
              {/* Removed media glow for transparent-logo */}

              {/* Image wrapper - fills stage, centers content, subtle downward nudge */}
              <div className="relative w-full h-full min-h-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={imageVariants.initial}
                    animate={imageVariants.animate}
                    exit={imageVariants.exit}
                    transition={IMAGE_TRANSITION}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      transform: isTransparentLogo ? "scale(1)" : `scale(${imageScale})`,
                    }}
                  >
                    <div className={`relative w-full h-full flex items-center justify-center ${activeService.id === 'seo' ? 'min-h-[400px] translate-y-[80%] left-1/2 -translate-x-1/2' : 'min-h-[1000px] translate-y-1/3 left-[45%] -translate-x-1/2'}`}> 
                      <Image
                        src={activeService.imageUrl}
                        alt={activeService.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1400px"
                        className={activeService.id !== 'seo' ? "object-contain object-center" : "object-cover"}
                        style={{ objectPosition: imagePosition }}
                        priority={activeIndex === 0}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Vertical stack of service tab cards */}
          <motion.div
            role="tablist"
            aria-label="Services"
            className={cn(
              "flex flex-row lg:flex-col gap-5 w-full overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible",
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
                className="shrink-0 lg:shrink lg:w-full min-w-[280px] lg:min-w-0"
              >
                <PillItem
                  title={service.title}
                  subtitle={service.subtitle}
                  imageUrl={service.imageUrl}
                  imageAlt={service.imageAlt}
                  accentColor={service.accentColor}
                  hoverAccentColor={service.hoverAccentColor}
                  isActive={activeIndex === index}
                  index={index}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={handleKeyDown(index)}
                  reducedMotion={reducedMotion}
                  includedBadge={service.id === "website"}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
