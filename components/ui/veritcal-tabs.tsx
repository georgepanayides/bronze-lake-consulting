"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  title: string;
  description: string;
  graphic: React.ReactNode;
  icon?: React.ReactNode;
}

interface HorizontalTabsProps {
  tabs: TabItem[];
  className?: string;
}

export function HorizontalTabs({ tabs, className }: HorizontalTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <div className={cn("container mx-auto border-l border-r border-bl-cream-200", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        
        {/* Left Column: Vertical Control Buttons */}
        <div className="flex flex-col lg:border-r border-bl-cream-200">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={cn(
                "group relative text-left p-6 md:p-8 transition-all duration-300 outline-none flex-1 cursor-pointer",
                 // Apply border bottom to all except the last one to separate items
                index !== tabs.length - 1 ? "border-b border-bl-cream-200" : "",
                // Active State: Light Cream Background
                activeTabId === tab.id
                  ? "bg-bl-cream-100" // Light theme
                  : "bg-white hover:bg-bl-cream-50"
              )}
            >
              <div className="relative z-10 w-full">
                <div className="flex items-center gap-1 mb-3">
                    {/* Icon - Always visible, changes style on active */}
                    {tab.icon && (
                        <div className={cn(
                            "w-10 h-10 shrink-0 flex items-center justify-center rounded-sm transition-colors duration-300",
                        )}>
                            {tab.icon}
                        </div>
                    )}
                    <h3 className={cn(
                        "text-xl md:text-2xl font-libre transition-colors duration-300",
                        activeTabId === tab.id ? "text-bl-navy" : "text-bl-navy/60"
                     )}>
                        {tab.title}
                    </h3>
                </div>
                
                <p className={cn(
                    "text-base font-archivo leading-relaxed transition-colors duration-300",
                     // Text is always dark/navy now
                    activeTabId === tab.id ? "text-bl-navy" : "text-bl-navy/60"
                )}>
                    {tab.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Right Column: Graphic Display Area */}
        {/* Fill the full height of the container, no rounding, subtle background */}
        <div className="relative lg:h-auto min-h-[500px] bg-bl-cream-100/50 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-5 pattern-grid-lg text-bl-navy pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="w-full h-full flex items-center justify-center p-12"
              >
                 {activeTab.graphic}
              </motion.div>
            </AnimatePresence>
         </div>
      </div>
    </div>
  );
}
