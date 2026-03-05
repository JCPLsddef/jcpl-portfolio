"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useTranslations } from "@/context/LocaleContext";
import Reveal from "@/components/motion/Reveal";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { ChevronDown, Mail, Send, ArrowRight, User } from "lucide-react";
import { cn } from "@/lib/utils";

const KNIGHT_AVATAR = "/knight-avatar.png";

function KnightAvatar() {
  const [imgError, setImgError] = useState(false);
  return imgError ? (
    <User className="w-10 h-10 md:w-12 md:h-12 text-sv-primary/80" aria-hidden />
  ) : (
    <Image
      src={KNIGHT_AVATAR}
      alt=""
      width={96}
      height={96}
      className="w-full h-full object-cover"
      onError={() => setImgError(true)}
    />
  );
}

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

        {/* Right: CTA card with ShaderGradient + knight avatar */}
        <Reveal delay={0.15} className="lg:sticky lg:top-24 self-start">
          <div className="relative rounded-3xl overflow-hidden min-h-[300px] border border-white/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
            {/* Animated gradient or static fallback */}
            {reduced ? (
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 80% at 50% 0%, rgba(43,90,140,0.25) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 80% 100%, rgba(14,31,53,0.6) 0%, transparent 50%), #0E1F35",
                }}
                aria-hidden
              />
            ) : (
              <ShaderGradientCanvas
                style={{ position: "absolute", inset: 0 }}
                fov={45}
                pixelDensity={1}
              >
                <ShaderGradient
                  animate="on"
                  type="waterPlane"
                  color1="#0E1F35"
                  color2="#2B5A8C"
                  color3="#6B8DB8"
                  brightness={0.9}
                  cAzimuthAngle={170}
                  cDistance={4.4}
                  cPolarAngle={70}
                  cameraZoom={1}
                  lightType="3d"
                  envPreset="city"
                  grain="off"
                  positionX={0}
                  positionY={0.9}
                  positionZ={-0.3}
                  range="disabled"
                  rangeEnd={40}
                  rangeStart={0}
                  reflection={0.1}
                  rotationX={45}
                  rotationY={0}
                  rotationZ={0}
                  shader="defaults"
                  uAmplitude={0}
                  uDensity={1.2}
                  uFrequency={0}
                  uSpeed={0.2}
                  uStrength={3.4}
                  uTime={0}
                  wireframe={false}
                />
              </ShaderGradientCanvas>
            )}
            {/* Subtle starry overlay */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 1px), radial-gradient(circle at 60% 70%, rgba(255,255,255,0.02) 0%, transparent 1px), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.025) 0%, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
              aria-hidden
            />
            <div className="relative z-10 flex flex-col items-center p-6 md:p-8">
              {/* Circular knight avatar */}
              <div className="mb-5 flex justify-center">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0A1628] flex items-center justify-center overflow-hidden ring-2 ring-white/10 shadow-lg">
                  <KnightAvatar />
                </div>
              </div>
              <h3 className="text-[20px] md:text-[22px] font-[700] text-white leading-tight text-center mb-2">
                {faqBooking.ctaTitle}
              </h3>
              <p className="text-[15px] text-white/90 leading-[1.6] text-center mb-6 max-w-[280px]">
                {faqBooking.ctaBody}
              </p>
              <Link
                href="#book-call"
                className="flex items-center justify-center w-full py-3.5 px-5 rounded-full bg-white text-[#0E1F35] font-[600] text-[15px] hover:bg-white/95 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-lg"
              >
                {faqBooking.ctaButton}
              </Link>
              <div className="mt-6 flex flex-col items-center gap-3">
                <p className="text-[13px] text-white/75 flex items-center gap-2">
                  {faqBooking.ctaEmailLabel}{" "}
                  <a
                    href={`mailto:${faqBooking.ctaEmail}`}
                    className="text-white/95 hover:text-white transition-colors underline underline-offset-2 font-medium"
                  >
                    {faqBooking.ctaEmail}
                  </a>
                </p>
                <div className="flex items-center gap-3 text-white/60">
                  <Send className="w-4 h-4" aria-hidden />
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" aria-hidden />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
