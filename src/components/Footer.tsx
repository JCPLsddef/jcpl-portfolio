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
    <footer
      className="border-t"
      style={{
        background: "#0D0B09",
        borderColor: "#2A2318",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "0 max(24px, 5vw)",
          marginBottom: "48px",
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "#2A2318" }} />
        <div
          style={{
            width: "7px",
            height: "7px",
            background: "#D4A853",
            transform: "rotate(45deg)",
            boxShadow: "0 0 8px rgba(212,168,83,0.4)",
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, height: "1px", background: "#2A2318" }} />
      </div>
      <div className="container py-10 md:py-14">
        <div className="grid gap-8 md:gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-bold text-white">
              Client Growth
            </Link>
            <p className="text-[0.8rem]" style={{ color: "#756D63" }}>
              Growth infrastructure for local service businesses.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.14em] font-medium mb-4" style={{ color: "#756D63" }}>
              {t<string>("footer.navigation")}
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] transition-colors duration-150 hover:text-white"
                    style={{ color: "#A69D8D" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.14em] font-medium mb-4" style={{ color: "#756D63" }}>
              {t<string>("footer.legal")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-[15px] transition-colors duration-150 hover:text-white"
                  style={{ color: "#A69D8D" }}
                >
                  {t<string>("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[15px] transition-colors duration-150 hover:text-white"
                  style={{ color: "#A69D8D" }}
                >
                  {t<string>("footer.terms")}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:juan@clientgrowth.ca"
                  className="text-[15px] transition-colors duration-150"
                  style={{ color: "#D4A853" }}
                >
                  juan@clientgrowth.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-8 pt-6 border-t text-center text-[13px]"
          style={{ borderColor: "#2A2318", color: "#756D63" }}
        >
          © {new Date().getFullYear()} Client Growth. {t<string>("footer.rights")}.
        </div>
      </div>
    </footer>
  );
}
