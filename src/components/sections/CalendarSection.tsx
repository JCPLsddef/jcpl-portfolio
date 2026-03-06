"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "@/context/LocaleContext";

const CAL_LINK = "clientgrowth/15min";
const CAL_BOOKING_URL = `https://app.cal.com/${CAL_LINK}?layout=column&hideEventTypeDetails=1`;

const BallPit = dynamic(() => import("./BallPit"), {
  ssr: false,
  loading: () => <div className="min-h-[360px] bg-transparent" aria-hidden />,
});

export default function CalendarSection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
        }
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
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12 lg:gap-16">
          {/* Left column: marketing + ball pit background */}
          <div className="relative min-h-[360px] min-w-0 md:w-[40%] lg:w-[38%] shrink-0">
            {/* Ball pit background — desktop only, transparent, behind text */}
            {isVisible && (
              <div
                className="pointer-events-none absolute inset-0 hidden md:block"
                aria-hidden
              >
                <BallPit
                  className="absolute inset-0 h-full w-full"
                  colors={[0x9b8bc6, 0x3b82f6, 0xffffff]}
                  followCursor={false}
                />
              </div>
            )}
            <div className="relative z-10">
              <h2 className="text-[36px] font-semibold text-white">
                {t<string>("bookCall.headline")}
              </h2>
              <p className="mt-2 text-[20px] italic text-white/90">
                {t<string>("bookCall.italicSubline")}
              </p>
              <p className="mt-4 text-base opacity-70 text-white">
                {t<string>("bookCall.body")}
              </p>
            </div>
          </div>

          {/* Right column: notice + calendar */}
          <div className="flex flex-1 flex-col gap-4">
            {/* Notice box - Designjoy style */}
            <div
              className="rounded-lg border border-pink-400/30 bg-pink-500/20 px-4 py-3 text-sm text-white/90"
              role="status"
            >
              {t<string>("bookCall.notice")}
            </div>

            <div className="relative min-h-[560px] overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#111111] md:min-h-[640px]">
              {!isVisible ? (
                <div
                  className="absolute inset-0 flex h-full min-h-[560px] items-center justify-center bg-[#111111] text-white/70 text-[15px] md:min-h-[640px]"
                  aria-live="polite"
                >
                  Loading calendar…
                </div>
              ) : (
                <iframe
                  src={CAL_BOOKING_URL}
                  title="Book a call"
                  className="h-full min-h-[560px] w-full border-0 md:min-h-[640px]"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
