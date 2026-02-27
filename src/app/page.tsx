import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";
import SpotsLeftSection from "@/components/home/SpotsLeftSection";
import type { LogoBallItem } from "@/components/home/LogoBallpit";

/* Dynamic imports for below-the-fold sections — reduces initial JS bundle */
// LogoBallpit: Three.js runs inside useEffect — SSR renders a safe div+canvas shell
const LogoBallpit     = dynamic(() => import("@/components/home/LogoBallpit"));
const DataBenchmarkBlock = dynamic(() => import("@/components/home/DataBenchmarkBlock"));
const ClientReality   = dynamic(() => import("@/components/home/ClientReality"));
const Differentiation = dynamic(() => import("@/components/home/Differentiation"));
const GrowthArchitecture = dynamic(() => import("@/components/home/GrowthArchitecture"));
const FeaturedCaseStudy  = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const QualificationCTA   = dynamic(() => import("@/components/home/QualificationCTA"));
const InfrastructureTiers = dynamic(() => import("@/components/home/InfrastructureTiers"));
const HowWeWork  = dynamic(() => import("@/components/home/HowWeWork"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));

// Map LogoLoopData → LogoBallItem (one ball per real client)
const proofBalls: LogoBallItem[] = caseStudyLogos.map((l) => ({
  id:   l.alt ?? l.src,
  name: l.name ?? l.alt ?? "",
  logo: l.src,
}));

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero: Hook + authority signal */}
      <Hero />

      {/* 2 — Proof: Logo ball pit — one ball per real client */}
      <div className="bg-sv-surface pt-10 md:pt-14">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-sv-text-muted mb-2">
          CLIENTS
        </p>
        <p className="text-center text-[13px] text-sv-text-dim mb-4">
          Every ball below is a real active or past client account.
        </p>
        <LogoBallpit logos={proofBalls} height={460} followCursor />
      </div>
      <DataBenchmarkBlock />

      {/* 3 — Diagnosis: Pain bullets — what they're living with */}
      <ClientReality />

      {/* 4 — Trust Bridge: Agencies vs. Growth Architecture — why this is different */}
      <Differentiation />

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
    </>
  );
}
