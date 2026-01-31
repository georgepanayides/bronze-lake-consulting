"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Data Structure for the notifications
export type Notification = {
  id: number;
  title: string;
  message: string;
  metric?: string;
  type: "success" | "warning" | "insight" | "alert";
  delay: number;
};

interface HeroGraphicProps {
  notifications: Notification[];
}

export default function HeroGraphic({ notifications }: HeroGraphicProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  // Staggered reveal effect
  useEffect(() => {
    const timeouts = notifications.map((item, index) => {
      return setTimeout(() => {
        setVisibleItems((prev) => {
             // Newest items added to the BOTTOM (Drop down from the first)
             // Allow list to grow indefinitely (scrolling/fading handled by container)
             const newList = [...prev, item.id];
             return newList;
        });
      }, index * 425);
    });

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [notifications]);

  return (
    <div className="w-full h-screen flex flex-col justify-start items-end p-8 pt-24 font-archivo perspective-1000 mt-10">
      <div className="w-full h-full max-w-md relative flex flex-col gap-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((id) => {
             // Find in data from the id
             const item = notifications.find(n => n.id === id);
             if (!item) return null;
             return <NotificationCard key={item.id} item={item} />;
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Premium Mini-UI Illustrations (not icons)

function IllustrationFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-18 h-18 rounded-[3px] overflow-hidden shrink-0 bg-white/70 border border-white/80 shadow-sm">
      <div className="relative w-full h-full">
        {/* Subtle grid to feel like a UI mock */}
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(30,41,59,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,41,59,0.35)_1px,transparent_1px)] [background-size:10px_10px]" />
        {children}
      </div>
    </div>
  );
}

// 1) Profitability Surge: mini KPI + rising sparkline
function ProfitabilityIllustration() {
  return (
    <IllustrationFrame>
      <div className="absolute inset-0 p-1 pt-2">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 60" preserveAspectRatio="none"> 
           <defs>
             <linearGradient id="profit-gradient" x1="0" y1="0" x2="0" y2="1">
               <stop offset="0%" stopColor="#7d4f0f" stopOpacity="0.2" />
               <stop offset="100%" stopColor="#7d4f0f" stopOpacity="0" />
             </linearGradient>
           </defs>

           {/* Gradient fill underneath */}
           <motion.path
             d="M0 50 L25 35 L50 45 L75 15 L100 5 V 60 H 0 Z"
             fill="url(#profit-gradient)"
             stroke="none"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.8 }}
           />

           {/* Sharp line chart */}
           <motion.path
             d="M0 50 L25 35 L50 45 L75 15 L100 5"
             fill="none"
             stroke="#7d4f0f"
             strokeWidth="2.5"
             strokeLinecap="round"
             strokeLinejoin="round"
             initial={{ pathLength: 0 }}
             animate={{ pathLength: 1 }}
             transition={{ duration: 1.2, ease: "easeInOut" }}
           />

           {/* End point marker */}
           <motion.circle
             cx="100" cy="5" r="3"
             fill="#7d4f0f"
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ delay: 1.1, type: "spring" }}
           />
        </svg>
      </div>
    </IllustrationFrame>
  );
}

// 2) Pricing Opportunity: Growth Potential Bar
function PricingIllustration() {
  return (
    <IllustrationFrame>
      <div className="absolute inset-0 flex items-center justify-center pt-2">
         <svg className="w-full h-full overflow-visible" viewBox="0 0 60 60">
             {/* Base Bar (Current) */}
             <motion.rect
                x="14" y="36" width="30" height="20" rx="1"
                fill="#CD7F32"
                initial={{ height: 0, y: 45 }}
                animate={{ height: 25, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
             />
             
             {/* Opportunity Extension (Dashed) */}
             <motion.rect
                x="14" y="12" width="30" height="22" rx="1"
                fill="rgba(205,127,50, 0.15)"
                stroke="#CD7F32" strokeWidth="1" strokeDasharray="4 4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
             />

             {/* Plus Sign */}
             <motion.path
                d="M 29 19 V 27 M 25 23 H 33"
                stroke="#CD7F32" strokeWidth="1.5" strokeLinecap="round"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 300 }}
             />
         </svg>
      </div>
    </IllustrationFrame>
  );
}

// 3) Volume Risk Alert: Simple Risk Gauge
function VolumeRiskIllustration() {
  return (
    <IllustrationFrame>
      <div className="absolute inset-0 flex items-center justify-center pt-2">
         <svg className="w-full h-full overflow-visible" viewBox="0 0 100 60">
             {/* Background Track */}
             <path 
               d="M 15 50 A 35 35 0 0 1 85 50" 
               stroke="#E2E8F0" 
               strokeWidth="10" 
               strokeLinecap="round" 
               fill="none" 
             />
             
             {/* Risk Fill (Red) */}
             <motion.path 
                d="M 15 50 A 35 35 0 0 1 85 50" 
                stroke="#B77844" 
                strokeWidth="10" 
                strokeLinecap="round" 
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.8 }} 
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
             />
         </svg>
      </div>
    </IllustrationFrame>
  );
}

