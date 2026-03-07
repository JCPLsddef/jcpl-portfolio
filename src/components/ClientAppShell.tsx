"use client";

import { type ReactNode } from "react";
import { LocaleProvider } from "@/context/LocaleContext";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import RouteScrollManager from "@/components/system/RouteScrollManager";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpeedPopup from "@/components/SpeedPopup";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import SectionLabelAnimator from "@/components/motion/SectionLabelAnimator";
import { useTranslations } from "@/context/LocaleContext";

function SkipToContent() {
  const t = useTranslations();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--brand-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
    >
      {t<string>("common.skipToContent")}
    </a>
  );
}

export default function ClientAppShell({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <SkipToContent />
      <ScrollProgressBar />
      <SectionLabelAnimator />
      <SmoothScrollProvider>
        <RouteScrollManager />
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <SpeedPopup />
      </SmoothScrollProvider>
    </LocaleProvider>
  );
}
