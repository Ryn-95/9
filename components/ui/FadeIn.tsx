"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function FadeIn({ 
  children, 
  className, 
  delay = 0, 
  duration = 0.5, 
  yOffset = 20 
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ 
        type: "spring",
        stiffness: 70,
        damping: 20,
        delay: delay,
        duration: duration 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
