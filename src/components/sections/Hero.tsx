import heroBg from "@/assets/hero-bg.png";

const RAYDIUM_URL = "https://raydium.io/swap/";
const DEXTOOLS_URL = "https://www.dextools.io/app/en/solana";

export default function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center overflow-hidden border-b-4 border-black"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]"></div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block bg-primary border-[3px] border-black px-6 py-2 rounded-full mb-6 transform -rotate-2">
            <span className="font-display text-2xl text-black tracking-wider uppercase">
              ONE COIN TO RULE THEM ALL
            </span>
          </div>

          <h1 className="font-display text-[8vw] leading-[0.9] text-white text-stroke-xl text-shadow-comic mb-4 transform -rotate-1">
            $CATFROG
          </h1>

          <p className="text-primary font-display text-xl md:text-2xl text-stroke text-shadow-comic-sm mb-8 max-w-lg mx-auto lg:mx-0 leading-snug">
            "$CATFROG — Half Cat. Half Frog. Full Degenerate.<br />
            The ultimate Solana meme creature hopping its way to the moon."
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
            <a
              href={DEXTOOLS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-button-dark text-2xl px-10 py-4 hover:scale-105 transition-transform"
              data-testid="button-dextools"
            >
              DexTools
            </a>
            <a
              href={RAYDIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-button-primary text-2xl px-10 py-4 hover:scale-105 transition-transform"
              data-testid="button-buy-hero"
            >
              Buy Now
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
          <img
            src="/catfrog.png"
            alt="CatFrog Mascot"
            className="relative z-10 w-[80%] max-w-[500px] object-contain drop-shadow-[8px_8px_0_rgba(0,0,0,1)] animate-bounce"
            style={{ animationDuration: "3s" }}
          />
        </div>
      </div>
    </section>
  );
}
