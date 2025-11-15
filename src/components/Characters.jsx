import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

/* ============================================================
   CUSTOM CURSOR COMPONENT
   Tracks mouse movement and animates a custom cursor that grows
   when hovering over the 3D model area.
   ============================================================ */
function CustomeCursor({ isHovering3D }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  // Track global mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    // Main cursor container that follows the mouse with smooth spring animation
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
      animate={{
        x: position.x - (isHovering3D ? 12 : 15),
        y: position.y - (isHovering3D ? 12 : 15),
        scale: isHovering3D ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 22,
        mass: 0.5,
      }}
    >
      {/* Cursor ball */}
      <motion.div
        className={`relative rounded-full ${
          isHovering3D ? "bg-violet-500" : "bg-white"
        }`}
        animate={{
          width: isHovering3D ? "24px" : "40px",
          height: isHovering3D ? "24px" : "40px",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Pulse ring when hovering model */}
        {isHovering3D && (
          <motion.div
            className="absolute inset-0 rounded-full border border-violet-500"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 2, opacity: 0.5 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   MAIN CHARACTERS COMPONENT
   Displays stats, selectable avatars, and a live 3D Spline model.
   Includes custom cursor logic based on hover state.
   ============================================================ */
const Characters = () => {
  // Which avatar is currently selected
  const [selectedAvatar, setSelectedAvatar] = useState("VIKI");

  // Cursor hover state for 3D model interaction
  const [cursorInModelArea, setCursorInModelArea] = useState(false);

  // Avatar stats data
  const Avatar = {
    VIKI: {
      name: "VIKI",
      power: 75,
      stable: 95,
      penetrate: 30,
      portable: 80,
      stars: 3,
    },
    EVA: {
      name: "EVA",
      power: 90,
      stable: 80,
      penetrate: 70,
      portable: 60,
      stars: 4,
    },
  };

  const currentAvatar = Avatar[selectedAvatar];

  // Hover handlers for custom cursor
  const handle3DAreaMouseEnter = () => setCursorInModelArea(true);
  const handle3DAreaMouseLeave = () => setCursorInModelArea(false);

  return (
    <div
      id="avatar"
      className="relative w-full h-screen overflow-hidden mb-[10%]"
    >
      {/* Custom cursor overlay */}
      <CustomeCursor isHovering3D={cursorInModelArea} />

      {/* Section title */}
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest md:-mb-14 mb-8"
          style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7)" }}
        >
          FIGHTERS <br />
          <span className="text-sm md:text-base text-gray-300/80 max-w-md mx-auto">
            Understand and chose the correct Fighter for you
          </span>
        </h1>
      </div>

      {/* Main layout: stats panel + 3D model */}
      <div className="relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4">
        {/* --- LEFT SIDE: STATS PANEL --- */}
        <div className="w-full md:w-2/4 flex flex-col md:ml-10">
          {/* Avatar stats card */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167, 139, 250, 0.2)]">
            <h1 className="text-2xl font-semibold mb-2">
              {currentAvatar.name}
            </h1>

            {/* Stat bars */}
            <div className="space-y-3 mb-16">
              {/* Each stat row */}
              {[
                ["Power", currentAvatar.power],
                ["Stable", currentAvatar.stable],
                ["Penetrate", currentAvatar.penetrate],
                ["Portable", currentAvatar.portable],
              ].map(([label, value]) => (
                <div className="flex items-center" key={label}>
                  <span className="w-24 text-gray-400">{label}</span>
                  <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-linear-to-r from-violet-600 to-white"
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    <span className="ml-2">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stat buttons */}
            <div className="flex gap-3">
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                Proficient
              </button>
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                Redemption
              </button>
            </div>
          </div>

          {/* --- AVATAR SELECT GRID --- */}
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(Avatar).map(([key, data]) => (
              <div
                key={key}
                className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300"
                onClick={() => setSelectedAvatar(key)}
              >
                <div className="text-lg mb-2">{data.name}</div>

                {/* Avatar image */}
                <img
                  src={`/images/${data.name}.png`}
                  alt={data.name}
                  className="w-20 h-20 bg-gray-800/50 rounded-md mb-2"
                />

                {/* Star rating */}
                <div className="flex">
                  {[...Array(data.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-violet-400 text-violet-500"
                    />
                  ))}
                </div>

                {/* Selection outline */}
                {selectedAvatar === key && (
                  <div className="absolute inset-0 border-2 rounded-lg pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: 3D MODEL --- */}
        <div
          className="relative md:w-2/4 w-full md:h-full h-80 flex items-center justify-center overflow-hidden"
          onMouseEnter={handle3DAreaMouseEnter}
          onMouseLeave={handle3DAreaMouseLeave}
        >
          <AnimatePresence mode="wait">
            {selectedAvatar === "VIKI" ? (
              // VIKI model animation
              <motion.div
                key="VIKI"
                className="absolute inset-0"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Spline scene="https://prod.spline.design/v7waZquYUJDBrl1x/scene.splinecode" />
              </motion.div>
            ) : (
              // EVA model animation
              <motion.div
                key="EVA"
                className="absolute inset-0"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Spline scene="https://prod.spline.design/GQTc6UnPJsrhBJF1/scene.splinecode" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Characters;
