"use client";

import { servicesHero } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { Reveal } from "@/components/motion";
import TrueFocus from "@/components/ui/TrueFocus";
import TextType from "@/components/ui/TextType";



export default function ServicesHero() {
  return (
    <div className="relative min-h-[60vh] flex items-center bg-cg-section-a">
      {/* Subtle radial background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <SectionWrapper className="w-full pt-32 md:pt-40 pb-0 relative z-[1]">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cg-secondary mb-6">
              GROWTH SYSTEMS FOR SERVICE BUSINESSES
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight text-balance max-w-2xl mx-auto mb-6">
              Pricing
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg text-cg-body max-w-2xl mx-auto leading-relaxed mb-8">
              Three Systems. Built Around Revenue Stage.
            </p>
          </Reveal>

          {/* CTA row */}
          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <CTAButton
                href="/apply"
                size="lg"
                eventName="services_hero_primary_cta_click"
              >
                Apply for Growth Partnership →
              </CTAButton>
              <CTAButton
                href="/results"
                variant="secondary"
                size="md"
                eventName="services_hero_secondary_cta_click"
              >
                View Results
              </CTAButton>
            </div>
          </Reveal>

          {/* Micro-trust strip */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {[
                "Response within 24h",
                "Milestone delivery",
                "No lock-in",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-xs text-cg-secondary"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className="text-cg-accent"
                  >
                    <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M3.8 6 L5.3 7.5 L8.2 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionWrapper>
    </div>
  );
}
