"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check, Minus } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Essentiel",
    price: "2490",
    description: "L'élégance minimaliste pour démarrer.",
    features: [
      "Site Vitrine (5 pages)",
      "Design Premium & Responsive",
      "SEO Technique de base",
      "Formulaire de contact",
      "Intégration CMS simple",
    ],
  },
  {
    name: "Signature",
    price: "4990",
    description: "L'expérience complète pour les marques ambitieuses.",
    features: [
      "Site E-commerce ou Complexe",
      "Animations & Interactions fluides",
      "SEO Avancé & Performance",
      "CMS Personnalisé (Admin)",
      "Support prioritaire 24/7",
      "Analytics & Dashboard",
    ],
    highlight: true,
  },
];

export function Pricing() {
  // Force redeploy - Update pricing display
  return (
    <section id="pricing" className="py-32 px-6 bg-black text-white selection:bg-white selection:text-black relative overflow-hidden">
       {/* Background noise/grain if available globally, otherwise simple black */}
       
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/20 pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold tracking-tighter"
          >
            Tarifs.
          </motion.h2>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-sm mt-8 md:mt-0 font-light">
            Des investissements clairs pour des résultats tangibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 md:p-16 flex flex-col justify-between min-h-[600px] group transition-colors duration-500 hover:bg-neutral-900 ${plan.highlight ? 'bg-neutral-900/50' : 'bg-black'}`}
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                   <h3 className="text-3xl font-light tracking-wide uppercase">{plan.name}</h3>
                   {plan.highlight && (
                       <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest border border-white rounded-full">
                           Recommandé
                       </span>
                   )}
                </div>
                
                <div className="mb-12">
                  <div className="flex items-start">
                    <span className="text-6xl md:text-7xl font-bold tracking-tighter">{plan.price}€</span>
                  </div>
                  <p className="mt-4 text-neutral-500 text-lg font-light border-l border-white/20 pl-4">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 text-neutral-300 group-hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full group-hover:bg-white transition-colors" />
                      <span className="text-lg font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-16">
                 <Link href="https://calendly.com/contact-9secondes/30min" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-transparent border border-white/20 text-white hover:bg-white hover:text-black py-8 text-xl transition-all duration-300 rounded-none flex justify-between items-center px-8 group-hover:border-white">
                    Choisir cette offre
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-2 text-neutral-500 text-sm md:text-base">
            <Minus className="w-8 h-px bg-neutral-800" />
            <p>Besoin d'une configuration spécifique ?</p>
            <Link href="https://calendly.com/contact-9secondes/30min" className="text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-white transition-all">
                Contactez-nous pour du sur-mesure.
            </Link>
        </div>
      </div>
    </section>
  );
}
