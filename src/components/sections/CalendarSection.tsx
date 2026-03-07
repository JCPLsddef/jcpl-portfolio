"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "@/context/LocaleContext";

const CAL_LINK = "clientgrowth/15min";
const CAL_BOOKING_URL = `https://app.cal.com/${CAL_LINK}?layout=column&hideEventTypeDetails=1&theme=dark`;

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
      className="pt-20 pb-20 md:pt-[120px] md:pb-[120px]"
      style={{ background: "#0a0f1e" }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12 lg:gap-16">
          {/* Left column: marketing + ball pit background (transparent) */}
          <div className="relative min-h-[400px] min-w-0 md:w-[40%] lg:w-[38%] shrink-0">
            {/* Ball pit as background layer — transparent, behind text */}
            {isVisible && (
              <div
                className="absolute inset-0 hidden md:block"
                style={{ minHeight: 400 }}
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
              {t<string>("bookCall.italicSubline") && (
                <p className="mt-2 text-[20px] italic text-white/90">
                  {t<string>("bookCall.italicSubline")}
                </p>
              )}
              <p className="mt-4 text-base opacity-70 text-white">
                {t<string>("bookCall.body")}
              </p>
            </div>
          </div>

          {/* Right column: notice + calendar */}
          <div className="flex flex-1 flex-col gap-4">
            <div
              className="rounded-lg"
              role="status"
              style={{
                background: "rgba(249,115,22,0.08)",
                border: "1px solid rgba(249,115,22,0.22)",
                borderRadius: 8,
                padding: "12px 20px",
                color: "#fed7aa",
                fontSize: "0.875rem",
                lineHeight: 1.5,
              }}
            >
              {t<string>("bookCall.notice")}
            </div>

            <div
              className="relative min-h-[560px] overflow-hidden rounded-xl p-4 md:min-h-[640px] cal-embed-wrapper"
              style={{
                background: "#0f1729",
                border: "1px solid #1e293b",
              }}
            >
              <div
                style={{
                  background: "#0f1729",
                  borderRadius: 12,
                  padding: 6,
                  overflow: "hidden",
                  height: "100%",
                }}
              >
              {!isVisible ? (
                <div
                  className="flex h-full min-h-[520px] items-center justify-center text-[15px] md:min-h-[600px]"
                  style={{ color: "#94a3b8" }}
                  aria-live="polite"
                >
                  Loading calendar…
                </div>
              ) : (
                <iframe
                  src={CAL_BOOKING_URL}
                  title="Book a call"
                  className="h-full min-h-[520px] w-full border-0 rounded-lg md:min-h-[600px]"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
