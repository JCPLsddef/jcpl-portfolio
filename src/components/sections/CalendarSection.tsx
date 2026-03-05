"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "@/context/LocaleContext";

const CAL_LINK = "clientgrowth/15min";
const CAL_BOOKING_URL = `https://app.cal.com/${CAL_LINK}`;

export default function CalendarSection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { rootMargin: "100px", threshold: 0 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => (el ? observer.unobserve(el) : undefined);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="book-call"
      className="bg-[#0A0A0A] pt-20 pb-20 md:pt-[120px] md:pb-[120px]"
    >
      <div className="mx-auto max-w-[900px] px-4 md:px-6">
        <h2 className="text-[36px] font-semibold text-white">
          {t<string>("bookCall.headline")}
        </h2>
        <p className="mb-8 text-base opacity-70 text-white">
          {t<string>("bookCall.body")}
        </p>

        <div className="relative h-[650px] w-full overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#111111] md:h-[750px]">
          {!isVisible ? (
            <div
              className="absolute inset-0 flex h-full items-center justify-center bg-[#111111] text-white/70 text-[15px]"
              aria-live="polite"
            >
              Loading calendar…
            </div>
          ) : (
            <iframe
              src={CAL_BOOKING_URL}
              title="Book a call"
              className="h-full w-full min-h-[650px] border-0"
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
