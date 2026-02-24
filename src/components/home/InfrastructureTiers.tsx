"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

/* ─── KPI Strip Data ─── */
const kpiItems = [
  { number: "$30,000", label: "Revenue generated in 30 days from $900 ad spend" },
  { number: "$33", label: "Average cost per qualified call. Q4 2025." },
  { number: "11 days", label: "Median time from launch to first booked call" },
];

/* ─── Proof Snapshot Data ─── */
const campaignMetrics = [
  { number: "33x", label: "Return on ad spend" },
  { number: "$900", label: "Total ad spend" },
  { number: "30 days", label: "Time to $30K revenue" },
];

export default function InfrastructureTiers() {
  return (
    <SectionWrapper id="tiers" variant="alt" className="border-b border-slate-700/40">

      {/* ── 1A: Section Header ── */}
      <Reveal className="max-w-2xl mb-12 text-center lg:text-left">
        <SectionLabel label="THE INFRASTRUCTURE STACK" className="mb-5" />
        <h2 className="text-[clamp(30px,4vw,48px)] font-[800] text-white leading-[1.15] tracking-[-0.025em]">
          Three Tiers. Built Around Where You Are Right Now.
        </h2>
        <p className="text-slate-400 text-base max-w-2xl mt-4 mb-12">
          Most service businesses fail at paid advertising because they run ads before the foundation exists. Each tier below is built for a specific revenue stage. Read the requirements before applying.
        </p>
      </Reveal>

      {/* ── 1B: KPI Anchor Strip ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-12">
        {kpiItems.map(({ number, label }) => (
          <div key={number} className="py-4">
            <p className="text-3xl font-black text-white">{number}</p>
            <p className="text-xs text-slate-400 mt-1 max-w-[140px]">{label}</p>
          </div>
        ))}
      </div>

      {/* ── 1C: Three-Tier Card Layout ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1: Foundation Architecture - Left, 27% */}
        <div className="order-2 md:order-none bg-slate-800/40 border border-slate-700 rounded-2xl p-7 flex flex-col">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">TIER 01</p>
          <h3 className="text-xl font-bold text-white mb-2">Foundation Architecture</h3>
          <p className="text-sm text-slate-400 mb-5">
            The infrastructure layer. Built before the first ad dollar runs.
          </p>

          {/* One-line qualifier */}
          <div className="bg-slate-700/50 rounded-lg px-3 py-2 mb-6">
            <p className="text-xs text-slate-300">Your business makes $5K–$15K/month. Most new clients come from referrals. No digital system yet.</p>
          </div>

          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">INCLUDES</p>
          <ul className="space-y-2 mb-6">
            {[
              "Conversion website built for your market",
              "Local SEO and GEO (AI search) buildout",
              "AI lead qualification chatbot",
              "Booking flow and calendar integration",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700 mb-6">
              <p className="text-xs text-slate-500">
                <span className="font-semibold text-slate-400 uppercase tracking-widest">NOT INCLUDED:</span>{" "}
                Paid traffic. Fix the foundation before running ads.
              </p>
            </div>

            <Link
              href="/apply"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Start here if your business makes under $15K/month →
            </Link>
          </div>
        </div>

        {/* Card 2: Performance Engine — Center, 46% */}
        <div className="order-first md:order-none min-h-[720px] bg-slate-800/80 border border-blue-500/30 rounded-2xl p-10 flex flex-col shadow-lg shadow-blue-500/10 relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full">
            TIER 02: RECOMMENDED
          </span>

          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">TIER 02</p>
          <h3 className="text-2xl font-bold text-white mb-2">Performance Engine</h3>
          <p className="text-sm text-slate-300 mb-5">
            The full acquisition system. First new client call within 11 days. $33 average cost per booked call.
          </p>

          {/* One-line qualifier */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2 mb-6">
            <p className="text-xs text-blue-200">Your business makes $10K–$30K/month. Strong work. New clients still depend on who you know.</p>
          </div>

          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">INCLUDES</p>
          <ul className="space-y-2 mb-6">
            {[
              "Everything in Foundation Architecture",
              "Google Ads campaign architecture (intent-based)",
              "Dedicated landing pages per service and city",
              "AI voice agent for after-hours lead capture",
              "Weekly performance optimization loop",
              "Monthly full-funnel growth report",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl mb-4">
            <p className="text-xs text-blue-300/80 italic">
              This system generated $30,000 from $900 in ad spend. Triple W Rentals, Texas. 30 days from launch.
            </p>
            <p className="text-xs text-blue-300/70 mt-1 not-italic">
              They now dominate the RV rental niche across Texas.
            </p>
          </div>

          <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700 mb-6">
            <p className="text-xs text-slate-500">
              <span className="font-semibold text-slate-400 uppercase tracking-widest">REQUIRES:</span>{" "}
              Minimum $500/month ad spend. 90-day commitment.
            </p>
          </div>

          <div className="mt-auto pt-2">
            <Link
              href="/apply"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors text-sm text-center"
            >
              Apply for Performance Engine →
            </Link>
            <p className="text-xs text-slate-500 text-center mt-3">
              I review every application personally. Reply within 24 hours.
            </p>
          </div>
        </div>

        {/* Card 3: Market Domination System — Right, 27% */}
        <div className="order-3 md:order-none bg-gradient-to-b from-amber-950/30 to-slate-900/80 border border-amber-500/30 rounded-2xl p-7 flex flex-col">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold tracking-widest text-amber-400 uppercase mb-4 w-fit">
            BY APPLICATION ONLY
          </span>

          <p className="text-xs font-semibold tracking-widest text-amber-500/70 uppercase mb-3">TIER 03: MARKET OWNERSHIP</p>
          <h3 className="text-xl font-bold text-white mb-2">Market Domination System</h3>
          <p className="text-sm text-slate-400 mb-5">
            Built to make your competitors structurally irrelevant in your market. Two clients per city. No exceptions.
          </p>

          {/* One-line qualifier */}
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2 mb-6">
            <p className="text-xs text-amber-200/80">Your business makes $25K–$50K/month. Demand is real. Time to make competitors structurally irrelevant.</p>
          </div>

          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">INCLUDES</p>
          <ul className="space-y-2 mb-6">
            {[
              "Everything in Performance Engine",
              "Expanded SEO and competitor gap targeting",
              "Multi-city or multi-service campaign architecture",
              "Priority weekly strategy call",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <div className="p-3 bg-amber-500/5 rounded-lg border border-amber-500/20 mb-6">
              <p className="text-xs text-amber-400/80">
                <span className="font-semibold uppercase tracking-widest">HARD LIMIT:</span>{" "}
                Two clients per niche per city. When both slots are filled, this tier closes. No waitlist.
              </p>
            </div>

            <Link
              href="/apply"
              className="text-sm text-amber-400/80 hover:text-amber-300 transition-colors"
            >
              Apply for this tier →
            </Link>
          </div>
        </div>
      </div>

      {/* ── 1D: Proof Snapshot Strip ── */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-[2fr_3fr_2fr] gap-6">

        {/* Block 1: Before / After */}
        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">BEFORE / AFTER</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-red-500/20 text-red-400">
                BEFORE
              </span>
              <p className="text-sm text-slate-400">2 new client calls per week. Both from referrals.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-500/20 text-green-400">
                AFTER
              </span>
              <p className="text-sm text-slate-400">11 new client calls per week. $30K in 30 days.</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">Painting contractor. Dallas, TX.</p>
        </div>

        {/* Block 2: Pull Quote (center, larger) */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-8 flex flex-col justify-between">
          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4">CLIENT RESULT</p>
          <p className="text-base text-white font-medium leading-relaxed">
            &ldquo;I went from 2 calls a week to 11 in the first month. The system runs. I just do the work.&rdquo;
          </p>
          <p className="text-xs text-slate-500 mt-6">Owner, residential painting company, Dallas TX</p>
        </div>

        {/* Block 3: Campaign Metrics */}
        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
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

      <p className="text-xs text-slate-600 text-center mt-6">
        All results are from live client accounts. Updated as new data becomes available.
      </p>
    </SectionWrapper>
  );
}
