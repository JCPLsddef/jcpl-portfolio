"use client";

import { caseStudyLogos } from "@/components/hero/LogoLoopData";
import LogoLoop from "@/components/home/LogoLoop";

export default function ClientLogoTicker() {
  return (
    <div
      className="group/logo py-6"
      style={{
        background: "#181410",
        paddingTop: 80,
        borderTop: "1px solid #2A2318",
      }}
    >
      <p
        className="text-center uppercase"
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          color: "#D4A853",
          marginBottom: 24,
        }}
      >
        CURRENT CLIENTS GENERATING QUALIFIED CALLS RIGHT NOW
      </p>
      <div className="ticker-container overflow-hidden">
      <LogoLoop
        logos={caseStudyLogos}
        speed={55}
        pauseOnHover
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
                className="ticker-logo"
                style={{
                  height: 36,
                  width: "auto",
                  objectFit: "contain",
                }}
              />
              {logoItem.industryLabel && (
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "#756D63",
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
      </div>
      <p
        className="text-center"
        style={{ fontSize: "0.9rem", color: "#A69D8D", marginTop: 24 }}
      >
        Five industries. One growth system.
      </p>
    </div>
  );
}
