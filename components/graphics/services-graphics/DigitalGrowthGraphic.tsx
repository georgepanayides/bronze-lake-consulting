"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Globe, Mail, MoreHorizontal, ThumbsUp, MessageSquare, Share2, MousePointer2 } from "lucide-react";

export function DigitalGrowthGraphic() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const listVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 } 
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={cn(
          "relative w-full max-w-[280px] h-full max-h-[560px]",
          "aspect-[9/16]",
          "bg-gradient-to-br from-white via-white to-bl-cream-50",
          "rounded-xl border border-bl-cream-200 shadow-2xl shadow-bl-cream-200/50",
          "overflow-hidden flex flex-col p-4"
        )}
      >
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#1e293b 1px, transparent 1px)", backgroundSize: "20px 20px" }} 
        />

        {/* Stacked Content Container */}
        <motion.div 
            className="flex flex-col gap-3 h-full relative z-10"
            variants={listVariants}
        >

            {/* 1. Google Ad Mockup (Search) */}
            <motion.div 
                variants={itemVariants} 
                className="bg-white rounded-lg border border-bl-cream-200 p-3 shadow-sm relative group"
            >
                <div className="flex items-center gap-2 mb-1">
                    <div className="font-bold text-[8px] text-bl-navy/90">Sponsored</div>
                    <div className="w-1 h-1 rounded-full bg-bl-navy/20" />
                    <div className="flex items-center gap-1 opacity-50">
                        <Globe className="w-2 h-2" />
                        <span className="text-[8px]">www.bronzelake.com</span>
                    </div>
                </div>
                <div className="text-[10px] font-bold text-blue-600 mb-1 leading-tight">
                    Strategic Digital Growth Partner
                </div>
                <div className="text-[8px] text-bl-navy/60 leading-tight">
                    Scale your business with data-driven strategies and automated solutions.
                </div>
                
                {/* Visual Connector Line */}
                <div className="absolute left-1/2 -bottom-4 h-4 w-[1px] bg-gradient-to-b from-bl-cream-200 to-transparent" />
            </motion.div>

            {/* 2. Email Campaign Mockup */}
            <motion.div 
                variants={itemVariants} 
                className="bg-white rounded-lg border border-bl-cream-200 p-3 shadow-sm relative"
            >
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-bl-bronze-50 flex items-center justify-center text-bl-bronze-75">
                            <Mail className="w-3 h-3" />
                        </div>
                        <div className="flex flex-col">
                           <div className="text-[8px] font-bold text-bl-navy">Bronze Lake Team</div>
                           <div className="text-[6px] text-bl-navy/40">to me</div>
                        </div>
                    </div>
                    <div className="text-[6px] text-bl-navy/30">Just now</div>
                </div>
                <div className="text-[9px] font-bold text-bl-navy mb-1">Unlock your growth potential 🚀</div>
                <div className="space-y-1">
                     <div className="h-1 w-full bg-bl-navy/5 rounded-full" />
                     <div className="h-1 w-4/5 bg-bl-navy/5 rounded-full" />
                </div>
                
                {/* Visual Connector */}
                <div className="absolute left-1/2 -bottom-4 h-4 w-[1px] bg-gradient-to-b from-bl-cream-200 to-transparent" />
            </motion.div>

            {/* 3. Facebook Ad Mockup */}
            <motion.div 
                variants={itemVariants} 
                className="bg-white rounded-lg border border-bl-cream-200 p-2 shadow-sm"
            >
                {/* Header */}
                <div className="flex items-center gap-2 mb-2 px-1">
                    <div className="w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center">
                        <div className="font-bold text-[8px] text-blue-600">B</div>
                    </div>
                    <div>
                        <div className="text-[8px] font-bold text-bl-navy">Bronze Lake</div>
                        <div className="text-[6px] text-bl-navy/40">Sponsored · <Globe className="w-2 h-2 inline ml-0.5" /></div>
                    </div>
                    <MoreHorizontal className="w-3 h-3 text-bl-navy/20 ml-auto" />
                </div>
                
                {/* Ad Content */}
                <div className="w-full aspect-[2/1] bg-bl-navy/5 rounded mb-2 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                         <div className="text-[8px] font-medium text-bl-navy/40 tracking-widest uppercase">Growth Engine</div>
                    </div>
                </div>
                
                {/* Ad Footer */}
                <div className="bg-bl-cream-50/50 rounded p-1.5 flex items-center justify-between">
                    <div className="text-[7px] text-bl-navy/60">bronzelake.com</div>
                    <div className="bg-slate-200 px-1.5 py-0.5 rounded-[2px] text-[6px] font-bold text-bl-navy/60">Learn More</div>
                </div>

                {/* Social Actions */}
                <div className="flex items-center gap-4 mt-2 px-1 text-bl-navy/30 border-t border-dashed border-bl-cream-200 pt-1.5">
                    <div className="flex items-center gap-1"><ThumbsUp className="w-2.5 h-2.5" /> <span className="text-[6px]">Like</span></div>
                    <div className="flex items-center gap-1"><MessageSquare className="w-2.5 h-2.5" /> <span className="text-[6px]">Comment</span></div>
                    <div className="flex items-center gap-1"><Share2 className="w-2.5 h-2.5" /> <span className="text-[6px]">Share</span></div>
                </div>
                
                {/* Visual Connector - Larger pointing to website */}
                <div className="absolute left-1/2 -bottom-4 h-4 w-[1px] bg-gradient-to-b from-bl-cream-200 to-transparent" />
            </motion.div>

            {/* 4. Website Mockup (Destination) */}
            <motion.div 
                variants={itemVariants}
                className="flex-1 bg-white rounded-t-lg border border-bl-cream-200 shadow-md flex flex-col overflow-hidden -mx-1"
            >
                 <div className="h-3 bg-bl-cream-50 border-b border-bl-cream-100 flex items-center gap-1 px-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-red-300" />
                     <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                     <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
                     <div className="ml-2 flex-1 h-1.5 bg-white border border-bl-cream-200 rounded-sm" />
                 </div>
                 
                 <div className="flex-1 p-3 flex flex-col items-center justify-center relative bg-gradient-to-b from-white to-bl-cream-50/30">
                     <div className="w-16 h-3 bg-bl-navy rounded-sm mb-1.5" />
                     <div className="w-24 h-1.5 bg-bl-navy/10 rounded-sm mb-3" />
                     
                     <div className="grid grid-cols-2 gap-2 w-full max-w-[120px]">
                         <div className="aspect-square bg-white border border-bl-cream-100 rounded-lg shadow-sm" />
                         <div className="aspect-square bg-white border border-bl-cream-100 rounded-lg shadow-sm" />
                     </div>

                     {/* Mouse Cursor clicking */}
                     <motion.div
                       initial={{ opacity: 0, x: 20, y: 20 }}
                       animate={{ opacity: 1, x: 0, y: 0 }}
                       transition={{ delay: 2, duration: 0.5 }}
                       className="absolute bottom-4 right-8 z-20"
                     >
                        <MousePointer2 className="w-4 h-4 text-bl-bronze-75 fill-bl-bronze-75/20 drop-shadow-md" />
                     </motion.div>
                 </div>
            </motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
}
