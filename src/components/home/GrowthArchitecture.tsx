"use client";

import { growthArchitecture } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import Link from "next/link";

const tiles = [
  {
    number: "01",
    headline: "Show Up First.",
    body: "I position you on Google and AI tools like ChatGPT at the exact moment buyers in your city are ready to call. Before your competitors know this exists.",
    tags: ["Conversion website", "Local SEO", "GEO content"],
    screenshotSrc: "/images/system/card-seo.png",
  },
  {
    number: "02",
    headline: "Turn Visitors Into Calls.",
    body: "95% of website visitors leave without doing anything. I build a booking flow that captures people who are already interested in hiring you, without you lifting a finger.",
    tags: ["Booking flow", "AI lead qualifier", "Trust signals"],
    screenshotSrc: "/images/system/card-website.png",
  },
  {
    number: "03",
    headline: "Get in Front of Buyers Now.",
    body: "Google Ads targeting people with purchase intent, not browsers. Every campaign built around one goal: more calls from people ready to hire you today.",
    tags: ["Paid traffic", "Dedicated landing pages", "Tracked cost per call"],
    screenshotSrc: "/images/system/card-ads.png",
  },
  {
    number: "04",
    headline: "Results Get Better Every Week.",
    body: "I look at the numbers every week and cut what is not working. The system compounds. Your cost per lead goes down every month it runs.",
    tags: ["Weekly optimization", "Monthly review call", "Conversion improvements"],
    screenshotSrc: "/images/system/card-analytics.png",
  },
];

export default function GrowthArchitecture() {
  return (
    <SectionWrapper id="system" variant="alt">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label={growthArchitecture.label} className="mb-5" />
        <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto">
          {growthArchitecture.headline}
        </h2>
        <p className="mt-5 text-sv-text-sub max-w-lg mx-auto leading-[1.75] text-[17px]">
          {growthArchitecture.subheadline}
        </p>
      </Reveal>

      {/* 2x2 Compact Tile Grid */}
      <div className="grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
        {tiles.map((tile, i) => (
          <Reveal key={tile.number} delay={0.07 * i}>
            <div className="group relative rounded-[14px] bg-sv-surface border border-[rgba(255,255,255,0.07)] p-7 md:p-8 h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-[rgba(37,99,235,0.45)] hover:-translate-y-[2px]">
              {/* Number + Headline */}
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-[12px] font-[400] opacity-[0.35] tracking-wider">
                  {tile.number}
                </span>
                <h3 className="text-[21px] font-[700] text-white leading-snug">
                  {tile.headline}
                </h3>
              </div>

              {/* Body */}
              <p className="text-[14px] font-[400] leading-[1.65] opacity-[0.65] mb-5 flex-1">
                {tile.body}
              </p>

              {/* Screenshot slot */}
              <div style={{
                width: "100%", borderRadius: "6px", overflow: "hidden",
                marginTop: "16px", marginBottom: "16px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <img
                  src={tile.screenshotSrc}
                  alt={tile.headline}
                  style={{ width: "100%", display: "block", opacity: 0.82 }}
                  onError={(e) => { (e.currentTarget.parentElement as HTMLDivElement).style.display = "none"; }}
                />
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {tile.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-[12px] font-medium"
                    style={{
                      background: "rgba(37,99,235,0.12)",
                      border: "1px solid rgba(37,99,235,0.25)",
                      color: "#93C5FD",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Link to /services */}
      <Reveal delay={0.2}>
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="text-[15px] font-medium text-sv-muted hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-[rgba(75,142,255,0.4)]"
          >
            Want the full breakdown? See how the system is built →
          </Link>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
