"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, FileText, Folder } from "lucide-react";
import { useEffect, useState } from "react";

const CURSOR_MOVE_S = 0.75;
const CURSOR_HOLD_S = 1.15;
const POPOVER_EXTRA_HOLD_S = 0.9;

const POPOVER_STOP_INDICES = new Set([0, 4, 6]);

const ACTIVE_CELLS = [
    { row: 2, col: 1, delay: 0 },
    { row: 5, col: 3, delay: 1.5 },
    { row: 8, col: 0, delay: 0.8 },
    { row: 3, col: 4, delay: 2.2 },
    { row: 1, col: 5, delay: 1.1 },
    { row: 6, col: 2, delay: 2.8 },
    { row: 9, col: 4, delay: 0.4 },
];

// Sequence for the "cursor" to travel (final step returns to start for a natural loop)
const CURSOR_STOPS = [
    { top: 160, left: 240 }, // popover stop (kept away from edges)
    { top: 120, left: 480 }, // row 3, col 4
    { top: 200, left: 360 }, // row 5, col 3
    { top: 240, left: 240 }, // row 6, col 2
    { top: 280, left: 240 }, // popover stop (kept away from edges)
    { top: 360, left: 480 }, // row 9, col 4
    { top: 200, left: 360 }, // popover stop (kept away from edges)
    { top: 160, left: 240 }, // back to start (loop)
];

function buildCursorTimeline(stops: Array<{ top: number; left: number }>) {
    const holdSecondsForStop = (stopIndex: number) =>
        CURSOR_HOLD_S + (POPOVER_STOP_INDICES.has(stopIndex) ? POPOVER_EXTRA_HOLD_S : 0);

    const topKeyframes: number[] = [stops[0].top, stops[0].top];
    const leftKeyframes: number[] = [stops[0].left, stops[0].left];
    const rawTimes: number[] = [0, holdSecondsForStop(0)];
    const holdStartSeconds: number[] = [0];
    const holdSecondsByStop: number[] = [holdSecondsForStop(0)];

    let elapsed = holdSecondsForStop(0);

    for (let i = 1; i < stops.length; i += 1) {
        elapsed += CURSOR_MOVE_S;
        topKeyframes.push(stops[i].top);
        leftKeyframes.push(stops[i].left);
        rawTimes.push(elapsed);
        holdStartSeconds.push(elapsed);

        const holdSeconds = holdSecondsForStop(i);
        holdSecondsByStop.push(holdSeconds);

        elapsed += holdSeconds;
        topKeyframes.push(stops[i].top);
        leftKeyframes.push(stops[i].left);
        rawTimes.push(elapsed);
    }

    const totalDurationSeconds = elapsed;
    const times = rawTimes.map((t) => t / totalDurationSeconds);

    return { topKeyframes, leftKeyframes, times, holdStartSeconds, holdSecondsByStop, totalDurationSeconds };
}

const CURSOR_TIMELINE = buildCursorTimeline(CURSOR_STOPS);

const POPOVERS_BY_STOP = new Map<
    number,
    {
        title: string;
        files: Array<{ name: string; detail?: string }>;
    }
>([
    [
        0,
        {
            title: "Open folder",
            files: [
                { name: "2026 — Quarterly Report (Q1)", detail: "PDF • Final" },
            ],
        },
    ],
    [
        4,
        {
            title: "Order check",
            files: [
                { name: "2026 — Quarterly Report (Q2)", detail: "PDF • Draft" },
            ],
        },
    ],
    [
        6,
        {
            title: "Need help?",
            files: [
                { name: "2026 — KPI Summary", detail: "XLSX • Updated" },
            ],
        },
    ],
]);

