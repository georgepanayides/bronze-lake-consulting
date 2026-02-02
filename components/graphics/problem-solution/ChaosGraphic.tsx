"use client";

import { XCircle, AlertTriangle, FileQuestion, HelpCircle, Siren } from "lucide-react";
import { motion } from "framer-motion";

const floatingVariants = {
    animate: {
        y: [0, -20, 10, 0],
        x: [0, 15, -10, 0],
        rotate: [0, 5, -5, 0],
        transition: {
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export function ChaosGraphic() {
    return (
        <div className="w-full h-full bg-bl-cream-100 flex items-center justify-center relative overflow-hidden select-none">
            {/* Messy Background Pattern - Drifting Elements */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
                {/* Random scattered words */}
                <motion.div 
                    initial={{ x: 20, y: 40, rotate: 12 }}
                    animate={{ x: -20, rotate: -5 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-10 left-10 text-6xl font-libre text-bl-navy/40"
                >
                    Confusion
                </motion.div>
                
                <motion.div 
                    initial={{ x: -50, rotate: -20 }}
                    animate={{ x: 30, rotate: 10 }}
                    transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-1/2 left-[-50px] text-5xl font-archivo text-bl-navy font-bold opacity-30"
                >
                    Uncertainty
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 100, 0], rotate: [45, 90, 45] }}
                    transition={{ duration: 30, repeat: Infinity }}
                    className="absolute bottom-20 right-10 text-8xl font-libre text-bl-navy/20"
                >
                    Risky
                </motion.div>

                <motion.div 
                    animate={{ x: [0, 60, 0], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 18, repeat: Infinity }}
                    className="absolute top-20 right-20 -rotate-12 text-4xl font-archivo text-red-900/30"
                >
                    Manual
                </motion.div>

                {/* Random Icons/Shapes scattered chaotically */}
                <AlertTriangle className="absolute top-[20%] left-[30%] w-12 h-12 text-bl-bronze-75/30 rotate-[15deg]" />
                <FileQuestion className="absolute bottom-[30%] left-[10%] w-16 h-16 text-bl-navy/20 -rotate-45" />
                <HelpCircle className="absolute top-[10%] right-[40%] w-8 h-8 text-bl-navy/20 rotate-12" />
                <Siren className="absolute bottom-[10%] right-[30%] w-10 h-10 text-red-900/20 rotate-180" />
                
                {/* Random lines/scribbles */}
                <div className="absolute top-[40%] right-[10%] w-32 h-1 bg-bl-navy/20 rotate-[35deg]" />
                <div className="absolute bottom-[20%] left-[40%] w-1 h-24 bg-bl-navy/20 rotate-[-15deg]" />
                <div className="absolute top-[15%] left-[20%] w-16 h-16 border-2 border-bl-navy/10 rounded-full" />
                <div className="absolute bottom-[40%] right-[5%] w-24 h-24 border border-bl-bronze-75/20 rotate-12" />
            </div>
            
            {/* Center Text - Slightly "broken" layout */}
            <div className="relative z-10 text-center max-w-lg p-8 pointer-events-none">
                <div className="inline-flex items-center gap-2 text-bl-navy/60 mb-4 bg-bl-navy/5 px-3 py-1 rounded-full border border-bl-navy/10 rotate-[-2deg]">
                    <XCircle className="w-4 h-4 text-red-800/60" />
                    <span className="uppercase tracking-widest text-xs font-bold font-archivo">Current State</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-libre text-bl-navy/40 mb-6 leading-tight blur-[0.5px] rotate-[1deg]">
                    Business <br/> 
                    <span className="relative inline-block">
                        Chaos
                        <span className="absolute -top-2 -right-4 text-xs text-red-800/40 rotate-12 font-archivo">???</span>
                    </span>
                </h3>

                <ul className="text-left space-y-6 max-w-sm mx-auto opacity-60">
                    <motion.li 
                        animate={{ x: [0, 2, -1, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="flex items-center gap-3 text-bl-navy font-archivo line-through decoration-red-800/50 decoration-2 -rotate-1 origin-left"
                    >
                        <span className="w-1.5 h-1.5 bg-red-800/40 rounded-full" />
                        Reactive Decision Making
                    </motion.li>
                    <motion.li 
                        animate={{ x: [0, -2, 1, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        className="flex items-center gap-3 text-bl-navy font-archivo rotate-1 origin-left ml-4"
                    >
                        <span className="w-1.5 h-1.5 bg-bl-navy/30 rounded-full" />
                        Data Silos & Blind Spots
                    </motion.li>
                    <motion.li 
                        animate={{ rotate: [0, 1, -1, 0] }}
                        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                        className="flex items-center gap-3 text-bl-navy font-archivo -rotate-2 origin-left"
                    >
                        <span className="w-1.5 h-1.5 bg-bl-navy/30 rounded-full" />
                        Wasted Resources
                    </motion.li>
                </ul>
            </div>
        </div>
    );
}
