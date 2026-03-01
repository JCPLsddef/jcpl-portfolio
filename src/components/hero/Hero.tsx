"use client";

import { useRef, useEffect, useCallback, Fragment } from "react";
import gsap from "gsap";
import HeroWebGLBackground from "./HeroWebGLBackground";
import CurvedLoop from "./CurvedLoop";
import { prefersReducedMotion } from "@/lib/motion";
import styles from "./HeroAvatarFrame.module.css";
import "./hero.css";

/* ═══════════════════════════════════════════════════
   COPY — DOMINATE style, institutional authority
   ═══════════════════════════════════════════════════ */
const EYEBROW = "Growth Architecture™";
const HEADLINE = "DOMINATE YOUR MARKET";
const MECHANISM =
	"One system: conversion site, Google Ads for ready-to-hire buyers, and AI that qualifies leads before your phone rings.";
const RESULT_STATS = [
	{ value: "$41,084", label: "Revenue generated" },
	{ value: "46x", label: "Return on ad spend" },
	{ value: "11 days", label: "Time to first call" },
];
const CTA_PRIMARY = {
	label: "Apply. I\u2019ll review you in 24h.",
	href: "/apply",
};

/* ═══════════════════════════════════════════════════
   COMPONENT — Command Bridge Hero
   3 Layers: WebGL BG → Readability overlay → Content
   ═══════════════════════════════════════════════════ */
export default function Hero() {
	const sectionRef = useRef<HTMLElement>(null);
	const frameRef = useRef<HTMLDivElement>(null);
	const borderRef = useRef<HTMLDivElement>(null);
	const headlineRef = useRef<HTMLSpanElement>(null);
	const eyebrowRef = useRef<HTMLDivElement>(null);
	const mechRef = useRef<HTMLParagraphElement>(null);
	const stripRef = useRef<HTMLParagraphElement>(null);
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

		const allEls = [
			frameRef.current,
			eyebrowRef.current,
			mechRef.current,
			stripRef.current,
			ctaRef.current,
		].filter(Boolean);

		if (reduced) {
			allEls.forEach((el) => gsap.set(el, { opacity: 1, y: 0 }));
			if (headlineRef.current) {
				gsap.set(headlineRef.current.querySelectorAll("[data-char]"), {
					opacity: 1,
					y: 0,
				});
			}
			if (borderRef.current) gsap.set(borderRef.current, { opacity: 1 });
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

		// 3. Eyebrow
		if (eyebrowRef.current) {
			tl.fromTo(
				eyebrowRef.current,
				{ opacity: 0, y: 14 },
				{ opacity: 1, y: 0, duration: 0.6 },
				0.3
			);
		}

		// 4. Headline chars stagger (0.04s/char)
		if (headlineRef.current) {
			const chars = headlineRef.current.querySelectorAll("[data-char]");
			if (chars.length) {
				tl.fromTo(
					chars,
					{ opacity: 0, y: 40 },
					{ opacity: 1, y: 0, duration: 0.7, stagger: 0.04 },
					0.45
				);
			}
		}

		// 5. Mechanism line fades in
		if (mechRef.current) {
			tl.fromTo(
				mechRef.current,
				{ opacity: 0, y: 18 },
				{ opacity: 1, y: 0, duration: 0.65 },
				0.9
			);
		}

		// 6. Proof line
		if (stripRef.current) {
			tl.fromTo(
				stripRef.current,
				{ opacity: 0, y: 12 },
				{ opacity: 1, y: 0, duration: 0.55 },
				1.15
			);
		}

		// 7. CTA appears last
		if (ctaRef.current) {
			tl.fromTo(
				ctaRef.current,
				{ opacity: 0, y: 16 },
				{ opacity: 1, y: 0, duration: 0.55 },
				1.35
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

			{/* ═══════════════════════════════════════════════
			    HERO — full-bleed WebGL + content layers
			    No outer frame. Section IS the container.
			    ═══════════════════════════════════════════════ */}
			<div ref={frameRef} className={`cb-frame ${styles.frame}`} style={{ opacity: 0 }}>

				{/* ── Curved ambient text arch ── */}
				<div className="cb-curved-loop" aria-hidden="true">
					<CurvedLoop
						marqueeText="GROWTH ARCHITECTURE™  ·  CALLS BOOKED  ·  DOMINATE YOUR MARKET  ·  "
						speed={0.4}
						curveAmount={120}
						direction="left"
						interactive={false}
						className="hero-curved-loop-text"
					/>
				</div>

				{/* ── LAYER 1 — WebGL background ── */}
				<div ref={bgLayerRef} className="cb-layer cb-layer--bg" aria-hidden="true">
					<HeroWebGLBackground />
				</div>

				{/* ── LAYER 2 — Readability overlays ── */}
				<div className="cb-layer cb-overlay-top" aria-hidden="true" />
				<div className="cb-layer cb-overlay-vignette" aria-hidden="true" />
				<div className="cb-layer cb-grain" aria-hidden="true" />

				{/* ── LAYER 3 — Content ── */}
				<div ref={contentLayerRef} className="cb-content-wrap">
					<div className="cb-content">

						{/* Eyebrow */}
						<div ref={eyebrowRef} className="cb-eyebrow" style={{ opacity: 0 }}>
							<span className="cb-eyebrow-dot" aria-hidden="true" />
							<span>{EYEBROW}</span>
						</div>

						{/* DOMINATE H1 */}
						<h1 className="cb-headline">
							<span ref={headlineRef} aria-label={HEADLINE}>
								{HEADLINE.split(" ").map((word, wi, arr) => (
									<Fragment key={wi}>
										<span className="cb-word" aria-hidden="true">
											{word.split("").map((char, ci) => (
												<span key={ci} data-char="" className="cb-char">
													{char}
												</span>
											))}
										</span>
										{wi < arr.length - 1 && " "}
									</Fragment>
								))}
							</span>
						</h1>

						{/* Mechanism line */}
						<p ref={mechRef} className="cb-mechanism" style={{ opacity: 0 }}>
							{MECHANISM}
						</p>

						{/* Result strip */}
						<div ref={stripRef} className="cb-result-strip" style={{ opacity: 0 }}>
							{RESULT_STATS.map((stat) => (
								<div key={stat.label} className="cb-result-stat">
									<p className="cb-result-value">{stat.value}</p>
									<p className="cb-result-label">{stat.label}</p>
								</div>
							))}
						</div>

						{/* CTA */}
						<div ref={ctaRef} className="cb-cta-wrap" style={{ opacity: 0 }}>
							<a href={CTA_PRIMARY.href} className="cb-cta cb-cta--primary">
								{CTA_PRIMARY.label}
								<span className="cb-cta-arrow" aria-hidden="true">→</span>
							</a>
						</div>

					</div>
				</div>

			</div>
		</section>
	);
}
