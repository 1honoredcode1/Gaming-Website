const Hero = () => {
  return (
    // ***** HERO SECTION WRAPPER *****
    // Full-screen section with background video and centered content
    <main
      id="home"
      className="relative w-full h-screen overflow-hidden flex justify-center mb-[10%]"
    >
      {/* ----- BACKGROUND VIDEO ----- */}
      <video
        src="/videos/hero.mp4" // Public assets should be referenced with leading "/"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[95%] object-cover absolute top-0 left-0 -z-10"
      ></video>

      {/* ----- HERO CONTENT ----- */}
      <div className="absolute bottom-[15%] flex flex-col items-center gap-5">
        {/* Main illustrated logo/text */}
        <img
          src="/images/illu-text.png"
          alt="illustration text"
          className="md:w-120 w-[20rem]"
        />

        {/* Section tagline */}
        <h1 className="md:text-2xl text-xl font-bold">
          Explore, Capture, Conquer
        </h1>

        {/* Thin divider line */}
        <div className="md:w-[75%] w-[60%] h-[0.1px] bg-[#baba]"></div>

        {/* CTA Button */}
        <a href="https://overworld.illuvium.io">
          <button className="h-10 px-16 bg-linear-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
            Play Now
          </button>
        </a>

        {/* Secondary branding text + image */}
        <div className="flex items-center gap-5 text-3xl font-extrabold text-gray-200">
          <img
            src="/images/illu-logo.png"
            alt="illustration logo"
            className="md:h-16 h-12"
          />
          ZERO
        </div>

        {/* Supporting description */}
        <p className="max-w-[80%] text-center text-[#babaff]">
          Notice: Illuvium Games are in Beta.Participation involves risk. <br />
          <a
            href="https://overworld.illuvium.io"
            className="hover:text-violet-500 hover:underline"
          >
            Read our full Disclaimer here.
          </a>
        </p>
      </div>

      {/* ----- SCROLL INDICATOR (VISIBLE ON DESKTOP ONLY) ----- */}
      <div className="absolute bottom-40 lg:right-24 right-5 mt-24 animate-bounce sm:inline-block hidden">
        <div className="flex flex-col items-center">
          {/* Mouse-like scroll indicator */}
          <div className="w-8 h-12 border-2 border-[#babaff] rounded-full flex justify-center pt-1">
            <div className="w-1 h-3 bg-[#babaff] rounded-full animate-pulse"></div>
          </div>

          {/* Text below indicator */}
          <p className="text-[#babaff] mt-2">Scroll At Your Desire</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
