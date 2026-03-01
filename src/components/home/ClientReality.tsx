"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

export default function ClientReality() {
  return (
    <SectionWrapper id="reality" variant="alt" className="border-b border-slate-700/40">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label="THE REALITY" className="mb-5" />
        <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto">
          Your Work Is Good. Your Pipeline Shouldn&apos;t Be This Uncertain.
        </h2>
      </Reveal>

      {/* Scene Block — "picture this" moment */}
      <Reveal className="max-w-4xl mx-auto mb-8">
        <div
          className="w-full rounded-[12px] px-8 py-7 text-center"
          style={{
            background: "#0A0E18",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p className="text-[16px] italic font-[400] leading-[1.85] opacity-[0.78] max-w-2xl mx-auto">
            Picture it: Someone in your city searched &ldquo;painting contractor near me&rdquo; this morning. They clicked the first result. That company&apos;s phone rang at 8:47am. They booked a $1,400 job before breakfast. Your phone was quiet. Not because your work is worse. Because that company had the system and you didn&apos;t.
          </p>
        </div>
      </Reveal>

      {/* Three Pain Cards — 3-col grid, each with red left border */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto mb-8">
        {[
          {
            title: "Your Website Looks Fine. It Doesn't Close.",
            body: "A website that doesn't immediately answer 'why you, why now' is not an asset. It's a leaky bucket. Visitors come, feel nothing, and leave. Most agency sites convert less than 1% of visitors.",
            kicker: "That visitor who just bounced? They booked your competitor instead.",
          },
          {
            title: "You're Doing Marketing on Top of Everything Else.",
            body: "Every hour you spend on ads is an hour you are not doing the work clients pay you for. DIY marketing costs more than it saves. And it still doesn't compound.",
            kicker: "Your competitor outsourced this. Their system runs while they sleep.",
          },
          {
            title: "Referrals Keep You Alive. They Won't Help You Grow.",
            body: "Good months. Quiet months. No way to predict the next one. Referrals don't run at 2am when someone searches your service. They don't rank on Google. They will not save a slow month.",
            kicker: "If your pipeline depends on who someone happens to mention you to, you are not running a business. You are running on luck.",
          },
        ].map((pain, i) => (
          <Reveal key={pain.title} delay={0.08 * (i + 1)}>
            <div
              className="group relative rounded-[14px] bg-sv-surface p-7 md:p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-[2px]"
              style={{ borderLeft: "3px solid rgba(239,68,68,0.5)", border: "1px solid rgba(255,255,255,0.07)", borderLeftWidth: "3px", borderLeftColor: "rgba(239,68,68,0.5)" }}
            >
              <h3 className="text-[22px] font-[700] text-white mb-3 leading-snug">
                {pain.title}
              </h3>
              <p className="text-[14px] font-[400] leading-[1.75] opacity-[0.60] mb-4 flex-1">
                {pain.body}
              </p>
              <p className="text-[15px] font-[600] text-red-400 leading-snug mt-auto">
                {pain.kicker}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Urgency Strip */}
      <Reveal delay={0.15}>
        <div
          className="max-w-4xl mx-auto rounded-[12px] px-8 py-8 mb-10 text-center"
          style={{
            background: "rgba(254,242,242,0.04)",
            borderTop: "2px solid rgba(239,68,68,0.5)",
            borderBottom: "2px solid rgba(239,68,68,0.5)",
          }}
        >
          <p className="text-[18px] md:text-[20px] font-bold text-red-400 leading-snug mb-3">
            At $33 per qualified call, every week this system is not running costs you 3 to 7 booked calls you will never get back.
          </p>
          <p className="text-[15px] font-bold opacity-[0.68]">
            It does not pause while you think about it. It either runs for you or it runs for them.
          </p>
        </div>
      </Reveal>

      {/* Bridge Lines */}
      <Reveal delay={0.2}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[clamp(22px,3vw,28px)] font-bold text-white leading-snug">
            This is why I built the Growth Architecture.
          </p>
          <p className="mt-3 text-[16px] italic text-sv-text-sub leading-[1.75] max-w-md mx-auto">
            One system. Four layers. Solves all of it at once.
          </p>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
