"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight, Camera, Globe, Mic, MoreVertical, Search, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type SeoSearchResultsIllustrationProps = {
	prefersReducedMotion?: boolean;
};

type SearchResult = {
    id: number;
    domain: string;
    path: string;
    title: string;
    desc: string;
    date: string;
    isTarget?: boolean;
};

// Mock Data mimicking Google Config
// Bronze Lake is ID 1
const bronzeLakeResult: SearchResult = {
    id: 1,
    domain: "bronzelake.com",
    path: "› business › consulting",
    title: "Strategic Business Consulting | Bronze Lake",
    desc: "Strategy, positioning, and execution support to drive sustainable growth.",
    date: "2 days ago",
    isTarget: true,
};

const competitorResults: SearchResult[] = [
	{
		id: 2,
        domain: "globalstrategy.com",
        path: "› consulting › solutions",
        title: "Global Strategy Partners | Business Solutions",
        desc: "Management consulting for growth, operations, and transformation.",
        date: "1 week ago",
	},
	{
		id: 3,
        domain: "elite-advisors.net",
        path: "› services › advisory",
        title: "Elite Business Advisors - Strategic Planning",
        desc: "Advisory services for planning, finance, and org design.",
        date: "3 weeks ago",
	},
    {
        id: 4,
        domain: "corp-growth-inc.com",
        path: "› insights › trends",
        title: "Corporate Growth Inc | Market Analysis",
        desc: "Market research and growth strategy insights for leaders.",
        date: "Just now",
    },
];

const VIEWS_FULL = Math.round(24500 * 0.7); // 30% fewer views overall
const VIEWS_STAGE_TWO = Math.round(VIEWS_FULL * 0.4); // hit ~40% while at #2

function Counter({ from, to }: { from: number; to: number }) {
	// Simple CSS/JS counter 
    const [count, setCount] = useState(from);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => {
                if (c >= to) {
                    clearInterval(interval);
                    return to;
                }
                const jump = Math.ceil((to - c) / 10);
                return c + jump;
            });
        }, 50);
        return () => clearInterval(interval);
    }, [to, from]);

    return <span>{count.toLocaleString()}</span>;
}

