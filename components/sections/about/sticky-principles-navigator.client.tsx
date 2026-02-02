"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type StickyPrincipleItem = {
	id: string;
	label: string;
	title: string;
	body: string;
};

type StickyPrinciplesNavigatorProps = {
	items: StickyPrincipleItem[];
};

export function StickyPrinciplesNavigator({ items }: StickyPrinciplesNavigatorProps) {
	const prefersReducedMotion = useReducedMotion();
	const [activeId, setActiveId] = useState(items[0]?.id ?? "");
	const ids = useMemo(() => items.map((i) => i.id), [items]);
	const observerRef = useRef<IntersectionObserver | null>(null);

	const activeItem = useMemo(
		() => items.find((i) => i.id === activeId) ?? items[0],
		[items, activeId]
	);

	useEffect(() => {
		if (ids.length === 0) return;

		const elements = ids
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => Boolean(el));

		if (elements.length === 0) return;

		observerRef.current?.disconnect();

		observerRef.current = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

				const top = visible[0];
				if (!top?.target) return;

				const id = (top.target as HTMLElement).id;
				if (id) setActiveId(id);
			},
			{
				root: null,
				threshold: [0.15, 0.35, 0.6],
				rootMargin: "-35% 0px -55% 0px",
			}
		);

		for (const el of elements) observerRef.current.observe(el);

		return () => {
			observerRef.current?.disconnect();
			observerRef.current = null;
		};
	}, [ids]);

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (!el) return;
		setActiveId(id);
		el.scrollIntoView({
			behavior: prefersReducedMotion ? "auto" : "smooth",
			block: "start",
		});
	}

	return (
		<div className="border border-bl-cream-200 bg-white">
			<div className="sticky top-24 z-10 bg-white/95 backdrop-blur">
				<div className="px-6 md:px-8 py-5 border-b border-bl-cream-200">
					<p className="text-[10px] font-archivo uppercase tracking-[0.2em] text-bl-navy/60">
						Navigate
					</p>
					<nav
						aria-label="Principles"
						className="mt-4 flex gap-2 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0"
					>
						{items.map((item) => {
							const isActive = item.id === activeId;
							return (
								<button
									key={item.id}
									type="button"
									onClick={() => scrollTo(item.id)}
									aria-current={isActive ? "true" : undefined}
									className={
										"relative flex-none rounded-lg border border-bl-cream-200 px-4 py-3 text-left transition-colors " +
										(isActive ? "bg-bl-cream-50" : "bg-white hover:bg-bl-cream-50/60")
									}
								>
									<span className="block text-[10px] font-archivo uppercase tracking-[0.22em] text-bl-navy/60">
										{item.label}
									</span>
									<span className="mt-1 block text-xs md:text-sm font-libre uppercase tracking-wide text-bl-navy">
										{item.title}
									</span>

									{isActive ? (
										<motion.span
											layoutId="about-principles-active"
											className="absolute inset-x-2 -bottom-[1px] h-[2px] bg-bl-bronze-75"
											transition={{ duration: 0.25, ease: "easeOut" }}
										/>
									) : null}
								</button>
							);
						})}
					</nav>
				</div>

				<div className="px-6 md:px-8 py-7 border-b border-bl-cream-200 bg-bl-cream-50/40">
					<div className="max-w-2xl">
						<AnimatePresence mode="wait" initial={false}>
							<motion.div
								key={activeItem?.id ?? "empty"}
								initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
								transition={{ duration: 0.28, ease: "easeOut" }}
							>
								<div className="flex items-center justify-between gap-6">
									<p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
										{activeItem?.label}
									</p>
									<p className="text-xs font-archivo uppercase tracking-widest text-bl-bronze-75">
										In focus
									</p>
								</div>
								<h3 className="mt-4 text-xl md:text-2xl font-libre text-bl-navy uppercase tracking-tight">
									{activeItem?.title}
								</h3>
								<p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
									{activeItem?.body}
								</p>
								<motion.div
									aria-hidden
									className="mt-7 h-[2px] bg-bl-bronze-75"
									initial={{ width: "0%" }}
									animate={{ width: "100%" }}
									transition={{ duration: 0.45, ease: "easeOut" }}
								/>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>

			<div className="px-6 md:px-8 py-6 space-y-3">
				{items.map((item, idx) => {
					const isActive = item.id === activeId;
					return (
						<div
							key={item.id}
							id={item.id}
							className={
								"scroll-mt-48 rounded-lg border border-bl-cream-200 px-4 py-4 transition-colors " +
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

							{/* Compact scroll distance per principle */}
							<div className="h-10 md:h-12" />
							{idx === items.length - 1 ? <div className="h-6" /> : null}
						</div>
					);
				})}
			</div>
		</div>
	);
}
