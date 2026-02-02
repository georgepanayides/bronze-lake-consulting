"use client";

import { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";

type IDEGraphicProps = {
	title?: string;
	subtitle?: string;
};

export function IDEGraphic({
	title = "Custom Development",
	subtitle = "Typing…",
}: IDEGraphicProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true, amount: 0.35 });
	const prefersReducedMotion = useReducedMotion();

	const lines = useMemo(
		() => [
			"export function buildReportingEngine(input) {",
			"  const kpis = deriveKPIs(input);",
			"  const alerts = detectAnomalies(kpis);",
			"  return { kpis, alerts };",
			"}",
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
				className="relative w-full max-w-[520px] bg-white border border-bl-cream-200 rounded-xl shadow-2xl shadow-bl-cream-200 overflow-hidden"
			>
				<div className="flex items-center justify-between px-4 py-3 border-b border-bl-cream-200 bg-bl-cream-50">
					<div className="flex items-center gap-3 min-w-0">
						<Image
							src="/icons/bl-brand-icon.svg"
							alt=""
							width={220}
							height={160}
							className="w-8 h-6 -rotate-12 opacity-70"
						/>
						<div className="min-w-0">
							<p className="text-[10px] font-archivo uppercase tracking-[0.2em] text-bl-navy/60 truncate">
								{title}
							</p>
							<p className="text-xs font-libre uppercase tracking-wide text-bl-navy truncate">
								{subtitle}
							</p>
						</div>
					</div>

					<div className="flex items-center gap-2 opacity-40">
						<div className="w-2.5 h-2.5 rounded-full bg-bl-navy/20" />
						<div className="w-2.5 h-2.5 rounded-full bg-bl-navy/20" />
						<div className="w-2.5 h-2.5 rounded-full bg-bl-navy/20" />
					</div>
				</div>

				<div className="relative p-4 md:p-6 bg-white">
					<div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(var(--color-bl-navy)_1px,transparent_1px)] [background-size:20px_20px]" />

					<div className="relative grid grid-cols-[auto_1fr] gap-x-4">
						<div className="select-none text-right">
							{lines.map((_, i) => (
								<p
									key={i}
									className="font-archivo text-[11px] md:text-xs leading-6 text-bl-navy/30"
								>
									{i + 1}
								</p>
							))}
						</div>

						<div className="font-archivo text-[11px] md:text-xs leading-6 text-bl-navy/80">
							{lines.map((text, i) => (
								<motion.p
									key={text}
									initial={{ opacity: 0, y: 2 }}
									animate={
										isInView
											? { opacity: 1, y: 0 }
											: { opacity: 0, y: 2 }
									}
									transition={{
										duration: 0.35,
										delay: prefersReducedMotion ? 0 : 0.1 + i * 0.08,
										ease: "easeOut",
									}}
									className="whitespace-pre"
								>
									{text}
								</motion.p>
							))}

							<motion.div
								aria-hidden
								className="mt-1 h-4 w-[2px] bg-bl-bronze-75"
								animate={
									prefersReducedMotion
										? { opacity: 0.6 }
										: { opacity: [0.15, 0.85, 0.15] }
								}
								transition={
									prefersReducedMotion
										? undefined
										: { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
								}
							/>
						</div>
					</div>

					<div className="relative mt-6 border-t border-bl-cream-200 pt-4">
						<div className="flex items-center justify-between">
							<p className="text-[10px] font-archivo uppercase tracking-[0.2em] text-bl-navy/50">
								Build • Test • Deploy
							</p>
							<div className="flex items-center gap-2">
								<div className="h-1.5 w-24 bg-bl-cream-200 rounded-full overflow-hidden">
									<motion.div
										className="h-full bg-bl-bronze-75"
										initial={{ width: "10%" }}
										animate={
											isInView && !prefersReducedMotion
												? { width: ["10%", "82%", "58%", "92%"] }
												: { width: "62%" }
										}
										transition={
											isInView && !prefersReducedMotion
												? { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
												: { duration: 0.4 }
										}
									/>
								</div>
								<p className="text-[10px] font-archivo uppercase tracking-[0.2em] text-bl-navy/50">
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
