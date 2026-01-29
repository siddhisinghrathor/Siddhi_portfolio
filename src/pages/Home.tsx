import image from "../assets/images/Profile.jpg";
import image2 from "../assets/Pasted image.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 right-1/4 
          -translate-x-1/2 -translate-y-1/2 
          w-96 h-96 bg-orange-500/90 blur-[120px]"
        />
        <div
          className="absolute top-1/2 right-1/5
          -translate-x-1/2 -translate-y-1/2 
          w-96 h-96 bg-violet-500 blur-[120px]"
        />
          <div
          className="absolute bottom-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-96 h-96 bg-violet-500 blur-[120px]"
        />
          <div
          className="absolute bottom-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-96 h-96 bg-violet-500 blur-[120px]"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl w-full px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-violet-400 text-sm tracking-widest uppercase">
              Full Stack Developer
            </p>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-4">
              Siddhi <span className="text-orange-600">Singh</span> Rathor
            </h1>

            <p className="text-gray-500 mt-6 max-w-xl text-lg">
              I build scalable, real-world web applications using Java,
              React, and Cloud technologies.
            </p>

            <div className="mt-6">
              <button className="border border-indigo-600 px-6 py-2 rounded-full hover:bg-orange-600 transition font-medium">
                View Projects
              </button>
            </div>
          </motion.div>

          {/* RIGHT — IMAGE CARD */}
          <motion.div
            className="flex justify-center md:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className="relative p-4 rounded-2xl 
                bg-white/10 backdrop-blur-lg 
                border border-white/20 
                shadow-xl cursor-pointer
                transition-transform duration-500
                hover:rotate-270 hover:scale-105"
            >
              <div className="relative w-72 h-97 overflow-hidden rounded-xl">

                {/* Portrait */}
                <img
                  src={image}
                  alt="Portrait"
                  className="absolute inset-0 w-full h-full object-cover 
                             transition-opacity duration-500 hover:opacity-0"
                />

                {/* Landscape */}
                <img
                  src={image2}
                  alt="Landscape"
                  className="absolute inset-0 w-full h-full object-cover 
                             opacity-0 transition-opacity duration-500 hover:opacity-100"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;
