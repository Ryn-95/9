"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 text-center">
      <Link href="https://calendly.com/contact-9secondes/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
        Je veux convaincre <ArrowRight />
      </Link>
    </section>
  );
}
