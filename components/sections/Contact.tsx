"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Loader2, Send } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white text-black relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
                Parlons projet.
            </h2>
            <p className="text-2xl text-neutral-500 max-w-2xl font-light">
                Une idée en tête ? Remplissez ce formulaire et construisons quelque chose de grand.
            </p>
        </div>

        {isSuccess ? (
             <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="bg-neutral-100 p-12 rounded-none border border-neutral-200 text-center"
           >
             <h3 className="text-3xl font-bold mb-4">Message reçu.</h3>
             <p className="text-xl text-neutral-600 mb-8">
               Nous revenons vers vous dans moins de 24h.
             </p>
             <Button
               className="bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-neutral-800"
               onClick={() => setIsSuccess(false)}
             >
               Envoyer un autre message
             </Button>
           </motion.div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-12">
                    <div className="group relative">
                        <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2 block">Nom Complet</label>
                        <input
                            type="text"
                            id="name"
                            required
                            placeholder="John Doe"
                            className="w-full text-3xl md:text-5xl font-light border-b border-neutral-200 py-4 bg-transparent focus:outline-none focus:border-black transition-colors placeholder:text-neutral-200"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                    </div>
                    
                    <div className="group relative">
                        <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2 block">Email Professionnel</label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="john@company.com"
                            className="w-full text-3xl md:text-5xl font-light border-b border-neutral-200 py-4 bg-transparent focus:outline-none focus:border-black transition-colors placeholder:text-neutral-200"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                    </div>

                    <div className="group relative">
                        <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2 block">Votre Message</label>
                        <textarea
                            id="message"
                            required
                            rows={1}
                            placeholder="Dites-nous tout..."
                            className="w-full text-3xl md:text-5xl font-light border-b border-neutral-200 py-4 bg-transparent focus:outline-none focus:border-black transition-colors placeholder:text-neutral-200 resize-none h-auto min-h-[100px]"
                            value={formState.message}
                            onChange={(e) => {
                                setFormState({ ...formState, message: e.target.value });
                                e.target.style.height = 'auto';
                                e.target.style.height = e.target.scrollHeight + 'px';
                            }}
                        />
                    </div>
                </div>

                <div className="pt-8 flex justify-end">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="group bg-black text-white px-10 py-8 text-xl rounded-full hover:bg-neutral-800 transition-all flex items-center gap-4 disabled:opacity-50"
                    >
                        {isSubmitting ? (
                            <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                            <>
                                Envoyer
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </Button>
                </div>
            </form>
        )}
      </div>
    </section>
  );
}
