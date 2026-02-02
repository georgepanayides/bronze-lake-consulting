import Link from "next/link";

export function Proof() {
  const outcomes = [
    "Sharper prioritisation and decision cadence",
    "Reporting clarity with executive-ready dashboards",
    "Lean automation to remove repetitive work",
    "Roadmaps that teams can actually execute",
  ];

  const engagements = [
    "Growth strategy + operating model alignment",
    "KPI definition, data collection, and reporting build",
    "Digital growth experiments and conversion optimisation",
    "Integration planning and automation delivery",
  ];

  return (
    <section className="border-b border-bl-cream-200 bg-bl-cream-50">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <header className="lg:col-span-2 lg:border-r border-bl-cream-200 p-8 md:p-12 lg:p-24">
          <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
            Proof
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-tight">
            Practical improvements,
            <span className="text-bl-bronze-75"> measurable results</span>
          </h2>
          <p className="mt-6 text-base md:text-lg font-archivo text-bl-navy/80 leading-relaxed">
            We focus on work that moves the needle and leaves you with systems your team can run.
          </p>
        </header>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2">
          <div className="border-b md:border-b-0 md:border-r border-bl-cream-200 p-8 md:p-12 bg-white">
            <h3 className="text-sm font-archivo uppercase tracking-widest text-bl-navy/60">
              Outcomes
            </h3>
            <ul className="mt-6 space-y-4">
              {outcomes.map((o) => (
                <li key={o} className="text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-12 bg-white">
            <h3 className="text-sm font-archivo uppercase tracking-widest text-bl-navy/60">
              Typical Engagements
            </h3>
            <ul className="mt-6 space-y-4">
              {engagements.map((e) => (
                <li key={e} className="text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                  {e}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-3 border border-bl-cream-200 px-4 py-3 text-sm font-archivo uppercase tracking-widest text-bl-navy hover:text-bl-bronze-75 transition-colors"
              >
                Start A Conversation
                <span className="text-bl-bronze-75">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
