"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type PrincipleScrollItem = {
	id: string;
	label: string;
	title: string;
	body: string;
};

type PrinciplesScrollRevealProps = {
	items: PrincipleScrollItem[];
};

function clamp(value: number, min: number, max: number) {
	return Math.min(max, Math.max(min, value));
}

export function PrinciplesScrollReveal({ items }: PrinciplesScrollRevealProps) {
	const prefersReducedMotion = useReducedMotion();
	const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [stepProgress, setStepProgress] = useState(1);

	const activeItem = useMemo(() => items[activeIndex] ?? items[0], [items, activeIndex]);

	useEffect(() => {
		if (items.length === 0) return;

		let rafId = 0;

		const compute = () => {
			const viewH = window.innerHeight;
			const centerY = viewH * 0.5;

			let closestIndex = 0;
			let closestDistance = Number.POSITIVE_INFINITY;

			for (let i = 0; i < items.length; i++) {
				const el = stepRefs.current[i];
				if (!el) continue;
				const rect = el.getBoundingClientRect();
				const mid = rect.top + rect.height * 0.5;
				const distance = Math.abs(mid - centerY);
				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = i;
				}
			}

			setActiveIndex(closestIndex);

			const activeEl = stepRefs.current[closestIndex];
			if (!activeEl) return;
			const rect = activeEl.getBoundingClientRect();
			const progress = clamp((centerY - rect.top) / rect.height, 0, 1);
			setStepProgress(prefersReducedMotion ? 1 : progress);
		};

		const onScroll = () => {
			if (rafId) return;
			rafId = window.requestAnimationFrame(() => {
				rafId = 0;
				compute();
			});
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);

		compute();

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (rafId) window.cancelAnimationFrame(rafId);
		};
	}, [items.length, prefersReducedMotion]);

	if (!activeItem) return null;

	return (
		<div className="border border-bl-cream-200 bg-white">
			{/* Sticky focus card */}
			<div className="sticky top-24 z-10 bg-white/95 backdrop-blur border-b border-bl-cream-200">
				<div className="px-6 md:px-8 py-5">
					<div className="flex items-center justify-between gap-6">
						<p className="text-[10px] font-archivo uppercase tracking-[0.22em] text-bl-navy/60">
							Scroll
						</p>
						<p className="text-[10px] font-archivo uppercase tracking-[0.22em] text-bl-bronze-75">
							0{activeIndex + 1} / 0{items.length}
						</p>
					</div>

					<div className="mt-4 rounded-lg border border-bl-cream-200 bg-bl-cream-50/40 overflow-hidden">
						<div className="px-5 py-6">
							<AnimatePresence mode="wait" initial={false}>
								<motion.div
									key={activeItem.id}
									initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
									transition={{ duration: 0.32, ease: "easeOut" }}
								>
									<p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
										{activeItem.label}
									</p>
									<h3 className="mt-3 text-xl md:text-2xl font-libre text-bl-navy uppercase tracking-tight">
										{activeItem.title}
									</h3>
									<motion.p
										className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed"
										animate={{ opacity: clamp(stepProgress * 1.35, 0, 1), y: 0 }}
										transition={{ duration: 0.12, ease: "linear" }}
									>
										{activeItem.body}
									</motion.p>

									<motion.div
										aria-hidden
										className="mt-7 h-[2px] bg-bl-bronze-75 origin-left"
										animate={{ scaleX: clamp(stepProgress, 0.05, 1) }}
										transition={{ duration: 0.12, ease: "linear" }}
									/>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll steps (compact; drive reveal) */}
			<div className="px-6 md:px-8 py-6">
				<div className="space-y-3">
					{items.map((item, idx) => {
						const isActive = idx === activeIndex;
						return (
							<div
								key={item.id}
								ref={(el) => {
									stepRefs.current[idx] = el;
								}}
								className={
									"rounded-lg border border-bl-cream-200 px-4 py-4 transition-colors " +
									(isActive ? "bg-bl-cream-50" : "bg-white")
								}
								aria-hidden
							>
								<div className="flex items-center justify-between gap-6">
									<p className="text-[10px] font-archivo uppercase tracking-[0.22em] text-bl-navy/60">
										{item.label}
									</p>
									<p className="text-[10px] font-archivo uppercase tracking-[0.22em] text-bl-navy/60">
										{item.title}
									</p>
								</div>

								{/* Per-principle scroll distance (controls how fast it advances) */}
								<div className="h-20 md:h-24" />
								{idx === items.length - 1 ? <div className="h-8" /> : null}
							</div>
						);
					})}
				</div>

				{/* Accessibility: ensure all principle text exists in the DOM */}
				<ul className="sr-only">
					{items.map((item) => (
						<li key={item.id}>
							{item.label} {item.title}. {item.body}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
