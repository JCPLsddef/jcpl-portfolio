"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { tiers, comparisonRows } from "@/lib/premiumPricingData";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";
import type { TierConfig } from "@/lib/premiumPricingData";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-4 h-4 shrink-0 mt-0.5", className)}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 8l3.5 3.5L13 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Card({ tier, index }: { tier: TierConfig; index: number }) {
  const isHighlighted = tier.highlighted;

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-[14px] p-8 transition-all duration-300 ease-out",
        "hover:-translate-y-[2px]",
        "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[rgba(120,160,255,0.5)]",
        index === 1 && "order-first lg:order-none",
        isHighlighted
          ? "border border-[rgba(120,160,255,0.5)] bg-[#111111] shadow-[0_0_40px_rgba(120,160,255,0.12),0_0_80px_rgba(120,160,255,0.06)]"
          : "border border-white/[0.08] bg-[#111111] hover:border-white/[0.12] hover:shadow-[0_12px_48px_rgba(0,0,0,0.35)]"
      )}
      style={{ minHeight: "100%" }}
    >
      {/* Badge */}
      {tier.badge && (
        <div
          className={cn(
            "absolute -top-4 left-1/2 -translate-x-1/2 z-10",
            "text-[11px] font-bold tracking-[0.18em] uppercase px-5 py-1.5 rounded-full whitespace-nowrap",
            isHighlighted
              ? "bg-white/10 text-white border border-white/20"
              : "bg-white/5 text-white/80 border border-white/10"
          )}
        >
          {tier.badge}
        </div>
      )}

      {/* Tier label */}
      <p
        className={cn(
          "text-[10px] font-semibold tracking-[0.22em] uppercase mb-2",
          isHighlighted ? "text-[rgba(120,160,255,0.8)]" : "text-white/50"
        )}
      >
        {tier.tierLabel}
      </p>

      {/* Plan name */}
      <h3 className="text-[24px] font-bold text-white mb-2 leading-tight">
        {tier.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-white/80 mb-5 leading-relaxed">
        {tier.description}
      </p>

      {/* Price */}
      <div className="mb-2">
        <span className="text-[2.75rem] md:text-5xl font-bold text-white tracking-tight tabular-nums">
          {tier.price}
        </span>
      </div>
      <p className="text-[13px] text-white/60 whitespace-pre-line mb-5">
        {tier.subtext}
      </p>

      {/* For section */}
      <div
        className="rounded-lg px-4 py-3 mb-4 border border-white/[0.08] bg-white/[0.04]"
        style={{ fontStyle: "italic" }}
      >
        <p className="text-[13px] text-white/70 leading-relaxed">
          For: {tier.forSection}
        </p>
      </div>

      {/* Proof line or proof block */}
      {tier.proofLine && (
        <p className="text-xs text-white/50 mb-5 leading-relaxed italic">
          {tier.proofLine}
        </p>
      )}
      {tier.proofBlock && (
        <div
          className={cn(
            "rounded-xl px-5 py-4 mb-5 border",
            isHighlighted
              ? "bg-[rgba(120,160,255,0.06)] border-[rgba(120,160,255,0.2)]"
              : "bg-white/[0.03] border-white/[0.08]"
          )}
        >
          <p
            className={cn(
              "text-[11px] font-semibold tracking-[0.15em] uppercase mb-2",
              isHighlighted ? "text-[rgba(120,160,255,0.9)]" : "text-white/50"
            )}
          >
            {tier.proofBlock.label}
          </p>
          <p className="font-semibold text-base text-white leading-snug mb-1">
            {tier.proofBlock.headline}
          </p>
          <p className="text-sm text-white/70">{tier.proofBlock.subtext}</p>
        </div>
      )}

      {/* Features */}
      <ul className="flex flex-col gap-3 flex-1 mb-6" role="list">
        {tier.features.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckIcon className="text-white/70" />
            <span className="text-[15px] text-white/80 leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Note or scarcity note */}
      {tier.note && (
        <p className="text-xs text-white/50 mb-5 leading-relaxed whitespace-pre-line">
          {tier.note}
        </p>
      )}
      {tier.scarcityNote && (
        <div className="rounded-xl px-5 py-4 mb-6 bg-white/[0.03] border border-white/[0.08]">
          <p className="text-xs text-white/60 leading-relaxed">
            {tier.scarcityNote}
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto">
        <Link
          href={tier.ctaHref}
          onClick={() => trackEvent("section_cta_click")}
          className={cn(
            "block w-full text-center font-semibold py-3.5 rounded-xl transition-all duration-300",
            isHighlighted
              ? "bg-[rgba(120,160,255,0.25)] text-white border border-[rgba(120,160,255,0.4)] shadow-[0_0_24px_rgba(120,160,255,0.25)] hover:bg-[rgba(120,160,255,0.35)] hover:shadow-[0_0_32px_rgba(120,160,255,0.3)]"
              : "bg-transparent text-white border border-white/20 hover:border-white/35 hover:bg-white/[0.06]"
          )}
        >
          {tier.ctaLabel}
        </Link>
        {tier.ctaSubtext && (
          <p className="text-[11px] text-white/50 text-center mt-3 leading-relaxed">
            {tier.ctaSubtext}
          </p>
        )}
      </div>
    </article>
  );
}

interface PremiumPricingSectionProps {
  heading?: string;
  subheadline?: string;
}

export default function PremiumPricingSection({
  heading = "Choose the growth system that fits your business.",
  subheadline = "Three ways to turn your online presence into a predictable lead engine.",
}: PremiumPricingSectionProps = {}) {
  return (
    <section
      id="pricing"
      className="w-full py-20 md:py-28 bg-[#0A0A0A]"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <header className="text-center mb-16 md:mb-20">
          <p
            id="pricing-eyebrow"
            className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/50 mb-4"
          >
            PRICING
          </p>
          <h2
            id="pricing-heading"
            className="text-[clamp(2rem,5vw,2.25rem)] font-semibold text-white tracking-tight mb-4 leading-tight"
          >
            {heading}
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </header>

        {/* Card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <Card key={tier.title} tier={tier} index={i} />
          ))}
        </div>

        {/* Proof / comparison block */}
        <div
          className="mt-16 md:mt-20 rounded-[14px] border border-white/[0.08] bg-[#111111] overflow-hidden"
          role="region"
          aria-label="Feature comparison and social proof"
        >
          {/* Top accent line */}
          <div
            className="h-px w-full"
            style={{ background: "rgba(120,160,255,0.4)" }}
          />

          <div className="p-6 md:p-8 lg:p-10">
            {/* Comparison table */}
            <div className="overflow-x-auto -mx-2">
              <table className="w-full min-w-[480px] border-collapse">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="text-left py-4 px-4 text-sm font-semibold text-white/60"
                    >
                      Features
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-4 text-center text-sm font-semibold text-white"
                    >
                      Foundation Architecture
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-4 text-center text-sm font-semibold text-white"
                    >
                      Performance Engine
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-4 text-center text-sm font-semibold text-white"
                    >
                      Market Ownership
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i > 0 ? "border-t border-white/[0.06]" : ""}
                    >
                      <td className="py-4 px-4 text-[15px] text-white/80">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.foundation ? (
                          <CheckIcon className="inline-block text-white/70" />
                        ) : (
                          <span className="text-white/20">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.growth ? (
                          <CheckIcon className="inline-block text-white/70" />
                        ) : (
                          <span className="text-white/20">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.domination ? (
                          <CheckIcon className="inline-block text-white/70" />
                        ) : (
                          <span className="text-white/20">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Proof block */}
            <div className="mt-12 pt-12 border-t border-white/[0.06] text-center">
              <p
                className="text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto italic"
                style={{ color: "#cbd5e1" }}
              >
                Triple W Rentals went from 0 inbound calls to 14 qualified
                bookings in 30 days on $900 in ad spend.
              </p>
            </div>

            {/* Optional logo row */}
            <div className="mt-12 pt-12 border-t border-white/[0.06]">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-25">
                {caseStudyLogos.slice(0, 5).map((logo) => (
                  <span
                    key={logo.name}
                    className="text-xs font-medium text-white/80 uppercase tracking-wider"
                  >
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-12 pt-12 border-t border-white/[0.06] text-center">
              <h3 className="text-xl font-semibold text-white mb-6">
                Questions I get every time.
              </h3>
              <Link
                href="/apply"
                onClick={() => trackEvent("services_final_cta_primary_click")}
                className="inline-flex items-center justify-center font-semibold px-8 py-3.5 rounded-xl text-white bg-[rgba(120,160,255,0.25)] border border-[rgba(120,160,255,0.4)] shadow-[0_0_24px_rgba(120,160,255,0.25)] hover:bg-[rgba(120,160,255,0.35)] hover:shadow-[0_0_32px_rgba(120,160,255,0.3)] transition-all duration-300"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
