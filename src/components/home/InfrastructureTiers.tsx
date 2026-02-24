"use client";

import Link from "next/link";

/* ─── Proof Snapshot Data ─── */
const campaignMetrics = [
  { number: "33x", label: "Return on ad spend" },
  { number: "$900", label: "Total ad spend" },
  { number: "30 days", label: "Time to $30K revenue" },
];

/* ─── Tier 01 bullet — slate ─── */
function BulletSlate() {
  return (
    <svg className="w-3.5 h-3.5 mt-1 flex-shrink-0" viewBox="0 0 12 12" fill="none">
      <path d="M2 6L5 9L10 3" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Tier 02 bullet — blue ─── */
function BulletBlue() {
  return (
    <svg className="w-3.5 h-3.5 mt-1 flex-shrink-0" viewBox="0 0 12 12" fill="none">
      <path d="M2 6L5 9L10 3" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Tier 03 bullet — amber ─── */
function BulletAmber() {
  return (
    <svg className="w-3.5 h-3.5 mt-1 flex-shrink-0" viewBox="0 0 12 12" fill="none">
      <path d="M2 6L5 9L10 3" stroke="rgba(245,158,11,0.60)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function InfrastructureTiers() {
  return (
    <>
      {/* ── Main Tiers Section — FIX 1 ── */}
      <section
        id="tiers"
        className="w-full py-24 px-4"
        style={{ background: "linear-gradient(180deg, #070B14 0%, #0A0F1E 100%)" }}
      >

        {/* PART 1: Section Header — FIX 6 */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#1E3A5F" }}
          >
            THE INFRASTRUCTURE STACK
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            style={{ color: "#F1F5F9" }}
          >
            Three Systems. Built Around Revenue Stage.
          </h2>
          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#475569" }}
          >
            Read the qualifier on each tier before applying. I only take on businesses I know I can move the needle for.
          </p>
        </div>

        {/* PART 2: Metrics Strip — FIX 2 */}
        <div className="max-w-3xl mx-auto mb-16">
          <p
            className="text-center text-sm mb-5"
            style={{ color: "#1E3A5F" }}
          >
            From the most recent active client account. Not projections.
          </p>
          <div
            className="max-w-3xl mx-auto grid grid-cols-3 overflow-hidden rounded-2xl"
            style={{
              border: "1px solid rgba(99, 179, 237, 0.12)",
              background: "rgba(99, 179, 237, 0.03)",
            }}
          >
            <div
              className="py-10 px-6 text-center"
              style={{ borderRight: "1px solid rgba(99, 179, 237, 0.10)" }}
            >
              <p
                className="text-[2.75rem] font-bold tracking-tight leading-none"
                style={{ color: "#E2F0FF" }}
              >
                $30,000
              </p>
              <p
                className="text-xs mt-2 uppercase tracking-widest"
                style={{ color: "#4A6580" }}
              >
                Revenue generated. 30 days.
              </p>
            </div>
            <div
              className="py-10 px-6 text-center"
              style={{ borderRight: "1px solid rgba(99, 179, 237, 0.10)" }}
            >
              <p
                className="text-[2.75rem] font-bold tracking-tight leading-none"
                style={{ color: "#E2F0FF" }}
              >
                $33
              </p>
              <p
                className="text-xs mt-2 uppercase tracking-widest"
                style={{ color: "#4A6580" }}
              >
                Cost per booked call.
              </p>
            </div>
            <div className="py-10 px-6 text-center">
              <p
                className="text-[2.75rem] font-bold tracking-tight leading-none"
                style={{ color: "#E2F0FF" }}
              >
                11 days
              </p>
              <p
                className="text-xs mt-2 uppercase tracking-widest"
                style={{ color: "#4A6580" }}
              >
                Days to first booked call.
              </p>
            </div>
          </div>
        </div>

        {/* PART 3: Tier Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-start">

          {/* CARD 1: Foundation Architecture — FIX 3 */}
          <div
            className="relative flex flex-col rounded-2xl p-8 h-full transition-all duration-200 hover:-translate-y-[2px]"
            style={{
              background: "linear-gradient(160deg, #0E1520 0%, #0A1018 100%)",
              border: "1px solid rgba(148, 163, 184, 0.10)",
            }}
          >
            <p
              className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "#475569" }}
            >
              TIER 01
            </p>
            <h3
              className="text-[1.375rem] font-semibold tracking-tight mb-1.5"
              style={{ color: "#CBD5E1" }}
            >
              Foundation Architecture
            </h3>
            <p
              className="text-sm mb-5"
              style={{ color: "#475569" }}
            >
              Built before the first ad dollar runs.
            </p>
            <span
              className="block text-xs rounded-lg px-4 py-3 mb-7 leading-relaxed"
              style={{
                color: "#94A3B8",
                background: "rgba(148, 163, 184, 0.05)",
                border: "1px solid rgba(148, 163, 184, 0.10)",
              }}
            >
              Most clients come from referrals. Digital presence is minimal or nonexistent.
            </span>
            <div
              className="mb-6"
              style={{ borderTop: "1px solid rgba(148, 163, 184, 0.07)" }}
            />
            <p
              className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#334155" }}
            >
              INCLUDES
            </p>
            <ul className="flex flex-col gap-3 flex-grow">
              {[
                "Website built to convert visitors into calls, not just look professional",
                "Local SEO so buyers in your city find you on Google before your competitors",
                "Booking flow that captures leads while you are on the job",
                "Analytics showing exactly where calls come from",
                "Full infrastructure documentation you own permanently",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BulletSlate />
                  <span className="text-sm leading-snug" style={{ color: "#94A3B8" }}>{item}</span>
                </li>
              ))}
            </ul>
            <div
              className="mt-auto pt-5"
              style={{ borderTop: "1px solid rgba(148, 163, 184, 0.07)" }}
            >
              <p
                className="text-xs mb-5 leading-relaxed"
                style={{ color: "#334155" }}
              >
                Paid advertising is not included. This tier builds the foundation that makes ads work. Most clients move to Performance Engine within 60 days.
              </p>
              <a
                href="/apply"
                className="text-sm transition-colors hover:text-slate-200"
                style={{ color: "#64748B" }}
              >
                Apply for Foundation Architecture →
              </a>
            </div>
          </div>

          {/* CARD 2: Performance Engine — FIX 4 */}
          <div
            className="order-first md:order-none relative flex flex-col rounded-2xl p-8 h-full transition-all duration-200 hover:-translate-y-[2px] md:-mt-4 md:-mb-4"
            style={{
              background: "linear-gradient(160deg, #0F1E35 0%, #0C1628 100%)",
              border: "1px solid rgba(59, 130, 246, 0.30)",
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "2rem",
                right: "2rem",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(99, 179, 237, 0.5), transparent)",
                borderRadius: "999px",
              }}
            />
            {/* MOST SELECTED badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
              <span
                className="text-[11px] font-bold tracking-[0.18em] uppercase px-5 py-1.5 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #2563EB, #3B82F6)",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                }}
              >
                MOST SELECTED
              </span>
            </div>
            <p
              className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "#3B82F6" }}
            >
              TIER 02
            </p>
            <h3
              className="text-[1.375rem] font-semibold tracking-tight mb-1.5"
              style={{ color: "#FFFFFF" }}
            >
              Performance Engine
            </h3>
            <p
              className="text-sm mb-5"
              style={{ color: "#93C5FD" }}
            >
              Predictable booked calls. Tracked cost per call.
            </p>
            <span
              className="block text-xs rounded-lg px-4 py-3 mb-7 leading-relaxed"
              style={{
                color: "#93C5FD",
                background: "rgba(59, 130, 246, 0.08)",
                border: "1px solid rgba(59, 130, 246, 0.20)",
              }}
            >
              Strong work. Still waiting on the phone. No predictable way to get new clients this week.
            </span>
            <div
              className="mb-6"
              style={{ borderTop: "1px solid rgba(59, 130, 246, 0.15)" }}
            />
            <p
              className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#1D4ED8" }}
            >
              INCLUDES
            </p>
            <ul className="flex flex-col gap-3 flex-grow">
              {[
                "Everything in Foundation Architecture",
                "Google Ads targeting buyers with purchase intent, not general traffic",
                "Dedicated landing pages per service so every ad leads somewhere that converts",
                "AI voice agent that captures calls after hours so leads never go to voicemail",
                "Weekly optimization loop so cost per call drops over time",
                "Monthly report showing revenue attributed to the system",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BulletBlue />
                  <span className="text-sm leading-snug" style={{ color: "#CBD5E1" }}>{item}</span>
                </li>
              ))}
            </ul>
            {/* VERIFIED RESULT proof callout */}
            <div
              className="mt-6 rounded-xl px-5 py-5 mb-5"
              style={{
                background: "rgba(59, 130, 246, 0.07)",
                border: "1px solid rgba(59, 130, 246, 0.20)",
              }}
            >
              <p
                className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2"
                style={{ color: "#3B82F6" }}
              >
                VERIFIED RESULT
              </p>
              <p
                className="font-semibold text-base leading-snug mb-1"
                style={{ color: "#FFFFFF" }}
              >
                $900 in ad spend. $30,000 in revenue.
              </p>
              <p
                className="text-sm"
                style={{ color: "#7DD3FC" }}
              >
                Triple W Rentals, Texas. 30 days from system launch. They now hold the top position for RV rentals across their market.
              </p>
            </div>
            <p
              className="text-xs mb-5 leading-relaxed"
              style={{ color: "#334155" }}
            >
              Ad spend is separate from the partnership fee. Minimum $500/month. 90-day initial term.
            </p>
            <a
              href="/apply"
              className="block w-full text-sm font-bold py-3.5 rounded-xl tracking-wide transition-all duration-150 hover:brightness-110 text-center"
              style={{
                background: "linear-gradient(90deg, #2563EB, #3B82F6)",
                color: "#FFFFFF",
                boxShadow: "0 4px 24px rgba(37, 99, 235, 0.35)",
              }}
            >
              Apply for Performance Engine →
            </a>
            <p
              className="text-[11px] text-center mt-3 leading-relaxed"
              style={{ color: "#334155" }}
            >
              Short application. No sales call unless I think it is a fit.
            </p>
          </div>

          {/* CARD 3: Market Ownership — FIX 5 */}
          <div
            className="relative flex flex-col rounded-2xl p-8 h-full transition-all duration-200 hover:-translate-y-[2px]"
            style={{
              background: "linear-gradient(160deg, #16100A 0%, #0F0B06 100%)",
              border: "1px solid rgba(245, 158, 11, 0.15)",
            }}
          >
            {/* BY APPLICATION ONLY */}
            <div className="flex items-center gap-2 mb-5">
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#F59E0B",
                  boxShadow: "0 0 8px rgba(245, 158, 11, 0.6)",
                }}
              />
              <span
                className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "rgba(245, 158, 11, 0.70)" }}
              >
                BY APPLICATION ONLY
              </span>
            </div>
            <p
              className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-2"
              style={{ color: "rgba(245, 158, 11, 0.50)" }}
            >
              TIER 03
            </p>
            <h3
              className="text-[1.375rem] font-semibold tracking-tight mb-1.5"
              style={{ color: "#FDE68A" }}
            >
              Market Ownership
            </h3>
            <p
              className="text-sm mb-5"
              style={{ color: "rgba(245, 158, 11, 0.60)" }}
            >
              Limit competition structurally.
            </p>
            <span
              className="block text-xs rounded-lg px-4 py-3 mb-7 leading-relaxed"
              style={{
                color: "#D97706",
                background: "rgba(245, 158, 11, 0.05)",
                border: "1px solid rgba(245, 158, 11, 0.12)",
              }}
            >
              Proven demand. Ready to own the market before a competitor does.
            </span>
            <div
              className="mb-6"
              style={{ borderTop: "1px solid rgba(245, 158, 11, 0.08)" }}
            />
            <p
              className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "rgba(245, 158, 11, 0.35)" }}
            >
              INCLUDES
            </p>
            <ul className="flex flex-col gap-3 flex-grow">
              {[
                "Everything in Performance Engine",
                "Multi-city campaign architecture to expand without rebuilding from scratch",
                "Competitor gap analysis that identifies exactly where they are vulnerable",
                "SEO dominance buildout targeting every high-intent keyword in your market",
                "Priority weekly strategy call with campaign decisions made in real time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BulletAmber />
                  <span className="text-sm leading-snug" style={{ color: "#CA8A04" }}>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <div
                className="rounded-xl px-5 py-4 mb-6"
                style={{
                  background: "rgba(245, 158, 11, 0.04)",
                  border: "1px solid rgba(245, 158, 11, 0.12)",
                }}
              >
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(245, 158, 11, 0.50)" }}
                >
                  Two clients per niche per city. This is not a marketing device. I take on a second client in your niche only when the first is fully scaled. If your competitor applies first, this closes.
                </p>
              </div>
              <a
                href="/apply"
                className="text-sm transition-colors hover:text-amber-400"
                style={{ color: "rgba(245, 158, 11, 0.60)" }}
              >
                Apply for this tier →
              </a>
            </div>
          </div>
        </div>

        {/* PART 4: Below-cards disclaimer */}
        <div className="max-w-6xl mx-auto text-center mt-12">
          <p className="text-xs" style={{ color: "#1E3A5F" }}>
            No long-term contracts after the initial build. No hidden fees. No retainers for work not done.
          </p>
        </div>

      </section>

      {/* ── Proof Snapshot Strip ── */}
      <div
        className="w-full px-4 pb-16 pt-2"
        style={{ background: "#070B14" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Block 1: Before / After */}
          <div
            className="p-6 rounded-xl"
            style={{ background: "#0A0F1E", border: "1px solid rgba(148,163,184,0.08)" }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#334155" }}>
              BEFORE / AFTER
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-red-500/20 text-red-400">
                  BEFORE
                </span>
                <p className="text-sm" style={{ color: "#64748B" }}>
                  Bookings inconsistent. Website looked unprofessional. Most clients came from word of mouth.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-500/20 text-green-400">
                  AFTER
                </span>
                <p className="text-sm" style={{ color: "#64748B" }}>
                  Booking calendar full. New clients find them through search. Clients compliment the website on arrival.
                </p>
              </div>
            </div>
            <p className="text-xs mt-4" style={{ color: "#334155" }}>Barbershop. Local SEO + website rebuild.</p>
            <p className="text-sm italic mt-2" style={{ color: "#475569" }}>Juan has been an amazing help.</p>
          </div>

          {/* Block 2: Outcome Summary */}
          <div
            className="p-6 rounded-xl"
            style={{ background: "#0A0F1E", border: "1px solid rgba(148,163,184,0.08)" }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#334155" }}>
              WHAT THIS LOOKS LIKE
            </p>
            <h4 className="text-xl font-bold mb-4 leading-snug" style={{ color: "#CBD5E1" }}>
              A Full Calendar. Calls From Strangers. Zero Chasing.
            </h4>
            <p className="text-sm leading-relaxed mb-2" style={{ color: "#64748B" }}>
              Website rebuilt for conversion. SEO targeting buyers in your city. Paid campaigns running with tracked cost per call.
            </p>
            <p className="text-sm leading-relaxed mb-2" style={{ color: "#64748B" }}>
              The system runs whether you are on a job or not.
            </p>
            <p className="text-xs mt-4 leading-relaxed" style={{ color: "#334155" }}>
              Results depend on market size, ad spend, and service type. Specifics reviewed on application call.
            </p>
          </div>

          {/* Block 3: Campaign Metrics */}
          <div
            className="p-6 rounded-xl"
            style={{ background: "#0A0F1E", border: "1px solid rgba(148,163,184,0.08)" }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#334155" }}>
              CAMPAIGN METRICS
            </p>
            {campaignMetrics.map(({ number, label }) => (
              <div
                key={number}
                className="flex justify-between items-center py-2 last:border-0"
                style={{ borderBottom: "1px solid rgba(148,163,184,0.06)" }}
              >
                <p className="font-bold text-sm" style={{ color: "#CBD5E1" }}>{number}</p>
                <p className="text-xs" style={{ color: "#475569" }}>{label}</p>
              </div>
            ))}
            <p className="text-xs mt-4" style={{ color: "#334155" }}>Triple W Rentals. Texas. Google Ads.</p>
            <p className="text-xs mt-2 font-medium" style={{ color: "#3B82F6" }}>
              Triple W Rentals now dominates the RV rental niche across Texas.
            </p>
          </div>
        </div>

        <p className="text-xs text-center mt-6 max-w-6xl mx-auto" style={{ color: "#1E3A5F" }}>
          All results are from live client accounts. Updated as new data becomes available.
        </p>
      </div>
    </>
  );
}
