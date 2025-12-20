"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mix-blend-difference text-white">
      <div className="text-2xl font-bold">9</div>
      <Link href="https://calendly.com/contact-9secondes/30min" target="_blank" rel="noopener noreferrer">
        <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6">
          Démarrer
        </Button>
      </Link>
    </header>
  );
}
