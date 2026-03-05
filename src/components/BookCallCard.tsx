"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";

const KNIGHT_AVATAR = "/knight-avatar.png";

function KnightAvatar() {
  const [imgError, setImgError] = useState(false);
  return imgError ? (
    <User className="w-10 h-10 md:w-12 md:h-12 text-sv-primary/80" aria-hidden />
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
}

export default function BookCallCard({
  title,
  body,
  buttonText,
  buttonHref = "#book-call",
  emailLabel,
  email,
  className = "",
}: BookCallCardProps) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden min-h-[300px] border border-white/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.3)] ${className}`}
    >
      {/* Gradient background: from #020617 via #0F2A44 to #2563EB */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #020617 0%, #0F2A44 45%, #2563EB 100%)",
        }}
        aria-hidden
      />
      {/* Optional subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
        {/* Avatar top-left */}
        <div className="mb-5 flex justify-start">
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0A1628] flex items-center justify-center overflow-hidden ring-2 ring-white/10 shadow-lg shrink-0">
            <KnightAvatar />
          </div>
        </div>
        <h3 className="text-[20px] md:text-[22px] font-[700] text-white leading-tight mb-2">
          {title}
        </h3>
        <p className="text-[15px] text-white/90 leading-[1.6] mb-6 max-w-[280px]">
          {body}
        </p>
        <Link
          href={buttonHref}
          className="flex items-center justify-center w-full py-3.5 px-5 rounded-full bg-white text-[#0E1F35] font-[600] text-[15px] hover:bg-white/95 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-lg"
        >
          {buttonText}
        </Link>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[13px] text-white/75">
            {emailLabel}{" "}
            <a
              href={`mailto:${email}`}
              className="text-white/95 hover:text-white transition-colors underline underline-offset-2 font-medium"
            >
              {email}
            </a>
          </p>
          {/* Small round arrow button bottom-right */}
          <a
            href={buttonHref}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/90 hover:bg-white/20 transition-colors shrink-0"
            aria-label="Book a call"
          >
            <ArrowRight className="w-5 h-5" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}
