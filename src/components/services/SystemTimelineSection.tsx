"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { marbleSystemSection } from "@/lib/content";
import { Reveal } from "@/components/motion";

const steps = marbleSystemSection.steps;

function TimelineNode({ num }: { num: number }) {
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-base shrink-0"
      style={{
        background: "#1E1A14",
        border: "2px solid #D4A853",
        color: "#D4A853",
        boxShadow: "0 0 30px rgba(212, 168, 83, 0.2)",
      }}
    >
      {String(num).padStart(2, "0")}
    </div>
  );
}

export default function SystemTimelineSection() {
  return (
    <section
      id="marble-system"
      className="section !pt-8 md:!pt-12 lg:!pt-16"
      style={{ background: "#0D0B09" }}
    >
      <div className="container py-10 pb-14 md:py-12 md:pb-16 lg:py-14 lg:pb-20">
        <Reveal>
          <SectionLabel
            label={marbleSystemSection.label}
            className="mb-4 !text-[#D4A853]"
          />
          <h2 className="text-[clamp(32px,4vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em]">
            {marbleSystemSection.headline}
          </h2>
          <p className="mt-5 text-[#D2C9B8] leading-[1.75] text-[17px] max-w-lg">
            {marbleSystemSection.subheadline}
          </p>
        </Reveal>

        {/* Desktop: 55% left text, 45% right timeline */}
        <div className="mt-8 md:mt-10 hidden lg:grid lg:grid-cols-[55%_45%] lg:gap-12 lg:items-start">
          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className="border-l-2 pl-6"
                style={{ borderLeftColor: "#D4A853" }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-1.5 md:mt-2 leading-relaxed text-[#D2C9B8] text-[15px] md:text-base">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
          <div className="relative flex flex-col items-center">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(to bottom, #D4A853, rgba(212, 168, 83, 0.3))",
              }}
            />
            {steps.map((_, i) => (
              <div key={i} className="relative z-10 py-6 first:pt-0">
                <TimelineNode num={i + 1} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stack with numbered badges */}
        <div className="mt-8 md:mt-10 space-y-8 lg:hidden">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <TimelineNode num={i + 1} />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-1.5 leading-relaxed text-[#D2C9B8] text-[15px]">
                  {step.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
