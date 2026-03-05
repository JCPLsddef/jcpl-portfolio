"use client";

import CTAButton from "@/components/ui/CTAButton";
import { useTranslations } from "@/context/LocaleContext";

export default function SpotsLeftSection() {
  const t = useTranslations();
  const microcopy = [t<string>("spots.reply24"), t<string>("spots.noContracts"), t<string>("spots.threeSpots")];
  return (
    <section className="bg-sv-base py-16 md:py-24 text-center">
      <div className="max-w-xl mx-auto px-4">
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}>
          <img
            src="/images/juan.jpg"
            alt="Juan — Client Growth"
            style={{
              width: "68px", height: "68px",
              borderRadius: "50%", objectFit: "cover",
              border: "2px solid rgba(255,255,255,0.14)",
              display: "block",
            }}
            onError={(e) => { (e.currentTarget.parentElement as HTMLDivElement).style.display = "none"; }}
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t<string>("spots.heading")}
        </h2>

        <p className="text-sv-text-sub text-lg mb-5 leading-[1.7]">
          {t<string>("spots.paragraph")}
        </p>

        {/* Social proof strip */}
        <div
          className="rounded-[12px] px-6 py-5 mb-7 text-left"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-sv-text-muted mb-4 text-center">
            {t<string>("spots.lastThree")}
          </p>
          <div className="flex flex-col gap-2.5">
            <p className="text-[15px] font-bold text-emerald-400">{t<string>("spots.proof1")}</p>
            <p className="text-[15px] font-bold text-emerald-400">{t<string>("spots.proof2")}</p>
            <p className="text-[15px] font-bold text-emerald-400">{t<string>("spots.proof3")}</p>
          </div>
        </div>

        <p className="text-white text-lg font-semibold mb-3">
          {t<string>("spots.oneSpot")}
        </p>

        <p className="text-sv-text-sub text-base mb-8 leading-[1.7] max-w-md mx-auto">
          {t<string>("spots.applyParagraph")}
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <CTAButton href="/apply" size="lg">
            {t<string>("spots.applyCta")}
          </CTAButton>
          <CTAButton href="/results" variant="secondary" size="md">
            {t<string>("spots.seeResults")}
          </CTAButton>
        </div>

        {/* Microcopy */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {microcopy.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 text-xs text-sv-text-sub">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="text-sv-primary">
                <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="0.8" />
                <path d="M3.8 6 L5.3 7.5 L8.2 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
