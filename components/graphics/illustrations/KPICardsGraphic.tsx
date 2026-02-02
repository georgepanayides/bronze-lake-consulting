"use client";

import { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type KpiCard = {
	label: string;
	value: string;
	trend: "up" | "down" | "flat";
	caption: string;
};

type KPICardsGraphicProps = {
	heading?: string;
	subheading?: string;
};

function Sparkline({
	trend,
	animate,
}: {
	trend: KpiCard["trend"];
	animate: boolean;
}) {
	const points =
		trend === "up"
			? "0,12 6,10 12,8 18,7 24,5 30,4"
			: trend === "down"
				? "0,4 6,6 12,7 18,9 24,10 30,12"
				: "0,8 6,8 12,8 18,8 24,8 30,8";

	return (
		<svg viewBox="0 0 30 14" className="w-24 h-6" aria-hidden>
			<motion.polyline
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				points={points}
				className="text-bl-bronze-75"
				initial={{ pathLength: 0, opacity: 0 }}
				animate={animate ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
				transition={{ duration: 0.7, ease: "easeInOut" }}
			/>
			<motion.circle
				cx="30"
				cy={trend === "up" ? "4" : trend === "down" ? "12" : "8"}
				r="1.6"
				className="fill-bl-bronze-75"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
				transition={{ duration: 0.35, ease: "easeOut", delay: 0.55 }}
			/>
		</svg>
	);
}

export function KPICardsGraphic({
	heading = "KPI tracking",
	subheading = "Automation-ready metrics",
}: KPICardsGraphicProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true, amount: 0.35 });
	const prefersReducedMotion = useReducedMotion();

	const kpis = useMemo<KpiCard[]>(
		() => [
			{
				label: "Revenue",
				value: "+12%",
				trend: "up",
				caption: "vs last period",
			},
			{
				label: "Conversion",
				value: "+0.8pp",
				trend: "up",
				caption: "quality improving",
			},
			{
				label: "Cycle time",
				value: "-18%",
				trend: "down",
				caption: "faster delivery",
			},
			{
				label: "Accuracy",
				value: "99.2%",
				trend: "flat",
				caption: "stable tracking",
			},
		],
		[]
	);

	return (
		<div className="w-full h-full flex items-center justify-center">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 8, scale: 0.99 }}
				animate={isInView ? { opacity: 1, y: 0, scale: 1 } : undefined}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="relative w-full max-w-[560px] bg-white border border-bl-cream-200 rounded-xl shadow-2xl shadow-bl-cream-200 overflow-hidden"
			>
				<div className="px-5 py-4 border-b border-bl-cream-200 bg-bl-cream-50">
					<p className="text-[10px] font-archivo uppercase tracking-[0.2em] text-bl-navy/60">
						{heading}
					</p>
					<p className="mt-1 text-sm font-libre uppercase tracking-wide text-bl-navy">
						{subheading}
					</p>
				</div>

				<div className="p-6 md:p-7">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{kpis.map((kpi, idx) => (
							<motion.div
								key={kpi.label}
								initial={{ opacity: 0, y: 8 }}
								animate={
									isInView
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 8 }
								}
								transition={{ duration: 0.45, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.08 + idx * 0.06 }}
								className="relative rounded-lg border border-bl-cream-200 bg-white px-4 py-4"
							>
								<div className="flex items-start justify-between gap-4">
									<div>
										<p className="text-[10px] font-archivo uppercase tracking-[0.22em] text-bl-navy/60">
											{kpi.label}
										</p>
										<p className="mt-2 text-xl md:text-2xl font-libre text-bl-navy uppercase tracking-tight">
											{kpi.value}
										</p>
										<p className="mt-1 text-[11px] font-archivo text-bl-navy/60">
											{kpi.caption}
										</p>
									</div>

									<div className="mt-1">
										<Sparkline trend={kpi.trend} animate={isInView} />
									</div>
								</div>

								<motion.div
									aria-hidden
									className="absolute inset-0 pointer-events-none"
									initial={{ opacity: 0 }}
									animate={
										isInView && !prefersReducedMotion
											? { opacity: [0, 0.14, 0] }
											: { opacity: 0 }
									}
									transition={
										isInView && !prefersReducedMotion
											? { duration: 3.4, repeat: Infinity, repeatDelay: 2.0, ease: "easeInOut" }
											: undefined
									}
								>
									<div className="absolute -inset-x-10 top-0 h-full rotate-12 bg-gradient-to-r from-transparent via-bl-cream-200/60 to-transparent" />
								</motion.div>
							</motion.div>
						))}
					</div>

					<div className="mt-6 border-t border-bl-cream-200 pt-4">
						<div className="flex items-center justify-between gap-4">
							<p className="text-[10px] font-archivo uppercase tracking-[0.22em] text-bl-navy/50">
								Updated automatically
							</p>
							<div className="flex items-center gap-2">
								<div className="h-1.5 w-24 bg-bl-cream-200 rounded-full overflow-hidden">
									<motion.div
										className="h-full bg-bl-bronze-75"
										initial={{ width: "12%" }}
										animate={
											isInView && !prefersReducedMotion
												? { width: ["12%", "84%", "62%", "96%"] }
												: { width: "70%" }
										}
										transition={
											isInView && !prefersReducedMotion
												? { duration: 5.2, repeat: Infinity, ease: "easeInOut" }
												: { duration: 0.3 }
										}
									/>
								</div>
								<p className="text-[10px] font-archivo uppercase tracking-[0.22em] text-bl-navy/50">
									Live
								</p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
