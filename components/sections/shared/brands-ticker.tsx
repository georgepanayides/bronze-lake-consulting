"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { motion } from "framer-motion";

// Placeholder text brands until SVGs are added
const BRANDS = [
  "Horizon Ventures",
  "Stirling Financial",
  "Nexus Health",
  "Pacific Capital",
  "Vanguard Tech",
];

export function BrandsTicker() {
  return (
    <section className="w-full border-b border-bl-navy/10 bg-white/50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <FadeIn>
            <div className="flex flex-col md:flex-row items-center py-6 md:py-8 gap-6 md:gap-16">
                
                {/* Label - Inline - Static anchor */}
                <span className="text-xs font-archivo font-light text-bl-navy/30 uppercase tracking-[0.2em] whitespace-nowrap shrink-0 z-10 relative">
                    Trusted Partnership With
                </span>

                {/* Ticker Container - Masked for fade effect */}
                <div className="relative flex-1 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div 
                        className="flex items-center gap-16 md:gap-24 w-max"
                        animate={{
                            x: [0, "-25.5%"] 
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {/* Duplicate lists for seamless loop */}
                        {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
                            <div 
                                key={i} 
                                className="text-lg md:text-xl font-libre text-bl-navy cursor-default opacity-50 whitespace-nowrap"
                            >
                                {/* 
                                    Ideally replaced with <Image /> components 
                                    e.g. <Image src={`/logos/${brand}.svg`} ... />
                                */}
                                {brand}
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </FadeIn>
      </div>
    </section>
  );
}

