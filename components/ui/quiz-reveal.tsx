"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  // Find the selected question object
  const activeQuestion = questions.find((q) => q.id === selected);

  return (
    <section className={cn("w-full border border-bl-cream-200 bg-white", className)}>
      {/* Step 1 */}
      <header className="border-b border-bl-cream-200 bg-bl-cream-100/50 px-6 py-4 md:px-8">
        <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
          Step 1: Choose the closest statement
        </p>
      </header>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {questions.map((q, index) => {
          const isActive = selected === q.id;
          return (
            <button
              key={q.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setSelected(q.id)}
              className={cn(
                "group relative text-left p-6 md:p-8 outline-none flex flex-col justify-between min-h-[180px] transition-colors cursor-pointer",
                index !== questions.length - 1
                  ? "border-b md:border-b-0 md:border-r border-bl-cream-200"
                  : "border-b md:border-b-0 border-bl-cream-200",
                isActive ? "bg-bl-cream-100" : "bg-white hover:bg-bl-cream-50"
              )}
            >
              <div>
                <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60 mb-3">
                  {index + 1}
                </p>
                <p className="text-lg md:text-xl font-libre text-bl-navy leading-snug uppercase tracking-tight">
                  {q.label}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-archivo uppercase tracking-widest text-bl-navy/50">
                  {isActive ? "Selected" : "Select"}
                </span>
                <div
                  className={cn(
                    "h-10 w-10 border border-bl-cream-200 flex items-center justify-center transition-colors",
                    isActive ? "bg-white" : "bg-bl-cream-50 group-hover:bg-white"
                  )}
                >
                  {isActive ? (
                    <CheckCircle2 className="h-5 w-5 text-bl-bronze-75" />
                  ) : (
                    <ArrowRight className="h-5 w-5 text-bl-bronze-75" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Step 2 */}
      <AnimatePresence mode="wait">
        {activeQuestion ? (
          <motion.div
            key={activeQuestion.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-bl-cream-200 bg-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-8 items-center">
              <div className="md:col-span-2">
                <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60 mb-3">
                  Step 2: Our approach
                </p>
                <p className="text-xl md:text-2xl font-libre text-bl-navy leading-snug">
                  {activeQuestion.insight}
                </p>
              </div>

              <div className="md:col-span-1 flex md:justify-end">
                <Button
                  type="button"
                  size="lg"
                  className="w-full md:w-auto min-w-[220px] h-14 rounded-none border border-bl-cream-200 bg-bl-navy text-bl-cream-200 hover:text-bl-bronze-75 uppercase tracking-widest cursor-pointer hover:bg-bl-navy"
                  onClick={() => router.push("/contact")}
                >
                  {activeQuestion.action}
                  <ArrowRight className="ml-2 w-5 h-5 text-bl-bronze-75" />
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="border-t border-bl-cream-200 bg-bl-cream-50 px-6 py-8 md:px-8 text-center">
            <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/50">
              Select an option above to see the next step
            </p>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
