"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Sottozero",
    category: "Galerie d'Art",
    description: "Refonte complète de l'expérience digitale d'une galerie d'art contemporain.",
    image: "https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2940&auto=format&fit=crop",
    link: "https://sottozero-gallery.vercel.app/"
  },
  {
    title: "Archin",
    category: "Architecture",
    description: "Plateforme minimaliste pour un cabinet d'architecture international.",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2940&auto=format&fit=crop",
    link: "https://archin-demo.vercel.app/"
  },
  {
    title: "Kroma",
    category: "E-commerce",
    description: "Une boutique en ligne immersive pour une marque de streetwear.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2940&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Nexus",
    category: "SaaS",
    description: "Interface dashboard futuriste pour une fintech.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    link: "#"
  }
];

export function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-neutral-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-8 md:gap-20 md:px-24 items-center">
          <div className="flex flex-col justify-center min-w-[85vw] md:min-w-[30vw] text-white z-10 pl-4 md:pl-0">
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Nos <br />
              <span className="text-neutral-600">Projets.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-md leading-relaxed">
              Une sélection de nos réalisations les plus impactantes. 
              Nous repoussons les limites du web pour créer des expériences uniques.
            </p>
          </div>
          
          {projects.map((project, i) => (
            <Link 
              key={i} 
              href={project.link} 
              target="_blank"
              className="group relative h-[65vh] w-[90vw] md:h-[70vh] md:w-[45vw] flex-shrink-0 overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-white/5 shadow-2xl"
            >
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-70 transition-all duration-700 group-hover:opacity-50 grayscale group-hover:grayscale-0"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

              <div className="absolute top-8 right-8 z-20">
                 <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <ArrowUpRight className="w-8 h-8" />
                 </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-14 flex flex-col justify-end transform transition-transform duration-500">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 mb-6 text-sm font-mono uppercase tracking-[0.2em] border border-white/20 rounded-full bg-black/30 backdrop-blur-xl text-white/90">
                    {project.category}
                  </span>
                  <h3 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
                </div>
                <p className="text-gray-400 text-lg md:text-2xl leading-relaxed max-w-xl group-hover:text-white transition-colors duration-500">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
          
          <div className="flex flex-col justify-center min-w-[80vw] md:min-w-[25vw] text-white items-center pr-12 md:pr-0">
            <Link href="https://calendly.com/contact-9secondes/30min" target="_blank" className="group flex flex-col items-center gap-8 cursor-pointer relative">
              <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 z-10">
                <ArrowUpRight className="w-12 h-12 md:w-20 md:h-20 transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <span className="text-3xl md:text-5xl font-medium text-center tracking-tight z-10">
                Démarrer <br /> votre projet
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
