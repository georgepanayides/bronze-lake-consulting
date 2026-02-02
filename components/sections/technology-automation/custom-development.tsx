import { IDEGraphic } from "@/components/graphics/illustrations/IDEGraphic";

const PROBLEM_POINTS = [
  "Working around limitations rather than eliminating them",
  "Paying for features you never use",
  "Losing time to manual workarounds",
  "Connecting many applications to do one task",
  "Struggling to unify data across platforms",
];

const SOLUTION_EXAMPLES = [
  "Custom dashboards and analytics platforms",
  "Workflow automation tools",
  "Integration layers between disparate systems",
  "Tailored reporting engines with automatic KPI delivery",
];

const BENEFITS = [
  "Fits your business—your process and data model",
  "Eliminates manual workarounds",
  "Improves data integrity and reporting accuracy",
  "Enables real automation and scale",
  "Improves adoption because it’s built for your people",
];

export function CustomDevelopment() {
  return (
    <section className="border-b border-bl-cream-200 bg-bl-cream-50">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <header className="lg:col-span-4">
            <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
              Custom software development
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
              When off-the-shelf
              <span className="text-bl-bronze-75"> isn’t enough</span>
            </h2>
            <p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
              Sometimes no available tool matches your workflows or your ambition. In those cases, bespoke
              software becomes the constraint remover.
            </p>
          </header>

          <div className="lg:col-span-8">
            <div className="mb-8">
              <IDEGraphic title="CUSTOM DEVELOPMENT" subtitle="Building what fits" />
            </div>
            <div className="border border-bl-cream-200 bg-white">
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
                  Generic tools can help in broad areas, but without customisation they often become another
                  constraint rather than an enabler.
                </p>
              </div>

              <div className="p-8 md:p-10 border-t border-bl-cream-200 bg-bl-cream-50/40">
                <h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
                  Our solution
                </h3>
                <p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                  When bespoke solutions are needed, we design and build software that fits your requirements
                  precisely—delivered with performance, security, and usability in mind.
                </p>
                <ul className="mt-6 space-y-3">
                  {SOLUTION_EXAMPLES.map((item) => (
                    <li key={item} className="text-sm md:text-base font-archivo text-bl-navy/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 md:p-10 border-t border-bl-cream-200 bg-white">
                <h3 className="text-sm font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
                  Clear benefits
                </h3>
                <ul className="mt-4 space-y-3">
                  {BENEFITS.map((item) => (
                    <li key={item} className="text-sm md:text-base font-archivo text-bl-navy/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
