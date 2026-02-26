"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import UnicornHeroBackground from "./UnicornHeroBackground";
import TextSplitter from "./TextSplitter";
import { prefersReducedMotion } from "@/lib/motion";
import "./hero.css";

/* ═══════════════════════════════════════════════════
   COPY — conversion-optimized, outcome-driven
   ═══════════════════════════════════════════════════ */
const EYEBROW = "Growth Architecture™";
const HEADLINE = "DOMINATE YOUR MARKET";
const SUBHEADLINE =
	"I build one complete system: a conversion website, Google Ads targeting people ready to hire today, and AI that qualifies leads before your phone rings.";

const CTA_PRIMARY = {
	label: "Apply. I\u2019ll review you in 24h.",
	href: "/apply",
};
const CTA_SECONDARY = {
	label: "See the $41,084.85 Result",
	href: "/results",
};

/* ═══════════════════════════════════════════════════
   COMPONENT — Command Bridge Hero
   3-Layer: Unicorn BG → Vignette overlay → Content
   ═══════════════════════════════════════════════════ */
export default function Hero() {
	const sectionRef = useRef<HTMLElement>(null);
	const frameRef = useRef<HTMLDivElement>(null);
	const borderRef = useRef<HTMLDivElement>(null);
	const headlineRef = useRef<HTMLSpanElement>(null);
	const eyebrowRef = useRef<HTMLDivElement>(null);
	const subRef = useRef<HTMLParagraphElement>(null);
	const ctasRef = useRef<HTMLDivElement>(null);
	const proofRef = useRef<HTMLDivElement>(null);
	const bgLayerRef = useRef<HTMLDivElement>(null);
	const contentLayerRef = useRef<HTMLDivElement>(null);

	/* ── mousemove parallax (bg: 6px, content: 3px) ── */
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
			subRef.current,
			ctasRef.current,
			proofRef.current,
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

		// 1. Frame raises in (0.8s)
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

		// 4. Headline chars stagger (0.035s per char)
		if (headlineRef.current) {
			const chars = headlineRef.current.querySelectorAll("[data-char]");
			if (chars.length) {
				tl.fromTo(
					chars,
					{ opacity: 0, y: 40 },
					{ opacity: 1, y: 0, duration: 0.7, stagger: 0.035 },
					0.45
				);
			}
		}

		// 5. Subheadline fades in
		if (subRef.current) {
			tl.fromTo(
				subRef.current,
				{ opacity: 0, y: 18 },
				{ opacity: 1, y: 0, duration: 0.65 },
				0.9
			);
		}

		// 6. CTAs slide in last
		if (ctasRef.current) {
			const buttons = ctasRef.current.querySelectorAll("a");
			if (buttons.length) {
				tl.fromTo(
					buttons,
					{ opacity: 0, y: 16 },
					{ opacity: 1, y: 0, duration: 0.55, stagger: 0.1 },
					1.1
				);
			}
		}

		// 7. Proof
		if (proofRef.current) {
			tl.fromTo(
				proofRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5 },
				1.4
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
			{/* ── Ambient gradient drift ── */}
			<div className="cb-ambient" aria-hidden="true" />

			{/* ═══════════════════════════════════════════
          THE COMMAND BRIDGE FRAME
          ═══════════════════════════════════════════ */}
			<div ref={frameRef} className="cb-frame" style={{ opacity: 0 }}>
				{/* Border highlight sweep */}
				<div
					ref={borderRef}
					className="cb-border-sweep"
					aria-hidden="true"
					style={{ opacity: 0 }}
				/>

				{/* Frame corner labels (Avatar micro-nav) */}
				<div className="cb-frame-label cb-frame-label--tl" aria-hidden="true">
					SYS_CORE // 01
				</div>
				<div className="cb-frame-label cb-frame-label--tr" aria-hidden="true">
					AUTH_GATE: ACTIVE
				</div>
				<div className="cb-frame-label cb-frame-label--bl" aria-hidden="true">
					JCPL.BUILD
				</div>
				<div className="cb-frame-label cb-frame-label--br" aria-hidden="true">
					v2.0
				</div>

				{/* Inner surface */}
				<div className="cb-surface">
					{/* ═══ LAYER 1 — Unicorn Studio WebGL background ═══ */}
					<div
						ref={bgLayerRef}
						className="cb-layer cb-layer--bg"
						aria-hidden="true"
					>
						<UnicornHeroBackground />
					</div>

					{/* ═══ LAYER 2 — Vignette + gradient overlay ═══ */}
					<div className="cb-layer cb-vignette" aria-hidden="true" />
					<div className="cb-layer cb-grain" aria-hidden="true" />

					{/* ═══ LAYER 3 — Content (with parallax) ═══ */}
					<div ref={contentLayerRef} className="cb-content-wrap">
						<div className="cb-content">
							{/* Eyebrow */}
							<div
								ref={eyebrowRef}
								className="cb-eyebrow"
								style={{ opacity: 0 }}
							>
								<span className="cb-eyebrow-dot" aria-hidden="true" />
								<span>{EYEBROW}</span>
							</div>

							{/* DOMINATE H1 */}
							<h1 className="cb-headline">
								<TextSplitter
									ref={headlineRef}
									text={HEADLINE}
									by="chars"
									charClassName="cb-char"
								/>
							</h1>

							{/* Subheadline */}
							<p ref={subRef} className="cb-sub" style={{ opacity: 0 }}>
								{SUBHEADLINE}
							</p>

							{/* CTAs */}
							<div ref={ctasRef} className="cb-ctas" style={{ opacity: 0 }}>
								<a href={CTA_PRIMARY.href} className="cb-cta cb-cta--primary">
									{CTA_PRIMARY.label}
									<span className="cb-cta-arrow" aria-hidden="true">
										→
									</span>
								</a>
								<a
									href={CTA_SECONDARY.href}
									className="cb-cta cb-cta--secondary"
								>
									{CTA_SECONDARY.label}
								</a>
							</div>

							{/* Proof anchor */}
							<div
								ref={proofRef}
								className="cb-proof"
								style={{ opacity: 0 }}
							>
								<span className="cb-proof-item">
									Last result: $900 ad spend → $41,084.85 revenue
								</span>
								<span className="cb-proof-sep">·</span>
								<span className="cb-proof-item">
									Texas RV company. 30 days.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
