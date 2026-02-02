const BENEFITS = [
	"Improved decision-making based on reliable insights.",
	"Identification of market opportunities and customer needs.",
	"Enhanced operational efficiency.",
];

export function Analytics() {
	return (
		<section className="border-b border-bl-cream-200 bg-white">
			<div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
					<header className="lg:col-span-4">
						<p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
							Pillar 01
						</p>
						<h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
							Analytics
							<span className="text-bl-bronze-75"> for problem-solving</span>
						</h2>
						<p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
							We use advanced analysis across internal and external data to reveal what’s really driving
							performance.
						</p>
					</header>

					<div className="lg:col-span-8">
						<div className="grid grid-cols-1 gap-8 border border-bl-cream-200 bg-bl-cream-50/40">
							<div className="p-8 md:p-10">
								<h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
									The problem
								</h3>
								<p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
									Many businesses struggle to turn data into actionable insight. The result is missed
									opportunities and inefficient operations.
								</p>
							</div>

							<div className="p-8 md:p-10 border-t border-bl-cream-200">
								<h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
									Our solution
								</h3>
								<p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
									We apply structured analytics to diagnose issues and uncover improvement opportunities—so
									decisions are guided by evidence, not guesswork.
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
									Without proper analytics
								</h3>
								<p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
									Neglecting analytics can lead to poor decision-making and loss of competitive edge—like
									sailing without a captain or a map.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
