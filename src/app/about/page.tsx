import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AboutHero from "@/components/about/AboutHero";
import MetricsRow from "@/components/about/MetricsRow";
import Principles from "@/components/about/Principles";
import AboutHowIBuiltThis from "@/components/about/AboutHowIBuiltThis";
import WorkTimeline from "@/components/about/WorkTimeline";
import PhilosophyBlock from "@/components/about/PhilosophyBlock";
import AdvantageCompare from "@/components/about/AdvantageCompare";
import AboutCTA from "@/components/about/AboutCTA";
import SpotsLeftSection from "@/components/home/SpotsLeftSection";

export const metadata: Metadata = buildMetadata({
  title: "About: Growth Partner for Service Businesses",
  description:
    "I build complete growth systems, not isolated deliverables. Learn why integrated execution beats fragmented freelancers every time.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* ── Hero: Copy + Portrait (animation untouched) ── */}
      <SectionWrapper className="pt-28 md:pt-36 !pb-10 md:!pb-14">
        <AboutHero />
      </SectionWrapper>

      {/* ── Philosophy Statement (MOVED UP) ── */}
      <SectionWrapper>
        <PhilosophyBlock />
      </SectionWrapper>

      {/* ── I Run 3 Partnerships at a Time ── */}
      <SpotsLeftSection />

      {/* ── Credibility / Metrics — tight to hero ── */}
      <SectionWrapper className="!py-6 md:!py-8">
        <MetricsRow />
      </SectionWrapper>

      {/* ── How I Built This (NEW) ── */}
      <AboutHowIBuiltThis />

      {/* Divider between Why I Operate Differently and How I Operate */}
      <hr className="border-t border-slate-700/50 my-2 mx-auto max-w-xs" />

      {/* ── Operating Principles (3 cards) ── */}
      <SectionWrapper>
        <Principles />
      </SectionWrapper>

      {/* ── Working Model Timeline ── */}
      <SectionWrapper variant="surface">
        <WorkTimeline />
      </SectionWrapper>

      {/* ── Integrated vs Fragmented ── */}
      <SectionWrapper variant="surface">
        <AdvantageCompare />
      </SectionWrapper>

      {/* ── Final CTA ── */}
      <AboutCTA />
    </>
  );
}
