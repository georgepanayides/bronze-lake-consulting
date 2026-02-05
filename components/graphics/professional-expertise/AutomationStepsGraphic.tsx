"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
	GitMerge,
	SlidersHorizontal,
	Zap,
	type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type Step = {
	id: string;
	title: string;
	detail: string;
	icon: LucideIcon;
};

const STEPS: Step[] = [
	{ id: "step1", title: "STEP 01", detail: "TRIGGER", icon: Zap },
	{ id: "step2", title: "STEP 02", detail: "ROUTE", icon: GitMerge },
	{ id: "step3", title: "STEP 03", detail: "AUTOMATE", icon: SlidersHorizontal },
];

export function AutomationStepsGraphic() {
	const prefersReducedMotion = useReducedMotion() ?? false;

	const containerVariants: Variants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", stiffness: 70, damping: 18 },
		},
	};

	const flowVariants: Variants = {
		hidden: {},
		visible: {
			transition: prefersReducedMotion
				? { duration: 0 }
				: { staggerChildren: 0.14, delayChildren: 0.08 },
		},
	};

	const nodeVariants: Variants = {
		hidden: { opacity: 0, y: 16, scale: 0.96 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: prefersReducedMotion
				? { duration: 0 }
				: { type: "spring", stiffness: 260, damping: 22, mass: 0.6 },
		},
	};

	const connectorVariants: Variants = {
		hidden: { opacity: 0, y: 8 },
		visible: {
			opacity: 1,
			y: 0,
			transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" },
		},
	};

	return (
		<div className="w-300 h-full flex items-center justify-center overflow-hidden relative">
			<motion.div
				className="absolute left-0 top-6 h-[140%] md:top-8 w-200 h-full border border-bl-cream-200 rounded-xl"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.35 }}
			>
				<div className="relative w-full h-full rounded-xl border-bl-cream-200 bg-bl-cream-50/60 overflow-hidden">
					{/* Grid background */}
					<div
						aria-hidden="true"
						className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle,var(--color-bl-navy)_1px,transparent_1px)] bg-[size:18px_18px]"
					/>
					<div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/70" />

					{/* Simple vertical flow */}
					<div className="absolute inset-0 flex items-center justify-center">
							<motion.div className="relative w-full max-w-[380px] px-6" variants={flowVariants}>
								<motion.div variants={nodeVariants}>
								<AutomationNode
									tone="start"
									icon={Zap}
									title="START"
									detail="WATCH • TRIGGER"                                    
								/>
							</motion.div>

								<motion.div variants={connectorVariants}>
									<Connector prefersReducedMotion={prefersReducedMotion} />
								</motion.div>

							<motion.div variants={nodeVariants}>
								<AutomationNode
									tone="step"
									icon={STEPS[0].icon}
									title={STEPS[0].title}
									detail={STEPS[0].detail}
								/>
							</motion.div>

								<motion.div variants={connectorVariants}>
									<Connector prefersReducedMotion={prefersReducedMotion} />
								</motion.div>

							<motion.div variants={nodeVariants}>
								<AutomationNode
									tone="step"
									icon={STEPS[1].icon}
									title={STEPS[1].title}
									detail={STEPS[1].detail}
								/>
							</motion.div>

								<motion.div variants={connectorVariants}>
									<Connector prefersReducedMotion={prefersReducedMotion} />
								</motion.div>

							<motion.div variants={nodeVariants}>
								<AutomationNode
									tone="step"
									icon={STEPS[2].icon}
									title={STEPS[2].title}
									detail={STEPS[2].detail}
								/>
							</motion.div>
						</motion.div>
					</div>

					{/* Soft vignette for depth */}
					<div
						aria-hidden="true"
						className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(243,235,217,0.8)]"
					/>
				</div>
			</motion.div>
		</div>
	);
}

function AutomationNode({
	icon: Icon,
	title,
	detail,
	tone = "default",
}: {
	icon: LucideIcon;
	title: string;
	detail: string;
	tone?: "default" | "start" | "step";
}) {
	const badgeClassName =
		tone === "start" ? "bg-bl-bronze-50/35" : tone === "step" ? "bg-white" : "bg-white";

	const ringClassName = tone === "start" ? "ring-2 ring-bl-bronze-75/25" : "ring-1 ring-bl-cream-200";

	const iconWrapClassName =
		tone === "start"
			? "bg-bl-bronze-50/30"
			: "bg-bl-cream-50/60";

	return (
		<div className={cn("rounded-xl border border-bl-cream-200 shadow-lg shadow-bl-bronze-0/20", badgeClassName, ringClassName)}>
			<div className="flex items-center gap-3 px-4 py-3">
				<div className={cn("h-10 w-10 rounded-full border border-bl-cream-200 flex items-center justify-center", iconWrapClassName)}>
					<Icon className={cn("h-5 w-5", tone === "start" ? "text-bl-bronze-75" : "text-bl-navy/60")} aria-hidden="true" />
				</div>
				<div className="min-w-0">
					<p className="text-[11px] font-libre uppercase tracking-wide text-bl-navy whitespace-nowrap">{title}</p>
					<p className="mt-1 text-[10px] font-archivo uppercase tracking-widest text-bl-navy/50 whitespace-nowrap">
						{detail}
					</p>
				</div>
				<div className="ml-auto hidden sm:flex items-center gap-2">
					<div className="h-2 w-2 rounded-full bg-bl-bronze-75" aria-hidden="true" />
					<div className="h-2 w-2 rounded-full bg-bl-cream-200" aria-hidden="true" />
				</div>
			</div>
		</div>
	);
}

function Connector({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
	return (
		<div className="relative flex items-center justify-center py-4">
			<div aria-hidden="true" className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-bl-cream-200" />
			<div
				aria-hidden="true"
				className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 border-l border-dashed border-bl-navy/20"
			/>

			<motion.div
				variants={
					prefersReducedMotion
						? undefined
						: {
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
						}
				}
				initial="hidden"
				animate="visible"
				className="relative"
			>
				<motion.div
					aria-hidden="true"
					animate={
						prefersReducedMotion
							? undefined
							: { scale: [1, 1.06, 1], opacity: [0.92, 1, 0.92] }
					}
					transition={
						prefersReducedMotion
							? undefined
							: { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
					}
					className="h-9 w-9 rounded-full border border-bl-cream-200 bg-white flex items-center justify-center shadow-sm"
				>
					<div className="h-7 w-7 rounded-full border border-dashed border-bl-cream-200 flex items-center justify-center">
						<span className="text-sm font-archivo text-bl-bronze-75 leading-none">+</span>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
