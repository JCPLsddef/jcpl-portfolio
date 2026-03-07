"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import Link from "next/link";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

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

function CostPerCallStat() {
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
            val: 27,
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
    <div ref={statRef} className="py-12 text-center">
      <div className="block text-white font-extrabold" style={{ fontSize: "3.5rem" }}>
        $<span ref={numRef}>0</span>
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
        AVG COST PER QUALIFIED CALL · ALL ACTIVE ACCOUNTS
      </p>
    </div>
  );
}

export default function ClientReality() {
  return (
    <SectionWrapper
      id="reality"
      variant="alt"
      className="border-b border-slate-700/40 bg-[#0a0f1e] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-[980px] text-center md:mb-14">
          <SectionLabel label="THE REALITY" className="mb-5 !text-[#f97316]" />
          <h2 className="mx-auto mb-5 max-w-[900px] text-[clamp(34px,4.5vw,52px)] font-[800] leading-[1.15] tracking-[-0.025em] text-white">
            Your Work Is Good.{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Your Pipeline Shouldn&apos;t Be This Uncertain.
            </span>
          </h2>
          <p className="mx-auto mb-4 max-w-[900px] text-[clamp(17px,2vw,19px)] font-[500] leading-[1.5] text-[#94a3b8]">
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

        <Reveal className="mx-auto mb-12 max-w-[900px] md:mb-14">
          <div
            className="relative mx-auto max-w-[900px] rounded-[14px] px-8 py-8 text-center sm:px-8 sm:py-10"
            style={{
              background: "#0f1729",
              borderLeft: "3px solid #f97316",
              boxShadow: "0 0 40px rgba(249,115,22,0.05)",
            }}
          >
            <p
              className="mb-6 uppercase tracking-[0.15em]"
              style={{ fontSize: "0.75rem", color: "#f97316" }}
            >
              8:47 AM · TODAY
            </p>
            <p
              className="mx-auto max-w-[820px] leading-[1.85] sm:text-[17px]"
              style={{ fontSize: "1.05rem", color: "#cbd5e1" }}
            >
              Someone in your city searched &ldquo;painting contractor near me&rdquo; this
              morning. They clicked the first result. That company&apos;s phone rang at 8:47
              AM. They booked a $1,400 job before breakfast. Not because your work is
              worse. Because that company had the system.
            </p>
          </div>
        </Reveal>

        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:mb-14 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.num} delay={0.08 * (i + 1)}>
              <div
                className="group relative flex h-full flex-col rounded-[14px] border p-7 transition-all duration-[280ms] hover:-translate-y-[2px] md:p-8"
                style={{
                  borderColor: "rgba(30,41,59,0.6)",
                  background: "#0f1729",
                }}
              >
                <span
                  className="mb-4 inline-flex w-fit rounded-md px-2 py-1 text-[11px] font-[600] uppercase tracking-wider text-white"
                  style={{ background: "#f97316" }}
                >
                  {card.num}
                </span>
                <h3 className="mb-3 text-[22px] font-[700] leading-snug text-white">
                  {card.title}
                </h3>
                <p
                  className="mb-4 flex-1 leading-[1.75]"
                  style={{ fontSize: "0.875rem", color: "#cbd5e1" }}
                >
                  {card.body}
                </p>
                <p
                  className="mt-auto text-[15px] font-[600] leading-snug"
                  style={{ color: "#cbd5e1" }}
                >
                  {card.sting}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <CostPerCallStat />
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mb-10 max-w-[900px]">
          <p
            className="text-center"
            style={{ fontSize: "1rem", color: "#94a3b8", lineHeight: 1.6 }}
          >
            Every week this system stays offline costs you booked calls you will never recover.
            It does not pause while you think about it. It runs for you, or it runs for them.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mx-auto text-center">
          <Link
            href="#book-call"
            className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-[16px] font-[600] text-white transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1e]"
            style={{ background: "#f97316" }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#ea6c0a";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#f97316";
            }}
          >
            Show me what the system looks like
            <span aria-hidden="true">→</span>
          </Link>
          <p
            className="mt-2 text-center"
            style={{ fontSize: "0.875rem", color: "#64748b" }}
          >
            If I cannot move the needle, I will tell you on the call. Before you pay anything.
          </p>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
