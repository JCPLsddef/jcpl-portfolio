"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import type { ServiceBgKey } from "@/lib/content";

const SHADER_CONFIGS: Record<
  ServiceBgKey,
  { color1: string; color2: string; color3: string }
> = {
  website: { color1: "#1A0F08", color2: "#7C2D12", color3: "#F97316" },
  seo: { color1: "#041A14", color2: "#0E5F4B", color3: "#22C55E" },
  geo: { color1: "#0F0616", color2: "#4C1D95", color3: "#A855F7" },
  copy: { color1: "#1A1405", color2: "#1A1405", color3: "#FACC15" },
  googleAds: { color1: "#050B1A", color2: "#1E3A8A", color3: "#3B82F6" },
};

const SHADER_BASE_PROPS = {
  animate: "on",
  axesHelper: "off",
  bgColor1: "#000000",
  bgColor2: "#000000",
  brightness: 1.2,
  cAzimuthAngle: 180,
  cDistance: 3.6,
  cPolarAngle: 90,
  cameraZoom: 1,
  destination: "onCanvas",
  embedMode: "off",
  envPreset: "city",
  format: "gif",
  fov: 45,
  frameRate: 10,
  gizmoHelper: "hide",
  grain: "off",
  lightType: "3d",
  pixelDensity: 1,
  positionX: -1.4,
  positionY: 0,
  positionZ: 0,
  range: "disabled",
  rangeEnd: 40,
  rangeStart: 0,
  reflection: 0.1,
  rotationX: 0,
  rotationY: 10,
  rotationZ: 50,
  shader: "defaults",
  type: "plane",
  uAmplitude: 1,
  uDensity: 1.3,
  uFrequency: 5.5,
  uSpeed: 0.4,
  uStrength: 4,
  uTime: 0,
  wireframe: false,
} as const;

interface Props {
  bgKey: ServiceBgKey;
}

export default function ServicesShaderInner({ bgKey }: Props) {
  const colors = SHADER_CONFIGS[bgKey];
  return (
    <ShaderGradientCanvas
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <ShaderGradient
        {...SHADER_BASE_PROPS}
        color1={colors.color1}
        color2={colors.color2}
        color3={colors.color3}
      />
    </ShaderGradientCanvas>
  );
}
