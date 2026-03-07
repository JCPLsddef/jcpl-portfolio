"use client";

import Link from "next/link";

const RISK_REVERSAL = "If I cannot move the needle, I will tell you on the call. Before you pay anything.";

export interface PrimaryCTAProps {
  href?: string;
  children: string;
  showRiskReversal?: boolean;
  className?: string;
}

export default function PrimaryCTA({
  href = "#book-call",
  children = "Book a 20-Minute Diagnostic Call",
  showRiskReversal = true,
  className = "",
}: PrimaryCTAProps) {
  const buttonClasses =
    "inline-flex items-center justify-center gap-2 font-semibold text-white transition-all duration-200 rounded-lg hover:-translate-y-0.5 " +
    "bg-[#f97316] hover:bg-[#ea6c0a] py-4 px-8 text-base " +
    className;

  const content = (
    <>
      {children}
      <span aria-hidden="true">→</span>
    </>
  );

  return (
    <div className="flex flex-col items-center">
      {href.startsWith("#") ? (
        <a href={href} className={buttonClasses}>
          {content}
        </a>
      ) : (
        <Link href={href} className={buttonClasses}>
          {content}
        </Link>
      )}
      {showRiskReversal && (
        <p
          className="text-center mt-2"
          style={{ fontSize: "0.875rem", color: "#64748b" }}
        >
          {RISK_REVERSAL}
        </p>
      )}
    </div>
  );
}
