"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { User, Monitor, Server, Database, FileText, CheckCircle2, ChevronRight, type LucideIcon } from "lucide-react";

export function StrategyRoadmap() {
    // Animation for the main document sheet
    const docVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 60, damping: 20 }
        }
    };

    // Staggered reveal for internal elements
    const contentVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.4 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    const lineVariants: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
            pathLength: 1, 
            opacity: 0.2,
            transition: { duration: 1.5, ease: "linear" }
        }
    };

    return (
        <div className="w-full h-full min-h-[320px] flex items-center justify-center p-6 bg-bl-cream-50/50 rounded-xl relative overflow-hidden group">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.05]" 
                 style={{ backgroundImage: 'radial-gradient(#0C003C 0.5px, transparent 0.5px)', backgroundSize: '12px 12px' }} 
            />
            
            {/* The Blueprint Document */}
            <motion.div
                className="w-full max-w-2xl bg-white shadow-2xl rounded-sm border border-bl-cream-200 overflow-hidden flex flex-col relative"
                style={{ aspectRatio: "1.414 / 1" }} // A4 Landscape ratio
                variants={docVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Header Section */}
                <div className="h-10 border-b border-bl-cream-200 flex items-center justify-between px-4 bg-bl-cream-50/30">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-bl-navy rounded-[2px]" />
                        <div className="flex flex-col">
                            <span className="text-[8px] font-bold text-bl-navy uppercase tracking-wider">Service Blueprint</span>
                            <span className="text-[6px] text-bl-navy/50">Project: Omni-Channel Transformation v2.4</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[6px] font-bold rounded uppercase border border-green-200 flex items-center gap-1">
                            <CheckCircle2 className="w-2 h-2" /> Approved
                        </div>
                        <span className="text-[6px] text-bl-navy/40">Authored: Oct 12, 2025</span>
                    </div>
                </div>

                {/* Main Content Area (Swimlanes) */}
                <motion.div 
                    className="flex-1 flex flex-col relative p-4"
                    variants={contentVariants}
                >
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ opacity: 0.5 }}>
                        {/* Connecting Lines Diagram */}
                        <motion.path d="M 50 40 L 50 70 L 80 70" fill="none" stroke="#1e293b" strokeWidth="1" variants={lineVariants} />
                        <motion.path d="M 90 80 L 120 120" fill="none" stroke="#1e293b" strokeWidth="1" variants={lineVariants} />
                        <motion.path d="M 120 130 L 120 170" fill="none" stroke="#1e293b" strokeWidth="1" variants={lineVariants} />
                        <motion.path d="M 140 180 L 200 180 L 200 130" fill="none" stroke="#1e293b" strokeWidth="1" variants={lineVariants} />
                        <motion.path d="M 220 120 L 280 80" fill="none" stroke="#1e293b" strokeWidth="1" variants={lineVariants} />
                        <motion.path d="M 280 70 L 350 70" fill="none" stroke="#1e293b" strokeWidth="1" variants={lineVariants} />
                    </svg>

                    {/* Lane 1: Customer Actions (Top) */}
                    <div className="flex-1 border-b border-dashed border-bl-cream-200 flex items-center relative">
                        <div className="absolute left-0 -ml-2 top-1/2 -translate-y-1/2 -rotate-90 text-[6px] font-bold text-bl-navy/30 uppercase tracking-widest w-10 text-center origin-center">Customer</div>
                        <div className="grid grid-cols-6 gap-4 w-full pl-6 pr-2">
                            <BlueprintNode icon={User} label="Discovery" color="bg-blue-50 border-blue-200 text-blue-700" variants={itemVariants} />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <BlueprintNode icon={User} label="Decision" color="bg-blue-50 border-blue-200 text-blue-700" variants={itemVariants} />
                            <div className="col-span-1" />
                            <BlueprintNode icon={User} label="Purchase" color="bg-blue-50 border-blue-200 text-blue-700" variants={itemVariants} />
                        </div>
                    </div>

                    {/* Lane 2: Frontstage (Touchpoints) */}
                    <div className="flex-1 border-b border-dashed border-bl-cream-200 flex items-center relative bg-bl-cream-50/10">
                         <div className="absolute left-0 -ml-2 top-1/2 -translate-y-1/2 -rotate-90 text-[6px] font-bold text-bl-navy/30 uppercase tracking-widest w-10 text-center origin-center">Frontstage</div>
                         <div className="grid grid-cols-6 gap-4 w-full pl-6 pr-2">
                             <div className="col-span-1" />
                             <BlueprintNode icon={Monitor} label="Web Interface" color="bg-amber-50 border-amber-200 text-amber-700" variants={itemVariants} />
                             <div className="col-span-1" />
                             <div className="col-span-1" />
                             <BlueprintNode icon={Monitor} label="Checkout UI" color="bg-amber-50 border-amber-200 text-amber-700" variants={itemVariants} />
                             <div className="col-span-1" />
                         </div>
                    </div>

                    {/* Lane 3: Backstage (Process) */}
                    <div className="flex-1 border-b border-dashed border-bl-cream-200 flex items-center relative">
                         <div className="absolute left-0 -ml-2 top-1/2 -translate-y-1/2 -rotate-90 text-[6px] font-bold text-bl-navy/30 uppercase tracking-widest w-10 text-center origin-center">Backstage</div>
                         <div className="grid grid-cols-6 gap-4 w-full pl-6 pr-2">
                             <div className="col-span-1" />
                             <div className="col-span-1" />
                             <BlueprintNode icon={FileText} label="Identity Check" color="bg-purple-50 border-purple-200 text-purple-700" variants={itemVariants} />
                             <div className="col-span-1" />
                             <div className="col-span-1" />
                             <BlueprintNode icon={FileText} label="Order Gen" color="bg-purple-50 border-purple-200 text-purple-700" variants={itemVariants} />
                         </div>
                    </div>

                     {/* Lane 4: Support Systems (Bottom) */}
                     <div className="flex-1 flex items-center relative bg-bl-cream-50/10">
                         <div className="absolute left-0 -ml-2 top-1/2 -translate-y-1/2 -rotate-90 text-[6px] font-bold text-bl-navy/30 uppercase tracking-widest w-10 text-center origin-center">Systems</div>
                         <div className="grid grid-cols-6 gap-4 w-full pl-6 pr-2">
                             <div className="col-span-1" />
                             <div className="col-span-1" />
                             <div className="col-span-1" />
                             <BlueprintNode icon={Server} label="CRM API" color="bg-slate-100 border-slate-300 text-slate-600" variants={itemVariants} />
                             <BlueprintNode icon={Database} label="Inventory DB" color="bg-slate-100 border-slate-300 text-slate-600" variants={itemVariants} />
                             <div className="col-span-1" />
                         </div>
                    </div>

                </motion.div>

                {/* Footer Legend */}
                <div className="h-6 border-t border-bl-cream-200 bg-white flex items-center px-4 gap-4">
                    <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="text-[6px] text-bl-navy/50 uppercase">Customer</span>
                    </div>
                     <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="text-[6px] text-bl-navy/50 uppercase">Touchpoint</span>
                    </div>
                     <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span className="text-[6px] text-bl-navy/50 uppercase">Process</span>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}

function BlueprintNode({ icon: Icon, label, color, variants }: { icon: LucideIcon, label: string, color: string, variants: Variants }) {
    return (
        <motion.div 
            variants={variants}
            className={cn(
                "w-full aspect-[2/1] rounded flex items-center gap-1.5 px-2 py-1 shadow-sm border",
                color
            )}
        >
            <Icon className="w-2.5 h-2.5 shrink-0" />
            <div className="flex flex-col gap-0.5 w-full">
                <span className="text-[6px] font-bold leading-none">{label}</span>
                <div className="h-0.5 w-3/4 bg-current opacity-20 rounded-full" />
                <div className="h-0.5 w-1/2 bg-current opacity-20 rounded-full" />
            </div>
        </motion.div>
    )
}
