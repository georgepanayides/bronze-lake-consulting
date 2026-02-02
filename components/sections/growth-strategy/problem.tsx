const DRIFT_SIGNS = [
  "Leadership lacks clarity on what matters most and why.",
  "Decision-making becomes reactive, not intentional.",
  "Resources get allocated inconsistently with long-term value creation.",
  "Teams work unaligned or pursue conflicting goals.",
];

export function StrategyProblem() {
  return (
    <section className="border-b border-bl-cream-200 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <header className="lg:col-span-4">
            <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
              The problem
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
              Without a defined strategy,
              <span className="text-bl-bronze-75"> organisations drift</span>
            </h2>
            <p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
              True strategy is a structured roadmap grounded in deep analysis of your market, competition,
              capabilities, finances, and data.
            </p>
          </header>

          <div className="lg:col-span-8">
            <div className="border border-bl-cream-200 bg-bl-cream-50/40 p-8 md:p-10">
              <h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
                The symptoms
              </h3>
              <ul className="mt-4 space-y-3">
                {DRIFT_SIGNS.map((item) => (
                  <li key={item} className="text-sm md:text-base font-archivo text-bl-navy/80">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                Many teams get trapped in day-to-day operations without stepping back to test whether the
                work will actually win in the marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
