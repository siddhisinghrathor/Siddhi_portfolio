import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple artificial delay ensuring DOM is painted and critical assets load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h1 className="text-2xl md:text-3xl font-light text-white tracking-[0.3em] uppercase mb-6">
              Siddhi Singh <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Rathor</span>
            </h1>
            
            {/* Minimal Progress Bar */}
            <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-violet-500 to-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
