"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const manifestoText = "97% des visiteurs ne reviennent jamais. Votre site n'est pas une galerie d'art. C'est une arme de guerre économique. Vous avez 9 secondes pour convaincre. Ne les gâchez pas.";

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const words = manifestoText.split(" ");

  return (
    <section ref={containerRef} className="relative w-full h-[200vh] md:h-[300vh] bg-neutral-950">
      
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8">
        
        {/* Subtle Background Gradient for Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div 
                style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]) }}
                className="mb-12 md:mb-20"
            >
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-[0.2em] uppercase text-white/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    Manifeste
                </span>
            </motion.div>

            <p className="flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em] text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length);
                    // Add a slight buffer to make the transition smoother
                    const range = [start, end];
                    
                    return (
                        <Word key={i} word={word} progress={scrollYProgress} range={range} />
                    )
                })}
            </p>
        </div>
        
        {/* Scroll Hint */}
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [1, 0]) }}
            className="absolute bottom-12 text-white/20 text-xs font-mono uppercase tracking-widest"
        >
            ( Scroll )
        </motion.div>

      </div>

    </section>
  );
}

const Word = ({ word, progress, range }: { word: string, progress: MotionValue<number>, range: number[] }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    const blur = useTransform(progress, range, [5, 0]);
    
    // Check for specific keywords to highlight
    const isRed = word.includes("gâchez") || word.includes("Ne") || word.includes("pas");
    const isHighlight = word.includes("97%") || word.includes("guerre") || word.includes("9") || word.includes("convaincre");

    return (
        <span className="relative inline-block overflow-hidden pb-2">
            <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">{word}</span>
            <motion.span 
                style={{ opacity, filter: useTransform(blur, (v) => `blur(${v}px)`) }}
                className={`absolute inset-0 transition-colors duration-500 ${
                    isRed ? 'text-red-500' : 
                    isHighlight ? 'text-white' : 'text-neutral-500'
                }`}
            >
                {word}
            </motion.span>
        </span>
    )
}
