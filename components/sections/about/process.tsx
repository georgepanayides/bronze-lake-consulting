export function Process() {
  const steps = [
    {
      title: "Discover",
      body: "Align on the decision, define constraints, and map what’s really happening.",
    },
    {
      title: "Design",
      body: "Create the operating plan: priorities, milestones, measurement, and responsibilities.",
    },
    {
      title: "Deliver",
      body: "Execute in focused increments with tight feedback loops and visible progress.",
    },
    {
      title: "Embed",
      body: "Document, train, and hand over systems that your team can sustain.",
    },
  ];

  return (
    <section className="border-b border-bl-cream-200 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <header className="lg:col-span-2 lg:border-r border-bl-cream-200 p-8 md:p-12 lg:p-24 bg-bl-cream-50">
          <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
            How We Work
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-tight">
            A calm process.
            <span className="text-bl-bronze-75"> Sharp outcomes.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg font-archivo text-bl-navy/80 leading-relaxed">
            Simple, repeatable steps that keep teams aligned and projects moving.
          </p>
        </header>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2">
          {steps.map((s, i) => (
            <article
              key={s.title}
              className={
                i % 2 === 0
                  ? "border-b md:border-b-0 md:border-r border-bl-cream-200 p-8 md:p-12"
                  : "border-b md:border-b-0 border-bl-cream-200 p-8 md:p-12"
              }
            >
              <div className="flex items-center justify-between gap-6">
                <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
                  Step 0{i + 1}
                </p>
                <p className="text-xs font-archivo uppercase tracking-widest text-bl-bronze-75">
                  {s.title}
                </p>
              </div>
              <p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
