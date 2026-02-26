"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";

gsap.registerPlugin(ScrollTrigger);

/* ── Cycling metrics that auto-rotate in the card ── */
const METRICS = [
  {
    stat: "$41,084",
    label: "revenue in 30 days",
    client: "Triple W Rentals",
    detail: "$900 ad spend · 46x ROAS · Google Ads",
    logoIndex: 2,
  },
  {
    stat: "3x",
    label: "online booking increase",
    client: "Elite Cuts Barbershop",
    detail: "6 weeks post-launch · Web + Local SEO",
    logoIndex: null,
  },
  {
    stat: "40%",
    label: "more new client bookings",
    client: "Sharp Fade Studio",
    detail: "Month 1 · Web + Social integration",
    logoIndex: null,
  },
  {
    stat: "$27",
    label: "avg. cost per qualified call",
    client: "All active accounts",
    detail: "Q4 2025 · Google Ads campaigns",
    logoIndex: null,
  },
];

/* Per-logo metric map — which METRICS index to show on hover */
const LOGO_METRIC: Record<number, number> = {
  0: 3, // Absolute Painting → $27/call
  1: 1, // Culture Barbershop → 3x bookings (approximate)
  2: 0, // Triple W Rentals → $41K revenue
  3: 3, // Dentaire Saint-Lazare → $27/call
  4: 3, // Dentaire Saint-Elzear → $27/call
};

/* ── Metric Card ── */
function MetricCard({
  metric,
}: {
  metric: (typeof METRICS)[number];
}) {
  return (
    <div className="h-full flex flex-col justify-between">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)] mb-4">
        LIVE RESULT
      </p>
      <div>
        <p
          className="font-extrabold text-white leading-none mb-1"
          style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
        >
          {metric.stat}
        </p>
        <p className="text-[15px] text-[var(--text-secondary)] mb-4">
          {metric.label}
        </p>
        <p className="text-[12px] font-semibold text-[var(--text-muted)] mb-1">
          {metric.client}
        </p>
        <p className="text-[12px] text-[var(--text-dim)]">{metric.detail}</p>
      </div>
    </div>
  );
}

/* ── Desktop ProofBar ── */
function DesktopProofBar() {
  const reduced = usePrefersReducedMotionSafe();
  const sectionRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const cardARef = useRef<HTMLDivElement>(null);
  const cardBRef = useRef<HTMLDivElement>(null);

  const [activeMetric, setActiveMetric] = useState(0);
  const [displayedMetric, setDisplayedMetric] = useState(0);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hoveredLogoRef = useRef<number | null>(null);

  /* crossfade between cardA and cardB */
  const crossfadeTo = useCallback(
    (nextIdx: number) => {
      const a = cardARef.current;
      const b = cardBRef.current;
      if (!a || !b) return;

      setDisplayedMetric(nextIdx);
      setActiveMetric(nextIdx);

      if (reduced) return;

      gsap.to(a, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(a, { opacity: 1 });
        },
      });
    },
    [reduced]
  );

  /* Auto-cycle */
  useEffect(() => {
    if (reduced) return;

    const startCycle = () => {
      cycleRef.current = setInterval(() => {
        if (hoveredLogoRef.current !== null) return; // paused on hover
        setActiveMetric((prev) => {
          const next = (prev + 1) % METRICS.length;
          crossfadeTo(next);
          return next;
        });
      }, 3500);
    };

    startCycle();
    return () => {
      if (cycleRef.current) clearInterval(cycleRef.current);
    };
  }, [reduced, crossfadeTo]);

  /* Scroll-triggered stagger on chips */
  useEffect(() => {
    if (reduced) return;
    const chips = chipRefs.current.filter(Boolean);
    if (!chips.length || !sectionRef.current) return;

    gsap.fromTo(
      chips,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, [reduced]);

  const handleLogoHover = (logoIdx: number) => {
    hoveredLogoRef.current = logoIdx;
    const metricIdx = LOGO_METRIC[logoIdx] ?? 0;
    crossfadeTo(metricIdx);
  };

  const handleLogoLeave = () => {
    hoveredLogoRef.current = null;
  };

  return (
    <div
      ref={sectionRef}
      className="hidden md:flex items-center justify-between gap-8 max-w-6xl mx-auto"
    >
      {/* Logo chips */}
      <div className="flex items-center gap-3 flex-wrap flex-1">
        {caseStudyLogos.map((logo, i) => (
          <button
            key={logo.alt}
            ref={(el) => { chipRefs.current[i] = el; }}
            type="button"
            onMouseEnter={() => handleLogoHover(i)}
            onMouseLeave={handleLogoLeave}
            className="group flex flex-col items-center gap-1.5 px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] transition-all duration-200 hover:border-[rgba(43,90,140,0.4)] hover:bg-[rgba(43,90,140,0.06)] cursor-default"
            style={{ opacity: 0 }} /* GSAP reveals this */
            aria-label={logo.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-7 w-auto object-contain opacity-50 brightness-0 invert transition-opacity duration-200 group-hover:opacity-75"
              style={{ maxWidth: 100 }}
            />
            <span className="text-[10px] font-medium text-[var(--text-dim)] group-hover:text-[var(--text-muted)] transition-colors leading-tight text-center max-w-[90px]">
              {logo.name}
            </span>
          </button>
        ))}
      </div>

      {/* Metric card (crossfade container) */}
      <div
        className="relative shrink-0 w-64 rounded-xl p-6"
        style={{
          background: "var(--bg-surface)",
          border: "1px solid rgba(43,90,140,0.25)",
          borderLeft: "3px solid var(--brand-accent)",
          minHeight: 148,
        }}
      >
        {/* Layer A (visible) */}
        <div ref={cardARef} className="absolute inset-0 p-6">
          <MetricCard metric={METRICS[displayedMetric]} />
        </div>
      </div>
    </div>
  );
}

/* ── Mobile ProofBar — static ── */
function MobileProofBar() {
  return (
    <div className="md:hidden">
      {/* Logo row — scrollable */}
      <div className="flex gap-3 overflow-x-auto pb-3 mb-6 scrollbar-hide">
        {caseStudyLogos.map((logo) => (
          <div
            key={logo.alt}
            className="flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2.5 rounded-lg border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-6 w-auto object-contain opacity-50 brightness-0 invert"
              style={{ maxWidth: 80 }}
            />
            <span className="text-[9px] text-[var(--text-dim)] leading-tight text-center max-w-[72px]">
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      {/* Static strongest result */}
      <div
        className="rounded-xl p-5"
        style={{
          background: "var(--bg-surface)",
          border: "1px solid rgba(43,90,140,0.25)",
          borderLeft: "3px solid var(--brand-accent)",
        }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)] mb-3">
          LIVE RESULT
        </p>
        <p className="text-3xl font-extrabold text-white leading-none mb-1">
          $41,084
        </p>
        <p className="text-[14px] text-[var(--text-secondary)] mb-3">
          revenue in 30 days
        </p>
        <p className="text-[11px] font-semibold text-[var(--text-muted)] mb-0.5">
          Triple W Rentals
        </p>
        <p className="text-[11px] text-[var(--text-dim)]">
          $900 ad spend · 46x ROAS · Google Ads
        </p>
      </div>
    </div>
  );
}

/* ── Export ── */
export default function ProofBar() {
  return (
    <section
      className="py-10 md:py-12 bg-[var(--bg-base)]"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="container">
        {/* Label */}
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)] mb-6">
          CLIENTS — Every business below is a real active or past client account
        </p>

        <DesktopProofBar />
        <MobileProofBar />
      </div>
    </section>
  );
}
