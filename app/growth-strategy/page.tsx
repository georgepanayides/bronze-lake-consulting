import type { Metadata } from "next";

import { Hero } from "@/components/sections/growth-strategy/hero";
import { StrategyProblem } from "@/components/sections/growth-strategy/problem";
import { StrategySolution } from "@/components/sections/growth-strategy/solution";
import { GrowthPlanning } from "@/components/sections/growth-strategy/growth-planning";
import { CallToAction } from "@/components/sections/shared/cta";

export const metadata: Metadata = {
	title: "Growth Strategy | Bronze Lake Consulting",
	description:
		"Strategy consulting and growth planning grounded in analytics, clear roadmaps, and measurable outcomes.",
};

export default function GrowthStrategyPage() {
	return (
		<main className="min-h-screen pt-24 bg-background">
			<Hero />
			<StrategyProblem />
			<StrategySolution />
			<GrowthPlanning />
			<CallToAction />
		</main>
	);
}
