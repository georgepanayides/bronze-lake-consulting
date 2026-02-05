"use client";

import { motion, type Variants } from "framer-motion";
import {
    CheckCircle2,
    ChevronRight,
    FileText,
    LineChart,
    Target,
} from "lucide-react";
import { useId } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function StrategyRoadmap() {
    const patternId = useId();

    const deckVariants: Variants = {
        hidden: { opacity: 0, y: 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 70, damping: 18 },
        },
    };

    const contentVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.15 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    const thumbs = [
        { id: "t1", title: "CONTEXT", subtitle: "WHAT’S CHANGED" },
        { id: "t2", title: "STRATEGY", subtitle: "PILLARS + PRIORITIES", active: true },
        { id: "t3", title: "ROADMAP", subtitle: "90-DAY PLAN" },
        { id: "t4", title: "MEASUREMENT", subtitle: "KPIS + GOVERNANCE" },
    ];

    return (
        <figure className="w-full h-full min-h-[320px] flex items-center justify-center p-6 bg-bl-cream-50/60 relative overflow-hidden">
            {/* Subtle dotted backdrop (brand-safe, no inline styles) */}
            <svg
                className="absolute inset-0 w-full h-full text-bl-cream-200/60"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id={`bl-dots-${patternId}`}
                        width="18"
                        height="18"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx="1" cy="1" r="1" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#bl-dots-${patternId})`} />
            </svg>

            {/* Presentation Deck Mock */}
            <motion.div
                className="w-300 bg-white rounded-lg border border-bl-cream-200 overflow-hidden absolute left-0 top-0"
                variants={deckVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Deck chrome */}
                <header className="h-11 border-b border-bl-cream-200 bg-bl-cream-50/40 flex items-center justify-between px-4">
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded border border-bl-cream-200 bg-bl-cream-50 flex items-center justify-center">
                            <Image
                            src={"/icons/bl-brand-icon.svg"}
                            alt="Bronze Lake Logo"
                            width={220}
                            height={170}
                            className="w-5 h-5"
                            />
                        </div>
                        <div className="leading-none">
                            <p className="text-[10px] font-archivo uppercase tracking-widest text-bl-navy">Bronze Lake Consulting</p>
                            <p className="mt-0.5 text-[9px] font-archivo uppercase tracking-widest text-bl-navy/45">
                                Strategy Presentation • v1.0
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-2">
                            <div className="h-1.5 w-10 rounded-full bg-bl-cream-200 overflow-hidden">
                                <div className="h-full w-1/2 bg-bl-bronze-50" />
                            </div>
                            <span className="text-[9px] font-archivo uppercase tracking-widest text-bl-navy/45">Slide 2 / 5</span>
                        </div>

                        <div className="px-2 py-1 rounded border border-bl-cream-200 bg-white flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-bl-bronze-75" />
                            <span className="text-[9px] font-archivo uppercase tracking-widest text-bl-navy/60">Approved</span>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-[160px_1fr] sm:grid-cols-[180px_1fr]">
                    {/* Slide rail */}
                    <aside className="border-r border-bl-cream-200 bg-bl-cream-50/25 p-3">
                        <p className="text-[10px] font-archivo uppercase tracking-widest text-bl-navy/45">Deck</p>
                        <div className="mt-3 space-y-2">
                            {thumbs.map((t, idx) => (
                                <div
                                    key={t.id}
                                    className={cn(
                                        "rounded-md border border-bl-cream-200 bg-white p-2",
                                        "shadow-[0_1px_0_rgba(0,0,0,0.03)]",
                                        t.active && "ring-1 ring-bl-bronze-75/30"
                                    )}
                                    aria-hidden="true"
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <p className="text-[9px] font-libre uppercase tracking-wide text-bl-navy">{t.title}</p>
                                            <p className="mt-0.5 text-[8px] font-archivo uppercase tracking-widest text-bl-navy/45">
                                                {t.subtitle}
                                            </p>
                                        </div>
                                        <span className="text-[9px] font-archivo uppercase tracking-widest text-bl-navy/35">
                                            0{idx + 1}
                                        </span>
                                    </div>
                                    <div className="mt-2 aspect-[16/9] rounded border border-bl-cream-200 bg-bl-cream-50/40 p-2">
                                        <div className="h-1.5 w-3/4 rounded bg-bl-cream-200" />
                                        <div className="mt-1.5 h-1.5 w-2/3 rounded bg-bl-cream-200" />
                                        <div className="mt-3 grid grid-cols-3 gap-1">
                                            <div className="h-6 rounded border border-bl-cream-200 bg-white" />
                                            <div className="h-6 rounded border border-bl-cream-200 bg-white" />
                                            <div className="h-6 rounded border border-bl-cream-200 bg-white" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Main slide */}
                    <motion.article
                        className="p-5 sm:p-6"
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants} className="flex items-start justify-between gap-4">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded border border-bl-cream-200 bg-bl-cream-50/40 px-2 py-1">
                                    <Target className="w-3.5 h-3.5 text-bl-bronze-75" />
                                    <span className="text-[10px] font-archivo uppercase tracking-widest text-bl-navy/70">
                                        Strategic Blueprint
                                    </span>
                                </div>
                                <h3 className="mt-3 text-2xl sm:text-3xl font-libre uppercase tracking-tight text-bl-navy">
                                    Strategy Roadmap
                                </h3>
                                <p className="mt-1 text-[11px] font-archivo uppercase tracking-widest text-bl-navy/55">
                                    Align priorities • De-risk delivery • Measure impact
                                </p>
                            </div>

                            <div className="hidden md:block rounded border border-bl-cream-200 bg-white px-3 py-2">
                                <p className="text-[10px] font-archivo uppercase tracking-widest text-bl-navy/45">Client</p>
                                <p className="mt-1 text-[11px] font-archivo uppercase tracking-widest text-bl-navy">Omni-Channel Programme</p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4"
                        >
                            {/* Left: narrative blocks */}
                            <section className="rounded-lg border border-bl-cream-200 bg-bl-cream-50/30 p-4 max-h-52">
                                <p className="text-[10px] font-libre uppercase tracking-wide text-bl-navy">What we’re solving</p>
                                <ul className="mt-3 space-y-2">
                                    <RoadmapBullet>Too many priorities, not enough clarity</RoadmapBullet>
                                    <RoadmapBullet>Delivery risk hidden until late</RoadmapBullet>
                                    <RoadmapBullet>KPIs inconsistent across teams</RoadmapBullet>
                                </ul>

                                <div className="mt-4 grid grid-cols-3 gap-2">
                                    <MetricCard icon={FileText} label="Scope" value="Defined" />
                                    <MetricCard icon={LineChart} label="KPIs" value="Owned" />
                                    <MetricCard icon={CheckCircle2} label="Governance" value="Live" />
                                </div>
                            </section>

                            {/* Right: roadmap */}
                            <section className="rounded-lg border border-bl-cream-200 bg-white p-4 max-h-52">
                                <div className="flex items-center justify-between">
                                    <p className="text-[10px] font-libre uppercase tracking-wide text-bl-navy">90-day roadmap</p>
                                    <div className="flex items-center gap-1 text-bl-navy/45">
                                        <span className="text-[9px] font-archivo uppercase tracking-widest">Now</span>
                                        <ChevronRight className="w-3 h-3" />
                                        <span className="text-[9px] font-archivo uppercase tracking-widest">Next</span>
                                    </div>
                                </div>

                                <div className="mt-4 space-y-3">
                                    <PhaseRow phase="Discover" detail="Audit + baseline" emphasis="High" />
                                    <PhaseRow phase="Design" detail="Priorities + plan" emphasis="High" />
                                    <PhaseRow phase="Deliver" detail="Quick wins" emphasis="Medium" />
                                    <PhaseRow phase="Measure" detail="Dashboards" emphasis="Medium" />
                                </div>

                                <div className="mt-4 rounded border border-bl-cream-200 bg-bl-cream-50/30 p-3">
                                    <p className="text-[9px] font-archivo uppercase tracking-widest text-bl-navy/45">Outputs</p>
                                    <div className="mt-2 grid grid-cols-3 gap-2">
                                        <Pill>PRIORITIES</Pill>
                                        <Pill>ROADMAP</Pill>
                                        <Pill>KPIS</Pill>
                                    </div>
                                </div>
                            </section>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-4 rounded-lg border border-bl-cream-200 bg-white p-4"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <p className="text-[10px] font-libre uppercase tracking-wide text-bl-navy">Strategy pillars</p>
                                <p className="text-[9px] font-archivo uppercase tracking-widest text-bl-navy/45">
                                    A clear story leadership can repeat
                                </p>
                            </div>

                            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <PillarCard title="Positioning" lines={["Define advantage", "Clarify audience", "Own narrative"]} />
                                <PillarCard title="Operations" lines={["Remove friction", "Standardise flows", "Ship faster"]} />
                                <PillarCard title="Measurement" lines={["Single KPI set", "Weekly cadence", "Accountability"]} />
                            </div>
                        </motion.div>
                    </motion.article>
                </div>
            </motion.div>

            <figcaption className="sr-only">
                A branded presentation-style mockup showing a strategy roadmap with slide thumbnails, pillars, and a 90-day plan.
            </figcaption>
        </figure>
    );
}

