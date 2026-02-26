import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";

/* ── Above-fold (eager) ── */
import ProofBar from "@/components/home/ProofBar";

/* ── Below-fold (lazy) ── */
const ClientReality   = dynamic(() => import("@/components/home/ClientReality"));
const FounderBridge   = dynamic(() => import("@/components/home/FounderBridge"));
const PinnedSystem    = dynamic(() => import("@/components/home/PinnedSystem"));
const MicroCTA        = dynamic(() => import("@/components/home/MicroCTA"));
const FeaturedCaseStudy = dynamic(() => import("@/components/home/FeaturedCaseStudy"));
const QualificationCTA  = dynamic(() => import("@/components/home/QualificationCTA"));
const HowWeWork         = dynamic(() => import("@/components/home/HowWeWork"));
const FAQSection        = dynamic(() => import("@/components/home/FAQSection"));
const SpotsLeftSection  = dynamic(() => import("@/components/home/SpotsLeftSection"));

export default function HomePage() {
  return (
    <>
      {/* 1 ── HERO */}
      <Hero />

      {/* 2 ── PROOF BAR: logo chips + cycling metric card */}
      <ProofBar />

      {/* 3 ── DIAGNOSIS: pain bullets — "The real reason your pipeline stalls" */}
      <ClientReality />

      {/* 4 ── FOUNDER BRIDGE: static human trust anchor (zero animation by design) */}
      <FounderBridge />

      {/* 5 ── SYSTEM SECTION: pinned GSAP scroll — Traffic → Conversion → Follow-Up → Booked Revenue */}
      <PinnedSystem />

      {/* 6 ── MICRO-CTA: calm checkpoint for visitors ready to act */}
      <MicroCTA />

      {/* 7 ── CASE STUDY HIGHLIGHT: Triple W Rentals — one client, full detail */}
      <FeaturedCaseStudy />

      {/* 8 ── WHO IT'S FOR: qualify the visitor, self-select in/out */}
      <QualificationCTA />

      {/* 9 ── OFFER + PROCESS: what's included + 3-step process */}
      <HowWeWork />

      {/* 10 ── FAQ / OBJECTIONS: accordion — resolve final resistance */}
      <FAQSection />

      {/* 11 ── FINAL CTA: close the page with one clear action */}
      <SpotsLeftSection />
    </>
  );
}
