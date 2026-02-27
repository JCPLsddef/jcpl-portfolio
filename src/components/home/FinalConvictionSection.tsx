"use client";

import { useEffect, useRef } from "react";
import CTAButton from "@/components/ui/CTAButton";

export default function FinalConvictionSection() {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const embedRef = useRef<HTMLDivElement>(null);

  // Load UnicornStudio script and call init() once the embed div is in the DOM.
  // The guard handles: script already loaded (SPA navigation) vs. first load.
  useEffect(() => {
    const win = window as any;
    if (win.UnicornStudio?.init) {
      // Library already present — just re-init to pick up this div
      win.UnicornStudio.init();
    } else {
      win.UnicornStudio = { isInitialized: false };
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
      s.onload = () => { win.UnicornStudio.init(); };
      (document.head || document.body).appendChild(s);
    }
  }, []);

  // Cursor → click forwarding — makes the horse react to hover/proximity.
  // UnicornStudio's project has an "on click" trigger; by dispatching a synthetic
  // click at the cursor position on every pointer move (RAF-throttled), the horse
  // tracks the cursor continuously without requiring an actual user click.
  useEffect(() => {
    const wrap  = wrapRef.current;
    const embed = embedRef.current;
    if (!wrap || !embed) return;

    let rafId: ReturnType<typeof requestAnimationFrame> | null = null;
    let pendingEvent: PointerEvent | null = null;

    function flush() {
      rafId = null;
      if (!pendingEvent) return;
      const e = pendingEvent;
      pendingEvent = null;

      // Find the canvas UnicornStudio created inside the embed div
      const canvas = embed!.querySelector("canvas");
      if (!canvas) return;

      // Dispatch a synthetic click at the real cursor position — UnicornStudio's
      // click listener moves the horse toward that point.
      canvas.dispatchEvent(
        new MouseEvent("click", {
          bubbles:    true,
          cancelable: true,
          view:       window,
          clientX:    e.clientX,
          clientY:    e.clientY,
        })
      );
    }

    function onPointerMove(e: PointerEvent) {
      pendingEvent = e;
      if (rafId === null) rafId = requestAnimationFrame(flush);
    }

    // passive:true — never blocks page scroll on touch devices
    wrap.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      wrap.removeEventListener("pointermove", onPointerMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Responsive scaling: stretch the fixed 1440-wide embed to fill its wrapper.
  // aspectRatio CSS handles the wrapper height — no JS height math needed.
  useEffect(() => {
    const wrap  = wrapRef.current;
    const embed = embedRef.current;
    if (!wrap || !embed) return;

    function applyScale() {
      const s = wrap!.offsetWidth / 1440;
      embed!.style.transform = `scale(${s})`;
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
        style={{ aspectRatio: "1440 / 900" }}
      >
        <div
          ref={embedRef}
          data-us-project="dyHEFIsGA1gwshhB9NPf"
          className="absolute top-0 left-0"
          style={{ width: 1440, height: 900, transformOrigin: "top left" }}
        />
      </div>

      {/* ── Single CTA — anchored directly below the knight ── */}
      <div className="flex justify-center px-4 py-12 md:py-16">
        <CTAButton href="/apply" size="lg">
          Now Or Never
        </CTAButton>
      </div>
    </section>
  );
}
