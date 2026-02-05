import { HorizontalTabs } from "@/components/ui/veritcal-tabs";
import { FadeIn } from "@/components/motion/fade-in";
import { StrategyRoadmap } from "@/components/graphics/professional-expertise/StrategyRoadmap";
import { ReportingGraphicTabs } from "@/components/graphics/professional-expertise/ReportingTabsGraphic";
import { AutomationStepsGraphic } from "@/components/graphics/professional-expertise/AutomationStepsGraphic";
import { BespokeArchGraphic } from "@/components/graphics/professional-expertise/BespokeArch";

// --- Main Section Component ---

export function ProfessionalExperts() {
    
  const expertTabs = [
    {
      id: "strategy",
      title: "Strategic Blueprinting",
      description: "True strategy is a structured roadmap grounded in deep analysis. We move beyond intuition to define priorities that align leadership, optimize resource allocation, and position your business for sustainable competitive advantage.",
      graphic: <StrategyRoadmap />,
    },
    {
            id: "reporting",
            title: "Reporting Intelligence",
            description: "We build clear reporting systems that turn fragmented data into a single source of truth. From KPI design to dashboard delivery, we create a measurement layer leadership can trust.",
          graphic: <ReportingGraphicTabs />,
    },
    {
      id: "automation",
      title: "Automated Precision",
      description: "Manual tracking is prone to error and waste. We deploy AI-driven automation and real-time KPI systems that streamline operations, saving hours of labor while ensuring pinpoint accuracy and instant feedback loops.",
            graphic: <AutomationStepsGraphic />,
    },
    {
      id: "custom-dev",
      title: "Bespoke Architecture",
      description: "When off-the-shelf software becomes a constraint, we architect purpose-built solutions. From custom dashboards to complex integration layers, we code software that fits your business model, rather than forcing you to adapt to generic tools.",
            graphic: <BespokeArchGraphic title="Bespoke Architecture" subtitle="Building…" />,
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
