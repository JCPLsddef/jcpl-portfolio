"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

const CAL_SCRIPT_ID = "cal-embed-script";
const CAL_CONTAINER_ID = "my-cal-inline-15min";
const CAL_SCRIPT_URL = "https://app.cal.com/embed/embed.js";
const MAX_RETRIES = 30;
const RETRY_INTERVAL = 100;

declare global {
  interface Window {
    Cal?: ((action: string, namespace?: string, opts?: Record<string, unknown>) => void) & {
      ns?: Record<string, (action: string, opts?: Record<string, unknown>) => void>;
    };
  }
}

function loadCalScript(): Promise<void> {
  return new Promise((resolve) => {
    const existing = document.getElementById(CAL_SCRIPT_ID);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.id = CAL_SCRIPT_ID;
    script.src = CAL_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });
}

function waitForCal(): Promise<typeof window.Cal> {
  return new Promise((resolve) => {
    let attempts = 0;
    const check = () => {
      if (typeof window.Cal === "function") {
        resolve(window.Cal);
        return;
      }
      if (attempts < MAX_RETRIES) {
        attempts++;
        setTimeout(check, RETRY_INTERVAL);
      } else {
        resolve(window.Cal as typeof window.Cal);
      }
    };
    check();
  });
}

function initCalEmbed(): void {
  const Cal = window.Cal;
  if (typeof Cal !== "function") return;

  Cal("init", "15min", { origin: "https://app.cal.com" });

  const tryInline = (attempts = 0) => {
    const ns = Cal.ns?.["15min"];
    if (ns) {
      ns("inline", {
        elementOrSelector: `#${CAL_CONTAINER_ID}`,
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "clientgrowth/15min",
      });
      ns("ui", { hideEventTypeDetails: false, layout: "month_view" });
      return;
    }
    if (attempts < MAX_RETRIES) {
      setTimeout(() => tryInline(attempts + 1), RETRY_INTERVAL);
    }
  };
  tryInline();
}

export default function CalendarSection() {
  const t = useTranslations();
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);
  const [calReady, setCalReady] = useState(false);

  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;

    const run = async () => {
      await loadCalScript();
      await waitForCal();
      const container = document.getElementById(CAL_CONTAINER_ID);
      if (container && typeof window.Cal === "function") {
        initCalEmbed();
        setTimeout(() => setCalReady(true), 400);
      } else {
        setCalReady(true);
      }
    };

    run();
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
              ref={containerRef}
              id={CAL_CONTAINER_ID}
              className="w-full min-h-[620px] md:min-h-[720px] overflow-auto"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
