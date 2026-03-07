"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { differentiation } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 4l8 8M12 4l-8 8" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 8.5l3 3 5-5.5" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ElevenDaysStat() {
  const statRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !numRef.current) return;

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: statRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(obj, {
            val: 11,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: () => {
              if (numRef.current) numRef.current.textContent = String(Math.round(obj.val));
            },
          });
        },
        once: true,
      });
    }, statRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={statRef} className="text-center mt-12 mb-4">
      <div className="inline-flex items-baseline gap-2">
        <span ref={numRef} className="stat-11-table text-white font-extrabold" style={{ fontSize: "4rem" }}>
          0
        </span>
        <span className="text-white font-bold" style={{ fontSize: "2rem" }}>
          days
        </span>
      </div>
      <p
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#f97316",
          marginTop: 8,
        }}
      >
        MEDIAN FROM SIGNED AGREEMENT TO LIVE SYSTEM
      </p>
      <p style={{ fontSize: "0.8rem", color: "#64748b", marginTop: 4 }}>
        Industry average: 6 to 8 weeks.
      </p>
    </div>
  );
}

export default function Differentiation() {
  const tableRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".comparison-row", {
        opacity: 0,
        y: 7,
        stagger: 0.07,
        duration: 0.45,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".comparison-table",
          start: "top 76%",
          once: true,
        },
      });
    }, tableRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="difference" className="bg-[#0a0f1e]">
      <Reveal className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
        <SectionLabel label={differentiation.label} className="mb-5 !text-[#f97316]" />
        <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto">
          {differentiation.headline}
        </h2>
      </Reveal>

      <Reveal className="max-w-2xl mx-auto mb-12">
        <p className="text-[15px] font-[400] leading-[1.8] mb-5" style={{ color: "#94a3b8" }}>
          An agency will take your $3,000, spend 6 weeks onboarding you, send you a report full of impressions and clicks, and invoice you again while you still wait for the phone to ring.
        </p>
        <p className="text-[15px] font-[400] leading-[1.8]" style={{ color: "#94a3b8" }}>
          I have one metric: qualified calls on your calendar. If that number is not growing, I have not done my job. That is it. Nothing else counts.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="hidden md:block">
        <div ref={tableRef} className="max-w-4xl mx-auto comparison-table">
          <div
            className="rounded-[14px] overflow-hidden"
            style={{
              background: "#0f1729",
              border: "1px solid #1e293b",
            }}
          >
            <div
              className="grid grid-cols-[1fr_1fr_1fr] border-b"
              style={{ borderColor: "#1e293b" }}
            >
              <div
                className="p-5 text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: "#94a3b8" }}
              >
                Dimension
              </div>
              <div
                className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-center"
                style={{ color: "#64748b" }}
              >
                Typical Agency
              </div>
              <div
                className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-center"
                style={{ color: "#f97316" }}
              >
                CLIENT GROWTH
              </div>
            </div>

            {differentiation.comparisons.map((row, i) => (
              <div
                key={i}
                ref={(el) => { rowRefs.current[i] = el; }}
                className="grid grid-cols-[1fr_1fr_1fr] comparison-row"
                style={{
                  borderBottom: i < differentiation.comparisons.length - 1 ? "1px solid #1e293b" : undefined,
                }}
              >
                <div className="p-5 text-sm font-semibold text-white">{row.dimension}</div>
                <div className="p-5 flex items-start gap-2.5 justify-center">
                  <XIcon />
                  <span className="text-sm table-typical-agency-value" style={{ color: "#94a3b8", fontWeight: 400 }}>
                    {row.them}
                  </span>
                </div>
                <div className="p-5 flex items-start gap-2.5 justify-center">
                  <CheckIcon />
                  <span className="text-sm table-client-growth-value" style={{ color: "#ffffff", fontWeight: 600 }}>
                    {row.us}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="md:hidden space-y-4 max-w-sm mx-auto">
        {differentiation.comparisons.map((row, i) => (
          <Reveal key={i} delay={0.06 * i}>
            <div
              className="rounded-xl p-5 depth-card"
              style={{ border: "1px solid #1e293b", background: "#0f1729" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.15em] mb-3"
                style={{ color: "#94a3b8" }}
              >
                {row.dimension}
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <XIcon />
                  <span className="text-sm" style={{ color: "#94a3b8" }}>
                    {row.them}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-sm font-[600] text-white">{row.us}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <ElevenDaysStat />
      </Reveal>
    </SectionWrapper>
  );
}
