"use client";

import CTAButton from "@/components/ui/CTAButton";
import { useTranslations } from "@/context/LocaleContext";

export default function FinalConvictionSection() {
  const t = useTranslations();

  return (
    <section
      className="w-full relative overflow-hidden flex flex-col items-center justify-center py-20 md:py-28"
      style={{ backgroundColor: "#070c18" }}
    >
      {/* Repeating "Now Or Never" background text — white with orange glow */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden select-none pointer-events-none"
        aria-hidden
      >
        <div
          className="text-center whitespace-nowrap"
          style={{
            color: "#ffffff",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: 800,
            letterSpacing: "0.02em",
            lineHeight: 1.1,
            textShadow: "0 0 40px rgba(249, 115, 22, 0.3)",
          }}
        >
          {Array(5)
            .fill("Now Or Never")
            .map((line, i) => (
              <div key={i}>{line}</div>
            ))}
        </div>
      </div>

      {/* Centered focal text */}
      <p
        className="relative z-10 text-center mb-10 md:mb-12 px-4"
        style={{
          fontSize: "clamp(1rem, 2vw, 1.5rem)",
          color: "#f97316",
          fontWeight: 700,
        }}
      >
        One spot. One city. One system.
      </p>

      {/* CTA */}
      <div className="relative z-10 flex justify-center px-4">
        <CTAButton href="/apply" size="lg">
          {t<string>("finalCta.button")}
        </CTAButton>
      </div>
    </section>
  );
}
