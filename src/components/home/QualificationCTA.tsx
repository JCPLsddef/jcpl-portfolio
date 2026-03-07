"use client";

import Link from "next/link";
import { qualification } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";


function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M4 8.5l3 3 5-5.5" stroke="var(--brand-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M4 4l8 8M12 4l-8 8" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function QualificationCTA() {
  return (
    <section id="qualify" className="relative overflow-hidden bg-[#060b14] py-16 border-b border-slate-700/40">
      {/* Background treatment */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #060D1F 0%, rgba(6,13,31,0.6) 50%, #060D1F 100%)",
        }}
        aria-hidden="true"
      />

      <SectionWrapper className="relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <SectionLabel label="WHO THIS IS FOR" className="mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              This Partnership Has a Specific Type of Client.
            </h2>
            <p className="text-sv-text-sub text-base md:text-lg text-center">
              I only work with businesses I know I can move the needle for. Read both sides before applying.
            </p>
          </div>

          {/* Qualification Grid */}
          <Reveal>
            <div className="grid gap-6 md:grid-cols-2 mb-12">
              {/* For You If — green left border, light green tint */}
              <div
                className="rounded-2xl bg-sv-surface p-7 md:p-8"
                style={{
                  borderLeft: "4px solid rgba(52,211,153,0.6)",
                  border: "1px solid rgba(52,211,153,0.2)",
                  borderLeftWidth: "4px",
                  borderLeftColor: "rgba(52,211,153,0.6)",
                  background: "rgba(52,211,153,0.04)",
                }}
              >
                <h3 className="text-[18px] font-[700] text-white mb-5">
                  You are the right fit if:
                </h3>
                <ul className="space-y-3.5">
                  {qualification.forYouIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] font-[400] leading-[1.7] opacity-[0.80]">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not For You If — red right border, light red tint */}
              <div
                className="rounded-2xl bg-sv-surface p-7 md:p-8"
                style={{
                  borderRight: "4px solid rgba(239,68,68,0.5)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  borderRightWidth: "4px",
                  borderRightColor: "rgba(239,68,68,0.5)",
                  background: "rgba(239,68,68,0.03)",
                }}
              >
                <h3 className="text-[18px] font-[700] text-white mb-5">
                  This is NOT the right fit if:
                </h3>
                <ul className="space-y-3.5">
                  {qualification.notForYouIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] font-[400] leading-[1.7] opacity-[0.80]">
                      <XIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Closing line */}
          <Reveal delay={0.1}>
            <div
              className="border-t border-white/10"
              style={{ paddingTop: 40, paddingBottom: 40 }}
            >
              <p
                className="text-center leading-snug"
                style={{
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                }}
              >
                Serious operators build infrastructure. Everyone else waits for the phone to ring.
              </p>
              <div className="text-center mt-8">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-base font-semibold transition-all"
                  style={{
                    background: "#1e3a5f",
                    color: "#ffffff",
                    border: "1px solid #2d5a8e",
                  }}
                >
                  Apply for Growth Partnership
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionWrapper>
    </section>
  );
}
