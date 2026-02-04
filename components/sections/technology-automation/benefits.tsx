const WHY = [
	"Deep understanding of automation, KPI frameworks, and reporting structures",
	"A practical focus on making technology work for you—not the vendor",
	"Patience to dive into technical detail and persistence to drive reliable outcomes",
	"Training that makes your team independent and capable",
];

export function Benefits() {
	return (
		<section className="bg-bl-cream-50">
			<div className="container mx-auto px-6 md:px-8 max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
					<header className="lg:col-span-5 py-12 md:py-20">
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

					<div className="lg:col-span-7 py-12 md:py-20 border-x border-bl-cream-200 bg-white/30">
						<div className="border-y border-bl-cream-200 bg-white overflow-hidden">
							<div className="grid grid-cols-1 sm:grid-cols-2 [&>article]:border-b [&>article]:border-bl-cream-200 sm:[&>article:nth-child(2n)]:border-l sm:[&>article:nth-child(2n)]:border-bl-cream-200 [&>article:last-child]:border-b sm:[&>article:nth-last-child(-n+2)]:border-b">
								{WHY.map((item) => (
									<article key={item} className="p-8 md:p-10 bg-white">
										<p className="text-xs font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
											Benefit
										</p>
										<p className="mt-3 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
											{item}
										</p>
									</article>
								))}
							</div>

							<div className="bg-bl-cream-50/40 p-8 md:p-10">
								<p className="text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
									Whether you’re implementing a new tool or building one from scratch, our approach prioritises
									clarity, simplicity, and measurable impact.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
