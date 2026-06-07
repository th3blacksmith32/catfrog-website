import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "What is memecoin and how does it work?",
      a: "Memecoin is a community-driven cryptocurrency built on fun, memes, and viral energy. It works like any other token but with 1000x more memes!"
    },
    {
      q: "How do I earn rewards on the platform?",
      a: "You can earn rewards by holding tokens, participating in community events, and joining our meme creation contests."
    },
    {
      q: "What blockchain does the platform run on?",
      a: "We currently run on the Ethereum and Binance Smart Chain networks to provide flexibility and lower fees for our community."
    },
    {
      q: "Is my investment safe?",
      a: "Our smart contracts have been audited by top firms, and liquidity is locked. However, crypto is always risky, so DYOR (Do Your Own Research)!"
    },
    {
      q: "How do I withdraw my tokens?",
      a: "You can withdraw or swap your tokens on any supported decentralized exchange (DEX) by connecting your wallet."
    },
    {
      q: "Can I stake my memecoins?",
      a: "Staking features are currently in development and will be released in Phase 3 of our roadmap. Get ready for juicy APYs!"
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 border-b-4 border-black bg-primary">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-7xl text-white text-stroke-lg text-shadow-comic">
            FAQ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ faq }: { faq: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="comic-card overflow-hidden">
      <button 
        className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg pr-4">{faq.q}</span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full border-[3px] border-black bg-primary flex items-center justify-center">
          {isOpen ? <ChevronUp size={20} className="stroke-black stroke-[3px]" /> : <ChevronDown size={20} className="stroke-black stroke-[3px]" />}
        </div>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out border-t-0 border-black ${isOpen ? 'max-h-48 border-t-[3px]' : 'max-h-0'}`}>
        <div className="p-6 bg-blue-50 font-medium leading-relaxed">
          {faq.a}
        </div>
      </div>
    </div>
  );
}
