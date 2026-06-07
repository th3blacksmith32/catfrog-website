import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import About from "@/components/sections/About";
import HowToBuy from "@/components/sections/HowToBuy";
import Tokenomics from "@/components/sections/Tokenomics";
import CrossTicker from "@/components/sections/CrossTicker";
import Roadmap from "@/components/sections/Roadmap";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <HowToBuy />
      <Tokenomics />
      <CrossTicker />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  );
}
