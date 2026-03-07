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

const CARD_KEYS = [
  { title: "benefits.card1Title", stat: "benefits.card1Stat" },
  { title: "benefits.card2Title", stat: "benefits.card2Stat" },
  { title: "benefits.card3Title", stat: "benefits.card3Stat" },
  { title: "benefits.card4Title", stat: "benefits.card4Stat" },
  { title: "benefits.card5Title", stat: "benefits.card5Stat" },
  { title: "benefits.card6Title", stat: "benefits.card6Stat" },
  { title: "benefits.card7Title", stat: "benefits.card7Stat" },
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
    <SectionWrapper id="benefits" variant="default" className="!bg-white">
      <Reveal className="text-center mb-10 md:mb-12">
        <SectionLabel
          label={t<string>("benefits.eyebrow")}
          className="mb-4 !text-slate-500"
        />
        <h2 className="font-serif text-[clamp(32px,4.5vw,48px)] font-extrabold text-slate-900 leading-[1.12] tracking-[-0.02em] max-w-2xl mx-auto">
          {t<string>("benefits.headline")}
        </h2>
        <p className="mt-4 font-sans font-normal text-slate-600 text-[17px] md:text-[18px] leading-[1.65] max-w-xl mx-auto">
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
            {CARD_KEYS.map((keys, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] sm:w-[300px] py-6 px-4"
                style={{ scrollSnapAlign: "start" }}
              >
                <p
                  className="text-[13px] font-semibold leading-snug mb-2"
                  style={{ color: "#f97316", letterSpacing: "0.03em" }}
                >
                  {t<string>(keys.stat)}
                </p>
                <h3 className="text-[18px] font-semibold text-slate-900 leading-snug">
                  {t<string>(keys.title)}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-6" aria-hidden="true">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous cards"
              className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-primary"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next cards"
              className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-primary"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
