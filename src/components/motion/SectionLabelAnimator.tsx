"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export default function SectionLabelAnimator() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    document.querySelectorAll(".section-label").forEach((label) => {
      gsap.from(label, {
        opacity: 0,
        letterSpacing: "0.04em",
        duration: 0.7,
        ease: "power1.out",
        scrollTrigger: {
          trigger: label,
          start: "top 88%",
          once: true,
        },
      });
    });
  }, []);

  return null;
}
