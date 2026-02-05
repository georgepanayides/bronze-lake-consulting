"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

type BespokeArchGraphicProps = {
	title?: string;
	subtitle?: string;
};

export function BespokeArchGraphic({
	title = "Bespoke Architecture",
	subtitle = "Typing…",
}: BespokeArchGraphicProps) {
	const panelRef = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(panelRef, { once: true, amount: 0.35 });
	const prefersReducedMotion = useReducedMotion() ?? false;
	const typingStartedRef = useRef(false);

	const sidebarItems = useMemo(
		() =>
			[
				{ type: "folder" as const, depth: 0, name: "platform" },
				{ type: "file" as const, depth: 1, name: "architecture.ts", active: true },
				{ type: "file" as const, depth: 1, name: "routes.ts" },
				{ type: "file" as const, depth: 1, name: "integrations.ts" },
				{ type: "file" as const, depth: 1, name: "observability.ts" },
				{ type: "folder" as const, depth: 0, name: "infra" },
				{ type: "file" as const, depth: 1, name: "env.production" },
				{ type: "file" as const, depth: 1, name: "deploy.yml" },
				{ type: "folder" as const, depth: 0, name: "services" },
				{ type: "file" as const, depth: 1, name: "api.ts" },
				{ type: "file" as const, depth: 1, name: "worker.ts" },
			],
		[]
	);

	const codeLines = useMemo(
		() => [
			"// BESPOKE ARCHITECTURE (SERVICE LAYER)",
			"import { z } from \"zod\";",
			"import { createRouter } from \"./routes\";",
			"import { integrations } from \"./integrations\";",
			"import { metrics, trace } from \"./observability\";",
			"",
			"const EventSchema = z.object({",
			"  type: z.string(),",
			"  payload: z.record(z.any()),",
			"});",
			"",
			"export const app = createRouter()",
			"  .use(metrics())",
			"  .use(trace())",
			"  .route(\"GET /health\", () => ({ ok: true }))",
			"  .route(\"POST /events\", async (req) => {",
			"    const event = EventSchema.parse(req.body);",
			"    await integrations.dispatch(event);",
			"    return { accepted: true };",
			"  });",
		],
		[]
	);

	const fullCodeText = useMemo(() => codeLines.join("\n"), [codeLines]);
	const [typedCount, setTypedCount] = useState(0);

	useEffect(() => {
		if (prefersReducedMotion) return;
		if (!isInView) return;
		if (typingStartedRef.current) return;
		typingStartedRef.current = true;

		const step = 3;
		const intervalMs = 45;
		let current = 0;
		const id = window.setInterval(() => {
			current = Math.min(fullCodeText.length, current + step);
			setTypedCount(current);
			if (current >= fullCodeText.length) window.clearInterval(id);
		}, intervalMs);

		return () => window.clearInterval(id);
	}, [isInView, prefersReducedMotion, fullCodeText]);

	const visibleCount = prefersReducedMotion
		? isInView
			? fullCodeText.length
			: 0
		: typedCount;
	const typedText = fullCodeText.slice(0, visibleCount);
	const typedLines = typedText.split("\n");
	const typingComplete = visibleCount >= fullCodeText.length;
	const activeLine = Math.min(typedLines.length - 1, codeLines.length - 1);

	return (
		<div className="w-300 h-full flex items-center justify-center overflow-hidden relative">
			<motion.div
				ref={panelRef}
				initial={{ opacity: 0, y: 6, scale: 0.995 }}
				animate={
					isInView || prefersReducedMotion
						? { opacity: 1, y: 0, scale: 1 }
						: undefined
				}
				transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
				className="absolute top-5 left-5 w-[140%] h-[140%] md:w-[130%] md:h-[130%]"
			>
				<div className="relative w-full h-full bg-white overflow-hidden border border-bl-cream-200 rounded-xl shadow-bl-cream-200">
					<header className="flex items-center justify-between px-4 py-3 border-b border-bl-cream-200 bg-bl-cream-50">
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

						<div className="flex items-center gap-2">
							<div className="hidden sm:flex items-center gap-2 rounded border border-bl-cream-200 bg-white px-2 py-1">
								<div className="h-2 w-2 rounded-full bg-bl-bronze-75" aria-hidden="true" />
								<p className="text-[9px] font-archivo uppercase tracking-[0.2em] text-bl-navy/55">Build Passing</p>
							</div>
							<div className="flex items-center gap-2 opacity-40">
								<div className="w-2.5 h-2.5 rounded-full bg-bl-navy/20" />
								<div className="w-2.5 h-2.5 rounded-full bg-bl-navy/20" />
								<div className="w-2.5 h-2.5 rounded-full bg-bl-navy/20" />
							</div>
						</div>
					</header>

					<div className="relative bg-white">
						<div className="flex min-h-[320px]">
							<aside className="w-[170px] shrink-0 border-r border-bl-cream-200 bg-white">
								<div className="flex items-center justify-between px-3 py-2 border-b border-bl-cream-200 bg-bl-cream-50">
									<p className="text-[10px] font-archivo uppercase tracking-[0.22em] text-bl-navy/55">Files</p>
									<div className="flex items-center gap-2 text-bl-navy/35">
										<div className="h-2.5 w-2.5 rounded-[2px] border border-bl-cream-200 bg-white" />
										<div className="h-2.5 w-2.5 rounded-[2px] border border-bl-cream-200 bg-white" />
										<div className="h-2.5 w-2.5 rounded-[2px] border border-bl-cream-200 bg-white" />
									</div>
								</div>

								<ul className="py-2">
									{sidebarItems.map((item) => {
										const isActive = "active" in item && item.active;
										return (
											<li
												key={`${item.depth}:${item.name}`}
												className={
													"relative flex items-center gap-2 px-3 py-1.5 text-[10.5px] font-archivo " +
													(item.depth === 1 ? "pl-7 " : "pl-3 ") +
													(isActive ? "bg-bl-cream-50 text-bl-navy" : "text-bl-navy/60")
												}
											>
												{isActive ? (
													<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-bl-bronze-75" />
												) : null}
												<span
													className={
														"h-2 w-2 rounded-[2px] border border-bl-cream-200 " +
														(item.type === "folder" ? "bg-bl-cream-50" : "bg-white")
													}
												/>
												<span className="truncate">{item.name}</span>
											</li>
										);
									})}
								</ul>
							</aside>

							<section className="flex-1 min-w-0 bg-white">
								<div className="flex items-center justify-between px-3 py-2 border-b border-bl-cream-200 bg-white">
									<div className="flex items-center gap-2 min-w-0">
										<div className="px-2 py-1 rounded-md border border-bl-cream-200 bg-bl-cream-50 min-w-0 flex gap-1 items-center">
											<p className="text-[10px] font-archivo uppercase tracking-[0.18em] text-bl-navy/60 truncate">architecture.ts</p>
											<X className="w-2 h-2 text-bl-bronze-75" />
										</div>
										<p className="text-[10px] font-archivo uppercase tracking-[0.18em] text-bl-navy/35 truncate">routes.ts</p>
										<p className="text-[10px] font-archivo uppercase tracking-[0.18em] text-bl-navy/35 truncate">integrations.ts</p>
									</div>
									<div className="hidden sm:flex items-center gap-2">
										<div className="px-2 py-1 rounded border border-bl-cream-200 bg-white">
											<p className="text-[9px] font-archivo uppercase tracking-[0.2em] text-bl-navy/50">ARCH</p>
										</div>
										<div className="px-2 py-1 rounded border border-bl-cream-200 bg-bl-cream-50/60">
											<p className="text-[9px] font-archivo uppercase tracking-[0.2em] text-bl-navy/50">v1.0</p>
										</div>
									</div>
								</div>

								<div className="relative p-4 md:p-5">
									<div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(var(--color-bl-navy)_1px,transparent_1px)] [background-size:20px_20px]" />

									<div aria-hidden="true" className="absolute right-4 top-4 w-[168px] rounded-lg border border-bl-cream-200 bg-white/85 backdrop-blur-sm shadow-sm">
										<div className="flex items-center justify-between px-3 py-2 border-b border-bl-cream-200 bg-bl-cream-50/50">
											<p className="text-[9px] font-archivo uppercase tracking-[0.22em] text-bl-navy/55">Arch Map</p>
											<div className="h-2 w-2 rounded-full bg-bl-bronze-75" />
										</div>
										<div className="p-3">
											<svg viewBox="0 0 160 84" className="w-full h-auto text-bl-navy/35">
												<path d="M20 42 H56" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" fill="none" />
												<path d="M104 22 H140" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" fill="none" />
												<path d="M104 62 H140" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" fill="none" />
												<circle cx="20" cy="42" r="8" fill="white" stroke="var(--color-bl-cream-200)" strokeWidth="2" />
												<circle cx="80" cy="42" r="10" fill="rgba(183,120,68,0.12)" stroke="var(--color-bl-cream-200)" strokeWidth="2" />
												<circle cx="140" cy="22" r="8" fill="white" stroke="var(--color-bl-cream-200)" strokeWidth="2" />
												<circle cx="140" cy="62" r="8" fill="white" stroke="var(--color-bl-cream-200)" strokeWidth="2" />
												<text x="76" y="46" fontSize="8" fill="var(--color-bl-navy)">API</text>
											</svg>
											<div className="mt-2 grid grid-cols-2 gap-2">
												<div className="rounded border border-bl-cream-200 bg-white px-2 py-1">
													<p className="text-[9px] font-archivo uppercase tracking-[0.18em] text-bl-navy/55">Auth</p>
												</div>
												<div className="rounded border border-bl-cream-200 bg-white px-2 py-1">
													<p className="text-[9px] font-archivo uppercase tracking-[0.18em] text-bl-navy/55">Queue</p>
												</div>
											</div>
										</div>
									</div>

									<div className="relative grid grid-cols-[auto_1fr] gap-x-4">
										<div className="select-none text-right">
											{codeLines.map((_, i) => (
												<p key={i} className="font-inconsolata text-[11px] md:text-xs leading-6 text-bl-navy/30">
													{i + 1}
												</p>
											))}
										</div>

										<div className="font-inconsolata text-[11px] md:text-xs leading-6 text-bl-navy/80">
											{codeLines.map((_, i) => {
												const lineText = typedLines[i] ?? "";
												const showCaret = !typingComplete && i === activeLine;

												return (
													<p key={i} className="whitespace-pre">
														{lineText}
														{showCaret ? (
															<span aria-hidden className="inline-block w-[2px] h-[0.95em] bg-bl-bronze-75 ml-[1px] align-[-2px]" />
														) : null}
													</p>
												);
											})}
										</div>
									</div>
								</div>

								<div className="px-4 md:px-5 py-3 border-t border-bl-cream-200 bg-bl-cream-50/60">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<p className="text-[10px] font-archivo uppercase tracking-[0.2em] text-bl-navy/50">main • Local</p>
											<div className="h-2 w-2 rounded-full bg-bl-bronze-75" aria-hidden="true" />
										</div>
										<div className="flex items-center gap-2">
											<div className="h-1.5 w-24 bg-bl-cream-200 rounded-full overflow-hidden">
												<div className="h-full bg-bl-bronze-75 w-[62%]" />
											</div>
											<p className="text-[10px] font-archivo uppercase tracking-[0.2em] text-bl-navy/50">Deployed</p>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
