"use client";

import {
    AlertTriangle,
    Bug,
    FileQuestion,
    HelpCircle,
    Siren,
    XCircle,
    Zap,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useMemo } from "react";

const EASE_IN_OUT: [number, number, number, number] = [0.42, 0, 0.58, 1];

const spaceFloatSlow = {
    animate: {
        x: [0, 34, -28, 0],
        y: [0, -26, 36, 0],
        rotate: [0, 14, -14, 0],
        transition: { duration: 18, repeat: Infinity, ease: EASE_IN_OUT },
    },
} satisfies Variants;

const spaceFloatMedium = {
    animate: {
        x: [0, -42, 28, 0],
        y: [0, 30, -22, 0],
        rotate: [0, -10, 8, 0],
        transition: { duration: 14, repeat: Infinity, ease: EASE_IN_OUT },
    },
} satisfies Variants;

const spaceFloatFast = {
    animate: {
        x: [0, 28, -40, 0],
        y: [0, -22, 30, 0],
        rotate: [0, 16, -14, 0],
        transition: { duration: 11, repeat: Infinity, ease: EASE_IN_OUT },
    },
} satisfies Variants;

const spaceFloatCenter = {
    animate: {
        x: [0, -14, 18, 0],
        y: [0, 14, -20, 0],
        rotate: [0, -2, 2, 0],
        transition: { duration: 9, repeat: Infinity, ease: EASE_IN_OUT },
    },
} satisfies Variants;

const PAPER_PIECES = [
    { id: "p1", pos: "top-[8%] left-[18%]", size: "w-24 h-18", dx: 46, dy: 36, rz: -10, rx: 30, ry: -25, d: 9.5, delay: 0.2 },
    { id: "p2", pos: "top-[14%] left-[72%]", size: "w-10 h-8", dx: -42, dy: 44, rz: 14, rx: -22, ry: 30, d: 10.8, delay: 1.1 },
    { id: "p3", pos: "top-[28%] left-[8%]", size: "w-8 h-7", dx: 38, dy: -30, rz: 22, rx: 18, ry: 40, d: 8.9, delay: 0.6 },
    { id: "p4", pos: "top-[34%] left-[84%]", size: "w-16 h-12", dx: -54, dy: -26, rz: -18, rx: 46, ry: -12, d: 9.9, delay: 0.9 },
    { id: "p5", pos: "top-[52%] left-[22%]", size: "w-22 h-16", dx: 44, dy: 34, rz: 8, rx: -34, ry: 18, d: 11.2, delay: 1.4 },
    { id: "p6", pos: "top-[62%] left-[66%]", size: "w-9 h-9", dx: -36, dy: 40, rz: 26, rx: 28, ry: -40, d: 10.4, delay: 0.3 },
    { id: "p7", pos: "top-[70%] left-[10%]", size: "w-18 h-14", dx: 58, dy: -22, rz: -6, rx: 52, ry: 10, d: 9.1, delay: 1.7 },
    { id: "p8", pos: "top-[76%] left-[82%]", size: "w-8 h-6", dx: -48, dy: -34, rz: 12, rx: -48, ry: 26, d: 10.1, delay: 0.8 },
    { id: "p9", pos: "top-[40%] left-[46%]", size: "w-26 h-18", dx: 36, dy: -40, rz: -22, rx: 24, ry: 48, d: 12.2, delay: 0.5 },
    { id: "p10", pos: "top-[22%] left-[44%]", size: "w-10 h-7", dx: -34, dy: 28, rz: 18, rx: -18, ry: -46, d: 8.6, delay: 1.2 },
    { id: "p11", pos: "top-[86%] left-[46%]", size: "w-20 h-14", dx: 30, dy: -44, rz: 6, rx: 40, ry: -30, d: 11.6, delay: 1.9 },
    { id: "p12", pos: "top-[10%] left-[54%]", size: "w-14 h-10", dx: -26, dy: 30, rz: -26, rx: 34, ry: 22, d: 9.7, delay: 0.4 },
];

