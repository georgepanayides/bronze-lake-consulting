import { FadeIn } from "@/components/motion/fade-in";
import { QuizReveal, QuizQuestion } from "@/components/ui/quiz-reveal";

// Define questions on server side for SEO
const DIAGNOSTIC_QUESTIONS: QuizQuestion[] = [
    {
        id: "blind-spot-data",
        label: "I have data, but no real insights.",
        insight: "Data without analysis is just noise. We turn dormant metrics into a decision-making engine.",
        action: "Build Intelligence"
    },
    {
        id: "blind-spot-process",
        label: "My team is drowning in manual work.",
        insight: "Inefficiency bleeds profit. We automate the repetitive to unlock high-value focus.",
        action: "Automate Operations"
    },
    {
        id: "blind-spot-strategy",
        label: "We're growing, but it feels chaotic.",
        insight: "Growth without structure is a risk. We build the digital blueprint to scale safely.",
        action: "Stabilize Growth"
    }
];

export function CallToAction() {
  return (
        <section className="py-12 md:py-24 bg-bl-cream-50 relative overflow-hidden border-t border-bl-cream-200">
            <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
        
        {/* Provocative Header - Clean, Editorial Style */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center">
            <FadeIn>
                <h2 className="text-2xl md:text-3xl font-libre text-bl-navy mb-6 tracking-wide uppercase">
                    Where is your business <br/>
                    <span className="text-bl-bronze-75">flying blind?</span>
                </h2>
                
                <p className="text-sm md:text-base font-archivo text-bl-navy/80 leading-relaxed max-w-2xl mx-auto">
                    Pick the statement that feels most true today and we’ll show the most direct way we can help.
                </p>
            </FadeIn>
        </div>

        {/* Interactive Quiz Interface */}
        <FadeIn delay={0.2}>
            <QuizReveal questions={DIAGNOSTIC_QUESTIONS} />
        </FadeIn>

      </div>
    </section>
  );
}
