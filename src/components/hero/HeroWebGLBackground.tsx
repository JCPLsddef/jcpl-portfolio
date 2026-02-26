"use client";

import { useEffect, useRef } from "react";

const SDK_URL =
	"https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
const SCRIPT_ID = "unicornstudio-embed";
const PROJECT_ID = "XM6RVpVCzZNadvE1Pxqw";

/**
 * Renders a Unicorn Studio WebGL scene as a full-bleed cover background.
 *
 * - Client-only: no `window` usage outside useEffect
 * - Script dedup: guarded by DOM id check
 * - Cover behavior: scale(1.06) + inset:-12px on parent ensures full coverage
 * - Non-blocking: script loads after hydration
 * - Reduced motion: skips WebGL init; static gradient shown via CSS
 */
export default function HeroWebGLBackground() {
	const wrapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window === "undefined") return;

		// Skip WebGL for users who prefer reduced motion
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const initUnicorn = () => {
			const us = (window as any).UnicornStudio;
			if (us && typeof us.init === "function") {
				us.init();
			}
		};

		// If SDK already loaded, re-init to pick up new project containers
		if (document.getElementById(SCRIPT_ID)) {
			initUnicorn();
			return;
		}

		// Load SDK once, non-blocking
		const script = document.createElement("script");
		script.id = SCRIPT_ID;
		script.src = SDK_URL;
		script.async = true;
		script.onload = () => initUnicorn();
		document.head.appendChild(script);
	}, []);

	return (
		<div ref={wrapRef} className="hero-webgl-wrap" aria-hidden="true">
			{/* Scale slightly larger than container for full cover — no letterboxing */}
			<div
				data-us-project={PROJECT_ID}
				style={{
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					transform: "scale(1.06)",
					transformOrigin: "center center",
				}}
			/>
		</div>
	);
}
