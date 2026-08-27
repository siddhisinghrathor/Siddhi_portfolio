import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import gradHatImg from "../assets/images/gradhat_clean.png";
import paperRocketImg from "../assets/images/paper_rocket_clean.png";
import hourglassImg from "../assets/images/hourglass_clean.png";
import magnifyingGlassImg from "../assets/images/magnifying_glass_clean.png";
import clockImg from "../assets/images/clock_clean.png";
import brainImg from "../assets/images/brain_clean.png";

const Home = () => {
  // Cursor glow position tracker
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Staggered load animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-36 pb-12 px-6 md:px-12"
    >
      {/* Background vignette wrapper */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_95%)] pointer-events-none z-0" />

      {/* Extremely subtle cursor follow glow */}
      {isHovered && (
        <div 
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 opacity-30"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 79, 163, 0.035), transparent 80%)`
          }}
        />
      )}

      {/* Far Top-Left Corner Clock Doodle (Above Gradhat & Tilted Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
        animate={{ opacity: 1, scale: 1, rotate: 12 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-20 left-6 sm:top-24 sm:left-10 lg:top-28 lg:left-16 z-20 pointer-events-auto group"
      >
        <img
          src={clockImg}
          alt="Clock"
          className="w-28 sm:w-36 md:w-48 lg:w-56 h-auto object-contain filter drop-shadow-[0_15px_35px_rgba(255,79,163,0.35)] group-hover:-translate-y-3 group-hover:rotate-18 group-hover:scale-110 transition-all duration-500"
        />
      </motion.div>

      {/* Far Bottom-Left Corner Hourglass Doodle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
        animate={{ opacity: 1, scale: 1, rotate: 10 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-14 z-20 pointer-events-auto group"
      >
        <img
          src={hourglassImg}
          alt="Hourglass"
          className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto object-contain filter drop-shadow-[0_15px_35px_rgba(255,79,163,0.3)] group-hover:-translate-y-3 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-500"
        />
      </motion.div>

      {/* Far Top-Right Corner Magnifying Glass Doodle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
        animate={{ opacity: 1, scale: 1, rotate: 12 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="absolute top-20 right-6 sm:top-24 sm:right-10 lg:top-28 lg:right-16 z-20 pointer-events-auto group"
      >
        <img
          src={magnifyingGlassImg}
          alt="Magnifying Glass"
          className="w-32 sm:w-44 md:w-56 lg:w-64 h-auto object-contain filter drop-shadow-[0_15px_35px_rgba(255,79,163,0.35)] group-hover:-translate-y-3 group-hover:-rotate-6 group-hover:scale-110 transition-all duration-500"
        />
      </motion.div>

      {/* Far Bottom-Right Corner Brain Doodle (Below Rocket) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ duration: 0.9, delay: 0.55 }}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 lg:bottom-12 lg:right-14 z-20 pointer-events-auto group"
      >
        <img
          src={brainImg}
          alt="Brain"
          className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto object-contain filter drop-shadow-[0_15px_35px_rgba(255,79,163,0.35)] group-hover:-translate-y-3 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500"
        />
      </motion.div>

      {/* Content wrapper - Centered Layout */}
      <div className="max-w-4xl w-full mx-auto my-auto relative z-10 text-center flex flex-col items-center">
        
        {/* Left Side Graduation Hat Doodle (Higher & Closer to Title) */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -15 }}
          animate={{ opacity: 1, x: 0, rotate: -12 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute -top-8 -left-8 sm:-left-16 md:-left-28 lg:-left-40 z-20 pointer-events-auto group"
        >
          <img
            src={gradHatImg}
            alt="Graduation Hat"
            className="w-36 sm:w-48 md:w-60 lg:w-72 h-auto object-contain filter drop-shadow-[0_15px_35px_rgba(255,79,163,0.35)] group-hover:-translate-y-3 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500"
          />
        </motion.div>

        {/* Right Side Paper Rocket Doodle */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: -12 }}
          animate={{ opacity: 1, x: 0, rotate: -8 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="absolute top-1/2 -translate-y-1/2 -right-8 sm:-right-16 md:-right-28 lg:-right-40 z-20 pointer-events-auto group"
        >
          <img
            src={paperRocketImg}
            alt="Paper Rocket"
            className="w-36 sm:w-48 md:w-60 lg:w-72 h-auto object-contain filter drop-shadow-[0_15px_35px_rgba(255,79,163,0.35)] group-hover:-translate-y-3 group-hover:rotate-3 group-hover:scale-110 transition-all duration-500"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10 flex flex-col items-center justify-center"
        >
          {/* Title display header (Colossal Scale Centered) */}
          <motion.div variants={itemVariants} className="space-y-1">
            <h1 className="text-6xl sm:text-8xl md:text-[6.5rem] lg:text-[7rem] xl:text-[8.5rem] font-display font-extrabold tracking-tighter text-[#F5F5F5] leading-[0.82] uppercase text-center">
              Siddhi <br />
              <span className="text-[#FF4FA3]">
                S
                <span className="relative inline-block">
                  ı
                  <span className="absolute -top-[0.28em] left-1/2 -translate-x-1/2 text-[0.45em] leading-none">
                    ♥
                  </span>
                </span>
                ngh
              </span> <br />
              <span className="text-transparent [-webkit-text-stroke:1px_#F5F5F5]">
                Rathor.
              </span>
              <span className="text-[#FF4FA3] text-3xl sm:text-5xl font-mono align-super ml-1.5">✦</span>
            </h1>
          </motion.div>

          {/* Buttons with hover transitions */}
          <motion.div 
            variants={itemVariants} 
            className="pt-2 flex justify-center"
          >
            <a 
              target="_blank"
              href="https://drive.google.com/file/d/11E7YRgGmKBA-q0paemxgnJZDwedSmET8/view?usp=sharing" 
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center px-6 py-3.5 border border-white/10 hover:border-[#FF4FA3] hover:text-[#FF4FA3] text-[#8A8A8A] transition-all duration-300 font-mono text-[9px] md:text-[10px] uppercase tracking-widest font-bold"
            >
              <span className="flex items-center gap-2">
                Download Resume 
                <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">&nearr;</span>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default Home;
