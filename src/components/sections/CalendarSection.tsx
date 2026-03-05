"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "@/context/LocaleContext";

const CAL_SCRIPT_ID = "cal-embed-script";
const CAL_CONTAINER_ID = "my-cal-inline-15min";
const CAL_SCRIPT_URL = "https://app.cal.com/embed/embed.js";

declare global {
  interface Window {
    Cal?: ((action: string, ...args: unknown[]) => void) & {
      q?: unknown[];
      ns?: Record<string, (action: string, ...args: unknown[]) => void>;
    };
  }
}

/**
 * Cal.com embed requires a loader stub (window.Cal + Cal.q) to exist BEFORE
 * embed.js loads. The embed.js script processes the queued instructions on load.
 * We create the stub, queue our inline instruction, then load the script.
 */
function ensureCalLoader(): void {
  const w = window;
  if (w.Cal && Array.isArray(w.Cal.q)) return; // Already set up

  w.Cal =
    w.Cal ||
    function (...args: unknown[]) {
      (w.Cal!.q = w.Cal!.q || []).push(args);
    };
  if (!Array.isArray(w.Cal.q)) w.Cal.q = [];
}

function queueOrRunInline(): void {
  const inlineArgs = {
    elementOrSelector: `#${CAL_CONTAINER_ID}`,
    calLink: "clientgrowth/15min",
    config: {
      layout: "month_view",
      useSlotsViewOnSmallScreen: "true",
    },
  };

  // If Cal loaded and has .loaded, call directly; otherwise queue
  const Cal = window.Cal;
  if (typeof Cal === "function") {
    Cal("inline", inlineArgs);
  }
}

function loadCalScript(): Promise<void> {
  return new Promise((resolve) => {
    const existing = document.getElementById(CAL_SCRIPT_ID);
    if (existing) {
      // Script already loaded — run inline directly (Cal may be real or stub)
      queueOrRunInline();
      resolve();
      return;
    }

    ensureCalLoader();
    queueOrRunInline();

    const script = document.createElement("script");
    script.id = CAL_SCRIPT_ID;
    script.src = CAL_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });
}

export default function CalendarSection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const initRef = useRef(false);
  const [calReady, setCalReady] = useState(false);

  useEffect(() => {
    if (initRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || initRef.current) return;
        initRef.current = true;

        const run = async () => {
          const container = document.getElementById(CAL_CONTAINER_ID);
          if (!container) return;
          await loadCalScript();
          setTimeout(() => setCalReady(true), 800);
        };

        run();
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
          {!calReady && (
            <div
              className="absolute inset-0 z-10 flex h-full items-center justify-center bg-[#111111] text-white/70 text-[15px]"
              aria-live="polite"
            >
              Loading calendar…
            </div>
          )}
          <div
            id={CAL_CONTAINER_ID}
            className="h-full w-full overflow-scroll"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
          />
        </div>
      </div>
    </section>
  );
}
