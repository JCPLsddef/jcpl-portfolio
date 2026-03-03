import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";
import SpotsLeftSection from "@/components/home/SpotsLeftSection";
import LogoLoop from "@/components/home/LogoLoop";

/* Dynamic imports for below-the-fold sections — reduces initial JS bundle */
const DataBenchmarkBlock = dynamic(() => import("@/components/home/DataBenchmarkBlock"));
const ClientReality   = dynamic(() => import("@/components/home/ClientReality"));
const Differentiation = dynamic(() => import("@/components/home/Differentiation"));
const ServicesShowcase = dynamic(() => import("@/components/home/ServicesShowcase"));
const PortfolioShowcase  = dynamic(() => import("@/components/home/PortfolioShowcase"));
const GrowthArchitecture = dynamic(() => import("@/components/home/GrowthArchitecture"));
const FeaturedCaseStudy  = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const QualificationCTA   = dynamic(() => import("@/components/home/QualificationCTA"));
const InfrastructureTiers = dynamic(() => import("@/components/home/InfrastructureTiers"));
const HowWeWork  = dynamic(() => import("@/components/home/HowWeWork"));
const MarbleSystemSection = dynamic(() => import("@/components/home/MarbleSystemSection"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const FinalConvictionSection = dynamic(() => import("@/components/home/FinalConvictionSection"));

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero: Hook + authority signal */}
      <Hero />

      {/* 2 — Proof: Scrolling client logo strip */}
      <div className="bg-sv-surface py-6">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-sv-text-muted mb-5">
          CLIENTS
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
      </div>
      <DataBenchmarkBlock />

      {/* 3 — Diagnosis: Pain bullets — what they're living with */}
      <ClientReality />

      {/* 4 — Trust Bridge: Agencies vs. Growth Architecture — why this is different */}
      <Differentiation />

      {/* 4a — Marble System: 3-step visualization (premium animation) */}
      <MarbleSystemSection />

      {/* 4b — Services Showcase: What we build for brands (Figma-style) */}
      <ServicesShowcase />

      {/* 4c — Portfolio: Custom build showcase */}
      <PortfolioShowcase />

      {/* 5 — System: The 4-pillar Growth Architecture */}
      <GrowthArchitecture />

      {/* 6 — Case Study: Proof the system works */}
      <FeaturedCaseStudy />

      {/* 7 — Who It's For: Qualification grid */}
      <QualificationCTA />

      {/* 8 — Offer Stack: Infrastructure tiers */}
      <InfrastructureTiers />

      {/* 9 — Process: 3-step — Diagnose → Build → Scale */}
      <HowWeWork />

      {/* 10 — FAQ: Objection handling */}
      <FAQSection />

      {/* 11 — Final CTA: Spots Left */}
      <SpotsLeftSection />

      {/* 12 — Conviction: Final visual momentum block before footer */}
      <FinalConvictionSection />
    </>
  );
}
