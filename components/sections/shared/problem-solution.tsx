import { DragSlider } from "@/components/ui/drag-slider";
import { FadeIn } from "@/components/motion/fade-in";
import { ArrowGrid } from "@/components/graphics/arrow-grid";
import { ChaosGraphic } from "@/components/graphics/problem-solution/ChaosGraphic";
import { OrderGraphic } from "@/components/graphics/problem-solution/OrderGraphic";

// Content components imported from graphics/problem-solution/

;

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
                            before={<ChaosGraphic />} 
                            after={<OrderGraphic />} 
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
