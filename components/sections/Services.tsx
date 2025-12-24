"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  { 
    name: "Machine à Conversion", 
    id: "01",
    desc: "Votre site n'est pas une vitrine, c'est votre meilleur commercial 24/7. Designé pour capturer, convaincre et closer.",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    name: "Autorité Immédiate", 
    id: "02",
    desc: "Une identité visuelle qui vous place instantanément au-dessus de la mêlée. Marquez les esprits dès la première seconde.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
  },
  { 
    name: "Architecture Persuasive", 
    id: "03",
    desc: "Chaque mot, chaque bouton est placé stratégiquement pour guider le visiteur vers le paiement. Rien n'est laissé au hasard.",
    image: "https://images.unsplash.com/photo-1620641788421-7f1c91ade639?q=80&w=2072&auto=format&fit=crop"
  },
  { 
    name: "Sérénité Technique", 
    id: "04",
    desc: "Vous ne touchez à rien. Maintenance, sécurité, bugs : nous sommes votre équipe technique dédiée. Dormez tranquille.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    name: "Hébergement Blindé", 
    id: "05",
    desc: "Vitesse fulgurante et sécurité militaire. Vos données et celles de vos clients sont dans un coffre-fort numérique.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
];

export function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="services" ref={targetRef} className="relative h-[300vh] bg-white text-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-8 md:gap-32 md:px-24 items-center">
          
          {/* Title Slide */}
          <div className="flex flex-col justify-center min-w-[90vw] md:min-w-[40vw] pl-4 md:pl-0 shrink-0">
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Pas de <br/> simples sites.
            </h2>
            <p className="text-4xl md:text-6xl text-gray-300 font-bold tracking-tighter leading-[0.9]">
                De la croissance pure.
            </p>
          </div>
          
          {/* Service Cards */}
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group relative h-[60vh] w-[85vw] md:h-[70vh] md:w-[35vw] flex-shrink-0 flex flex-col justify-between"
            >
                {/* Image Container */}
                <div className="relative w-full h-[60%] md:h-[70%] rounded-[2rem] overflow-hidden bg-gray-100 mb-8">
                    <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Floating ID */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                        <span className="text-sm font-bold tracking-widest">{service.id}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                        {service.name}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-sm">
                        {service.desc}
                    </p>
                </div>
            </div>
          ))}
          
        </motion.div>
      </div>
    </section>
  );
}
