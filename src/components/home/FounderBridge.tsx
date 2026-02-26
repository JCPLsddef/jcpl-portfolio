/* ── FounderBridge — FULLY STATIC by design ──────────────────────────────
   Zero animation here is intentional. It signals authenticity.
   The lack of motion when everything else moves tells the visitor:
   this is a real person, not a marketing sequence.
   ─────────────────────────────────────────────────────────────────────── */

import { aboutHowIBuiltThis } from "@/lib/content";

export default function FounderBridge() {
  return (
    <section
      id="founder"
      className="py-16 md:py-20 bg-[var(--bg-base)]"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

            {/* Left — founder identity */}
            <div className="shrink-0 flex flex-col items-center md:items-start gap-4">
              {/* Avatar placeholder */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-[var(--text-primary)] shrink-0"
                style={{
                  background: "linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-soft) 100%)",
                  border: "1px solid rgba(43,90,140,0.3)",
                }}
                aria-label="Founder photo placeholder"
              >
                JC
              </div>

              <div>
                <p className="text-[15px] font-semibold text-[var(--text-primary)] leading-tight">
                  Juan Carlos
                </p>
                <p className="text-[13px] text-[var(--text-muted)] mt-0.5">
                  Founder, Client Growth
                </p>
              </div>

              {/* Thin accent line */}
              <div
                className="hidden md:block w-px h-16 mt-2"
                style={{
                  background: "linear-gradient(180deg, rgba(43,90,140,0.4) 0%, transparent 100%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Right — copy */}
            <div className="flex-1">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-5"
                style={{ color: "var(--brand-accent)" }}
              >
                {aboutHowIBuiltThis.overline}
              </p>

              <h2
                className="font-bold text-[var(--text-primary)] leading-[1.2] mb-6"
                style={{ fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)" }}
              >
                {aboutHowIBuiltThis.heading.replace(/\n/g, " ")}
              </h2>

              <div className="space-y-4">
                {aboutHowIBuiltThis.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-[16px] leading-[1.8] text-[var(--text-secondary)]"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Positioning statement */}
              <p
                className="mt-8 text-[15px] font-semibold text-[var(--text-primary)] leading-snug"
                style={{
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                That system is what I bring to every client. Built before the market catches on.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
