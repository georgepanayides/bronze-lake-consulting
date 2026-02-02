const PILLARS = [
  {
    title: "Analytics",
    description:
      "Use internal and external data to solve problems, spot opportunities, and improve performance.",
  },
  {
    title: "Reporting & Data Collection",
    description:
      "Build simple systems that capture the right signals and present them clearly, in real time.",
  },
  {
    title: "KPI Tracking",
    description:
      "Automate KPI monitoring so accuracy goes up, manual effort goes down, and decisions happen faster.",
  },
];

export function ApproachOverview() {
  return (
    <section className="border-b border-bl-cream-200 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
        <header className="max-w-3xl">
          <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
            Our approach
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
            Three pillars that create
            <span className="text-bl-bronze-75"> clarity</span>
          </h2>
          <p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
            Analytics only matters when it changes decisions. We focus on building a practical system—how
            data is collected, how it’s reported, and how performance is tracked.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 border border-bl-cream-200">
          {PILLARS.map((pillar, index) => (
            <article
              key={pillar.title}
              className={
                "p-8 md:p-10 bg-bl-cream-50/40 " +
                (index !== 0 ? "md:border-l border-bl-cream-200" : "")
              }
            >
              <p className="text-xs font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-lg font-libre text-bl-navy uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm font-archivo text-bl-navy/80 leading-relaxed">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
