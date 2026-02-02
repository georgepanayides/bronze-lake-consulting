const WHY = [
	"Deep understanding of automation, KPI frameworks, and reporting structures",
	"A practical focus on making technology work for you—not the vendor",
	"Patience to dive into technical detail and persistence to drive reliable outcomes",
	"Training that makes your team independent and capable",
];

export function Benefits() {
	return (
		<section className="border-b border-bl-cream-200 bg-bl-cream-50">
			<div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
					<header className="lg:col-span-5">
						<p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
							Why Bronze Lake
						</p>
						<h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
							Most consultants stop at
							<span className="text-bl-bronze-75"> advisory</span>
						</h2>
						<p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
							We deliver outcomes: clearer systems, automated workflows, and reporting that drives better
							decisions.
						</p>
					</header>

					<div className="lg:col-span-7">
						<div className="border border-bl-cream-200 bg-white p-8 md:p-10">
							<ul className="space-y-4">
								{WHY.map((item) => (
									<li key={item} className="text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
										{item}
									</li>
								))}
							</ul>

							<p className="mt-8 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
								Whether you’re implementing a new tool or building one from scratch, our approach prioritises
								clarity, simplicity, and measurable impact.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
