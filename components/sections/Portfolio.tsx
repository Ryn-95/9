"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Portfolio() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">Nos Projets</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-neutral-900 p-8 rounded-2xl aspect-video flex flex-col justify-end group cursor-pointer hover:bg-neutral-800 transition-colors">
          <h3 className="text-2xl font-bold">Sottozero</h3>
          <p className="text-gray-400">Refonte complète de l&apos;expérience digitale.</p>
        </div>
        <div className="bg-neutral-900 p-8 rounded-2xl aspect-video flex flex-col justify-end group cursor-pointer hover:bg-neutral-800 transition-colors">
          <h3 className="text-2xl font-bold">Archin</h3>
          <p className="text-gray-400">Plateforme d&apos;architecture moderne.</p>
        </div>
      </div>
      <div className="text-center mt-12">
        <Link href="https://calendly.com/contact-9secondes/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xl underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all">
          Démarrer un projet <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
