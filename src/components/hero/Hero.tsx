"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import HeroWebGLBackground from "./HeroWebGLBackground";
import HeadlineMarquee from "./HeadlineMarquee";
import { prefersReducedMotion } from "@/lib/motion";
import styles from "./HeroAvatarFrame.module.css";
import "./hero.css";

/* ═══════════════════════════════════════════════════
   COPY — DOMINATE style, institutional authority
   ═══════════════════════════════════════════════════ */
const CTA_PRIMARY = {
	label: "Apply. I'll review you in 24h.",
	href: "/apply",
};

/* ═══════════════════════════════════════════════════
   COMPONENT — Command Bridge Hero
   3 Layers: WebGL BG → Readability overlay → Content
   ═══════════════════════════════════════════════════ */
export default function Hero() {
	const sectionRef = useRef<HTMLElement>(null);
	const frameRef = useRef<HTMLDivElement>(null);
	const headlineRef = useRef<HTMLDivElement>(null);
	const ctaRef = useRef<HTMLDivElement>(null);
	const bgLayerRef = useRef<HTMLDivElement>(null);
	const contentLayerRef = useRef<HTMLDivElement>(null);

	/* ── Mousemove parallax (bg: 6px, content: 3px) ── */
	const handleMouseMove = useCallback((e: MouseEvent) => {
		if (prefersReducedMotion()) return;
		const cx = (e.clientX / window.innerWidth - 0.5) * 2;
		const cy = (e.clientY / window.innerHeight - 0.5) * 2;

		if (bgLayerRef.current) {
			gsap.to(bgLayerRef.current, {
				x: cx * 6,
				y: cy * 6,
				duration: 1.2,
				ease: "power2.out",
				overwrite: "auto",
			});
		}
		if (contentLayerRef.current) {
			gsap.to(contentLayerRef.current, {
				x: cx * 3,
				y: cy * 3,
				duration: 1.4,
				ease: "power2.out",
				overwrite: "auto",
			});
		}
	}, []);

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [handleMouseMove]);

	/* ── GSAP cinematic entrance timeline ── */
	useEffect(() => {
		const reduced = prefersReducedMotion();

		const allEls = [frameRef.current, headlineRef.current, ctaRef.current].filter(Boolean);

		if (reduced) {
			allEls.forEach((el) => gsap.set(el, { opacity: 1, y: 0 }));
			return;
		}

		const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

		// 1. Frame rises in (0.8s)
		if (frameRef.current) {
			tl.fromTo(
				frameRef.current,
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 0.8 },
				0
			);
		}

		// 2. Headline fades in
		if (headlineRef.current) {
			tl.fromTo(
				headlineRef.current,
				{ opacity: 0, y: 40 },
				{ opacity: 1, y: 0, duration: 0.8 },
				0.4
			);
		}

		// 3. CTA appears last
		if (ctaRef.current) {
			tl.fromTo(
				ctaRef.current,
				{ opacity: 0, y: 16 },
				{ opacity: 1, y: 0, duration: 0.55 },
				0.9
			);
		}

		return () => {
			tl.kill();
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="cb"
			aria-label="Hero — Growth Systems"
		>
			{/* Ambient drift */}
			<div className="cb-ambient" aria-hidden="true" />

			{/* HERO — full-bleed WebGL + content layers */}
			<div ref={frameRef} className={`cb-frame ${styles.frame}`} style={{ opacity: 0 }}>

				{/* LAYER 1 — WebGL background */}
				<div ref={bgLayerRef} className="cb-layer cb-layer--bg" aria-hidden="true">
					<HeroWebGLBackground />
				</div>

				{/* LAYER 2 — Readability overlays */}
				<div className="cb-layer cb-overlay-top" aria-hidden="true" />
				<div className="cb-layer cb-overlay-vignette" aria-hidden="true" />
				<div className="cb-layer cb-grain" aria-hidden="true" />

				{/* LAYER 3 — Content */}
				<div ref={contentLayerRef} className="cb-content-wrap">
					<div className="cb-content">

						{/* DOMINATE H1 — infinite marquee */}
						<h1 ref={headlineRef} className="cb-headline" style={{ opacity: 0 }}>
							<HeadlineMarquee />
						</h1>

						{/* Static subheadline — always visible */}
						<p
							className="cb-subheadline"
							style={{
								fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
								color: "#94a3b8",
								maxWidth: 600,
								margin: "16px auto 24px",
								textAlign: "center",
								lineHeight: 1.5,
							}}
						>
							The growth infrastructure local service businesses use to stop
							waiting for referrals and start owning their market.
						</p>

						{/* CTA */}
						<div ref={ctaRef} className="cb-cta-wrap" style={{ opacity: 0 }}>
							<a href={CTA_PRIMARY.href} className="cb-cta cb-cta--primary">
								{CTA_PRIMARY.label}
								<span className="cb-cta-arrow" aria-hidden="true">→</span>
							</a>
							<p
								className="cb-microtrust"
								style={{
									fontSize: "0.75rem",
									color: "#64748b",
									textAlign: "center",
									marginTop: 12,
									marginBottom: 0,
								}}
							>
								Short application. I respond within one business day.
							</p>
						</div>

					</div>
				</div>

			</div>
		</section>
	);
}
