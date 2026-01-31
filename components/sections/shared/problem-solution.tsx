import { DragSlider } from "@/components/ui/drag-slider";
import { FadeIn } from "@/components/motion/fade-in";
import { CheckCircle2, XCircle } from "lucide-react";
import { ArrowGrid } from "@/components/graphics/arrow-grid";

// Content Components defined OUTSIDE the render function to prevent remounting
const ChaosContent = () => (
    <div className="w-full h-full bg-bl-cream-100 flex items-center justify-center relative overflow-hidden select-none">
        {/* Messy Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 rotate-12 text-6xl font-libre text-bl-navy">Confusion</div>
             <div className="absolute top-1/2 left-1/4 -rotate-6 text-4xl font-archivo text-bl-navy font-bold">Uncertainty</div>
             <div className="absolute bottom-20 right-1/3 rotate-45 text-8xl font-libre text-bl-navy/50">Risky</div>
             <div className="absolute top-1/3 right-10 -rotate-12 text-5xl font-archivo text-bl-navy">Manual</div>
             <div className="absolute bottom-10 left-20 rotate-3 text-4xl font-libre text-bl-navy">Drifting</div>
        </div>
        
        {/* Center Text */}
        <div className="relative z-10 text-center max-w-lg p-8 pointer-events-none">
            <div className="inline-flex items-center gap-2 text-bl-navy/60 mb-4 bg-bl-navy/5 px-3 py-1 rounded-full border border-bl-navy/10">
                <XCircle className="w-4 h-4" />
                <span className="uppercase tracking-widest text-xs font-bold font-archivo">Current State</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-libre text-bl-navy/40 mb-6 leading-tight blur-[1px]">
                Business <br/> Chaos
            </h3>
            <ul className="text-left space-y-4 max-w-sm mx-auto opacity-50">
                <li className="flex items-center gap-3 text-bl-navy font-archivo line-through decoration-bl-bronze-50">
                    <span className="w-1.5 h-1.5 bg-bl-navy/30 rounded-full" />
                    Reactive Decision Making
                </li>
                <li className="flex items-center gap-3 text-bl-navy font-archivo">
                    <span className="w-1.5 h-1.5 bg-bl-navy/30 rounded-full" />
                    Data Silos & Blind Spots
                </li>
                <li className="flex items-center gap-3 text-bl-navy font-archivo">
                    <span className="w-1.5 h-1.5 bg-bl-navy/30 rounded-full" />
                    Wasted Resources
                </li>
            </ul>
        </div>
    </div>
);

const OrderContent = () => (
    <div className="w-full h-full bg-bl-navy flex items-center justify-center relative overflow-hidden select-none">
        {/* Clean Background Pattern */}
        <div className="absolute inset-0 opacity-10 pattern-grid-lg text-white pointer-events-none" />
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-bl-bronze-50/10 rounded-full blur-3xl pointer-events-none" />

        {/* Center Text */}
        <div className="relative z-10 text-center max-w-lg p-8 pointer-events-none">
            <div className="inline-flex items-center gap-2 text-bl-bronze-50 mb-4 bg-bl-bronze-50/10 px-3 py-1 rounded-full border border-bl-bronze-50/20">
                <CheckCircle2 className="w-4 h-4" />
                <span className="uppercase tracking-widest text-xs font-bold font-archivo">Bronze Lake Impact</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-libre text-white mb-6 leading-tight">
                Strategic <br/> <span className="text-bl-bronze-50">Clarity</span>
            </h3>
            <ul className="text-left space-y-4 max-w-sm mx-auto">
                 <li className="flex items-center gap-3 text-bl-cream-50 font-archivo">
                    <CheckCircle2 className="w-5 h-5 text-bl-bronze-50 shrink-0" />
                    Data-Led Confidence
                </li>
                <li className="flex items-center gap-3 text-bl-cream-50 font-archivo">
                    <CheckCircle2 className="w-5 h-5 text-bl-bronze-50 shrink-0" />
                    Automated Intelligence
                </li>
                <li className="flex items-center gap-3 text-bl-cream-50 font-archivo">
                    <CheckCircle2 className="w-5 h-5 text-bl-bronze-50 shrink-0" />
                    Scalable Growth
                </li>
            </ul>
        </div>
    </div>
);

export function ProblemSolution() {
  return (
    <section className="bg-cream-50 relative w-full overflow-hidden border-b border-bl-cream-200">
        {/* 3-Column Layout: 25% | 50% | 25% */}
        <div className="flex flex-col lg:flex-row w-full h-full">
            
            {/* Left Column (25%) - Arrow Grid (Bottom Left Origin simulated via rotation) */}
            <div className="w-full lg:w-1/5 relative hidden lg:block overflow-hidden">
                 <div className="absolute inset-0 w-full h-full rotate-180 opacity-40">
                    <ArrowGrid />
                 </div>
            </div>

            {/* Middle Column (50%) - Content */}
            <div className="w-full border-l border-r border-bl-cream-200 py-20">
                    <FadeIn>
                        <h2 className="text-xl font-libre text-bl-navy mb-4 text-center uppercase tracking-wider">
                            From Ambiguity to <span className="text-bl-bronze-75">Impact</span>
                        </h2>
                    </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="w-full h-[500px] md:h-[600px] border-t border-b border-bl-cream-200">
                        <DragSlider 
                            before={<ChaosContent />} 
                            after={<OrderContent />} 
                            initialPosition={50}
                        />
                        <p className="text-bl-navy/60 font-archivo text-center pt-5 pb-5">
                            Drag the slider to see how we transform operational chaos into streamlined success.
                        </p>
                    </div>

                </FadeIn>
            </div>

            {/* Right Column (25%) - Arrow Grid (Top Right Origin - Default) */}
            <div className="w-full lg:w-1/5 relative hidden lg:block overflow-hidden">
                <div className="absolute inset-0 w-full h-full opacity-40">
                    <ArrowGrid />
                </div>
            </div>
        </div>
    </section>
  );
}
