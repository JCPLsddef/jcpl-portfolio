"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const leftCardRef = useRef<HTMLDivElement>(null);
  const leftCardInView = useInView(leftCardRef, { once: true, margin: "-80px" });
  return (
    <section
      className="px-4"
      style={{
        background: "#0a0f1e",
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
            color: "#f97316",
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
              ref={leftCardRef}
              className="relative rounded-2xl overflow-hidden pricing-left-card"
              style={{ minHeight: 480 }}
            >
              {/* Full-bleed background image with Ken Burns effect */}
              <motion.div
                className="absolute inset-0 pricing-left-bg-image"
                initial={{ scale: 1.05 }}
                animate={leftCardInView ? { scale: 1 } : { scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform" }}
              >
                <Image
                  src="/images/juan.jpg"
                  alt="Juan - Client Growth founder"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center top" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                  background: "linear-gradient(to top, rgba(10,15,30,0.9) 0%, transparent 60%)",
                }}
              />

              {/* Content stacked at bottom */}
              <div
                className="relative z-[2] flex flex-col justify-end p-8"
                style={{ minHeight: 480 }}
              >
                <div className="flex flex-col" style={{ paddingTop: 32 }}>
                  <p
                    className="uppercase mb-2"
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      color: "#f97316",
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
                      color: "#cbd5e1",
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
                    <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                      1 partnership spot open
                    </span>
                  </div>
                  <Link
                    href="#book-call"
                    className="flex items-center justify-center w-full rounded-lg font-semibold text-white transition-all duration-200 py-4 hover:-translate-y-0.5"
                    style={{ backgroundColor: "#f97316" }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#ea6c0a"; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#f97316"; }}
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
              className="rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:border-[rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.05)]"
              style={{
                minHeight: 480,
                background: "#070c18",
                border: "1px solid #1e293b",
              }}
            >
              <p
                className="uppercase mb-4"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: "#f97316",
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
                style={{ borderTop: "1px dashed #1e293b" }}
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
                    color: "#64748b",
                    fontWeight: 400,
                  }}
                >
                  /month
                </span>
              </div>

              <p
                className="mb-5 italic"
                style={{ fontSize: "0.75rem", color: "#64748b" }}
              >
                Most partnerships scale to $6,000/month based on scope.
              </p>

              <span
                className="inline-block uppercase mb-3 rounded-full px-3 py-1"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  background: "#131d35",
                  color: "#f97316",
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
                      style={{ color: "#f97316" }}
                    />
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "#cbd5e1",
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
                  className="flex items-center justify-center w-full py-4 rounded-lg font-semibold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: "#f97316" }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#ea6c0a"; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#f97316"; }}
                >
                  Apply for Growth Partnership →
                </Link>
                <p
                  className="text-center"
                  style={{ fontSize: "0.72rem", color: "#64748b" }}
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
            <Calendar size={20} style={{ color: "#f97316" }} />
            <p
              className="font-semibold text-white"
              style={{ fontSize: "0.9rem" }}
            >
              No long-term contracts
            </p>
            <p
              style={{ fontSize: "0.8rem", color: "#64748b" }}
            >
              90-day initial term. Month-to-month after that.
            </p>
          </div>
          <div
            className="flex flex-col items-center text-center max-w-[280px]"
            style={{ gap: 8 }}
          >
            <ShieldCheck size={20} style={{ color: "#f97316" }} />
            <p
              className="font-semibold text-white"
              style={{ fontSize: "0.9rem" }}
            >
              No payment before clarity
            </p>
            <p
              style={{ fontSize: "0.8rem", color: "#64748b" }}
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
