"use client";

import { Reveal } from "@/components/motion";

export default function GuaranteesStrip() {
  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 mt-12">

        {/* Left: Featured standard */}
        <div
          className="relative rounded-xl p-8 flex flex-col justify-between overflow-hidden"
          style={{
            background: "#1E1A14",
            border: "1px solid #2A2318",
            borderTop: "2px solid #D4A853",
            minHeight: "420px",
          }}
        >
          {/* $41,085 stat orb */}
          <div
            className="absolute left-1/2 bottom-[20%] -translate-x-1/2 w-[300px] h-[200px] rounded-full pointer-events-none z-0 max-md:w-[180px] max-md:h-[120px]"
            style={{
              background: "radial-gradient(ellipse, rgba(212,168,83,0.06) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            aria-hidden
          />
          <div className="relative z-10">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#D4A853" }}
            >
              THE STANDARD
            </p>
            <h3
              className="text-2xl font-semibold leading-snug mb-5"
              style={{ color: "#F5F0E8" }}
            >
              Every number is real or it does not get published.
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#D2C9B8" }}
            >
              Every result on this site comes from a live client account. No projections. No hypotheticals. If I cannot point to a real campaign with real numbers, I do not publish it. Before you sign anything, I can walk you through exactly where each result came from.
            </p>
          </div>
          <div>
            <p
              className="text-5xl font-bold mt-auto pt-8 leading-none"
              style={{ color: "#F5F0E8" }}
            >
              $41,085
            </p>
            <p
              className="text-xs mt-2"
              style={{ color: "#756D63" }}
            >
              Most recent verifiable result. 30 days.
            </p>
          </div>
          </div>
        </div>

        {/* Right: Three stacked smaller standards */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-xl p-6"
            style={{ background: "#1E1A14", border: "1px solid #2A2318", borderTop: "2px solid #D4A853" }}
          >
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#F5F0E8" }}
            >
              Milestone Delivery
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#D2C9B8" }}
            >
              Phase 1 delivers your Market Gap Report, Funnel Audit, and 90-day roadmap. Phase 2 delivers a live website, active ad campaigns, and a booking system. You see every deliverable before the next phase starts.
            </p>
          </div>
          <div
            className="rounded-xl p-6"
            style={{ background: "#1E1A14", border: "1px solid #2A2318", borderTop: "2px solid #D4A853" }}
          >
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#F5F0E8" }}
            >
              No Lock-In
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#D2C9B8" }}
            >
              The website is yours. The ad accounts are yours. The tracking setup is yours. Month-to-month after the initial build. If you leave tomorrow, you take everything I built with you.
            </p>
          </div>
          <div
            className="rounded-xl p-6"
            style={{ background: "#1E1A14", border: "1px solid #2A2318", borderTop: "2px solid #D4A853" }}
          >
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#F5F0E8" }}
            >
              Honest Fit Assessment
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#D2C9B8" }}
            >
              Before any agreement, I review your market, your current revenue, and your operation. If I do not think I can produce a return, I tell you on the call. I have turned down clients. I will do it again.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
