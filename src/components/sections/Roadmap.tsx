export default function Roadmap() {
  const phases = [
    {
      num: 1,
      title: "LAUNCH THE POND",
      items: [
        "Token Launch on Solana",
        "Community Building",
        "Phantom Wallet Integration Guide",
        "Community Incentives Program",
      ],
    },
    {
      num: 2,
      title: "EXPAND THE COMMUNITY",
      items: [
        "Exchange Listings (DEX)",
        "Ambassador Program",
        "Social Media Growth",
        "Meme Creation Contests",
      ],
    },
    {
      num: 3,
      title: "TOUCH DOWN CATFROG",
      items: [
        "CEX Listings (Top 20)",
        "Staking Platform Launch",
        "Airdrop Campaign",
        "Partnership Outreach",
      ],
    },
    {
      num: 4,
      title: "GROWTH TO THE MOON",
      items: [
        "Major CEX Listings",
        "Global Marketing Campaign",
        "DeFi Integration",
        "Community Governance",
      ],
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-24 px-6 border-b-4 border-black bg-background relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/catfrog.png')",
          backgroundSize: "340px 340px",
          backgroundRepeat: "repeat",
          opacity: 0.05,
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-7xl text-white text-stroke-lg text-shadow-comic">
            ROAD MAP
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-4 bg-black -translate-x-1/2 rounded-full">
            <div className="w-full h-1/2 bg-primary rounded-t-full"></div>
          </div>

          <div className="flex flex-col gap-12">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={
                    "flex flex-col md:flex-row items-center w-full " +
                    (isEven ? "md:justify-start" : "md:justify-end") +
                    " relative"
                  }
                >
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary border-4 border-black rounded-full z-10 items-center justify-center overflow-hidden">
                    <img
                      src="/catfrog.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className={
                      "w-full md:w-[45%] " +
                      (isEven ? "md:pr-10" : "md:pl-10")
                    }
                  >
                    <PhaseCard phase={phase} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhaseCard({
  phase,
}: {
  phase: {
    num: number;
    title: string;
    items: string[];
  };
}) {
  return (
    <div className="comic-card w-full hover:scale-[1.02] transition-transform duration-300">
      <div className="bg-black px-4 py-2 flex gap-2 items-center">
        <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-black"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black"></div>
      </div>

      <div className="p-8">
        <div className="inline-block bg-primary border-2 border-black px-4 py-1 rounded-full font-semibold mb-4 uppercase shadow-[2px_2px_0_#000] text-sm tracking-wide">
          Phase {phase.num}
        </div>

        <h3 className="text-3xl font-semibold mb-6 tracking-tight">
          {phase.title}
        </h3>

        <ul className="space-y-3">
          {phase.items.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-base font-medium"
            >
              <div className="w-6 h-6 rounded-full bg-primary border-2 border-black flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src="/catfrog.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
