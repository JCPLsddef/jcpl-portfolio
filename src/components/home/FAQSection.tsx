"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";

const faqData = [
  {
    question: "What exactly is the Growth Architecture™?",
    answer:
      "It's a complete acquisition system. Not just a website, not just ads. All of it, built together so each part makes the others stronger. Positioning, conversion website, Google Ads, AI automation, lead qualification, monthly optimization. Built once. Improved every month. It's the last marketing system you'll need to think about."
  },
  {
    question: "Who is this built for?",
    answer:
      "Service businesses generating at least $5K/month who are ready to stop relying on referrals and start owning their market. Tradespeople, consultants, clinics, local service providers. If qualified calls are your lifeblood and you want a predictable way to get them, this is built for you."
  },
  {
    question: "How fast will I see results?",
    answer:
  "The full system goes live in 2 to 4 weeks. Triple W Rentals generated $41,084.85 in their first 30 days on $900 in ad spend. Elite Barbershop had 90 new clients in 90 days. Results vary by market and offer, but the system is designed for speed, not a 6-month runway."
  },
  {
    question: "How is this different from hiring an agency?",
    answer:
      "An agency builds your website and moves to the next client. I stay in it. I watch your numbers every month, optimize what's working, cut what isn't, and report back in plain language. I don't get paid to hand things off. I get paid when the system works."
  },
  {
    question: "What if it doesn't work?",
    answer:
      "Before I take any engagement, I do a diagnostic to confirm there's real opportunity in your market. If I don't think I can deliver, I'll tell you honestly, and I won't take your money. I only work with businesses where I'm confident I can move the needle."
  },
  {
    question: "What does this cost?",
    answer:
      "Engagements start at $2,500/month. No long-term contracts. You stay because it's producing results, not because you're locked in. Apply below and I'll show you exactly what your system would look like and what it would cost."
  },
  {
    question: "Who is NOT a good fit?",
    answer:
      "If you want a logo, a one-page site, or someone to 'try a few ads' with no real commitment, this isn't for you. I work with business owners who are serious about owning their local market and ready to build something that lasts."
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-cg-accent-lt transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = useCallback(
    (i: number) => setActiveIndex((prev) => (prev === i ? null : i)),
    []
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, i: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle(i);
      }
    },
    [toggle]
  );

  return (
    <SectionWrapper id="faq" variant="alt">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
        <SectionLabel label="Questions" className="mb-5" />
  <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto">
          Questions Serious Buyers Ask
        </h2>
        <p className="mt-5 text-cg-body max-w-lg mx-auto leading-[1.75] text-[18px]">
          I&apos;d rather answer the hard ones here than waste your time on a call.
        </p>
      </Reveal>

      {/* Accordion */}
      <div className="max-w-2xl mx-auto space-y-3" role="list">
        {faqData.map((faq, i) => {
          const isOpen = activeIndex === i;
          const isNotFit = faq.question.includes("NOT");

          return (
            <Reveal key={i} delay={0.04 * i}>
              <div
                role="listitem"
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[rgba(37,99,235,0.4)] border-l-[3px] border-l-cg-accent bg-cg-card-alt shadow-[0_4px_24px_rgba(37,99,235,0.06)]"
                    : "border-[rgba(255,255,255,0.07)] bg-cg-card hover:border-[rgba(37,99,235,0.25)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span
                    className={`text-[17px] font-semibold leading-snug ${
                      isOpen ? "text-white" : "text-white"
                    } transition-colors duration-200`}
                  >
                    {faq.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <div className="h-px bg-[rgba(255,255,255,0.07)] mb-4" />
                        <p className="text-[17px] text-cg-secondary leading-[1.85]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Mini-CTA below FAQ */}
      <Reveal delay={0.3}>
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm text-cg-secondary mb-5">
            Still have a question I didn&apos;t answer? Let&apos;s talk.
          </p>
          <CTAButton
            href={ctaCopy.href}
            variant="primary"
            size="md"
            eventName="faq_cta_click"
          >
            {ctaCopy.primary}
          </CTAButton>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
