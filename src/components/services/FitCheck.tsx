"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 8.5l3 3 5-5.5" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 4l8 8M12 4l-8 8" stroke="#756D63" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const bestFor = [
  "You run a service business and your revenue is inconsistent. You know you should have more clients than you do.",
  "You are tired of being invisible online while competitors who do worse work rank above you.",
  "You want one person who owns the full system, not a web designer, an ad guy, and an SEO freelancer who all point at each other when nothing works.",
  "You are ready to invest in infrastructure that produces returns. Not a one-time project. A system.",
];
const notFor = [
  "You want the cheapest option and will shop around until you find someone who charges less.",
  "You want a website with no plan behind it and no intention to run it as an acquisition asset.",
  "You are not ready to commit to a real system. You want to test the waters with no skin in the game.",
  "Your business is under $5K per month in revenue. This system requires a baseline to build on.",
];

export default function FitCheck() {
  return (
  <div className="relative overflow-hidden" style={{ background: "#131009" }}>
  {/* Fit Check orb */}
  <div
    className="absolute left-1/2 top-1/2 -translate-x-[70%] -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none z-0 max-md:w-[240px] max-md:h-[240px]"
    style={{
      background: "radial-gradient(circle, rgba(212,168,83,0.03) 0%, transparent 70%)",
      filter: "blur(100px)",
    }}
    aria-hidden
  />
  <SectionWrapper variant="surface" className="py-16 relative">
      <Reveal className="text-center mb-12">
  <p className="section-label mb-5" style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", color: "#D4A853" }}>FIT CHECK</p>
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">You Will Know in 60 Seconds If This Is Built for You.</h2>
      </Reveal>
      <div className="grid gap-7 md:grid-cols-2 max-w-4xl mx-auto">
        <Reveal delay={0.05}>
          <div
            className="rounded-xl p-8 h-full"
            style={{ background: "#1E1A14", border: "1px solid #2A2318", borderTop: "2px solid #D4A853" }}
          >
            <h3 className="text-[17px] font-bold mb-5 flex items-center gap-2" style={{ color: "#F5F0E8" }}>
              <CheckIcon /> This Is for You If...
            </h3>
            <ul className="space-y-4">
              {bestFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[16px] leading-[1.7]" style={{ color: "#D2C9B8" }}>
                  <CheckIcon /> {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            className="rounded-xl p-8 h-full"
            style={{ background: "#1E1A14", border: "1px solid #2A2318", borderTop: "2px solid #D4A853" }}
          >
            <h3 className="text-[17px] font-bold mb-5 flex items-center gap-2" style={{ color: "#F5F0E8" }}>
              <XIcon /> This Is Not for You If...
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[16px] leading-[1.7]" style={{ color: "#D2C9B8" }}>
                  <XIcon /> {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  </div>
  );
}
