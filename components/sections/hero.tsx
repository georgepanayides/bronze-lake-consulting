import { Button } from "@/components/ui/button";
import { FloatingShape } from "@/components/graphics/FloatingShape";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-bl-cream-50 px-4">
      {/* Background Graphics */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 z-0">
         <FloatingShape />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center flex flex-col items-center gap-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-libre text-bl-navy leading-tight">
          Strategic Excellence for <br className="hidden md:block" />
          <span className="text-bl-bronze-gradient">New Zealand Business</span>
        </h1>
        
        <p className="text-lg md:text-xl font-archivo text-bl-navy/80 max-w-2xl text-center">
          We help ambitious organizations navigate complexity, optimize performance, and achieve sustainable growth through tailored consulting solutions.
        </p>
        
        <div className="flex gap-4 mt-4">
          <Button variant="bronze" size="lg" asChild>
            <Link href="/contact">
              Partner With Us
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
             <Link href="/about">
              Our Expertise
             </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
