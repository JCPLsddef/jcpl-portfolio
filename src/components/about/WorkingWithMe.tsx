"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { workingWithMe } from "@/lib/content";

export default function WorkingWithMe() {
  return (
    <div className="w-full py-16" style={{ background: "#131009" }}>
      <AnimatedSection className="max-w-2xl mx-auto">
        <SectionLabel label={workingWithMe.overline} className="mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-8">
          {workingWithMe.headline}
        </h2>
        <div className="space-y-6">
          {workingWithMe.phases.map((phase, i) => (
            <div
              key={phase.title}
              className="flex gap-4 pb-6 border-b border-zinc-800/40 last:border-0 last:pb-0"
            >
              <span className="text-[13px] font-semibold text-[#D4A853] shrink-0 w-16">
                {phase.title}
              </span>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
