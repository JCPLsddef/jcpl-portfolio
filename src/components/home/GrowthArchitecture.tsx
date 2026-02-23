"use client";

import { growthArchitecture } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import ScrollVelocity from "./ScrollVelocity";

/* ─── Pillar Icons ─── */
const pillarIcons: Record<string, React.ReactNode> = {
  authority: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  conversion: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  acquisition: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  optimization: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 14.5a9 9 0 0116 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 14.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="14.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 18v3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  ),
};

/* All accent colors unified to electric blue */
const blueAccent = {
  border: "rgba(37,99,235,0.4)",
  bg: "rgba(37,99,235,0.2)",
  glow: "rgba(37,99,235,0.12)",
  text: "#4B8EFF",
};

export default function GrowthArchitecture() {
  return (
    <SectionWrapper id="system" variant="alt">
      <Reveal className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0 mb-14 md:mb-16">
        <SectionLabel label={growthArchitecture.label} className="mb-5" />
        <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em] max-w-xl lg:max-w-none">
          {growthArchitecture.headline}
        </h2>
        <p className="mt-5 text-cg-body max-w-lg leading-[1.75] text-[17px]">
          {growthArchitecture.subheadline}
        </p>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
        {growthArchitecture.pillars.map((pillar, i) => {
          return (
            <Reveal key={pillar.id} delay={0.08 * i}>
              <div className="group relative rounded-[14px] bg-cg-card border border-[rgba(255,255,255,0.07)] p-8 md:p-9 h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-[rgba(37,99,235,0.45)] hover:-translate-y-[2px]">
                {/* Icon */}
                <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[rgba(37,99,235,0.2)] border border-[rgba(37,99,235,0.4)] text-cg-accent-lt">
                  {pillarIcons[pillar.id]}
                </div>

                {/* Title + Subtitle */}
                <h3 className="text-[18px] font-bold text-white mb-1 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-[13px] text-cg-muted mb-5">
                  {pillar.id === "optimization"
                    ? "I look at the numbers every week and cut what is not working. Lower cost per lead. More calls. The system compounds so you pull further ahead of your competition over time."
                    : pillar.subtitle}
                </p>

                {/* Points */}
                <ul className="space-y-2.5 mt-auto">
                  {pillar.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[16px] text-cg-body leading-[1.75]">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                        className="shrink-0 mt-[2px]"
                      >
                        <path d="M3.5 7.5l2.5 2.5 4.5-5" stroke="#4B8EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
