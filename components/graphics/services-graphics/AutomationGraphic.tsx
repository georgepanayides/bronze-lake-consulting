"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function TechnologyAutomationGraphic() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Fixed coordinate system for the SVG layer (280x500 base)
  const center = { x: 140, y: 220 };
  const satellites = [
    { id: 1, x: 50, y: 120, label: "Ingest", icon: "database", delay: 0.3 },
    { id: 2, x: 230, y: 120, label: "Logic", icon: "cpu", delay: 0.4 },
    { id: 3, x: 40, y: 320, label: "Security", icon: "shield", delay: 0.5 },
    { id: 4, x: 240, y: 320, label: "API", icon: "network", delay: 0.6 },
    { id: 5, x: 140, y: 400, label: "Storage", icon: "server", delay: 0.7 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : undefined}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "relative w-full max-w-[280px] h-full max-h-[560px]",
          "aspect-[9/16]",
          "bg-white rounded-xl border border-bl-cream-200 overflow-hidden",
          "shadow-2xl shadow-bl-cream-200 flex flex-col"
        )}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-bl-cream-50" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#1e293b 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Header - Minimal */}
        <div className="relative z-10 px-5 pt-5 flex items-center justify-between">
           <div className="flex items-center gap-2 opacity-50">
             <div className="w-1.5 h-1.5 rounded-full bg-bl-navy" />
             <div className="text-[9px] uppercase tracking-widest font-archivo text-bl-navy">System Architecture</div>
           </div>
        </div>

        {/* Network Graph */}
        <div className="relative flex-1 w-full h-full overflow-hidden">
            
            {/* Connecting Lines (SVG Layer) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 280 500" preserveAspectRatio="xMidYMid meet">
                {satellites.map((sat) => (
                    <g key={sat.id}>
                         <motion.line
                            x1={center.x} y1={center.y} x2={sat.x} y2={sat.y}
                            stroke="#E2E8F0" 
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                            transition={{ duration: 0.8, delay: sat.delay - 0.1, ease: "easeInOut" }}
                        />
                         {/* Moving Particle */}
                         {isInView && (
                             <circle r="2" fill="#C69C6D" className="opacity-0">
                                 <animateMotion 
                                    dur="3s" 
                                    begin={`${sat.delay + 0.5}s`}
                                    repeatCount="indefinite"
                                    path={`M${center.x},${center.y} L${sat.x},${sat.y}`}
                                    keyPoints="0;1"
                                    keyTimes="0;1" 
                                    calcMode="linear"
                                 />
                                 <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin={`${sat.delay + 0.5}s`} />
                             </circle>
                         )}
                         {/* Second reverse particle */}
                         {isInView && (
                             <circle r="2" fill="#1e293b" className="opacity-0">
                                 <animateMotion 
                                    dur="4s" 
                                    begin={`${sat.delay + 1.5}s`}
                                    repeatCount="indefinite"
                                    path={`M${sat.x},${sat.y} L${center.x},${center.y}`}
                                    keyPoints="0;1"
                                    keyTimes="0;1" 
                                    calcMode="linear"
                                 />
                                 <animate attributeName="opacity" values="0;0.6;0" dur="4s" repeatCount="indefinite" begin={`${sat.delay + 1.5}s`} />
                             </circle>
                         )}
                    </g>
                ))}
            </svg>

            {/* Central Node */}
            <div className="absolute z-10 text-center" style={{ left: "50%", top: "44%", transform: "translate(-50%, -50%)" }}>
                 <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                    className="relative w-20 h-20 bg-white rounded-full border border-bl-cream-200 shadow-xl shadow-bl-cream-200/50 flex items-center justify-center group"
                 >
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full border border-bl-bronze-50/30 animate-scale-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="w-12 h-12 bg-bl-navy rounded-full flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-bl-navy to-bl-navy/80" />
                        <Image
                            src={"/icons/bl-brand-icon.svg"}
                            alt=""
                            width={220}
                            height={160}
                            className="w-6 h-5 relative z-10 invert opacity-90"
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                    transition={{ delay: 0.8 }}
                    className="mt-3"
                >
                    <div className="text-[10px] font-libre font-bold text-bl-navy">Core System</div>
                    <div className="text-[8px] font-archivo text-bl-navy/40 uppercase tracking-wider">Active</div>
                </motion.div>
            </div>

            {/* Satellite Nodes */}
            {satellites.map((sat) => (
                <SatelliteNode 
                    key={sat.id}
                    // Map fixed 280x500 coords to percentages for easier responsive positioning in standard div
                    // x / 280 * 100, y / 500 * 100
                    x={`${(sat.x / 280) * 100}%`}
                    y={`${(sat.y / 500) * 100}%`}
                    label={sat.label}
                    delay={sat.delay}
                    animate={isInView}
                    icon={sat.icon}
                />
            ))}

        </div>

      </motion.div>
    </div>
  );
}

function SatelliteNode({ x, y, label, delay, animate, icon }: { x: string, y: string, label: string, delay: number, animate: boolean, icon: string }) {
    return (
        <div className="absolute z-10" style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 18, delay }}
                className="flex flex-col items-center gap-2"
            >
                <div className="w-10 h-10 bg-white rounded-lg border border-bl-cream-200 shadow-sm flex items-center justify-center relative overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-bl-bronze-50" />
                    {/* Simple Icon Representation using CSS shapes/divs */}
                    <div className="opacity-40 text-bl-navy">
                        {icon === "database" && <div className="w-4 h-5 border-2 border-current rounded-sm flex flex-col justify-between p-[1px]"><div className="w-full h-0.5 bg-current"/></div>}
                        {icon === "cpu" && <div className="w-4 h-4 border-2 border-current rounded-sm grid place-items-center"><div className="w-2 h-2 bg-current rounded-[1px]"/></div>}
                        {icon === "shield" && <div className="w-4 h-4 border-2 border-current rounded-b-full" />}
                        {icon === "network" && <div className="w-4 h-4 flex items-center justify-center font-bold text-[8px]">API</div>}
                        {icon === "server" && <div className="flex gap-0.5"><div className="w-1 h-4 bg-current rounded-sm"/><div className="w-1 h-4 bg-current rounded-sm"/></div>}
                    </div>
                </div>
                <div className="text-[8px] font-archivo uppercase tracking-widest text-bl-navy/60 bg-white/80 backdrop-blur-sm px-1.5 py-0.5 rounded-full border border-bl-cream-200">
                    {label}
                </div>
            </motion.div>
        </div>
    )
}