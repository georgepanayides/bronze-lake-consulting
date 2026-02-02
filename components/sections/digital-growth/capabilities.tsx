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
	return (
		<section className="border-b border-bl-cream-200 bg-bl-cream-50">
			<div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
					<header className="lg:col-span-4">
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

					<div className="lg:col-span-8">
						<div className="grid grid-cols-1 md:grid-cols-2 border border-bl-cream-200 bg-white">
							{CAPABILITIES.map((item, index) => (
								<article
									key={item.title}
									className={
										"p-8 md:p-10 " +
										(index % 2 === 1 ? "md:border-l border-bl-cream-200" : "") +
										(index >= 2 ? " border-t border-bl-cream-200" : "")
									}
								>
									<h3 className="text-lg font-libre text-bl-navy uppercase tracking-wide">{item.title}</h3>
									<p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
										{item.description}
									</p>
								</article>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
