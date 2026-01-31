import { HorizontalTabs } from "@/components/ui/horizontal-tabs";
import { FadeIn } from "@/components/motion/fade-in";
import { 
    Network, 
    Cpu, 
    Layers, 
    ArrowUpRight,
    Search,
    Database,
    Binary
} from "lucide-react";
import Image from "next/image";

// --- Graphic Components for the Tabs ---

function StrategyGraphic() {
    return (
        <div className="relative w-full max-w-sm aspect-square">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-bl-navy/20 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-bl-navy/5 rounded-full flex items-center justify-center animate-pulse-slow">
                     <Image
                     src={"/icons/bl-brand-icon.svg"}
                     alt="Bronze Lake Icon"
                     width={220}
                     height={180}
                     className="object-cover" 
                     />
                    
                </div>
            </div>
            
            {/* Orbiting nodes */}
            <div className="absolute top-0 right-10 p-3 bg-white shadow-lg rounded-lg border border-bl-cream-300">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-bl-bronze-50 rounded-full" />
                    <span className="text-xs font-bold text-bl-navy">Market Analysis</span>
                </div>
            </div>
             <div className="absolute bottom-10 left-5 p-3 bg-white shadow-lg rounded-lg border border-bl-cream-300">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-bl-navy rounded-full" />
                    <span className="text-xs font-bold text-bl-navy">Capabilities</span>
                </div>
            </div>
             <div className="absolute bottom-20 right-0 p-3 bg-white shadow-lg rounded-lg border border-bl-cream-300">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-bl-bronze-75 rounded-full" />
                    <span className="text-xs font-bold text-bl-navy">Competition</span>
                </div>
            </div>
        </div>
    );
}

function AnalyticsGraphic() {
    return (
        <div className="w-full h-full flex flex-col justify-center gap-4 max-w-sm mx-auto p-4">
             {/* Abstract Bar Chart */}
             <div className="flex items-end justify-between h-40 gap-2">
                 <div className="w-full bg-bl-navy/10 rounded-t-sm h-[40%]" />
                 <div className="w-full bg-bl-navy/20 rounded-t-sm h-[60%]" />
                 <div className="w-full bg-bl-navy/10 rounded-t-sm h-[30%]" />
                 <div className="w-full bg-bl-bronze-50 rounded-t-sm h-[85%] relative shadow-lg">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-bold text-bl-bronze-75 mb-2">
                        +124%
                      </div>
                 </div>
                 <div className="w-full bg-bl-navy/10 rounded-t-sm h-[50%]" />
             </div>
             
             {/* Data Points */}
             <div className="grid grid-cols-2 gap-4 mt-4">
                 <div className="bg-white p-3 rounded border border-bl-cream-300 flex items-center gap-3">
                     <Search className="w-5 h-5 text-bl-navy/40" />
                     <div className="h-2 w-16 bg-bl-navy/10 rounded" />
                 </div>
                 <div className="bg-white p-3 rounded border border-bl-cream-300 flex items-center gap-3">
                     <Database className="w-5 h-5 text-bl-navy/40" />
                     <div className="h-2 w-12 bg-bl-navy/10 rounded" />
                 </div>
             </div>
        </div>
    );
}

function AutomationGraphic() {
    return (
        <div className="relative w-full max-w-sm h-64 flex items-center justify-center">
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full text-bl-bronze-50/30" stroke="currentColor" strokeWidth="2">
                <line x1="20%" y1="50%" x2="50%" y2="50%" />
                <line x1="50%" y1="50%" x2="80%" y2="50%" />
            </svg>

            {/* Nodes */}
            <div className="absolute left-[10%] bg-white p-4 rounded-xl shadow-lg border border-bl-cream-300 z-10">
                <Binary className="w-8 h-8 text-bl-navy/40" />
            </div>

            <div className="absolute left-[50%] -translate-x-1/2 bg-bl-navy p-4 rounded-full shadow-xl z-20 ring-4 ring-bl-cream-100">
                <Cpu className="w-10 h-10 text-white animate-spin-slow" />
            </div>

            <div className="absolute right-[10%] bg-white p-4 rounded-xl shadow-lg border border-bl-bronze-50 z-10">
                <ArrowUpRight className="w-8 h-8 text-bl-bronze-50" />
            </div>
        </div>
    );
}

