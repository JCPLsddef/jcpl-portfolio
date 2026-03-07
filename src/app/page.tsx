import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";
import SpotsLeftSection from "@/components/home/SpotsLeftSection";
import LogoLoop from "@/components/home/LogoLoop";

/* Dynamic imports for below-the-fold sections — reduces initial JS bundle */
const ClientReality = dynamic(() => import("@/components/home/ClientReality"));
const Differentiation = dynamic(() => import("@/components/home/Differentiation"));
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));
const PremiumPricingSection = dynamic(
  () => import("@/components/pricing/PremiumPricingSection")
);
const MarbleToServicesBridge = dynamic(
  () => import("@/components/home/MarbleToServicesBridge")
);
const BenefitsRail = dynamic(() => import("@/components/sections/BenefitsRail"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const FinalConvictionSection = dynamic(
  () => import("@/components/home/FinalConvictionSection")
);
const CalendarSection = dynamic(() => import("@/components/sections/CalendarSection"));

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero: Hook + authority signal */}
      <Hero />

      {/* 2 — Proof: Scrolling client logo strip */}
      <div className="bg-sv-surface py-6">
        <p
          className="text-center uppercase tracking-[0.2em] mb-4"
          style={{ fontSize: "0.7rem", color: "#64748b" }}
        >
          Active partnerships across 5 industries
        </p>
        <LogoLoop
          logos={caseStudyLogos}
          speed={60}
          pauseOnHover
          fadeOut
          fadeOutColor="#0E1F35"
          logoHeight={44}
          gap={56}
          ariaLabel="Client logos"
        />
        <p
          className="text-center mt-3"
          style={{ fontSize: "0.85rem", color: "#64748b" }}
        >
          Each is generating qualified inbound calls from their system.
        </p>
      </div>

      {/* 3 — Diagnosis: Pain bullets — what they're living with */}
      <ClientReality />

      {/* 4 — Trust Bridge: Agencies vs. Growth Architecture — why this is different */}
      <Differentiation />

      {/* 4a — Marble System + cinematic drop → 4b Services Showcase */}
      <MarbleToServicesBridge />

      {/* 5 — Case Study: Proof the system works */}
      <FeaturedCaseStudy />

      {/* 7 — Who It's For: Qualification grid */}
      <QualificationCTA />

      {/* 8 — Offer Stack: Premium pricing tiers */}
      <PremiumPricingSection />

      {/* 9 — Benefits Rail: System benefits cards */}
      <BenefitsRail />

      {/* 10 — FAQ: Designjoy-style accordion + CTA card */}
      <FAQ />

      {/* 11 — Book a call: Cal.com inline (before final CTA) */}
      <CalendarSection />

      {/* 12 — Final CTA: Spots Left */}
      <SpotsLeftSection />

      {/* 13 — Conviction: Final visual momentum block */}
      <FinalConvictionSection />
    </>
  );
}
