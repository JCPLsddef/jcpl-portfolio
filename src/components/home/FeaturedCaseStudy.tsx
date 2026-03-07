"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import { countUp } from "@/lib/animations";
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
  const tripleWRef = useRef<HTMLDivElement>(null);

  const statCardsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const statCards = statCardsRef.current;
    if (statCards) {
      const el27 = statCards.querySelector(".stat-27-card");
      const el11 = statCards.querySelector(".stat-11-card");
      if (el27) countUp(el27 as HTMLElement, 27, { prefix: "$" });
      if (el11) countUp(el11 as HTMLElement, 11);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const ctx = gsap.context(() => {
      gsap.from(".proof-cards .case-study-card", {
        opacity: 0,
        y: isMobile ? 0 : 22,
        stagger: 0.09,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".proof-cards",
          start: "top 76%",
          once: true,
        },
      });
      gsap.from(".stat-cards .stat-card", {
        opacity: 0,
        y: isMobile ? 0 : 22,
        stagger: 0.09,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stat-cards",
          start: "top 76%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper ref={sectionRef} id="proof" style={{ background: "#131009" }}>
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label="PROOF" className="mb-5 !text-[#D4A853]" />
        <h2 className="text-[clamp(32px,5vw,48px)] font-[800] leading-[1.15] tracking-[-0.03em] max-w-2xl mx-auto">
          <span className="text-white font-bold">
            $41,085 from $900 in ad spend.
          </span>{" "}
          <span className="italic" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#A69D8D" }}>
            Page 1 in under 60 days.
          </span>
        </h2>
      </Reveal>

      {/* Triple W Rentals - revenue story */}
      <Reveal delay={0.1}>
        <div ref={tripleWRef} className="max-w-3xl mx-auto mb-8 proof-cards">
          <div
            className="rounded-[14px] px-8 sm:px-10 py-10 sm:py-12 overflow-hidden lift-card case-study-card case-study-card-primary"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderTop: "3px solid #D4A853",
            }}
          >
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#756D63", textTransform: "uppercase", marginBottom: 16 }}>
              RV RENTAL · TEXAS · GOOGLE ADS
            </p>
            <div className="stat-glow" style={{ position: "relative" }}>
              <div className="text-[#F5F0E8] font-extrabold mb-2 stat-41085-proof stat-41085" style={{ fontSize: "5rem", lineHeight: 1 }}>
                <CountUpRevenue to={41085} prefix="$" />
              </div>
            </div>
            <p style={{ fontSize: "1rem", color: "#A69D8D", marginBottom: 24 }}>
              in revenue. First 30 days.
            </p>
            <div
              className="rounded-lg p-4 mt-4"
              style={{
                background: "#1E1A14",
                border: "1px solid #2A2318",
                fontSize: "0.8rem",
                color: "#756D63",
                fontStyle: "italic",
              }}
            >
              Every $1 in ad spend returned $46 in revenue. Live account. Last verified February 2026.
            </div>
          </div>
        </div>
      </Reveal>

      {/* Absolute Painting - ranking story */}
      <Reveal delay={0.15}>
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-[14px] px-8 sm:px-10 py-10 sm:py-12 overflow-hidden lift-card case-study-card case-study-card-secondary"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderTop: "3px solid rgba(212, 168, 83, 0.42)",
            }}
          >
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#756D63", textTransform: "uppercase", marginBottom: 16 }}>
              PAINTING CONTRACTOR · TEXAS · GOOGLE ADS + SEO
            </p>
            <div className="text-white font-extrabold mb-1" style={{ fontSize: "5rem", lineHeight: 1 }}>
              Page 1
            </div>
            <p style={{ fontSize: "1rem", color: "#A69D8D", marginBottom: 24 }}>
              in under 60 days.
            </p>
            <div style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "#F5F0E8",
              marginBottom: 8,
            }}>
              $27
            </div>
            <p style={{ color: "#D2C9B8", fontSize: "0.9rem", marginBottom: 8 }}>
              avg cost per qualified inbound call
            </p>
            <p style={{ fontSize: "0.85rem", color: "#A69D8D", fontStyle: "italic" }}>
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
            style={{ color: "#A69D8D", fontSize: "0.9rem" }}
          >
            See all case studies →
          </Link>
        </div>
      </Reveal>

      {/* Aggregate stats */}
      <Reveal delay={0.25}>
        <div ref={statCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto stat-cards">
          <div
            className="rounded-xl p-6 lift-card stat-card"
            style={{ background: "#1E1A14", border: "1px solid #2A2318" }}
          >
            <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", color: "#D4A853", textTransform: "uppercase", marginBottom: 8 }}>LOCAL SEO</p>
            <p className="text-3xl font-bold text-white">Page 1</p>
            <p style={{ fontSize: "0.875rem", color: "#A69D8D", marginTop: 8 }}>Under 60 days. Competitive TX market. Painting contractor.</p>
          </div>
          <div
            className="rounded-xl p-6 lift-card stat-card"
            style={{ background: "#1E1A14", border: "1px solid #2A2318" }}
          >
            <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", color: "#D4A853", textTransform: "uppercase", marginBottom: 8 }}>COST PER LEAD</p>
            <p className="text-3xl font-bold text-white"><span className="stat-27-card">0</span></p>
            <p style={{ fontSize: "0.875rem", color: "#A69D8D", marginTop: 8 }}>Avg cost per qualified inbound call. All active accounts. Q4 2025.</p>
          </div>
          <div
            className="rounded-xl p-6 lift-card stat-card"
            style={{ background: "#1E1A14", border: "1px solid #2A2318" }}
          >
            <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", color: "#D4A853", textTransform: "uppercase", marginBottom: 8 }}>TIME TO FIRST CALL</p>
            <p className="text-3xl font-bold text-white"><span className="stat-11-card">0</span> days</p>
            <p style={{ fontSize: "0.875rem", color: "#A69D8D", marginTop: 8 }}>Median across all clients and niches.</p>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
