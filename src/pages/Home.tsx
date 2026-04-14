import image from "../assets/images/sid pic.jpeg";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import React from "react";

/* ================= VARIANTS ================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
} as const;

// Calm, premium fade and slight slide up
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

// Floating animation for the image
const floatingAnimation = {
  y: ["-8px", "8px"],
  transition: {
    y: {
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut" as const,
    },
  },
};

/* ================= COMPONENTS ================= */

const ProfileCard = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const rX = (y / rect.height - 0.5) * -10;
    const rY = (x / rect.width - 0.5) * 10;

    rotateX.set(rX);
    rotateY.set(rY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="flex justify-center md:justify-end md:col-span-1 order-1 md:order-2 perspective-1000 w-full"
    >
      <motion.div
        animate={floatingAnimation}
        style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative p-[3px] rounded-[2rem] w-full max-w-[280px] aspect-[4/5] md:w-80 md:h-[28rem] transition-shadow duration-700 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.3)] shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)]"
      >
        {/* Animated Gradient Border */}
        <motion.div 
          className="absolute inset-0 rounded-[2rem] opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.8), rgba(249, 115, 22, 0.4), transparent 80%)`,
          }}
        />

        {/* Inner Card & Image */}
        <div className="relative w-full h-full bg-[#0a0a0a] rounded-[1.85rem] overflow-hidden border border-white/5" style={{ transform: "translateZ(20px)" }}>
          {/* Subtle blurred backdrop fallback block */}
          <div className="absolute inset-0 bg-violet-600/10 blur-xl pointer-events-none" />
          
          <img
            src={image}
            alt="Siddhi Singh Rathor Portrait"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Vignette effect for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-transparent mix-blend-overlay pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-40"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-violet-600/15 blur-[120px] md:blur-[180px] mix-blend-screen rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-orange-500/10 blur-[100px] md:blur-[160px] mix-blend-screen rounded-full" />
      </div>

      <div className="max-w-6xl w-full px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-12 lg:gap-20 items-center">
          
          {/* LEFT — TEXT IDENTITY */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 order-2 md:order-1 flex flex-col justify-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-violet-400 text-xs md:text-sm tracking-[0.3em] uppercase font-semibold">
                Software Engineer
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-white leading-[1.1]">
                Siddhi Singh <span className="hidden sm:inline"><br/></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 inline-block mt-1 sm:mt-2">
                  Rathor
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 max-w-lg text-lg md:text-xl leading-relaxed font-light mt-4"
            >
              Building scalable and impactful digital products. I specialize in bridging complex engineering with elegant, user-centric design.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4 md:pt-8 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover-target px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-black text-sm md:text-base font-semibold tracking-wide hover:bg-gray-100 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
              >
                View My Projects
              </button>
              <a 
                target="_blank"
                href="https://drive.google.com/file/d/11E7YRgGmKBA-q0paemxgnJZDwedSmET8/view?usp=sharing" rel="noreferrer"
                className="hover-target px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 text-white text-sm md:text-base font-medium hover:bg-white/5 hover:border-white/40 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — PROFILE CARD */}
          <ProfileCard />
 
        </div>
      </div>

      {/* Guided User Scroll CTA */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-auto cursor-pointer group hover-target hover:opacity-100 opacity-60 transition-opacity"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 group-hover:text-violet-400 transition-colors">Explore My Work</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
           className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1 group-hover:border-violet-500/50 transition-colors"
        >
          <motion.div className="w-1 h-2 bg-white/40 rounded-full group-hover:bg-violet-400 transition-colors" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Home;

