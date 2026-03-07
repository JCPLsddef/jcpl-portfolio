"use client";

import Image from "next/image";

const BADGES = [
  "3 active partnerships max",
  "Every system built personally",
  "Direct access, no middlemen",
];

export default function FounderBlock() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "#0a0f1e" }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
          {/* Left column: photo */}
          <div className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0 overflow-hidden rounded-xl">
            <Image
              src="/images/juan.jpg"
              alt="Juan — Client Growth"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement("div");
                  fallback.className = "absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-500 text-sm";
                  fallback.textContent = "Juan";
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>

          {/* Right column: content */}
          <div>
            <p
              className="uppercase mb-3"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "#f97316",
              }}
            >
              WHO BUILDS THIS
            </p>

            <p className="text-white/90 leading-[1.75] text-[15px] md:text-[16px] mb-6">
              I&apos;m Juan. I run Client Growth solo and take 3 clients at a time.
              Not because of artificial scarcity — because more than that and the
              weekly attention each system needs to compound gets diluted. I will
              not do that to your business.
            </p>

            <p className="text-white/90 leading-[1.75] text-[15px] md:text-[16px] mb-8">
              Every system I build, I own from the diagnostic call to the first
              booked call. No junior staff. No account managers. No handoffs. You
              work directly with me, every week.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2" style={{ gap: 8 }}>
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-block rounded"
                  style={{
                    background: "#1e3a5f",
                    color: "#93c5fd",
                    fontSize: "0.65rem",
                    padding: "4px 10px",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
