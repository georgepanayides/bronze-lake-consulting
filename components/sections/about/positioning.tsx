import { ArrowGrid } from "@/components/graphics/arrow-grid";

export function Positioning() {
  return (
    <section className="border-b border-bl-cream-200 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left: Intro */}
        <header className="lg:col-span-2 lg:border-r border-bl-cream-200 p-8 md:p-12 lg:p-24 bg-bl-cream-50">
          <div className="max-w-xl">
            <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
              About Bronze Lake
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-tight">
              Strategy-led consulting,
              <span className="text-bl-bronze-75"> built for clarity</span>
            </h2>
            <p className="mt-6 text-base md:text-lg font-archivo text-bl-navy/80 leading-relaxed">
              We help leadership teams navigate complexity and make confident decisions.
              Our work connects strategy, data, and delivery so execution feels calm, not chaotic.
            </p>
          </div>
        </header>

        {/* Right: Three blocks */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3">
          {[
            {
              title: "What We Do",
              body: "Define direction, build the operating plan, and translate it into a delivery roadmap your team can execute.",
            },
            {
              title: "Who We Help",
              body: "Ambitious organisations that need structure—growth, reporting clarity, or technology integration—without noise.",
            },
            {
              title: "What You Get",
              body: "Clear priorities, simple systems, and measurable outcomes—delivered with sharp thinking and a calm process.",
            },
          ].map((card, i) => (
            <article
              key={card.title}
              className={
                i < 2
                  ? "border-b md:border-b-0 md:border-r border-bl-cream-200 p-8 md:p-10"
                  : "border-b md:border-b-0 border-bl-cream-200 p-8 md:p-10"
              }
            >
              <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
                0{i + 1}
              </p>
              <h3 className="mt-4 text-lg md:text-xl font-libre text-bl-navy uppercase tracking-tight">
                {card.title}
              </h3>
              <p className="mt-4 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Subtle grid strip */}
      <div className="hidden lg:block border-t border-bl-cream-200 bg-bl-cream-100/50 relative overflow-hidden h-24">
        <ArrowGrid id="about-positioning-strip" />
      </div>
    </section>
  );
}
