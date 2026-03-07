"use client";

import { differentiation } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

/* ─── Inline SVG Icons ─── */
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 4l8 8M12 4l-8 8" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 8.5l3 3 5-5.5" stroke="var(--brand-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Differentiation() {
  return (
    <SectionWrapper id="difference" className="bg-sv-base">
      <Reveal className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
        <SectionLabel label={differentiation.label} className="mb-5" />
        <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto">
          {differentiation.headline}
        </h2>
      </Reveal>

      {/* Body paragraphs */}
      <Reveal className="max-w-2xl mx-auto mb-12">
        <p className="text-[15px] font-[400] leading-[1.8] opacity-[0.68] mb-5">
          An agency will take your $3,000, spend 6 weeks onboarding you, send you a report full of impressions and clicks, and invoice you again while you still wait for the phone to ring.
        </p>
        <p className="text-[15px] font-[400] leading-[1.8] opacity-[0.68]">
          I have one metric: qualified calls on your calendar. If that number is not growing, I have not done my job. That is it. Nothing else counts.
        </p>
      </Reveal>

      {/* ── Desktop Comparison Table — 3 rows only ── */}
      <Reveal delay={0.1} className="hidden md:block">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-[14px] border border-[rgba(255,255,255,0.08)] overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #0F2049 0%, #060D1F 100%)",
            }}
          >
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[rgba(255,255,255,0.06)]" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-sv-text-muted">
                Dimension
              </div>
              <div className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-sv-danger text-center">
                Typical Agency
              </div>
              <div className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-sv-muted text-center">
                CLIENT GROWTH
              </div>
            </div>

            {/* 3 rows only */}
            {differentiation.comparisons.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_1fr_1fr] ${
                  i < differentiation.comparisons.length - 1
                    ? "border-b border-[rgba(255,255,255,0.06)]"
                    : ""
                } hover:bg-[rgba(37,99,235,0.04)] transition-colors duration-150`}
              >
                <div className="p-5 text-sm font-semibold text-white">
                  {row.dimension}
                </div>
                <div className="p-5 flex items-start gap-2.5 justify-center" style={{ background: "rgba(239,68,68,0.03)" }}>
                  <XIcon />
                  <span className="text-sm font-[400] opacity-[0.55]">
                    {row.them}
                  </span>
                </div>
                <div className="p-5 flex items-start gap-2.5 justify-center" style={{ background: "rgba(37,99,235,0.04)" }}>
                  <CheckIcon />
                  <span className="text-sm font-[600] text-white opacity-[1.0]">
                    {row.us}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── Mobile Cards ── */}
      <div className="md:hidden space-y-4 max-w-sm mx-auto">
        {differentiation.comparisons.map((row, i) => (
          <Reveal key={i} delay={0.06 * i}>
            <div className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-sv-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sv-text-muted mb-3">
                {row.dimension}
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <XIcon />
                  <span className="text-sm font-[400] opacity-[0.55]">
                    {row.them}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-sm font-[600] text-white opacity-[1.0]">
                    {row.us}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Stat line */}
      <Reveal delay={0.2}>
        <p className="text-sm text-slate-400 text-center mt-6 max-w-2xl mx-auto">
          Average agency onboarding: 6 to 8 weeks. My median time from signed agreement to live system: 11 days.
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
