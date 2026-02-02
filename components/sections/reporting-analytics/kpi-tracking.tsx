const BENEFITS = [
	"Time savings through automated processes.",
	"Increased accuracy in tracking.",
	"Faster adjustments based on real-time data.",
];

export function KPITracking() {
	return (
		<section className="border-b border-bl-cream-200 bg-white">
			<div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
					<header className="lg:col-span-4">
						<p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
							Pillar 03
						</p>
						<h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
							KPI tracking
							<span className="text-bl-bronze-75"> through automation</span>
						</h2>
						<p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
							When performance is visible and current, teams move faster and improve sooner.
						</p>
					</header>

					<div className="lg:col-span-8">
						<div className="grid grid-cols-1 gap-8 border border-bl-cream-200 bg-bl-cream-50/40">
							<div className="p-8 md:p-10">
								<h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
									The problem
								</h3>
								<p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
									Manual KPI tracking is time-consuming and prone to error. It pulls attention away from core
									work and often creates a lag between what’s happening and what you see.
								</p>
							</div>

							<div className="p-8 md:p-10 border-t border-bl-cream-200">
								<h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
									Our solution
								</h3>
								<p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
									We use automation (and where appropriate, AI) to streamline KPI tracking and reduce manual
									effort. The result is accurate, real-time monitoring of the metrics that matter.
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
									Without modern KPI tracking
								</h3>
								<p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
									Failing to automate wastes labour-hours, introduces avoidable mistakes, and slows down the
									feedback loop that drives improvement.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
