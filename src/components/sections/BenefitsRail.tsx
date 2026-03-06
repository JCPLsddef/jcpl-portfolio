"use client";

import { useRef, useCallback } from "react";
import { useTranslations } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

const CARD_WIDTH = 300;
const GAP = 24;

const Grainient = dynamic(
  () => import("@/components/ui/Grainient").then((m) => m.default),
  { ssr: false }
);

const GRAINIENT_PALETTES: { color1: string; color2: string; color3: string }[] = [
  { color1: "#FF9FFC", color2: "#5227FF", color3: "#B19EEF" },
  { color1: "#00D9FF", color2: "#0099CC", color3: "#66E0FF" },
  { color1: "#FFB347", color2: "#FF6B35", color3: "#FFA07A" },
  { color1: "#00E676", color2: "#00C853", color3: "#69F0AE" },
  { color1: "#FF6B9D", color2: "#C2185B", color3: "#F48FB1" },
  { color1: "#7C4DFF", color2: "#304FFE", color3: "#B388FF" },
  { color1: "#E8B4B8", color2: "#9B59B6", color3: "#C39BD3" },
];

const CARD_ICONS: (string | "custom")[] = [
  "https://static.wixstatic.com/media/62f926_6abb6c1b17714b60b1f3dce217c58eb1~mv2.png",
  "https://static.wixstatic.com/media/62f926_6e4812e738e348e181391f3aa44e950f~mv2.png",
  "https://static.wixstatic.com/media/62f926_43c86aecc15948608c0a1eef0b890fc5~mv2.png",
  "https://static.wixstatic.com/media/62f926_326adb75a50742c5b2105b73046ea278~mv2.png",
  "https://static.wixstatic.com/media/62f926_cd679cd43dd649168cea9c3c20888a2e~mv2.png",
  "https://static.wixstatic.com/media/62f926_a1f43c89e7bc47d48dbcb83bb9914c86~mv2.png",
  "custom",
];

function EliteExecutionIcon() {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[112px] h-[112px] drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
      aria-hidden
    >
      <path
        d="M24 4L6 10v12c0 10 8 18 18 22 10-4 18-12 18-22V10L24 4z"
        fill="rgba(255,255,255,0.15)"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 24l6 6 12-12"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BenefitCardArt({
  index,
  icon,
}: {
  index: number;
  icon: string | "custom";
}) {
  const palette = GRAINIENT_PALETTES[index % GRAINIENT_PALETTES.length];
  return (
    <div
      className="relative h-[140px] min-h-[140px] w-full rounded-t-xl flex items-center justify-center overflow-hidden"
      aria-hidden
    >
      <Grainient
        className="absolute inset-0 w-full h-full"
        color1={palette.color1}
        color2={palette.color2}
        color3={palette.color3}
      />
      <div className="relative z-10 flex items-center justify-center w-[112px] h-[112px]">
        {icon === "custom" ? (
          <EliteExecutionIcon />
        ) : (
          <Image
            src={icon}
            alt=""
            width={112}
            height={112}
            className="w-[112px] h-[112px] object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
            unoptimized
          />
        )}
      </div>
    </div>
  );
}

const CARD_TITLE_KEYS = [
  "benefits.card1Title",
  "benefits.card2Title",
  "benefits.card3Title",
  "benefits.card4Title",
  "benefits.card5Title",
  "benefits.card6Title",
  "benefits.card7Title",
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
            {CARD_TITLE_KEYS.map((titleKey, i) => (
              <article
                key={i}
                className="flex-shrink-0 w-[280px] sm:w-[300px] rounded-xl border border-slate-200 bg-white overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-sv-primary/50"
                style={{ scrollSnapAlign: "start" }}
              >
                <BenefitCardArt index={i} icon={CARD_ICONS[i]} />
                <div className="p-5">
                  <h3 className="text-[18px] font-semibold text-slate-900 leading-snug">
                    {t<string>(titleKey)}
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
