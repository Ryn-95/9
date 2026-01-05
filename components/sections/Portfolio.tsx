"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Machine à Conversion",
    category: "Location & Événementiel",
    description: "Transformer le trafic en réservations automatiques.",
    image: "https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2940&auto=format&fit=crop",
    link: "https://kashootloc.fr/"
  },
  {
    title: "Autorité Immédiate",
    category: "E-commerce de Luxe",
    description: "Imposer une image de marque incontournable dès la première seconde.",
    image: "https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2940&auto=format&fit=crop",
    link: "https://waqt-luxury.fr/"
  },
  {
    title: "Système d'Acquisition",
    category: "Booking & Services",
    description: "Automatiser la prise de rendez-vous et filtrer les prospects qualifiés.",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2940&auto=format&fit=crop",
    link: "https://www.kashootmariage.fr/"
  },
  {
    title: "Design Persuasif",
    category: "Coaching & Bien-être",
    description: "Une vitrine qui convertit les visiteurs en clients fidèles.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2940&auto=format&fit=crop",
    link: "https://forme-body-concept.vercel.app/"
  },
  {
    title: "Crédibilité Corporative",
    category: "BTP & Services",
    description: "Rassurer les grands comptes avec une présence digitale irréprochable.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    link: "https://www.gregaonecompany.fr/"
  }
];

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 pb-8 border-b border-white/10">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">
            Systèmes Déployés.
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-sm mt-4 md:mt-0 font-mono">
            Des machines à conversion actives qui génèrent du chiffre d&apos;affaires quotidiennement.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Project List */}
          <div className="lg:col-span-7 flex flex-col">
            {projects.map((project, index) => (
              <Link 
                key={index}
                href={project.link}
                target="_blank"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative border-b border-white/10 py-12 transition-all duration-300 hover:border-white/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-light text-neutral-200 group-hover:text-white transition-colors group-hover:translate-x-4 duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                     <p className="hidden md:block text-sm text-neutral-500 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                        Voir le projet
                     </p>
                     <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110">
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                     </div>
                  </div>
                </div>
                
                {/* Mobile Image (Visible only on small screens) */}
                <div className="lg:hidden mt-6 relative w-full h-64 rounded-lg overflow-hidden">
                    <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>
              </Link>
            ))}
          </div>

          {/* Sticky Image Preview (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 relative h-[600px]">
            <div className="sticky top-32 w-full aspect-[4/5] rounded-sm overflow-hidden bg-neutral-900 border border-white/10">
              <AnimatePresence mode="wait">
                {hoveredIndex !== null ? (
                  <motion.div 
                    key={hoveredIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={projects[hoveredIndex].image}
                      alt={projects[hoveredIndex].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-8 left-8 right-8">
                        <p className="text-white text-lg font-light leading-relaxed backdrop-blur-sm bg-black/30 p-4 border border-white/10">
                            {projects[hoveredIndex].description}
                        </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-600 gap-4">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
                        <ArrowUpRight className="w-6 h-6 opacity-50" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest opacity-50">Survolez un projet</span>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
