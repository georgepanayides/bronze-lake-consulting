"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

type IntegrationNodesGraphicProps = {
	heading?: string;
	subheading?: string;
};

type IntegrationItem = {
	id: string;
	label: string;
	initials: string;
	iconSrc?: string;
};

const DEFAULT_INTEGRATIONS: IntegrationItem[] = [
	{ id: "facebook", label: "Facebook", initials: "F", iconSrc: "/images/integrations/icons/Facebook.svg" },
	{ id: "gmail", label: "Gmail", initials: "G", iconSrc: "/images/integrations/icons/gmail.svg" },
	{ id: "google-ads", label: "Google Ads", initials: "GA", iconSrc: "/images/integrations/icons/google_ads.svg" },
	{ id: "microsoft", label: "Microsoft", initials: "MS", iconSrc: "/images/integrations/icons/microsoft.svg" },
	{ id: "excel", label: "Excel", initials: "X", iconSrc: "/images/integrations/icons/ms_excel.svg" },
	{ id: "onedrive", label: "OneDrive", initials: "OD", iconSrc: "/images/integrations/icons/ms_onedrive.svg" },
];

const GRID_COLS = 12;
const GRID_ROWS = 8;
const GRID_CELL_COUNT = GRID_COLS * GRID_ROWS;

type CellCoord = { col: number; row: number };

const HUB_TARGET: CellCoord = { col: 6, row: 4 };

const INTEGRATION_PLACEMENTS: Array<IntegrationItem & { position: CellCoord; placementClass: string }> = [
	{ ...DEFAULT_INTEGRATIONS[0], position: { col: 2, row: 3 }, placementClass: "col-start-2 row-start-3" },
	{ ...DEFAULT_INTEGRATIONS[1], position: { col: 4, row: 1 }, placementClass: "col-start-4 row-start-1" },
	{ ...DEFAULT_INTEGRATIONS[2], position: { col: 10, row: 2 }, placementClass: "col-start-10 row-start-2" },
	{ ...DEFAULT_INTEGRATIONS[3], position: { col: 12, row: 5 }, placementClass: "col-start-12 row-start-5" },
	{ ...DEFAULT_INTEGRATIONS[4], position: { col: 3, row: 8 }, placementClass: "col-start-3 row-start-8" },
	{ ...DEFAULT_INTEGRATIONS[5], position: { col: 9, row: 7 }, placementClass: "col-start-9 row-start-7" },
];

function toIndex({ col, row }: CellCoord) {
	return (row - 1) * GRID_COLS + (col - 1);
}

function buildPath(from: CellCoord, to: CellCoord) {
	const path: CellCoord[] = [];
	let col = from.col;
	let row = from.row;

	path.push({ col, row });

	while (col !== to.col) {
		col += col < to.col ? 1 : -1;
		path.push({ col, row });
	}
	while (row !== to.row) {
		row += row < to.row ? 1 : -1;
		path.push({ col, row });
	}

	return path;
}

export function IntegrationNodesGraphic({
	heading = "Integration",
	subheading = "Systems connected, data unified",
}: IntegrationNodesGraphicProps) {
	const prefersReducedMotion = useReducedMotion();
	const [tick, setTick] = useState(0);

	const paths = useMemo(() => {
		return INTEGRATION_PLACEMENTS.map((integration) => buildPath(integration.position, HUB_TARGET));
	}, []);

	const isComplete = useMemo(() => {
		if (prefersReducedMotion) return true;
		return paths.every((path, i) => {
			const delay = i * 5;
			return tick - delay >= path.length - 1;
		});
	}, [paths, prefersReducedMotion, tick]);

	useEffect(() => {
		if (prefersReducedMotion || isComplete) return;
		const interval = window.setInterval(() => {
			setTick((t) => t + 1);
		}, 160);
		return () => window.clearInterval(interval);
	}, [isComplete, prefersReducedMotion]);

	const litIndices = useMemo(() => {
		if (prefersReducedMotion) return new Set<number>();
		const set = new Set<number>();
		paths.forEach((path, i) => {
			const delay = i * 5;
			const progress = Math.min(Math.max(tick - delay, 0), path.length - 1);
			for (let j = 0; j <= progress; j += 1) {
				set.add(toIndex(path[j]));
			}
		});
		return set;
	}, [paths, prefersReducedMotion, tick]);

	return (
		<div className="w-full">
			<div className="relative w-full aspect-[3/2] overflow-hidden">
				<span className="sr-only">{heading}: {subheading}</span>
				{/* background grid */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="grid h-full w-full grid-cols-12 grid-rows-8 gap-0 [&>div:nth-child(12n)]:border-r-0 [&>div:nth-last-child(-n+12)]:border-b-0">
						{Array.from({ length: GRID_CELL_COUNT }).map((_, index) => {
							const isAlt = (index + 1) % 3 === 0;
							const isLit = litIndices.has(index);

							return (
								<div
									key={index}
									className={
										"relative border-r border-b border-bl-cream-200 " +
										(isAlt ? "bg-bl-cream-50/60" : "bg-white")
									}
								>
									<div
										className={
											"absolute inset-0 transition-opacity duration-300 " +
											(isLit ? "opacity-100" : "opacity-0")
										}
									>
										<div
											className={
												"absolute inset-[3px] rounded-[1px] bg-bl-bronze-75/30 " +
												(isLit && !prefersReducedMotion ? "animate-pulse" : "")
											}
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* overlay elements (hub + integrations) */}
				<div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-0">
					{/* hub: Bronze Lake (2x2 cells) */}
					<div className="col-start-6 row-start-4 col-span-2 row-span-2">
						<div className="w-full h-full flex items-center justify-center">
							<div className="w-[95%] h-[95%] rounded-[1px] bg-white border border-bl-cream-200 flex items-center justify-center shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_0_22px_rgba(0,0,0,0.12)]">
								<div className="relative w-[64%] h-[64%]">
									<Image
										src="/icons/bl-brand-icon.svg"
										alt="Bronze Lake"
										fill
										sizes="100px"
										className="object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.12)]"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* integration icons */}
					{INTEGRATION_PLACEMENTS.map((integration) => (
						<div
							key={integration.id}
							className={integration.placementClass}
						>
							<div className="w-full h-full flex items-center justify-center">
								{integration.iconSrc ? (
									<div className="relative w-[95%] h-[95%] rounded-[1px] overflow-hidden bg-white border border-bl-cream-200 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_0_18px_rgba(0,0,0,0.10)]">
										<Image
											src={integration.iconSrc}
											alt={integration.label}
											fill
											sizes="45px"
											className="object-contain drop-shadow-[0_0_6px_rgba(0,0,0,0.10)]"
										/>
									</div>
								) : (
									<div className="w-[95%] h-[95%] rounded-[1px] bg-white border border-bl-cream-200 flex items-center justify-center">
										<span className="text-xs font-archivo uppercase tracking-[0.2em] text-bl-navy/70">
											{integration.initials}
										</span>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
