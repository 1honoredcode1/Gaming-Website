import "boxicons/css/boxicons.min.css";

const Header = () => {
  // Toggle mobile dropdown menu by hiding/unhiding it
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
  };

  return (
    // ***** HEADER WRAPPER *****
    // Fixed header with border, spacing, and flex layout
    <header className="py-1 px-7 flex justify-between items-center sticky bg-black top-0 z-50 w-full border-b-[0.3px] border-[#babaff] ">
      {/* ----- LEFT SECTION: LOGO + DESKTOP BUTTONS ----- */}
      <div className="flex lg:gap-14 gap-4 items-center">
        {/* Logo */}
        <a href="/">
          <img
            src="public/images/logo.png"
            alt="logo"
            className="md:w-16 w-12"
          />
        </a>

        {/* Desktop CTA buttons (hidden on mobile) */}
        <div className="hidden md:flex gap-5 items-center">
          <a href="https://overworld.illuvium.io">
            <button className="h-8 px-6 bg-linear-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
              Play Now
            </button>
          </a>
          <a href="https://overworld.illuvium.io">
            <button className="h-8 px-6 bg-linear-to-r from-gray-400 to-gray-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
              Play Now
            </button>
          </a>
        </div>
      </div>

      {/* ----- DESKTOP NAVIGATION ----- */}
      <nav className="hidden md:flex lg:gap-8 gap-4">
        {/* Single nav link with animated underline */}
        <a
          href="#avatar"
          className="
            relative inline-flex items-center gap-1
            py-1 text-lg hover:text-purple-300
            transition-colors duration-300
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-0.5 after:w-0 after:bg-purple-400
            after:transition-all after:duration-300
            hover:after:w-full
            text-nowrap
          "
        >
          <i className="bx bx-user-circle" />
          Avatar
        </a>

        {/* Arena */}
        <a
          href="#arena"
          className="
            relative inline-flex items-center gap-1
            py-1 text-lg hover:text-purple-300 transition-colors duration-300
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-0.5 after:w-0 after:bg-purple-400
            after:transition-all after:duration-300 hover:after:w-full
            text-nowrap
          "
        >
          <i className="bx bxs-trophy" />
          Arena
        </a>

        {/* Store */}
        <a
          href="#home"
          className="
            relative inline-flex items-center gap-1
            py-1 text-lg hover:text-purple-300 transition-colors duration-300
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:h-0.5 after:w-0 after:bg-purple-400
            after:transition-all after:duration-300 hover:after:w-full
            text-nowrap
          "
        >
          <i className="bx bxs-store-alt" />
          Donwload
        </a>
      </nav>

      {/* ----- MOBILE MENU BUTTON ----- */}
      <button onClick={toggleMobileMenu} className="text-3xl p-2 md:hidden">
        <i className="bx bx-menu-alt-right" />
      </button>

      {/* ----- MOBILE DROPDOWN MENU ----- */}
      <div
        id="mobileMenu"
        className="hidden fixed top-14 left-0 right-0 bg-black p-5 md:hidden"
      >
        {/* Mobile nav links */}
        <nav className="flex flex-col gap-4 items-center">
          {/* Avatar */}
          <a
            href="#avatar"
            className="
              relative inline-flex items-center gap-1
              py-1 text-lg hover:text-purple-300 transition-colors duration-300
              after:content-[''] after:absolute after:left-0 after:bottom-0
              after:h-0.5 after:w-0 after:bg-purple-400
              after:transition-all after:duration-300 hover:after:w-full
              text-nowrap
            "
          >
            <i className="bx bx-user-circle" />
            Avatar
          </a>

          {/* Arena */}
          <a
            href="#arena"
            className="
              relative inline-flex items-center gap-1
              py-1 text-lg hover:text-purple-300 transition-colors duration-300
              after:content-[''] after:absolute after:left-0 after:bottom-0
              after:h-0.5 after:w-0 after:bg-purple-400
              after:transition-all after:duration-300 hover:after:w-full
              text-nowrap
            "
          >
            <i className="bx bxs-trophy" />
            Arena
          </a>

          {/* Store */}
          <a
            href="#home"
            className="
              relative inline-flex items-center gap-1
              py-1 text-lg hover:text-purple-300 transition-colors duration-300
              after:content-[''] after:absolute after:left-0 after:bottom-0
              after:h-0.5 after:w-0 after:bg-purple-400
              after:transition-all after:duration-300 hover:after:w-full
              text-nowrap
            "
          >
            <i className="bx bxs-store-alt" />
            Download
          </a>
        </nav>
        {/* Mobile CTA buttons */}
        <div className="flex flex-col gap-3 w-full mt-4">
          <button className="bg-purple-700 py-2 rounded">Play</button>
          <button className="bg-gray-500 py-2 rounded">NFT Store</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
