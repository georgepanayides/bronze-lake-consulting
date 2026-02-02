"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { ArrowGrid } from "@/components/graphics/arrow-grid";
import { useState } from "react";
import Image from "next/image";

type NavItem = {
    title: string;
    href: string;
}

interface MenuOverlayProps {
  navItems: NavItem[];
}

const menuVariants: Variants = {
  closed: { 
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
  },
  open: { 
    opacity: 1, 
    y: "0%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
  }
};

const linkVariants: Variants = {
  closed: { y: 20, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.4 + (i * 0.1), duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  })
};

const infoVariants: Variants = {
  closed: { opacity: 0 },
  open: { 
    opacity: 1,
    transition: { delay: 0.6, duration: 0.5 }
  }
};

export function MenuOverlay({ navItems }: MenuOverlayProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="text-xs md:text-sm font-medium font-archivo text-bl-navy hover:text-bl-bronze-75 transition-colors uppercase tracking-[0.15em] relative group cursor-pointer"
      >
        Menu
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[100] bg-bl-cream-50 flex flex-col top-0 left-0 max-h-screen h-screen"
          >
            {/* Header Bar inside Menu */}
            <div className="flex-none h-[72px] md:h-[88px] border-b border-bl-cream-200 flex items-center justify-between px-6 md:px-8 bg-bl-cream-50">
              <div className="flex-1">
                <Link
                href={"/"}
                onClick={() => setIsOpen(false)}
                >
                <Image 
                src={"/icons/bl-brand-icon.svg"}
                alt="Bronze Lake Home Logo"
                width={100}
                height={60}
                className="h-24 w-24"
                />
                </Link>
              </div>
              
              <div className="flex-none">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-center gap-2 text-bl-navy hover:text-bl-bronze-75 transition-colors cursor-pointer"
                >
                  <div className="relative w-8 h-8 flex items-center justify-center">
                      <X className="w-6 h-6" />
                  </div>
                  <span className="hidden md:inline-block text-xs md:text-sm font-medium font-archivo uppercase tracking-[0.15em]">
                      Close
                  </span>
                </button>
              </div>
              
              {/* Spacer / Right element to balance layout if needed, or Contact Link */}
               <div className="flex-1 flex justify-end">
                <Link 
                  href="/contact"
                  className="text-xs md:text-sm font-medium font-archivo text-bl-navy hover:text-bl-bronze-75 transition-colors uppercase tracking-[0.15em] relative group"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Menu Content Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
              {/* Left Column: Navigation */}
              <div className="relative border-r border-bl-cream-200 flex flex-col justify-center bg-white/50">
                <nav className="flex flex-col w-full">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      custom={i}
                      variants={linkVariants}
                      className="border-b border-bl-cream-200 first:border-t px-8 md:px-12 lg:px-24 bg-white"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between py-6 md:py-8 text-3xl font-libre text-bl-navy hover:text-bl-bronze-25 transition-colors uppercase tracking-tight w-full"
                      >
                        <span>{item.title}</span>
                         <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                          <div className="w-full h-full bg-bl-navy/50 [mask-image:url(/icons/arrow-icon.svg)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Right Column: Info & Graphic */}
              <div className="hidden md:flex flex-col relative bg-bl-cream-50">
                {/* Graphic Area */}
                <div className="flex-1 relative overflow-hidden border-b border-bl-cream-200">
                  <ArrowGrid />
                  <motion.div 
                      variants={infoVariants}
                      className="absolute inset-0 flex items-center justify-center p-12"
                  >
                      <div className="max-w-md text-center">
                          <h3 className="text-2xl font-libre text-bl-navy mb-4 uppercase tracking-wide">
                              Strategic Growth
                          </h3>
                          <p className="font-archivo text-bl-navy/80 text-lg">
                              We help businesses navigate complexity and build sustainable value through technology and strategy.
                          </p>
                      </div>
                  </motion.div>
                </div>

                {/* Contact Snip */}
                <motion.div 
                  variants={infoVariants}
                  className="p-12 bg-bl-navy text-bl-cream-50 flex justify-between items-end"
                >
                    <div>
                        <h4 className="font-archivo text-xs uppercase tracking-widest opacity-60 mb-2">Get in touch</h4>
                        <p className="font-libre text-lg md:text-xl">
                            contact@bronzelake.com
                        </p>
                    </div>
                    <div className="text-right">
                         <address className="not-italic font-archivo text-xs opacity-80">
                             London, United Kingdom
                         </address>
                    </div>
                </motion.div>
              </div>
              
              {/* Mobile Contact Only (Visible on small screens) */}
               <motion.div 
                  variants={infoVariants}
                  className="md:hidden border-t border-bl-cream-200 p-8 bg-bl-cream-50"
               >
                   <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full py-4 text-center border border-bl-navy text-bl-navy font-bold uppercase tracking-widest text-sm hover:bg-bl-navy hover:text-white transition-colors">
                      Contact Us
                   </Link>
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
