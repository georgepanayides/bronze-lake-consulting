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
    <header className="sticky top-0 z-50 w-full bg-bl-cream-50/95 backdrop-blur supports-[backdrop-filter]:bg-bl-cream-50/60 border-b border-bl-cream-200">
      <div className="container mx-auto px-4 py-4 flex flex-col items-center justify-center">
        <Link href="/" className="flex flex-col items-center group">
          <div className="text-bl-bronze-50 group-hover:text-bl-bronze-25 transition-colors duration-300">
            <div className="relative w-16 h-7 text-bl-bronze-25">
               <Image
               src={'/icons/bl-brand-icon.svg'}
               alt="Bronze Lake Logo"
               width={300}
               height={150}
               className="object-cover"
               />
            </div>
          </div>
          
          <div className="mt-2 text-center">
             <h1 className="text-xl font-regular font-libre text-bl-navy tracking-widest uppercase">
               Bronze Lake
             </h1>
             <p className="text-xs font-archivo tracking-[0.2em] text-bl-bronze-75 uppercase mt-0.5">
               Consulting
             </p>
          </div>
        </Link>
        
        {/* Navigation */}
        <nav className="mt-6 hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="text-sm font-medium font-archivo text-bl-navy hover:text-bl-bronze-75 transition-colors uppercase tracking-wider relative group/link"
                >
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bl-bronze-50 transition-all duration-300 group-hover/link:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
