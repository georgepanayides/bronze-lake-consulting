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
  const TABLE_COLUMNS = [
    {
      key: "problem",
      kicker: "The problem",
      title: "Where things break down",
      points: PROBLEM_POINTS,
      footer:
        "Without clarity on where technology adds value, businesses often invest in tools that solve symptoms—not root causes.",
    },
    {
      key: "approach",
      kicker: "Our approach",
      title: "Diagnose and prioritise",
      points: SOLUTION_POINTS,
      footer:
        "Once priorities are clear, we evaluate and recommend solutions aligned to your goals, budget, and technical environment.",
    },
    {
      key: "what-you-get",
      kicker: "What you get",
      title: "Clear outputs and confidence",
      points: WHAT_YOU_GET,
      footer: "A clear, practical plan your team can execute with confidence.",
    },
  ] as const;

  const maxPointRows = Math.max(...TABLE_COLUMNS.map((c) => c.points.length));

  return (
    <section className="border-b border-bl-cream-200 bg-white pb-12 md:pb-24">
      <div>
        <div className="bg-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch container mx-auto max-w-7xl border-x border-bl-cream-200">
            <header className="h-full flex items-center p-8 md:p-10 py-12 md:py-20 border-t border-bl-cream-200 lg:border-t-0 lg:border-r lg:border-bl-cream-200">
              <div className="w-full">
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
              </div>
            </header>

            <div className="bg-bl-cream-50/40">
              <IntegrationNodesGraphic />
            </div>
          </div>

          <div className="border-t border-bl-cream-200">
            {/* Mobile / small screens: stacked columns */}
            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:hidden border-x border-bl-cream-200">
              {TABLE_COLUMNS.map((col, colIndex) => (
                <article
                  key={col.key}
                  className={"bg-white" + (colIndex === 0 ? "" : " border-t border-bl-cream-200")}
                >
                  <header className="px-8 py-7 md:px-10 md:py-8 bg-bl-cream-50/40 border-b border-bl-cream-200">
                    <p className="text-xs font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">{col.kicker}</p>
                    <h3 className="mt-2 text-lg font-libre text-bl-navy uppercase tracking-wide">{col.title}</h3>
                  </header>

                  <ul className="divide-y divide-bl-cream-200">
                    {col.points.map((item) => (
                      <li key={item} className="px-8 py-5 md:px-10">
                        <p className="text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="px-8 py-6 md:px-10 border-t border-bl-cream-200 bg-bl-cream-50/40">
                    <span className="inline-flex items-center rounded-[1px] border border-bl-cream-200 bg-white px-3 py-1 text-[10px] font-archivo uppercase tracking-wider text-bl-bronze-75">
                      Outcome
                    </span>
                    <p className="mt-3 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">{col.footer}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Desktop: true table grid with equal row heights */}
            <div className="hidden lg:block">
              <div className="container mx-auto max-w-7xl border-x border-bl-cream-200">
                <div className="grid grid-cols-3 gap-0 [&>div:nth-child(3n)]:border-r-0">
                  {/* Header row */}
                  {TABLE_COLUMNS.map((col) => (
                    <div key={`${col.key}-header`} className="border-r border-b border-bl-cream-200 bg-bl-cream-50/40">
                      <div className="h-[128px] px-10 py-8 flex flex-col justify-center">
                        <p className="text-xs font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">{col.kicker}</p>
                        <h3 className="mt-2 text-lg font-libre text-bl-navy uppercase tracking-wide">{col.title}</h3>
                      </div>
                    </div>
                  ))}

                  {/* Point rows */}
                  {Array.from({ length: maxPointRows }).map((_, rowIndex) =>
                    TABLE_COLUMNS.map((col) => {
                      const text = col.points[rowIndex];
                      return (
                        <div key={`${col.key}-row-${rowIndex}`} className="border-r border-b border-bl-cream-200 bg-white">
                          <div className="h-[88px] px-10 py-6 flex items-center">
                            <p className="text-sm font-archivo text-bl-navy/80 leading-relaxed overflow-hidden line-clamp-2">{text ?? "\u00A0"}</p>
                          </div>
                        </div>
                      );
                    })
                  )}

                  {/* Footer row */}
                  {TABLE_COLUMNS.map((col, colIndex) => (
                    <div
                      key={`${col.key}-footer`}
                      className={"bg-bl-cream-50/40 border-bl-cream-200" + (colIndex === 2 ? "" : " border-r")}
                    >
                      <div className="min-h-[112px] px-10 py-7 flex flex-col justify-center">
                        <span className="inline-flex w-fit items-center rounded-[1px] border border-bl-cream-200 bg-white px-3 py-1 text-[10px] font-archivo uppercase tracking-[0.24em] text-bl-bronze-75">
                          Outcome
                        </span>
                        <p className="mt-3 text-sm font-archivo text-bl-navy/80 leading-relaxed">{col.footer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-y border-bl-cream-200 bg-white">
            <div className="container max-w-7xl mx-auto border-x border-bl-cream-200">
              <header className="px-8 py-7 md:px-10 md:py-8 bg-bl-cream-50/40 border-b border-bl-cream-200">
                <p className="text-xs font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">
                  Smooth implementation &amp; training
                </p>
                <h3 className="mt-2 text-lg font-libre text-bl-navy uppercase tracking-wide">
                  Rollout your tools with confidence
                </h3>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 [&>article]:border-bl-cream-200 md:[&>article:nth-child(2n)]:border-l md:[&>article:nth-child(n+3)]:border-t lg:[&>article:nth-child(2n)]:border-l-0 lg:[&>article:nth-child(n+3)]:border-t-0 lg:[&>article:not(:first-child)]:border-l">
                {IMPLEMENTATION_STEPS.map((item, index) => (
                  <article
                    key={item}
                    className="px-8 py-7 md:px-10 md:py-8 bg-white border-t border-bl-cream-200 md:border-t-0"
                  >
                    <p className="text-xs font-archivo uppercase tracking-[0.2em] text-bl-bronze-75">0{index + 1}</p>
                    <p className="mt-3 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">{item}</p>
                  </article>
                ))}
              </div>

              <div className="border-t border-bl-cream-200 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-8 items-center">
                  <div className="md:col-span-2">
                    <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60 mb-3">The result</p>
                    <p className="text-xl md:text-2xl font-libre text-bl-navy leading-snug">
                      Faster processes, fewer errors, better reporting, and a workforce empowered by tools—not frustrated by them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
