"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "2490€",
    features: ["Site Vitrine", "Design Premium", "Mobile Responsive", "SEO de base"],
  },
  {
    name: "Premium",
    price: "4990€",
    features: ["Site E-commerce", "Design Sur-mesure", "Animations avancées", "SEO Avancé", "Support 24/7"],
    popular: true,
  },
];

export function Pricing() {
  return (
    <section className="py-20 px-6 bg-neutral-950">
      <h2 className="text-4xl font-bold mb-12 text-center">Nos Offres</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className={`p-8 rounded-3xl border ${plan.popular ? 'border-white bg-neutral-900' : 'border-neutral-800 bg-black'} flex flex-col`}>
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-6">{plan.price}</div>
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" /> {feature}
                </li>
              ))}
            </ul>
            <Link href="https://calendly.com/contact-9secondes/30min" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className={`w-full py-6 text-lg ${plan.popular ? 'bg-white text-black hover:bg-gray-200' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}>
                Choisir l&apos;offre {plan.name} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
