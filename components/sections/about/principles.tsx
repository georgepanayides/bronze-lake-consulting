import {
	PrinciplesScrollReveal,
	type PrincipleScrollItem,
} from "@/components/sections/about/principles-scroll-reveal.client";

export function Principles() {
  const principles: PrincipleScrollItem[] = [
    {
      id: "clarity",
      label: "01",
      title: "Clarity over complexity",
      body: "We reduce noise, define the decision, and make the path forward obvious.",
    },
    {
      id: "systems",
      label: "02",
      title: "Systems that scale",
      body: "Process and tooling should remove friction and support growth—not add overhead.",
    },
    {
      id: "evidence",
      label: "03",
      title: "Evidence-led delivery",
      body: "We prefer measurable progress, clean reporting, and tight feedback loops.",
    },
    {
      id: "craft",
      label: "04",
      title: "Craft + accountability",
      body: "We ship work we’re proud of—and we stay close to outcomes.",
    },
  ];

  return (
    <section className="border-b border-bl-cream-200 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl py-12 md:py-20">
        <header className="max-w-2xl">
          <p className="text-xs font-archivo uppercase tracking-widest text-bl-navy/60">Our Principles</p>
          <h2 className="mt-4 text-2xl md:text-3xl font-libre text-bl-navy uppercase tracking-tight">
            A simple way of working,
            <span className="text-bl-bronze-75"> consistently applied</span>
          </h2>
          <p className="mt-6 text-base md:text-lg font-archivo text-bl-navy/80 leading-relaxed">
            These principles keep work focused and outcomes clear—regardless of size or complexity.
          </p>
        </header>

        <div className="mt-10">
          <PrinciplesScrollReveal items={principles} />
        </div>
      </div>
    </section>
  );
}
