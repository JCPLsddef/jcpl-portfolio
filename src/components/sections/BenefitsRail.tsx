"use client";

import { useRef, useCallback } from "react";
import { useTranslations } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const Grainient = dynamic(
  () => import("@/components/ui/Grainient").then((m) => m.default),
  { ssr: false }
);

const CARD_WIDTH = 300;
const GAP = 24;

const GRAINIENT_PALETTES: { color1: string; color2: string; color3: string }[] = [
  { color1: "#FF9FFC", color2: "#5227FF", color3: "#B19EEF" },
  { color1: "#00D9FF", color2: "#0099CC", color3: "#66E0FF" },
  { color1: "#FFB347", color2: "#FF6B35", color3: "#FFA07A" },
  { color1: "#00E676", color2: "#00C853", color3: "#69F0AE" },
  { color1: "#FF6B9D", color2: "#C2185B", color3: "#F48FB1" },
  { color1: "#7C4DFF", color2: "#304FFE", color3: "#B388FF" },
];

function BenefitCardArt({ index }: { index: number }) {
  const palette = GRAINIENT_PALETTES[index % GRAINIENT_PALETTES.length];
  return (
    <div
      className={cn(
        "relative h-[120px] w-full rounded-t-lg flex items-center justify-center overflow-hidden"
      )}
      aria-hidden
    >
      <Grainient
        className="absolute inset-0 w-full h-full"
        color1={palette.color1}
        color2={palette.color2}
        color3={palette.color3}
      />
      <div
        className="relative w-12 h-12 rounded-lg border border-white/10 bg-white/5"
        style={{
          background:
            "linear-gradient(135deg, rgba(43,90,140,0.4) 0%, rgba(18,40,69,0.6) 100%)",
        }}
      />
    </div>
  );
}

export default function BenefitsRail() {
  const t = useTranslations();
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotionSafe();

  const cards = [
    {
      title: t<string>("benefits.card1Title"),
      description: t<string>("benefits.card1Desc"),
    },
    {
      title: t<string>("benefits.card2Title"),
      description: t<string>("benefits.card2Desc"),
    },
    {
      title: t<string>("benefits.card3Title"),
      description: t<string>("benefits.card3Desc"),
    },
    {
      title: t<string>("benefits.card4Title"),
      description: t<string>("benefits.card4Desc"),
    },
    {
      title: t<string>("benefits.card5Title"),
      description: t<string>("benefits.card5Desc"),
    },
    {
      title: t<string>("benefits.card6Title"),
      description: t<string>("benefits.card6Desc"),
    },
  ];

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
    <SectionWrapper id="benefits" variant="default">
      <Reveal className="text-center mb-10 md:mb-12">
        <SectionLabel label={t<string>("benefits.eyebrow")} className="mb-4" />
        <h2 className="text-[clamp(28px,4vw,44px)] font-[800] text-white leading-[1.12] tracking-[-0.02em] max-w-2xl mx-auto">
          {t<string>("benefits.headline")}
        </h2>
        <p className="mt-4 text-sv-text-sub text-[16px] md:text-[17px] leading-[1.65] max-w-xl mx-auto">
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
            {cards.map((card, i) => (
              <article
                key={i}
                className="flex-shrink-0 w-[280px] sm:w-[300px] rounded-xl border border-[rgba(255,255,255,0.08)] bg-sv-surface overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[rgba(43,90,140,0.35)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-sv-primary/50"
                style={{ scrollSnapAlign: "start" }}
              >
                <BenefitCardArt index={i} />
                <div className="p-5">
                  <h3 className="text-[17px] font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-sv-text-sub leading-[1.55]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-6" aria-hidden="true">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous cards"
              className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] bg-sv-surface flex items-center justify-center text-sv-text-muted hover:text-white hover:border-[rgba(255,255,255,0.3)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-primary"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next cards"
              className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] bg-sv-surface flex items-center justify-center text-sv-text-muted hover:text-white hover:border-[rgba(255,255,255,0.3)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-primary"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
