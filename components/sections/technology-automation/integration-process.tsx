import { IntegrationNodesGraphic } from "@/components/graphics/illustrations/IntegrationNodesGraphic";

const PROBLEM_POINTS = [
  "Repetitive and error-prone tasks",
  "Lack of visibility into performance or KPIs",
  "Siloed data and inconsistent reporting",
  "Slow operational workflows that limit growth",
];

const SOLUTION_POINTS = [
  "Conducting a diagnostic of your current systems, processes, and data flows",
  "Mapping operational bottlenecks, manual tasks, and reporting blind spots",
  "Prioritising gaps that can be solved or improved through software",
];

const WHAT_YOU_GET = [
  "Clear documentation of process gaps and opportunities",
  "A tailored software shortlist with cost/benefit rationale",
  "Confidence in your technology investments",
  "Tools that automate work, consolidate data, and deliver real intelligence",
];

const IMPLEMENTATION_STEPS = [
  "Learn the selected platform(s) deeply before implementation",
  "Configure and integrate software with your existing systems",
  "Train your team in practical, results-focused usage",
  "Embed reporting and dashboards so insights are instantly actionable",
];

export function IntegrationProcess() {
  return (
    <section className="border-b border-bl-cream-200 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <header className="lg:col-span-4">
            <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
              Technology &amp; software integration
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
              Identify gaps.
              <span className="text-bl-bronze-75"> Integrate the right tools.</span>
            </h2>
            <p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
              Many businesses run on manual, fragmented systems. We help you move to fit-for-purpose
              software with clear reporting and measurable outcomes.
            </p>
          </header>

          <div className="lg:col-span-8">
            <div className="mb-8">
              <IntegrationNodesGraphic
                heading="Integration"
                subheading="Systems connected, data unified"
              />
            </div>
            <div className="border border-bl-cream-200 bg-bl-cream-50/40">
              <div className="p-8 md:p-10">
                <h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
                  The problem
                </h3>
                <ul className="mt-4 space-y-3">
                  {PROBLEM_POINTS.map((item) => (
                    <li key={item} className="text-sm md:text-base font-archivo text-bl-navy/80">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                  Without clarity on where technology adds value, businesses often invest in tools that solve
                  symptoms—not root causes.
                </p>
              </div>

              <div className="p-8 md:p-10 border-t border-bl-cream-200 bg-white">
                <h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
                  Our solution
                </h3>
                <ul className="mt-4 space-y-3">
                  {SOLUTION_POINTS.map((item) => (
                    <li key={item} className="text-sm md:text-base font-archivo text-bl-navy/80">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                  Once priorities are clear, we evaluate and recommend solutions aligned to your goals,
                  budget, and technical environment.
                </p>
              </div>

              <div className="p-8 md:p-10 border-t border-bl-cream-200 bg-bl-cream-50/40">
                <h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
                  What you get
                </h3>
                <ul className="mt-4 space-y-3">
                  {WHAT_YOU_GET.map((item) => (
                    <li key={item} className="text-sm md:text-base font-archivo text-bl-navy/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 md:p-10 border-t border-bl-cream-200 bg-white">
                <h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
                  Smooth implementation &amp; training
                </h3>
                <ol className="mt-4 space-y-3 list-decimal pl-5">
                  {IMPLEMENTATION_STEPS.map((item) => (
                    <li key={item} className="text-sm md:text-base font-archivo text-bl-navy/80">
                      {item}
                    </li>
                  ))}
                </ol>
                <p className="mt-8 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                  The result: faster processes, fewer errors, better reporting, and a workforce empowered by
                  tools—not frustrated by them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
