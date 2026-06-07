export default function CrossTicker() {
  const row1 = Array(10).fill("$CATFROG");
  const row2 = Array(10).fill("$CATFROG");

  return (
    <div className="border-b-[4px] border-black flex flex-col relative z-20">
      <div className="bg-primary overflow-hidden py-3 whitespace-nowrap flex select-none border-b-4 border-black">
        <div className="ticker-scroll flex items-center min-w-max">
          {[...row1, ...row1].map((_, i) => (
            <div key={i} className="flex items-center px-5">
              <img
                src="/catfrog.png"
                alt="CatFrog"
                className="w-8 h-8 rounded-full border-2 border-black object-cover flex-shrink-0"
              />
              <span className="font-display text-2xl text-black uppercase tracking-widest text-stroke text-shadow-comic-sm mx-4">
                $CATFROG
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black overflow-hidden py-3 whitespace-nowrap flex select-none">
        <div className="ticker-scroll-reverse flex items-center min-w-max">
          {[...row2, ...row2].map((_, i) => (
            <div key={i} className="flex items-center px-5">
              <img
                src="/catfrog.png"
                alt="CatFrog"
                className="w-8 h-8 rounded-full border-2 border-primary object-cover flex-shrink-0"
              />
              <span className="font-display text-2xl text-primary uppercase tracking-widest text-stroke text-shadow-comic-sm mx-4">
                $CATFROG
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
