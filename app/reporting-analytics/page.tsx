import type { Metadata } from "next";

import { Hero } from "@/components/sections/reporting-analytics/hero";
import { ApproachOverview } from "@/components/sections/reporting-analytics/approach-overview";
import { Analytics } from "@/components/sections/reporting-analytics/analytics";
import { ReportingCollection } from "@/components/sections/reporting-analytics/reporting-collection";
import { KPITracking } from "@/components/sections/reporting-analytics/kpi-tracking";
import { WhyChooseUs } from "@/components/sections/reporting-analytics/why-choose-us";
import { CallToAction } from "@/components/sections/shared/cta";

export const metadata: Metadata = {
	title: "Reporting & Analytics | Bronze Lake Consulting",
	description:
		"Transform raw data into actionable insight with analytics, reporting, and automated KPI tracking.",
};

export default function ReportingAnalyticsPage() {
	return (
		<main className="min-h-screen pt-24 bg-background">
			<Hero />
			<ApproachOverview />
			<Analytics />
			<ReportingCollection />
			<KPITracking />
			<WhyChooseUs />
			<CallToAction />
		</main>
	);
}