export function OrderGraphic() {
    const prefersReducedMotion = useReducedMotion();
    const [pulseNonce, setPulseNonce] = useState(0);
    const [activePopoverStop, setActivePopoverStop] = useState<number | null>(null);

    useEffect(() => {
        if (prefersReducedMotion) return;

        let hideTimeout: number | undefined;
        let cycleTimeouts: number[] = [];

        const scheduleCycle = () => {
            cycleTimeouts.forEach((t) => window.clearTimeout(t));
            cycleTimeouts = [];

            CURSOR_TIMELINE.holdStartSeconds.forEach((holdStartSeconds, stopIndex) => {
                cycleTimeouts.push(
                    window.setTimeout(() => {
                        const popover = POPOVERS_BY_STOP.get(stopIndex);
                        if (!popover) return;

                        setPulseNonce((n) => n + 1);

                        setActivePopoverStop(stopIndex);
                        if (hideTimeout) window.clearTimeout(hideTimeout);

                        const exitAnimationMs = 180;
                        const moveBufferMs = 320;
                        const holdSeconds =
                            CURSOR_TIMELINE.holdSecondsByStop[stopIndex] ?? CURSOR_HOLD_S;
                        const hideDelayMs = Math.max(
                            350,
                            Math.round(holdSeconds * 1000 - (exitAnimationMs + moveBufferMs))
                        );
                        hideTimeout = window.setTimeout(() => {
                            setActivePopoverStop((current) => (current === stopIndex ? null : current));
                        }, hideDelayMs);
                    }, holdStartSeconds * 1000)
                );
            });
        };

        scheduleCycle();
        const cycleInterval = window.setInterval(scheduleCycle, CURSOR_TIMELINE.totalDurationSeconds * 1000);

        return () => {
            cycleTimeouts.forEach((t) => window.clearTimeout(t));
            if (hideTimeout) window.clearTimeout(hideTimeout);
            window.clearInterval(cycleInterval);
        };
    }, [prefersReducedMotion]);

    const activePopover = activePopoverStop == null ? null : POPOVERS_BY_STOP.get(activePopoverStop) ?? null;

    return (
        <div className="w-full h-full bg-bl-cream-50 flex items-center justify-center relative overflow-hidden select-none">
            {/* Excel-like Grid Background */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                {/* Horizontal Lines */}
                <div className="absolute inset-0" style={{ 
                    backgroundImage: 'linear-gradient(to bottom, #1e293b 1px, transparent 1px)', 
                    backgroundSize: '100% 40px',
                    opacity: 0.1
                }} />
                {/* Vertical Lines */}
                <div className="absolute inset-0" style={{ 
                    backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px)', 
                    backgroundSize: '120px 100%',
                    opacity: 0.1
                }} />
                
                {/* Animated Cells */}
                <div className="absolute inset-0">
                    {ACTIVE_CELLS.map((cell, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-bl-bronze-50/20"
                            style={{
                                width: 120, 
                                height: 40,
                                top: cell.row * 40, 
                                left: cell.col * 120, 
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity,
                                delay: cell.delay,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                    
                    {/* Moving "Selection" Cursor - The "Order" indicator */}
                    <motion.div
                        className="absolute border-2 border-bl-bronze-75 bg-bl-bronze-50/10 shadow-sm z-10"
                        style={{ width: 120, height: 40 }}
                        animate={{
                            top: CURSOR_TIMELINE.topKeyframes,
                            left: CURSOR_TIMELINE.leftKeyframes,
                        }}
                        transition={{
                            duration: CURSOR_TIMELINE.totalDurationSeconds,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: CURSOR_TIMELINE.times
                        }}
                    >
                        {/* Click-pop micro animation */}
                        {!prefersReducedMotion ? (
                            <motion.div
                                key={pulseNonce}
                                className="absolute inset-0 rounded-[1px] border border-bl-bronze-75/35 bg-bl-bronze-75/10"
                                initial={{ scale: 1, opacity: 0 }}
                                animate={{ scale: [1, 0.965, 1.035, 1], opacity: [0, 1, 1, 0] }}
                                transition={{ duration: 0.55, ease: "easeOut" }}
                            />
                        ) : null}

                        {/* Popover (attached to cursor so it stays above active cell) */}
                        <AnimatePresence>
                            {!prefersReducedMotion && activePopover ? (
                                <motion.div
                                    key={activePopoverStop}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.18, ease: "easeOut" }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[260px] pointer-events-none z-20"
                                >
                                    <div className="bg-white border border-bl-cream-200 rounded-[1px] shadow-[0_0_22px_rgba(0,0,0,0.12)] overflow-hidden">
                                        <div className="px-4 py-3 border-b border-bl-cream-200 bg-bl-cream-50/60 flex items-center gap-2">
                                            <Folder className="w-4 h-4 text-bl-bronze-75" />
                                            <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
                                                {activePopover.title}
                                            </p>
                                        </div>
                                        <div className="px-2 py-2">
                                            <div className="bg-white border border-bl-cream-200 rounded-[1px] overflow-hidden">
                                                {activePopover.files.map((file) => (
                                                    <div
                                                        key={file.name}
                                                        className="flex items-start gap-3 px-3 py-2 border-b last:border-b-0 border-bl-cream-200"
                                                    >
                                                        <FileText className="w-4 h-4 mt-0.5 text-bl-bronze-75" />
                                                        <div className="min-w-0">
                                                            <p className="text-sm font-archivo text-bl-navy/85 leading-snug truncate">
                                                                {file.name}
                                                            </p>
                                                            {file.detail ? (
                                                                <p className="text-[0.7rem] font-archivo uppercase tracking-widest text-bl-navy/50">
                                                                    {file.detail}
                                                                </p>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-3 h-3 bg-white border-r border-b border-bl-cream-200 rotate-45 mx-auto -mt-[7px]" />
                                </motion.div>
                            ) : null}
                        </AnimatePresence>

                        {/* Little "handle" at bottom right of cursor */}
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-bl-bronze-75 border border-white" />
                    </motion.div>
                </div>
            </div>

            {/* Center Text */}
            <div className="relative z-10 text-center max-w-lg p-8 pointer-events-none">
                <div className="inline-flex items-center gap-2 text-bl-navy mb-4 bg-white px-3 py-1 rounded-[1px] border border-bl-cream-200">
                    <CheckCircle2 className="w-4 h-4 text-bl-bronze-75" />
                    <span className="uppercase tracking-widest text-[0.65rem] font-light font-archivo">Bronze Lake Impact</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-libre text-bl-navy mb-6 leading-tight uppercase">
                    Strategic <br/> <span className="text-bl-bronze-75">Clarity</span>
                </h3>
                <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-left">
                    <li className="flex items-center gap-3 text-bl-navy/80 font-archivo whitespace-nowrap">
                        <CheckCircle2 className="w-5 h-5 text-bl-bronze-75 shrink-0" />
                        Data-Led Confidence
                    </li>
                    <li className="flex items-center gap-3 text-bl-navy/80 font-archivo whitespace-nowrap">
                        <CheckCircle2 className="w-5 h-5 text-bl-bronze-75 shrink-0" />
                        Automated Intelligence
                    </li>
                    <li className="flex items-center gap-3 text-bl-navy/80 font-archivo whitespace-nowrap">
                        <CheckCircle2 className="w-5 h-5 text-bl-bronze-75 shrink-0" />
                        Scalable Growth
                    </li>
                </ul>
            </div>
        </div>
    );
}
