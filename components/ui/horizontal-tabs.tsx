"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export type CapabilityTab = {
	id: string;
	title: string;
	description: string;
};

type CapabilitiesTabsProps = {
	tabs: CapabilityTab[];
	ariaLabel?: string;
};

export function CapabilitiesTabs({
	tabs,
	ariaLabel = "Digital growth capabilities",
}: CapabilitiesTabsProps) {
	const prefersReducedMotion = useReducedMotion() ?? false;
	const [activeId, setActiveId] = useState(() => tabs[0]?.id ?? "");
	const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

	const activeIndex = useMemo(() => {
		if (!tabs.length) return 0;
		const index = tabs.findIndex((t) => t.id === activeId);
		return index >= 0 ? index : 0;
	}, [tabs, activeId]);
	const activeTab = useMemo(() => tabs[activeIndex] ?? tabs[0], [tabs, activeIndex]);

	if (!tabs.length) return null;

	const tabId = (id: string) => `cap-tab-${id}`;
	const panelId = (id: string) => `cap-panel-${id}`;

	return (
		<div className="grid grid-cols-1">
			<nav
				role="tablist"
				aria-label={ariaLabel}
				className="w-full"
			>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-px overflow-hidden bg-bl-cream-200 border-b border-bl-cream-200">
					{tabs.map((tab, index) => {
						const isActive = tab.id === activeTab?.id;

						return (
							<button
								key={tab.id}
								type="button"
								ref={(el) => {
									buttonRefs.current[index] = el;
								}}
								id={tabId(tab.id)}
								role="tab"
								aria-selected={isActive}
								aria-controls={panelId(tab.id)}
								tabIndex={isActive ? 0 : -1}
								onClick={() => setActiveId(tab.id)}
								className={
									"group relative w-full bg-white px-4 py-4 text-center transition-colors cursor-pointer overflow-hidden " +
									(isActive ? "bg-bl-cream-200" : "hover:bg-bl-cream-100")
								}
							>
								<span
									aria-hidden
									className={
										"pointer-events-none absolute inset-x-0 bottom-0 h-px bg-bl-bronze-75 transition-opacity " +
										(isActive ? "opacity-100" : "opacity-0")
									}
								/>
								{isActive ? (
									<Image
										src="/icons/bl-brand-icon.svg"
										alt=""
										width={260}
										height={260}
										aria-hidden
										className="pointer-events-none absolute right-4 top-5 z-0 h-48 w-48 -translate-y-1/2 rotate-[-18deg] opacity-10 md:right-5"
									/>
								) : null}
								<p className="relative z-10 text-[11px] md:text-xs font-archivo uppercase tracking-widest text-bl-navy">
									{tab.title}
								</p>
							</button>
						);
					})}
				</div>
			</nav>

			<div className="w-full">
				<AnimatePresence mode="wait" initial={false}>
					<motion.article
						key={activeTab?.id}
						role="tabpanel"
						id={panelId(activeTab?.id ?? "")}
						aria-labelledby={tabId(activeTab?.id ?? "")}
						initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
						transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.28, ease: "easeOut" }}
						className="bg-white p-6 md:p-10 text-center"
					>
						<header>
							<h3 className="text-xl md:text-2xl font-libre text-bl-navy uppercase tracking-wide">
								{activeTab?.title}
							</h3>
							<p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
								{activeTab?.description}
							</p>
						</header>

						<div className="mt-6 md:mt-8">
							<TabAnimation tabId={activeTab?.id ?? ""} prefersReducedMotion={prefersReducedMotion} />
						</div>
					</motion.article>
				</AnimatePresence>
			</div>
		</div>
	);
}

