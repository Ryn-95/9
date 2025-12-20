"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    // Sequence timing (ms) - starts fast, slows down for the finale
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    const delays = [0, 200, 400, 600, 800, 1000, 1250, 1550, 1900, 2400];

    const timeouts: NodeJS.Timeout[] = [];

    delays.forEach((delay, index) => {
        const timeout = setTimeout(() => {
            setCount(index);
        }, delay);
        timeouts.push(timeout);
    });

    // Exit delay
    const exitTimeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 3200);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(exitTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black text-white px-4 py-4 md:px-12 md:py-12"
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
            {/* Header / Top Info */}
            <div className="flex justify-between items-start w-full opacity-50">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest">
                    9 Seconds™
                </span>
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-right">
                    Paris, FR
                </span>
            </div>

            {/* Main Center Content */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
                <div className="relative overflow-hidden">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={count}
                            initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
                            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                            exit={{ y: "-100%", opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                            className="text-[35vw] md:text-[40vh] font-medium leading-none tracking-tighter block text-white"
                        >
                            {count}
                        </motion.span>
                    </AnimatePresence>
                    
                    {/* The "Seconds" label next to the number - subtle */}
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute -right-4 top-4 md:-right-12 md:top-12 text-xs md:text-sm font-mono text-neutral-500 -rotate-90 origin-bottom-left"
                    >
                        (SECONDS)
                    </motion.span>
                </div>
            </div>

            {/* Footer / Bottom Info */}
            <div className="flex justify-between items-end w-full">
                 <div className="flex flex-col gap-1">
                    <p className="text-neutral-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                        System
                    </p>
                    <p className="text-white text-xs md:text-sm font-light tracking-wide">
                        {count < 9 ? "INITIALIZING EXPERIENCE..." : "READY TO LAUNCH"}
                    </p>
                 </div>

                 <div className="flex flex-col gap-1 text-right">
                    <p className="text-neutral-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                        Status
                    </p>
                    <div className="flex items-center justify-end gap-2">
                        <span className="text-white text-xs md:text-sm font-mono">
                            {count}0%
                        </span>
                        <div className={`w-1.5 h-1.5 rounded-full ${count === 9 ? "bg-white" : "bg-neutral-600 animate-pulse"}`} />
                    </div>
                 </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
