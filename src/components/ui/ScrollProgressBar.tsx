"use client";

import { useEffect } from "react";

export default function ScrollProgressBar() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;

    const update = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      id="scroll-progress"
      className="fixed top-0 left-0 h-[3px] z-[9999]"
      style={{
        width: "0%",
        background: "linear-gradient(90deg, #f97316, #ea6c0a)",
        boxShadow: "0 0 8px rgba(249,115,22,0.5)",
        transition: "width 50ms linear",
      }}
      aria-hidden
    />
  );
}
