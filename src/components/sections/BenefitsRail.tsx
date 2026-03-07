"use client";

import { useRef, useCallback, useEffect } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import { ChevronLeft, ChevronRight, Users, Zap, BarChart3, Clock, FileCheck } from "lucide-react";
import dynamic from "next/dynamic";
import { prefersReducedMotion } from "@/lib/motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
];

const CARDS = [
  { icon: Users, title: "One Partner, One System", desc: "No vendors to coordinate. No handoffs. One person owns the full pipeline from day one." },
  { icon: Zap, title: "Engineered to Convert", desc: "Every page built to answer why you, why now within 10 seconds and move visitors toward a booked call." },
  { icon: BarChart3, title: "Tracked From Click to Revenue", desc: "Every call traced back to its source. Cost per call updated weekly. No vanity metrics." },
  { icon: Clock, title: "Launch in Weeks, Not Months", desc: "Median 11 days from signed agreement to live system. Not 8 weeks of onboarding." },
  { icon: FileCheck, title: "You Own Everything", desc: "Site, data, accounts, creative. If you decide to leave, you leave with a working system. Nothing held hostage." },
];

function BenefitCardArt({
  index,
  icon: Icon,
}: {
  index: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
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
      <div className="relative z-10 flex items-center justify-center w-[72px] h-[72px]">
        <Icon
          className="benefit-icon drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] text-[rgba(255,255,255,0.95)]"
          size={56}
        />
      </div>
    </div>
  );
}

export default function BenefitsRail() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".benefit-icon", {
        scale: 0,
        rotation: -15,
        stagger: 0.07,
        duration: 0.5,
        ease: "back.out(2.2)",
        scrollTrigger: {
          trigger: ".benefits-grid",
          start: "top 76%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scroll = useCallback((dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const step = CARD_WIDTH + GAP;
    const reduced = typeof window !== "undefined" && prefersReducedMotion();
    el.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: reduced ? "instant" : "smooth",
    });
  }, []);

  return (
    <SectionWrapper
      ref={sectionRef}
      id="benefits"
      variant="default"
      className="py-16 md:py-24"
      style={{ background: "#181410" }}
    >
      <Reveal className="text-center mb-12">
        <SectionLabel label="SYSTEM BENEFITS" className="mb-4 !text-[#D4A853]" />
        <h2 className="text-[clamp(28px,4vw,40px)] leading-[1.2] tracking-[-0.02em] max-w-2xl mx-auto">
          <span className="font-bold text-white">One person builds the full pipeline. </span>
          <span
            className="italic font-normal"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F5F0E8" }}
          >
            Here is what is inside.
          </span>
        </h2>
        <p className="mt-4 text-[#A69D8D] text-base md:text-lg max-w-xl mx-auto">
          No scattered vendors. No disconnected tools. One system built by one person, tracked to one metric: qualified calls booked.
        </p>
      </Reveal>

      <Reveal>
        <div className="relative -mx-4 md:-mx-6">
          <div
            ref={scrollRef}
            className="benefits-grid flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide py-2 px-4 md:px-6"
            style={{
              scrollSnapType: "x mandatory",
              scrollPaddingInline: "var(--container-px, 24px)",
            }}
          >
            {CARDS.map((card, i) => (
              <article
                key={card.title}
                className="flex-shrink-0 w-[280px] sm:w-[300px] rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgba(212,168,83,0.35)] hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-[#D4A853]/50 lift-card"
                style={{
                  scrollSnapAlign: "start",
                  background: "#1E1A14",
                  border: "1px solid #2A2318",
                }}
              >
                <BenefitCardArt index={i} icon={card.icon} />
                <div className="p-5 border-t border-[rgba(255,255,255,0.06)]">
                  <h3 className="text-[1.125rem] font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#D2C9B8", lineHeight: 1.6 }}>
                    {card.desc}
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
              className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[#A69D8D] hover:text-[#F5F0E8] hover:border-[rgba(255,255,255,0.3)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A853] lift-card"
              style={{ background: "#1E1A14" }}
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next cards"
              className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[#A69D8D] hover:text-[#F5F0E8] hover:border-[rgba(255,255,255,0.3)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A853] lift-card"
              style={{ background: "#1E1A14" }}
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
