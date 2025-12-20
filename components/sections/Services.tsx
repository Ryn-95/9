"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Sparkles, Globe, TrendingUp, Settings, Server, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import Magnetic from "@/components/ui/Magnetic";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="w-full py-20 lg:py-32 bg-white px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="mb-16 lg:mb-24">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter text-black leading-[0.9] mb-6 lg:mb-8">
                Pas de simples sites. <br/>
                <span className="text-gray-300">De la croissance pure.</span>
              </h2>
            </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
            
            {/* Left Column - Sticky Image */}
            <div className="hidden lg:block w-1/2 relative h-[600px]">
                <div className="sticky top-32 w-full h-full rounded-[32px] overflow-hidden bg-gray-100">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={activeService}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <Image 
                                src={services[activeService].image}
                                alt={services[activeService].name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute bottom-0 left-0 p-8 lg:p-12">
                                <span className="text-8xl lg:text-9xl font-bold text-white/20 tracking-tighter">
                                    {services[activeService].id}
                                
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Right Column - Interactive List */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        onMouseEnter={() => setActiveService(index)}
                        className={cn(
                            "group border-t border-gray-200 py-8 lg:py-12 cursor-pointer transition-all duration-300",
                            index === services.length - 1 && "border-b",
                            activeService === index ? "opacity-100" : "opacity-40 hover:opacity-100"
                        )}
                    >
                        <div className="flex items-baseline justify-between mb-2 lg:mb-4">
                            <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                                {service.name}
                            </h3>
                            <span className="text-xs lg:text-sm font-mono text-gray-400">
                                ({service.id})
                            </span>
                        </div>
                        
                        <div className={cn(
                            "overflow-hidden transition-all duration-500 ease-in-out",
                            activeService === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 lg:max-h-0 lg:opacity-0 max-h-40 opacity-100" // Always show on mobile, hide on desktop unless active
                        )}>
                            <p className="text-lg lg:text-xl text-gray-500 font-light leading-relaxed max-w-md pt-2 lg:pt-4">
                                {service.desc}
                            </p>
                        </div>
                        
                        {/* Mobile Image (Visible only on small screens) */}
                        <div className="lg:hidden mt-6 w-full h-48 relative rounded-2xl overflow-hidden">
                             <Image 
                                src={service.image}
                                alt={service.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>

        </div>

      </div>
    </section>
  );
}
