"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import CountUpValue from "@/components/motion/CountUpValue";
import Link from "next/link";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

function CountUpRevenue({ to, prefix = "" }: { to: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(obj, {
            val: to,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: () => {
              if (ref.current) ref.current.textContent = prefix + Math.round(obj.val).toLocaleString();
            },
          });
        },
        once: true,
      });
    }, ref);

    return () => ctx.revert();
  }, [to, prefix]);

  return <span ref={ref}>{prefix}0</span>;
}

const stats2 = [
  { label: "LOCAL SEO", value: "Page 1", sub: "Under 60 days. Competitive TX market. Painting contractor." },
  { label: "COST PER LEAD", value: "$27", sub: "Avg cost per qualified inbound call. All active accounts. Q4 2025." },
  { label: "TIME TO FIRST CALL", value: "11 days", sub: "Median across all clients and niches." },
];

export default function FeaturedCaseStudy() {
  return (
    <SectionWrapper id="proof" className="bg-[#0a0f1e]">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label="PROOF" className="mb-5 !text-[#f97316]" />
        <h2 className="text-[clamp(32px,5vw,48px)] font-[800] leading-[1.15] tracking-[-0.03em] max-w-2xl mx-auto">
          <span className="text-white font-bold">
            $41,085 from $900 in ad spend.
          </span>{" "}
          <span className="italic" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#94a3b8" }}>
            Page 1 in under 60 days.
          </span>
        </h2>
      </Reveal>

      {/* Triple W Rentals - revenue story */}
      <Reveal delay={0.1}>
        <div className="max-w-3xl mx-auto mb-8">
          <div
            className="rounded-[14px] px-8 sm:px-10 py-10 sm:py-12 overflow-hidden"
            style={{
              background: "#0f1729",
              border: "1px solid #1e293b",
              borderTop: "3px solid #f97316",
            }}
          >
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#64748b", textTransform: "uppercase", marginBottom: 16 }}>
              RV RENTAL · TEXAS · GOOGLE ADS
            </p>
            <div className="text-white font-extrabold mb-2" style={{ fontSize: "5rem", lineHeight: 1 }}>
              <CountUpRevenue to={41085} prefix="$" />
            </div>
            <p style={{ fontSize: "1rem", color: "#94a3b8", marginBottom: 24 }}>
              in revenue. First 30 days.
            </p>
            <div className="flex gap-8 mb-6">
              <div className="text-center">
                <span className="text-white font-bold" style={{ fontSize: "1.25rem" }}>$900</span>
                <p style={{ fontSize: "0.7rem", color: "#64748b", textTransform: "uppercase", marginTop: 4 }}>AD SPEND</p>
              </div>
              <div className="text-center">
                <span className="text-white font-bold" style={{ fontSize: "1.25rem" }}>46x</span>
                <p style={{ fontSize: "0.7rem", color: "#64748b", textTransform: "uppercase", marginTop: 4 }}>RETURN</p>
              </div>
              <div className="text-center">
                <span className="text-white font-bold" style={{ fontSize: "1.25rem" }}>30</span>
                <p style={{ fontSize: "0.7rem", color: "#64748b", textTransform: "uppercase", marginTop: 4 }}>DAYS</p>
              </div>
            </div>
            <div style={{ marginTop: 24, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
              <img
                src="/images/proof/triplew-ads-dashboard.png"
                alt="Google Ads dashboard, Triple W Rentals campaign"
                style={{ width: "100%", display: "block", opacity: 0.9 }}
                onError={(e) => { (e.currentTarget.parentElement as HTMLDivElement).style.display = "none"; }}
              />
            </div>
            <p style={{ fontSize: "0.7rem", color: "#64748b", marginTop: 12 }}>
              Every $1 in ad spend returned $46 in revenue. Live account. Last verified February 2026.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Absolute Painting - ranking story */}
      <Reveal delay={0.15}>
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-[14px] px-8 sm:px-10 py-10 sm:py-12 overflow-hidden"
            style={{
              background: "#0f1729",
              border: "1px solid #1e293b",
            }}
          >
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#64748b", textTransform: "uppercase", marginBottom: 16 }}>
              PAINTING CONTRACTOR · TEXAS · GOOGLE ADS + SEO
            </p>
            <div className="text-white font-extrabold mb-1" style={{ fontSize: "5rem", lineHeight: 1 }}>
              Page 1
            </div>
            <p style={{ fontSize: "1rem", color: "#94a3b8", marginBottom: 24 }}>
              in under 60 days.
            </p>
            <p style={{ fontSize: "1.25rem", color: "#ffffff", fontWeight: 600, marginBottom: 24 }}>
              <CountUpValue to={27} prefix="$" durationMs={1400} /> per qualified inbound call
            </p>
            <p style={{ fontSize: "0.85rem", color: "#94a3b8", fontStyle: "italic" }}>
              Competitive DFW painting market. Ranking above national lead gen sites. Last verified Q4 2025.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-10">
        <div className="text-center">
          <Link
            href="/results"
            className="inline-block hover:underline"
            style={{ color: "#94a3b8", fontSize: "0.9rem" }}
          >
            See all case studies →
          </Link>
        </div>
      </Reveal>

      {/* Aggregate stats */}
      <Reveal delay={0.25}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
          {stats2.map(({ label, value, sub }) => (
            <div
              key={label}
              className="rounded-xl p-6"
              style={{
                background: "#0f1729",
                border: "1px solid #1e293b",
              }}
            >
              <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", color: "#f97316", textTransform: "uppercase", marginBottom: 8 }}>
                {label}
              </p>
              <p className="text-3xl font-bold text-white">{value}</p>
              <p style={{ fontSize: "0.875rem", color: "#94a3b8", marginTop: 8 }}>{sub}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
