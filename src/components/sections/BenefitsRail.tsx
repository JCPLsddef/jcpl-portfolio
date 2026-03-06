"use client";

import { useTranslations } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import dynamic from "next/dynamic";
import Image from "next/image";

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
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
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
      <div className="relative z-10 flex items-center justify-center w-12 h-12">
        {icon === "custom" ? (
          <EliteExecutionIcon />
        ) : (
          <Image
            src={icon}
            alt=""
            width={48}
            height={48}
            className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {CARD_TITLE_KEYS.map((titleKey, i) => (
            <article
              key={i}
              className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-sv-surface overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[rgba(43,90,140,0.35)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-sv-primary/50"
            >
              <BenefitCardArt index={i} icon={CARD_ICONS[i]} />
              <div className="p-5">
                <h3 className="text-[17px] font-semibold text-white">
                  {t<string>(titleKey)}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
