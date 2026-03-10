"use client";

export default function ComparisonSection() {
  const comparisons = [
    {
      dimension: "Ownership",
      agency: "5 vendors. None of them own the outcome.",
      you: "One person owns everything from positioning to booked call.",
    },
    {
      dimension: "Speed",
      agency: "8 to 12 weeks. Endless revision cycles.",
      you: "Live system in 2 to 4 weeks. First call in 11 days.",
    },
    {
      dimension: "After launch",
      agency: "Invoice sent. They disappear.",
      you: "Weekly optimization. Monthly review call. System compounds.",
    },
    {
      dimension: "Metrics",
      agency: "Reports full of impressions and clicks.",
      you: "One metric: qualified calls on your calendar.",
    },
    {
      dimension: "Cost structure",
      agency: "$3,000+/month. Results unclear.",
      you: "Tracked cost per call. Every dollar accounted for.",
    },
    {
      dimension: "If you leave",
      agency: "You own nothing. Start over.",
      you: "You keep the site, the ads account, the tracking. All of it.",
    },
  ];

  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-24 bg-[#09090b]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-emerald-500/60" />
          <span className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium">
            The Difference
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight max-w-[700px]">
          One Partner vs. Five Vendors Who Point at Each Other.
        </h2>

        {/* Column headers */}
        <div className="hidden md:grid grid-cols-[180px_1fr_1fr] gap-8 mt-12 mb-2">
          <div />
          <p className="text-xs text-zinc-600 uppercase tracking-widest">Typical agency</p>
          <p className="text-xs text-zinc-300 uppercase tracking-widest">Growth Architecture</p>
        </div>

        <div className="space-y-0">
          {comparisons.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] gap-4 md:gap-8 py-6 border-b border-zinc-800/60"
            >
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-medium pt-1">
                {item.dimension}
              </div>
              <div>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.agency}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-200 leading-relaxed">{item.you}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-zinc-600">
          Median build time from signed agreement to live system: 11 days.
          Average agency onboarding: 6 to 8 weeks.
        </p>
      </div>
    </section>
  );
}
