"use client";

import { qualification, ctaCopy } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { Reveal } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";


function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M4 8.5l3 3 5-5.5" stroke="#4B8EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

function LightningIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-cg-accent-lt">
      <path d="M9 1L3 9h5l-1 6 7-9H9l1-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-cg-accent-lt">
      <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="8" cy="11" r="1" fill="currentColor"/>
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-cg-accent-lt">
      <rect x="3" y="3" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M6 3V2h4v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M5.5 8h5M5.5 11h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

const trustBadges = [
  { Icon: LightningIcon, text: "Reply within 24 hours" },
  { Icon: LockIcon, text: "No long-term contracts" },
  { Icon: ClipboardIcon, text: "3 spots per quarter" },
];

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
            <p className="text-cg-body text-base md:text-lg text-center">
              Read both sides before applying. I only work with businesses I know I can move the needle for.
            </p>
          </div>
          {/* Qualification Grid */}
          <Reveal>
            <div className="grid gap-6 md:grid-cols-2 mb-16">
              {/* For You If */}
              <div className="rounded-2xl border border-[rgba(37,99,235,0.25)] bg-cg-card p-7 md:p-8">
                <h3 className="text-[18px] font-bold text-white mb-5 flex items-center gap-2">
                  <CheckIcon />
                  You Do Good Work. Your Calendar Should Reflect That.
                </h3>
                <ul className="space-y-3.5">
                  {qualification.forYouIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[16px] text-cg-body leading-[1.7]">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not For You If */}
              <div className="rounded-2xl border border-[rgba(239,68,68,0.25)] bg-cg-card p-7 md:p-8">
                <h3 className="text-[18px] font-bold text-white mb-5 flex items-center gap-2">
                  <XIcon />
                  This Is Not the Right Fit If:
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "You want a logo, a brochure site, or a one-off project",
                    "Your business is under $5K/month revenue",
                    "You're not ready to commit. You want to 'test the waters' with no real system behind it"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[16px] text-cg-secondary leading-[1.7]">
                      <XIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

        </div>
      </SectionWrapper>
    </section>
  );
}