function CustomDevGraphic() {
    return (
        <div className="w-full max-w-sm space-y-3 relative">
            {/* Stacked Layers */}
            <div className="h-16 bg-white rounded-lg shadow-sm border border-bl-cream-300 w-[90%] mx-auto translate-y-4 opacity-50" />
            <div className="h-16 bg-white rounded-lg shadow-md border border-bl-cream-300 w-[95%] mx-auto translate-y-2 opacity-80" />
            
            {/* Main Top Layer */}
            <div className="h-40 bg-bl-navy rounded-lg shadow-xl border border-bl-navy flex flex-col p-4 relative z-10 overflow-hidden">
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 space-y-2">
                    <div className="h-2 w-3/4 bg-white/10 rounded" />
                    <div className="h-2 w-1/2 bg-white/10 rounded" />
                    <div className="h-2 w-full bg-white/5 rounded" />
                    <div className="h-2 w-2/3 bg-white/5 rounded" />
                </div>
                
                <Layers className="absolute bottom-4 right-4 text-bl-bronze-50 w-12 h-12 opacity-20" />
            </div>
        </div>
    );
}

// --- Main Section Component ---

export function ProfessionalExperts() {
    
  const expertTabs = [
    {
      id: "strategy",
      title: "Strategic Blueprinting",
      description: "True strategy is a structured roadmap grounded in deep analysis. We move beyond intuition to define priorities that align leadership, optimize resource allocation, and position your business for sustainable competitive advantage.",
      graphic: <StrategyGraphic />,
    },
    {
      id: "analytics",
      title: "Data Intelligence",
      description: "We employ advanced analytics to uncover hidden opportunities and operational blind spots. By turning raw data into clear, actionable insights through custom reporting, we eliminate guesswork and drive enhanced performance.",
      graphic: <AnalyticsGraphic />,
    },
    {
      id: "automation",
      title: "Automated Precision",
      description: "Manual tracking is prone to error and waste. We deploy AI-driven automation and real-time KPI systems that streamline operations, saving hours of labor while ensuring pinpoint accuracy and instant feedback loops.",
      graphic: <AutomationGraphic />,
    },
    {
      id: "custom-dev",
      title: "Bespoke Architecture",
      description: "When off-the-shelf software becomes a constraint, we architect purpose-built solutions. From custom dashboards to complex integration layers, we code software that fits your business model, rather than forcing you to adapt to generic tools.",
      graphic: <CustomDevGraphic />,
    }
  ];

  return (
    <section className="py-12 relative w-full">
      <div className="w-full">
        
        <div className="mb-16 px-6 md:px-8 container mx-auto">
            <FadeIn>
                <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8">
                    <div className="max-w-2xl">
                        <h4 className="text-3xl font-libre text-bl-navy uppercase tracking-wide">
                            Professional Expertise
                        </h4>
                        <h2 className="text-3xl font-libre text-bl-bronze-75 uppercase">
                            Technical mastery meets strategic vision.
                        </h2>
                    </div>
                    <div className="max-w-md shrink-0">
                        <p className="text-sm md:text-base font-archivo text-bl-navy/80 uppercase tracking-widest leading-relaxed bg-white/50 backdrop-blur-sm">
                            We don&apos;t just advise; we build, code, and architect. Our depth of technical knowledge allows us to execute complex digital transformations that others can only plan.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </div>

        <FadeIn delay={0.2} className="border-b border-t border-bl-cream-200">
            <HorizontalTabs tabs={expertTabs} />
        </FadeIn>

      </div>
    </section>
  );
}
