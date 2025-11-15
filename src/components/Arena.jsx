import "boxicons/css/boxicons.min.css";

const Arena = () => {
  return (
    <section
      id="arena"
      className="relative md:min-h-[90vh] mt-32 md:mt-0 px-4 lg:px-8 pb-16"
    >
      {/* Title */}
      <div className="relative z-10 pt-6 text-center mb-10 md:mb-16">
        <h1
          className="text-4xl md:text-5xl font-bold tracking-[0.35em] md:tracking-[0.5em] uppercase text-white mb-3"
          style={{
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(167, 139, 250, 0.5)",
          }}
        >
          Arena
        </h1>
        <p className="text-sm md:text-base text-gray-300/80 max-w-md mx-auto">
          Enter the battleground, explore unique fighters, and unlock rare NFT
          rewards.
        </p>
      </div>

      {/* Main grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
        {/* LEFT COLUMN */}
        <div className="md:col-span-1 space-y-5 md:space-y-7">
          {/* NFT Store card */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm aspect-[4.4/4] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(167,139,250,0.35)]">
            <img
              src="/images/bento-card1.png"
              alt="NFT Store"
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* Button bar */}
            <button className="absolute bottom-0 inset-x-0 h-16 flex items-center justify-center gap-2 bg-black/70 backdrop-blur-md text-2xl font-bold text-white tracking-wide border-t border-white/10 group-hover:text-yellow-400 transition-all duration-300">
              <i className="bx bx-store-alt text-3xl" />
              <span className="text-lg md:text-xl">NFT Store</span>
            </button>
          </div>

          {/* Side video card */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm aspect-[4.4/5] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(96,165,250,0.35)]">
            <video
              src="/videos/bento-card2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/10 opacity-60" />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-2 space-y-5 md:space-y-7">
          {/* Three creature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {/* Scoriox */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm aspect-square transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(248,113,113,0.35)]">
              <video
                src="/videos/bento-card3.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/20" />
              <h2 className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 font-semibold text-2xl text-white tracking-wide">
                Scoriox
              </h2>
            </div>

            {/* Floralynx */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm aspect-square transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(52,211,153,0.35)]">
              <video
                src="/videos/bento-card4.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/20" />
              <h2 className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 font-semibold text-2xl text-white tracking-wide">
                Floralynx
              </h2>
            </div>

            {/* Titanor */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm aspect-square transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(96,165,250,0.35)]">
              <video
                src="/videos/bento-card5.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/20" />
              <h2 className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 font-semibold text-2xl text-white tracking-wide">
                Titanor
              </h2>
            </div>
          </div>

          {/* Wide banner card */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm aspect-16/11 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(167,139,250,0.4)]">
            <img
              src="/images/bento-card5.png"
              alt="Featured Arena"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

            {/* Link button */}
            <button className="absolute bottom-3 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 border border-white/20 text-white text-sm md:text-base font-semibold tracking-wide hover:text-yellow-400 hover:bg-black/80 transition-all duration-300">
              <i className="bx bx-link-alt text-xl" />
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arena;
