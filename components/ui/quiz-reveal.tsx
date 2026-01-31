"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface QuizQuestion {
  id: string;
  label: string;
  insight: string;
  action: string;
}

interface QuizRevealProps {
  questions: QuizQuestion[];
  className?: string;
}

export function QuizReveal({ questions, className }: QuizRevealProps) {
  const [selected, setSelected] = useState<string | null>(null);

  // Find the selected question object
  const activeQuestion = questions.find((q) => q.id === selected);

  return (
    <div className={cn("w-full border border-bl-navy/10 bg-white", className)}>
      {/* Questions Grid - 3 Columns, no gaps */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {questions.map((q, index) => (
          <button
            key={q.id}
            onClick={() => setSelected(q.id)}
            className={cn(
              "group relative text-left p-8 md:p-12 transition-all duration-300 outline-none flex flex-col justify-between min-h-[200px]",
              // Add borders between items: Bottom border for everyone (if on mobile stack) or just Right border for desktop
              // Mobile: All get border-b except last. Desktop: All get border-r except last.
              // To simplify: border-b on mobile, md:border-b-0, md:border-r (except last id)
               index !== questions.length - 1 ? "border-b md:border-b-0 md:border-r border-bl-navy/10" : "border-b md:border-b-0 border-bl-navy/10", // Note: Added bottom border to 3rd item temporarily to support the reveal area below
              
              // Interaction Styles
              selected === q.id
                ? "bg-bl-navy text-white"
                : "bg-white hover:bg-bl-cream-50 text-bl-navy"
            )}
          >
            <span className={cn(
                "text-xl md:text-2xl font-libre leading-tight mb-6 block",
                selected === q.id ? "text-white" : "text-bl-navy"
            )}>
                {q.label}
            </span>
            
            <div className={cn(
                "w-10 h-10 flex items-center justify-center transition-colors rounded-sm",
                selected === q.id 
                    ? "bg-bl-bronze-50 text-bl-navy" 
                    : "bg-bl-cream-100 text-bl-navy/40 group-hover:bg-bl-navy group-hover:text-white"
            )}>
                {selected === q.id ? <CheckCircle2 className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </div>
          </button>
        ))}
      </div>

      {/* Reveal Area (Full Width, below the grid) */}
      <AnimatePresence mode="wait">
        {activeQuestion ? (
            <motion.div
                key={activeQuestion.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="overflow-hidden border-t border-bl-navy/10 bg-bl-cream-100"
            >
                <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Insight Text */}
                    <div className="md:col-span-2">
                        <div className="mb-4 flex items-center gap-3">
                             <div className="h-[1px] w-8 bg-bl-bronze-50" />
                             <span className="text-xs uppercase tracking-widest text-bl-navy font-bold">The Bronze Lake Approach</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-libre text-bl-navy leading-snug">
                            {activeQuestion.insight}
                        </p>
                    </div>

                    {/* Action Button */}
                    <div className="md:col-span-1 flex md:justify-end">
                        <Button 
                            size="lg" 
                            className="bg-bl-navy text-white hover:bg-bl-navy/90 w-full md:w-auto min-w-[200px] h-14 text-lg rounded-none"
                            onClick={() => window.location.href = '/contact'}
                        >
                            {activeQuestion.action}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </motion.div>
        ) : (
            // Placeholder state (Optional: Keep it collapsed or show a prompt)
            <div className="p-8 text-center border-t border-bl-navy/10 bg-bl-cream-50 text-bl-navy/40 uppercase tracking-widest text-sm font-archivo">
                Select a statement above to identify your gap
            </div>
        )}
      </AnimatePresence>
    </div>
  );
}
