"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesShowcaseContent } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

const ACCENT_ORANGE = "#FE7F26";

interface ServiceTabCardProps {
  title: string;
  tagline?: string;
  isActive: boolean;
  onClick: () => void;
}

function ServiceTabCard({ title, tagline, isActive, onClick }: ServiceTabCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative w-full text-left rounded-[10px] border transition-all duration-200",
        "min-h-[120px] md:min-h-[157px] p-5 flex flex-col justify-center",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE7F26]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sv-base",
        isActive
          ? "border-[#FE7F26]/60 bg-sv-surface shadow-[0_0_24px_rgba(254,127,38,0.08)]"
          : "border-[rgba(255,255,255,0.08)] bg-sv-surface/80 hover:border-[#FE7F26]/30 hover:-translate-x-0.5"
      )}
      aria-pressed={isActive}
      aria-label={`Select ${title}`}
    >
      {/* Active bar (left edge) */}
      <span
        className={cn(
          "absolute left-0 top-0 bottom-0 w-[3px] rounded-l-[10px] transition-all duration-200",
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
      {tagline && (
        <p className="mt-1 text-sm text-sv-text-sub">{tagline}</p>
      )}
    </button>
  );
}

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { brandTitle, brandParagraph, services } = servicesShowcaseContent;
  const activeService = services[activeIndex];

  return (
    <SectionWrapper id="services-showcase" variant="alt" className="[&>.container]:!max-w-[1400px]">
      <div className="w-full">
        <Reveal className="mb-12 md:mb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sv-text-muted mb-4">
            WHAT WE BUILD
          </p>
        </Reveal>

        {/* Two-column layout: left = brand title + paragraph, right = image + cards */}
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
            <div className="relative w-full lg:flex-1 max-w-[1052px] aspect-[1052/776] rounded-[14px] overflow-hidden border border-[rgba(255,255,255,0.08)] bg-sv-surface">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  src={activeService.imageSrc}
                  alt={activeService.imageAlt}
                  loading={activeIndex === 0 ? "eager" : "lazy"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Vertical stack of service tab cards */}
            <div className="flex flex-row lg:flex-col gap-3 lg:gap-3 lg:min-w-[280px] lg:max-w-[340px] overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible">
              {services.map((service, index) => (
                <Reveal key={service.id} delay={0.08 + index * 0.05} className="shrink-0 lg:shrink lg:w-full min-w-[240px] lg:min-w-0">
                  <ServiceTabCard
                    title={service.title}
                    tagline={service.tagline}
                    isActive={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
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
