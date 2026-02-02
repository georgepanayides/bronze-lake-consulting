const STEPS = [
  {
    title: "Diagnose",
    description:
      "Audit the current funnel: traffic sources, conversion paths, messaging, and what the data is (and isn’t) telling you.",
  },
  {
    title: "Position",
    description:
      "Clarify the offer and message so the right customers self-select, and the value is immediately understood.",
  },
  {
    title: "Execute",
    description:
      "Build and run campaigns across the channels that match your market—then connect them to clean landing pages.",
  },
  {
    title: "Optimise",
    description:
      "Measure results, run experiments, and improve conversion so growth becomes predictable over time.",
  },
];

export function GrowthApproach() {
  return (
    <section className="border-b border-bl-cream-200 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
        <header className="max-w-3xl">
          <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
            Our framework
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
            A system for
            <span className="text-bl-bronze-75"> consistent acquisition</span>
          </h2>
          <p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
            We treat digital marketing as a practical operating system: clear priorities, simple
            measurement, and compounding improvements.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 border border-bl-cream-200 bg-bl-cream-50/40">
          {STEPS.map((step, index) => (
            <article
              key={step.title}
              className={
                "p-8 md:p-10 bg-white/60 " +
                (index % 2 === 1 ? "md:border-l border-bl-cream-200" : "") +
                (index >= 2 ? " border-t border-bl-cream-200" : "")
              }
            >
              <p className="text-xs font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-lg font-libre text-bl-navy uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