function TabAnimation({
	tabId,
	prefersReducedMotion,
}: {
	tabId: string;
	prefersReducedMotion: boolean;
}) {
	return (
		<div className="relative h-44 md:h-60 w-full overflow-hidden rounded-md border border-bl-cream-200 bg-bl-cream-50">
			<div className="absolute inset-0 pointer-events-none opacity-[0.55] bg-[radial-gradient(var(--color-bl-cream-200)_1px,transparent_1px)] [background-size:22px_22px]" />

			<motion.div
				key={tabId}
				initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }}
				className="absolute inset-0"
			>
				{tabId === "seo" ? (
					<SearchPulse prefersReducedMotion={prefersReducedMotion} />
				) : tabId === "paid" ? (
					<FunnelPulse prefersReducedMotion={prefersReducedMotion} />
				) : tabId === "cro" ? (
					<ChartRise prefersReducedMotion={prefersReducedMotion} />
				) : tabId === "email" ? (
					<FlowNodes prefersReducedMotion={prefersReducedMotion} />
				) : tabId === "tracking" ? (
					<KpiGrid prefersReducedMotion={prefersReducedMotion} />
				) : (
					<EndToEnd prefersReducedMotion={prefersReducedMotion} />
				)}
			</motion.div>
		</div>
	);
}

function EndToEnd({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
	return (
		<div className="absolute inset-0 flex items-center justify-center">
			<div className="grid grid-cols-3 gap-3 md:gap-4 px-6">
				{["DISCOVER", "EXECUTE", "MEASURE"].map((label, i) => (
					<motion.div
						key={label}
						initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={prefersReducedMotion ? { duration: 0 } : { delay: i * 0.08, duration: 0.35, ease: "easeOut" }}
						className="rounded-md border border-bl-cream-200 bg-white/85 backdrop-blur-sm px-4 py-3"
					>
						<p className="text-[10px] md:text-xs font-archivo uppercase tracking-widest text-bl-navy/70">
							{label}
						</p>
						<div className="mt-2 h-1.5 w-12 rounded-full bg-bl-cream-200 overflow-hidden">
							<motion.div
								initial={{ width: "0%" }}
								animate={{ width: "70%" }}
								transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.2 + i * 0.08, duration: 0.6, ease: "easeOut" }}
								className="h-full bg-bl-bronze-75"
							/>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}

function SearchPulse({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
	return (
		<div className="absolute inset-0 flex items-center justify-center">
			<div className="relative w-[280px] max-w-[86%]">
				<div className="rounded-md border border-bl-cream-200 bg-white/85 backdrop-blur-sm px-4 py-3">
					<p className="text-[10px] font-archivo uppercase tracking-widest text-bl-navy/60">SEARCH INTENT</p>
					<div className="mt-2 h-2 w-full rounded-full bg-bl-cream-200 overflow-hidden">
						<motion.div
							className="h-full bg-bl-bronze-75"
							initial={{ width: "28%" }}
							animate={prefersReducedMotion ? { width: "62%" } : { width: ["28%", "68%", "62%"] }}
							transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.4 }}
						/>
					</div>
				</div>

				<motion.div
					aria-hidden
					className="absolute -right-5 -top-5 h-10 w-10 rounded-full border border-bl-cream-200 bg-white"
					initial={{ scale: 1, opacity: 0.7 }}
					animate={prefersReducedMotion ? { scale: 1, opacity: 0.7 } : { scale: [1, 1.06, 1], opacity: [0.55, 0.85, 0.55] }}
					transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.3, ease: "easeInOut", repeat: Infinity }}
				/>
			</div>
		</div>
	);
}

