"use client";

import Link from "next/link";
import { navigation } from "@/lib/content";
import { useTranslations } from "@/context/LocaleContext";

export default function Footer() {
  const t = useTranslations();
  const navItems = [
    { href: "/", label: t<string>("nav.home") },
    { href: "/services", label: t<string>("nav.services") },
    { href: "/results", label: t<string>("nav.results") },
    { href: "/about", label: t<string>("nav.about") },
  ];
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[#030812]">
      <div className="container py-10 md:py-14">
        <div className="grid gap-8 md:gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-bold text-white">
              Client Growth
            </Link>
            <p className="text-[0.8rem] text-[#64748b]">
              Growth infrastructure for local service businesses.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.14em] font-medium text-sv-text-muted mb-4">
              {t<string>("footer.navigation")}
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-sv-text-sub transition-colors duration-150 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.14em] font-medium text-sv-text-muted mb-4">
              {t<string>("footer.legal")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-[15px] text-sv-text-sub transition-colors duration-150 hover:text-white"
                >
                  {t<string>("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[15px] text-sv-text-sub transition-colors duration-150 hover:text-white"
                >
                  {t<string>("footer.terms")}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:juan@clientgrowth.ca"
                  className="text-[15px] text-sv-text-sub transition-colors duration-150 hover:text-sv-muted"
                >
                  juan@clientgrowth.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)] text-center text-[13px] text-sv-text-dim">
          © {new Date().getFullYear()} Client Growth. {t<string>("footer.rights")}.
        </div>
      </div>
    </footer>
  );
}
