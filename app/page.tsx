import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { Manifesto } from "@/components/sections/Manifesto";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <LogoTicker />
      <Manifesto />
      <MarqueeSection />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
