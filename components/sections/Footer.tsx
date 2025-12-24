"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-32 pb-8 px-6 border-t border-neutral-900 overflow-hidden relative">
      
      {/* Massive Background Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
          <h1 className="text-[20vw] font-bold leading-none whitespace-nowrap">9 SECONDES</h1>
      </div>

      <div className="max-w-[90rem] mx-auto relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <div>
                <span className="block text-9xl font-bold tracking-tighter mb-8">9.</span>
                <p className="text-2xl font-light text-neutral-400 max-w-md leading-relaxed">
                    Agence digitale créative.<br/>
                    Nous façonnons le futur des marques ambitieuses par le design et la technologie.
                </p>
            </div>
            
            <div className="mt-12 md:mt-0 hidden md:block">
                <Link href="mailto:contact@9secondes.com" className="text-xl hover:text-neutral-400 transition-colors">
                    contact@9secondes.com
                </Link>
            </div>
          </div>

          {/* Navigation Columns - Minimalist List */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            
            <div className="flex flex-col gap-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Explorer</h4>
                {["Services", "Process", "Offres", "Manifesto"].map((item) => (
                    <Link key={item} href={`#${item.toLowerCase()}`} className="text-xl md:text-2xl font-light hover:translate-x-2 transition-transform duration-300 block">
                        {item}
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Social</h4>
                {["Instagram", "LinkedIn", "Twitter", "Dribbble"].map((item) => (
                    <Link key={item} href="#" className="text-xl md:text-2xl font-light hover:translate-x-2 transition-transform duration-300 block group flex items-center gap-2">
                        {item} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Légal</h4>
                {["Mentions Légales", "CGV", "Confidentialité"].map((item) => (
                    <Link key={item} href="#" className="text-sm text-neutral-400 hover:text-white transition-colors block">
                        {item}
                    </Link>
                ))}
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-neutral-900 pt-8 gap-4">
            <p className="text-neutral-600 text-sm">
                © {currentYear} 9 Secondes — Tous droits réservés.
            </p>
            
            <p className="text-neutral-600 text-sm flex items-center gap-2">
                Fait avec <span className="text-white">passion</span> à Paris.
            </p>
        </div>

      </div>
    </footer>
  );
}