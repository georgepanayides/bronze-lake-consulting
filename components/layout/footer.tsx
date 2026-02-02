import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ArrowGrid } from "../graphics/arrow-grid";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
        <footer className="bg-bl-cream-50 border-t border-bl-cream-200">
      {/* Main "Bookcase" Grid */}
    <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[400px]">
          {/* Column 1: Brand Identity */}
          <div className="flex flex-col border-b md:border-b-0 border-bl-cream-200 lg:border-r p-8 md:p-12 justify-between">
            <div className="space-y-6">
                <Link href="/" className="inline-block group">
                    <div className="relative w-16 h-8 mb-4 opacity-100 transition-opacity duration-300">
                         {/* Placeholder for strict brand icon if image fails, but using the svg reference from header */}
                        <Image
                            src={'/icons/bl-brand-icon.svg'}
                            alt="Bronze Lake"
                            width={64}
                            height={32}
                            className="object-contain"
                        />
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-xl font-libre text-bl-navy uppercase tracking-widest">
                            Bronze Lake
                        </h2>
                        <p className="text-xs font-archivo text-bl-bronze-75 uppercase tracking-[0.2em]">
                            Consulting
                        </p>
                    </div>
                </Link>
                <p className="text-sm font-archivo text-bl-navy/60 leading-relaxed max-w-xs">
                    Navigating complexity. <br/>
                    Optimizing performance. <br/>
                    Achieving sustainable growth.
                </p>
            </div>
            
            <div className="mt-12 pt-6 border-t border-bl-cream-200">
                <p className="text-xs font-archivo text-bl-navy/50 uppercase tracking-widest">
                    EST. 2024, AUCKLAND, NZ
                </p>
            </div>
          </div>

          {/* Column 2: Navigation (Sitemap) */}
             <div className="flex flex-col border-b md:border-b-0 border-bl-cream-200 lg:border-r">
                 <div className="p-6 border-b border-bl-cream-200 bg-white/45">
                     <span className="text-xs font-archivo text-bl-navy/50 uppercase tracking-widest">
                    01 / Sitemap
                </span>
             </div>
             
             <div className="p-8 md:p-12 flex-grow flex flex-col gap-4">
                <FooterLink href="/" label="Home" />
                <FooterLink href="/about" label="About Us" />
                <FooterLink href="/career" label="Careers" />
                <FooterLink href="/insights" label="Insights" />
                <FooterLink href="/contact" label="Contact" />
             </div>
          </div>

          {/* Column 3: Expertise (Services) */}
             <div className="flex flex-col border-b md:border-b-0 border-bl-cream-200 lg:border-r">
                 <div className="p-6 border-b border-bl-cream-200 bg-white/45">
                     <span className="text-xs font-archivo text-bl-navy/50 uppercase tracking-widest">
                    02 / Expertise
                </span>
             </div>
             
             <div className="p-8 md:p-12 flex-grow flex flex-col gap-4">
                <FooterLink href="/growth-strategy" label="Growth Strategy" />
                <FooterLink href="/digital-growth" label="Digital Growth" />
                <FooterLink href="/reporting-analytics" label="Reporting & Analytics" />
                <FooterLink href="/technology-automation" label="Technology & Automation" />
             </div>
          </div>

            {/* Column 4: Interest / Legal */}
            <div className="relative flex flex-col justify-between bg-bl-navy overflow-hidden">
                <ArrowGrid id="footer-right" />
                <div className="relative z-10 flex flex-col justify-between h-full">
        
             {/* CTA Block */}
             <div className="p-8 md:p-12 space-y-6">
                      <h3 className="font-libre text-2xl leading-tight text-bl-cream-50 uppercase tracking-tight">
                    Ready to clarify <br/> your direction?
                 </h3>
                 <Link 
                    href="/contact" 
                          className="inline-flex items-center justify-between gap-3 border border-bl-cream-200/20 px-4 py-3 text-sm font-archivo uppercase tracking-widest text-bl-cream-200 hover:text-bl-bronze-75 transition-colors duration-300"
                 >
                    Start a conversation
                    <ArrowUpRight className="w-4 h-4 text-bl-bronze-75" />
                 </Link>
             </div>

             {/* Footer Bottom / Legal */}
             <div className="p-8 md:p-12 border-t border-bl-cream-200/25 space-y-4">
                <div className="flex gap-4 mb-4">
                    {/* Socials placeholder */}
                    <SocialLink href="https://linkedin.com" label="LI" />
                    <SocialLink href="https://twitter.com" label="X" />
                </div>
                
                <div className="space-y-2 text-[10px] font-archivo text-bl-cream-200/50 uppercase tracking-wider">
                    <p>© {currentYear} Bronze Lake Consulting Ltd.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-bl-navy transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-bl-navy transition-colors">Terms of Service</Link>
                    </div>
                </div>
             </div>
                </div>
             </div>

        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string, label: string }) {
    return (
        <Link 
            href={href} 
            className="group flex items-center justify-between py-1 text-bl-navy/70 hover:text-bl-navy transition-colors duration-300"
        >
            <span className="text-sm font-archivo uppercase tracking-wider font-medium">
                {label}
            </span>
            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-bl-bronze-75" />
        </Link>
    )
}

function SocialLink({ href, label }: { href: string, label: string }) {
    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer" 
            className="w-8 h-8 rounded-[2px] border border-bl-cream-200/25 flex items-center justify-center text-xs font-archivo text-bl-cream-200/70 hover:text-bl-navy hover:bg-bl-cream-100 transition-all duration-300"
        >
            {label}
        </a>
    )
}
