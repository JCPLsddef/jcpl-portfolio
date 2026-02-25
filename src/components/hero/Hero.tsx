

import UnicornHeroBackground from "./UnicornHeroBackground";
import BlurText from "./BlurText";

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden min-h-[90vh]">
			{/* Gradient overlay for readability */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" aria-hidden="true" />
			{/* Unicorn Studio WebGL Background — z-0 */}
			<div
				className="absolute inset-0 z-0 pointer-events-none transition-transform duration-500 md:translate-x-0 md:scale-100"
				aria-hidden="true"
			>
				<div className="w-full h-full translate-x-[28vw] scale-105 md:translate-x-0 md:scale-100">
					<UnicornHeroBackground />
				</div>
			</div>

			{/* Foreground content — z-20, vertically centered */}
			<div className="absolute inset-0 flex items-center left-12 max-w-lg z-20">
				<div className="flex flex-col items-start w-full px-6 sm:px-8">
									{/* Eyebrow, Headline, Subhead with BlurText animation */}
									<div className="flex flex-col gap-2 mb-6">
										<BlurText
											text="For Service Businesses"
											className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-cg-muted"
											animateBy="words"
											delay={60}
										/>
										<BlurText
											text="Your Competitors Are Getting Calls You Should Be Getting."
											className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-[-0.025em] text-white mb-2"
											animateBy="words"
											delay={80}
										/>
										<BlurText
											text="I build the complete system: conversion website, Google Ads, and AI automation, so your phone rings with buyers who already trust you."
											className="text-[17px] text-cg-body leading-[1.65] mb-2 max-w-[36ch]"
											animateBy="words"
											delay={100}
										/>
									</div>
					{/* CTA Block */}
					<div className="flex flex-col gap-3 w-full sm:flex-row sm:flex-nowrap sm:items-center sm:w-auto mb-5">
						<a
							href="/apply"
							className="w-full sm:w-auto bg-cg-accent text-white font-semibold text-[15px] px-7 py-[14px] rounded-[10px] whitespace-nowrap transition-all duration-200 hover:bg-cg-accent-hov shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_28px_rgba(37,99,235,0.5)] text-center inline-flex items-center justify-center"
						>
							Apply for Growth Partnership →
						</a>
						<a
							href="/results"
							className="w-full sm:w-auto bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.3)] text-white font-medium text-[15px] px-6 py-[14px] rounded-[10px] whitespace-nowrap transition-all duration-200 hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.5)] text-center inline-flex items-center justify-center"
						>
							  See the $41,084.85 Result
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
