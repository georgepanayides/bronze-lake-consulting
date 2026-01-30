import { Hero } from "@/components/sections/hero";
import { BrandsTicker } from "@/components/sections/shared/brands-ticker";
import { Testimonials } from "@/components/sections/shared/testimonials";
import { CallToAction } from "@/components/sections/shared/cta";
import { ServiceOverview } from "@/components/sections/service-overview";
import { ProblemSolution } from "@/components/sections/shared/problem-solution";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ServiceOverview />
      <ProblemSolution />
      

      <BrandsTicker />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
