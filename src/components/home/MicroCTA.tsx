/* ── MicroCTA — calm checkpoint between system reveal and case study ──────
   No animation. No decoration. One line. One button.
   Visitors who are ready after seeing the system have a frictionless exit.
   ─────────────────────────────────────────────────────────────────────── */

import Link from "next/link";

export default function MicroCTA() {
  return (
    <section
      className="py-12 md:py-16 bg-[var(--bg-base)]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="container text-center">
        <p className="text-[18px] md:text-[20px] font-semibold text-[var(--text-primary)] mb-6">
          Ready to build this for your business?
        </p>
        <Link
          href="/apply"
          className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-[var(--brand-accent)] hover:bg-[var(--brand-deep)] shadow-[0_0_20px_rgba(43,90,140,0.3)] hover:shadow-[0_0_30px_rgba(43,90,140,0.5)]"
        >
          Book a Free Audit
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <p className="mt-4 text-[13px] text-[var(--text-dim)]">
          No long-term lock-ins. If we&rsquo;re not producing results, you&rsquo;re not trapped.
        </p>
      </div>
    </section>
  );
}
