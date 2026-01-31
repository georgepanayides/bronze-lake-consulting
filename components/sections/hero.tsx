import { FadeIn } from "@/components/motion/fade-in";
import { ArrowGrid } from "@/components/graphics/arrow-grid";
import HeroGraphic, { type Notification } from "../graphics/HeroGraphic";

const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    title: "Profitability Surge",
    message: "Your net profit is tracking 15% higher than last month.",
    metric: "+15%",
    type: "success",
    delay: 500
  },
  {
    id: 2,
    title: "Pricing Opportunity",
    message: "Analysis indicates you are undercharging vs market average.",
    metric: "$2.4k/mo",
    type: "warning",
    delay: 2500
  },
  {
    id: 3,
    title: "Volume Risk Alert",
    message: "Unit economics become uncompetitive at >10k quantities.",
    type: "alert",
    delay: 4500
  },
  {
    id: 4,
    title: "Untapped Revenue",
    message: "Q3 Strategy: Secondary revenue stream is highly underutilised.",
    metric: "High Potential",
    type: "insight",
    delay: 6500
  },
  {
    id: 5,
    title: "Operational Bottleneck",
    message: "Fulfillment latency is currently restricting growth velocity.",
    metric: "-12% Efficiency",
    type: "alert",
    delay: 8500
  }
];

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-bl-cream-50 overflow-hidden flex flex-col border-b border-bl-cream-200">
      {/* Background Pattern */}
      <ArrowGrid />
      <div className="w-150 h-full absolute right-85">
        <HeroGraphic notifications={NOTIFICATIONS} /> 
      </div>

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
