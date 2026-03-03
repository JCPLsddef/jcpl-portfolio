"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { marbleSystemSection } from "@/lib/content";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import SectionLabel from "@/components/ui/SectionLabel";
import MarbleRailsAnimation from "./MarbleRailsAnimation";
import { SCROLL } from "@/lib/marbleConfig";

gsap.registerPlugin(ScrollTrigger);

const STEP_THRESHOLDS = SCROLL.STEP_THRESHOLDS;

function getActiveStep(progress: number): number | null {
  if (progress >= STEP_THRESHOLDS[2]) return 2;
  if (progress >= STEP_THRESHOLDS[1]) return 1;
  if (progress >= STEP_THRESHOLDS[0]) return 0;
  return null;
}

export default function MarbleSystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);
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
    if (reduced || !sectionRef.current || !viewportRef.current) return;

    const pinDuration = isMobile ? SCROLL.PIN_DURATION_MOBILE : SCROLL.PIN_DURATION_DESKTOP;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${pinDuration}vh`,
        pin: viewportRef.current,
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          setProgress(p);
          setActiveStep(getActiveStep(p));
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
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
          <div className="max-w-4xl mx-auto">
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
            <div className="mt-16">
              <MarbleRailsAnimation progress={1} reduced={true} />
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
        ref={viewportRef}
        className="min-h-screen flex flex-col md:flex-row md:items-center md:justify-between gap-16 md:gap-20 lg:gap-28 py-20 md:py-24"
      >
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-16 md:gap-20 lg:gap-28 w-full">
          <div className="flex-1 max-w-xl">
            <SectionLabel
              label={marbleSystemSection.label}
              className="mb-4 text-neutral-500"
            />
            <h2 className="text-[clamp(32px,4vw,48px)] font-[800] text-neutral-900 leading-[1.15] tracking-[-0.025em]">
              {marbleSystemSection.headline}
            </h2>
            <p className="mt-5 text-neutral-600 leading-[1.75] text-[17px]">
              {marbleSystemSection.subheadline}
            </p>

            <div className="mt-12 md:mt-16 space-y-8">
              {steps.map((step, i) => {
                const isRevealed = activeStep !== null && i <= activeStep;
                const isCurrent = activeStep === i;
                return (
                  <div
                    key={i}
                    className="transition-all duration-700 ease-out"
                    style={{
                      opacity: isRevealed ? (isCurrent ? 1 : 0.4) : 0,
                      transform: isRevealed ? "translateY(0)" : "translateY(8px)",
                      pointerEvents: isRevealed ? "auto" : "none",
                    }}
                  >
                    <h3
                      className={`text-lg font-semibold ${
                        isCurrent ? "text-neutral-900" : "text-neutral-500"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-2 leading-relaxed ${
                        isCurrent ? "text-neutral-600" : "text-neutral-500"
                      }`}
                    >
                      {step.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center min-h-[320px] md:min-w-[420px]">
            <MarbleRailsAnimation progress={progress} reduced={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
