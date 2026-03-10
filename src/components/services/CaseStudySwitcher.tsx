"use client";

import { useState } from "react";

const caseStudies = [
  {
    id: "triplew",
    name: "Triple W Rentals",
    tag: "RV Rental · Texas",
    metric: "$41,085",
    metricLabel: "revenue in 30 days on $900 ad spend",
    description:
      "Full Growth Architecture build. Conversion website, Google Ads funnel targeting purchase-intent buyers, and AI voice agent for after-hours calls. Went from zero online presence to owning the RV rental market in their region.",
    deliverables: ["Website", "Google Ads", "AI Voice Agent", "SEO"],
    status: "active" as const,
    link: "/results#triplew",
    image: "/images/logos/triplew.png",
  },
  {
    id: "elite",
    name: "Elite Barbershop",
    tag: "Premium Barbershop · Montreal",
    metric: "90",
    metricLabel: "new clients acquired in 90 days",
    description:
      "Full acquisition system built from scratch. Premium website, local SEO, and booking flow redesign. Positioned as the top-tier barbershop in a competitive Montreal market.",
    deliverables: ["Website", "Local SEO", "Booking Flow"],
    status: "active" as const,
    link: "/results#elite",
    image: "/images/logos/elite.png",
  },
  {
    id: "culture",
    name: "Culture Barbershop",
    tag: "Barbershop · Montreal, QC",
    metric: "Page 1",
    metricLabel: "local SEO ranking in under 60 days",
    description:
      "Conversion website rebuild and local SEO buildout. Went from invisible online to ranking on page 1 for competitive Montreal barbershop searches. Calendar fully booked within 3 weeks of launch.",
    deliverables: ["Website", "Local SEO", "Booking System"],
    status: "active" as const,
    link: "/results#culture",
    image: "/images/logos/culture.png",
  },
  {
    id: "absolute",
    name: "Absolute Painting",
    tag: "Painting Contractor · DFW, Texas",
    metric: "Live",
    metricLabel: "system running, performance data being collected",
    description:
      "Google Ads campaign with tight budget constraints. Conversion tracking setup on a custom Vercel-hosted site. Targeting high-intent searches in the Highland Park and DFW area.",
    deliverables: ["Website", "Google Ads", "Conversion Tracking"],
    status: "building" as const,
    link: "/results#absolute",
    image: "/images/logos/absolute.png",
  },
  {
    id: "dentaire",
    name: "Centre Dentaire",
    tag: "Dental Clinic · Quebec",
    metric: "Live",
    metricLabel: "patient acquisition funnel running",
    description:
      "Custom conversion website built for patient acquisition. Ads-to-booking funnel designed around high-value dental services. Built as a connected system with tracked cost per lead.",
    deliverables: ["Website", "Ads Funnel", "Booking Flow"],
    status: "building" as const,
    link: "/results#dentaire",
    image: "/images/logos/dentaire.png",
  },
];

export default function CaseStudySwitcher() {
  const [active, setActive] = useState(0);
  const study = caseStudies[active];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#09090b]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-500/60" />
          <span className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium">
            Client Systems
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-10">
          Every System I Have Built.
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${active === i
                  ? "bg-white text-zinc-900"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300"
                }`}
            >
              {cs.name}
            </button>
          ))}
        </div>

        {/* Active card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 p-6 md:p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30">
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <p className="text-lg font-semibold text-white">{study.name}</p>
                {study.status === "active" && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] text-emerald-400 font-medium">Active</span>
                  </span>
                )}
                {study.status === "building" && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="text-[11px] text-amber-400 font-medium">Building</span>
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-500 mb-6">{study.tag}</p>

              <div className="mb-6">
                <p className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
                  {study.metric}
                </p>
                <p className="mt-1 text-sm text-zinc-400">{study.metricLabel}</p>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">{study.description}</p>

              <div className="flex flex-wrap gap-2">
                {study.deliverables.map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1 rounded-full text-xs text-zinc-400 bg-zinc-800/60 border border-zinc-700/30"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={study.link}
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 group"
            >
              View full case study
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-zinc-800/30 border border-zinc-700/20 aspect-[16/10] flex items-center justify-center">
            <img
              src={study.image}
              alt={`${study.name} logo`}
              className="w-1/2 h-1/2 object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
