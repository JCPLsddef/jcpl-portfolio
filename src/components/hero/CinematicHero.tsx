"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero, ctaCopy } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import HeroBackground from "./HeroBackground";
import IntroBackground from "./IntroBackground";
import LogoIntro from "./LogoIntro";
import Icon from "@/components/ui/Icon";
import type { LogoIntroHandle } from "./LogoIntro";
import "./hero.css";

gsap.registerPlugin(ScrollTrigger);

/* ══════════════════════════════════════════════════════════
   SCROLL PROGRESS BREAKPOINTS (0–1)
   Adjust to retune when each layer appears / disappears.
   ══════════════════════════════════════════════════════════ */

// Layer 1: Logo stays centered, then moves to top-left
const LOGO_MOVE_START = 0.0;
const LOGO_MOVE_END = 0.22;

// Logo final transform (top-left corner)
const LOGO_FINAL_SCALE = 0.32;
const LOGO_FINAL_X = "-36vw";
const LOGO_FINAL_Y = "-40vh";

// Background transitions
const INTRO_BG_FADE_START = 0.15;
const INTRO_BG_FADE_END = 0.28;
const AURORA_FADE_START = 0.18;
const AURORA_FADE_END = 0.28;

// Scroll indicator hides
const INDICATOR_HIDE = 0.04;

// Layer 2: Hook statement
const HOOK_FADE_IN_START = 0.20;
const HOOK_FADE_IN_END = 0.32;
const HOOK_FADE_OUT_START = 0.50;
const HOOK_FADE_OUT_END = 0.58;

// Layer 3: Services universe
const SERVICES_TITLE_IN_START = 0.55;
const SERVICES_TITLE_IN_END = 0.65;
const SERVICES_CARDS_IN_START = 0.60;
const SERVICES_CARDS_IN_END = 0.75;
const SERVICES_CTA_IN_START = 0.70;
const SERVICES_CTA_IN_END = 0.80;

// Scrub damping
const SCRUB_SMOOTHING = 0.6;

/* ══════════════════════════════════════════════════════════
   SERVICE DATA
   ══════════════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════════════
   STATIC FALLBACK (reduced motion)
   ══════════════════════════════════════════════════════════ */

function StaticHero() {
  return (
    <section
      className="scroll-hero"
      style={{ height: "auto", minHeight: "100vh" }}
    >
      <div
        className="scroll-hero-viewport"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "6rem 1.5rem",
        }}
      >
        <div className="hero-bg-layer" style={{ opacity: 1 }}>
          <HeroBackground />
        </div>
        <div className="hero-overlay bg-[linear-gradient(180deg,rgba(6,10,8,0.28)_0%,rgba(6,10,8,0.42)_52%,rgba(6,10,8,0.58)_100%)]" />
        <div
          className="scroll-layer content-layer"
          style={{ opacity: 1, pointerEvents: "auto", position: "relative" }}
        >
          <ServicesLayer />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   LAYER 2 — Hook Statement
   ══════════════════════════════════════════════════════════ */

