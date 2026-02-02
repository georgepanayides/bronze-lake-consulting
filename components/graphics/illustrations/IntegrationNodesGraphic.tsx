"use client";

import { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Node = {
	id: string;
	label: string;
	x: string;
	y: string;
};

type IntegrationNodesGraphicProps = {
	heading?: string;
	subheading?: string;
};

export function IntegrationNodesGraphic({
	heading = "Data collection",
	subheading = "Systems connected, signals visible",
}: IntegrationNodesGraphicProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true, amount: 0.35 });
	const prefersReducedMotion = useReducedMotion();

	const nodes = useMemo<Node[]>(
		() => [
			{ id: "crm", label: "CRM", x: "14%", y: "26%" },
			{ id: "ads", label: "ADS", x: "18%", y: "70%" },
			{ id: "site", label: "SITE", x: "50%", y: "16%" },
			{ id: "billing", label: "BILLING", x: "82%", y: "30%" },
			{ id: "ops", label: "OPS", x: "84%", y: "72%" },
		],
		[]
	);

	const hub = useMemo(() => ({ x: "50%", y: "56%" }), []);

	return (
		<div className="w-full h-full flex items-center justify-center">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 8, scale: 0.99 }}
				animate={isInView ? { opacity: 1, y: 0, scale: 1 } : undefined}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="relative w-full max-w-[520px] aspect-[16/10] bg-white border border-bl-cream-200 rounded-xl shadow-2xl shadow-bl-cream-200 overflow-hidden"
			>
				<div className="px-5 py-4 border-b border-bl-cream-200 bg-bl-cream-50">
					<p className="text-[10px] font-archivo uppercase tracking-[0.2em] text-bl-navy/60">
						{heading}
					</p>
					<p className="mt-1 text-sm font-libre uppercase tracking-wide text-bl-navy">
						{subheading}
					</p>
				</div>

				<div className="relative h-full">
					<div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(var(--color-bl-navy)_1px,transparent_1px)] [background-size:22px_22px]" />

					{/* Lines layer */}
					<svg
						className="absolute inset-0 w-full h-full pointer-events-none"
						viewBox="0 0 100 62"
						preserveAspectRatio="none"
					>
						{nodes.map((n, idx) => {
							const x = parseFloat(n.x);
							const y = parseFloat(n.y);
							const hx = parseFloat(hub.x);
							const hy = parseFloat(hub.y);
							return (
								<g key={n.id}>
									<motion.line
										x1={hx}
										y1={hy}
										x2={x}
										y2={y}
										stroke="currentColor"
										className="text-bl-cream-200"
										strokeWidth={0.8}
										initial={{ pathLength: 0, opacity: 0 }}
										animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
										transition={{ duration: 0.7, delay: 0.05 + idx * 0.06, ease: "easeInOut" }}
									/>

									{/* moving dot */}
									<motion.circle
										cx={hx}
										cy={hy}
										r={0.9}
										className="fill-bl-bronze-75"
										animate={
											isInView && !prefersReducedMotion
												? { cx: [hx, x], cy: [hy, y], opacity: [0, 1, 0] }
												: { opacity: 0 }
										}
										transition={
											isInView && !prefersReducedMotion
												? {
													duration: 2.6,
													repeat: Infinity,
													repeatDelay: 1.6,
													delay: 0.9 + idx * 0.2,
													ease: "easeInOut",
												}
												: undefined
										}
									/>
								</g>
							);
						})}
					</svg>

					{/* Hub */}
					<div
						className="absolute"
						style={{ left: hub.x, top: hub.y, transform: "translate(-50%, -50%)" }}
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={isInView ? { opacity: 1, scale: 1 } : undefined}
							transition={{ duration: 0.35, ease: "easeOut", delay: 0.25 }}
							className="w-16 h-16 rounded-full bg-white border border-bl-cream-200 shadow-xl shadow-bl-cream-200 flex items-center justify-center"
						>
							<div className="w-10 h-10 rounded-full bg-bl-cream-50 border border-bl-cream-200" />
						</motion.div>
						<p className="mt-3 text-center text-[10px] font-archivo uppercase tracking-[0.2em] text-bl-navy/60">
							Warehouse
						</p>
					</div>

					{/* Nodes */}
					{nodes.map((n, idx) => (
						<div
							key={n.id}
							className="absolute"
							style={{ left: n.x, top: n.y, transform: "translate(-50%, -50%)" }}
						>
							<motion.div
								initial={{ opacity: 0, scale: 0.9, y: 4 }}
								animate={isInView ? { opacity: 1, scale: 1, y: 0 } : undefined}
								transition={{ duration: 0.35, delay: 0.25 + idx * 0.06, ease: "easeOut" }}
								className="px-3 py-2 rounded-lg bg-white border border-bl-cream-200 shadow-sm shadow-bl-cream-200"
							>
								<p className="text-[10px] font-archivo uppercase tracking-[0.2em] text-bl-navy/70">
									{n.label}
								</p>
							</motion.div>
						</div>
					))}
				</div>
			</motion.div>
		</div>
	);
}
