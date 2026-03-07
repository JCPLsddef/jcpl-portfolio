"use client";

import Link from "next/link";

const JUAN_IMG_SRC = "https://static.wixstatic.com/media/62f926_557272f0fa6547d9b0c8d0518959c14b~mv2.jpeg";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Check, Calendar, ShieldCheck } from "lucide-react";

const FEATURES = [
  "Conversion website built to close",
  "Google Ads targeting buyers with intent",
  "Local SEO and location pages",
  "AI voice agent for after-hours calls",
  "Weekly optimization loop",
  "Monthly revenue report",
  "Copy engineered to convert",
  "Full asset ownership. You keep everything.",
];

export default function PricingStatement() {
  return (
    <section
      className="px-4"
      style={{
        background: "#0D0B09",
        paddingTop: "clamp(80px, 10vw, 140px)",
        paddingBottom: "clamp(80px, 10vw, 140px)",
      }}
    >
      <div className="mx-auto max-w-[960px]">
        <p
          className="text-center uppercase mb-4"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            color: "#D4A853",
          }}
        >
          PRICING
        </p>

        <AnimatedSection direction="up" className="text-center mb-12">
          <h2
            className="font-bold text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            One person.{" "}
            <span
              className="italic"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Full pipeline.
            </span>
          </h2>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Left card — Premium membership / exclusive access */}
          <AnimatedSection
            direction="left"
            delay={0}
            className="flex-1 min-w-0"
          >
            <div
              className="relative rounded-2xl overflow-hidden pricing-left-card lift-card"
              style={{ minHeight: 520 }}
            >
              <div className="founder-photo-wrapper absolute inset-0">
                <img
                  src={JUAN_IMG_SRC}
                  alt="Juan Carlos Portillo-Laflamme"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  style={{ borderRadius: 16 }}
                />
              </div>
              <div
                className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(10,15,30,0.05) 0%, rgba(10,15,30,0.15) 35%, rgba(10,15,30,0.85) 70%, rgba(10,15,30,0.97) 100%)",
                }}
              />

              {/* Content stacked at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-[2] flex flex-col p-8">
                <div className="flex flex-col" style={{ paddingTop: 32 }}>
                  <p
                    className="uppercase mb-2"
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      color: "#D4A853",
                    }}
                  >
                    BY APPLICATION ONLY
                  </p>
                  <p
                    className="font-extrabold text-white mb-1"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
                      lineHeight: 1.2,
                    }}
                  >
                    Work directly with Juan.
                  </p>
                  <p
                    className="mb-4"
                    style={{
                      fontSize: "0.9rem",
                      color: "#D2C9B8",
                      lineHeight: 1.5,
                    }}
                  >
                    No account managers. No handoffs. Every system built and owned by me.
                  </p>
                  <div className="flex items-center mb-4" style={{ gap: 8 }}>
                    <span
                      className="inline-block rounded-full availability-pulse-dot"
                      style={{
                        width: 8,
                        height: 8,
                        backgroundColor: "#22c55e",
                      }}
                    />
                    <span style={{ fontSize: "0.85rem", color: "#A69D8D" }}>
                      1 partnership spot open
                    </span>
                  </div>
                  <Link
                    href="#book-call"
                    className="flex items-center justify-center w-full rounded-lg font-semibold text-[#0A0E1A] cta-primary cta-button py-4"
                    style={{ backgroundColor: "#D4A853" }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#C49A2A"; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#D4A853"; }}
                  >
                    Book a 20-Minute Diagnostic Call →
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right card — Price and features */}
          <AnimatedSection
            direction="right"
            delay={0.15}
            className="flex-1 min-w-0"
          >
            <div
              className="rounded-2xl p-6 md:p-8 flex flex-col depth-card"
              style={{
                minHeight: 480,
                background: "#070c18",
                border: "1px solid #2A2318",
              }}
            >
              <p
                className="uppercase mb-4"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: "#D4A853",
                }}
              >
                BY APPLICATION ONLY
              </p>

              <h3
                className="mb-6 text-white"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                }}
              >
                Growth Partnership
              </h3>

              <div
                className="mb-6"
                style={{ borderTop: "1px dashed #2A2318" }}
              />

              <div className="mb-2">
                <span
                  className="font-extrabold text-white"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  $2,500
                </span>
                <span
                  className="align-middle ml-1"
                  style={{
                    fontSize: "1rem",
                    color: "#756D63",
                    fontWeight: 400,
                  }}
                >
                  /month
                </span>
              </div>

              <p
                className="mb-5 italic"
                style={{ fontSize: "0.75rem", color: "#756D63" }}
              >
                Most partnerships scale to $6,000/month based on scope.
              </p>

              <span
                className="inline-block uppercase mb-3 rounded-full px-3 py-1"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  background: "#1E1A14",
                  color: "#D4A853",
                  width: "fit-content",
                }}
              >
                INCLUDED
              </span>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2.5 mb-8">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="shrink-0 mt-0.5"
                      size={18}
                      style={{ color: "#D4A853" }}
                    />
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "#D2C9B8",
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-2">
                <Link
                  href="/apply"
                  className="flex items-center justify-center w-full py-4 rounded-lg font-semibold text-[#0A0E1A] text-base cta-primary cta-button"
                  style={{ backgroundColor: "#D4A853" }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#C49A2A"; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#D4A853"; }}
                >
                  Apply for Growth Partnership →
                </Link>
                <p
                  className="text-center"
                  style={{ fontSize: "0.72rem", color: "#756D63" }}
                >
                  Short application. I respond within one business day.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Risk reversals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-8">
          <div
            className="flex flex-col items-center text-center max-w-[280px]"
            style={{ gap: 8 }}
          >
            <Calendar size={20} style={{ color: "#D4A853" }} />
            <p
              className="font-semibold text-white"
              style={{ fontSize: "0.9rem" }}
            >
              No long-term contracts
            </p>
            <p
              style={{ fontSize: "0.8rem", color: "#756D63" }}
            >
              90-day initial term. Month-to-month after that.
            </p>
          </div>
          <div
            className="flex flex-col items-center text-center max-w-[280px]"
            style={{ gap: 8 }}
          >
            <ShieldCheck size={20} style={{ color: "#D4A853" }} />
            <p
              className="font-semibold text-white"
              style={{ fontSize: "0.9rem" }}
            >
              No payment before clarity
            </p>
            <p
              style={{ fontSize: "0.8rem", color: "#756D63" }}
            >
              I will tell you on the call if I cannot move the needle. Before you pay anything.
            </p>
          </div>
        </div>

        <Link
          href="/services"
          className="block text-center"
          style={{ fontSize: "0.75rem", color: "#475569" }}
        >
          See full pricing breakdown and tier details →
        </Link>
      </div>
    </section>
  );
}
