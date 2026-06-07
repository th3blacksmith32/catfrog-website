export default function Ticker() {
  const items = Array(12).fill("$CATFROG");

  return (
    <div className="border-b-[4px] border-black bg-white overflow-hidden py-3 whitespace-nowrap flex select-none relative z-20">
      <div className="ticker-scroll flex items-center min-w-max">
        {[...items, ...items].map((_, i) => (
          <div key={i} className="flex items-center px-4">
            <img
              src="/catfrog.png"
              alt="CatFrog"
              className="w-10 h-10 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] object-cover flex-shrink-0"
            />
            <span className="font-display text-3xl uppercase tracking-widest text-stroke text-shadow-comic-sm text-primary mx-4">
              $CATFROG
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
