"use client";

import { caseStudyLogos } from "@/components/hero/LogoLoopData";
import LogoLoop from "@/components/home/LogoLoop";

export default function ClientLogoTicker() {
  return (
    <div
      className="group/logo py-6"
      style={{
        background: "#0a0f1e",
        paddingTop: 80,
        borderTop: "1px solid rgba(30,41,59,0.5)",
      }}
    >
      <p
        className="text-center uppercase"
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          color: "#f97316",
          marginBottom: 24,
        }}
      >
        CURRENT CLIENTS GENERATING QUALIFIED CALLS RIGHT NOW
      </p>
      <LogoLoop
        logos={caseStudyLogos}
        speed={55}
        pauseOnHover
        fadeOut
        fadeOutColor="#0a0f1e"
        logoHeight={36}
        gap={64}
        ariaLabel="Client logos"
        renderItem={(item, key) => {
          const logoItem = item as { src: string; alt?: string; industryLabel?: string };
          return (
            <div key={key} className="flex flex-col items-center gap-2">
              <img
                src={logoItem.src}
                alt={logoItem.alt ?? ""}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="ticker-logo transition-opacity duration-200 group-hover/logo:opacity-100"
                style={{
                  height: 36,
                  width: "auto",
                  objectFit: "contain",
                  opacity: 0.6,
                }}
              />
              {logoItem.industryLabel && (
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "#64748b",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {logoItem.industryLabel}
                </span>
              )}
            </div>
          );
        }}
      />
      <p
        className="text-center"
        style={{ fontSize: "0.9rem", color: "#94a3b8", marginTop: 24 }}
      >
        Five industries. One growth system.
      </p>
    </div>
  );
}
