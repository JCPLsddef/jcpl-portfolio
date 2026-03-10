"use client";

const stack = [
  { name: "Next.js", role: "Website framework", detail: "Server-rendered. Sub-second load times." },
  { name: "Vercel", role: "Hosting & deployment", detail: "99.99% uptime. Global CDN." },
  { name: "Google Ads", role: "Paid acquisition", detail: "Purchase-intent targeting. Tracked cost per call." },
  { name: "Retell AI", role: "AI voice agent", detail: "Captures calls after hours. No lead goes to voicemail." },
  { name: "Google Analytics", role: "Conversion tracking", detail: "Every call, form, and click attributed to source." },
  { name: "Custom code", role: "No templates", detail: "Every site is hand-coded. Zero WordPress. Zero Wix." },
];

export default function TechStack() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#09090b] border-t border-zinc-800/40">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-500/60" />
          <span className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium">
            The Stack
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight max-w-[600px]">
          Built With Infrastructure. Not Page Builders.
        </h2>
        <p className="mt-3 text-sm text-zinc-400 max-w-[500px]">
          The same frameworks used by Vercel, Stripe, and Linear. Not the tools
          every other local agency runs.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map((item, i) => (
            <div
              key={i}
              className="group p-5 rounded-xl border border-zinc-800/40 bg-zinc-900/20 hover:border-zinc-700/50 transition-colors duration-200"
            >
              <p className="text-sm font-semibold text-white">{item.name}</p>
              <p className="text-xs text-amber-500/70 mt-0.5 uppercase tracking-wider">{item.role}</p>
              <p className="text-sm text-zinc-500 mt-3 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-zinc-600">
          Your website loads faster, ranks better, and converts higher than
          anything built on WordPress or Squarespace. The infrastructure difference
          is measurable.
        </p>
      </div>
    </section>
  );
}
