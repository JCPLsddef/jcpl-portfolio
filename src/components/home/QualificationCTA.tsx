"use client";

import Link from "next/link";
import { qualification } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M4 8.5l3 3 5-5.5" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M4 4l8 8M12 4l-8 8" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function QualificationCTA() {
  return (
    <section id="qualify" className="relative overflow-hidden py-16 border-b border-[#1e293b]" style={{ background: "#0a0f1e" }}>
      <SectionWrapper className="relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <SectionLabel label="WHO THIS IS FOR" className="mb-4 !text-[#f97316]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              <span>This is not for everyone. </span>
              <span
                className="italic font-normal"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Here is who it is for.
              </span>
            </h2>
            <p className="text-[#94a3b8] text-base md:text-lg text-center">
              I only work with businesses I know I can move the needle for. Read both sides before applying.
            </p>
          </div>

          <Reveal>
            <div className="grid gap-6 md:grid-cols-2 mb-12 fitment-cards">
              <div
                className="rounded-2xl p-7 md:p-8 lift-card fit-card fit-card-positive"
                style={{
                  border: "1px solid rgba(249,115,22,0.38)",
                  background: "#0f1729",
                  boxShadow: "0 0 40px rgba(249, 115, 22, 0.04) inset",
                }}
              >
                <h3 className="text-[1.25rem] font-bold text-white mb-5">
                  You are the right fit if:
                </h3>
                <ul className="space-y-3.5">
                  {qualification.forYouIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] leading-[1.7]" style={{ color: "#cbd5e1" }}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl p-7 md:p-8 lift-card fit-card fit-card-negative"
                style={{
                  border: "1px solid #1e293b",
                  background: "#0f1729",
                }}
              >
                <h3 className="text-[1.25rem] font-bold text-white mb-5">
                  This is NOT the right fit if:
                </h3>
                <ul className="space-y-3.5">
                  {qualification.notForYouIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] leading-[1.7]" style={{ color: "#cbd5e1" }}>
                      <XIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="border-t pt-10 pb-10"
              style={{ borderColor: "rgba(30,41,59,0.6)" }}
            >
              <p
                className="text-center font-bold"
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                  color: "#ffffff",
                }}
              >
                Serious operators build infrastructure. Everyone else waits for the phone to ring.
              </p>
              <div className="flex flex-col items-center mt-8">
                <Link
                  href="#book-call"
                  className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold text-white cta-primary cta-button"
                  style={{ background: "#f97316" }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#ea6c0a"; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#f97316"; }}
                >
                  Book a 20-Minute Diagnostic Call
                  <span aria-hidden>→</span>
                </Link>
                <p
                  className="mt-2 text-center"
                  style={{ fontSize: "0.875rem", color: "#64748b" }}
                >
                  If I cannot move the needle, I will tell you on the call. Before you pay anything.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionWrapper>
    </section>
  );
}
