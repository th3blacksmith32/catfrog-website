const PHANTOM_URL = "https://phantom.app/";
const RAYDIUM_URL = "https://raydium.io/swap/";
const JUPITER_URL = "https://jup.ag/";
const SOLFLARE_URL = "https://solflare.com/";

const steps = [
  {
    num: 1,
    title: "GET A PHANTOM WALLET",
    desc: "Download Phantom Wallet from phantom.app — the #1 Solana wallet. Available on Chrome, iOS, and Android. Set it up and save your seed phrase safely.",
    action: { label: "Get Phantom", url: PHANTOM_URL },
  },
  {
    num: 2,
    title: "FUND WITH SOLANA (SOL)",
    desc: "Buy SOL on any exchange (Coinbase, Binance, Kraken) and send it to your Phantom wallet address. You need SOL to swap and pay for gas fees.",
    action: { label: "Get Solflare", url: SOLFLARE_URL },
  },
  {
    num: 3,
    title: "SWAP ON JUPITER OR RAYDIUM",
    desc: "Go to jup.ag or raydium.io, connect your Phantom wallet, paste the $CATFROG contract address, and swap your SOL for $CATFROG.",
    action: { label: "Open Jupiter", url: JUPITER_URL },
  },
  {
    num: 4,
    title: "HOLD & JOIN THE POND",
    desc: "Add $CATFROG to your wallet token list, join our Telegram & Twitter, and become part of the community. HODL and hop to the moon.",
    action: { label: "Buy on Raydium", url: RAYDIUM_URL },
  },
];

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-24 px-6 border-b-4 border-black bg-background">
      <div className="container mx-auto max-w-7xl">

        <div className="text-center mb-16">
          <h2 className="font-display text-7xl text-white text-stroke-lg text-shadow-comic">
            HOW TO <span className="text-primary">BUY</span>
          </h2>
          <p className="text-white/70 font-semibold text-lg mt-4">on Solana — fast, cheap, and easy</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">

          <div className="flex-1 flex flex-col gap-8 w-full">
            {steps.slice(0, 2).map((step, i) => (
              <StepCard key={i} step={step} />
            ))}
          </div>

          <div className="flex-1 flex flex-col justify-center items-center py-10 lg:py-0 relative gap-6">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
            <img
              src="/catfrog.png"
              alt="CatFrog"
              className="relative z-10 w-full max-w-[320px] drop-shadow-[8px_8px_0_rgba(0,0,0,1)] animate-bounce"
              style={{ animationDuration: '4s' }}
            />
            <div className="relative z-10 bg-black border-4 border-primary rounded-2xl px-6 py-4 text-center shadow-[6px_6px_0px_#FFD700]">
              <div className="font-display text-primary text-2xl text-stroke text-shadow-comic-sm">SOLANA NETWORK</div>
              <div className="text-white font-bold text-sm mt-1">Fast. Cheap. Based.</div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-8 w-full">
            {steps.slice(2, 4).map((step, i) => (
              <StepCard key={i} step={step} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: typeof steps[0] }) {
  return (
    <div className="comic-card w-full transform hover:-translate-y-2 transition-transform duration-300">
      <div className="bg-black px-4 py-2 flex gap-2 items-center">
        <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-black"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black"></div>
      </div>
      <div className="p-6">
        <div className="font-display text-4xl text-primary text-stroke text-shadow-comic-sm mb-3">
          STEP {step.num}
        </div>
        <h3 className="font-bold text-xl uppercase mb-3 leading-tight border-b-2 border-black pb-2">
          {step.title}
        </h3>
        <p className="text-gray-700 font-medium text-sm mb-4">
          {step.desc}
        </p>
        <a
          href={step.action.url}
          target="_blank"
          rel="noopener noreferrer"
          className="comic-button-primary text-sm px-4 py-2 w-full justify-center"
          data-testid={`button-step-${step.num}`}
        >
          {step.action.label}
        </a>
      </div>
    </div>
  );
}
