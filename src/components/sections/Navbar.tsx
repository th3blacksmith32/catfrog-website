const RAYDIUM_URL = "https://raydium.io/swap/";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between bg-background/90 backdrop-blur-sm border-b-[3px] border-black">
      <div className="flex items-center gap-3">
        <img
          src="/catfrog.png"
          alt="CatFrog Logo"
          className="w-10 h-10 rounded-full border-2 border-primary object-cover shadow-[2px_2px_0px_#000]"
        />

        <span className="font-display text-3xl text-primary text-stroke-lg text-shadow-comic-sm">
          $CATFROG
        </span>
      </div>

      <div className="hidden md:flex items-center gap-6 font-display text-xl tracking-wide">
        <button
          onClick={() => scrollTo("about")}
          className="text-white hover:text-primary transition-colors text-stroke"
        >
          About
        </button>

        <button
          onClick={() => scrollTo("how-to-buy")}
          className="text-white hover:text-primary transition-colors text-stroke"
        >
          How to Buy
        </button>

        <button
          onClick={() => scrollTo("tokenomics")}
          className="text-white hover:text-primary transition-colors text-stroke"
        >
          Tokenomics
        </button>

        <button
          onClick={() => scrollTo("roadmap")}
          className="text-white hover:text-primary transition-colors text-stroke"
        >
          Road Map
        </button>
      </div>

      <a
        href={RAYDIUM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="comic-button-primary text-base px-5 py-2"
        data-testid="button-buy-nav"
      >
        Buy Now
      </a>
    </nav>
  );
}