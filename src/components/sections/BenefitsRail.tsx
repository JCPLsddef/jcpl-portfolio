"use client";

import { useRef, useEffect } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import { Users, Zap, BarChart3, Clock, FileCheck } from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { icon: Users, title: "One Partner, One System", desc: "No vendors to coordinate. No handoffs. One person owns the full pipeline from day one." },
  { icon: Zap, title: "Engineered to Convert", desc: "Every page built to answer why you, why now within 10 seconds and move visitors toward a booked call." },
  { icon: BarChart3, title: "Tracked From Click to Revenue", desc: "Every call traced back to its source. Cost per call updated weekly. No vanity metrics." },
  { icon: Clock, title: "Launch in Weeks, Not Months", desc: "Median 11 days from signed agreement to live system. Not 8 weeks of onboarding." },
  { icon: FileCheck, title: "You Own Everything", desc: "Site, data, accounts, creative. If you decide to leave, you leave with a working system. Nothing held hostage." },
];

export default function BenefitsRail() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const ctx = gsap.context(() => {
      gsap.from(".benefits-grid .benefit-card", {
        opacity: 0,
        y: isMobile ? 0 : 22,
        stagger: 0.09,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".benefits-grid",
          start: "top 76%",
          once: true,
        },
      });
      gsap.from(".benefit-card-icon", {
        scale: 0,
        rotation: -15,
        stagger: 0.07,
        duration: 0.5,
        ease: "back.out(2.2)",
        scrollTrigger: {
          trigger: ".benefits-grid",
          start: "top 76%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper
      ref={sectionRef}
      id="benefits"
      variant="default"
      className="py-16 md:py-24"
      style={{ background: "#181410" }}
    >
      <Reveal className="text-center mb-12">
        <SectionLabel label="SYSTEM BENEFITS" className="mb-4 !text-[#D4A853]" />
        <h2 className="text-[clamp(28px,4vw,40px)] leading-[1.2] tracking-[-0.02em] max-w-2xl mx-auto">
          <span className="font-bold text-white">One person builds the full pipeline. </span>
          <span
            className="italic font-normal"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F5F0E8" }}
          >
            Here is what is inside.
          </span>
        </h2>
        <p className="mt-4 text-[#A69D8D] text-base md:text-lg max-w-xl mx-auto">
          No scattered vendors. No disconnected tools. One system built by one person, tracked to one metric: qualified calls booked.
        </p>
      </Reveal>

      <Reveal>
        <div className="benefits-grid max-w-5xl mx-auto">
          {/* Top row — 3 cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {CARDS.slice(0, 3).map((card) => (
              <article
                key={card.title}
                className="benefit-card rounded-xl p-7 lift-card"
                style={{
                  background: "#1E1A14",
                  border: "1px solid #2A2318",
                  borderTop: "3px solid #D4A853",
                }}
              >
                <div
                  className="benefit-card-icon w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                  style={{ color: "#D4A853" }}
                >
                  <card.icon size={32} strokeWidth={1.75} />
                </div>
                <h3 className="benefit-card-title text-[1rem] font-bold text-[#F5F0E8] mb-2">
                  {card.title}
                </h3>
                <p className="benefit-card-body text-[0.9rem] text-[#D2C9B8] leading-relaxed">
                  {card.desc}
                </p>
              </article>
            ))}
          </div>
          {/* Bottom row — 2 cards centered */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
            style={{ maxWidth: "calc(66.666% + 8px)", marginLeft: "auto", marginRight: "auto" }}
          >
            {CARDS.slice(3, 5).map((card) => (
              <article
                key={card.title}
                className="benefit-card rounded-xl p-7 lift-card"
                style={{
                  background: "#1E1A14",
                  border: "1px solid #2A2318",
                  borderTop: "3px solid #D4A853",
                }}
              >
                <div
                  className="benefit-card-icon w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                  style={{ color: "#D4A853" }}
                >
                  <card.icon size={32} strokeWidth={1.75} />
                </div>
                <h3 className="benefit-card-title text-[1rem] font-bold text-[#F5F0E8] mb-2">
                  {card.title}
                </h3>
                <p className="benefit-card-body text-[0.9rem] text-[#D2C9B8] leading-relaxed">
                  {card.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
