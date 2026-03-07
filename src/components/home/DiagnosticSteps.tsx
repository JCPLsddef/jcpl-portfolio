"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    title: "I audit your pipeline.",
    body: "Your market, your competitors, your current traffic sources. I look at what is working and what is leaking.",
  },
  {
    num: "02",
    title: "I show you where you are losing calls.",
    body: "Most service businesses are invisible for the exact searches their customers are making right now. I show you the gap.",
  },
  {
    num: "03",
    title: "I tell you if I can help.",
    body: "If I cannot move the needle for your business, I will say so directly. No pitch. No pressure. You leave the call knowing exactly where you stand.",
  },
];

export default function DiagnosticSteps() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const ctx = gsap.context(() => {
      if (isMobile) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(
              stepRefs.current.filter(Boolean),
              { opacity: 0 },
              { opacity: 1, duration: 0.5, stagger: 0.2, ease: "power2.out" }
            );
          },
          once: true,
        });
      } else {
        gsap.fromTo(
          ".diagnostic-card-1",
          { opacity: 0, x: -28 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: ".diagnostic-section", start: "top 78%", once: true } }
        );
        gsap.fromTo(
          ".diagnostic-card-2",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.12, ease: "power2.out", scrollTrigger: { trigger: ".diagnostic-section", start: "top 78%", once: true } }
        );
        gsap.fromTo(
          ".diagnostic-card-3",
          { opacity: 0, x: 28 },
          { opacity: 1, x: 0, duration: 0.6, delay: 0.24, ease: "power2.out", scrollTrigger: { trigger: ".diagnostic-section", start: "top 78%", once: true } }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper
      ref={sectionRef}
      id="diagnostic"
      className="py-16 md:py-24 !bg-[#0a0f1e]"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <SectionLabel label="THE DIAGNOSTIC" className="mb-4 !text-[#f97316]" />
        <h2
          className="text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-6"
          style={{ maxWidth: 640, margin: "0 auto 24px" }}
        >
          Here is exactly what happens on the call.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14 diagnostic-section">
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            ref={(el) => { stepRefs.current[i] = el; }}
            className={`rounded-xl p-8 lift-card diagnostic-card-${i + 1}`}
            style={{
              opacity: 1,
              background: "#0f1729",
              border: "1px solid #1e293b",
              ...(i === 2 && { borderTop: "3px solid #f97316" }),
            }}
          >
            <div
              className="mb-4"
              style={{ fontSize: "2rem", color: "#f97316", fontWeight: 800 }}
            >
              {step.num}
            </div>
            <h3
              className="mb-3"
              style={{ fontSize: "1.25rem", color: "#ffffff", fontWeight: 700 }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#cbd5e1",
                lineHeight: 1.6,
              }}
            >
              {step.body}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <Link
          href="#book-call"
          className="inline-flex items-center justify-center gap-2 font-semibold text-white rounded-lg cta-primary cta-button"
          style={{
            background: "#f97316",
            padding: "16px 32px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#ea6c0a";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#f97316";
          }}
        >
          Book a 20-Minute Diagnostic Call
          <span aria-hidden="true">→</span>
        </Link>
        <p
          className="mt-2 text-center"
          style={{ fontSize: "0.875rem", color: "#64748b" }}
        >
          If I cannot move the needle, I will tell you on the call. Before you pay anything.
        </p>
      </div>
    </SectionWrapper>
  );
}