// 4) Untapped Revenue: Simple Donut Chart
function UntappedRevenueIllustration() {
  return (
    <IllustrationFrame>
      <div className="absolute inset-0 flex items-center justify-center pt-2">
         <svg className="w-full h-full overflow-visible" viewBox="0 0 60 60">
             {/* Captured Revenue (Slate) */}
             <motion.circle 
               cx="30" cy="30" r="20" 
               stroke="#CBD5E1" strokeWidth="8" fill="none"
               strokeLinecap="round"
               initial={{ pathLength: 0, rotate: -90 }}
               animate={{ pathLength: 0.70, rotate: -90 }}
               transition={{ duration: 1, ease: "easeOut" }}
             />
             
             {/* Untapped Revenue (Emerald) */}
             <motion.circle 
               cx="30" cy="30" r="20" 
               stroke="#6A381E" strokeWidth="8" fill="none"
               strokeLinecap="round"
               initial={{ pathLength: 0, opacity: 0, rotate: 162 }} // Starts where grey ends
               animate={{ pathLength: 0.30, opacity: 1, rotate: 162 }} // Files the gap
               transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
             />
         </svg>
      </div>
    </IllustrationFrame>
  );
}

// 5) Operational Bottleneck: Funnel Constraint
function BottleneckIllustration() {
  return (
    <IllustrationFrame>
      <div className="absolute inset-0 flex items-center justify-center pt-2">
         <svg className="w-full h-full overflow-visible" viewBox="0 0 60 60">
             {/* Funnel Walls (Horizontal) */}
             <path 
               d="M 5 10 L 35 26 H 55"
               fill="none" 
               stroke="#AD9668" 
               strokeWidth="3" 
               strokeLinecap="round" 
               strokeLinejoin="round"
             />
             <path 
               d="M 5 50 L 35 34 H 55"
               fill="none" 
               stroke="#AD9668" 
               strokeWidth="3" 
               strokeLinecap="round" 
               strokeLinejoin="round"
             />

             {/* Choke Point Highlight */}
             <motion.line
               x1="35" y1="26" x2="35" y2="34"
               stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3"
               initial={{ opacity: 0.3 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
             />

             {/* Input Particles (Fast & Many) */}
             {[0, 1, 2].map((i) => (
                <motion.circle 
                  key={i} r="2.5" fill="#64748B"
                  initial={{ x: 5, y: 15 + (i * 12), opacity: 0 }}
                  animate={{ x: 30, y: 30, opacity: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.4,
                    ease: "easeIn" 
                  }}
                />
             ))}

             {/* Output Particle (Slow & Single) */}
             <motion.circle 
               r="2.5" fill="#EF4444"
               initial={{ x: 35, y: 30, opacity: 0 }}
               animate={{ x: 60, y: 30, opacity: [1, 0] }}
               transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "linear" }}
             />
         </svg>
      </div>
    </IllustrationFrame>
  );
}


function NotificationCard({ item }: { item: Notification }) {
  // Map IDs to specific bespoke mini UI mock illustrations
  const Illustration = {
    1: ProfitabilityIllustration,
    2: PricingIllustration,
    3: VolumeRiskIllustration,
    4: UntappedRevenueIllustration,
    5: BottleneckIllustration
  }[item.id];

  const ActiveIllustration = Illustration || ProfitabilityIllustration;

  const metricTone = {
    success: "bg-emerald-500/10 text-emerald-700/70 border-emerald-500/15",
    warning: "bg-bl-bronze-75/10 text-bl-bronze-75 border-bl-bronze-75/20",
    alert: "bg-red-500/10 text-red-700/70 border-red-500/15",
    insight: "bg-bl-navy/5 text-bl-navy/70 border-bl-navy/10"
  }[item.type];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(2px)", transition: { duration: 0.2 } }}
      transition={{ 
        type: "spring", 
        stiffness: 500, 
        damping: 30,
        mass: 1 
      }}
      className={cn(
        "relative overflow-hidden py-4 px-4 flex items-stretch gap-4 select-none origin-top min-h-26", // Uniform min-height
        "rounded-[3px] border border-bl-cream-200 shadow-lg shadow-bl-bronze-25/10",
        "bg-white/35 backdrop-blur-[2px]"
      )}
    >
      {/* Illustration Area */}
      <ActiveIllustration />

      {/* Content Area */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
            <div className="flex justify-between items-start">
                <h4 className="text-sm font-regular text-bl-navy font-archivo tracking-wide uppercase">
                    {item.title}
                </h4>
                {item.metric && (
                  <span
                    className={cn(
                      "text-[0.6rem] font-semibold font-archivo px-2 py-0.5 rounded-full border",
                      metricTone
                    )}
                  >
                        {item.metric}
                  </span>
                )}
            </div>
            
            <p className="text-sm text-bl-navy/70 mt-1 leading-snug font-light">
                {item.message}
            </p>
        </div>
      </div>

    </motion.div>
  );
}
         