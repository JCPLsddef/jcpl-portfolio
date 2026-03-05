"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useTranslations } from "@/context/LocaleContext";
import Reveal from "@/components/motion/Reveal";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { ChevronDown, Mail } from "lucide-react";
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
    supportingLine: string;
    items: Array<{ question: string; answer: string }>;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    ctaEmail: string;
  };

  const CTA_IMAGE_URL =
    "https://static.wixstatic.com/media/62f926_145f629a54634971b81de3e9565c7928~mv2.png";

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
    <SectionWrapper id="faq" variant="alt" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:gap-14">
        {/* Left: Title, supporting line, accordion */}
        <div>
          <Reveal>
            <h2 className="text-[clamp(32px,4vw,48px)] font-[700] text-white leading-[1.15] tracking-[-0.02em] mb-3">
              {faqBooking.heading}
            </h2>
            <p className="text-[16px] md:text-[17px] text-sv-text-sub leading-[1.5] mb-8">
              {faqBooking.supportingLine}
            </p>
          </Reveal>

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
                      className="w-full flex items-center justify-between gap-4 py-4 md:py-5 text-left group hover:bg-white/[0.03] transition-colors rounded-sm -mx-1 px-1"
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

        {/* Right: CTA card with Wix image background */}
        <Reveal delay={0.15} className="lg:sticky lg:top-24 self-start">
          <div
            className="relative rounded-3xl overflow-hidden p-6 md:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
            style={{
              backgroundImage: `url(${CTA_IMAGE_URL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/75"
              aria-hidden
            />
            <div className="relative z-10">
              <h3 className="text-[20px] md:text-[22px] font-[700] text-white leading-tight mb-3">
                {faqBooking.ctaTitle}
              </h3>
              <p className="text-[15px] text-white/90 leading-[1.6] mb-6">
                {faqBooking.ctaBody}
              </p>
              <Link
                href="#book-call"
                className="flex items-center justify-center w-full py-3.5 px-5 rounded-lg bg-sv-primary text-white font-[600] text-[15px] hover:bg-sv-primary-hov transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-primary"
              >
                {faqBooking.ctaButton}
              </Link>
              <p className="mt-4 text-[13px] text-white/80 flex items-center justify-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden />
                <a
                  href={`mailto:${faqBooking.ctaEmail}`}
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  {faqBooking.ctaEmail}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
