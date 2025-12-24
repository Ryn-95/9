"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Offres", href: "#pricing" },
    { name: "Manifesto", href: "#manifesto" },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-4"
      >
        <div className="flex items-center justify-between w-full max-w-5xl bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-lg shadow-black/20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tighter text-white z-50">
            9<span className="text-neutral-500">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="https://calendly.com/contact-9secondes/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button className="bg-white text-black hover:bg-neutral-200 rounded-full px-5 py-2 h-auto text-sm font-semibold transition-transform hover:scale-105">
                Démarrer
              </Button>
            </Link>

            <button
              className="md:hidden text-white z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden flex flex-col gap-6"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-3xl font-bold text-white/80 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://calendly.com/contact-9secondes/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4"
          >
            <Button className="w-full bg-white text-black py-4 text-lg rounded-full">
              Démarrer un projet
            </Button>
          </Link>
        </motion.div>
      )}
    </>
  );
}
