import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";

// Updated with your working Solana Contract Address
const CONTRACT = "2GXYCvBpVfXsSmppoPdNXZ5Tt8oKNqxqfYxdUG4xcURN";

const slices = [
  { label: "Stakers", pct: 40, color: "#FFD700" },
  { label: "CEX Listings", pct: 20, color: "#6366f1" },
  { label: "Liquidity Pool", pct: 10, color: "#22c55e" },
  { label: "Airdrop", pct: 10, color: "#f97316" },
  { label: "Weekly Rewards", pct: 10, color: "#ec4899" },
  { label: "Team & Marketing", pct: 10, color: "#14b8a6" },
];

function PieChart() {
  const size = 260;
  const cx = size / 2;
  const cy = size / 2;
  const r = 100;
  const innerR = 52;
  let cumAngle = -90;

  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const paths = slices.map((s) => {
    const startAngle = cumAngle;
    const sweep = (s.pct / 100) * 360;
    cumAngle += sweep;
    const endAngle = cumAngle;

    const x1 = cx + r * Math.cos(toRad(startAngle));
    const y1 = cy + r * Math.sin(toRad(startAngle));
    const x2 = cx + r * Math.cos(toRad(endAngle));
    const y2 = cy + r * Math.sin(toRad(endAngle));

    const ix1 = cx + innerR * Math.cos(toRad(startAngle));
    const iy1 = cy + innerR * Math.sin(toRad(startAngle));
    const ix2 = cx + innerR * Math.cos(toRad(endAngle));
    const iy2 = cy + innerR * Math.sin(toRad(endAngle));

    const large = sweep > 180 ? 1 : 0;

    const d = [
      `M ${ix1} ${iy1}`,
      `L ${x1} ${y1}`,
      `A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`,
      `L ${ix2} ${iy2}`,
      `A ${innerR} ${innerR} 0 ${large} 0 ${ix1} ${iy1}`,
      "Z",
    ].join(" ");

    return { d, color: s.color };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"
    >
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill={p.color}
          stroke="#000"
          strokeWidth="3"
        />
      ))}

      <circle
        cx={cx}
        cy={cy}
        r={innerR}
        fill="white"
        stroke="#000"
        strokeWidth="3"
      />

      <image
        href="/catfrog.png"
        x={cx - 36}
        y={cy - 36}
        width="72"
        height="72"
        clipPath="url(#circle-clip)"
      />

      <defs>
        <clipPath id="circle-clip">
          <circle cx={cx} cy={cy} r={innerR - 4} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Tokenomics() {
  const [copied, setCopied] = useState(false);

  const copyContract = useCallback(() => {
    navigator.clipboard.writeText(CONTRACT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <section
      id="tokenomics"
      className="py-24 px-6 border-b-4 border-black bg-background"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-7xl text-white text-stroke-lg text-shadow-comic">
            TOKENOMICS
          </h2>

          <p className="text-primary font-display text-3xl mt-2 text-stroke text-shadow-comic-sm">
            100,000,000,000 $CATFROG
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <PieChart />

            <div className="comic-card p-4 w-full max-w-[260px]">
              <div className="text-xs font-bold uppercase text-gray-500 mb-2 text-center">
                Contract Address
              </div>

              <div className="flex items-center gap-2 bg-gray-100 border-2 border-black rounded-lg px-3 py-2">
                <span className="font-mono text-xs text-gray-700 truncate flex-1">
                  {CONTRACT}
                </span>

                <button
                  onClick={copyContract}
                  className="flex-shrink-0 w-8 h-8 border-2 border-black rounded bg-primary flex items-center justify-center hover:bg-yellow-300 transition-colors shadow-[2px_2px_0px_#000]"
                  data-testid="button-copy-contract"
                >
                  {copied ? (
                    <Check size={14} strokeWidth={3} />
                  ) : (
                    <Copy size={14} strokeWidth={3} />
                  )}
                </button>
              </div>

              {copied && (
                <p className="text-center text-green-600 font-bold text-xs mt-1">
                  Copied!
                </p>
              )}
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
            {slices.map((s, i) => (
              <div
                key={i}
                className="comic-card flex items-center gap-4 p-5 hover:scale-[1.03] transition-transform duration-200"
              >
                <div
                  className="w-5 h-5 rounded border-2 border-black flex-shrink-0"
                  style={{ backgroundColor: s.color }}
                />

                <div className="flex-1">
                  <div className="font-bold text-sm uppercase leading-tight">
                    {s.label}
                  </div>

                  <div
                    className="font-display text-3xl leading-none"
                    style={{
                      color: s.color,
                      WebkitTextStroke: "1px #000",
                      textShadow: "2px 2px 0px #000",
                    }}
                  >
                    {s.pct}%
                  </div>

                  <div className="text-xs text-gray-500 font-semibold">
                    {(100_000_000_000 * s.pct / 100).toLocaleString()} tokens
                  </div>
                </div>
              </div>
            ))}

            <div className="sm:col-span-2 comic-card p-5 bg-primary flex items-center gap-4">
              <img
                src="/catfrog.png"
                alt="CatFrog"
                className="w-12 h-12 rounded-full border-2 border-black object-cover flex-shrink-0"
              />

              <div>
                <div className="font-bold text-sm uppercase">
                  Weekly Top 200 Holder Rewards
                </div>

                <div className="text-xs font-semibold text-black/70 mt-0.5">
                  192,307,692 $CATFROG distributed weekly to the Top 200 holders
                  by snapshot
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}