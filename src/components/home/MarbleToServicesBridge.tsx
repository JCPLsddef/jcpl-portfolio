"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";

const MarbleSystemSection = dynamic(() => import("@/components/home/MarbleSystemSection"));
const ServicesShowcase = dynamic(() => import("@/components/home/ServicesShowcase"));

export default function MarbleToServicesBridge() {
  const impactTargetRef = useRef<HTMLDivElement>(null);
  const [impactRevealed, setImpactRevealed] = useState(false);

  return (
    <>
      <MarbleSystemSection
        impactTargetRef={impactTargetRef}
        onImpactComplete={() => setImpactRevealed(true)}
      />
      <div ref={impactTargetRef}>
        <ServicesShowcase impactRevealed={impactRevealed} />
      </div>
    </>
  );
}