function FunnelPulse({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
	return (
		<div className="absolute inset-0 flex items-center justify-center">
			<div className="w-[320px] max-w-[90%]">
				<div className="grid grid-cols-3 gap-3">
					{[
						{ label: "CLICKS", w: "w-[90%]" },
						{ label: "LEADS", w: "w-[62%]" },
						{ label: "WINS", w: "w-[38%]" },
					].map((item, i) => (
						<div
							key={item.label}
							className="rounded-md border border-bl-cream-200 bg-white/85 backdrop-blur-sm px-4 py-3"
						>
							<p className="text-[10px] font-archivo uppercase tracking-widest text-bl-navy/60">{item.label}</p>
							<div className="mt-2 h-2 w-full rounded-full bg-bl-cream-200 overflow-hidden">
								<motion.div
									className={"h-full bg-bl-bronze-75 " + item.w}
									initial={{ x: "-12%" }}
									animate={prefersReducedMotion ? { x: "0%" } : { x: ["-12%", "0%", "-8%"] }}
									transition={prefersReducedMotion ? { duration: 0 } : { delay: i * 0.1, duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.6 }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function ChartRise({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
	return (
		<div className="absolute inset-0 flex items-center justify-center">
			<div className="w-[360px] max-w-[92%] rounded-md border border-bl-cream-200 bg-white/85 backdrop-blur-sm p-4">
				<div className="flex items-end gap-2 h-24">
					{[28, 36, 44, 58, 70].map((h, i) => (
						<motion.div
							key={i}
							className="flex-1 rounded-sm border border-bl-cream-200 bg-bl-cream-50 overflow-hidden"
							initial={{ height: 8 }}
							animate={{ height: prefersReducedMotion ? h : [8, h] }}
							transition={prefersReducedMotion ? { duration: 0 } : { delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
						>
							<div className="h-full w-full bg-bl-bronze-75/20" />
						</motion.div>
					))}
				</div>
				<div className="mt-3 flex items-center justify-between">
					<p className="text-[10px] font-archivo uppercase tracking-widest text-bl-navy/60">EXPERIMENT</p>
					<p className="text-[10px] font-archivo uppercase tracking-widest text-bl-navy/60">IMPROVE</p>
				</div>
			</div>
		</div>
	);
}

function FlowNodes({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
	return (
		<div className="absolute inset-0 flex items-center justify-center">
			<div className="w-[360px] max-w-[92%] grid grid-cols-1 gap-3">
				{[
					{ label: "SIGN-UP", delay: 0 },
					{ label: "NURTURE", delay: 0.12 },
					{ label: "QUALIFY", delay: 0.24 },
				].map((n) => (
					<motion.div
						key={n.label}
						initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={prefersReducedMotion ? { duration: 0 } : { delay: n.delay, duration: 0.35, ease: "easeOut" }}
						className="flex items-center justify-between rounded-md border border-bl-cream-200 bg-white/85 backdrop-blur-sm px-4 py-3"
					>
						<p className="text-[10px] font-archivo uppercase tracking-widest text-bl-navy/60">{n.label}</p>
						<motion.div
							aria-hidden
							className="h-2 w-2 rounded-full bg-bl-bronze-75"
							initial={{ scale: 1, opacity: 0.7 }}
							animate={prefersReducedMotion ? { scale: 1, opacity: 0.7 } : { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
							transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.1, ease: "easeInOut", repeat: Infinity }}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
}

function KpiGrid({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
	return (
		<div className="absolute inset-0 flex items-center justify-center">
			<div className="w-[420px] max-w-[96%] grid grid-cols-2 gap-3">
				{[
					{ label: "PIPELINE", value: "+18%" },
					{ label: "CAC", value: "-9%" },
					{ label: "MQL → SQL", value: "+12%" },
					{ label: "ROAS", value: "3.1x" },
				].map((kpi, i) => (
					<motion.div
						key={kpi.label}
						initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={prefersReducedMotion ? { duration: 0 } : { delay: i * 0.07, duration: 0.35, ease: "easeOut" }}
						className="rounded-md border border-bl-cream-200 bg-white/85 backdrop-blur-sm px-4 py-3"
					>
						<p className="text-[10px] font-archivo uppercase tracking-widest text-bl-navy/60">{kpi.label}</p>
						<div className="mt-2 flex items-center justify-between">
							<p className="text-lg font-libre uppercase tracking-wide text-bl-navy">{kpi.value}</p>
							<div className="h-2 w-10 rounded-full bg-bl-cream-200 overflow-hidden">
								<motion.div
									className="h-full bg-bl-bronze-75"
									initial={{ width: "10%" }}
									animate={prefersReducedMotion ? { width: "70%" } : { width: ["15%", "70%", "62%"] }}
									transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
								/>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
