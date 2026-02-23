"use client";

import { clientReality } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

/* ─── Pain Icons (updated to blue palette) ─── */
const icons: Record<string, React.ReactNode> = {
  ghost: (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="#4B8EFF" strokeWidth="1.5" />
      <path d="M7 13c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5" stroke="#4B8EFF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="9" r="1" fill="#4B8EFF" />
      <circle cx="12" cy="9" r="1" fill="#4B8EFF" />
    </svg>
  ),
  leak: (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 6h10v7a2 2 0 01-2 2H7a2 2 0 01-2-2V6z" stroke="#4B8EFF" strokeWidth="1.5" />
      <path d="M8 15v3M10 15v4M12 15v2.5" stroke="#4B8EFF" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      <path d="M5 6h10" stroke="#4B8EFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  scatter: (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="#4B8EFF" strokeWidth="1.5" />
      <rect x="12" y="2" width="6" height="6" rx="1.5" stroke="#4B8EFF" strokeWidth="1.5" />
      <rect x="2" y="12" width="6" height="6" rx="1.5" stroke="#4B8EFF" strokeWidth="1.5" />
      <rect x="12" y="12" width="6" height="6" rx="1.5" stroke="#4B8EFF" strokeWidth="1.5" />
    </svg>
  ),
  clock: (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="#4B8EFF" strokeWidth="1.5" />
      <path d="M10 6v4l3 2" stroke="#4B8EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function ClientReality() {
  return (
  <SectionWrapper id="reality" variant="alt" className="border-b border-slate-700/40">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label={clientReality.label} className="mb-5" />
  <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto">
          {clientReality.headline}
        </h2>
      </Reveal>

      {/* Card 1 — full width, featured treatment */}
      <Reveal className="max-w-4xl mx-auto mb-5">
        <div className="group relative rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-cg-card p-10 transition-all duration-300 hover:border-[rgba(37,99,235,0.45)] hover:-translate-y-[2px] lg:border-r-4 lg:border-r-blue-500/30">
          <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[rgba(37,99,235,0.2)] border border-[rgba(37,99,235,0.4)]">
            {icons[clientReality.pains[0].icon]}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 leading-snug">
            {clientReality.pains[0].title}
          </h3>
          <p className="text-[16px] text-cg-secondary leading-[1.75] max-w-2xl">
            {clientReality.pains[0].detail}
          </p>
        </div>
      </Reveal>

      {/* Cards 2-4 — 3-col on desktop, 2-col on tablet */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {clientReality.pains.slice(1).map((pain, i) => (
          <Reveal key={pain.icon} delay={0.08 * (i + 1)}>
            <div className="group relative rounded-[14px] border border-[rgba(255,255,255,0.07)] bg-cg-card p-7 md:p-8 h-full transition-all duration-300 hover:border-[rgba(37,99,235,0.45)] hover:-translate-y-[2px]">
              <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[rgba(37,99,235,0.2)] border border-[rgba(37,99,235,0.4)]">
                {icons[pain.icon]}
              </div>
              <h3 className="text-[18px] font-bold text-white mb-2 leading-snug">
                {pain.title}
              </h3>
              <p className="text-[16px] text-cg-secondary leading-[1.75]">
                {pain.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Transition block */}
      <Reveal delay={0.2}>
        <div className="max-w-2xl mx-auto text-center mt-14 md:mt-16">
          <p className="text-[clamp(22px,3vw,28px)] font-bold text-white leading-snug">
            This is why I built the Growth Architecture™.
          </p>
          <p className="mt-3 text-[16px] text-cg-secondary leading-[1.75] max-w-md mx-auto">
            A single system that solves all four problems at once.
          </p>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
