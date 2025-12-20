"use client";

import { Marquee } from "@/components/ui/Marquee";

const ITEMS = [
  "Conversion",
  "Vitesse",
  "Design",
  "Impact",
  "ROI",
  "Croissance",
  "Performance",
  "Identité",
];

export function MarqueeSection() {
  return (
    <section className="relative w-full py-32 bg-background overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
      
      {/* White Marquee - Tilted Down */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 rotate-3 z-10 scale-110">
        <div className="bg-white py-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-y border-gray-100">
            <Marquee speed={40} direction="left" className="gap-12 py-1">
            {ITEMS.map((item, i) => (
                <div key={i} className="flex items-center gap-12 mx-4">
                <span className="text-xl md:text-3xl font-medium tracking-tight text-black whitespace-nowrap">{item}</span>
                <span className="text-xl md:text-3xl text-gray-300">✦</span>
                </div>
            ))}
            </Marquee>
        </div>
      </div>

      {/* Black Marquee - Tilted Up */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 -rotate-3 z-0 scale-110">
        <div className="bg-neutral-900 py-3 shadow-xl">
            <Marquee speed={40} direction="right" className="gap-12 py-1">
            {ITEMS.map((item, i) => (
                <div key={i} className="flex items-center gap-12 mx-4">
                <span className="text-xl md:text-3xl font-medium tracking-tight text-white/90 whitespace-nowrap">{item}</span>
                <span className="text-xl md:text-3xl text-white/20">✦</span>
                </div>
            ))}
            </Marquee>
        </div>
      </div>

    </section>
  );
}
