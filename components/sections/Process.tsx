"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { CheckCircle2, Zap, RefreshCw, ShieldCheck, CreditCard } from "lucide-react";

const FEATURES = [
  {
    number: "01",
    title: "La Loi des 9 Secondes",
    description: "Votre client décide en un éclair. Nous ne faisons pas du 'joli', nous créons de l'instantané. Si le message ne claque pas tout de suite, c'est perdu.",
    color: "bg-neutral-900 text-white",
    visual: "timer"
  },
  {
    number: "02",
    title: "L'Anti-Site Statique",
    description: "Un site classique meurt le jour de sa mise en ligne. Le web bouge. Nos sites sont des organismes vivants qui évoluent avec votre business chaque mois.",
    color: "bg-gray-100 text-black",
    visual: "evolution"
  },
  {
    number: "03",
    title: "Tranquillité Absolue",
    description: "Hébergement, bugs, SSL, mises à jour... Ce n'est plus votre problème. Vous avez une équipe technique dédiée dans votre poche, pour le prix d'un café par jour.",
    color: "bg-white border border-gray-200 text-black",
    visual: "security"
  },
  {
    number: "04",
    title: "L'Abonnement Stratégique",
    description: "Arrêtez de sortir 1500€ de trésorerie pour un outil qui va vieillir. Lissez l'investissement. Gardez votre cash pour vos ads. Payez pour la performance continue.",
    color: "bg-zinc-900 text-white",
    visual: "finance"
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="concept" ref={containerRef} className="w-full bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-32 pb-16">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
                Pourquoi payer <br/> <span className="text-gray-300">dans le vide ?</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-xl font-light">
                Le modèle d&apos;agence classique est cassé. Nous l&apos;avons réparé.
            </p>
        </div>

      <div className="flex flex-col gap-8 pb-32 max-w-[1000px] mx-auto px-4">
        {FEATURES.map((feature, i) => {
           const targetScale = 1 - ( (FEATURES.length - i) * 0.05 );
           return (
            <Card 
                key={i} 
                i={i} 
                {...feature} 
                progress={scrollYProgress} 
                range={[i * 0.25, 1]} 
                targetScale={targetScale} 
            />
           )
        })}
      </div>
    </section>
  );
}

interface CardProps {
    i: number;
    title: string;
    description: string;
    number: string;
    color: string;
    visual: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}

const Card = ({ i, title, description, number, color, visual, progress, range, targetScale }: CardProps) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);
    
    return (
        <div ref={container} className="h-auto min-h-[60vh] md:h-[80vh] flex items-center justify-center sticky top-28 md:top-[10vh]">
            <motion.div 
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
                className={`relative flex flex-col md:flex-row justify-between w-full min-h-[400px] md:h-[600px] rounded-[32px] md:rounded-[40px] p-6 md:p-16 origin-top ${color} shadow-2xl overflow-hidden`}
            >
                <div className="flex flex-col justify-between h-full relative z-10 max-w-md gap-8 md:gap-0">
                    <div>
                        <span className="text-sm font-mono opacity-50 mb-4 block">({number})</span>
                        <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">{title}</h3>
                        <p className="text-lg md:text-xl font-light opacity-80 leading-relaxed">
                            {description}
                        </p>
                    </div>
                    
                    {/* Visual Indicator Button */}
                    <div className={`w-12 h-12 rounded-full border flex items-center justify-center ${color.includes("white") ? "border-black/10" : "border-white/20"}`}>
                        {visual === "timer" && <Zap className="w-5 h-5" />}
                        {visual === "evolution" && <RefreshCw className="w-5 h-5" />}
                        {visual === "security" && <ShieldCheck className="w-5 h-5" />}
                        {visual === "finance" && <CreditCard className="w-5 h-5" />}
                    </div>
                </div>

                {/* Right Side Visual */}
                <div className="absolute right-0 bottom-0 md:relative md:w-1/2 h-1/2 md:h-full flex items-center justify-center opacity-20 md:opacity-100 translate-y-20 md:translate-y-0 pointer-events-none md:pointer-events-auto">
                    {visual === "timer" && <TimerVisual />}
                    {visual === "evolution" && <EvolutionVisual isDark={color.includes("bg-gray-100")} />}
                    {visual === "security" && <SecurityVisual />}
                    {visual === "finance" && <FinanceVisual />}
                </div>

                {/* Abstract decoration */}
                <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-current opacity-[0.05] blur-3xl pointer-events-none" />

            </motion.div>
        </div>
    )
}

// --- Micro-Visual Components ---

function TimerVisual() {
    const [time, setTime] = useState(9.00);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(t => t <= 0 ? 9.00 : t - 0.01);
        }, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-64 h-64 flex items-center justify-center">
             <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-pulse" />
             <div className="absolute inset-0 border-t-4 border-white rounded-full animate-spin duration-[9000ms]" />
             <div className="text-6xl font-mono font-bold text-white tabular-nums">
                {time.toFixed(2)}s
             </div>
             <div className="absolute bottom-10 text-xs font-mono text-white/50 uppercase tracking-widest">Temps restant</div>
        </div>
    );
}

function EvolutionVisual({ isDark }: { isDark: boolean }) {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className={`w-64 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col ${isDark ? 'border border-gray-200' : ''}`}>
                <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <div className="p-6 flex flex-col gap-4">
                    <div className="flex gap-2">
                        <motion.div 
                            animate={{ width: ["40%", "60%", "40%"] }} 
                            transition={{ duration: 4, repeat: Infinity }}
                            className="h-4 bg-gray-100 rounded-full w-2/3" 
                        />
                    </div>
                    <motion.div 
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="h-24 bg-gray-50 rounded-lg w-full border border-dashed border-gray-200 flex items-center justify-center"
                    >
                        <span className="text-xs text-gray-400 font-mono">Mise à jour v2.4...</span>
                    </motion.div>
                     <div className="h-4 bg-gray-100 rounded-full w-1/3" />
                </div>
            </div>
            
            <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 -top-4 bg-black text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
                New Feature!
            </motion.div>
        </div>
    );
}

function SecurityVisual() {
    return (
        <div className="relative w-64 h-64 flex items-center justify-center">
            <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-48 h-48 bg-green-50 rounded-full flex items-center justify-center border-4 border-green-100"
            >
                <ShieldCheck className="w-24 h-24 text-green-500" />
            </motion.div>
            
            <div className="absolute top-0 right-0 bg-white shadow-lg px-4 py-2 rounded-lg border border-gray-100 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-gray-600">Système Sécurisé</span>
            </div>

             <div className="absolute bottom-10 left-0 bg-white shadow-lg px-4 py-2 rounded-lg border border-gray-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-xs font-bold text-gray-600">Backup Daily</span>
            </div>
        </div>
    );
}

function FinanceVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-72 h-44 bg-gradient-to-br from-gray-800 to-black rounded-2xl shadow-2xl border border-gray-700 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 skew-x-12 -translate-x-12" />
                
                <div className="flex justify-between items-start">
                    <div className="w-12 h-8 bg-yellow-500/20 rounded flex items-center justify-center">
                        <div className="w-6 h-4 border border-yellow-500 rounded-sm" />
                    </div>
                    <CreditCard className="text-white/50 w-6 h-6" />
                </div>

                <div>
                    <div className="flex gap-2 mb-2">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div className="text-white font-mono text-xl tracking-widest">49 €/mois</div>
                </div>
            </div>

            <motion.div 
                animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 right-10 text-green-400 font-bold text-lg"
            >
                + Cashflow
            </motion.div>
        </div>
    );
}
