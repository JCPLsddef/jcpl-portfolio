"use client";

import Link from "next/link";
import { trackEvent, type EventName } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  eventName?: EventName;
}

const base =
  "relative inline-flex items-center justify-center font-semibold rounded-[8px] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a5f]";

const variants = {
  primary:
    "bg-[#1e3a5f] text-white border border-[#2d5a8e] hover:bg-[#264d7a] hover:-translate-y-[1px] shadow-[0_4px_24px_rgba(30,58,95,0.3)]",
  secondary:
    "bg-transparent text-white border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.06)]",
  ghost: "text-sv-muted hover:text-sv-primary hover:bg-white/5",
};

const sizes = {
  sm: "px-6 py-3 text-sm min-h-[44px]",
  md: "px-7 py-3.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  eventName = "section_cta_click",
}: Props) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className, variant === "primary" ? "group" : "")}
      onClick={() => trackEvent(eventName)}
    >
      {children}
      {variant === "primary" && (
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}
