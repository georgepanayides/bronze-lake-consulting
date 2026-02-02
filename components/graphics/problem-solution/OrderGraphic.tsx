"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function OrderGraphic() {
    // Fixed positions to avoid hydration mismatch
    const activeCells = [
        { row: 2, col: 1, delay: 0 },
        { row: 5, col: 3, delay: 1.5 },
        { row: 8, col: 0, delay: 0.8 },
        { row: 3, col: 4, delay: 2.2 },
        { row: 1, col: 5, delay: 1.1 },
        { row: 6, col: 2, delay: 2.8 },
        { row: 9, col: 4, delay: 0.4 },
    ];

    // Sequence for the "cursor" to travel
    const cursorPath = [
        { top: 80, left: 120 },   // row 2, col 1
        { top: 120, left: 480 },  // row 3, col 4
        { top: 200, left: 360 },  // row 5, col 3
        { top: 240, left: 240 },  // row 6, col 2
        { top: 320, left: 0 },    // row 8, col 0
        { top: 360, left: 480 },  // row 9, col 4
        { top: 80, left: 600 },   // row 2, col 5
    ];

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
                    {activeCells.map((cell, i) => (
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
                            top: cursorPath.map(p => p.top),
                            left: cursorPath.map(p => p.left),
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1] // Stops at each point
                        }}
                    >
                        {/* Little "handle" at bottom right of cursor */}
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-bl-bronze-75 border border-white" />
                    </motion.div>
                </div>
            </div>

            {/* Center Text */}
            <div className="relative z-10 text-center max-w-lg p-8 pointer-events-none">
                <div className="inline-flex items-center gap-2 text-bl-navy mb-4 bg-bl-navy/5 px-3 py-1 rounded-full border border-bl-navy/10">
                    <CheckCircle2 className="w-4 h-4 text-bl-bronze-75" />
                    <span className="uppercase tracking-widest text-xs font-bold font-archivo">Bronze Lake Impact</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-libre text-bl-navy mb-6 leading-tight">
                    Strategic <br/> <span className="text-bl-bronze-75">Clarity</span>
                </h3>
                <ul className="text-left space-y-4 max-w-sm mx-auto">
                    <li className="flex items-center gap-3 text-bl-navy/80 font-archivo">
                        <CheckCircle2 className="w-5 h-5 text-bl-bronze-75 shrink-0" />
                        Data-Led Confidence
                    </li>
                    <li className="flex items-center gap-3 text-bl-navy/80 font-archivo">
                        <CheckCircle2 className="w-5 h-5 text-bl-bronze-75 shrink-0" />
                        Automated Intelligence
                    </li>
                    <li className="flex items-center gap-3 text-bl-navy/80 font-archivo">
                        <CheckCircle2 className="w-5 h-5 text-bl-bronze-75 shrink-0" />
                        Scalable Growth
                    </li>
                </ul>
            </div>
        </div>
    );
}
