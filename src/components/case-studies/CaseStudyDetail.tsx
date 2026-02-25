"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/content/caseStudies";
import FrozenWebsitePreview from "./FrozenWebsitePreview";

function SmallCheck({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 12 12">
      <path
        d="M3 6.5l2 2 4-4"
        stroke="#2563EB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PulseDot({ size = 6 }: { size?: number }) {
  return (
    <span
      className="inline-block rounded-full bg-cg-accent"
      style={{
        width: size,
        height: size,
        animation: "pulseDot 2s ease-in-out infinite",
      }}
    />
  );
}

export default function CaseStudyDetail({
  caseStudy: cs,
}: {
  caseStudy: CaseStudy;
}) {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const scrollToMetrics = () => {
    const el = document.getElementById("metrics-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handlePreviewClick = () => {
    if (cs.websiteUrl && cs.title !== "Triple W Rentals") {
      window.open(cs.websiteUrl, "_blank", "noopener,noreferrer");
    } else if (cs.metricsImageUrl) {
      scrollToMetrics();
    }
  };

  const trustPoints = [
    "No long-term contracts",
    "Max 3 partnerships / quarter",
    "Response within 24h",
  ];

  return (
    <main className="bg-cg-section-a">
      {/* ═══ BACK LINK BAR ═══ */}
      <div className="w-full bg-[rgba(37,99,235,0.04)] border-b border-[rgba(37,99,235,0.08)] py-[14px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <Link
            href="/results"
            className="inline-flex items-center gap-1.5 text-[13px] text-cg-secondary hover:text-white transition-colors duration-150"
          >
            ← All Results
          </Link>
        </div>
      </div>
      <div className="relative pt-20 pb-16" style={{ backgroundColor: "#060D1F" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 60% 0%, rgba(37,99,235,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
            {/* Left column — content */}
            <div>
              <div className="text-[11px] uppercase tracking-[0.12em] text-cg-secondary mb-4">
                {cs.industry}
              </div>

              <h1 className="text-[clamp(32px,4.5vw,52px)] font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-4">
                {cs.title}
              </h1>

              <p className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.65] mb-8">
                {cs.outcome}
              </p>

              {/* Metrics pills OR In-Progress badge */}
              {cs.inProgress ? (
                <div className="mb-9">
                  <span className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.2)] rounded-full px-5 py-[6px]">
                    <PulseDot size={6} />
                    <span className="text-[13px] text-cg-secondary font-medium">
                      Results loading — system just launched
                    </span>
                  </span>
                </div>
              ) : (
                cs.metrics?.length > 0 && (
                  <div className="flex gap-2.5 flex-wrap mb-9">
                    {cs.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.25)] rounded-full px-4 py-1.5 flex items-center"
                      >
                        <span className="text-[14px] font-extrabold text-white">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-cg-secondary ml-2">
                          {m.label}
                        </span>
                      </span>
                    ))}
                  </div>
                )
              )}

              {/* Triple W special ROI callout */}
              {cs.id === "triple-w-rentals" && (
                <>
                  <span className="block text-[13px] text-cg-accent font-semibold -mt-5 mb-2">
                    $900 in ad spend generated $41,084.85 in revenue.
                  </span>
                  <span className="block text-[13px] text-cg-secondary font-medium mb-8">
                    Project is still going
                  </span>
                </>
              )}

              {/* CTA buttons */}
              <div className="flex gap-3 flex-wrap">
                {cs.websiteUrl && cs.title !== "Triple W Rentals" && (
                  <button
                    type="button"
                    className="bg-cg-accent text-white px-6 py-3 rounded-lg font-semibold text-[14px] hover:bg-cg-accent-hov transition-all duration-200"
                    onClick={() =>
                      window.open(
                        cs.websiteUrl!,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    View Live Website →
                  </button>
                )}
                {!cs.inProgress && cs.metricsImageUrl && (
                  <button
                    type="button"
                    className="border border-[rgba(37,99,235,0.35)] text-cg-body bg-transparent px-6 py-3 rounded-lg font-medium text-[14px] hover:border-cg-accent hover:text-white transition-all duration-200"
                    onClick={scrollToMetrics}
                  >
                    View Metrics ↓
                  </button>
                )}
              </div>
            </div>

            {/* Right column — frozen preview */}
            <div className="w-full mt-8 lg:mt-0">
              <div className="rounded-[14px] border border-[rgba(37,99,235,0.15)] overflow-hidden">
                <FrozenWebsitePreview
                  logoUrl={cs.logoUrl}
                  websiteUrl={cs.websiteUrl}
                  title={cs.title}
                  metricsImageUrl={cs.metricsImageUrl}
                  onClickOverride={handlePreviewClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SECTION B — THE SITUATION ═══ */}
  <section className="bg-cg-section-b py-16 border-t border-[rgba(37,99,235,0.06)]">
        <div className="max-w-[760px] mx-auto px-6">
          <span className="block text-[10px] uppercase tracking-[0.15em] text-cg-secondary mb-4">
            THE SITUATION
          </span>
          <h2 className="text-[24px] font-bold text-white mb-5">
            What Was the Challenge?
          </h2>
          <div className="pl-5 border-l-2 border-[rgba(37,99,235,0.4)]">
            <p className="text-[16px] text-[rgba(255,255,255,0.6)] leading-[1.85]">
              {cs.situation}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION C — WHAT WAS BUILT ═══ */}
      {cs.deliverables && cs.deliverables.length > 0 && (
  <section className="bg-cg-section-a py-16">
          <div className="max-w-[760px] mx-auto px-6">
            <span className="block text-[10px] uppercase tracking-[0.15em] text-cg-secondary mb-4">
              THE BUILD
            </span>
            <h2 className="text-[24px] font-bold text-white mb-8">
              What Was Built
            </h2>
            <div className="space-y-2.5">
              {cs.deliverables.map((d, i) => (
                <div
                  key={i}
                  className="bg-[rgba(37,99,235,0.04)] border border-[rgba(37,99,235,0.1)] rounded-lg px-[18px] py-[14px] flex items-center gap-3.5 hover:border-[rgba(37,99,235,0.25)] hover:bg-[rgba(37,99,235,0.07)] transition-all duration-200"
                >
                  <span className="w-6 h-6 rounded-full bg-[rgba(37,99,235,0.15)] flex items-center justify-center flex-shrink-0">
                    <SmallCheck />
                  </span>
                  <span className="text-[15px] text-[rgba(255,255,255,0.8)] leading-[1.4]">
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ IN PROGRESS CALLOUT (replaces metrics when inProgress) ═══ */}
      {cs.inProgress && (
  <section className="bg-cg-section-b py-16 border-t border-[rgba(37,99,235,0.06)]">
          <div className="max-w-[760px] mx-auto px-6">
            <div className="bg-[rgba(37,99,235,0.04)] border border-[rgba(37,99,235,0.12)] rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <PulseDot size={10} />
              </div>
              <h3 className="text-[20px] font-bold text-white mb-2.5">
                System live. Results incoming.
              </h3>
              <p className="text-[15px] text-[rgba(255,255,255,0.5)] leading-[1.7] max-w-[520px] mx-auto">
                This engagement launched recently. Performance data is currently
                being collected and will be published here once statistically
                meaningful results are in.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ═══ SECTION D — METRICS (hidden when inProgress) ═══ */}
      {!cs.inProgress && cs.metricsImageUrl && (
        <section
          id="metrics-section"
          className="bg-cg-section-b py-16 border-t border-[rgba(37,99,235,0.06)]"
        >
          <div className="max-w-[900px] mx-auto px-6">
            <span className="block text-[10px] uppercase tracking-[0.15em] text-cg-secondary mb-4">
              PERFORMANCE DATA
            </span>
            <h2 className="text-[24px] font-bold text-white mb-2">
              Performance Metrics
            </h2>
            <p className="text-[14px] text-cg-secondary mb-8">
              Real data from Google Ads dashboard. Client details redacted for
              privacy.
            </p>
            <div className="bg-cg-card border border-[rgba(37,99,235,0.15)] rounded-[14px] overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.06)]">
              {cs.metricsImageUrl && (
                <Image
                  src={cs.metricsImageUrl as string}
                  alt={`${cs.title} Google Ads performance metrics`}
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
                  priority={false}
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* ═══ SECTION E — FINAL CTA ═══ */}
      <section
        className="relative py-28 border-t border-[rgba(37,99,235,0.06)] overflow-hidden"
        style={{ backgroundColor: "#060D1F" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(37,99,235,0.08) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-[600px] mx-auto text-center px-6">
          <span className="block text-[10px] uppercase tracking-[0.15em] text-cg-secondary mb-4">
            NEXT STEP
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold text-white leading-[1.15] mb-4 tracking-[-0.02em]">
            Want results like this?
          </h2>
          <p className="text-[16px] text-[rgba(255,255,255,0.5)] leading-[1.65] mb-9">
            I take on a maximum of 3 active partnerships per quarter. If
            there&apos;s a fit, I&apos;ll tell you within 24 hours.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-cg-accent text-white px-9 py-4 rounded-[10px] font-bold text-[16px] tracking-[-0.01em] hover:bg-cg-accent-hov hover:-translate-y-[1px] transition-all duration-200 shadow-[0_4px_24px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.35)]"
          >
            Apply for Growth Partnership →
          </Link>
          <p className="text-[13px] text-[rgba(255,255,255,0.3)] mt-[14px]">
            Short application. I&apos;ll personally review it within 24 hours.
          </p>
          <div className="flex gap-6 justify-center flex-wrap mt-6">
            {trustPoints.map((tp) => (
              <span
                key={tp}
                className="flex items-center gap-2 text-[12px] text-cg-secondary"
              >
                <svg
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                  className="flex-shrink-0"
                >
                  <circle cx="5" cy="5" r="5" fill="rgba(37,99,235,0.15)" />
                  <path
                    d="M3 5.5l1 1 3-3"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {tp}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
