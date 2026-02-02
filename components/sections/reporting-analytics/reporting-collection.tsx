import { IntegrationNodesGraphic } from "@/components/graphics/illustrations/IntegrationNodesGraphic";

const BENEFITS = [
	"Real-time access to data for timely decisions.",
	"Clearer understanding of business performance.",
	"Greater transparency for stakeholders.",
];

export function ReportingCollection() {
	return (
		<section className="border-b border-bl-cream-200 bg-bl-cream-50">
			<div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
					<header className="lg:col-span-4">
						<p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
							Pillar 02
						</p>
						<h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
							Reporting
							<span className="text-bl-bronze-75"> &amp; data collection</span>
						</h2>
						<p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
							Build a system that captures what matters, then presents it in a way teams can actually use.
						</p>
					</header>

					<div className="lg:col-span-8">
						<div className="mb-8">
							<IntegrationNodesGraphic
								heading="Data collection"
								subheading="From source systems to usable insight"
							/>
						</div>
						<div className="grid grid-cols-1 gap-8 border border-bl-cream-200 bg-white">
							<div className="p-8 md:p-10">
								<h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
									The problem
								</h3>
								<p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
									Data is often underutilised. Without a simple collection and reporting system, valuable
									insights remain untapped—even when the answers are already in your business.
								</p>
							</div>

							<div className="p-8 md:p-10 border-t border-bl-cream-200">
								<h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
									Our solution
								</h3>
								<p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
									We design tailored reporting and data collection processes that clarify your data, surface
									key areas of concern, and make insights accessible—so you can see the implications, not
									just the numbers.
								</p>
							</div>

							<div className="p-8 md:p-10 border-t border-bl-cream-200">
								<h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
									Benefits
								</h3>
								<ul className="mt-4 space-y-3">
									{BENEFITS.map((item) => (
										<li key={item} className="text-sm md:text-base font-archivo text-bl-navy/80">
											{item}
										</li>
									))}
								</ul>
							</div>

							<div className="p-8 md:p-10 border-t border-bl-cream-200">
								<h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
									Without effective reporting
								</h3>
								<p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
									Poor reporting leads to misunderstandings about performance and ineffective strategy. Without
									a collection system, useful insights stay hidden and your business keeps flying blind.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
