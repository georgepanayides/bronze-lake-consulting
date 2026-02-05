"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function ReportingGraphicTabs() {
    const dashboardRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(dashboardRef, { once: true, amount: 0.35 });

  return (
                <div className="w-300 h-full flex items-center justify-center overflow-hidden relative">
      {/* The "Zoomed In" Dashboard Container - Position Preserved */}
        <motion.div
                                ref={dashboardRef}
                initial={{ opacity: 0, y: 6, scale: 0.995 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : undefined}
                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute top-5 left-5 w-[140%] h-[140%] md:w-[130%] md:h-[130%] bg-white rounded-xl border border-bl-cream-200 flex flex-col overflow-hidden shadow-2xl shadow-bl-cream-200"
        >
        
        {/* --- Top Navigation Bar --- */}
                                <div className="h-14 border-b border-bl-cream-200 flex items-center justify-between px-4 bg-white z-10 shrink-0">
            {/* Start: Branded Icon + Title */}
                        <div className="flex items-center gap-2">
                <Image
                src={"/icons/bl-brand-icon.svg"}
                alt=""
                width={220}
                height={160}
                                className="w-10 h-8 -rotate-15"
                />
                <div className="flex flex-col gap-0.5 opacity-40 grayscale">
                                         <h2 className="font-libre uppercase tracking-widest text-bl-navy text-sm">Bronze Lake</h2>
                </div>
            </div>

            {/* End: (Right nav removed as requested) */}
            <div className="flex gap-2 opacity-20">
                <div className="w-6 h-6 bg-gray-100 rounded-full" />
                <div className="w-6 h-6 bg-gray-100 rounded-full" />
            </div>
        </div>

        {/* --- Dashboard Body --- */}
        <div className="flex-1 flex bg-bl-cream-50/70">
            {/* Main Content Area - Compact Mode */}
            <div className="flex-1 p-6 overflow-hidden">
                <div className="h-full min-h-0 flex flex-col gap-1">
                    
                    {/* Header: Compact (flex so it doesn't reserve row height) */}
                    <div className="flex items-start justify-between gap-2 shrink-0">
                        <div className="min-w-0 mb-2">
                            <h2 className="text-base font-libre font-bold text-bl-navy tracking-tight leading-none">Q3 Performance</h2>
                            <p className="text-[10px] font-archivo text-bl-navy/45 mt-2 leading-none uppercase tracking-wider">Real-time metrics overview</p>
                        </div>
                        <div className="shrink-0">
                             <div className="px-2 py-1 rounded border border-bl-cream-200 text-[8px] font-archivo font-medium text-bl-navy/55 bg-white shadow-sm uppercase tracking-wider">Export</div>
                        </div>
                    </div>

                    {/* KPI Row (flex, tighter) */}
                    <div className="flex gap-3 shrink-0 mb-2">
                        <motion.div className="flex-1 min-w-0" initial={{ opacity: 0, y: 3 }} animate={isInView ? { opacity: 1, y: 0 } : undefined} transition={{ delay: 0.05, duration: 0.4, ease: "easeOut" }}>
                            <KpiCardCompact label="Revenue" value="$4.2M" change="+12%" trend="up" />
                        </motion.div>
                        <motion.div className="flex-1 min-w-0" initial={{ opacity: 0, y: 3 }} animate={isInView ? { opacity: 1, y: 0 } : undefined} transition={{ delay: 0.10, duration: 0.4, ease: "easeOut" }}>
                            <KpiCardCompact label="Users" value="842" change="+3.2%" trend="up" />
                        </motion.div>
                        <motion.div className="flex-1 min-w-0" initial={{ opacity: 0, y: 3 }} animate={isInView ? { opacity: 1, y: 0 } : undefined} transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}>
                            <KpiCardCompact label="Bounce" value="42%" change="-1%" trend="down" good={true} />
                        </motion.div>
                        <motion.div className="flex-1 min-w-0" initial={{ opacity: 0, y: 3 }} animate={isInView ? { opacity: 1, y: 0 } : undefined} transition={{ delay: 0.20, duration: 0.4, ease: "easeOut" }}>
                            <KpiCardCompact label="Session" value="4m 32s" change="+0.8%" trend="up" />
                        </motion.div>
                    </div>

                    {/* Middle Row */}
                    <div className="flex-[2] min-h-0 max-h-56 flex gap-3">
                        {/* Main Graph */}
                        <motion.div
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="flex-[1] max-w-72 bg-white rounded-[2px] border border-bl-cream-200 p-3 shadow-sm shadow-bl-cream-200 flex flex-col overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-1 shrink-0">
                                <h3 className="font-archivo font-semibold text-bl-navy/60 text-[10px] uppercase tracking-wider leading-none">Revenue Trend</h3>
                            </div>
                            <div className="flex-1 min-h-0 relative w-full">
                                <motion.div
                                    aria-hidden
                                    className="pointer-events-none absolute -inset-6 bg-gradient-to-r from-transparent via-bl-bronze-50/20 to-transparent"
                                    initial={{ x: "-30%", opacity: 0 }}
                                    animate={isInView ? { x: ["-30%", "130%"], opacity: [0, 1, 0] } : { opacity: 0 }}
                                    transition={isInView ? { duration: 2.8, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" } : undefined}
                                />
                                <BarTrendChart animate={isInView} />
                            </div>
                        </motion.div>

                        {/* Right Stack */}
                        <div className="flex-1 min-w-0 flex flex-col gap-3 min-h-0">
                            <motion.div
                                whileHover={{ y: -1 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="bg-white rounded-[2px] border border-bl-cream-200 p-2.5 shadow-sm shadow-bl-cream-200 flex items-center gap-3 flex-1 min-h-0"
                            >
                                <div className="h-14 w-14 shrink-0">
                                    <DonutChart animate={isInView} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h4 className="text-[9px] font-archivo font-semibold text-bl-navy/60 leading-none uppercase tracking-wider">Distribution</h4>
                                    <div className="mt-2 space-y-1">
                                        <div className="flex items-center justify-between text-[8px] text-bl-navy/45 font-archivo uppercase tracking-wider">
                                            <div className="flex items-center gap-1.5 min-w-0"><div className="w-1.5 h-1.5 bg-bl-bronze-75 rounded-full"/><span className="truncate">Mobile</span></div>
                                            <span className="shrink-0">65%</span>
                                        </div>
                                        <div className="flex items-center justify-between text-[8px] text-bl-navy/45 font-archivo uppercase tracking-wider">
                                            <div className="flex items-center gap-1.5 min-w-0"><div className="w-1.5 h-1.5 bg-bl-navy/40 rounded-full"/><span className="truncate">Desktop</span></div>
                                            <span className="shrink-0">35%</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ y: -1 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="flex-1 min-h-0 bg-white rounded-[2px] border border-bl-cream-200 p-2.5 shadow-sm shadow-bl-cream-200 flex flex-col justify-center"
                            >
                                <div className="space-y-1">
                                    <SourceRow label="Direct" val="45%" color="bg-bl-bronze-75" />
                                    <SourceRow label="Social" val="32%" color="bg-bl-bronze-50" />
                                    <SourceRow label="Organic" val="23%" color="bg-bl-navy/35" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex-1 max-h-40 flex gap-3 mt-2">
                        <motion.div
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="flex-[1] min-w-0 bg-white rounded-[2px] border border-bl-cream-200 p-2.5 shadow-sm shadow-bl-cream-200 flex flex-col min-h-0"
                        >
                             <h4 className="text-[9px] font-archivo font-medium text-bl-navy/45 mb-1 leading-none shrink-0 uppercase tracking-wider">Regional Heatmap</h4>
                             <div className="flex-1 min-h-0">
                                <div className="relative h-full w-full bg-bl-cream-50 rounded border border-bl-cream-200 overflow-hidden">
                                    <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(var(--color-bl-navy)_1px,transparent_1px),linear-gradient(90deg,var(--color-bl-navy)_1px,transparent_1px)] bg-[size:18px_18px]" />

                                    <motion.div
                                        className="relative z-10 h-full w-full"
                                        initial="hidden"
                                        animate={isInView ? "show" : "hidden"}
                                        variants={{
                                            hidden: {},
                                            show: {
                                                transition: { staggerChildren: 0.08, delayChildren: 0.12 },
                                            },
                                        }}
                                    >
                                        <motion.div
                                            variants={{ hidden: { opacity: 0, scale: 0.5 }, show: { opacity: 1, scale: 1 } }}
                                            transition={{ type: "spring", stiffness: 260, damping: 18 }}
                                            className={cn(
                                                "absolute left-[18%] top-[22%] rounded-full",
                                                "w-5 h-5 bg-bl-bronze-75/28 ring-1 ring-bl-bronze-75/20"
                                            )}
                                        />
                                        <motion.div
                                            variants={{ hidden: { opacity: 0, scale: 0.55 }, show: { opacity: 1, scale: 1 } }}
                                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                            className={cn(
                                                "absolute right-[22%] top-[34%] rounded-full",
                                                "w-3 h-3 bg-bl-bronze-0/70 ring-1 ring-bl-cream-200/60"
                                            )}
                                        />
                                        <motion.div
                                            variants={{ hidden: { opacity: 0, scale: 0.55 }, show: { opacity: 1, scale: 1 } }}
                                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                            className={cn(
                                                "absolute left-[38%] bottom-[18%] rounded-full",
                                                "w-2.5 h-2.5 bg-bl-navy/25"
                                            )}
                                        />
                                    </motion.div>

                                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none opacity-80" />
                                </div>
                             </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                               className="flex-[1] min-w-0 bg-white rounded-[2px] border border-bl-cream-200 p-2.5 shadow-sm shadow-bl-cream-200 flex flex-col min-h-0"
                        >
                                <h4 className="text-[9px] font-archivo font-medium text-bl-navy/45 mb-2 leading-none shrink-0 uppercase tracking-wider">Conversions</h4>
                             <div className="flex-1 min-h-0">
                                          <ConversionMiniChart animate={isInView} />
                             </div>
                        </motion.div>

                         <motion.div
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                                     className="flex-[2] min-w-0 bg-white rounded-[2px] border border-bl-cream-200 p-2.5 shadow-sm shadow-bl-cream-200 flex flex-col min-h-0"
                         >
                             <h4 className="text-[9px] font-archivo font-medium text-bl-navy/45 mb-1 leading-none shrink-0 uppercase tracking-wider">Team Velocity</h4>
                             <div className="flex-1 min-h-0 flex items-end gap-[3px] border-b border-bl-cream-200">
                                 {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85].map((h, i) => (
                                     <motion.div 
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={isInView ? { height: `${h}%` } : { height: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex-1 bg-bl-cream-200 rounded-t-[2px] hover:bg-bl-bronze-50 transition-colors"
                                     />
                                 ))}
                             </div>
                         </motion.div>
                    </div>

                </div>
            </div>
        </div>
    </motion.div>
    </div>
  );
}

// --- Micro-Components (Compacted) ---

type KpiTrend = "up" | "down";

type KpiCardCompactProps = {
    label: string;
    value: string;
    change: string;
    trend: KpiTrend;
    good?: boolean;
};

function KpiCardCompact({ label, value, change, trend, good = true }: KpiCardCompactProps) {
    const trendColor = trend === "up" ? "text-bl-bronze-75" : good ? "text-bl-bronze-0" : "text-bl-navy/50";
    return (
        <motion.div
            whileHover={{ y: -1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-white rounded-[2px] border border-bl-cream-200 px-2.5 py-2 shadow-sm shadow-bl-cream-200 flex flex-col justify-between h-[60px]"
        >
            <span className="text-[8px] font-archivo font-medium text-bl-navy/45 uppercase tracking-wider leading-none">{label}</span>
            <div className="flex items-baseline gap-1 leading-none">
                <span className="text-[14px] font-libre font-bold text-bl-navy tracking-tight">{value}</span>
            </div>
            <div className={cn("inline-flex items-center text-[8px] font-medium gap-0.5 leading-none", trendColor)}>
                <span>{trend === "up" ? '↑' : '↓'}</span>
                <span>{change}</span>
            </div>
        </motion.div>
    )
}

type SourceRowProps = {
    label: string;
    val: string;
    color: string;
};

function SourceRow({ label, val, color }: SourceRowProps) {
    return (
        <div className="flex items-center justify-between text-[8px] leading-none">
            <div className="flex items-center gap-2">
                <div className={cn("w-1.5 h-1.5 rounded-full", color)} />
                <span className="text-bl-navy/55 font-archivo uppercase tracking-wider">{label}</span>
            </div>
            <span className="font-semibold text-bl-navy">{val}</span>
        </div>
    )
}

function BarTrendChart({ animate }: { animate: boolean }) {
    // Values are 0..100-ish; the chart scales to the max.
    const data = [28, 32, 30, 36, 41, 38, 45, 52, 49, 58, 66, 62, 70, 78, 74];
    const max = Math.max(...data, 1);

    return (
        <div className="w-full h-full min-h-0 flex flex-col">
            <div className="relative flex-1 min-h-0">
                {/* subtle horizontal guides */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="h-px bg-bl-cream-200" />
                    <div className="h-px bg-bl-cream-200" />
                    <div className="h-px bg-bl-cream-200" />
                </div>

                <div className="absolute inset-0 flex items-end gap-[2px]">
                    {data.map((value, i) => {
                        const heightPct = Math.max(6, Math.round((value / max) * 100));
                        const isHighlight = i > data.length - 4;

                        return (
                            <motion.div
                                key={i}
                                initial={{ height: 0, opacity: 0.6 }}
                                animate={animate ? { height: `${heightPct}%`, opacity: 1 } : { height: 0, opacity: 0.6 }}
                                transition={{ delay: i * 0.03, duration: 0.5, ease: "easeOut" }}
                                className={cn(
                                    "flex-1 rounded-t-[2px]",
                                    isHighlight ? "bg-bl-bronze-75" : "bg-bl-cream-200"
                                )}
                            />
                        );
                    })}
                </div>

                {/* soft gradient fade */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>

            {/* micro labels */}
            <div className="mt-2 flex justify-between text-[7px] text-bl-navy/30 leading-none">
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
            </div>
        </div>
    );
}

function ConversionMiniChart({ animate }: { animate: boolean }) {
    const data = [18, 26, 22, 35, 28, 42, 38, 55, 46];
    const max = Math.max(...data, 1);

    return (
        <div className="w-full h-full min-h-0 flex flex-col">
            <div className="flex-1 min-h-0 flex items-end gap-[2px]">
                {data.map((value, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0.7 }}
                        animate={animate ? { height: `${Math.max(8, Math.round((value / max) * 100))}%`, opacity: 1 } : { height: 0, opacity: 0.7 }}
                        transition={{ delay: i * 0.04, duration: 0.45, ease: "easeOut" }}
                        className={cn(
                            "flex-1 rounded-t-[2px]",
                            i % 3 === 0 ? "bg-bl-bronze-50" : "bg-bl-cream-200"
                        )}
                    />
                ))}
            </div>
            <div className="mt-2 flex items-center justify-between text-[7px] text-bl-navy/30 leading-none shrink-0">
                <span>Leads</span>
                <span>CVR</span>
            </div>
        </div>
    );
}

function DonutChart({ animate }: { animate: boolean }) {
    return (
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="15.915" fill="none" stroke="currentColor" strokeWidth="4" className="text-bl-cream-200" />
            <motion.circle 
                initial={{ strokeDasharray: "0 100" }}
                animate={{ strokeDasharray: animate ? "40 100" : "0 100" }}
                transition={{ duration: 1, delay: 0.5 }}
                cx="18" cy="18" r="15.915" fill="none" stroke="currentColor" strokeWidth="4" strokeDashoffset="0" className="text-bl-bronze-75"
            />
            <motion.circle 
                initial={{ strokeDasharray: "0 100" }}
                animate={{ strokeDasharray: animate ? "25 100" : "0 100" }}
                transition={{ duration: 1, delay: 0.8 }}
                cx="18" cy="18" r="15.915" fill="none" stroke="currentColor" strokeWidth="4" strokeDashoffset="-40" className="text-bl-navy/30"
            />
        </svg>
    )
}
