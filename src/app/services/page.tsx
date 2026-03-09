import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { buildMetadata } from "@/lib/metadata";
import ServicesHero from "@/components/services/ServicesHero";
import FitCheck from "@/components/services/FitCheck";
import SystemTimelineSection from "@/components/services/SystemTimelineSection";
import PremiumPricingSection from "@/components/pricing/PremiumPricingSection";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import "@/styles/services.css";

export const metadata: Metadata = buildMetadata({
  title: "Growth Systems for Service Businesses",
  description:
    "Conversion websites, Google Ads, SEO, and AI automation built as one integrated system. Three tiers built around your revenue stage. Apply to see if you qualify.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <FitCheck />
      <SystemTimelineSection />
      <PremiumPricingSection
        heading="Full Pricing Breakdown"
        subheadline="Every engagement is scoped on the diagnostic call. Here is what each level of partnership includes."
      />
      <ServicesFinalCTA />
    </>
  );
}
