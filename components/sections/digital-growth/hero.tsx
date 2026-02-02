import { ArrowGrid } from "@/components/graphics/arrow-grid";

export function Hero() {
  return (
    <section className="border-y border-bl-cream-200 bg-bl-cream-50">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <header className="md:border-r border-bl-cream-200 p-8 md:p-12 lg:p-24 flex flex-col justify-center">
          <div className="max-w-xl">
            <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
              Digital growth
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-libre text-bl-navy uppercase tracking-tight">
              Digital marketing built for
              <span className="text-bl-bronze-75"> measurable revenue</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl font-archivo text-bl-navy/80 leading-relaxed">
              We build clear acquisition systems: positioning, campaigns, conversion, and reporting—so growth
              is repeatable, not random.
            </p>
            <p className="mt-6 text-sm font-archivo text-bl-navy/70 leading-relaxed">
              From landing pages and SEO to paid acquisition and optimisation, every step is tied to
              decisions and outcomes.
            </p>
          </div>
        </header>

        <div className="hidden md:block bg-bl-cream-100/50 relative overflow-hidden">
          <ArrowGrid id="digital-growth-hero" />
        </div>
      </div>
    </section>
  );
}
