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
          {/* TODO: add founder photo at /public/images/juan.jpg */}
          <div
            className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0 overflow-hidden"
            style={{
              borderRadius: 12,
              border: "1px solid rgba(30,41,59,0.5)",
            }}
          >
            <Image
              src="/images/juan.jpg"
              alt="Juan - Client Growth"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement("div");
                  fallback.className = "absolute inset-0 flex items-center justify-center text-slate-500 text-sm";
                  fallback.style.background = "#0a0f1e";
                  fallback.textContent = "Juan";
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>

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

            <p
              className="text-white font-bold mb-4"
              style={{ fontSize: "1.5rem", lineHeight: 1.4 }}
            >
              I run Client Growth solo. Three clients at a time.
            </p>

            <p
              className="mb-6"
              style={{
                fontSize: "1rem",
                color: "#cbd5e1",
                lineHeight: 1.75,
              }}
            >
              Not because of artificial scarcity, but because every system I build gets my direct attention every single week. No junior staff touches your account. No account manager sits between us. When something breaks at 9 PM on a Tuesday, I fix it that night.
            </p>

            <p
              className="mb-8"
              style={{
                fontSize: "1rem",
                color: "#cbd5e1",
                lineHeight: 1.75,
              }}
            >
              Every system I build, I own from the diagnostic call to the first booked call. No handoffs. You work directly with me, every week.
            </p>

            <p
              className="mb-8"
              style={{
                fontSize: "1rem",
                color: "#cbd5e1",
                lineHeight: 1.75,
              }}
            >
              That is not a limitation of my size. It is the entire point.
            </p>

            <div className="flex flex-wrap gap-2" style={{ gap: 8 }}>
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-block rounded-md"
                  style={{
                    background: "#131d35",
                    border: "1px solid #1e293b",
                    borderLeft: "3px solid #f97316",
                    color: "#cbd5e1",
                    fontSize: "0.8rem",
                    padding: "8px 16px",
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
