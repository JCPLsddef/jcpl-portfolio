"use client";

import { useRef, useEffect, useCallback, Fragment } from "react";
import gsap from "gsap";
import HeroWebGLBackground from "./HeroWebGLBackground";
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
const PROOF = "Last result: $900 ad spend → $41,084.85 revenue. Texas RV company. 30 days.";
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
	const proofRef = useRef<HTMLParagraphElement>(null);
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
			proofRef.current,
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

		// 2. Border sweep fades in
		if (borderRef.current) {
			tl.fromTo(
				borderRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.6 },
				0.2
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
		if (proofRef.current) {
			tl.fromTo(
				proofRef.current,
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

			{/* ═══════════════════════════════════════════════════
			    SKY-BLUE OUTER DEVICE CASING — Avatar-style frame
			    ═══════════════════════════════════════════════════ */}
			<div className="hero-casing">

				{/* ── Centered top notch plate — sits above the inner screen ── */}
				<div className="hero-notch" aria-hidden="true">
					<span className="hero-notch-logo">CLIENT&nbsp;GROWTH</span>
				</div>

				{/* ── Inner dark screen — WebGL + content ── */}
				<div ref={frameRef} className={`cb-frame ${styles.frame}`} style={{ opacity: 0 }}>

					{/* ═══════════════════════════════════════════════════
					    TOP UI RAIL — Avatar-faithful HUD inside screen
					    [HOME][APPLY]  ──── ◆ CLIENT GROWTH ◆ ────  [RESULTS][CONTACT]
					    ═══════════════════════════════════════════════════ */}
					<div className={styles.topRail} aria-hidden="true">

						{/* Left pill cluster: HOME · APPLY */}
						<div className={styles.railSide}>
							<span className={styles.railPill}>HOME</span>
							<span className={styles.railPill}>APPLY</span>
						</div>

						{/* Center: line ◆ CLIENT GROWTH ◆ line */}
						<div className={styles.railCenter}>
							<div className={styles.railLine} />
							<div className={styles.railConnector} aria-hidden="true" />
							<div className={styles.centerLogo}>CLIENT&nbsp;GROWTH</div>
							<div className={styles.railConnector} aria-hidden="true" />
							<div className={styles.railLine} />
						</div>

						{/* Right pill cluster: RESULTS · CONTACT */}
						<div className={styles.railSide}>
							<span className={styles.railPill}>RESULTS</span>
							<span className={styles.railPill}>CONTACT</span>
						</div>
					</div>

					{/* Inner surface — full frame height, padding-top reserves rail space */}
					<div className="cb-surface">
						{/* ═══ LAYER 1 — WebGL background ═══ */}
						<div ref={bgLayerRef} className="cb-layer cb-layer--bg" aria-hidden="true">
							<HeroWebGLBackground />
						</div>

						{/* ═══ LAYER 2 — Readability overlay ═══ */}
						<div className="cb-layer cb-overlay-top" aria-hidden="true" />
						<div className="cb-layer cb-overlay-vignette" aria-hidden="true" />
						<div className="cb-layer cb-grain" aria-hidden="true" />

						{/* Side vertical labels (Avatar: "2024" left, "NETFLIX" right) */}
						<div className={`${styles.sideText} ${styles.sideTextLeft}`} aria-hidden="true">
							JCPL · BUILD
						</div>
						<div className={`${styles.sideText} ${styles.sideTextRight}`} aria-hidden="true">
							GROWTH SYS
						</div>

						{/* Bottom center ornament — Avatar's circular connector symbol */}
						<div className="cb-bottom-ornament" aria-hidden="true">
							<div className="cb-bottom-gem" />
						</div>

						{/* ═══ LAYER 3 — Content ═══ */}
						<div ref={contentLayerRef} className="cb-content-wrap">
							<div className="cb-content">
								{/* Eyebrow */}
								<div ref={eyebrowRef} className="cb-eyebrow" style={{ opacity: 0 }}>
									<span className="cb-eyebrow-dot" aria-hidden="true" />
									<span>{EYEBROW}</span>
								</div>

								{/* DOMINATE H1 — words wrapped in cb-word (white-space:nowrap)
								    so browser can only break BETWEEN words, never mid-word */}
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
												{/* Plain space = natural word-boundary line-break opportunity */}
												{wi < arr.length - 1 && " "}
											</Fragment>
										))}
									</span>
								</h1>

								{/* Mechanism line */}
								<p ref={mechRef} className="cb-mechanism" style={{ opacity: 0 }}>
									{MECHANISM}
								</p>

								{/* Proof line */}
								<p ref={proofRef} className="cb-proof-line" style={{ opacity: 0 }}>
									{PROOF}
								</p>

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
				</div>

				{/* ── Bottom mini plate — small sky-blue tab at frame bottom ── */}
				<div className="hero-bottom-plate" aria-hidden="true" />

			</div>
		</section>
	);
}
