import { ArrowGrid } from "@/components/graphics/arrow-grid";

export function Hero() {
  return (
    <section className="border-y border-bl-cream-200 bg-bl-cream-50">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <header className="md:border-r border-bl-cream-200 p-8 md:p-12 lg:p-24 flex flex-col justify-center">
          <div className="max-w-xl">
            <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
              Growth strategy
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-libre text-bl-navy uppercase tracking-tight">
              A practical roadmap
              <span className="text-bl-bronze-75"> for confident growth</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl font-archivo text-bl-navy/80 leading-relaxed">
              Strategy defines direction. Growth planning turns direction into momentum—grounded in
              analytics, execution, and measurable outcomes.
            </p>
          </div>
        </header>

        <div className="hidden md:block bg-bl-cream-100/50 relative overflow-hidden">
          <ArrowGrid id="growth-strategy-hero" />
        </div>
      </div>
    </section>
  );
}
