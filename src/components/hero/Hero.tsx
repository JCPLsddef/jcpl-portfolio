"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import HeroWebGLBackground from "./HeroWebGLBackground";
import { prefersReducedMotion } from "@/lib/motion";
import styles from "./HeroAvatarFrame.module.css";
import "./hero.css";

export default function Hero() {
	const sectionRef = useRef<HTMLElement>(null);
	const frameRef = useRef<HTMLDivElement>(null);
	const headlineRef = useRef<HTMLDivElement>(null);
	const ctaRef = useRef<HTMLDivElement>(null);
	const bgLayerRef = useRef<HTMLDivElement>(null);
	const contentLayerRef = useRef<HTMLDivElement>(null);

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

	useEffect(() => {
		const reduced = prefersReducedMotion();
		const allEls = [headlineRef.current, ctaRef.current].filter(Boolean);

		if (reduced) {
			allEls.forEach((el) => gsap.set(el, { opacity: 1, y: 0 }));
			return;
		}

		const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

		if (frameRef.current) {
			gsap.set(frameRef.current, { opacity: 1 });
		}

		if (headlineRef.current) {
			tl.fromTo(
				headlineRef.current,
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.8 },
				0
			);
		}

		if (ctaRef.current) {
			tl.fromTo(
				ctaRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5 },
				0.3
			);
		}

		return () => { tl.kill(); };
	}, []);

	return (
		<section
			ref={sectionRef}
			className="cb"
			aria-label="Hero - Growth Infrastructure"
			style={{ minHeight: "90vh" }}
		>
			<div className="cb-ambient" aria-hidden="true" />

			<div ref={frameRef} className={`cb-frame ${styles.frame}`}>
				<div ref={bgLayerRef} className="cb-layer cb-layer--bg" aria-hidden="true">
					<HeroWebGLBackground />
				</div>
				<div className="cb-layer cb-overlay-top" aria-hidden="true" />
				<div className="cb-layer cb-overlay-vignette" aria-hidden="true" />
				<div className="cb-layer cb-grain" aria-hidden="true" />

				<div ref={contentLayerRef} className="cb-content-wrap">
					<div className="cb-content" style={{ maxWidth: 720 }}>
						<p
							style={{
								fontSize: "0.7rem",
								letterSpacing: "0.15em",
								textTransform: "uppercase",
								color: "#f97316",
								margin: 0,
								marginBottom: 12,
							}}
						>
							GROWTH INFRASTRUCTURE FOR LOCAL SERVICE BUSINESSES
						</p>

						<p
							style={{
								fontSize: "0.9rem",
								color: "#64748b",
								margin: "0 0 16px",
							}}
						>
							You got my email. Here is the proof behind it.
						</p>

						<h1
							ref={headlineRef}
							className="cb-headline"
							style={{
								opacity: 0,
								fontSize: "clamp(2rem, 5vw, 3rem)",
								fontWeight: 700,
								color: "#ffffff",
								lineHeight: 1.2,
								marginBottom: 16,
							}}
						>
							$41,085 in revenue from $900 in ad spend. In 30 days.
						</h1>

						<p
							style={{
								fontSize: "1.125rem",
								color: "#94a3b8",
								maxWidth: 640,
								margin: "0 auto 24px",
								textAlign: "center",
								lineHeight: 1.6,
							}}
						>
							I build the full growth system: site, ads, SEO, call tracking. So
							local service businesses stop paying for clicks and start getting
							booked calls. One person. One pipeline.
						</p>

						<div ref={ctaRef} className="cb-cta-wrap" style={{ opacity: 0 }}>
							<a href="#book-call" className="cb-cta cb-cta--primary">
								Book a 20-Minute Diagnostic Call
								<span className="cb-cta-arrow" aria-hidden="true">→</span>
							</a>
							<p
								className="cb-microtrust"
								style={{
									fontSize: "0.875rem",
									color: "#64748b",
									textAlign: "center",
									marginTop: 8,
									marginBottom: 0,
								}}
							>
								If I cannot move the needle, I will tell you on the call. Before
								you pay anything.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
