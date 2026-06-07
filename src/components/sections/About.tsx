import { Twitter, Send } from "lucide-react";

const RAYDIUM_URL = "https://raydium.io/swap/";
const X_URL = "https://x.com/catfrogmeme";
const TELEGRAM_URL = "https://t.me/catfrogmeme";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 relative z-10 border-b-4 border-black bg-background"
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-125"></div>

          <img
            src="/catfrog.png"
            alt="CatFrog Mascot"
            className="relative z-10 w-full max-w-[420px] drop-shadow-[8px_8px_0_rgba(0,0,0,1)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="order-1 lg:order-2">
          <div className="comic-card bg-primary p-8 md:p-12 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <h2 className="font-display text-6xl text-white text-stroke-lg text-shadow-comic mb-2">
              ABOUT $CATFROG
            </h2>

            <div className="inline-block bg-black text-primary font-display text-xl px-4 py-1 rounded-full mb-6 border-2 border-black">
              Half Cat. Half Frog. Full Meme.
            </div>

            <p className="text-black font-semibold text-base md:text-lg leading-relaxed mb-4">
              CatFrog ($CATFROG) is a community-driven memecoin on the Solana
              blockchain, born from the ultimate internet fusion: a grumpy cat
              and a goofy frog. Combining feline attitude with amphibian energy,
              CatFrog brings together meme lovers, traders, creators, and
              degens from across the crypto world.
            </p>

            <p className="text-black font-semibold text-base md:text-lg leading-relaxed mb-4">
              Built on Solana for lightning-fast transactions and low fees,
              $CATFROG isn't trying to be the next corporate crypto project —
              it's a movement powered by memes, community, and pure internet
              chaos.
            </p>

            <div className="bg-black/10 border-2 border-black rounded-xl p-4 mb-6 space-y-1 font-bold text-black text-sm">
              <div>
                Ticker:{" "}
                <span className="text-white bg-black px-2 py-0.5 rounded font-display">
                  $CATFROG
                </span>
              </div>

              <div>
                Chain: <span className="font-display">Solana</span>
              </div>

              <div>
                Mission: Unite cats, frogs, and crypto degens under one
                legendary meme.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={RAYDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-button-dark"
                data-testid="button-buy-about"
              >
                Buy $CATFROG
              </a>

              <div className="flex items-center gap-3">
                <a
                  href={X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-4 border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors text-black shadow-[4px_4px_0px_#000]"
                >
                  <Twitter size={20} strokeWidth={2.5} />
                </a>

                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-4 border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors text-black shadow-[4px_4px_0px_#000]"
                >
                  <Send size={20} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}