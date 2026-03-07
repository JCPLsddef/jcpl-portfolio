"use client";

import { useEffect } from "react";

export default function ScrollProgressBar() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress-bar");
    if (!bar) return;

    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = `${total > 0 ? (scrolled / total) * 100 : 0}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      id="scroll-progress-bar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: "0%",
        background: "linear-gradient(90deg, #D4A853 0%, #C49A2A 100%)",
        zIndex: 9999,
        boxShadow: "0 0 10px rgba(212,168,83,0.55)",
        transition: "width 60ms linear",
        pointerEvents: "none",
      }}
      aria-hidden
    />
  );
}
