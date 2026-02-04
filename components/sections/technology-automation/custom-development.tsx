import { IDEGraphic } from "@/components/graphics/illustrations/IDEGraphic";
import Image from "next/image";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <path d="M19.07 4.93L17.66 14.83L15.54 12.71L7.05 21.19L2.81 16.95L11.29 8.46L9.17 6.34Z" />
    </svg>
  );
}

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

const SOLUTION_INTRO = "We design and build software that fits your requirements.";

export function CustomDevelopment() {
  return (
    <section className="border-b border-bl-cream-200 bg-bl-cream-50">
      <div className="py-12 md:py-20">
        <header className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
            Custom software development
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
            When off-the-shelf
            <span className="text-bl-bronze-75"> isn’t enough</span>
          </h2>
          <p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
            If your workflows are unique, your data is fragmented, or teams rely on workarounds, bespoke
            software removes constraints and makes the whole system easier to run.
          </p>
        </header>

        <div className="mt-10 flex items-center justify-center border-t border-b border-bl-cream-200">
          <IDEGraphic title="CUSTOM DEVELOPMENT" subtitle="Building what fits" />
        </div>

        <div className="max-w-6xl mx-auto border-x border-bl-cream-200 bg-white border-t-0 overflow-x-auto">
          <table className="w-full table-fixed min-w-[860px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-left align-top px-6 py-5 bg-bl-cream-50 border-b border-bl-cream-200"
                >
                  <p className="text-xs font-archivo uppercase tracking-[0.2em] text-bl-bronze-75 font-light">Problem</p>
                  <h3 className="mt-2 text-lg font-libre text-bl-navy uppercase tracking-wide font-light">
                    What’s getting in the way
                  </h3>
                </th>
                <th
                  scope="col"
                  className="text-left align-top px-6 py-5 bg-bl-cream-50 border-b border-bl-cream-200 border-l border-bl-cream-200"
                >
                  <p className="text-xs font-archivo uppercase tracking-[0.2em] text-bl-bronze-75 font-light">Solution</p>
                  <h3 className="mt-2 text-lg font-libre text-bl-navy uppercase tracking-wide font-light">What we build</h3>
                </th>
                <th
                  scope="col"
                  className="text-left align-top px-6 py-5 bg-bl-cream-50 border-b border-bl-cream-200 border-l border-bl-cream-200"
                >
                  <p className="text-xs font-archivo uppercase tracking-[0.2em] text-bl-bronze-75 font-light">Benefits</p>
                  <h3 className="mt-2 text-lg font-libre text-bl-navy uppercase tracking-wide font-light">What you get</h3>
                </th>
              </tr>
            </thead>

            <tbody>
              {PROBLEM_POINTS.map((problem, rowIndex) => {
                const solution = rowIndex === 0 ? SOLUTION_INTRO : SOLUTION_EXAMPLES[rowIndex - 1];
                const benefit = BENEFITS[rowIndex];

                return (
                  <tr key={problem}>
                    <td className="border-b border-bl-cream-200 align-top">
                      <div className="h-[92px] px-6 py-5 flex items-start gap-3">
                        <ArrowIcon className="mt-0.5 h-4 w-4 shrink-0 text-bl-bronze-75 rotate-90" />
                        <p className="text-sm font-archivo text-bl-navy/80 leading-relaxed [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                          {problem}
                        </p>
                      </div>
                    </td>

                    <td className="border-b border-bl-cream-200 border-l border-bl-cream-200 align-top">
                      <div className="h-[92px] px-6 py-5 flex items-start gap-3">
                        <Image
                          src="/icons/bl-brand-icon.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="mt-0.5 h-4 w-4 shrink-0 opacity-75"
                        />
                        <p className="text-sm font-archivo text-bl-navy/80 leading-relaxed [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                          {solution}
                        </p>
                      </div>
                    </td>

                    <td className="border-b border-bl-cream-200 border-l border-bl-cream-200 align-top">
                      <div className="h-[92px] px-6 py-5 flex items-start gap-3">
                        <ArrowIcon className="mt-0.5 h-4 w-4 shrink-0 text-bl-navy/60" />
                        <p className="text-sm font-archivo text-bl-navy/80 leading-relaxed [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                          {benefit}
                        </p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-sm md:text-base font-archivo text-bl-navy/75 leading-relaxed max-w-3xl mx-auto text-center">
          Delivery stays structured and predictable—clear requirements, sensible architecture, thorough QA,
          and a handover your team can actually use.
        </p>
      </div>
    </section>
  );
}
