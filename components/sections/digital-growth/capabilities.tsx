import { CapabilitiesTabs } from "@/components/ui/horizontal-tabs";

const CAPABILITIES = [
	{
		title: "SEO & content strategy",
		description:
			"Build long-term demand by aligning content, search intent, and your positioning—then measure what converts.",
	},
	{
		title: "Paid acquisition",
		description:
			"Run focused campaigns with clear offers, clean landing pages, and disciplined iteration based on results.",
	},
	{
		title: "Conversion rate optimisation",
		description:
			"Improve the funnel: landing pages, messaging, and user journey so more of your traffic becomes revenue.",
	},
	{
		title: "Email & lifecycle",
		description:
			"Turn leads into customers with segmentation, automation, and consistent follow-up that matches your sales cycle.",
	},
	{
		title: "Tracking & reporting foundations",
		description:
			"Make performance visible with correct analytics setup, clear KPIs, and reporting cadences your team uses.",
	},
];

export function Capabilities() {
	const tabs = [
		{
			id: "end-to-end",
			title: "End-to-end",
			description:
				"A joined-up system: positioning, channel mix, landing pages, and measurement working as one—so growth is repeatable, not random.",
		},
		{
			id: "seo",
			title: "SEO & content strategy",
			description: CAPABILITIES[0].description,
		},
		{
			id: "paid",
			title: "Paid acquisition",
			description: CAPABILITIES[1].description,
		},
		{
			id: "cro",
			title: "Conversion rate optimisation",
			description: CAPABILITIES[2].description,
		},
		{
			id: "email",
			title: "Email & lifecycle",
			description: CAPABILITIES[3].description,
		},
		{
			id: "tracking",
			title: "Tracking & reporting foundations",
			description: CAPABILITIES[4].description,
		},
	];

	return (
		<section className="border-b border-bl-cream-200 bg-bl-cream-50">
			<div>
				<div className="mx-auto w-full border-b border-bl-cream-200 bg-bl-bronze-0/5">
					<div className="max-w-6xl border-x border-bl-cream-200 mx-auto bg-bl-cream-50">
					<header className="py-12 md:py-24 text-center">
						<p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
							What we do
						</p>
						<h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
							Digital marketing,
							<span className="text-bl-bronze-75"> end-to-end</span>
						</h2>
						<p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
							We focus on the channels and assets that move your specific market—then we connect them to
							measurement and execution.
						</p>
					</header>
					</div>
					</div>
					<div className="max-w-6xl mx-auto border-x border-bl-cream-200">
						<CapabilitiesTabs tabs={tabs} />
					</div>
			</div>
		</section>
	);
}
