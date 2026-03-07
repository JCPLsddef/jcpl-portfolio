"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { marbleSystemSection } from "@/lib/content";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import SectionLabel from "@/components/ui/SectionLabel";
import BlurText from "@/components/ui/BlurText";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const MARKERS = [0.18, 0.52, 0.86] as const;

const PARTICLE_COLORS = ["#ffffff", "#fb923c", "#f97316", "#fef3c7"];
const PARTICLE_COUNT = 14;

interface MarbleSystemSectionProps {
  impactTargetRef?: React.RefObject<HTMLElement | null>;
  onImpactComplete?: () => void;
}

export default function MarbleSystemSection({
  impactTargetRef,
  onImpactComplete,
}: MarbleSystemSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const motionPathRef = useRef<SVGPathElement>(null);
  const marbleRef = useRef<SVGGElement>(null);
  const setActiveStepRef = useRef<(step: number) => void>(() => {});
  const handoffTriggeredRef = useRef(false);
  const overlayBallRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const impactContainerRef = useRef<HTMLDivElement>(null);
  const dropTweenRef = useRef<gsap.core.Tween | null>(null);

  const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [activeStep, setActiveStep] = useState(0);
  const [markerPositions, setMarkerPositions] = useState<Array<{ x: number; y: number }>>([]);

  const reduced = usePrefersReducedMotionSafe();

  setActiveStepRef.current = setActiveStep;

  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 767px)");
    const mqTablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
    const update = () => {
      if (mqMobile.matches) setBreakpoint("mobile");
      else if (mqTablet.matches) setBreakpoint("tablet");
      else setBreakpoint("desktop");
    };
    update();
    mqMobile.addEventListener("change", update);
    mqTablet.addEventListener("change", update);
    return () => {
      mqMobile.removeEventListener("change", update);
      mqTablet.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const path = motionPathRef.current;
    if (!path) return;
    const total = path.getTotalLength();
    const positions = MARKERS.map((p) => {
      const pt = path.getPointAtLength(p * total);
      return { x: pt.x, y: pt.y };
    });
    setMarkerPositions(positions);
  }, [reduced]);

  useEffect(() => {
    if (
      reduced ||
      !sectionRef.current ||
      !pinRef.current ||
      !motionPathRef.current ||
      !marbleRef.current
    ) {
      return;
    }

    const path = motionPathRef.current;
    const startX = 580;
    const tubeTopY = 80;
    const dropDistance = 160;

    const pinEnd =
      breakpoint === "mobile" ? "+=1100" : breakpoint === "tablet" ? "+=1600" : "+=2000";

    gsap.set(marbleRef.current, {
      x: startX,
      y: tubeTopY,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transformOrigin: "50% 50%",
    });

    const runImpactEffects = (x: number, y: number) => {
      const container = impactContainerRef.current;
      if (!container) return;

      const particles: HTMLDivElement[] = [];
      const size = 6;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = document.createElement("div");
        p.className = "absolute rounded-full pointer-events-none";
        p.style.cssText = `
          left: ${x - size / 2}px; top: ${y - size / 2}px; width: ${size}px; height: ${size}px;
          background: ${PARTICLE_COLORS[i % PARTICLE_COLORS.length]};
          opacity: 1;
        `;
        container.appendChild(p);
        particles.push(p);
      }

      particles.forEach((p, i) => {
        const angle = (i / PARTICLE_COUNT) * Math.PI * 2 + Math.random() * 0.5;
        const dist = 60 + Math.random() * 80;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;
        gsap.to(p, {
          x: tx,
          y: ty,
          opacity: 0,
          scale: 0.5,
          duration: 0.6,
          stagger: 0.02,
          ease: "power2.out",
          onComplete() {
            p.remove();
          },
        });
      });

      const ripple = document.createElement("div");
      ripple.className = "absolute rounded-full border-2 border-white/80 pointer-events-none";
      ripple.style.cssText = `
        left: ${x - 20}px; top: ${y - 20}px; width: 40px; height: 40px;
        transform: scale(0.3);
        opacity: 0.8;
      `;
      container.appendChild(ripple);
      gsap.to(ripple, {
        scale: 2,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      });

      const flash = document.createElement("div");
      flash.className = "absolute rounded-full bg-white/60 pointer-events-none";
      flash.style.cssText = `
        left: ${x - 40}px; top: ${y - 40}px; width: 80px; height: 80px;
        opacity: 0;
      `;
      container.appendChild(flash);
      gsap.to(flash, { opacity: 0.6, duration: 0.05 });
      gsap.to(flash, { opacity: 0, duration: 0.15, delay: 0.05, onComplete: () => flash.remove() });
    };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: pinEnd,
          pin: pinRef.current,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate() {
            const p = tl.progress();
            let next = 0;
            if (p >= MARKERS[2]) next = 3;
            else if (p >= MARKERS[1]) next = 2;
            else if (p >= MARKERS[0]) next = 1;
            setActiveStepRef.current(next);
          },
          onLeave() {
            if (reduced || handoffTriggeredRef.current || !impactTargetRef) return;
            if (!marbleRef.current || !overlayBallRef.current || !overlayRef.current) return;
            if (!impactTargetRef.current) return;

            handoffTriggeredRef.current = true;

            const ballRect = marbleRef.current.getBoundingClientRect();
            const startX = ballRect.left + ballRect.width / 2;
            const startY = ballRect.top + ballRect.height / 2;

            gsap.set(marbleRef.current, { opacity: 0, visibility: "hidden" });

            const targetRect = impactTargetRef.current.getBoundingClientRect();
            const targetX = targetRect.left + targetRect.width / 2;
            const targetY = targetRect.top + 80;

            const deltaX = targetX - startX;
            const deltaY = targetY - startY;

            gsap.set(overlayRef.current, { opacity: 1 });
            gsap.set(overlayBallRef.current, {
              left: startX - 30,
              top: startY - 30,
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              visibility: "visible",
            });

            dropTweenRef.current = gsap.to(overlayBallRef.current, {
              x: deltaX,
              y: deltaY,
              duration: 0.7,
              ease: "power3.in",
              onComplete() {
                runImpactEffects(targetX, targetY);
                onImpactComplete?.();
                gsap.to(overlayBallRef.current, {
                  opacity: 0,
                  duration: 0.2,
                  onComplete() {
                    gsap.set(overlayBallRef.current, { visibility: "hidden" });
                  },
                });
              },
            });
          },
        },
        defaults: { ease: "none" },
      });

      tl.to(
        marbleRef.current,
        {
          duration: 0.95,
          motionPath: {
            path,
            align: path,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 0.95,
          },
          scale: 1.15,
          opacity: 1,
          ease: "none",
        },
        0
      );

      tl.to(
        marbleRef.current,
        {
          duration: 0.05,
          x: "+=10",
          y: `+=${dropDistance}`,
          scale: 1.12,
          opacity: 0.65,
          filter: "blur(1.2px)",
          ease: "power2.out",
        },
        0.95
      );
    }, sectionRef);
    return () => {
      dropTweenRef.current?.kill();
      ctx.revert();
    };
  }, [reduced, breakpoint, impactTargetRef, onImpactComplete]);

  const steps = marbleSystemSection.steps ?? [];

  if (reduced) {
    return (
      <section
        ref={sectionRef}
        id="marble-system"
        className="section bg-[#0a0f1e] py-16 md:py-20 !pt-8 md:!pt-12"
      >
        <div className="container">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 lg:gap-16">
            <div className="flex-1 max-w-xl">
              <SectionLabel
                label={marbleSystemSection.label}
                className="mb-4 text-sv-text-muted"
              />
              <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em]">
                {marbleSystemSection.headline}
              </h2>
              <p className="mt-5 text-sv-text-sub max-w-xl leading-[1.75] text-[17px]">
                {marbleSystemSection.subheadline}
              </p>
              <div className="mt-8 md:mt-10 space-y-3 md:space-y-4 min-h-[180px] md:min-h-[200px]">
                {steps.map((step, i) => (
                  <div key={i} className="border-l-2 border-[#f97316] pl-4 md:pl-6">
                    <h3 className="text-lg md:text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-1.5 md:mt-2 text-sv-text-sub leading-relaxed text-[15px] md:text-base">{step.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center min-h-[200px] w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[340px] mx-auto shrink-0">
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
                  strokeWidth="65"
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
      className="section bg-[#0a0f1e] !pt-8 md:!pt-12 lg:!pt-16"
    >
      <div
        ref={pinRef}
        className="min-h-[85vh] lg:min-h-[90vh] flex flex-col md:flex-row md:items-center md:justify-center pt-10 pb-14 md:pt-12 md:pb-16 lg:pt-14 lg:pb-20"
      >
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12 lg:gap-16 w-full">
          <div className="flex-1 max-w-xl">
            <SectionLabel
              label={marbleSystemSection.label}
              className="mb-4 text-sv-text-muted"
            />
            <h2 className="text-[clamp(32px,4vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em]">
              {marbleSystemSection.headline}
            </h2>
            <p className="mt-5 text-sv-text-sub leading-[1.75] text-[17px] max-w-lg">
              {marbleSystemSection.subheadline}
            </p>

            <div className="mt-8 md:mt-10 min-h-[180px] md:min-h-[200px] lg:min-h-[220px] flex flex-col space-y-3 md:space-y-4">
              {steps.map((step, i) => {
                const isActive = activeStep === i + 1;
                const isRevealed = activeStep >= i + 1;
                return (
                  <div
                    key={i}
                    className="border-l-2 pl-4 md:pl-6 transition-all duration-300"
                    style={{
                      borderLeftColor: isActive ? "#f97316" : "rgba(148,163,184,0.3)",
                      opacity: isRevealed ? (isActive ? 1 : 0.5) : 0.4,
                    }}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {isRevealed ? (
                        <BlurText
                          text={step.title}
                          active={true}
                          animateBy="words"
                          delay={80}
                          stepDuration={0.4}
                          className={isActive ? "font-[600]" : ""}
                          animationFrom={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                          animationTo={[
                            { filter: "blur(2px)", opacity: 0.7, y: 2 },
                            { filter: "blur(0px)", opacity: 1, y: 0 },
                          ]}
                        />
                      ) : (
                        step.title
                      )}
                    </h3>
                    <p className="mt-1.5 md:mt-2 leading-relaxed text-sv-text-sub text-[15px] md:text-base">
                      {isRevealed ? (
                        <BlurText
                          text={step.copy}
                          active={true}
                          animateBy="words"
                          delay={40}
                          stepDuration={0.5}
                          direction="bottom"
                          animationFrom={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                          animationTo={[
                            { filter: "blur(2px)", opacity: 0.6, y: 2 },
                            { filter: "blur(0px)", opacity: 1, y: 0 },
                          ]}
                        />
                      ) : (
                        step.copy
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="flex-1 flex items-center justify-center w-full mx-auto shrink-0
              max-w-[200px] min-h-[200px]
              sm:max-w-[240px] sm:min-h-[220px]
              md:max-w-[280px] md:min-h-[260px]
              lg:max-w-[340px] lg:min-h-[300px]"
          >
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
                strokeWidth="65"
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

              {markerPositions.length === 3 &&
                markerPositions.map((pos, i) => (
                  <g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
                    <circle
                      r="14"
                      fill="white"
                      stroke="#ea580c"
                      strokeWidth="2"
                      opacity="0.95"
                    />
                    <text
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="#ea580c"
                      fontSize="12"
                      fontWeight="700"
                      fontFamily="system-ui, sans-serif"
                    >
                      {i + 1}
                    </text>
                  </g>
                ))}

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

      {/* Fixed overlay for cinematic drop and impact effects */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[60] pointer-events-none opacity-0"
        aria-hidden
      >
        <div
          ref={overlayBallRef}
          className="absolute w-[60px] h-[60px] rounded-full invisible"
          style={{
            background: "radial-gradient(circle at 32% 32%, rgba(255,255,255,0.98), #FFFFFF 55%, rgba(248,248,252,0.98))",
            boxShadow: "0 0 20px rgba(255,255,255,0.6)",
          }}
        />
        <div ref={impactContainerRef} className="absolute inset-0" />
      </div>
    </section>
  );
}