function RoadmapBullet({ children }: { children: string }) {
    return (
        <li className="flex items-start gap-2">
            <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-bl-bronze-50 shrink-0" aria-hidden="true" />
            <span className="text-[11px] font-archivo text-bl-navy/70 leading-snug">{children}</span>
        </li>
    );
}

function MetricCard({
    icon: Icon,
    label,
    value,
}: {
    icon: typeof FileText;
    label: string;
    value: string;
}) {
    return (
        <div className="rounded border border-bl-cream-200 bg-white px-2.5 py-2">
            <div className="flex items-center justify-between gap-2">
                <p className="text-[9px] font-archivo uppercase tracking-widest text-bl-navy/45">{label}</p>
                <Icon className="w-3.5 h-3.5 text-bl-navy/35" aria-hidden="true" />
            </div>
            <p className="mt-1 text-[10px] font-archivo uppercase tracking-widest text-bl-navy">{value}</p>
        </div>
    );
}

function PhaseRow({
    phase,
    detail,
    emphasis,
}: {
    phase: string;
    detail: string;
    emphasis: "High" | "Medium" | "Low";
}) {
    const fillWidth = emphasis === "High" ? "w-[82%]" : emphasis === "Medium" ? "w-[64%]" : "w-[46%]";
    const fillColor = emphasis === "High" ? "bg-bl-bronze-50" : "bg-bl-cream-200";

    return (
        <div className="grid grid-cols-[84px_1fr] items-center gap-3">
            <div>
                <p className="text-[10px] font-libre uppercase tracking-wide text-bl-navy">{phase}</p>
                <p className="mt-0.5 text-[9px] font-archivo uppercase tracking-widest text-bl-navy/45">{detail}</p>
            </div>
            <div className="h-3 rounded-full border border-bl-cream-200 bg-bl-cream-50 overflow-hidden">
                <div className={cn("h-full rounded-full", fillColor, fillWidth)} />
            </div>
        </div>
    );
}

function Pill({ children }: { children: string }) {
    return (
        <div className="rounded-full border border-bl-cream-200 bg-white px-3 py-1 text-center">
            <span className="text-[9px] font-archivo uppercase tracking-widest text-bl-navy/70">{children}</span>
        </div>
    );
}

function PillarCard({ title, lines }: { title: string; lines: [string, string, string] }) {
    return (
        <div className="rounded border border-bl-cream-200 bg-bl-cream-50/30 p-3">
            <p className="text-[10px] font-libre uppercase tracking-wide text-bl-navy">{title}</p>
            <div className="mt-2 space-y-1.5">
                {lines.map((l) => (
                    <div key={l} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-bl-bronze-50" aria-hidden="true" />
                        <span className="text-[10px] font-archivo uppercase tracking-widest text-bl-navy/55">{l}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
