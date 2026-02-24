"use client";

import { Reveal } from "@/components/motion";

export default function GuaranteesStrip() {
  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 mt-12">

        {/* Left: Featured standard */}
        <div
          className="relative rounded-2xl p-8 flex flex-col justify-between overflow-hidden"
          style={{
            background: "#0F1A2E",
            border: "1px solid rgba(59, 130, 246, 0.22)",
            minHeight: "420px",
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.06)",
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "2rem",
              right: "2rem",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(99, 179, 237, 0.50), transparent)",
            }}
          />
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#3B82F6" }}
            >
              THE STANDARD
            </p>
            <h3
              className="text-2xl font-semibold leading-snug mb-5"
              style={{ color: "#FFFFFF" }}
            >
              Every number is real or it does not get published.
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              Every result on this site comes from a live client account. No projections. No hypotheticals. If I cannot point to a real campaign with real numbers, I do not publish it. Before you sign anything, I can walk you through exactly where each result came from.
            </p>
          </div>
          <div>
            <p
              className="text-5xl font-bold mt-auto pt-8 leading-none"
              style={{ color: "#FFFFFF" }}
            >
              $30,000
            </p>
            <p
              className="text-xs mt-2"
              style={{ color: "#475569" }}
            >
              Most recent verifiable result. 30 days.
            </p>
          </div>
        </div>

        {/* Right: Three stacked smaller standards */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-2xl p-6"
            style={{ background: "#0F1A2E", border: "1px solid rgba(148, 163, 184, 0.12)" }}
          >
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#E2E8F0" }}
            >
              Milestone Delivery
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              Phase 1 delivers your Market Gap Report, Funnel Audit, and 90-day roadmap. Phase 2 delivers a live website, active ad campaigns, and a booking system. You see every deliverable before the next phase starts.
            </p>
          </div>
          <div
            className="rounded-2xl p-6"
            style={{ background: "#0F1A2E", border: "1px solid rgba(148, 163, 184, 0.12)" }}
          >
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#E2E8F0" }}
            >
              No Lock-In
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              The website is yours. The ad accounts are yours. The tracking setup is yours. Month-to-month after the initial build. If you leave tomorrow, you take everything I built with you.
            </p>
          </div>
          <div
            className="rounded-2xl p-6"
            style={{ background: "#0F1A2E", border: "1px solid rgba(148, 163, 184, 0.12)" }}
          >
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#E2E8F0" }}
            >
              Honest Fit Assessment
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              Before any agreement, I review your market, your current revenue, and your operation. If I do not think I can produce a return, I tell you on the call. I have turned down clients. I will do it again.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
