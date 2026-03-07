"use client";

import { useRef, useCallback } from "react";
import { useTranslations } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARD_WIDTH = 300;
const GAP = 24;

const BENEFIT_CARDS = [
  {
    stat: "No vendor coordination. No hand-offs.",
    titleKey: "benefits.card1Title",
  },
  {
    stat: "Average 3.1x lift in conversion rate vs. previous site.",
    titleKey: "benefits.card2Title",
  },
  {
    stat: "Every call tracked to its source. Cost per call updated weekly.",
    titleKey: "benefits.card3Title",
  },
  {
    stat: "Median: 11 days from signed agreement to live system.",
    titleKey: "benefits.card4Title",
  },
] as const;

export default function BenefitsRail() {
  const t = useTranslations();
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotionSafe();

  const scroll = useCallback(
    (dir: "left" | "right") => {
      const el = scrollRef.current;
      if (!el) return;
      const step = CARD_WIDTH + GAP;
      el.scrollBy({
        left: dir === "left" ? -step : step,
        behavior: reduced ? "instant" : "smooth",
      });
    },
    [reduced]
  );

  return (
    <SectionWrapper id="benefits" variant="alt" className="!bg-[#0a0f1e]">
      <Reveal className="text-center mb-10 md:mb-12">
        <SectionLabel
          label={t<string>("benefits.eyebrow")}
          className="mb-4 text-sv-text-muted"
        />
        <h2 className="font-serif text-[clamp(32px,4.5vw,48px)] font-extrabold text-white leading-[1.12] tracking-[-0.02em] max-w-2xl mx-auto">
          {t<string>("benefits.headline")}
        </h2>
        <p className="mt-4 font-sans font-normal text-sv-text-sub text-[17px] md:text-[18px] leading-[1.65] max-w-xl mx-auto">
          {t<string>("benefits.paragraph")}
        </p>
      </Reveal>

      <Reveal>
        <div className="relative -mx-4 md:-mx-6">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide py-2 px-4 md:px-6"
            style={{
              scrollSnapType: "x mandatory",
              scrollPaddingInline: "var(--container-px, 24px)",
            }}
          >
            {BENEFIT_CARDS.map((card, i) => (
              <article
                key={i}
                className="flex-shrink-0 w-[280px] sm:w-[300px] rounded-[12px] overflow-hidden transition-all duration-300 hover:border-[#f97316]/30 focus-within:ring-2 focus-within:ring-[#f97316]/50"
                style={{
                  backgroundColor: "#0f1729",
                  border: "1px solid #1e293b",
                  scrollSnapAlign: "start",
                }}
              >
                <div className="p-6">
                  <p
                    className="mb-3"
                    style={{
                      fontSize: "0.75rem",
                      color: "#f97316",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {card.stat}
                  </p>
                  <h3 className="text-[18px] font-semibold text-white leading-snug">
                    {t<string>(card.titleKey)}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-6" aria-hidden="true">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous cards"
              className="w-10 h-10 rounded-full border border-white/20 bg-[#0f1729] flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f97316]"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next cards"
              className="w-10 h-10 rounded-full border border-white/20 bg-[#0f1729] flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f97316]"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
