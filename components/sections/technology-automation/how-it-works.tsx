const STEPS = [
	{
		title: "Requirements discovery",
		description:
			"We work with your team to define exactly what the solution must achieve and what success looks like.",
	},
	{
		title: "Specification & design",
		description:
			"We map workflows, user roles, data models, and technical requirements so delivery is predictable.",
	},
	{
		title: "Development & QA",
		description:
			"We build with clean architecture and thorough testing to keep quality high and risk low.",
	},
	{
		title: "Deployment & support",
		description:
			"We implement into your live environment and stand by performance and reliability.",
	},
];

export function HowItWorks() {
	return (
		<section className="border-b border-bl-cream-200 bg-white">
			<div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
				<header className="max-w-3xl">
					<p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
						How it works
					</p>
					<h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
						A delivery process built for
						<span className="text-bl-bronze-75"> reliability</span>
					</h2>
					<p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
						Whether we’re integrating software or building custom systems, we deliver with clear stages
						and measurable progress.
					</p>
				</header>

				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-bl-cream-200 bg-bl-cream-50/40">
					{STEPS.map((step, index) => (
						<article
							key={step.title}
							className={
								"p-8 md:p-10 bg-white/60 " +
								(index !== 0 ? "md:border-l border-bl-cream-200" : "")
							}
						>
							<p className="text-xs font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
								0{index + 1}
							</p>
							<h3 className="mt-3 text-lg font-libre text-bl-navy uppercase tracking-wide">
								{step.title}
							</h3>
							<p className="mt-4 text-sm font-archivo text-bl-navy/80 leading-relaxed">
								{step.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
