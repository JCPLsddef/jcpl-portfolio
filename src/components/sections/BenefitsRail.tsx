"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import { Users, Zap, BarChart3, Clock, FileCheck } from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    icon: Users,
    title: "One Partner, One System",
    desc: "No vendors to coordinate. No handoffs. One person owns the full pipeline from day one.",
  },
  {
    icon: Zap,
    title: "Engineered to Convert",
    desc: "Every page built to answer why you, why now within 10 seconds and move visitors toward a booked call.",
  },
  {
    icon: BarChart3,
    title: "Tracked From Click to Revenue",
    desc: "Every call traced back to its source. Cost per call updated weekly. No vanity metrics.",
  },
  {
    icon: Clock,
    title: "Launch in Weeks, Not Months",
    desc: "Median 11 days from signed agreement to live system. Not 8 weeks of onboarding.",
  },
  {
    icon: FileCheck,
    title: "You Own Everything",
    desc: "Site, data, accounts, creative. If we part ways, you leave with a working system. Nothing held hostage.",
  },
];

export default function BenefitsRail() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            cardRefs.current.filter(Boolean),
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.15,
              ease: "power2.out",
            }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper
      ref={sectionRef}
      id="benefits"
      variant="default"
      className="!bg-[#0a0f1e] py-16 md:py-24"
    >
      <Reveal className="text-center mb-12">
        <SectionLabel label="SYSTEM BENEFITS" className="mb-4 !text-[#f97316]" />
        <h2 className="text-[clamp(28px,4vw,40px)] leading-[1.2] tracking-[-0.02em] max-w-2xl mx-auto">
          <span className="font-bold text-white">One person builds the full pipeline. </span>
          <span
            className="italic font-normal"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#ffffff",
            }}
          >
            Here is what is inside.
          </span>
        </h2>
        <p className="mt-4 text-[#94a3b8] text-base md:text-lg max-w-xl mx-auto">
          No scattered vendors. No disconnected tools. One system built by one person, tracked to one metric: qualified calls booked.
        </p>
      </Reveal>

      {/* Top row: 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {CARDS.slice(0, 3).map((card, i) => (
          <div
            key={card.title}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="rounded-xl p-8 depth-card"
            style={{
              background: "#0f1729",
              border: "1px solid #1e293b",
              borderTop: "3px solid #f97316",
            }}
          >
            <card.icon
              className="mb-4"
              size={24}
              style={{ color: "#f97316" }}
              aria-hidden
            />
            <h3 className="text-[1.125rem] font-bold text-white mb-2">
              {card.title}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#cbd5e1", lineHeight: 1.6 }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
      {/* Bottom row: 2 cards, centered */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mx-auto"
        style={{ maxWidth: "calc(66.666% + 12px)" }}
      >
        {CARDS.slice(3, 5).map((card, i) => (
          <div
            key={card.title}
            ref={(el) => { cardRefs.current[i + 3] = el; }}
            className="rounded-xl p-8 depth-card"
            style={{
              background: "#0f1729",
              border: "1px solid #1e293b",
              borderTop: "3px solid #f97316",
            }}
          >
            <card.icon
              className="mb-4"
              size={24}
              style={{ color: "#f97316" }}
              aria-hidden
            />
            <h3 className="text-[1.125rem] font-bold text-white mb-2">
              {card.title}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#cbd5e1", lineHeight: 1.6 }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
