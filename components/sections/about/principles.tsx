export function Principles() {
  const principles = [
    {
      title: "Clarity Over Complexity",
      body: "We reduce noise, define the decision, and make the path forward obvious.",
    },
    {
      title: "Systems That Scale",
      body: "Process and tooling should remove friction and support growth—not add overhead.",
    },
    {
      title: "Evidence-led Delivery",
      body: "We prefer measurable progress, clean reporting, and tight feedback loops.",
    },
    {
      title: "Craft + Accountability",
      body: "We ship work we’re proud of—and we stay close to outcomes.",
    },
  ];

  return (
    <section className="border-b border-bl-cream-200 bg-bl-cream-50">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <header className="lg:col-span-2 lg:border-r border-bl-cream-200 p-8 md:p-12 lg:p-24">
          <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
            Our Principles
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-tight">
            A simple way of working,
            <span className="text-bl-bronze-75"> consistently applied</span>
          </h2>
          <p className="mt-6 text-base md:text-lg font-archivo text-bl-navy/80 leading-relaxed">
            These principles keep projects focused and outcomes clear—regardless of size or complexity.
          </p>
        </header>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2">
          {principles.map((p, i) => (
            <article
              key={p.title}
              className={
                i % 2 === 0
                  ? "border-b md:border-b-0 md:border-r border-bl-cream-200 p-8 md:p-12"
                  : "border-b md:border-b-0 border-bl-cream-200 p-8 md:p-12"
              }
            >
              <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
                0{i + 1}
              </p>
              <h3 className="mt-4 text-lg md:text-xl font-libre text-bl-navy uppercase tracking-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