function HookLayer() {
  return (
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[var(--text-primary)]"
        style={{
          textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          letterSpacing: "-0.02em",
        }}
      >
        {hero.headline}
      </h1>
      <p
        className="mt-6 text-lg md:text-xl text-[rgba(255,255,255,0.5)] max-w-[640px] mx-auto leading-relaxed"
        style={{ letterSpacing: "0.01em" }}
      >
        {hero.subheadline}
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   LAYER 3 — Services Universe
   ══════════════════════════════════════════════════════════ */

function ProofCard() {
  return (
    <div className="w-full max-w-sm bg-slate-800/60 backdrop-blur-sm border border-slate-700 border-l-4 border-l-blue-500 rounded-2xl p-8">
      <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4">
        LIVE RESULT
      </p>
  <p className="text-5xl font-black text-white mb-1">$41,084.85</p>
      <p className="text-sm text-slate-400 mb-6">
        Revenue generated. 30 days. $900 ad spend.
      </p>
      <div className="grid grid-cols-3 gap-2 border-t border-slate-700 pt-6">
        {[
          { value: "33x", label: "Return on ad spend" },
          { value: "11 days", label: "To first booked call" },
          { value: "Texas", label: "RV rental market" },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="text-xl font-bold text-white">{value}</p>
            <p className="text-xs text-slate-400 mt-1">{label}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-6 pt-4 border-t border-slate-700">
        Triple W Rentals. Google Ads funnel.
      </p>
    </div>
  );
}

function ServicesLayer() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left column: headline + CTAs */}
        <div className="lg:w-[55%] text-center lg:text-left">
          <p className="services-title text-xs font-medium tracking-[0.3em] uppercase text-[rgba(255,255,255,0.35)] mb-6">
            {hero.overline}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-6 whitespace-pre-line">
            {hero.headline}
          </h1>
          <p className="text-base text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            {hero.subheadline}
          </p>
          <div className="services-cta flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href={ctaCopy.href}
              onClick={() => trackEvent("hero_cta_click")}
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--brand-accent)] px-8 py-4 text-base font-semibold text-white transition-all duration-400 hover:bg-[var(--brand-deep)] shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              {ctaCopy.primary}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Icon name="arrow-right" size={16} />
              </span>
            </Link>
            <Link
              href="/results"
              className="inline-flex items-center gap-2 text-sm font-medium text-[rgba(255,255,255,0.4)] transition-colors duration-300 hover:text-[rgba(255,255,255,0.7)]"
            >
              View Results
            </Link>
          </div>
        </div>

        {/* Right column: proof card */}
        <div className="lg:w-[45%] flex items-center justify-center mt-10 lg:mt-0">
          <ProofCard />
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   INTRO ANIMATION — FIXED
   ══════════════════════════════════════════════════════════ */
const INTRO_ANIMATION = {
  opacity: 0,
  scale: 0.985,
  filter: "blur(2px)",
};
const INTRO_ANIMATION_FINAL = {
  opacity: 1,
  scale: 1,
  filter: "blur(0px)",
  duration: 0.8,
  ease: "power3.out",
};

const STARLIGHT_EFFECT = {
  particleDensity: 0.02,
  radialGlow: true,
};

const LIGHT_SWEEP = {
  duration: 1.2,
  gradient: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
};

/* ══════════════════════════════════════════════════════════
   CONSTANTS FOR CONFIGURATION
   ══════════════════════════════════════════════════════════ */
const SCROLL_LENGTH = 300; // Total scroll length in vh
const PIN_DURATION = 200; // Pinned duration in vh
const LOGO_CORNER_SCALE = 0.32; // Scale of logo in top-left corner
const SCENE_FADE_RANGE = [0.3, 0.7]; // Range for scene crossfade
const SWEEP_INTENSITY = 0.12; // Intensity of light sweep

/* ══════════════════════════════════════════════════════════
   MAIN SCROLL-DRIVEN COMPONENT
   ══════════════════════════════════════════════════════════ */

export default function CinematicHero() {
  const reduced = usePrefersReducedMotionSafe();

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<LogoIntroHandle>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const auroraBgRef = useRef<HTMLDivElement>(null);
  const hookRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;

    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const containerEl = logoRef.current?.containerEl;

    if (!section || !viewport || !containerEl) return;

    // GSAP ScrollTrigger timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${PIN_DURATION}vh`,
        pin: viewport,
        scrub: true,
      },
    });

    // Scene 1: Logo center with starlight shimmer
    tl.fromTo(
      containerEl,
      { opacity: 0, scale: 0.985 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          // Add starlight shimmer
          gsap.to(containerEl, {
            background: `radial-gradient(circle, rgba(255,255,255,${SWEEP_INTENSITY}) 0%, transparent 100%)`,
            duration: 1.5,
          });

          // Add light sweep
          gsap.to(containerEl, {
            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.1), transparent)",
            duration: 1.2,
            onComplete: () => {
              gsap.set(containerEl, { backgroundImage: "none" });
            },
          });
        },
      }
    );

    // Scene 2: Hook statement
    if (hookRef.current) {
      tl.fromTo(
        hookRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: "power2.out" },
        SCENE_FADE_RANGE[0]
      );
      tl.to(
        hookRef.current,
        { opacity: 0, y: -20, ease: "power2.in" },
        SCENE_FADE_RANGE[1]
      );
    }

    // Scene 3: Modules
    if (contentRef.current) {
      const modules = contentRef.current.querySelectorAll(".module");
      modules.forEach((module, i) => {
        const stagger = i * 0.1;
        tl.fromTo(
          module,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, ease: "power2.out" },
          SCENE_FADE_RANGE[1] + stagger
        );
      });
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [reduced]);

  if (reduced) return <StaticHero />;

  return (
    <section ref={sectionRef} className="scroll-hero">
      <div ref={viewportRef} className="scroll-hero-viewport">
        {/* Layer 0: Backgrounds */}
        <IntroBackground ref={introRef} />
        <div ref={auroraBgRef} className="hero-bg-layer">
          <HeroBackground />
        </div>
        <div className="hero-overlay bg-[linear-gradient(180deg,rgba(6,10,8,0.28)_0%,rgba(6,10,8,0.42)_52%,rgba(6,10,8,0.58)_100%)]" />

        {/* Persistent logo — starts centered, scrolls to top-left */}
        <LogoIntro ref={logoRef} />

        {/* Scroll indicator */}
        <div ref={scrollIndicatorRef} className="scroll-indicator">
          <span className="scroll-indicator-text">Scroll</span>
          <div className="scroll-indicator-line" />
          <div className="scroll-indicator-chevron" />
        </div>

        {/* Layer 2: Hook statement */}
        <div
          ref={hookRef}
          className="scroll-layer hook-layer"
          style={{ opacity: 0 }}
        >
          <HookLayer />
        </div>

        {/* Layer 3: Services universe */}
        <div
          ref={contentRef}
          className="scroll-layer content-layer"
          style={{ opacity: 0 }}
        >
          <ServicesLayer />
        </div>

        {/* Bottom vignette */}
        <div className="hero-bottom-fade bg-[linear-gradient(180deg,rgba(8,14,12,0)_0%,rgba(8,14,12,0.26)_60%,rgba(8,14,12,0.40)_100%)]" />
      </div>
    </section>
  );
}
