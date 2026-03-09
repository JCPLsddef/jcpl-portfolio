"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";
import GuaranteesStrip from "./GuaranteesStrip";

const tiers = [
  { id: "foundation", label: "Foundation Architecture", desc: "Website + SEO. The base layer." },
  { id: "performance", label: "Performance Engine", desc: "Full system + Google Ads." },
  { id: "ownership", label: "Market Ownership", desc: "Multi-city. Dominate the niche." },
];

const revenueOptions = [
  "Under $5,000/month",
  "$5,000 – $10,000/month",
  "$10,000 – $25,000/month",
  "$25,000 – $50,000/month",
  "$50,000+/month",
];

export default function ServicesFinalCTA() {
  const [selectedTier, setSelectedTier] = useState("performance");

  return (
    <section
      id="apply"
      style={{ background: "#1A1510" }}
    >
      <SectionWrapper className="relative z-10">

        {/* HOW I WORK */}
        <div className="mb-16">
          <Reveal>
            <div className="text-center mb-8">
              <p
                className="section-label mb-4 text-center"
                style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", color: "#D4A853" }}
              >
                HOW I WORK
              </p>
              <h2
                className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-center"
                style={{ color: "#F5F0E8" }}
              >
                What You Know Before Signing Anything.
              </h2>
            </div>
          </Reveal>
          <GuaranteesStrip />
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-16" aria-hidden="true">
          <div
            className="w-16 h-px"
            style={{ background: "rgba(212, 168, 83, 0.4)" }}
          />
        </div>

        {/* Application form */}
        <div className="max-w-2xl mx-auto relative">
          {/* Apply section orb */}
          <div
            className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[500px] h-[400px] rounded-full pointer-events-none z-0 max-md:w-[300px] max-md:h-[240px]"
            style={{
              background: "radial-gradient(circle, rgba(212,168,83,0.03) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
            aria-hidden
          />
          <div className="relative z-10 space-y-0">
          <Reveal>
            <div className="text-center mb-10">
              <p
                className="section-label mb-4"
                style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", color: "#D4A853" }}
              >
                APPLY
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                style={{ color: "#F5F0E8" }}
              >
                I Run 3 Partnerships at a Time.
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#D2C9B8" }}
              >
                Short application. If I think I can help, you will get a call link within 24 hours. If not, I will tell you directly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <form
              className="services-apply-form rounded-xl p-8 md:p-10"
              style={{
                background: "#1E1A14",
                border: "1px solid #2A2318",
                borderTop: "2px solid #D4A853",
                borderRadius: 12,
              }}
            >
              {/* Tier selection */}
              <div className="mb-7">
                <p
                  className="services-form-label block mb-3"
                  style={{ color: "#D4A853" }}
                >
                  WHICH TIER ARE YOU APPLYING FOR?
                </p>
                <div className="flex flex-col gap-2">
                  {tiers.map((tier) => (
                    <label
                      key={tier.id}
                      className={`services-radio-option flex items-start gap-3 ${selectedTier === tier.id ? "selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="tier"
                        value={tier.id}
                        checked={selectedTier === tier.id}
                        onChange={() => setSelectedTier(tier.id)}
                        className="mt-0.5"
                      />
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: selectedTier === tier.id ? "#F5F0E8" : "#A69D8D" }}
                        >
                          {tier.label}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: "#756D63" }}>
                          {tier.desc}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Name + Business */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="services-form-label block mb-1.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="First and last"
                    className="services-form-input w-full"
                  />
                </div>
                <div>
                  <label className="services-form-label block mb-1.5">
                    Business name
                  </label>
                  <input
                    type="text"
                    name="business"
                    placeholder="Your business"
                    className="services-form-input w-full"
                  />
                </div>
              </div>

              {/* Revenue + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="services-form-label block mb-1.5">
                    Monthly revenue
                  </label>
                  <select
                    name="revenue"
                    defaultValue=""
                    className="services-form-select w-full"
                  >
                    <option value="" disabled>Select range</option>
                    {revenueOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="services-form-label block mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@business.com"
                    className="services-form-input w-full"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="services-form-label block mb-1.5">
                  What are you trying to solve?{" "}
                  <span style={{ color: "#756D63" }}>(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Briefly describe your current situation and goal."
                  className="services-form-textarea w-full resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="cta-primary w-full py-3.5 rounded-xl text-sm font-bold tracking-wide"
              >
                Submit Application →
              </button>

              <p className="text-xs text-center mt-4" style={{ color: "#756D63" }}>
                Response within 24 hours. No retainer until I confirm fit.
              </p>
            </form>
          </Reveal>
        </div>
        </div>

        <div className="h-10 md:h-16" aria-hidden="true" />
      </SectionWrapper>
    </section>
  );
}
