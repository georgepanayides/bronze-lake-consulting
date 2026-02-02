const APPROACH = [
  {
    title: "Clarity of purpose",
    description:
      "Define strategic priorities that align leadership, stakeholders, and teams around what matters most.",
  },
  {
    title: "Data-informed insights",
    description:
      "Ground decisions in evidence—internal performance data, market trends, customer behaviour, and competitive analysis.",
  },
  {
    title: "Actionable roadmaps",
    description:
      "Move beyond high-level ideas with implementation plans, measurable milestones, and confidence in execution.",
  },
  {
    title: "Automation & KPI integration",
    description:
      "Make strategy visible and trackable using modern tools, automation, and KPI frameworks.",
  },
];

export function StrategySolution() {
  return (
    <section className="border-b border-bl-cream-200 bg-bl-cream-50">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <header className="lg:col-span-4">
            <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
              Our solution
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
              Strategy that works
              <span className="text-bl-bronze-75"> in practice</span>
            </h2>
            <p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
              We combine analytics with real-world understanding of business pressure—so the roadmap is
              clear, measurable, and executable.
            </p>
          </header>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 border border-bl-cream-200 bg-white">
              {APPROACH.map((item, index) => (
                <article
                  key={item.title}
                  className={
                    "p-8 md:p-10 " +
                    (index % 2 === 1 ? "md:border-l border-bl-cream-200" : "") +
                    (index >= 2 ? " border-t border-bl-cream-200" : "")
                  }
                >
                  <p className="text-xs font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-libre text-bl-navy uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
              With clear strategy consulting, you gain confidence in decisions, avoid costly missteps, and
              position your business for sustainable competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
