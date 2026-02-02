import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-8 md:p-12 md:pl-24 border-b border-bl-cream-200">
        <h2 className="text-2xl font-libre text-bl-navy uppercase tracking-wide mb-6">
          Contact Details
        </h2>
        <p className="text-bl-navy/80 font-archivo text-lg max-w-md">
          Ready to transform your business? Reach out to our team of experts directly.
        </p>
      </div>

      <div className="flex-1">
        <div className="border-b border-bl-cream-200 p-8 md:p-12 md:pl-24 hover:bg-bl-cream-50 transition-colors group">
          <div className="flex items-start gap-6">
            <div className="p-3 bg-bl-navy text-bl-cream-50 group-hover:bg-bl-bronze-50 group-hover:text-bl-navy transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-bl-navy mb-2">
                Email
              </h3>
              <a 
                href="mailto:contact@bronzelake.com" 
                className="text-xl md:text-2xl font-libre text-bl-navy hover:text-bl-bronze-25 transition-colors block"
              >
                contact@bronzelake.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-b border-bl-cream-200 p-8 md:p-12 md:pl-24 hover:bg-bl-cream-50 transition-colors group">
          <div className="flex items-start gap-6">
            <div className="p-3 bg-bl-navy text-bl-cream-50 group-hover:bg-bl-bronze-50 group-hover:text-bl-navy transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-bl-navy mb-2">
                Phone
              </h3>
              <a 
                href="tel:+442012345678" 
                className="text-xl md:text-2xl font-libre text-bl-navy hover:text-bl-bronze-25 transition-colors block"
              >
                +44 20 1234 5678
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 md:pl-24 hover:bg-bl-cream-50 transition-colors group">
          <div className="flex items-start gap-6">
            <div className="p-3 bg-bl-navy text-bl-cream-50 group-hover:bg-bl-bronze-50 group-hover:text-bl-navy transition-colors">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-bl-navy mb-2">
                Office
              </h3>
              <address className="text-xl md:text-2xl font-libre text-bl-navy not-italic">
                123 Business Quarter<br />
                London, EC1A 1BB
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
