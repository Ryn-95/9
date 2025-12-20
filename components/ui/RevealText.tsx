"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function RevealText({ children, delay = 0, className = "" }: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className={`relative overflow-hidden inline-block align-bottom ${className}`}>
      <motion.div
        variants={{
          hidden: { y: "100%" },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.5,
          ease: [0.25, 1, 0.5, 1], // Cubic bezier for smooth reveal
          delay: delay,
        }}
        className="inline-block"
      >
        {children}
      </motion.div>
    </div>
  );
}