export function SEOGrowth({
	prefersReducedMotion = false,
}: SeoSearchResultsIllustrationProps) {
    // Animation sequence:
    // Start: Bronze Lake at #3
    // -> move to #2
    // -> hold 5s
    // -> move to #1
    const [stage, setStage] = useState<0 | 1 | 2>(prefersReducedMotion ? 2 : 0);
    const [results, setResults] = useState<SearchResult[]>(() =>
        prefersReducedMotion
            ? [bronzeLakeResult, competitorResults[0], competitorResults[1]]
            : [competitorResults[0], competitorResults[1], bronzeLakeResult],
    );

    const showGrowth = stage === 2;
    const rootRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(rootRef, { once: true, amount: 0.6 });

    useEffect(() => {
        if (prefersReducedMotion) return;
		if (!isInView) return;

        const toSecond = setTimeout(() => {
			setStage(1);
			setResults([competitorResults[0], bronzeLakeResult, competitorResults[1]]);
		}, 900);

		const toFirst = setTimeout(() => {
			setStage(2);
			setResults([bronzeLakeResult, competitorResults[0], competitorResults[1]]);
		}, 900 + 4000);

        return () => {
            clearTimeout(toSecond);
			clearTimeout(toFirst);
        };
    }, [prefersReducedMotion, isInView]);

	return (
    <div ref={rootRef} className="relative flex h-full w-full flex-col overflow-hidden rounded-t border border-bl-cream-200 bg-white font-archivo border-b-0">
			{/* --- Header --- */}
            <header className="relative z-10 shrink-0 border-b border-bl-cream-200 bg-white px-4 py-3">
                <div className="flex items-center gap-3">
                    {/* Search Bar */}
                    <div className="flex h-10 w-full items-center gap-3 rounded-full border border-bl-cream-200 bg-white px-4 shadow-sm transition-shadow hover:shadow-md justify-start">
                        <Search className="h-4 w-4 text-bl-navy/50" aria-hidden />
                        <p className="flex-1 truncate text-sm text-bl-navy/90 text-left">business consulting</p>
                        <div className="flex items-center gap-3 border-l border-bl-cream-200 pl-3">
                            <Mic className="h-4 w-4 text-bl-navy/50" aria-hidden />
                            <Camera className="h-4 w-4 text-bl-navy/50" aria-hidden />
                            <div className="text-bl-bronze-75">
                                <Search className="h-4 w-4" aria-hidden />
                            </div>
                        </div>
                    </div>

                    {/* Profile */}
                    <div className="ml-auto flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-bl-cream-200 bg-bl-cream-100 text-xs font-bold text-bl-navy">
                            BL
                        </div>
                    </div>
                </div>

				{/* Tabs */}
                <nav className="mt-2 flex items-center gap-5">
					{["All", "Images", "News", "Maps", "More"].map((tab, i) => (
						<button
							key={tab}
							className={`pb-3 text-xs font-medium ${
								i === 0
                                    ? "border-b-2 border-bl-navy text-bl-navy"
                                    : "text-bl-navy/60 hover:text-bl-navy"
							}`}
						>
							{tab}
						</button>
					))}
				</nav>
			</header>

			{/* --- Search Results Area --- */}
            <div className="relative flex-1 overflow-hidden bg-white px-8 py-3">
				<div className="flex items-start gap-4">
					<div className="min-w-0 flex-1">
						{/* Stats Count */}
						<div className="mb-3 text-[11px] text-bl-navy/60">
							About <Counter from={1200000} to={14283000} /> results (0.42 seconds)
						</div>

						{/* Results List */}
                        <div className="relative flex w-full flex-col gap-8">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {results.map((result, index) => (
                            <motion.article 
                                key={result.id} 
                                layout
                                transition={{ type: "spring", bounce: 0.15, duration: 0.55 }}
                                className="group relative bg-white"
                            >   
                                {/* Target Highlight Animation (optional subtle bg flash when rising) */}
                                {/* {isTarget && ...} */}

                                {/* Result Top Line: Icon + Site Name + URL */}
                                <div className="mb-1 flex items-center gap-2">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-bl-cream-200 bg-bl-cream-100">
                                        <Globe className="h-3.5 w-3.5 text-bl-navy/60" aria-hidden />
                                    </div>
                                    <span className="text-[11px] font-medium text-bl-navy/60">#{index + 1}</span>
                                    <div className="flex flex-col leading-none">
                                        <span className="text-[12px] font-medium text-bl-navy self-start">
                                            {/* Logic to show correct site name */}
                                            {result.isTarget ? "Bronze Lake" : result.domain.split(".")[0]}
                                        </span>
                                        <span className="max-w-[260px] truncate text-[10px] text-bl-navy/70">
                                            {result.domain} {result.path}
                                        </span>
                                    </div>
                                    <MoreVertical className="ml-auto h-4 w-4 text-bl-navy/40 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                                </div>

                                {/* Title */}
                                <div className="flex items-start gap-2 self-start">
                                    <h3 className="flex-[0.5] truncate text-[15px] font-normal text-bl-navy group-hover:underline decoration-2 underline-offset-2 self-start">
                                        {result.title}
                                    </h3>
                                    {result.isTarget && stage >= 1 && index <= 1 && (
                                        <motion.span
                                            initial={{ opacity: 0, y: 6, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                            className="shrink-0"
                                        >
											<span className="inline-flex items-center gap-1 rounded-full border border-bl-cream-200 bg-bl-cream-50 px-2 py-1 text-[11px] font-semibold text-bl-navy">
                                                <ArrowUpRight className="h-4 w-4 text-bl-bronze-75" aria-hidden />
                                                {stage === 1 && <Counter key="views-stage-1" from={0} to={VIEWS_STAGE_TWO} />}
                                                {stage === 2 && <Counter key="views-stage-2" from={VIEWS_STAGE_TWO} to={VIEWS_FULL} />}
											</span>
                                        </motion.span>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="mt-1 text-left text-xs leading-relaxed text-bl-navy/70 self-start">
                                    <span className="mr-2 text-xs text-bl-navy/50 self-start">{result.date} —</span>
                                    {result.desc}
                                </p>

                                {/* Sitelinks - only for first item */}
                                {index === 0 && result.isTarget && showGrowth && (
                                    <motion.div 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        transition={{ delay: 0.3 }}
                                        className="mt-2 flex flex-wrap gap-x-4 gap-y-1"
                                    >
                                        {["Services", "Case Studies", "Contact"].map((link) => (
                                            <span
                                                key={link}
                                                className="cursor-pointer text-xs font-medium text-bl-navy/80 hover:underline"
                                            >
                                                {link}
                                            </span>
                                        ))}
                                    </motion.div>
                                )}
                            </motion.article>
                        ))}
                    </AnimatePresence>
                        </div>
                    </div>

                    {/* Animated Views Overlay (in flow; avoids looking like right-indented layout) */}
                    <div className="hidden md:block shrink-0">
                        <motion.div
                            initial={false}
                            className="w-[210px] rounded-lg border border-bl-cream-200 bg-white p-3 shadow-md"
                        >
                                    <div className="mb-1 flex items-center gap-2">
                                        <div className="rounded-md border border-bl-cream-200 bg-bl-cream-100 p-1 text-bl-navy">
                                            <TrendingUp className="h-4 w-4" aria-hidden />
                                        </div>
                                        <span className="text-[10px] font-medium uppercase tracking-wider text-bl-navy/60">Monthly impressions</span>
                                    </div>
                                    <div className="text-xl font-bold text-bl-navy">
                                        {prefersReducedMotion && <span>{VIEWS_FULL.toLocaleString()}</span>}
                                        {!prefersReducedMotion && stage === 0 && <span>0</span>}
                                        {!prefersReducedMotion && stage === 1 && (
                                            <Counter key="overlay-views-stage-1" from={0} to={VIEWS_STAGE_TWO} />
                                        )}
                                        {!prefersReducedMotion && stage === 2 && (
                                            <Counter key="overlay-views-stage-2" from={VIEWS_STAGE_TWO} to={VIEWS_FULL} />
                                        )}
                                    </div>
                                    <div className="mt-1 flex items-center gap-1 text-xs font-medium text-bl-navy">
                                    <AnimatePresence initial={false}>
                                        {showGrowth && (
                                            <motion.span
                                                initial={{ opacity: 0, y: 4 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 2 }}
                                                className="inline-flex items-center gap-1 rounded-full border border-bl-cream-200 bg-bl-cream-50 px-2 py-0.5"
                                            >
                                                <ArrowUpRight className="h-3.5 w-3.5 text-bl-bronze-75" aria-hidden />
                                                <span className="text-bl-navy/80">+124%</span>
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                    <span className="text-bl-navy/50 font-normal">vs last month</span>
                                    </div>
                        </motion.div>
                    </div>
                </div>
			</div>
		</div>
	);
}
