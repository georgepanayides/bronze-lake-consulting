import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bl-cream-50 border-t border-bl-navy/10">
      {/* Main "Bookcase" Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[400px]">
          
          {/* Column 1: Brand Identity */}
          <div className="flex flex-col border-b md:border-b-0 border-bl-navy/10 lg:border-r p-8 md:p-12 justify-between">
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
            
            <div className="mt-12 pt-6 border-t border-bl-navy/5">
                <p className="text-xs font-inconsolata text-bl-navy/40">
                    EST. 2024 — AUCKLAND, NZ
                </p>
            </div>
          </div>

          {/* Column 2: Navigation (Sitemap) */}
          <div className="flex flex-col border-b md:border-b-0 border-bl-navy/10 lg:border-r">
             <div className="p-6 border-b border-bl-navy/5 bg-white/50 backdrop-blur-sm">
                <span className="text-xs font-inconsolata text-bl-navy/40 uppercase tracking-widest">
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
          <div className="flex flex-col border-b md:border-b-0 border-bl-navy/10 lg:border-r">
             <div className="p-6 border-b border-bl-navy/5 bg-white/50 backdrop-blur-sm">
                <span className="text-xs font-inconsolata text-bl-navy/40 uppercase tracking-widest">
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
          <div className="flex flex-col justify-between bg-bl-navy text-bl-cream-50">
             
             {/* CTA Block */}
             <div className="p-8 md:p-12 space-y-6">
                 <h3 className="font-libre text-2xl leading-tight">
                    Ready to clarify <br/> your direction?
                 </h3>
                 <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-3 text-sm font-inconsolata uppercase tracking-widest hover:text-bl-bronze-50 transition-colors duration-300"
                 >
                    Start a conversation
                    <ArrowUpRight className="w-4 h-4" />
                 </Link>
             </div>

             {/* Footer Bottom / Legal */}
             <div className="p-8 md:p-12 border-t border-white/10 space-y-4">
                <div className="flex gap-4 mb-4">
                    {/* Socials placeholder */}
                    <SocialLink href="https://linkedin.com" label="LI" />
                    <SocialLink href="https://twitter.com" label="X" />
                </div>
                
                <div className="space-y-2 text-[10px] font-inconsolata text-white/40 uppercase tracking-wider">
                    <p>© {currentYear} Bronze Lake Consulting Ltd.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
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
            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-inconsolata hover:bg-white hover:text-bl-navy transition-all duration-300"
        >
            {label}
        </a>
    )
}
