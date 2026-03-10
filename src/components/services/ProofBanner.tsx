"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({ target, prefix = "", suffix = "", duration = 1800 }: { target: number; prefix?: string; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.floor(eased * target));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ProofBanner() {
  return (
    <section className="relative border-y border-zinc-800/40 bg-zinc-950/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-zinc-800/60">
          <div className="sm:pr-8">
            <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              <CountUp target={41085} prefix="$" />
            </p>
            <p className="mt-1.5 text-sm text-zinc-500">
              Revenue generated. One client. First 30 days.
            </p>
          </div>
          <div className="sm:px-8">
            <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              $<CountUp target={33} />
            </p>
            <p className="mt-1.5 text-sm text-zinc-500">
              Average cost per qualified call. All active accounts.
            </p>
          </div>
          <div className="sm:pl-8">
            <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              <CountUp target={11} /> days
            </p>
            <p className="mt-1.5 text-sm text-zinc-500">
              Median time from signed agreement to first booked call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
