"use client";

import Link from "next/link";

/* ─── Proof Snapshot Data ─── */
const campaignMetrics = [
  { number: "33x", label: "Return on ad spend" },
  { number: "$900", label: "Total ad spend" },
  { number: "30 days", label: "Time to $30K revenue" },
];

/* ─── Shared bullet icon (FIX 3) ─── */
function BulletCheck() {
  return (
    <svg
      className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-slate-400"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M2 6L5 9L10 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function InfrastructureTiers() {
  return (
    <>
      {/* ── Main Tiers Section ── */}
      <section id="tiers" className="w-full bg-[#060912] py-24 px-4">

        {/* PART 1: Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mb-4">
            THE INFRASTRUCTURE STACK
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Three Systems. Built Around Revenue Stage.
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Each tier is designed for a specific growth phase. Apply only if you meet the stage requirements.
          </p>
        </div>

        {/* PART 2: Metrics Strip (FIX 2) */}
        <div className="max-w-3xl mx-auto grid grid-cols-3 mb-16 rounded-xl border border-white/[0.08] divide-x divide-white/[0.08] overflow-hidden">
          <div className="py-10 px-6 text-center bg-[#0F1623]">
            <p className="text-[2.25rem] font-semibold text-white tracking-tight leading-none">$30,000</p>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">Revenue in 30 days</p>
          </div>
          <div className="py-10 px-6 text-center bg-[#0F1623]">
            <p className="text-[2.25rem] font-semibold text-white tracking-tight leading-none">$33</p>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">Average cost per booked call</p>
          </div>
          <div className="py-10 px-6 text-center bg-[#0F1623]">
            <p className="text-[2.25rem] font-semibold text-white tracking-tight leading-none">11 days</p>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">Median time to first booked call</p>
          </div>
        </div>

        {/* PART 3: Tier Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* CARD 1: Foundation Architecture (FIX 1, 5, 6) */}
          <div className="relative flex flex-col rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1623] p-8 h-full transition-all duration-200 hover:border-white/[0.13] hover:-translate-y-[2px]">
            <p className="text-[10px] font-medium tracking-[0.22em] text-slate-600 uppercase mb-2">
              TIER 01
            </p>
            <h3 className="text-[1.375rem] font-semibold text-white tracking-tight mb-1.5">Foundation Architecture</h3>
            <p className="text-sm text-slate-400 mb-5">
              Built before the first ad dollar runs.
            </p>
            <span className="inline-block text-xs text-slate-400 bg-white/[0.04] border border-white/[0.07] rounded-md px-3 py-1.5 mb-7 leading-normal">
              For businesses making under $15K/month
            </span>
            <div className="border-t border-white/[0.06] mb-6" />
            <p className="text-[10px] font-medium tracking-[0.2em] text-slate-600 uppercase mb-4">
              INCLUDES
            </p>
            <ul className="flex flex-col gap-3 flex-grow">
              {[
                "Conversion-focused website built for your market",
                "Local SEO and AI search buildout",
                "Booking flow and calendar integration",
                "Lead tracking and analytics setup",
                "Infrastructure documentation delivered on completion",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BulletCheck />
                  <span className="text-sm text-slate-300 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6 border-t border-white/[0.06]">
              <p className="text-xs text-slate-600 mb-4">
                Paid traffic not included. Foundation must exist before ads run.
              </p>
              <Link
                href="/apply"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Apply for Foundation Architecture →
              </Link>
            </div>
          </div>

          {/* CARD 2: Performance Engine (FIX 1, 5, 7, 8, 10) */}
          <div className="order-first md:order-none relative flex flex-col rounded-2xl border border-[rgba(255,255,255,0.15)] bg-[#141E30] p-8 h-full transition-all duration-200 hover:border-white/[0.14] hover:-translate-y-[2px]">
            {/* FIX 10: RECOMMENDED badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase bg-white text-black px-4 py-1.5 rounded-full">
                RECOMMENDED
              </span>
            </div>
            <p className="text-[10px] font-medium tracking-[0.22em] text-slate-600 uppercase mb-2">
              TIER 02
            </p>
            <h3 className="text-[1.375rem] font-semibold text-white tracking-tight mb-1.5">Performance Engine</h3>
            <p className="text-sm text-slate-400 mb-5">
              Predictable booked calls. Tracked cost per call.
            </p>
            <span className="inline-block text-xs text-slate-400 bg-white/[0.04] border border-white/[0.07] rounded-md px-3 py-1.5 mb-7 leading-normal">
              For businesses making $10K–$30K/month
            </span>
            <div className="border-t border-white/[0.06] mb-6" />
            <p className="text-[10px] font-medium tracking-[0.2em] text-slate-600 uppercase mb-4">
              INCLUDES
            </p>
            <ul className="flex flex-col gap-3 flex-grow">
              {[
                "Everything in Foundation Architecture",
                "Google Ads campaign architecture (intent-based)",
                "Dedicated landing pages per service and city",
                "AI voice agent for after-hours call capture",
                "Weekly performance optimization loop",
                "Monthly full-funnel growth report",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BulletCheck />
                  <span className="text-sm text-slate-300 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            {/* FIX 7: Proof callout */}
            <div className="mt-6 rounded-lg border border-white/[0.07] bg-white/[0.03] px-4 py-4 mb-5">
              <p className="text-xs text-slate-400 leading-relaxed">
                Triple W Rentals. Texas.{" "}
                <span className="text-white font-medium">$900 ad spend returned $30,000</span>{" "}
                in revenue. 30 days from launch.
              </p>
            </div>
            <p className="text-xs text-slate-600 mb-6">
              Requires minimum $500/month ad spend. 90-day commitment.
            </p>
            {/* FIX 8: Button */}
            <Link
              href="/apply"
              className="block w-full bg-white text-black text-sm font-semibold py-3.5 rounded-xl hover:bg-slate-100 transition-all duration-150 tracking-wide text-center"
            >
              Apply for Performance Engine
            </Link>
            <p className="text-[11px] text-slate-600 text-center mt-2.5">
              I review every application personally. Reply within 24 hours.
            </p>
          </div>

          {/* CARD 3: Market Ownership (FIX 1, 4, 5, 9) */}
          <div className="relative flex flex-col rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0F1623] p-8 h-full transition-all duration-200 hover:border-white/[0.14] hover:-translate-y-[2px]">
            {/* FIX 4: BY APPLICATION ONLY pill */}
            <span className="inline-flex items-center text-[10px] font-semibold tracking-[0.18em] uppercase text-amber-400/70 border border-amber-400/20 rounded-full px-3 py-1 mb-5">
              BY APPLICATION ONLY
            </span>
            <p className="text-[10px] font-medium tracking-[0.22em] text-slate-600 uppercase mb-2">
              TIER 03
            </p>
            <h3 className="text-[1.375rem] font-semibold text-white tracking-tight mb-1.5">Market Ownership</h3>
            <p className="text-sm text-slate-400 mb-5">
              Limit competition structurally.
            </p>
            <span className="inline-block text-xs text-slate-400 bg-white/[0.04] border border-white/[0.07] rounded-md px-3 py-1.5 mb-7 leading-normal">
              For businesses making $25K–$50K/month
            </span>
            <div className="border-t border-white/[0.06] mb-6" />
            <p className="text-[10px] font-medium tracking-[0.2em] text-slate-600 uppercase mb-4">
              INCLUDES
            </p>
            <ul className="flex flex-col gap-3 flex-grow">
              {[
                "Everything in Performance Engine",
                "Multi-city expansion structure",
                "Competitor gap targeting and SEO dominance buildout",
                "Priority weekly strategy call",
                "Market exclusivity. Two clients per city. No exceptions.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BulletCheck />
                  <span className="text-sm text-slate-300 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              {/* FIX 9: Hard limit block — border only, no fill */}
              <div className="rounded-lg border border-amber-500/15 px-4 py-3.5 mb-6">
                <p className="text-xs text-amber-500/50 leading-relaxed">
                  Hard limit: two clients per niche per city. When both slots are filled, this tier closes.
                </p>
              </div>
              <Link
                href="/apply"
                className="text-sm text-amber-500/70 hover:text-amber-400 transition-colors"
              >
                Apply for this tier →
              </Link>
            </div>
          </div>
        </div>

        {/* PART 4: Below-cards disclaimer */}
        <div className="max-w-6xl mx-auto text-center mt-8">
          <p className="text-xs text-slate-600">
            No long-term contracts after the initial build. No hidden fees. No retainers for work not done.
          </p>
        </div>

      </section>

      {/* ── Proof Snapshot Strip (outside the section wrapper) ── */}
      <div className="w-full bg-[#060912] px-4 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Block 1: Before / After */}
          <div className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/40">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">BEFORE / AFTER</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-red-500/20 text-red-400">
                  BEFORE
                </span>
                <p className="text-sm text-slate-400">Bookings inconsistent. Website looked unprofessional. Most clients came from word of mouth.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-500/20 text-green-400">
                  AFTER
                </span>
                <p className="text-sm text-slate-400">Booking calendar full. New clients find them through search. Clients compliment the website on arrival.</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">Barbershop. Local SEO + website rebuild.</p>
            <p className="text-sm text-slate-400 italic mt-2">Juan has been an amazing help.</p>
          </div>

          {/* Block 2: Outcome Summary */}
          <div className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/40">
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">WHAT THIS LOOKS LIKE</p>
            <h4 className="text-xl font-bold text-white mb-4 leading-snug">A Full Calendar. Calls From Strangers. Zero Chasing.</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-2">Website rebuilt for conversion. SEO targeting buyers in your city. Paid campaigns running with tracked cost per call.</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-2">The system runs whether you are on a job or not.</p>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">Results depend on market size, ad spend, and service type. Specifics reviewed on application call.</p>
          </div>

          {/* Block 3: Campaign Metrics */}
          <div className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/40">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">CAMPAIGN METRICS</p>
            {campaignMetrics.map(({ number, label }) => (
              <div key={number} className="flex justify-between items-center py-2 border-b border-slate-700 last:border-0">
                <p className="text-white font-bold text-sm">{number}</p>
                <p className="text-slate-500 text-xs">{label}</p>
              </div>
            ))}
            <p className="text-xs text-slate-500 mt-4">Triple W Rentals. Texas. Google Ads.</p>
            <p className="text-xs text-blue-400/80 mt-2 font-medium">Triple W Rentals now dominates the RV rental niche across Texas.</p>
          </div>
        </div>

        <p className="text-xs text-slate-600 text-center mt-6 max-w-6xl mx-auto">
          All results are from live client accounts. Updated as new data becomes available.
        </p>
      </div>
    </>
  );
}
