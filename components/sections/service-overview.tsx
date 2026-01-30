import { VerticalDrawers } from "@/components/ui/vertical-drawers";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ServiceOverview() {
  
  const services = [
    {
      id: "strategy",
      title: "Strategy Consulting",
      description: "We partner with leadership to define clear paths forward, optimizing business models and operational frameworks for resilience and scale.",
      content: (
        <div className="grid grid-cols-1 gap-8">
            <ul className="space-y-4">
                {["Business Model Innovation", "Operational Efficiency", "Market Entry Strategy", "Change Management"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-bl-bronze-50 shrink-0 mt-0.5" />
                        {/* Text updated for light background */}
                        <span className="font-archivo text-bl-navy/80">{item}</span>
                    </li>
                ))}
            </ul>
            <div className="flex items-end justify-start">
                {/* Link updated for light background */}
                <Link href="/growth-strategy" className="group inline-flex items-center gap-2 text-bl-bronze-75 font-archivo uppercase tracking-widest text-sm hover:text-bl-navy transition-colors">
                    <span>Explore Strategy</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
            </div>
        </div>
      )
    },
    {
      id: "digital",
      title: "Digital Growth",
      description: "Accelerate your market presence with data-driven digital initiatives that connect with audiences and drive measurable revenue growth.",
      content: (
        <div className="grid grid-cols-1 gap-8">
            <ul className="space-y-4">
                {["Customer Journey Mapping", "Conversion Rate Optimization", "Digital Product Strategy", "Performance Marketing"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-bl-bronze-50 shrink-0 mt-0.5" />
                        <span className="font-archivo text-bl-navy/80">{item}</span>
                    </li>
                ))}
            </ul>
             <div className="flex items-end justify-start">
                <Link href="/digital-growth" className="group inline-flex items-center gap-2 text-bl-bronze-75 font-archivo uppercase tracking-widest text-sm hover:text-bl-navy transition-colors">
                    <span>View Digital Services</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
            </div>
        </div>
      )
    },
    {
      id: "analytics",
      title: "Reporting & Analytics",
      description: "Transform raw data into strategic assets. We build intelligent reporting ecosystems that provide real-time clarity for decision makers.",
      content: (
        <div className="grid grid-cols-1 gap-8">
             <ul className="space-y-4">
                {["Business Intelligence Dashboards", "Predictive Analytics", "Data Warehousing", "KPI Definition & Tracking"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-bl-bronze-50 shrink-0 mt-0.5" />
                        <span className="font-archivo text-bl-navy/80">{item}</span>
                    </li>
                ))}
            </ul>
             <div className="flex items-end justify-start">
                <Link href="/reporting-analytics" className="group inline-flex items-center gap-2 text-bl-bronze-75 font-archivo uppercase tracking-widest text-sm hover:text-bl-navy transition-colors">
                    <span>See Analytics Types</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
            </div>
        </div>
      )
    },
    {
      id: "tech",
      title: "Technology Automation",
      description: "Streamline operations with bespoke automation tailored to your unique workflows, reducing manual effort and eliminating error.",
      content: (
        <div className="grid grid-cols-1 gap-8">
             <ul className="space-y-4">
                {["Custom Software Development", "Workflow Automation", "API Integration", "Legacy System Modernization"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-bl-bronze-50 shrink-0 mt-0.5" />
                        <span className="font-archivo text-bl-navy/80">{item}</span>
                    </li>
                ))}
            </ul>
             <div className="flex items-end justify-start">
                <Link href="/technology-automation" className="group inline-flex items-center gap-2 text-bl-bronze-75 font-archivo uppercase tracking-widest text-sm hover:text-bl-navy transition-colors">
                    <span>Automation Solutions</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
            </div>
        </div>
      )
    }
  ];
  return <VerticalDrawers items={services} />;
}
