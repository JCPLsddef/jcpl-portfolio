import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";
import LogoLoop from "@/components/home/LogoLoop";
import FounderBlock from "@/components/home/FounderBlock";
import PricingStatement from "@/components/home/PricingStatement";

/* Dynamic imports for below-the-fold sections — reduces initial JS bundle */
const ClientReality = dynamic(() => import("@/components/home/ClientReality"));
const Differentiation = dynamic(() => import("@/components/home/Differentiation"));
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const QualificationCTA = dynamic(() => import("@/components/home/QualificationCTA"));
const BenefitsRail = dynamic(() => import("@/components/sections/BenefitsRail"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const CalendarSection = dynamic(() => import("@/components/sections/CalendarSection"));

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <Hero />

      {/* 2 — Client logo ticker */}
      <div className="bg-sv-surface py-6">
        <p
          className="text-center uppercase"
          style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "#64748b", marginBottom: 16 }}
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
          className="text-center"
          style={{ fontSize: "0.85rem", color: "#64748b", marginTop: 12 }}
        >
          Each is generating qualified inbound calls from their system.
        </p>
      </div>

      {/* 3 — The Reality */}
      <ClientReality />

      {/* 4 — The Difference */}
      <Differentiation />

      {/* 5 — Founder block */}
      <FounderBlock />

      {/* 6 — Proof */}
      <FeaturedCaseStudy />

      {/* 7 — Finally a System (benefit cards) */}
      <BenefitsRail />

      {/* 8 — Who This Is For */}
      <QualificationCTA />

      {/* 9 — Pricing statement (simplified) */}
      <PricingStatement />

      {/* 10 — FAQ + Booking calendar */}
      <FAQ />
      <CalendarSection />
    </>
  );
}
