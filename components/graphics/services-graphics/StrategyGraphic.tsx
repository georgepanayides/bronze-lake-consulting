"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const conversation = [
  {
    id: 1,
    sender: "advisor",
    text: "Hi Alex, Q3 data is in. Efficiency is down 12% in fulfillment.",
  },
  {
    id: 2,
    sender: "client",
    text: "Thanks. Is it the new warehouse integration causing the latency?",
  },
  {
    id: 3,
    sender: "advisor",
    text: "Spot on. I've drafted a workflow automation plan to resolve it.",
  },
  {
    id: 4,
    sender: "client",
    text: "Perfect. Send it over, let's get ahead of this.",
  }
];

export function StrategyGraphic() {
  const containerRef = useRef(null);
  // Trigger animation only when 70% of the graphic is in the viewport
  const isInView = useInView(containerRef, { amount: 0.7, once: true });
  
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingSender, setTypingSender] = useState<string | null>(null);

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    
    const sequence = async () => {
      // Reduced start delay
      await new Promise(r => setTimeout(r, 200));

      while (currentIndex < conversation.length) {
        // 1. Start Typing
        const currentMsg = conversation[currentIndex];
        setTypingSender(currentMsg.sender);
        
        // Typing duration (faster)
        await new Promise(r => setTimeout(r, 500)); 

        // 2. Show Message
        setTypingSender(null);
        setVisibleCount(prev => prev + 1);
        
        // 3. Pause before next (Reading time)
        if (currentIndex < conversation.length - 1) {
            await new Promise(r => setTimeout(r, 500));
        }
        
        currentIndex++;
      }

      // Add final permanent typing indicator for the advisor
      await new Promise(r => setTimeout(r, 600));
      setTypingSender("advisor");
    };

    sequence();
  }, [isInView]);

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-start pt-16 px-6 relative">       
       <div className="flex flex-col gap-3 relative z-10 w-full max-w-[320px] mx-auto">
          {conversation.slice(0, visibleCount).map((msg) => (
             <ChatBubble key={msg.id} sender={msg.sender} text={msg.text} />
          ))}

          {/* Typing Indicator */}
          {typingSender && (
             <TypingBubble sender={typingSender} />
          )}
       </div>
    </div>
  );
}

function ChatBubble({ sender, text }: { sender: string, text: string }) {
  const isAdvisor = sender === "advisor";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex w-full ${isAdvisor ? "justify-start" : "justify-end"}`}
    >
      <div 
        className={`
          max-w-[85%] rounded-2xl p-3 text-sm font-archivo leading-relaxed shadow-sm
          ${isAdvisor 
            ? "bg-bl-cream-50/50 border border-bl-cream-200 text-bl-navy rounded-tl-sm" 
            : "bg-bl-navy text-white rounded-tr-sm"
          }
        `}
      >
        {isAdvisor && (
            <div className="text-[10px] uppercase tracking-wider font-bold text-bl-navy/40 mb-1">
                Bronze Lake
            </div>
        )}
        {text}
      </div>
    </motion.div>
  );
}

function TypingBubble({ sender }: { sender: string }) {
  const isAdvisor = sender === "advisor";
  return (
     <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex w-full ${isAdvisor ? "justify-start" : "justify-end"}`}
      >
        <div 
          className={`
            rounded-2xl px-4 py-3 flex gap-1 items-center
            ${isAdvisor 
              ? "bg-white border border-bl-cream-200 rounded-tl-sm" 
              : "bg-bl-navy rounded-tr-sm"
            }
          `}
        >
             <div className={`w-1.5 h-1.5 rounded-full animate-bounce ${isAdvisor ? "bg-bl-navy/40" : "bg-white/60"}`} style={{ animationDelay: "0ms" }} />
             <div className={`w-1.5 h-1.5 rounded-full animate-bounce ${isAdvisor ? "bg-bl-navy/40" : "bg-white/60"}`} style={{ animationDelay: "150ms" }} />
             <div className={`w-1.5 h-1.5 rounded-full animate-bounce ${isAdvisor ? "bg-bl-navy/40" : "bg-white/60"}`} style={{ animationDelay: "300ms" }} />
        </div>
      </motion.div>
  );
}
