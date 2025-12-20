"use client";

import Image from "next/image";
import { ArrowRight, ArrowDown, Play, Command, Layers, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { RevealText } from "@/components/ui/RevealText";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";
import { GridPattern } from "@/components/ui/GridPattern";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-white flex flex-col justify-center pt-20 pb-20 px-4 md:px-12 overflow-hidden">
      
      {/* Background Noise & Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <GridPattern width={60} height={60} x={-1} y={-1} className="stroke-gray-100 opacity-50" />
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-gray-50 to-transparent rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div className="flex flex-col items-start pt-10 lg:pt-0">
            <FadeIn>
                <div className="inline-flex items-center gap-2 mb-8 border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-gray-600">Agence Digitale Nouvelle Génération</span>
                </div>
            </FadeIn>

            <h1 className="text-[12vw] lg:text-[7vw] leading-[0.85] font-medium tracking-tighter text-black mb-8 -ml-1">
                <div className="overflow-hidden">
                    <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
                        Design.
                    </motion.div>
                </div>
                <div className="overflow-hidden">
                    <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
                        Impact.
                    </motion.div>
                </div>
                <div className="overflow-hidden flex items-center gap-4">
                    <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="text-gray-300">
                        9 Secondes.
                    </motion.div>
                </div>
            </h1>
            
            <FadeIn delay={0.3}>
                <p className="text-lg md:text-xl font-light text-gray-500 max-w-xl leading-relaxed mb-10">
                    Nous transformons les visiteurs en clients avant même qu&apos;ils n&apos;aient le temps de scroller. <strong className="text-black font-medium">Une agence de conversion par abonnement.</strong>
                </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Magnetic strength={0.2}>
                    <a href="https://calendly.com/contact-9secondes/30min?month=2025-12" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full sm:w-auto bg-black hover:bg-zinc-800 text-white text-base h-14 px-8 rounded-full transition-all hover:scale-105 shadow-xl flex items-center gap-3 group">
                            <span>Réserver un appel</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                </Magnetic>
                
                <Magnetic strength={0.1}>
                    <a href="#portfolio" className="w-full sm:w-auto flex items-center justify-center gap-2 text-black hover:bg-gray-50 font-medium text-base h-14 px-8 rounded-full border border-gray-200 transition-all">
                        <span>Nos réalisations</span>
                    </a>
                </Magnetic>
            </FadeIn>
        </div>

        {/* Right: Visual Composition */}
        <div className="relative h-[400px] lg:h-[800px] w-full flex items-center justify-center lg:justify-end pointer-events-none select-none mt-8 lg:mt-0">
            
            {/* Floating Cards Composition */}
            <motion.div style={{ y, rotate }} className="relative w-full max-w-[400px] lg:max-w-[600px] aspect-[4/5]">
                
                {/* Back Card (Abstract) */}
                <div className="absolute top-0 right-0 w-[90%] h-[80%] bg-gray-100 rounded-[40px] rotate-6 border border-gray-200 shadow-2xl opacity-80" />
                
                {/* Middle Card (Interface) */}
                <div className="absolute top-[10%] right-[10%] w-[90%] h-[80%] bg-zinc-900 rounded-[40px] -rotate-3 border border-gray-800 shadow-2xl overflow-hidden flex flex-col">
                    <div className="h-12 border-b border-white/10 flex items-center px-6 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    </div>
                    <div className="flex-1 p-8 relative">
                        {/* Abstract UI Elements */}
                        <div className="w-1/3 h-4 bg-white/10 rounded-full mb-8" />
                        <div className="w-2/3 h-12 bg-white/5 rounded-lg mb-4" />
                        <div className="w-full h-32 bg-white/5 rounded-lg mb-4" />
                        <div className="flex gap-4">
                            <div className="w-1/2 h-20 bg-white/5 rounded-lg" />
                            <div className="w-1/2 h-20 bg-white/5 rounded-lg" />
                        </div>

                        {/* Floating Cursor */}
                        <motion.div 
                            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/3 left-1/3"
                        >
                            <MousePointer2 className="w-6 h-6 text-white fill-black" />
                            <div className="ml-4 mt-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full font-mono">Rayane</div>
                        </motion.div>
                    </div>
                </div>

                {/* Front Card (Visual/Image) */}
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="absolute top-[20%] right-[20%] w-[80%] h-[60%] bg-white rounded-[32px] rotate-2 border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
                >
                    <Image 
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1000&fit=crop"
                        alt="Abstract Design"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/30">
                            <Play className="w-5 h-5 text-white fill-white ml-1" />
                        </div>
                        <p className="text-white font-medium text-lg">Showreel 2026</p>
                        <p className="text-white/60 text-sm">9 Secondes Agency</p>
                    </div>
                </motion.div>

            </motion.div>

        </div>

      </div>
      
    </section>
  );
}
