import Link from "next/link"
import Image from "next/image"

export type NavItem = {
    title: string;
    href: string;
}

export type NavBarProps = {
    navItems: NavItem[];
}


export function Header({ navItems }: NavBarProps) {
  return (
    <header className="fixed top-0 z-50 w-full bg-bl-cream-50/95 backdrop-blur supports-[backdrop-filter]:bg-bl-cream-50/60 border-b border-bl-cream-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: MENU */}
        <div className="flex-1 flex justify-start">
          <button className="text-xs md:text-sm font-medium font-archivo text-bl-navy hover:text-bl-bronze-75 transition-colors uppercase tracking-[0.15em] relative group cursor-pointer">
            Menu
          </button>
        </div>

        {/* Center: LOGO */}
        <div className="flex-none flex justify-center">
          <Link href="/" className="flex flex-col items-center group">
            <div className="text-bl-bronze-50 group-hover:text-bl-bronze-25 transition-colors duration-300">
              <div className="relative w-12 h-6 md:w-16 md:h-7 text-bl-bronze-25">
                 <Image
                 src={'/icons/bl-brand-icon.svg'}
                 alt="Bronze Lake Logo"
                 width={300}
                 height={150}
                 className="object-cover"
                 />
              </div>
            </div>
            
            <div className="mt-2 text-center hidden md:block">
               <h1 className="text-lg md:text-xl font-regular font-libre text-bl-navy tracking-widest uppercase whitespace-nowrap">
                 Bronze Lake
               </h1>
               <p className="text-[0.6rem] md:text-xs font-archivo tracking-[0.2em] text-bl-bronze-75 uppercase mt-0.5">
                 Consulting
               </p>
            </div>
             {/* Mobile simplified text */}
             <div className="mt-1 text-center md:hidden">
               <h1 className="text-sm font-regular font-libre text-bl-navy tracking-widest uppercase">
                 BLC
               </h1>
            </div>
          </Link>
        </div>

        {/* Right: CONTACT */}
        <div className="flex-1 flex justify-end">
          <Link 
            href="/contact"
            className="text-xs md:text-sm font-medium font-archivo text-bl-navy hover:text-bl-bronze-75 transition-colors uppercase tracking-[0.15em] relative group"
          >
            Contact
          </Link>
        </div>

      </div>
    </header>
  )
}


