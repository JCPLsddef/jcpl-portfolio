"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import Link from "next/link";

const CARDS = [
  {
    num: "01",
    title: "Leads hit your site. Then leave.",
    body: "Website that doesn't answer \"why you, why now\" is a leaky bucket. Visitors leave. Most agency sites convert under 1%.",
    sting: "That click paid your competitor.",
  },
  {
    num: "02",
    title: "Your marketing lives on your to-do list.",
    body: "Every hour on ads is an hour not doing billable work. DIY marketing doesn't compound.",
    sting: "Your best competitor grows while you stay busy.",
  },
  {
    num: "03",
    title: "Referrals keep you alive. They won't scale.",
    body: "Good months, quiet months. Referrals don't run at 2am or rank on Google.",
    sting: "Referral-only growth is luck wearing a good month.",
  },
] as const;

export default function ClientReality() {
  return (
    <SectionWrapper
      id="reality"
      variant="alt"
      className="border-b border-slate-700/40 bg-[#060E1A] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* 1. Eyebrow + 2. Headline + 3. Subhead + 4. Supporting line */}
        <Reveal className="mx-auto mb-12 max-w-[980px] text-center md:mb-14">
          <SectionLabel label="THE REALITY" className="mb-5" />
          <h2 className="mx-auto mb-5 max-w-[900px] text-[clamp(34px,4.5vw,52px)] font-[800] leading-[1.15] tracking-[-0.025em] text-white">
            Your Work Is Good. Your Pipeline Shouldn&apos;t Be This Uncertain.
          </h2>
          <p className="mx-auto mb-4 max-w-[900px] text-[clamp(17px,2vw,19px)] font-[500] leading-[1.5] text-sv-text-sub">
            Untracked demand, a leaky website, and no follow-up turn good work into quiet weeks.
          </p>
          <p
            className="mx-auto"
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Most competitors don&apos;t work harder. They run a system.
          </p>
        </Reveal>

        {/* 5. Story box — emotional anchor */}
        <Reveal className="mx-auto mb-12 max-w-[900px] md:mb-14">
          <div
            className="relative mx-auto max-w-[900px] rounded-[14px] border border-white/[0.08] bg-[#0A0E18] px-6 py-8 text-center shadow-[0_0_60px_-20px_rgba(192,57,43,0.2)] sm:px-8 sm:py-10"
            style={{
              boxShadow:
                "0 0 80px -20px rgba(192,57,43,0.15), 0 1px 0 0 rgba(255,255,255,0.04)",
            }}
          >
            <p className="mb-6 text-[13px] font-[500] uppercase tracking-[0.15em] text-sv-text-muted">
              8:47 AM · Today
            </p>
            <p className="mx-auto max-w-[820px] text-[16px] font-[400] leading-[1.85] text-sv-text-sub sm:text-[17px]">
              Someone in your city searched &ldquo;painting contractor near me&rdquo; this
              morning. They clicked the first result. That company&apos;s phone rang at 8:47
              AM. They booked a $1,400 job before breakfast. Not because your work is
              worse. Because that company had the system.
            </p>
          </div>
        </Reveal>

        {/* 6. Diagnosis cards — center emphasized */}
        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:mb-14 lg:grid-cols-3">
          {CARDS.map((card, i) => {
            const isCenter = i === 1;
            return (
              <Reveal key={card.num} delay={0.08 * (i + 1)}>
                <div
                  className={`group relative flex h-full flex-col rounded-[14px] border p-7 transition-all duration-[280ms] hover:-translate-y-[2px] md:p-8 ${
                    isCenter
                      ? "border-[rgba(192,57,43,0.25)] bg-sv-surface shadow-[0_0_40px_-15px_rgba(192,57,43,0.12)] hover:border-[rgba(192,57,43,0.35)]"
                      : "border-white/[0.06] bg-sv-surface hover:border-white/[0.12]"
                  }`}
                >
                  <span
                    className={`mb-4 inline-flex w-fit rounded-md px-2 py-1 text-[11px] font-[600] uppercase tracking-wider ${
                      isCenter
                        ? "bg-[rgba(192,57,43,0.15)] text-[#C0392B]"
                        : "bg-white/[0.06] text-sv-text-muted"
                    }`}
                  >
                    {card.num}
                  </span>
                  <h3 className="mb-3 text-[22px] font-[700] leading-snug text-white">
                    {card.title}
                  </h3>
                  <p className="mb-4 flex-1 text-[14px] font-[400] leading-[1.75] text-sv-text-muted">
                    {card.body}
                  </p>
                  <p
                    className={`mt-auto text-[15px] font-[600] leading-snug ${
                      isCenter ? "text-[#C0392B]" : "text-sv-text-sub"
                    }`}
                  >
                    {card.sting}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* 7. Consequence strip — slim, integrated */}
        <Reveal delay={0.15} className="mx-auto mb-10 max-w-[900px]">
          <div
            className="rounded-[12px] border border-white/[0.06] px-6 py-6 text-center sm:px-8"
            style={{
              borderColor: "rgba(192,57,43,0.12)",
              boxShadow: "0 0 30px -10px rgba(192,57,43,0.08)",
            }}
          >
            <p className="mb-2 text-[17px] font-[600] leading-snug text-white sm:text-[18px]">
              At roughly $33 per qualified call, every week this system stays offline
              costs you booked calls you will never recover.
            </p>
            <p className="text-[14px] font-[500] leading-snug text-sv-text-muted">
              It does not pause while you think about it. It runs for you, or it runs
              for them.
            </p>
          </div>
        </Reveal>

        {/* 8. CTA */}
        <Reveal delay={0.2} className="mx-auto text-center">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 rounded-xl border border-[rgba(192,57,43,0.3)] bg-[rgba(192,57,43,0.12)] px-8 py-4 text-[16px] font-[600] text-white transition-all duration-300 hover:border-[rgba(192,57,43,0.5)] hover:bg-[rgba(192,57,43,0.18)] hover:shadow-[0_0_30px_-5px_rgba(192,57,43,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060E1A]"
          >
            Show me what the system looks like
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
