"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useTranslations } from "@/context/LocaleContext";
import Reveal from "@/components/motion/Reveal";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import BookCallCard from "@/components/BookCallCard";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <ChevronDown
      aria-hidden
      className={cn(
        "w-5 h-5 shrink-0 text-sv-text-muted transition-transform duration-200",
        open && "rotate-180"
      )}
    />
  );
}

export default function FAQ() {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduced = usePrefersReducedMotionSafe();

  const faqBooking = t("faqBooking") as {
    heading: string;
    headlineItalic?: string;
    supportingLine: string;
    items: Array<{ question: string; answer: string }>;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    ctaEmail: string;
    ctaEmailLabel: string;
  };

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

  const headlineItalic = faqBooking.headlineItalic ?? "";
  const headingParts = headlineItalic
    ? faqBooking.heading.split(headlineItalic)
    : [faqBooking.heading];

  return (
    <SectionWrapper id="faq" variant="alt" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
        {/* Mobile: order 1=heading, 2=CTA, 3=accordion. Desktop: left col=heading+accordion, right col=CTA */}
        {/* Block 1: Heading + supporting */}
        <div className="order-1 lg:col-start-1 lg:row-start-1">
          <Reveal>
            <h2 className="text-[clamp(32px,4vw,48px)] font-[700] text-white leading-[1.15] tracking-[-0.02em] mb-3">
              {headlineItalic ? (
                <>
                  {headingParts[0]}
                  <em>{headlineItalic}</em>
                  {headingParts[1] ?? ""}
                </>
              ) : (
                faqBooking.heading
              )}
            </h2>
            <p className="text-[16px] md:text-[17px] text-sv-text-sub leading-[1.5] mb-8 lg:mb-0">
              {faqBooking.supportingLine}
            </p>
          </Reveal>
        </div>

        {/* Block 2: CTA card */}
        <Reveal delay={0.15} className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-24 lg:self-start">
          <BookCallCard
            title={faqBooking.ctaTitle}
            body={faqBooking.ctaBody}
            buttonText={faqBooking.ctaButton}
            buttonHref="#book-call"
            emailLabel={faqBooking.ctaEmailLabel}
            email={faqBooking.ctaEmail}
          />
        </Reveal>

        {/* Block 3: Accordion */}
        <div className="order-3 lg:col-start-1 lg:row-start-2">
          <div role="list" className="space-y-0">
            {faqBooking.items.map((item, i) => {
              const isOpen = activeIndex === i;
              return (
                <Reveal key={i} delay={0.02 * i}>
                  <div
                    role="listitem"
                    className="border-b border-white/10"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      className="w-full flex items-center justify-between gap-4 py-4 md:py-5 text-left group hover:bg-white/[0.03] transition-colors rounded-sm -mx-1 px-1 min-h-[44px]"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                    >
                      <span className="text-[15px] md:text-[16px] font-[500] text-white group-hover:text-sv-primary transition-colors pr-4">
                        {item.question}
                      </span>
                      <ChevronIcon open={isOpen} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${i}`}
                          role="region"
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: reduced ? 0 : 0.25,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 md:pb-5 pr-8">
                            <p className="text-[14px] md:text-[15px] text-sv-text-sub leading-[1.7]">
                              {item.answer}
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
        </div>
      </div>
    </SectionWrapper>
  );
}
