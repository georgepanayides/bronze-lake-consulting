export function WhyChooseUs() {
  return (
    <section className="border-b border-bl-cream-200 bg-bl-cream-50">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <header className="lg:col-span-5">
            <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">
              Why choose us
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-wide">
              Clarity is a
              <span className="text-bl-bronze-75"> competitive advantage</span>
            </h2>
            <p className="mt-6 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
              Our edge is practical execution: we combine analytics with automation and delivery so insights
              translate into action.
            </p>
          </header>

          <div className="lg:col-span-7">
            <div className="border border-bl-cream-200 bg-white p-8 md:p-10">
              <ul className="space-y-4">
                <li className="text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                  <span className="font-archivo uppercase tracking-widest text-bl-navy">Automation-aware</span>
                  <span className="text-bl-navy/80"> — KPI tracking that runs without constant manual work.</span>
                </li>
                <li className="text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                  <span className="font-archivo uppercase tracking-widest text-bl-navy">Decision-first</span>
                  <span className="text-bl-navy/80"> — reporting designed for action, not vanity metrics.</span>
                </li>
                <li className="text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                  <span className="font-archivo uppercase tracking-widest text-bl-navy">Built for stakeholders</span>
                  <span className="text-bl-navy/80"> — clarity, transparency, and confidence across teams.</span>
                </li>
                <li className="text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                  <span className="font-archivo uppercase tracking-widest text-bl-navy">Momentum-driven</span>
                  <span className="text-bl-navy/80"> — fast feedback loops so you improve continuously.</span>
                </li>
              </ul>

              <p className="mt-8 text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed">
                Let’s harness your data to enhance performance and make decisions with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
