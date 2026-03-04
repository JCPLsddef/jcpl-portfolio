"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { marbleSystemSection } from "@/lib/content";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import SectionLabel from "@/components/ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function MarbleSystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const motionPathRef = useRef<SVGPathElement>(null);
  const marbleRef = useRef<SVGGElement>(null);
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ] as const;

  const [isMobile, setIsMobile] = useState(false);

  const reduced = usePrefersReducedMotionSafe();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const stepEls = stepRefs.map((r) => r.current).filter(Boolean);
    if (
      reduced ||
      !sectionRef.current ||
      !pinRef.current ||
      !motionPathRef.current ||
      !marbleRef.current ||
      stepEls.length !== 3
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const entryAboveY = 40;
      const tubeTopY = 80;
      const startX = 580;
      const dropDistance = 180;
      const [d0, d1, d2] = stepRefs.map((r) => r.current).filter(Boolean) as [HTMLDivElement, HTMLDivElement, HTMLDivElement];

      gsap.set(marbleRef.current, {
        x: startX,
        y: entryAboveY,
        scale: 1,
        opacity: 0.9,
        filter: "blur(2px)",
        transformOrigin: "50% 50%",
      });

      // Initial step states: Diagnose incoming, Build & Scale hidden
      gsap.set(d0, { opacity: 0, y: 10, filter: "blur(1px)" });
      gsap.set(d1, { opacity: 0, y: 10, filter: "blur(1px)" });
      gsap.set(d2, { opacity: 0, y: 10, filter: "blur(1px)" });

      const path = motionPathRef.current;
      if (!path) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: isMobile ? "+=2200" : "+=3000",
          pin: pinRef.current,
          scrub: 1.2,
          anticipatePin: 1,
        },
        defaults: { ease: "none" },
      });

      // Segment A – entrance (0.00–0.15)
      tl.to(
        marbleRef.current,
        {
          duration: 0.15,
          y: tubeTopY,
          scale: 1.04,
          opacity: 1,
          filter: "blur(0.6px)",
          ease: "power2.out",
        },
        0
      );

      // Segment B – motion along path (0.15–0.90)
      tl.to(
        marbleRef.current,
        {
          duration: 0.75,
          motionPath: {
            path,
            align: path,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1,
          },
          scale: 1.26,
          opacity: 1,
          filter: "blur(0px)",
        },
        0.15
      );

      // Segment C – forward nudge + drop (0.90–1.00)
      tl.to(
        marbleRef.current,
        {
          duration: 0.1,
          x: `+=12`,
          y: `+=${dropDistance}`,
          scale: 1.15,
          opacity: 0.65,
          filter: "blur(1.4px)",
          ease: "power2.out",
        },
        0.9
      );

      // Step 0 – Diagnose: fade in 0.10–0.15, active 0.15–0.38, subdued 0.38–0.42
      tl.to(d0, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.05, ease: "power2.out" }, 0.1);
      tl.to(d0, { opacity: 0.4, y: 4, filter: "blur(0.5px)", duration: 0.04, ease: "none" }, 0.38);

      // Step 1 – Build: fade in 0.34–0.38, active 0.38–0.68, subdued 0.68–0.72
      tl.to(d1, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.04, ease: "power2.out" }, 0.34);
      tl.to(d1, { opacity: 0.4, y: 4, filter: "blur(0.5px)", duration: 0.04, ease: "none" }, 0.68);

      // Step 2 – Scale: fade in 0.64–0.68, active 0.68–0.90
      tl.to(d2, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.04, ease: "power2.out" }, 0.64);
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced, isMobile]);

  const steps = marbleSystemSection.steps ?? [];

  if (reduced) {
    return (
      <section
        ref={sectionRef}
        id="marble-system"
        className="section bg-[#fafafa] py-20 md:py-28"
      >
        <div className="container">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-16 md:gap-20">
            <div className="flex-1 max-w-xl">
              <SectionLabel
                label={marbleSystemSection.label}
                className="mb-4 text-neutral-500"
              />
              <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-neutral-900 leading-[1.15] tracking-[-0.025em]">
                {marbleSystemSection.headline}
              </h2>
              <p className="mt-5 text-neutral-600 max-w-xl leading-[1.75] text-[17px]">
                {marbleSystemSection.subheadline}
              </p>
              <div className="mt-16 space-y-10">
                {steps.map((step, i) => (
                  <div key={i} className="border-l-2 border-neutral-300 pl-8">
                    <h3 className="text-xl font-semibold text-neutral-900">{step.title}</h3>
                    <p className="mt-2 text-neutral-600 leading-relaxed">{step.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center min-h-[360px] md:min-h-[420px] lg:min-h-[520px]">
              <svg
                ref={svgRef}
                width="700"
                height="1400"
                viewBox="0 0 700 1400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full h-auto"
                aria-hidden="true"
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient
                    id="tubeGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#fb923c" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                  <radialGradient id="tubeMarbleGloss" cx="32%" cy="32%" r="50%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.98)" stopOpacity="1" />
                    <stop offset="55%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="100%" stopColor="rgba(248,248,252,0.98)" stopOpacity="1" />
                  </radialGradient>
                  <filter id="tubeMarbleGlow" x="-120%" y="-120%" width="340%" height="340%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  id="tube"
                  d="M 580 80 
                     L 580 380 
                     Q 580 480, 480 480 
                     L 220 480 
                     Q 120 480, 120 580 
                     L 120 820 
                     Q 120 920, 220 920 
                     L 480 920 
                     Q 580 920, 580 1020 
                     L 580 1320"
                  stroke="url(#tubeGradient)"
                  strokeWidth="105"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                <g transform="translate(580,1020)">
                  <circle
                    cx="0"
                    cy="0"
                    r="30"
                    fill="url(#tubeMarbleGloss)"
                    filter="url(#tubeMarbleGlow)"
                    opacity="0.9"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="marble-system"
      className="section bg-[#fafafa]"
    >
      <div
        ref={pinRef}
        className="min-h-screen flex flex-col md:flex-row md:items-center md:justify-center py-24 md:py-28"
      >
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-16 md:gap-24 lg:gap-32 w-full">
          <div className="flex-1 max-w-xl">
            <SectionLabel
              label={marbleSystemSection.label}
              className="mb-4 text-neutral-500"
            />
            <h2 className="text-[clamp(32px,4vw,52px)] font-[800] text-neutral-900 leading-[1.15] tracking-[-0.025em]">
              {marbleSystemSection.headline}
            </h2>
            <p className="mt-5 text-neutral-600 leading-[1.75] text-[17px] max-w-lg">
              {marbleSystemSection.subheadline}
            </p>

            <div className="mt-10 md:mt-12 min-h-[280px] md:min-h-[320px] flex flex-col space-y-6 md:space-y-8">
              {steps.map((step, i) => (
                <div key={i} ref={stepRefs[i]}>
                  <h3 className="text-lg md:text-xl font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-neutral-600">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center min-h-[360px] md:min-h-[460px] lg:min-h-[620px]">
            <svg
              ref={svgRef}
              width="700"
              height="1400"
              viewBox="0 0 700 1400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full h-auto"
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient
                  id="tubeGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="50%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <radialGradient id="tubeMarbleGloss" cx="32%" cy="32%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.98)" stopOpacity="1" />
                  <stop offset="55%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="100%" stopColor="rgba(248,248,252,0.98)" stopOpacity="1" />
                </radialGradient>
                <filter id="tubeMarbleGlow" x="-120%" y="-120%" width="340%" height="340%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                id="tube"
                d="M 580 80 
                   L 580 380 
                   Q 580 480, 480 480 
                   L 220 480 
                   Q 120 480, 120 580 
                   L 120 820 
                   Q 120 920, 220 920 
                   L 480 920 
                   Q 580 920, 580 1020 
                   L 580 1320"
                stroke="url(#tubeGradient)"
                strokeWidth="105"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

              <path
                ref={motionPathRef}
                id="motionPath"
                d="M 580 80 
                   L 580 380 
                   Q 580 480, 480 480 
                   L 220 480 
                   Q 120 480, 120 580 
                   L 120 820 
                   Q 120 920, 220 920 
                   L 480 920 
                   Q 580 920, 580 1020 
                   L 580 1320"
                stroke="transparent"
                strokeWidth="1"
                fill="none"
                opacity="0"
              />

              <g ref={marbleRef}>
                <circle
                  cx="0"
                  cy="0"
                  r="30"
                  fill="url(#tubeMarbleGloss)"
                  filter="url(#tubeMarbleGlow)"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
