const PROBLEMS = [
	"Unpredictable: you can’t anticipate resource requirements, cash flow needs, or bottlenecks.",
	"Unprofitable: you expand volume without understanding costs, margins, or lifetime value.",
	"Reactive: you chase what appears instead of targeting the highest-impact levers.",
];

const APPROACH = [
	"Assess opportunities systematically using market dynamics, segmentation, and performance data.",
	"Align growth with financial goals so growth drives profitability, not just top-line revenue.",
	"Build predictable, scalable systems with automation, KPI dashboards, and transparent reporting.",
	"Turn insight into initiatives with accountability, timelines, and measurable outcomes.",
];

export function GrowthPlanning() {
	return (
		<section className="border-b border-bl-cream-200 bg-bl-cream-50">
			<div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
					<header className="lg:col-span-4">
						<p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
							Growth planning
						</p>
						<h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
							Turn strategy into a
							<span className="text-bl-bronze-75"> growth engine</span>
						</h2>
						<p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
							Growth planning identifies the highest-value opportunities—then maps a practical, measurable
							path to capture them.
						</p>
					</header>

					<div className="lg:col-span-8">
						<div className="border border-bl-cream-200 bg-white">
							<div className="p-8 md:p-10">
								<h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
									The problem without a plan
								</h3>
								<ul className="mt-4 space-y-3">
									{PROBLEMS.map((item) => (
										<li key={item} className="text-sm md:text-base font-archivo text-bl-navy/80">
											{item}
										</li>
									))}
								</ul>
							</div>

							<div className="p-8 md:p-10 border-t border-bl-cream-200 bg-bl-cream-50/40">
								<h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
									Our approach &amp; your benefits
								</h3>
								<ul className="mt-4 space-y-3">
									{APPROACH.map((item) => (
										<li key={item} className="text-sm md:text-base font-archivo text-bl-navy/80">
											{item}
										</li>
									))}
								</ul>

								<p className="mt-8 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
									With robust growth planning, you gain a clear path from where you are to where you want to be
									—minimising risk and improving execution confidence.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
