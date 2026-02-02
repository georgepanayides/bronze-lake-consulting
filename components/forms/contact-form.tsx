"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-12 border border-bl-cream-200 bg-white text-center"
      >
        <h3 className="text-2xl font-libre text-bl-navy mb-4 uppercase tracking-wide">Message Sent</h3>
        <p className="text-bl-navy/80 mb-6 font-archivo">
          Thank you for reaching out. We will get back to you shortly.
        </p>
        <Button onClick={() => setIsSubmitted(false)} className="rounded-none uppercase tracking-widest font-bold">Send Another Message</Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm font-bold uppercase tracking-wider text-bl-navy font-archivo">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            required
            className="w-full bg-transparent border border-bl-cream-200 p-4 text-bl-navy placeholder:text-bl-navy/40 focus:outline-none focus:border-bl-navy focus:bg-white transition-colors placeholder:font-archivo rounded-none"
            placeholder="Jane"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-bold uppercase tracking-wider text-bl-navy font-archivo">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            required
            className="w-full bg-transparent border border-bl-cream-200 p-4 text-bl-navy placeholder:text-bl-navy/40 focus:outline-none focus:border-bl-navy focus:bg-white transition-colors placeholder:font-archivo rounded-none"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-bl-navy font-archivo">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full bg-transparent border border-bl-cream-200 p-4 text-bl-navy placeholder:text-bl-navy/40 focus:outline-none focus:border-bl-navy focus:bg-white transition-colors placeholder:font-archivo rounded-none"
          placeholder="jane@company.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-bold uppercase tracking-wider text-bl-navy font-archivo">
          Company (Optional)
        </label>
        <input
          id="company"
          type="text"
          className="w-full bg-transparent border border-bl-cream-200 p-4 text-bl-navy placeholder:text-bl-navy/40 focus:outline-none focus:border-bl-navy focus:bg-white transition-colors placeholder:font-archivo rounded-none"
          placeholder="Company Ltd."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider text-bl-navy font-archivo">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full bg-transparent border border-bl-cream-200 p-4 text-bl-navy placeholder:text-bl-navy/40 focus:outline-none focus:border-bl-navy focus:bg-white transition-colors resize-none placeholder:font-archivo rounded-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <div className="pt-4">
        <Button 
          type="submit" 
          className="w-full md:w-auto min-w-[200px] rounded-none bg-bl-navy text-white hover:bg-bl-bronze-50 hover:text-bl-navy transition-colors font-bold uppercase tracking-widest text-xs h-12"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
