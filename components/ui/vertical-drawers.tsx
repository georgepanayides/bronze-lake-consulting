"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DrawerItem {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
  graphic?: React.ReactNode;
}

interface VerticalDrawersProps {
  items: DrawerItem[];
  className?: string;
}

export function VerticalDrawers({ items, className }: VerticalDrawersProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("flex flex-col lg:flex-row w-full h-[800px] lg:h-[600px] border-b border-bl-cream-200", className)}>
        {items.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
                <motion.div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                        "relative overflow-hidden cursor-pointer transition-colors duration-500 ease-in-out",
                        // Removed rounded corners and corrected background color logic
                        // Active: Cream/White, Inactive: Slightly darker cream or transparent
                        isActive ? "bg-white cursor-default" : "bg-bl-cream-50 hover:bg-bl-cream-100",
                        // Borders: Right border to separate (cream-200), removed gap in parent
                        "border-b lg:border-b-0 lg:border-r border-bl-cream-200 last:border-0"
                    )}
                    // Animate the flex-grow value
                    animate={{
                        flex: isActive ? 5 : 1
                    }}
                    transition={{ 
                        duration: 0.5, 
                        ease: [0.32, 0.72, 0, 1] 
                    }}
                >
                    {/* Inner Container */}
                    <div className="absolute inset-0 w-full h-full">

                        {/* --- ACTIVE CONTENT --- */}
                        <div 
                           className={cn(
                             "absolute inset-0 p-6 md:p-10 transition-all duration-500",
                             isActive 
                                ? "opacity-100 translate-y-0 delay-200 pointer-events-auto" 
                                : "opacity-0 translate-y-4 pointer-events-none"
                           )}
                        >
                           <div className="flex flex-col lg:flex-row h-full gap-8">
                                {/* Left Column: Content */}
                                <div className="flex-1 flex flex-col h-full justify-between">
                                    {/* Header Content */}
                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-bl-bronze-100 font-archivo text-2xl uppercase tracking-widest">
                                                0{index + 1}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-libre text-bl-navy leading-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-bl-navy/70 font-archivo text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                                            {item.description}
                                        </p>
                                        
                                        {/* Divider */}
                                        <div className="w-full h-px bg-bl-cream-200 mb-8" />
                                        
                                        {/* Passed Content */}
                                        <div className="flex-1">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Graphic or Placeholder */}
                                <div className="hidden lg:block w-1/3 h-full">
                                    {item.graphic ? (
                                        <div className="w-full h-full overflow-hidden relative border-l border-bl-cream-200">
                                            {item.graphic}
                                        </div>
                                    ) : (
                                        <div className="w-full h-full bg-bl-cream-50/50 rounded-sm border border-bl-cream-200 flex items-center justify-center relative overflow-hidden group hover:border-bl-bronze-25/20 transition-colors">
                                            <div className="absolute inset-0 bg-bl-navy/5 pattern-grid-lg opacity-10" />
                                            <span className="font-archivo text-bl-navy/20 uppercase tracking-widest text-xs z-10">Animation <br/> Placeholder</span>
                                        </div>
                                    )}
                                </div>
                           </div>
                        </div>


                        {/* --- INACTIVE LABEL (Collapsed State) --- */}
                        <div 
                           className={cn(
                             "absolute inset-0 flex items-center justify-center transition-all duration-300",
                             // When active, fade out completely
                             isActive ? "opacity-0 scale-90" : "opacity-100 scale-100 delay-100"
                           )}
                        >
                            {/* Desktop: Rotated Vertical Text */}
                            <div className="hidden lg:flex items-center justify-center h-full w-full relative">
                                <div className="-rotate-90 whitespace-nowrap absolute z-10">
                                    <span className="font-libre font-light text-lg text-bl-navy tracking-widest uppercase">
                                        {item.title}
                                    </span>
                                </div>
                                
                                {/* Abstract large number clipped at bottom */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-bl-bronze-100/20 font-bold font-archivo text-[120px] leading-none pointer-events-none select-none">
                                    0{index + 1}
                                </div>
                            </div>
                            
                            {/* Mobile: Horizontal Strip Label */}
                            <div className="lg:hidden w-full px-6 flex items-center justify-between h-full">
                                <span className="font-libre text-lg text-bl-navy">
                                    {item.title}
                                </span>
                                <span className="text-bl-bronze-75 font-archivo text-sm font-bold">
                                    0{index + 1}
                                </span>
                            </div>
                        </div>

                    </div>
                </motion.div>
            );
        })}
    </div>
  );
}
