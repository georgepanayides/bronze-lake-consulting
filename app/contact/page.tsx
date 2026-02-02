import { ContactForm } from "@/components/forms/contact-form";
import { ContactInfo } from "@/components/sections/contact/contact-info";
import { Metadata } from "next";
import { ArrowGrid } from "@/components/graphics/arrow-grid";

export const metadata: Metadata = {
  title: "Contact Us | Bronze Lake Consulting",
  description: "Get in touch with Bronze Lake Consulting for strategic business transformation.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 bg-background">
      {/* Header Bordered Container */}
      <div className="border-y border-bl-cream-200 bg-bl-cream-50">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <header className="md:col-span-1 md:border-r border-bl-cream-200 p-8 md:p-24 flex flex-col justify-center">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-libre text-bl-navy mb-6 uppercase tracking-tight">
                        Let&apos;s Start a <span className="text-bl-bronze-75">Conversation</span>
                    </h1>
                    <p className="text-xl font-archivo text-bl-navy/80">
                        Whether you have a specific project in mind or just want to explore possibilities, we&apos;re here to listen and guide.
                    </p>
                </div>
            </header>
            <div className="hidden md:block bg-bl-cream-100/50 relative overflow-hidden">
                <ArrowGrid />
            </div> 
        </div>
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:border-r border-bl-cream-200 bg-white">
           <ContactInfo />
        </div>
        
        <div className="bg-bl-cream-50 p-8 md:p-24">
            <div className="max-w-xl mx-auto md:mx-0">
                 <h2 className="text-2xl font-libre text-bl-navy mb-12 uppercase tracking-wide">
                    Send a Message
                </h2>
                <ContactForm />
            </div>
        </div>
      </div>
    </main>
  );
}
