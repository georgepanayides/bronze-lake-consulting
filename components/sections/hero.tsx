import { FadeIn } from "@/components/motion/fade-in";
import { ArrowGrid } from "@/components/graphics/arrow-grid";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-bl-cream-50 overflow-hidden flex flex-col border-b border-bl-cream-200">
      {/* Background Pattern */}
      <ArrowGrid />

      {/* Main Content Container - Full Height */}
      <div className="container mx-auto h-full relative z-10 p-6 md:p-8 mb-16 flex flex-col justify-end">
        
        {/* Bottom Area Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            
            {/* Bottom Left: Primary Text */}
            <div className="flex flex-col items-start text-left">
                <FadeIn delay={0.1}>
                  <h1 className="text-3xl md:text-5xl font-libre text-bl-navy leading-tight uppercase tracking-tight">
                      Strategic Excellence <br/>
                      <span className="text-bl-bronze-75">For New Zealand Business</span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <p className="mt-6 max-w-md text-sm md:text-base font-archivo text-bl-navy/80 uppercase tracking-widest leading-relaxed">
                      We help ambitious organizations navigate complexity, optimize performance, and achieve sustainable growth.
                  </p>
                </FadeIn>
            </div>

            {/* Bottom Right: Service Levels / Pillars */}
            <div className="hidden md:flex flex-col items-end gap-2 text-bl-navy/60 text-right">
                <FadeIn delay={0.4} direction="up">
                  <p className="text-xs font-archivo tracking-[0.2em] uppercase text-bl-bronze-75 mb-2">Our Expertise</p>
                  <ul className="text-sm font-archivo tracking-wider space-y-1 uppercase">
                      <li>Strategy Consulting</li>
                      <li>Digital Growth</li>
                      <li>Reporting & Analytics</li>
                      <li>Technology Integration</li>
                  </ul>
                </FadeIn>
            </div>
            
        </div>
      </div>
    </section>
  );
}
