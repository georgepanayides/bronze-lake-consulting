"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

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
	const typingStartedRef = useRef(false);

	const sidebarItems = useMemo(
		() =>
			[
				{ type: "folder" as const, depth: 0, name: "react" },
				{ type: "file" as const, depth: 1, name: "readme" },
				{ type: "file" as const, depth: 1, name: "instructions" },
				{ type: "file" as const, depth: 1, name: "styleguide" },
				{ type: "file" as const, depth: 1, name: "index.html" },
				{ type: "file" as const, depth: 1, name: "app.js", active: true },
				{ type: "file" as const, depth: 1, name: "style.css" },
				{ type: "file" as const, depth: 1, name: "package.json" },
				{ type: "folder" as const, depth: 0, name: "utils" },
				{ type: "folder" as const, depth: 0, name: "public" },
			]
		,
		[]
	);

	const codeLines = useMemo(
		() => [
			"# Import necessary modules",
			"from flask import Flask, jsonify, request",
			"",
			"# Initialize the app",
			"app = Flask(__name__)",
			"",
			"# Example route",
			"@app.route('/')",
			"def home():",
			"    return jsonify(message=\"Hello, World!\")",
			"",
			"# Error handler",
			"@app.errorhandler(500)",
			"def handle_500(error):",
			"    return jsonify(error=str(error)), 500",
			"",
			"# Start the server",
			"if __name__ == '__main__':",
			"    app.run(debug=True, host='0.0.0.0', port=5000)",
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
			if (current >= fullCodeText.length) {
				window.clearInterval(id);
			}
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
		<div ref={ref} className="w-full h-full flex items-center justify-center">
			<div className="relative w-full max-w-6xl bg-white shadow-bl-cream-200 overflow-hidden border-l border-r border-bl-cream-200 max-h-100">
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

				<div className="relative bg-white">
					<div className="flex min-h-[300px]">
						<aside className="w-[170px] shrink-0 border-r border-bl-cream-200 bg-white">
							<div className="flex items-center justify-between px-3 py-2 border-b border-bl-cream-200 bg-bl-cream-50">
								<p className="text-[10px] font-archivo uppercase tracking-[0.22em] text-bl-navy/55">
									Files
								</p>
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
												(isActive
													? "bg-bl-cream-50 text-bl-navy"
													: "text-bl-navy/60")
											}
										>
											{isActive ? (
												<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-bl-bronze-75" />
											) : null}

											<span
												className={
													"h-2 w-2 rounded-[2px] border border-bl-cream-200 " +
													(item.type === "folder"
														? "bg-bl-cream-50"
														: "bg-white")
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
										<p className="text-[10px] font-archivo uppercase tracking-[0.18em] text-bl-navy/60 truncate">
											app.js
										</p>
										<X className="w-2 h-2 text-bl-bronze-75"/>
									</div>
									<p className="text-[10px] font-archivo uppercase tracking-[0.18em] text-bl-navy/35 truncate">
										index.html
									</p>
									<p className="text-[10px] font-archivo uppercase tracking-[0.18em] text-bl-navy/35 truncate">
										style.css
									</p>
								</div>
							</div>

							<div className="relative p-4 md:p-5">
								<div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(var(--color-bl-navy)_1px,transparent_1px)] [background-size:20px_20px]" />

								<div className="relative grid grid-cols-[auto_1fr] gap-x-4">
									<div className="select-none text-right">
										{codeLines.map((_, i) => (
											<p
												key={i}
												className="font-inconsolata text-[11px] md:text-xs leading-6 text-bl-navy/30"
											>
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
															<span
																aria-hidden
																className="inline-block w-[2px] h-[0.95em] bg-bl-bronze-75 ml-[1px] align-[-2px]"
															/>
													) : null}
												</p>
												);
											})}
										</div>
								</div>
							</div>

							<div className="px-4 md:px-5 py-3 border-t border-bl-cream-200 bg-bl-cream-50/60">
								<div className="flex items-center justify-between">
									<p className="text-[10px] font-archivo uppercase tracking-[0.2em] text-bl-navy/50">
										Local • Running
									</p>
									<div className="flex items-center gap-2">
										<div className="h-1.5 w-24 bg-bl-cream-200 rounded-full overflow-hidden">
												<div className="h-full bg-bl-bronze-75 w-[62%]" />
										</div>
										<p className="text-[10px] font-archivo uppercase tracking-[0.2em] text-bl-navy/50">
											Live
										</p>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
						</div>
		</div>
	);
}
