"use client";

import { useEffect, useRef } from "react";
import CTAButton from "@/components/ui/CTAButton";

export default function CompetitiveEdgeSection() {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const embedRef = useRef<HTMLDivElement>(null);

  // Load UnicornStudio script and call init() once the embed div is in the DOM.
  // The guard handles: script already loaded (SPA navigation) vs. first load.
  useEffect(() => {
    const win = window as any;
    if (win.UnicornStudio?.init) {
      win.UnicornStudio.init();
    } else {
      win.UnicornStudio = { isInitialized: false };
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
      s.onload = () => { win.UnicornStudio.init(); };
      (document.head || document.body).appendChild(s);
    }
  }, []);

  // Responsive scaling: stretch the fixed 1440-wide embed to fill its wrapper.
  // aspectRatio CSS handles the wrapper height — no JS height math needed.
  useEffect(() => {
    const wrap  = wrapRef.current;
    const embed = embedRef.current;
    if (!wrap || !embed) return;

    function applyScale() {
      embed!.style.transform = `scale(${wrap!.offsetWidth / 1440})`;
    }

    applyScale();
    const ro = new ResizeObserver(applyScale);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#060E1A]">
      {/* ── Embedded visual ── */}
      {/* aspect-ratio CSS drives height automatically; overflow:hidden crops the
          unscaled 1440px div cleanly at every viewport width.                  */}
      <div
        ref={wrapRef}
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "1440 / 600" }}
      >
        <div
          ref={embedRef}
          data-us-project="eeoxwpMPJDQva8wORM3w"
          className="absolute top-0 left-0"
          style={{ width: 1440, height: 600, transformOrigin: "top left" }}
        />
      </div>

      {/* ── Single CTA — anchored directly below the visual ── */}
      <div className="flex justify-center px-4 py-12 md:py-16">
        <CTAButton href="/apply" size="lg">
          Now Or Never
        </CTAButton>
      </div>
    </section>
  );
}
