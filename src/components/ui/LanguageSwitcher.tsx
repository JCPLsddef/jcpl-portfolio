"use client";

import { useLocale } from "@/context/LocaleContext";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "sm-lang flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider",
        variant === "light" ? "text-white" : "text-[#1e1e22]",
        className
      )}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-label="English"
        aria-current={locale === "en" ? "true" : undefined}
        className={cn(
          "min-h-[44px] min-w-[44px] px-2 py-2 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
          locale === "en" ? "opacity-100" : "opacity-50 hover:opacity-70"
        )}
      >
        EN
      </button>
      <span className="opacity-40" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLocale("fr")}
        aria-label="Français"
        aria-current={locale === "fr" ? "true" : undefined}
        className={cn(
          "min-h-[44px] min-w-[44px] px-2 py-2 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
          locale === "fr" ? "opacity-100" : "opacity-50 hover:opacity-70"
        )}
      >
        FR
      </button>
    </div>
  );
}
