"use client";

import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";

export default function PricingStatement() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "#0a0f1e" }}
    >
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p
          className="uppercase mb-4"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            color: "#f97316",
          }}
        >
          PARTNERSHIP
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Starting at{" "}
          <span style={{ color: "#f97316" }}>$2,500/month</span>.
        </h2>

        <p
          className="mb-6 mx-auto"
          style={{
            color: "#94a3b8",
            maxWidth: 540,
            fontSize: "0.95rem",
            lineHeight: 1.7,
          }}
        >
          Every engagement starts with a diagnostic call where I assess your
          market, your current pipeline, and what the system needs to include.
          Scope is built around your situation — not a pre-packaged tier.
        </p>

        <p
          className="mb-8 mx-auto"
          style={{
            color: "#94a3b8",
            maxWidth: 540,
            fontSize: "0.95rem",
            lineHeight: 1.7,
          }}
        >
          Most partnerships fall between $2,500 and $6,000/month depending on ad
          spend, markets targeted, and services included. You will know your
          exact investment before you pay anything.
        </p>

        <Link
          href="/services"
          className="inline-block mb-8 hover:underline"
          style={{ color: "#64748b", fontSize: "0.8rem" }}
        >
          See full pricing breakdown →
        </Link>

        <div>
          <CTAButton href="/apply" size="lg">
            Apply — I&apos;ll Review You in 24h
          </CTAButton>
          <p
            className="mt-2"
            style={{
              fontSize: "0.75rem",
              color: "#64748b",
            }}
          >
            If I cannot move the needle for your market, I will tell you on the
            call — before you pay anything.
          </p>
        </div>
      </div>
    </section>
  );
}
