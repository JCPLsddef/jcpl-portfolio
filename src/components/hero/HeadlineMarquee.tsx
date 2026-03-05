"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";

const PHRASE = "DOMINATE YOUR MARKET";
const SEPARATOR = "  ·  ";
const REPETITIONS = 12;
const SPEED_PX_PER_SEC = 80;
const MOBILE_SPEED_PX_PER_SEC = 60;

export default function HeadlineMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTsRef = useRef<number>(0);
  const contentWidthRef = useRef(0);
  const reducedMotion = usePrefersReducedMotionSafe();
  const [contentWidth, setContentWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;
    const ro = new ResizeObserver(() => {
      if (contentRef.current) {
        const w = contentRef.current.offsetWidth;
        contentWidthRef.current = w;
        setContentWidth(w);
      }
    });
    ro.observe(contentRef.current);
    contentWidthRef.current = contentRef.current.offsetWidth;
    setContentWidth(contentRef.current.offsetWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion || contentWidth <= 0) return;

    const track = trackRef.current;
    if (!track) return;

    const speed = isMobile ? MOBILE_SPEED_PX_PER_SEC : SPEED_PX_PER_SEC;

    const animate = (timestamp: number) => {
      if (lastTsRef.current === 0) lastTsRef.current = timestamp;
      const delta = Math.min(timestamp - lastTsRef.current, 100) / 1000;
      lastTsRef.current = timestamp;
      const cw = contentWidthRef.current;
      if (cw > 0) {
        let next = offsetRef.current + speed * delta;
        while (next >= cw) next -= cw;
        offsetRef.current = next;
        track.style.transform = `translate3d(${-next}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reducedMotion, contentWidth, isMobile]);

  const text = Array(REPETITIONS)
    .fill(`${PHRASE}${SEPARATOR}`)
    .join("");

  if (reducedMotion) {
    return (
      <div className="cb-headline cb-headline-marquee-static">
        <span>{PHRASE}</span>
      </div>
    );
  }

  return (
    <div className="cb-headline-marquee" aria-hidden="false">
      <div className="cb-headline-marquee__track" ref={trackRef}>
        <div
          ref={contentRef}
          className="cb-headline-marquee__content"
          style={{ width: "fit-content" }}
        >
          {text}
        </div>
        <div
          className="cb-headline-marquee__content"
          aria-hidden="true"
          style={{ width: "fit-content" }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
