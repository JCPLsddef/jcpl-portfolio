"use client";

import { featuredCase } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import CountUpValue from "@/components/motion/CountUpValue";
import Link from "next/link";
import LogoArrowLoop from "../proof/LogoArrowLoop";
import Image from "next/image";

const subStats = [
	{ value: "$900", label: "AD SPEND", sub: "Total campaign spend" },
	{
		value: "46x",
		label: "RETURN ON AD SPEND",
		sub: "$46 back for every $1 spent",
	},
	{ value: "30", label: "DAYS TO REVENUE", sub: "Calendar days from launch" },
];

const stats2 = [
	{
		label: "LOCAL SEO",
		value: "Page 1",
		sub: "Under 60 days. Competitive TX market. Painting contractor.",
	},
	{
		label: "COST PER LEAD",
		value: "$27",
		sub: "Avg cost per qualified inbound call. All active accounts. Q4 2025.",
	},
	{
		label: "TIME TO FIRST CALL",
		value: "11 days",
		sub: "Median across all clients and niches.",
	},
];

export default function FeaturedCaseStudy() {
	return (
		<SectionWrapper id="proof" className="bg-cg-section-a">
			<Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
				<SectionLabel label={featuredCase.label} className="mb-5" />
				<h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto">
					{featuredCase.headline}
				</h2>
			</Reveal>

			{/* Hero Proof Card */}
			<Reveal delay={0.1}>
				<div className="max-w-3xl mx-auto">
					<div className="bg-cg-card border border-[rgba(37,99,235,0.3)] rounded-[14px] px-8 sm:px-10 py-10 sm:py-12 relative overflow-hidden">
						{/* Tag label */}
						<p className="text-[11px] uppercase tracking-[0.16em] text-cg-muted mb-5">
							RV RENTAL COMPANY&nbsp; /&nbsp; TEXAS&nbsp; /&nbsp; GOOGLE ADS
						</p>

						<div className="flex flex-col md:flex-row gap-8 items-start">
							{/* Left — numbers */}
							<div className="flex-1">
								<div className="text-[clamp(40px,8vw,56px)] font-extrabold text-white leading-none mb-2">
									<CountUpValue to={41084.85} prefix="$" durationMs={1400} />
								</div>
								<p className="text-[18px] text-cg-body mb-3">
									in revenue. First 30 days.
								</p>
								<p className="text-[11px] uppercase tracking-[0.14em] text-cg-muted mb-6">
									$900 IN AD SPEND&nbsp;·&nbsp;GOOGLE ADS FUNNEL&nbsp;·&nbsp;30
									DAYS
								</p>

								{/* Divider */}
								<div
									className="h-px max-w-xs mb-6"
									style={{
										background:
											"linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
									}}
									aria-hidden="true"
								/>

								{/* Sub stats row 1 */}
								<div className="flex gap-6 sm:gap-10 mb-4">
									{subStats.map((s) => (
										<div key={s.label} className="text-center">
											<div className="text-[24px] font-extrabold text-cg-accent-lt">
												{s.value}
											</div>
											<div className="text-[10px] uppercase tracking-[0.14em] text-cg-muted mt-0.5">
												{s.label}
											</div>
										</div>
									))}
								</div>

								{/* Callout */}
								<p className="text-[14px] text-cg-accent-lt font-semibold mb-6">
									Every $1 in ad spend returned $46 in revenue. Live account. Last
									verified February 2026.
								</p>

								{/* CTA */}
								<Link
									href="/results"
									className="inline-block border border-[rgba(37,99,235,0.5)] text-cg-body bg-transparent rounded-[8px] px-6 py-2.5 font-semibold text-[15px] hover:bg-cg-accent hover:text-white hover:border-cg-accent transition-all duration-200"
								>
									View All Results →
								</Link>
							</div>

							{/* Right — Google Ads proof image */}
							<div
								className="w-full md:w-[260px] shrink-0 rounded-[10px] flex flex-col items-center justify-center text-center p-6"
								style={{
									background: "rgba(37,99,235,0.06)",
									border: "1px dashed rgba(37,99,235,0.3)",
									minHeight: 200,
								}}
							>
								<Image
									src="https://static.wixstatic.com/media/62f926_c4b40943b49c4e5096d91da9a8ecdf32~mv2.png"
									alt="Google Ads Proof $41,084.85"
									width={220}
									height={120}
									loading="lazy"
									style={{
										borderRadius: 8,
										boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
									}}
								/>
								<p className="text-[12px] text-cg-muted leading-snug mb-1">
									Google Ads Dashboard
								</p>
								<p className="text-[11px] text-cg-dim leading-snug">
									Triple W Rentals — verified
								</p>
								<p className="text-[11px] italic text-cg-dim mt-2">
									Live account. Last verified February 2026.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Reveal>

			{/* CLIENT LOGO LOOP — Upward Arrow Animation */}
			<div className="mt-16 mb-10">
				<LogoArrowLoop />
			</div>
			{/* CLIENTS label and description removed */}

			{/* Stats Row 2 */}
			<Reveal delay={0.2}>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
					{stats2.map(({ label, value, sub }) => (
						<div
							key={label}
							className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
						>
							<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400 mb-2">
								{label}
							</p>
							<p className="text-3xl font-bold text-white">{value}</p>
							<p className="text-sm text-slate-400 mt-2">{sub}</p>
						</div>
					))}
				</div>
			</Reveal>
		</SectionWrapper>
	);
}
