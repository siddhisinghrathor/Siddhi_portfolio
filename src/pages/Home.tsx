import image from "../assets/images/Profile.jpg";
import image2 from "../assets/Pasted image.png";

import piece1 from "../assets/Beige Brown Vintage Scrapbook Vision Board Whiteboard.png";
import piece2 from "../assets/sid.png";
import piece3 from "../assets/sidimg2.png";


import { motion } from "framer-motion";

/* ================= VARIANTS ================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
} as const;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay: 0.6,
    },
  },
} as const;

/* ================= COMPONENT ================= */

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ================= BACKGROUND (UNCHANGED) ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-500/40 blur-[120px]" />
        <div className="absolute top-1/2 right-1/5 w-96 h-96 bg-blue-500/20 blur-[120px]" />
      </div>
{/* 
      ================= FALLING CANVA PIECES ================= */}
      {/* <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 pointer-events-none"
      >
        {[piece1, piece2, piece3].map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt=""
            className={`absolute w-24 opacity-80 ${i === 0
              ? "left-[20%] top-[10%]"
              : i === 1
                ? "left-[55%] top-[15%]"
                : "left-[35%] top-[30%]"
              }`}
            variants={itemVariants}
            style={{ rotate: i % 2 === 0 ? -6 : 6 }}
          />
        ))}
      </motion.div> */}

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl w-full px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* LEFT — IMAGE CARD (NOW ON THE LEFT) */}
          <motion.div
            className="flex justify-center md:col-span-2 order-2 md:order-1"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="group relative p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl overflow-hidden">
              <div className="relative w-72 h-96 overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt="Portrait"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={image2}
                  alt="Landscape"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — TEXT (NOW ON THE RIGHT) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 order-1 md:order-2"
          >
            <motion.p
              variants={itemVariants}
              className="text-violet-400 text-sm tracking-widest uppercase"
            >
              Full Stack Developer
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              Siddhi <span className="text-orange-600">Singh</span> Rathor
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 max-w-xl text-lg"
            >
              I build scalable, real-world web applications using Java,
              React, and Cloud technologies.
            </motion.p>

            {/* TYPEWRITER */}
            <div className="pt-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "fit-content" }}
                transition={{ duration: 1.8, ease: "linear", delay: 1.2 }}
                className="overflow-hidden whitespace-nowrap border-r-2 border-orange-500 pr-2"
              >
                <span className="text-xs uppercase tracking-widest text-orange-400 font-mono">
                  Building thoughtful digital experiences
                </span>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-6">
              <button className="border border-indigo-600 px-6 py-2 rounded-full hover:bg-orange-600 transition font-medium text-white">
                View Projects
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;
