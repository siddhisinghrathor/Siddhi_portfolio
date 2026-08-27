import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import image from "../assets/images/sid pic.jpeg";

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

  // Profile image tilt/shift spring animation
  const cardX = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const cardY = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    cardX.set(x * 0.05); // Max 5px shift
    cardY.set(y * 0.05);
  };

  const handleCardMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

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
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-36 pb-12 px-6 md:px-12 border-b border-white/5"
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

      {/* Grid crosshair corner decorations */}
      <div className="absolute top-24 left-8 pointer-events-none font-mono text-[7px] text-white/10 select-none hidden lg:block">
        + SYS.CR01 / LAT.42
      </div>
      <div className="absolute top-24 right-8 pointer-events-none font-mono text-[7px] text-white/10 select-none hidden lg:block">
        [ X_09 / Y_87 ]
      </div>

      {/* Content wrapper */}
      <div className="max-w-[1400px] w-full mx-auto my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* LEFT: TEXT IDENTITY (Massive Typography Scale) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Top editorial labels */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap items-center gap-4 text-[9px] font-mono tracking-widest text-[#8A8A8A] uppercase"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#FF4FA3]" /> 
                ISSUE 01 / 2026
              </span>
              <span className="text-white/10">|</span>
              <span>SOFTWARE ENGINEER</span>
              <span className="text-white/10">|</span>
              <span>BASED IN INDIA</span>
            </motion.div>

            {/* Title display header (Colossal Scale) */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="text-6xl sm:text-8xl md:text-[6.5rem] lg:text-[7rem] xl:text-[8.5rem] font-display font-extrabold tracking-tighter text-[#F5F5F5] leading-[0.78] uppercase">
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

            {/* Paragraph description */}
            <motion.p
              variants={itemVariants}
              className="text-[#8A8A8A] max-w-lg text-sm md:text-base leading-relaxed font-body"
            >
              Building scalable and impactful digital products. I specialize in bridging complex engineering with elegant, user-centric design. Designed & coded as an active creative campaign.
            </motion.p>

            {/* Buttons with hover transitions */}
            <motion.div 
              variants={itemVariants} 
              className="pt-2 flex flex-col sm:flex-row gap-4"
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

          {/* RIGHT: PORTRAIT AND COLLAGE FRAMEWORK */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] md:max-w-[380px] aspect-[3/4] mx-auto lg:ml-auto">
              
              {/* Background decorative secondary frame (FIG. 03) */}
              <div className="absolute -top-12 -right-8 w-28 aspect-[3/4] border border-white/5 bg-[#0a0a0a]/20 p-1 hidden xl:block -rotate-6 z-0 select-none">
                <div className="w-full h-full bg-[#050505] flex items-center justify-center text-[7px] font-mono text-white/20 text-center">
                  [ FIG. 03 ]
                </div>
              </div>

              {/* Main Profile Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{ x: cardX, y: cardY }}
                className="relative p-2 border border-white/10 bg-[#0a0a0a]/30 w-full h-full transition-colors duration-500 hover:border-[#FF4FA3]/50 group z-10"
              >
                {/* Image Frame */}
                <div className="w-full h-[90%] border border-white/5 bg-[#050505] overflow-hidden relative">
                  <img
                    src={image}
                    alt="Siddhi Singh Rathor Portrait"
                    loading="eager"
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>

                {/* Caption */}
                <div className="flex justify-between items-center mt-3 font-mono text-[8px] tracking-wider text-[#8A8A8A] uppercase">
                  <span>01 // PRIMARY PORTRAIT</span>
                  <span>SYS_ID: 98_01</span>
                </div>

              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION: PULSING STATE */}
      <div className="max-w-[1400px] w-full mx-auto flex justify-between items-end relative z-10 mt-8">
        
        {/* Pulsing indicator */}
        <div className="flex items-center gap-2 font-mono text-[9px] text-[#8A8A8A] uppercase tracking-wider">
          <span>01 ● SYSTEM ONLINE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4FA3] animate-ping" />
        </div>

      </div>
    </section>
  );
};

export default Home;
