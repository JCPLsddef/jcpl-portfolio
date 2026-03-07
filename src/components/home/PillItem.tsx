"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PILL_AVATAR_SIZE = 72;

interface PillItemProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  includedBadge?: boolean;
  imageAlt: string;
  accentColor: string;
  hoverAccentColor: string;
  isActive: boolean;
  index: number;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  reducedMotion: boolean;
}

function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `${r},${g},${b}`;
}

export default function PillItem({
  title,
  subtitle,
  imageUrl,
  includedBadge,
  imageAlt,
  accentColor,
  hoverAccentColor,
  isActive,
  index,
  onClick,
  onKeyDown,
  reducedMotion,
}: PillItemProps) {
  const rgb = hexToRgb(accentColor);
  const hoverRgb = hexToRgb(hoverAccentColor);

  return (
    <motion.button
      type="button"
      role="tab"
      tabIndex={isActive ? 0 : -1}
      aria-selected={isActive}
      id={`services-tab-${index}`}
      aria-controls={`services-panel-${index}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      whileHover={reducedMotion ? undefined : { y: -1 }}
      className={cn(
        "group relative w-full text-left rounded-[9999px] border transition-all duration-200 ease-out",
        "flex items-center gap-5 pl-4 pr-10 py-4 md:pl-5 md:pr-12 md:py-4",
        "min-h-[80px] md:min-h-[100px]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-sv-base",
        "border-white/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.15)]",
        isActive
          ? "bg-sv-elevated border-white/[0.12] shadow-[0_2px_16px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.06)]"
          : "bg-sv-surface/90 hover:bg-sv-surface hover:border-white/[0.1]"
      )}
      style={
        isActive
          ? {
              borderColor: `rgba(${rgb},0.4)`,
              boxShadow: `0 2px 16px rgba(0,0,0,0.25), 0 0 20px rgba(${rgb},0.06)`,
              ["--tw-ring-color" as string]: `${accentColor}80`,
            }
          : {
              ["--tw-ring-color" as string]: `${hoverAccentColor}80`,
            }
      }
    >
      {/* Hover border tint for inactive pills */}
      {!isActive && (
        <span
          className="absolute -inset-px rounded-[9999px] border border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          style={{
            borderColor: `rgba(${hoverRgb},0.25)`,
          }}
          aria-hidden
        />
      )}

      {/* Avatar - large, left-anchored, dominant */}
      <div
        className={cn(
          "shrink-0 rounded-full overflow-hidden transition-all duration-200",
          isActive ? "ring-0" : "ring-2 ring-white/[0.06]"
        )}
        style={
          isActive
            ? { boxShadow: `0 0 0 2px rgba(${rgb},0.45)` }
            : undefined
        }
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={PILL_AVATAR_SIZE}
          height={PILL_AVATAR_SIZE}
          sizes="(max-width: 767px) 52px, (max-width: 1023px) 60px, 72px"
          className="h-[52px] w-[52px] md:h-[60px] md:w-[60px] lg:h-[72px] lg:w-[72px] object-cover rounded-full"
        />
      </div>

      {/* Text block - improved spacing and hierarchy */}
      <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
        {includedBadge && (
          <span
            className="inline-flex w-fit mb-1.5 rounded px-2 py-0.5 text-[10px] font-medium"
            style={{
              backgroundColor: "#1e3a5f",
              color: "#93c5fd",
              fontSize: "0.65rem",
            }}
          >
            Included in all plans
          </span>
        )}
        <h3
          className={cn(
            "text-[15px] md:text-[16px] font-semibold text-white leading-snug tracking-[-0.01em]",
            isActive ? "text-white" : "text-white/95"
          )}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1.5 text-[13px] md:text-[14px] text-sv-text-sub opacity-75 line-clamp-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Status dot - refined placement */}
      {isActive && (
        <span
          className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full z-[1] shrink-0"
          style={{ backgroundColor: accentColor }}
          aria-hidden
        />
      )}
    </motion.button>
  );
}
