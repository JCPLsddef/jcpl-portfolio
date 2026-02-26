"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* ── Phase data — 4 phases: Traffic → Conversion → Follow-Up → Booked Revenue ── */
const PHASES = [
  {
    number: "01",
    phase: "Traffic",
    headline: "Show Up First.",
    body: "Position you on Google and AI tools at the exact moment buyers in your city are ready to call — before your competitors know this exists.",
    tags: ["Conversion website", "Local SEO", "GEO content"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: "02",
    phase: "Conversion",
    headline: "Turn Visitors Into Calls.",
    body: "95% of visitors leave without acting. I build a booking flow that captures people already interested in hiring you — without you lifting a finger.",
    tags: ["Booking flow", "AI lead qualifier", "Trust signals"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 10a19.79 19.79 0 01-3-8.57A2 2 0 013.04 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    number: "03",
    phase: "Follow-Up",
    headline: "Get in Front of Buyers.",
    body: "Google Ads targeting purchase-intent buyers. Every campaign built around one goal: more qualified calls from people ready to hire you today.",
    tags: ["Paid traffic", "Dedicated landing pages", "Tracked cost per call"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: "04",
    phase: "Booked Revenue",
    headline: "Results Get Better Every Week.",
    body: "Weekly optimization. The system compounds. Your cost per lead goes down every month it runs — while your competitors stay the same.",
    tags: ["Weekly optimization", "Monthly review call", "Compounding ROI"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

/* ── Connector SVG (horizontal line between cards) ── */
function Connector({ forwardRef }: { forwardRef: (el: SVGLineElement | null) => void }) {
  return (
    <div
      className="hidden lg:flex items-center shrink-0"
      style={{ width: 48 }}
      aria-hidden="true"
    >
      <svg
        width="48"
        height="16"
        viewBox="0 0 48 16"
        fill="none"
        overflow="visible"
      >
        {/* Arrow line */}
        <line
          ref={forwardRef}
          x1="0"
          y1="8"
          x2="44"
          y2="8"
          stroke="rgba(43,90,140,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="44"
          strokeDashoffset="44"
        />
        {/* Arrowhead */}
        <polyline
          ref={null}
          points="40,4 44,8 40,12"
          fill="none"
          stroke="rgba(43,90,140,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ── Phase Card ── */
function PhaseCard({
  phase,
  cardRef,
}: {
  phase: (typeof PHASES)[number];
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={cardRef}
      className="flex-1 min-w-0 rounded-xl p-6 flex flex-col gap-4"
      style={{
        background: "rgba(14,31,53,0.7)",
        border: "1px solid rgba(43,90,140,0.2)",
        /* will-change only for the animated property */
        willChange: "transform, opacity",
      }}
    >
      {/* Phase badge + icon */}
      <div className="flex items-center justify-between">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.18em]"
          style={{ color: "var(--brand-accent)" }}
        >
          {phase.phase}
        </span>
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{
            background: "rgba(43,90,140,0.12)",
            border: "1px solid rgba(43,90,140,0.2)",
            color: "var(--brand-accent)",
          }}
        >
          {phase.icon}
        </div>
      </div>

      {/* Number + headline */}
      <div>
        <span
          className="text-[11px] font-bold text-[var(--text-dim)] tracking-wider block mb-1"
        >
          {phase.number}
        </span>
        <h3 className="text-[17px] font-bold text-white leading-snug">
          {phase.headline}
        </h3>
      </div>

      {/* Body */}
      <p className="text-[14px] text-[var(--text-secondary)] leading-[1.7] flex-1">
        {phase.body}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {phase.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium"
            style={{
              background: "rgba(43,90,140,0.1)",
              border: "1px solid rgba(43,90,140,0.2)",
              color: "#93C5FD",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Mobile fallback (no pin, stacked with Reveal) ── */
function MobileSystem() {
  return (
    <div className="lg:hidden space-y-4">
      {PHASES.map((phase) => (
        <Reveal key={phase.number}>
          <div
            className="rounded-xl p-6"
            style={{
              background: "rgba(14,31,53,0.7)",
              border: "1px solid rgba(43,90,140,0.2)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: "var(--brand-accent)" }}
              >
                {phase.phase}
              </span>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(43,90,140,0.12)",
                  border: "1px solid rgba(43,90,140,0.2)",
                  color: "var(--brand-accent)",
                }}
              >
                {phase.icon}
              </div>
            </div>

            <span className="text-[10px] font-bold text-[var(--text-dim)] tracking-wider block mb-1">
              {phase.number}
            </span>
            <h3 className="text-[16px] font-bold text-white leading-snug mb-2">
              {phase.headline}
            </h3>
            <p className="text-[14px] text-[var(--text-secondary)] leading-[1.7] mb-3">
              {phase.body}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {phase.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium"
                  style={{
                    background: "rgba(43,90,140,0.1)",
                    border: "1px solid rgba(43,90,140,0.2)",
                    color: "#93C5FD",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ── Desktop pinned system ── */
function DesktopSystem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const connectorRefs = useRef<(SVGLineElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return; // handled by MobileSystem

    const section = sectionRef.current;
    const pinned = pinnedRef.current;
    if (!section || !pinned) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const connectors = connectorRefs.current.filter(Boolean) as SVGLineElement[];

    /* Set initial hidden state only on desktop */
    gsap.set(cards, { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=220vh",
        pin: pinned,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    /* Stagger: card → connector → card → connector → ... */
    const STEP = 2.2; // duration per card reveal
    const GAP = 1.4;  // duration for connector draw

    let t = 0;
    PHASES.forEach((_, i) => {
      // Card in
      tl.fromTo(
        cards[i],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: STEP, ease: "power2.out" },
        t
      );
      t += STEP;

      // Connector (except after last card)
      if (i < PHASES.length - 1 && connectors[i]) {
        tl.fromTo(
          connectors[i],
          { strokeDashoffset: 44 },
          { strokeDashoffset: 0, duration: GAP, ease: "power1.out" },
          t - 0.8 // slight overlap
        );
        t += GAP * 0.6;
      }
    });

    /* Refresh on resize */
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      tl.kill();
      ScrollTrigger.getAll()
        .filter((st) => st.vars.trigger === section)
        .forEach((st) => st.kill());
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="hidden lg:block"
      style={{ height: "320vh" }}
    >
      {/* Pinned viewport */}
      <div
        ref={pinnedRef}
        className="h-screen flex flex-col items-center justify-center"
        style={{ background: "var(--bg-base)" }}
      >
        {/* Header (static, always visible) */}
        <div className="text-center mb-12 px-6">
          <SectionLabel label="THE SYSTEM" className="mb-4" />
          <h2
            className="font-extrabold text-white leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto"
            style={{ fontSize: "clamp(34px,4.5vw,52px)" }}
          >
            The{" "}
            <span style={{ color: "var(--brand-accent)" }}>
              Growth Architecture™
            </span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto leading-[1.75]"
            style={{ color: "var(--text-secondary)", fontSize: 17 }}
          >
            Four integrated phases. Each one makes the others stronger.
            Built as one connected system.
          </p>
        </div>

        {/* Cards row with connectors */}
        <div className="w-full max-w-[1100px] mx-auto px-6 flex items-stretch gap-0">
          {PHASES.map((phase, i) => (
            <div key={phase.number} className="flex items-center flex-1 min-w-0">
              <PhaseCard
                phase={phase}
                cardRef={(el) => { cardRefs.current[i] = el; }}
              />
              {i < PHASES.length - 1 && (
                <Connector
                  forwardRef={(el) => { connectorRefs.current[i] = el; }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-[14px] font-medium transition-colors duration-200 underline underline-offset-4"
            style={{
              color: "var(--text-muted)",
              textDecorationColor: "rgba(75,142,255,0.4)",
            }}
          >
            Want the full breakdown? See how the system is built →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Export ── */
export default function PinnedSystem() {
  return (
    <div id="system" style={{ background: "var(--bg-base)" }}>
      {/* Desktop: pinned scroll sequence */}
      <DesktopSystem />

      {/* Mobile: stacked with Reveal — includes its own header */}
      <section
        className="lg:hidden py-16"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="container">
          <div className="text-center mb-10">
            <SectionLabel label="THE SYSTEM" className="mb-4" />
            <h2
              className="font-extrabold text-white leading-[1.15] tracking-[-0.025em]"
              style={{ fontSize: "clamp(28px,6vw,40px)" }}
            >
              The{" "}
              <span style={{ color: "var(--brand-accent)" }}>
                Growth Architecture™
              </span>
            </h2>
            <p
              className="mt-4 max-w-md mx-auto leading-[1.75]"
              style={{ color: "var(--text-secondary)", fontSize: 16 }}
            >
              Four integrated phases. Each one makes the others stronger.
            </p>
          </div>
          <MobileSystem />
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-[14px] font-medium transition-colors duration-200 underline underline-offset-4"
              style={{
                color: "var(--text-muted)",
                textDecorationColor: "rgba(75,142,255,0.4)",
              }}
            >
              Want the full breakdown? See how the system is built →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
