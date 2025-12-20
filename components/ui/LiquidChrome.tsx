"use client";

import { motion } from "framer-motion";

export function LiquidChrome({ className }: { className?: string }) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Base Glass Material */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[40px] backdrop-saturate-[180%]" />
      
      {/* Specular Gradient (Top Light) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent opacity-80" />

      {/* Inner Rim Light (3D Effect) */}
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5),inset_0_0_0_1px_rgba(255,255,255,0.1)] pointer-events-none" />

      {/* Subtle Noise for Texture (Premium feel) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} 
      />

      {/* Bottom Reflection / Thickness */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/20 to-transparent opacity-50" />
      
      {/* Optional: Subtle Moving Shine */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "200%", opacity: [0, 0.5, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatDelay: 5,
          ease: "easeInOut"
        }}
        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
      />
    </div>
  );
}
