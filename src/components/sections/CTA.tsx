const RAYDIUM_URL = "https://raydium.io/swap/";

export default function CTA() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6 border-b-4 border-black bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/catfrog.png')",
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
          opacity: 0.04,
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="flex justify-center mb-6">
          <img src="/catfrog.png" alt="CatFrog" className="w-24 h-24 rounded-full border-4 border-primary shadow-[6px_6px_0px_#000] object-cover" />
        </div>

        <h2 className="font-display text-[5.5vw] leading-tight text-white text-stroke-xl text-shadow-comic mb-4 transform -rotate-1 hover:rotate-1 transition-transform duration-500">
          JOIN THE CATFROG POND
        </h2>

        <blockquote className="text-primary font-display text-xl md:text-2xl text-stroke text-shadow-comic-sm mb-10 max-w-2xl mx-auto leading-snug">
          "$CATFROG — Half Cat. Half Frog. Full Degenerate. The ultimate Solana meme creature hopping its way to the moon."
        </blockquote>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={RAYDIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="comic-button-primary text-2xl px-12 py-5 hover:-translate-y-2 transition-transform"
            data-testid="button-buy-cta"
          >
            Buy $CATFROG
          </a>
          <button
            onClick={() => scrollTo("about")}
            className="comic-button-white text-2xl px-12 py-5 hover:-translate-y-2 transition-transform"
            data-testid="button-learn-more"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
