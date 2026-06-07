import { Twitter, Send, Globe } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black pt-20 pb-10 px-6 text-white border-t-8 border-primary relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">

          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src="/catfrog.png" alt="CatFrog" className="w-14 h-14 rounded-full border-4 border-primary object-cover shadow-[4px_4px_0px_#FFD700]" />
              <div className="font-display text-4xl text-primary text-stroke text-shadow-comic-sm">
                $CATFROG
              </div>
            </div>
            <p className="font-semibold text-gray-400 max-w-xs text-sm">
              Half Cat. Half Frog. Full Degenerate.<br />
              The ultimate Solana meme creature.
            </p>
            <div className="bg-gray-900 border-2 border-gray-700 rounded-lg px-4 py-2 text-xs font-mono text-primary">
              Chain: Solana &nbsp;|&nbsp; Ticker: $CATFROG
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-display text-2xl text-white tracking-widest uppercase">Quick Links</h4>
            <div className="flex flex-col gap-2 font-semibold text-gray-400 text-center md:text-left text-sm">
              <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors text-left">About</button>
              <button onClick={() => scrollTo("how-to-buy")} className="hover:text-primary transition-colors text-left">How to Buy</button>
              <button onClick={() => scrollTo("tokenomics")} className="hover:text-primary transition-colors text-left">Tokenomics</button>
              <button onClick={() => scrollTo("roadmap")} className="hover:text-primary transition-colors text-left">Road Map</button>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-6">
            <h4 className="font-display text-2xl text-white tracking-widest uppercase">Community</h4>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-colors"
                data-testid="link-twitter">
                <Twitter size={20} strokeWidth={2.5} />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-colors"
                data-testid="link-telegram">
                <Send size={20} strokeWidth={2.5} />
              </a>
              <a href="https://catfrog.io" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-colors"
                data-testid="link-website">
                <Globe size={20} strokeWidth={2.5} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t-2 border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/catfrog.png" alt="" className="w-6 h-6 rounded-full border border-primary object-cover" />
            <span className="font-semibold text-gray-500 text-sm">&copy; 2024 $CATFROG. All rights reserved to the moon.</span>
          </div>
          <p className="text-gray-600 text-xs font-semibold text-center">
            Not financial advice. DYOR. Crypto is risky — even for frogs.
          </p>
        </div>
      </div>
    </footer>
  );
}
