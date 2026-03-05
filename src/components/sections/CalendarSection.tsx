"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useTranslations } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

const CAL_CONTAINER_ID = "my-cal-inline-15min";

export default function CalendarSection() {
  const t = useTranslations();
  const [calReady, setCalReady] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#252de7" },
          dark: { "cal-brand": "#252de7" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      setTimeout(() => setCalReady(true), 400);
    })();
  }, []);

  return (
    <SectionWrapper
      id="book-call"
      variant="default"
      className="bg-[#000] py-16 md:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:items-start">
        {/* Left: copy block */}
        <Reveal className="lg:sticky lg:top-24">
          <SectionLabel label={t<string>("bookCall.eyebrow")} className="mb-4" />
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-[800] text-white leading-[1.12] tracking-[-0.02em] mb-2">
            {t<string>("bookCall.headline")}
          </h2>
          <p className="text-[16px] md:text-[17px] text-white/90 italic mb-5">
            {t<string>("bookCall.italicSubline")}
          </p>
          <p className="text-[16px] md:text-[17px] text-sv-text-sub leading-[1.65] mb-6">
            {t<string>("bookCall.body")}
          </p>
          <ul className="space-y-2 mb-8" aria-hidden>
            <li className="flex items-center gap-2 text-[14px] text-sv-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-sv-primary" />
              {t<string>("bookCall.bullet1")}
            </li>
            <li className="flex items-center gap-2 text-[14px] text-sv-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-sv-primary" />
              {t<string>("bookCall.bullet2")}
            </li>
            <li className="flex items-center gap-2 text-[14px] text-sv-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-sv-primary" />
              {t<string>("bookCall.bullet3")}
            </li>
          </ul>
          <Link
            href={`#${CAL_CONTAINER_ID}`}
            className="inline-flex items-center gap-2 text-[15px] font-[600] text-sv-primary hover:text-sv-primary-hov transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-primary rounded"
          >
            {t<string>("bookCall.cta")}
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        {/* Right: Cal.com embed in dark rounded card */}
        <Reveal>
          <div className="relative rounded-3xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
            {!calReady && (
              <div
                className="absolute inset-0 z-10 flex min-h-[620px] md:min-h-[720px] items-center justify-center bg-[#0a0a0a] text-sv-text-muted text-[15px]"
                aria-live="polite"
              >
                Loading calendar…
              </div>
            )}
            <div
              id={CAL_CONTAINER_ID}
              className="w-full min-h-[620px] md:min-h-[720px] overflow-auto"
            >
              <Cal
                namespace="15min"
                calLink="clientgrowth/15min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
