const YOU_GET = [
	"A clear KPI set tied to revenue and pipeline (not vanity metrics)",
	"Dashboards and reporting cadence that supports decisions", 
	"Experiment backlog (what to test next, and why)",
	"A simple attribution view so you know what’s working",
];

export function Measurement() {
	return (
		<section className="border-b border-bl-cream-200 bg-white">
			<div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
					<header className="lg:col-span-4">
						<p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
							Measurement
						</p>
						<h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
							Make performance
							<span className="text-bl-bronze-75"> visible</span>
						</h2>
						<p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
							Digital growth only compounds when you can see what’s happening and adjust quickly.
						</p>
					</header>

					<div className="lg:col-span-8">
						<div className="border border-bl-cream-200 bg-bl-cream-50/40 p-8 md:p-10">
							<h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
								What you get
							</h3>
							<ul className="mt-4 space-y-3">
								{YOU_GET.map((item) => (
									<li key={item} className="text-sm md:text-base font-archivo text-bl-navy/80">
										{item}
									</li>
								))}
							</ul>
							<p className="mt-8 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
								The goal is simple: fewer opinions, more evidence—and a weekly rhythm of improvements.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
