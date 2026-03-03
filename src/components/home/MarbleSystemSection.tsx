"use client";

import { marbleSystemSection } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import MarbleRailsAnimation from "./MarbleRailsAnimation";

export default function MarbleSystemSection() {
  return (
    <SectionWrapper
      id="marble-system"
      variant="default"
      className="!bg-[#fefefe]"
    >
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel
          label={marbleSystemSection.label}
          className="mb-5 text-sv-text-muted"
        />
        <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-sv-base leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto">
          {marbleSystemSection.headline}
        </h2>
        <p className="mt-5 text-sv-text-dim max-w-lg mx-auto leading-[1.75] text-[17px]">
          {marbleSystemSection.subheadline}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="py-8 md:py-12 max-w-3xl mx-auto">
          <MarbleRailsAnimation />
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
