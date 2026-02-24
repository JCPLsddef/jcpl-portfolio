"use client";

import Link from "next/link";

/* ─── Proof Snapshot Data ─── */
const campaignMetrics = [
  { number: "33x", label: "Return on ad spend" },
  { number: "$900", label: "Total ad spend" },
  { number: "30 days", label: "Time to $30K revenue" },
];

/* ─── Tier 01 / 03 bullet icon (slate) ─── */
function BulletCheckSlate() {
  return (
    <svg className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-slate-500" viewBox="0 0 12 12" fill="none">
      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Tier 02 bullet icon (blue) ─── */
function BulletCheckBlue() {
  return (
    <svg className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-blue-400" viewBox="0 0 12 12" fill="none">
      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Tier 03 bullet icon (amber) ─── */
function BulletCheckAmber() {
  return (
    <svg className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-amber-400/70" viewBox="0 0 12 12" fill="none">
      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function InfrastructureTiers() {
  return (
    <>
      {/* ── Main Tiers Section ── */}
      <section id="tiers" className="relative w-full bg-gradient-to-b from-[#0A0E1A] to-[#060912] py-24 px-4 overflow-hidden">

        {/* Ambient depth glow — no colored shadows on cards, just atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/[0.05] blur-[120px] rounded-full pointer-events-none" />

        {/* PART 1: Section Header */}
        <div className="relative max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase mb-4">
            THE INFRASTRUCTURE STACK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Three Systems. Built Around Revenue Stage.
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
            Read the qualifier on each tier before applying. I only take on businesses I know I can move the needle for.
          </p>
        </div>

        {/* PART 2: Metrics Strip */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <p className="text-center text-sm text-slate-400 italic mb-5">
            From the most recent active client account. Not projections.
          </p>
          <div className="grid grid-cols-3 rounded-xl border border-white/[0.12] divide-x divide-white/[0.10] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="py-10 px-6 text-center bg-gradient-to-b from-[#0F1A2E] to-[#0C1424]">
              <p className="text-[2.75rem] font-bold text-white tracking-tight leading-none">$30,000</p>
              <p className="text-xs text-slate-400 mt-2 tracking-wider uppercase">Revenue generated. 30 days.</p>
            </div>
            <div className="py-10 px-6 text-center bg-gradient-to-b from-[#0F1A2E] to-[#0C1424]">
              <p className="text-[2.75rem] font-bold text-white tracking-tight leading-none">$33</p>
              <p className="text-xs text-slate-400 mt-2 tracking-wider uppercase">Cost per booked call.</p>
            </div>
            <div className="py-10 px-6 text-center bg-gradient-to-b from-[#0F1A2E] to-[#0C1424]">
              <p className="text-[2.75rem] font-bold text-white tracking-tight leading-none">11 days</p>
              <p className="text-xs text-slate-400 mt-2 tracking-wider uppercase">Days to first booked call.</p>
            </div>
          </div>
        </div>

        {/* PART 3: Tier Cards Grid */}
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-start">

          {/* CARD 1: Foundation Architecture */}
          <div className="relative flex flex-col rounded-2xl border border-white/[0.10] bg-[#0C1424] p-8 h-full transition-all duration-200 hover:border-white/[0.18] hover:-translate-y-[2px]">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-500 uppercase mb-2">
              TIER 01
            </p>
            <h3 className="text-[1.375rem] font-semibold text-white tracking-tight mb-1.5">
              Foundation Architecture
            </h3>
            <p className="text-sm text-slate-300 mb-5">
              Built before the first ad dollar runs.
            </p>
            <span className="block text-xs text-slate-200 bg-white/[0.06] border border-white/[0.10] rounded-lg px-4 py-3 mb-7 leading-relaxed">
              Most clients come from referrals. Digital presence is minimal or nonexistent.
            </span>
            <div className="border-t border-white/[0.08] mb-6" />
            <p className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase mb-4">
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
                  <BulletCheckSlate />
                  <span className="text-sm text-slate-200 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-5 border-t border-white/[0.08]">
              <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                Paid advertising is not included. This tier builds the foundation that makes ads work. Most clients move to Performance Engine within 60 days.
              </p>
              <Link href="/apply" className="text-sm text-slate-300 hover:text-white transition-colors font-medium">
                Apply for Foundation Architecture →
              </Link>
            </div>
          </div>

          {/* CARD 2: Performance Engine */}
          <div className="order-first md:order-none relative flex flex-col rounded-2xl border border-blue-500/30 bg-gradient-to-b from-[#111E38] to-[#0D1829] p-8 h-full transition-all duration-200 hover:border-blue-400/50 hover:-translate-y-[2px] md:-mt-4 md:-mb-4">
            {/* Top accent line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent rounded-full" />
            {/* MOST SELECTED badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase bg-white text-black px-5 py-1.5 rounded-full shadow-lg">
                MOST SELECTED
              </span>
            </div>
            <p className="text-[10px] font-semibold tracking-[0.22em] text-blue-400/80 uppercase mb-2">
              TIER 02
            </p>
            <h3 className="text-[1.375rem] font-semibold text-white tracking-tight mb-1.5">
              Performance Engine
            </h3>
            <p className="text-sm text-slate-200 mb-5">
              Predictable booked calls. Tracked cost per call.
            </p>
            <span className="block text-xs text-slate-100 bg-blue-500/[0.08] border border-blue-500/[0.25] rounded-lg px-4 py-3 mb-7 leading-relaxed">
              Strong work. Still waiting on the phone. No predictable way to get new clients this week.
            </span>
            <div className="border-t border-blue-500/20 mb-6" />
            <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-400/70 uppercase mb-4">
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
                  <BulletCheckBlue />
                  <span className="text-sm text-slate-200 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            {/* VERIFIED RESULT proof block */}
            <div className="mt-6 rounded-xl border border-blue-500/25 bg-blue-500/[0.07] px-5 py-5 mb-5">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-blue-400 mb-2">
                VERIFIED RESULT
              </p>
              <p className="text-white font-bold text-lg leading-snug mb-1.5">
                $900 in ad spend. $30,000 in revenue.
              </p>
              <p className="text-sm text-slate-300">
                Triple W Rentals, Texas. 30 days from system launch. They now hold the top position for RV rentals across their market.
              </p>
            </div>
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              Ad spend is separate from the partnership fee. Minimum $500/month. 90-day initial term.
            </p>
            <Link
              href="/apply"
              className="block w-full bg-white text-black text-sm font-bold py-4 rounded-xl hover:bg-blue-50 transition-all duration-150 tracking-wide text-center"
            >
              Apply for Performance Engine →
            </Link>
            <p className="text-[11px] text-slate-500 text-center mt-3 leading-relaxed">
              Short application. No sales call unless I think it is a fit.
            </p>
          </div>

          {/* CARD 3: Market Ownership */}
          <div className="relative flex flex-col rounded-2xl border border-amber-500/[0.18] bg-[#0C1424] p-8 h-full transition-all duration-200 hover:border-amber-500/[0.35] hover:-translate-y-[2px]">
            {/* BY APPLICATION ONLY signal */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-amber-400/90">
                BY APPLICATION ONLY
              </span>
            </div>
            <p className="text-[10px] font-semibold tracking-[0.22em] text-amber-500/60 uppercase mb-2">
              TIER 03
            </p>
            <h3 className="text-[1.375rem] font-semibold text-white tracking-tight mb-1.5">
              Market Ownership
            </h3>
            <p className="text-sm text-slate-300 mb-5">
              Limit competition structurally.
            </p>
            <span className="block text-xs text-slate-100 bg-amber-500/[0.07] border border-amber-500/[0.22] rounded-lg px-4 py-3 mb-7 leading-relaxed">
              Proven demand. Ready to own the market before a competitor does.
            </span>
            <div className="border-t border-amber-500/[0.12] mb-6" />
            <p className="text-[10px] font-semibold tracking-[0.2em] text-amber-500/60 uppercase mb-4">
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
                  <BulletCheckAmber />
                  <span className="text-sm text-slate-200 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-5 border-t border-amber-500/[0.12]">
              <p className="text-xs text-amber-400/70 leading-relaxed mb-5">
                Two clients per niche per city. This is not a marketing device. I take on a second client in your niche only when the first is fully scaled. If your competitor applies first, this closes.
              </p>
              <Link href="/apply" className="text-sm text-amber-400 hover:text-amber-300 transition-colors font-medium">
                Apply for this tier →
              </Link>
            </div>
          </div>
        </div>

        {/* PART 4: Below-cards disclaimer */}
        <div className="relative max-w-6xl mx-auto text-center mt-12">
          <p className="text-xs text-slate-600">
            No long-term contracts after the initial build. No hidden fees. No retainers for work not done.
          </p>
        </div>

      </section>

      {/* ── Proof Snapshot Strip ── */}
      <div className="w-full bg-[#060912] px-4 pb-16 pt-2">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Block 1: Before / After */}
          <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0C1424]">
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">BEFORE / AFTER</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-red-500/20 text-red-400">
                  BEFORE
                </span>
                <p className="text-sm text-slate-300">Bookings inconsistent. Website looked unprofessional. Most clients came from word of mouth.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-500/20 text-green-400">
                  AFTER
                </span>
                <p className="text-sm text-slate-300">Booking calendar full. New clients find them through search. Clients compliment the website on arrival.</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">Barbershop. Local SEO + website rebuild.</p>
            <p className="text-sm text-slate-400 italic mt-2">Juan has been an amazing help.</p>
          </div>

          {/* Block 2: Outcome Summary */}
          <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0C1424]">
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">WHAT THIS LOOKS LIKE</p>
            <h4 className="text-xl font-bold text-white mb-4 leading-snug">A Full Calendar. Calls From Strangers. Zero Chasing.</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-2">Website rebuilt for conversion. SEO targeting buyers in your city. Paid campaigns running with tracked cost per call.</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-2">The system runs whether you are on a job or not.</p>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">Results depend on market size, ad spend, and service type. Specifics reviewed on application call.</p>
          </div>

          {/* Block 3: Campaign Metrics */}
          <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0C1424]">
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">CAMPAIGN METRICS</p>
            {campaignMetrics.map(({ number, label }) => (
              <div key={number} className="flex justify-between items-center py-2 border-b border-white/[0.07] last:border-0">
                <p className="text-white font-bold text-sm">{number}</p>
                <p className="text-slate-400 text-xs">{label}</p>
              </div>
            ))}
            <p className="text-xs text-slate-500 mt-4">Triple W Rentals. Texas. Google Ads.</p>
            <p className="text-xs text-blue-400 mt-2 font-medium">Triple W Rentals now dominates the RV rental niche across Texas.</p>
          </div>
        </div>

        <p className="text-xs text-slate-600 text-center mt-6 max-w-6xl mx-auto">
          All results are from live client accounts. Updated as new data becomes available.
        </p>
      </div>
    </>
  );
}
