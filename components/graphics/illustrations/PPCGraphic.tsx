"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
	Camera,
	Check,
	Globe,
	Mic,
	MoreVertical,
	Search,
    Pointer
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";


type PPCGraphicProps = {
	prefersReducedMotion?: boolean;
};

type SponsoredResult = {
	id: number;
	advertiser: string;
	displayUrl: string;
	headline: string;
	description: string;
	pinned?: boolean;
};

export function PPCGraphic({ prefersReducedMotion = false }: PPCGraphicProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true, amount: 0.55 });
	const reducedMotionFromOs = useReducedMotion();
	const reducedMotion = prefersReducedMotion || reducedMotionFromOs;
	const cursorStartedRef = useRef(false);
	const [cursorVisible, setCursorVisible] = useState(false);
	const [clickPulse, setClickPulse] = useState(0);
	const [toastLeadIndex, setToastLeadIndex] = useState<number | null>(null);

	const leadNames = useMemo(() => ["NORTHWIND STUDIO", "CEDAR & CO", "HARBOR HOME"], []);

	const sponsored = useMemo<SponsoredResult[]>(
		() => [
			{
				id: 1,
				advertiser: "Bronze Lake",
				displayUrl: "bronzelake.com",
				headline: "Business Consulting for Growing Teams",
				description:
					"Clear positioning, measurable growth plans, and hands-on execution support.",
				pinned: true,
			},
			{
				id: 2,
				advertiser: "Global Strategy Partners",
				displayUrl: "globalstrategy.com",
				headline: "Management Consulting \u2013 Strategy & Ops",
				description:
					"Framework-driven plans, operational improvement, and transformation programs.",
			},
			{
				id: 3,
				advertiser: "Elite Advisors",
				displayUrl: "elite-advisors.net",
				headline: "Advisory Services for Leadership Teams",
				description:
					"Planning support, financial modeling, and cross-functional alignment.",
			},
			{
				id: 4,
				advertiser: "Corp Growth Inc",
				displayUrl: "corp-growth-inc.com",
				headline: "Growth Consulting \u2013 Research & Insights",
				description:
					"Market analysis, competitive research, and GTM strategy for decision makers.",
			},
		],
		[]
	);

	const animate = isInView && !reducedMotion;

	useEffect(() => {
		if (!animate) return;
		if (cursorStartedRef.current) return;
		cursorStartedRef.current = true;

		const timeouts: number[] = [];
		timeouts.push(window.setTimeout(() => setCursorVisible(true), 450));

		const scheduleClick = (leadIndex: number, atMs: number) => {
			timeouts.push(
				window.setTimeout(() => {
					setClickPulse((p) => p + 1);
					setToastLeadIndex(leadIndex);
				}, atMs),
			);
			timeouts.push(window.setTimeout(() => setToastLeadIndex(null), atMs + 520));
		};

		scheduleClick(0, 1250);
		scheduleClick(1, 1950);
		scheduleClick(2, 2650);

		timeouts.push(
			window.setTimeout(() => {
				setToastLeadIndex(null);
				setCursorVisible(false);
			}, 3600),
		);

		return () => {
			timeouts.forEach((id) => window.clearTimeout(id));
		};
	}, [animate]);

	function CursorSvg() {
		return <Pointer className="w-6 h-6" />
	}

	return (
		<div
			ref={ref}
			className="relative flex h-full w-full flex-col overflow-hidden rounded-t border border-bl-cream-200 bg-white font-archivo border-b-0"
		>
			<header className="relative z-10 shrink-0 border-b border-bl-cream-200 bg-white px-4 py-3">
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-full items-center gap-3 rounded-full border border-bl-cream-200 bg-white px-4 shadow-sm transition-shadow hover:shadow-md justify-start">
						<Search className="h-4 w-4 text-bl-navy/50" aria-hidden />
						<p className="flex-1 truncate text-sm text-bl-navy/90 text-left">
							business consulting
						</p>
						<div className="flex items-center gap-3 border-l border-bl-cream-200 pl-3">
							<Mic className="h-4 w-4 text-bl-navy/50" aria-hidden />
							<Camera className="h-4 w-4 text-bl-navy/50" aria-hidden />
							<div className="text-bl-bronze-75">
								<Search className="h-4 w-4" aria-hidden />
							</div>
						</div>
					</div>

					<div className="ml-auto flex items-center gap-3">
						<div className="flex h-8 w-8 items-center justify-center rounded-full border border-bl-cream-200 bg-bl-cream-100 text-xs font-bold text-bl-navy">
							BL
						</div>
					</div>
				</div>

				<nav className="mt-2 flex items-center gap-5" aria-label="Search categories">
					{["All", "Sponsored", "Images", "News", "More"].map((tab, i) => (
						<span
							key={tab}
							className={
								"pb-3 text-xs font-medium " +
								(i === 1
									? "border-b-2 border-bl-navy text-bl-navy"
									: "text-bl-navy/60")
							}
						>
							{tab}
						</span>
					))}
				</nav>
			</header>

			<div className="relative flex-1 overflow-hidden bg-white px-8 py-3 max-w-3xl">
				<div className="flex items-start gap-4">
					<section className="min-w-0 flex-1" aria-label="Sponsored results">
						<div className="mb-3 flex items-center justify-between gap-3">
							<p className="text-[11px] text-bl-navy/60">
								Sponsored {sponsored.length} results
							</p>
							<span className="inline-flex items-center gap-2 rounded-full border border-bl-cream-200 bg-bl-cream-50 px-2 py-1 text-[10px] font-semibold text-bl-navy">
								<Check className="h-3.5 w-3.5 text-bl-bronze-75" aria-hidden />
								Verified advertisers
							</span>
						</div>

						<div className="relative flex w-full flex-col gap-6">
							{sponsored.map((ad, index) => {
								const isPinned = Boolean(ad.pinned);
								return (
									<motion.article
										key={ad.id}
										initial={reducedMotion ? false : { opacity: 0, y: 8 }}
										animate={
											animate ? { opacity: 1, y: 0 } : undefined
										}
										transition={
											reducedMotion
												? undefined
												: { duration: 0.45, ease: "easeOut", delay: 0.05 + index * 0.06 }
										}
										className={
											"group relative bg-white " +
											(isPinned
												? "rounded-lg border border-bl-cream-200 p-3"
												: "")
										}
									>
										{isPinned ? (
											<div className="absolute left-0 top-3 bottom-3 w-[2px] bg-bl-bronze-75" aria-hidden />
										) : null}

										<div className="mb-1 flex items-center gap-2">
											<div className="flex h-6 w-6 items-center justify-center rounded-full border border-bl-cream-200 bg-bl-cream-100">
												<Globe className="h-3.5 w-3.5 text-bl-navy/60" aria-hidden />
											</div>
											<div className="flex flex-col leading-none min-w-0">
												<span className="text-[12px] font-medium text-bl-navy truncate">
													{ad.advertiser}
												</span>
												<span className="max-w-[260px] truncate text-[10px] text-bl-navy/70">
													{ad.displayUrl}
												</span>
											</div>
											<MoreVertical
												className="ml-auto h-4 w-4 text-bl-navy/40 opacity-0 transition-opacity group-hover:opacity-100"
												aria-hidden
											/>
										</div>

										<div className="flex items-start justify-between gap-3">
											<h3 className="min-w-0 flex-1 truncate text-[15px] font-normal text-bl-navy group-hover:underline decoration-2 underline-offset-2 text-left">
												{ad.headline}
											</h3>
											<span className="shrink-0 inline-flex items-center rounded-full border border-bl-cream-200 bg-bl-cream-50 px-2 py-1 text-[10px] font-semibold text-bl-navy">
												Sponsored
											</span>
										</div>

										<p className="mt-1 text-left text-xs leading-relaxed text-bl-navy/70">
											{ad.description}
										</p>

										{isPinned ? (
											<div className="relative mt-2 flex flex-wrap gap-x-4 gap-y-1">
												{["Book a Call", "Pricing", "Case Studies"].map((link) => (
													<span
														key={link}
														className="cursor-default text-xs font-medium text-bl-navy/80 hover:underline"
													>
														{link}
													</span>
												))}

												<AnimatePresence initial={false}>
													{cursorVisible ? (
														<motion.div
															aria-hidden
															className="pointer-events-none absolute left-[104px] top-0 z-50"
															initial={{ opacity: 0, x: 34, y: -10, rotate: 0 }}
															animate={{
																opacity: 1,
																x: 0,
																y: 0,
																rotate: 0,
																scale: 1,
															}}
															exit={{ opacity: 0 }}
															transition={{ duration: 0.55, ease: "easeOut" }}
														>
															<motion.div
																key={`cursor-pulse-${clickPulse}`}
																animate={clickPulse > 0 ? { scale: [1, 0.92, 1] } : { scale: 1 }}
																transition={{ duration: 0.18, ease: "easeInOut" }}
															>
																<CursorSvg />
															</motion.div>

															{clickPulse > 0 ? (
																<motion.span
																	key={`click-ripple-${clickPulse}`}
																	className="absolute left-2 top-3 h-6 w-6 rounded-full border border-bl-cream-200"
																	initial={{ opacity: 0, scale: 0.65 }}
																	animate={{ opacity: [0, 0.35, 0], scale: [0.65, 1.2, 1.55] }}
																	transition={{ duration: 0.5, ease: "easeOut" }}
																/>
															) : null}

															<AnimatePresence initial={false}>
																{toastLeadIndex !== null ? (
																	<motion.div
																		key={toastLeadIndex}
																		className="absolute -top-9 left-4 whitespace-nowrap rounded-lg border border-bl-cream-200 bg-white px-2.5 py-1.5 shadow-md"
																		initial={{ opacity: 0, y: 8, scale: 0.96 }}
																		animate={{ opacity: 1, y: 0, scale: 1 }}
																		exit={{ opacity: 0, y: 4, scale: 0.98 }}
																		transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
																	>
																			<p className="text-[10px] font-archivo uppercase tracking-[0.22em] text-bl-navy/70">
																				+1 NEW LEAD
																			</p>
																			<p className="mt-0.5 text-[10px] font-archivo uppercase tracking-[0.18em] text-bl-navy/50">
																				{leadNames[toastLeadIndex]}
																			</p>
																	</motion.div>
																) : null}
															</AnimatePresence>
														</motion.div>
													) : null}
												</AnimatePresence>
											</div>
										) : null}
									</motion.article>
								);
							})}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