export function ChaosGraphic() {
    const paper = useMemo(() => PAPER_PIECES, []);

    return (
        <div className="w-full h-full bg-bl-cream-100 flex items-center justify-center relative overflow-hidden select-none">
            {/* Paper "confetti" squares (separate layer so they aren't faded by the background opacity) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden [perspective:900px]">
                {paper.map((p) => (
                    <motion.div
                        key={p.id}
                        className={
                            "absolute " +
                            p.pos +
                            " " +
                            p.size +
                            " bg-white border border-bl-cream-200 shadow-[0_0_22px_rgba(0,0,0,0.08)] rounded-[1px] opacity-90 [transform-style:preserve-3d]"
                        }
                        animate={{
                            x: [0, p.dx, -p.dx * 0.55, 0],
                            y: [0, p.dy, -p.dy * 0.4, 0],
                            rotateX: [p.rx, p.rx + 360],
                            rotateY: [p.ry, p.ry - 360],
                            rotateZ: [p.rz, p.rz + 360],
                        }}
                        transition={{
                            x: {
                                duration: p.d,
                                repeat: Infinity,
                                ease: EASE_IN_OUT,
                                delay: p.delay,
                            },
                            y: {
                                duration: p.d,
                                repeat: Infinity,
                                ease: EASE_IN_OUT,
                                delay: p.delay,
                            },
                            rotateX: {
                                duration: p.d,
                                repeat: Infinity,
                                ease: "linear",
                                delay: p.delay,
                            },
                            rotateY: {
                                duration: p.d,
                                repeat: Infinity,
                                ease: "linear",
                                delay: p.delay,
                            },
                            rotateZ: {
                                duration: p.d,
                                repeat: Infinity,
                                ease: "linear",
                                delay: p.delay,
                            },
                        }}
                    >
                        <div className="absolute inset-1 border border-bl-cream-200/70" />
                    </motion.div>
                ))}
            </div>

            {/* Messy Background Pattern - Drifting Elements */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
                {/* Floating "notes"/cards */}
                <motion.div
                    variants={spaceFloatMedium}
                    animate="animate"
                    className="absolute top-14 left-1/2 -translate-x-[120%] w-44 bg-white border border-bl-cream-200 shadow-sm rotate-6"
                >
                    <div className="px-3 py-2 border-b border-bl-cream-200 bg-bl-cream-50/60">
                        <p className="text-[0.65rem] font-archivo uppercase tracking-widest text-bl-navy/55">INBOX</p>
                    </div>
                    <div className="px-3 py-2">
                        <p className="text-xs font-archivo text-bl-navy/70 leading-snug">Where is the latest report?</p>
                        <p className="mt-1 text-[0.65rem] font-archivo uppercase tracking-widest text-bl-bronze-75/70">UNREAD</p>
                    </div>
                </motion.div>

                <motion.div
                    variants={spaceFloatSlow}
                    animate="animate"
                    className="absolute bottom-24 left-20 w-52 bg-white border border-bl-cream-200 shadow-sm"
                >
                    <div className="px-3 py-2 border-b border-bl-cream-200 bg-bl-cream-50/60 flex items-center justify-between">
                        <p className="text-[0.65rem] font-archivo uppercase tracking-widest text-bl-navy/55">ACTIONS</p>
                        <span className="text-[0.65rem] font-archivo uppercase tracking-widest text-bl-bronze-75/70">3</span>
                    </div>
                    <div className="px-3 py-2">
                        <p className="text-xs font-archivo text-bl-navy/70 leading-snug">Update KPI sheet</p>
                        <p className="mt-1 text-xs font-archivo text-bl-navy/70 leading-snug">Confirm owners</p>
                    </div>
                </motion.div>

                <motion.div
                    variants={spaceFloatFast}
                    animate="animate"
                    className="absolute top-28 right-16 w-48 bg-white border border-bl-cream-200 shadow-sm"
                >
                    <div className="px-3 py-2 border-b border-bl-cream-200 bg-bl-cream-50/60">
                        <p className="text-[0.65rem] font-archivo uppercase tracking-widest text-bl-navy/55">DRAFT</p>
                    </div>
                    <div className="px-3 py-2">
                        <p className="text-xs font-archivo text-bl-navy/70 leading-snug">Q2 summary (needs review)</p>
                        <div className="mt-2 h-[6px] w-3/4 bg-bl-cream-200" />
                        <div className="mt-1 h-[6px] w-1/2 bg-bl-cream-200" />
                    </div>
                </motion.div>

                {/* Random scattered words */}
                <motion.div 
                    variants={spaceFloatMedium}
                    animate="animate"
                    className="absolute top-10 left-10 text-6xl font-libre text-bl-navy/40"
                >
                    Confusion
                </motion.div>
                
                <motion.div 
                    variants={spaceFloatSlow}
                    animate="animate"
                    className="absolute top-1/2 left-[-50px] text-5xl font-archivo text-bl-navy font-bold opacity-30"
                >
                    Uncertainty
                </motion.div>

                <motion.div 
                    variants={spaceFloatSlow}
                    animate="animate"
                    className="absolute bottom-20 right-10 text-8xl font-libre text-bl-navy/20"
                >
                    Risky
                </motion.div>

                <motion.div 
                    variants={spaceFloatFast}
                    animate="animate"
                    className="absolute top-20 right-20 -rotate-12 text-4xl font-archivo text-bl-bronze-75/35"
                >
                    Manual
                </motion.div>

                <motion.div
                    variants={spaceFloatSlow}
                    animate="animate"
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-6xl font-libre text-bl-navy/20"
                >
                    Misaligned
                </motion.div>

                <motion.div
                    variants={spaceFloatMedium}
                    animate="animate"
                    className="absolute top-[14%] left-[55%] text-7xl font-libre text-bl-navy/20"
                >
                    Overwhelmed
                </motion.div>

                <motion.div
                    variants={spaceFloatSlow}
                    animate="animate"
                    className="absolute top-[62%] right-[8%] text-6xl font-archivo font-bold text-bl-bronze-75/25"
                >
                    Firefighting
                </motion.div>

                <motion.div
                    variants={spaceFloatFast}
                    animate="animate"
                    className="absolute bottom-[22%] left-[12%] text-7xl font-libre text-bl-navy/15"
                >
                    Fragmented
                </motion.div>

                {/* Random Icons/Shapes scattered chaotically */}
                <motion.div variants={spaceFloatFast} animate="animate" className="absolute top-[20%] left-[30%]">
                    <AlertTriangle className="w-12 h-12 text-bl-bronze-75/30 rotate-[15deg]" />
                </motion.div>
                <motion.div variants={spaceFloatMedium} animate="animate" className="absolute bottom-[30%] left-[10%]">
                    <FileQuestion className="w-16 h-16 text-bl-navy/20 -rotate-45" />
                </motion.div>
                <motion.div variants={spaceFloatFast} animate="animate" className="absolute top-[10%] right-[40%]">
                    <HelpCircle className="w-8 h-8 text-bl-navy/20 rotate-12" />
                </motion.div>
                <motion.div variants={spaceFloatMedium} animate="animate" className="absolute bottom-[10%] right-[30%]">
                    <Siren className="w-10 h-10 text-bl-bronze-75/25 rotate-180" />
                </motion.div>
                <motion.div variants={spaceFloatFast} animate="animate" className="absolute top-[35%] right-[18%]">
                    <Zap className="w-12 h-12 text-bl-bronze-75/20 rotate-6" />
                </motion.div>
                <motion.div variants={spaceFloatSlow} animate="animate" className="absolute bottom-[18%] right-[12%]">
                    <Bug className="w-10 h-10 text-bl-navy/15 -rotate-12" />
                </motion.div>
                
                {/* Random lines/scribbles */}
                <motion.div variants={spaceFloatMedium} animate="animate" className="absolute top-[40%] right-[10%]">
                    <div className="w-32 h-1 bg-bl-bronze-75/20 rotate-[35deg]" />
                </motion.div>
                <motion.div variants={spaceFloatSlow} animate="animate" className="absolute bottom-[20%] left-[40%]">
                    <div className="w-1 h-24 bg-bl-bronze-75/20 rotate-[-15deg]" />
                </motion.div>
                <motion.div variants={spaceFloatFast} animate="animate" className="absolute top-[15%] left-[20%]">
                    <div className="w-16 h-16 border-2 border-bl-cream-300/60 rounded-full" />
                </motion.div>
                <motion.div variants={spaceFloatMedium} animate="animate" className="absolute bottom-[40%] right-[5%]">
                    <div className="w-24 h-24 border border-bl-bronze-75/20 rotate-12" />
                </motion.div>

                {/* Animated scribble paths */}
                <motion.svg
                    variants={spaceFloatSlow}
                    animate="animate"
                    className="absolute top-[55%] left-[8%] w-40 h-20 text-bl-navy/15 -rotate-6"
                    viewBox="0 0 200 100"
                    fill="none"
                >
                    <motion.path
                        d="M10 70 C 30 10, 60 110, 90 45 S 150 20, 190 70"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="10 14"
                        animate={{ strokeDashoffset: [0, -120] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    />
                </motion.svg>

                <motion.svg
                    variants={spaceFloatMedium}
                    animate="animate"
                    className="absolute top-[18%] right-[6%] w-48 h-28 text-bl-bronze-75/20 rotate-12"
                    viewBox="0 0 220 120"
                    fill="none"
                >
                    <motion.path
                        d="M15 55 C 55 15, 85 95, 120 45 S 185 10, 205 60"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="8 12"
                        animate={{ strokeDashoffset: [0, 110] }}
                        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                    />
                </motion.svg>
            </div>
            
            {/* Center Text - Slightly "broken" layout */}
            <motion.div
                variants={spaceFloatCenter}
                animate="animate"
                className="relative z-10 text-center max-w-lg p-8 pointer-events-none"
            >
                <div className="inline-flex items-center gap-2 text-bl-navy mb-4 bg-white px-3 py-1 rounded-[1px] border border-bl-cream-200 rotate-[-2deg]">
                    <XCircle className="w-4 h-4 text-bl-bronze-75/70" />
                    <span className="uppercase tracking-widest text-[0.65rem] font-light font-archivo">Current State</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-libre text-bl-navy/40 mb-6 leading-tight blur-[0.5px] rotate-[1deg]">
                    Business <br/> 
                    <span className="relative inline-block">
                        Chaos
                        <span className="absolute -top-2 -right-4 text-xs text-bl-bronze-75/50 rotate-12 font-archivo">???</span>
                    </span>
                </h3>

                <ul className="text-left space-y-6 max-w-sm mx-auto opacity-60">
                    <motion.li 
                        animate={{ x: [0, 2, -1, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="flex items-center gap-3 text-bl-navy font-archivo line-through decoration-bl-bronze-75/40 decoration-2 -rotate-1 origin-left"
                    >
                        <span className="w-1.5 h-1.5 bg-bl-bronze-75/40 rounded-full" />
                        Reactive Decision Making
                    </motion.li>
                    <motion.li 
                        animate={{ x: [0, -2, 1, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        className="flex items-center gap-3 text-bl-navy font-archivo rotate-1 origin-left ml-4"
                    >
                        <span className="w-1.5 h-1.5 bg-bl-bronze-75/35 rounded-full" />
                        Data Silos & Blind Spots
                    </motion.li>
                    <motion.li 
                        animate={{ rotate: [0, 1, -1, 0] }}
                        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                        className="flex items-center gap-3 text-bl-navy font-archivo -rotate-2 origin-left"
                    >
                        <span className="w-1.5 h-1.5 bg-bl-bronze-75/35 rounded-full" />
                        Wasted Resources
                    </motion.li>

                    <motion.li
                        animate={{ x: [0, 3, -2, 0], rotate: [0, -1, 1, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, delay: 0.6 }}
                        className="flex items-center gap-3 text-bl-navy font-archivo rotate-[2deg] origin-left -ml-2"
                    >
                        <span className="w-1.5 h-1.5 bg-bl-bronze-75/35 rounded-full" />
                        Unclear Ownership
                    </motion.li>

                    <motion.li
                        animate={{ y: [0, -2, 1, 0] }}
                        transition={{ duration: 4.8, repeat: Infinity, delay: 1.4 }}
                        className="flex items-center gap-3 text-bl-navy font-archivo -rotate-[1deg] origin-left ml-6"
                    >
                        <span className="w-1.5 h-1.5 bg-bl-bronze-75/35 rounded-full" />
                        Version Sprawl
                    </motion.li>
                </ul>
            </motion.div>
        </div>
    );
}
