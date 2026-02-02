import type { Metadata } from "next";

import { Hero } from "@/components/sections/digital-growth/hero";
import { GrowthApproach } from "@/components/sections/digital-growth/approach";
import { Capabilities } from "@/components/sections/digital-growth/capabilities";
import { Measurement } from "@/components/sections/digital-growth/measurement";
import { CallToAction } from "@/components/sections/shared/cta";

export const metadata: Metadata = {
	title: "Digital Growth | Bronze Lake Consulting",
	description:
		"Digital marketing and conversion systems built for measurable, repeatable growth—grounded in clear reporting.",
};

export default function DigitalGrowthPage() {
	return (
		<main className="min-h-screen pt-24 bg-background">
			<Hero />
			<GrowthApproach />
			<Capabilities />
			<Measurement />
			<CallToAction />
		</main>
	);
}
