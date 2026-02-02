import type { Metadata } from "next";

import { Hero } from "@/components/sections/technology-automation/hero";
import { IntegrationProcess } from "@/components/sections/technology-automation/integration-process";
import { CustomDevelopment } from "@/components/sections/technology-automation/custom-development";
import { HowItWorks } from "@/components/sections/technology-automation/how-it-works";
import { Benefits } from "@/components/sections/technology-automation/benefits";
import { CallToAction } from "@/components/sections/shared/cta";

export const metadata: Metadata = {
	title: "Technology Automation | Bronze Lake Consulting",
	description:
		"Identify technology gaps, integrate fit-for-purpose software, and automate KPI and reporting workflows with confidence.",
};

export default function TechnologyAutomationPage() {
	return (
		<main className="min-h-screen pt-24 bg-background">
			<Hero />
			<IntegrationProcess />
			<CustomDevelopment />
			<HowItWorks />
			<Benefits />
			<CallToAction />
		</main>
	);
}
