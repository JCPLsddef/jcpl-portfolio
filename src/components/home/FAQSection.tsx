"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { useTranslations } from "@/context/LocaleContext";
import { Reveal } from "@/components/motion";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-sv-muted transition-transform duration-300 ${
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
  const t = useTranslations();
  const faqItems = t("faq.items") as Array<{ question: string; answer: string; featured: boolean }>;
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
        <SectionLabel label={t<string>("faq.eyebrow")} className="mb-5" />
        <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto">
          {t<string>("faq.heading")}
        </h2>
        <p className="mt-5 text-sv-text-sub max-w-lg mx-auto leading-[1.75] text-[18px]">
          {t<string>("faq.subheading")}
        </p>
      </Reveal>

      {/* Accordion */}
      <div className="max-w-2xl mx-auto space-y-3" role="list">
        {faqItems.map((faq, i) => {
          const isOpen = activeIndex === i;

          return (
            <Reveal key={i} delay={0.04 * i}>
              <div
                role="listitem"
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  faq.featured && !isOpen
                    ? "border-[rgba(52,211,153,0.35)] bg-sv-surface"
                    : isOpen
                    ? "border-[rgba(37,99,235,0.4)] border-l-[3px] border-l-sv-primary bg-sv-elevated shadow-[0_4px_24px_rgba(37,99,235,0.06)]"
                    : "border-[rgba(255,255,255,0.07)] bg-sv-surface hover:border-[rgba(37,99,235,0.25)]"
                }`}
              >
                {/* Featured label for first FAQ */}
                {faq.featured && (
                  <div className="px-5 md:px-6 pt-4 pb-0">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold tracking-[0.1em] uppercase"
                      style={{
                        background: "rgba(52,211,153,0.12)",
                        border: "1px solid rgba(52,211,153,0.3)",
                        color: "#34D399",
                      }}
                    >
                      {t<string>("faq.mostCommon")}
                    </span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-[16px] font-[600] leading-snug text-white transition-colors duration-200">
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
                        {faq.answer.split("\n\n").map((para, j) => (
                          <p key={j} className="text-[15px] font-[400] leading-[1.7] opacity-[0.72] mb-3 last:mb-0">
                            {para}
                          </p>
                        ))}
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
          <p className="text-sm text-sv-text-sub mb-5">
            {t<string>("faq.stillQuestion")}
          </p>
          <CTAButton
            href={ctaCopy.href}
            variant="primary"
            size="md"
            eventName="faq_cta_click"
          >
            {t<string>("faq.applyCta")}
          </CTAButton>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
