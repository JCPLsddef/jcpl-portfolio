"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";

const KNIGHT_AVATAR =
  "https://static.wixstatic.com/media/62f926_750bab7cd7e5447c99453f33115c7146~mv2.png";

function KnightAvatar() {
  const [imgError, setImgError] = useState(false);
  return imgError ? (
    <User className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#D4A853" }} aria-hidden />
  ) : (
    <Image
      src={KNIGHT_AVATAR}
      alt=""
      width={96}
      height={96}
      className="w-full h-full object-cover"
      onError={() => setImgError(true)}
    />
  );
}

export interface BookCallCardProps {
  title: string;
  body: string;
  buttonText: string;
  buttonHref?: string;
  emailLabel: string;
  email: string;
  className?: string;
  riskReversalText?: string;
}

export default function BookCallCard({
  title,
  body,
  buttonText,
  buttonHref = "#book-call",
  emailLabel,
  email,
  className = "",
  riskReversalText,
}: BookCallCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden min-h-[300px] lift-card sticky-booking-card ${className}`}
      style={{
        background: "#1E1A14",
        border: "1px solid #2A2318",
        borderTop: "2px solid rgba(212, 168, 83, 0.35)",
        borderRadius: 16,
      }}
    >
      <div className="flex flex-col h-full p-6 md:p-8">
        <div className="mb-5 flex justify-center">
          <div
            className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center overflow-hidden ring-2 ring-white/10 shrink-0"
            style={{ background: "#2A241C" }}
          >
            <KnightAvatar />
          </div>
        </div>
        <h3 className="text-[1.25rem] font-bold text-white leading-tight mb-2">{title}</h3>
        <p className="text-[0.9rem] leading-[1.6] mb-6 max-w-[280px]" style={{ color: "#D2C9B8" }}>
          {body}
        </p>
        <Link
          href={buttonHref}
          className="flex items-center justify-center w-full py-4 px-6 rounded-lg font-semibold text-[#0A0E1A] text-[15px] cta-primary cta-button"
          style={{ background: "#D4A853" }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#C49A2A"; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#D4A853"; }}
        >
          {buttonText}
        </Link>
        {riskReversalText && (
          <p
            className="mt-2 text-center"
            style={{ fontSize: "0.75rem", color: "#756D63" }}
          >
            {riskReversalText}
          </p>
        )}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[13px]" style={{ color: "#A69D8D" }}>
            {emailLabel}{" "}
            <a
              href={`mailto:${email}`}
              className="font-medium transition-colors hover:text-white underline underline-offset-2"
              style={{ color: "#D4A853" }}
            >
              {email}
            </a>
          </p>
          <a
            href={buttonHref}
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors"
            style={{ background: "rgba(212,168,83,0.2)", color: "#D4A853" }}
            aria-label="Book a call"
          >
            <ArrowRight className="w-5 h-5" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}
