"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";
import Link from "next/link";
import {
  Globe,
  Megaphone,
  Search,
  Sparkles,
  Phone,
  FileText,
} from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    icon: Globe,
    title: "Conversion Website System",
    desc: "Trust and action in one experience. Every page built to move visitors toward a booked call.",
    proof: "Median 11 days from agreement to live",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    desc: "Intent-driven campaigns that turn search demand into qualified booked calls. Tracked cost per call.",
    proof: "46x ROAS. Triple W Rentals, Texas, 30 days",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "Technical and content SEO that compounds. Get found when buyers in your market are searching.",
    proof: "Page 1 in under 60 days. Competitive TX market",
  },
  {
    icon: Sparkles,
    title: "GEO / AI Search Visibility",
    desc: "Show up inside AI answers. Structured authority signals so ChatGPT and others recommend you.",
    proof: "Early-mover advantage. Most competitors are not here yet",
  },
  {
    icon: Phone,
    title: "AI Voice Agent",
    desc: "Answers calls after hours. Qualifies leads. Books appointments without you lifting a finger.",
    proof: "Captures calls after hours. Pays for itself in one booking.",
  },
  {
    icon: FileText,
    title: "Copy Engineered to Convert",
    desc: "Messaging, offers, and landing-page copy built to convert cold traffic into revenue.",
    proof: "Avg $27 cost per qualified inbound call",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const ctx = gsap.context(() => {
      gsap.from(".services-grid .service-card", {
        opacity: 0,
        y: isMobile ? 0 : 22,
        stagger: 0.09,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 76%",
          once: true,
        },
      });
      gsap.from(".service-icon", {
        scale: 0,
        rotation: -15,
        stagger: 0.07,
        duration: 0.5,
        ease: "back.out(2.2)",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 76%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper
      ref={sectionRef}
      id="services"
      className="py-16 md:py-24"
      style={{ background: "#181410" }}
    >
      <Reveal className="max-w-2xl mx-auto text-center mb-12">
        <p
          className="uppercase mb-4"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            color: "#D4A853",
            fontWeight: 500,
          }}
        >
          WHAT I BUILD
        </p>
        <h2
          className="text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4"
          style={{ maxWidth: 640, margin: "0 auto 16px" }}
        >
          One person builds every piece of the system.
        </h2>
        <p
          className="text-base md:text-lg max-w-xl mx-auto"
          style={{ color: "#A69D8D", lineHeight: 1.6 }}
        >
          No scattered vendors. No disconnected tools. Every service below is built and owned by me.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto services-grid">
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            className="rounded-xl p-8 lift-card service-card"
            style={{
              background: "#221D17",
              border: "1px solid #2A2318",
              borderTop: "3px solid #D4A853",
            }}
          >
            <div
              className="service-icon w-12 h-12 rounded-lg flex items-center justify-center mb-5"
              style={{ background: "rgba(212,168,83,0.12)", color: "#D4A853" }}
            >
              <s.icon size={24} strokeWidth={1.75} />
            </div>
            <h3
              className="text-[1.125rem] font-semibold mb-3"
              style={{ color: "#F5F0E8" }}
            >
              {s.title}
            </h3>
            <p
              className="text-[0.9rem] mb-4"
              style={{ color: "#D2C9B8", lineHeight: 1.6 }}
            >
              {s.desc}
            </p>
            <p
              className="text-[0.8rem] font-medium"
              style={{ color: "#D4A853" }}
            >
              {s.proof}
            </p>
          </div>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-10 text-center">
        <Link
          href="#book-call"
          className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold text-[#0A0E1A] cta-primary cta-button"
          style={{ background: "#D4A853" }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#C49A2A";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#D4A853";
          }}
        >
          Book a 20-Minute Diagnostic Call
          <span aria-hidden>→</span>
        </Link>
      </Reveal>
    </SectionWrapper>
  );
}
