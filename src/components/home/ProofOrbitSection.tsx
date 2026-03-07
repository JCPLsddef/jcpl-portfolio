"use client";

import dynamic from "next/dynamic";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";
import type { ProofLogoItem } from "./ProofOrbit";

// Dynamic import with ssr:false — Three.js/R3F cannot run on the server
const ProofOrbit = dynamic(() => import("./ProofOrbit"), {
  ssr: false,
  loading: () => <div style={{ height: 460 }} aria-hidden="true" />,
});

// Map LogoLoopData → ProofLogoItem
const proofLogos: ProofLogoItem[] = caseStudyLogos.map((l) => ({
  id:   l.alt ?? l.src,
  name: l.name ?? l.alt ?? "",
  logo: l.src,
}));

export default function ProofOrbitSection() {
  return (
    <SectionWrapper id="clients" variant="surface">

      <Reveal className="mx-auto max-w-xl text-center">
        <SectionLabel label="Client Accounts" className="mb-5" />
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-tight tracking-tight text-white">
          Real Businesses. Real Results.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-sv-text-sub">
          Every sphere below represents a real active or past client account
          built on the Growth Architecture system.
        </p>
      </Reveal>

      {/* Canvas — loads after hydration, transparent background */}
      <ProofOrbit
        logos={proofLogos}
        height={460}
        followCursor
        speed={0.85}
        className="mt-2"
      />

      {/* Supporting stat — anchors the visual in concrete numbers */}
      <Reveal delay={0.1} className="mt-4 text-center">
        <p className="text-[13px] text-sv-text-muted">
          Average cost per qualified call:{" "}
          <span className="font-semibold text-white">$27</span>
          {" · "}Q4 2025
        </p>
      </Reveal>

    </SectionWrapper>
  );
}
