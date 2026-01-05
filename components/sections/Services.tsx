"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { 
    name: "Kashoot Loc", 
    id: "01",
    desc: "kashootloc.fr",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fkashootloc.fr&screenshot=true&meta=false&embed=screenshot.url&screenshot.waitFor=25000&viewport.width=1000&viewport.height=1200",
    link: "https://kashootloc.fr"
  },
  { 
    name: "WAQT Luxury", 
    id: "02",
    desc: "waqt-luxury.fr",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fwaqt-luxury.fr%2F&screenshot=true&meta=false&embed=screenshot.url&screenshot.waitFor=8000&viewport.width=1000&viewport.height=1200",
    link: "https://waqt-luxury.fr/"
  },
  { 
    name: "Kashoot Mariage", 
    id: "03",
    desc: "kashootmariage.fr",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fwww.kashootmariage.fr%2F&screenshot=true&meta=false&embed=screenshot.url&screenshot.waitFor=8000&viewport.width=1000&viewport.height=1200",
    link: "https://www.kashootmariage.fr/"
  },
  { 
    name: "Forme Body Concept", 
    id: "04",
    desc: "forme-body-concept.vercel.app",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fforme-body-concept.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url&screenshot.waitFor=8000&viewport.width=1000&viewport.height=1200",
    link: "https://forme-body-concept.vercel.app/"
  },
  { 
    name: "Grega One Company", 
    id: "05",
    desc: "gregaonecompany.fr",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fwww.gregaonecompany.fr%2F&screenshot=true&meta=false&embed=screenshot.url&screenshot.waitFor=8000&viewport.width=1000&viewport.height=1200",
    link: "https://www.gregaonecompany.fr/"
  }
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
            <Link 
              key={i} 
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[60vh] w-[85vw] md:h-[70vh] md:w-[35vw] flex-shrink-0 flex flex-col justify-between cursor-none"
            >
                {/* Image Container */}
                <div className="relative w-full h-[60%] md:h-[70%] rounded-[2rem] overflow-hidden bg-gray-100 mb-8">
                    <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        unoptimized
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Floating ID */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                        <span className="text-sm font-bold tracking-widest">{service.id}</span>
                    </div>

                    {/* Link Icon */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                        <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight group-hover:underline decoration-1 underline-offset-4">
                        {service.name}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-sm">
                        {service.desc}
                    </p>
                </div>
            </Link>
          ))}
          
        </motion.div>
      </div>
    </section>
  );
}
