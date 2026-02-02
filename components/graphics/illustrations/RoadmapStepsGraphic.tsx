"use client";

import { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type RoadmapStep = {
	label: string;
	title: string;
	caption: string;
};

type RoadmapStepsGraphicProps = {
	heading?: string;
	subheading?: string;
};

export function RoadmapStepsGraphic({
	heading = "Growth planning",
	subheading = "From insight to execution",
}: RoadmapStepsGraphicProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true, amount: 0.35 });
	const prefersReducedMotion = useReducedMotion();

	const steps = useMemo<RoadmapStep[]>(
		() => [
			{
				label: "01",
				title: "Diagnose",
				caption: "Current performance + constraints",
			},
			{
				label: "02",
				title: "Prioritise",
				caption: "Highest-impact levers first",
			},
			{
				label: "03",
				title: "Plan",
				caption: "Initiatives, owners, timeline",
			},
			{
				label: "04",
				title: "Measure",
				caption: "KPIs + feedback loops",
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
					<div className="relative">
						{/* Rail */}
						<div className="absolute left-[14px] top-3 bottom-3 w-px bg-bl-cream-200" />
						<motion.div
							aria-hidden
							className="absolute left-[14px] top-3 w-px bg-bl-bronze-75 origin-top"
							initial={{ scaleY: 0 }}
							animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
							transition={{ duration: 0.9, ease: "easeInOut" }}
							style={{ height: "calc(100% - 24px)" }}
						/>

						<div className="space-y-4">
							{steps.map((step, idx) => (
								<motion.div
									key={step.label}
									initial={{ opacity: 0, x: -8 }}
									animate={
										isInView
											? { opacity: 1, x: 0 }
											: { opacity: 0, x: -8 }
									}
									transition={{ duration: 0.45, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.1 + idx * 0.08 }}
									className="relative pl-10"
								>
									<div className="absolute left-0 top-1.5">
										<div className="w-7 h-7 rounded-full bg-white border border-bl-cream-200 flex items-center justify-center">
											<div className="w-3 h-3 rounded-full bg-bl-cream-50 border border-bl-cream-200" />
										</div>
									</div>

									<div className="rounded-lg border border-bl-cream-200 bg-white px-4 py-4">
										<div className="flex items-center justify-between gap-4">
											<p className="text-[10px] font-archivo uppercase tracking-[0.22em] text-bl-navy/60">
												{step.label}
											</p>
											<p className="text-[10px] font-archivo uppercase tracking-[0.22em] text-bl-bronze-75">
												Step
											</p>
										</div>
										<p className="mt-2 text-sm md:text-base font-libre uppercase tracking-wide text-bl-navy">
											{step.title}
										</p>
										<p className="mt-1 text-[11px] md:text-xs font-archivo text-bl-navy/70">
											{step.caption}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
