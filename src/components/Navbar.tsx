import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  const handleScrollTo = (id: string, name: string) => {
    setActive(name);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled 
          ? "border-white/10 bg-[#050505]/90 backdrop-blur-md py-3.5 shadow-sm" 
          : "border-white/5 bg-[#050505]/60 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* LOGO */}
        <h1 
          className="text-xs md:text-sm font-mono tracking-widest uppercase cursor-pointer font-bold" 
          onClick={() => handleScrollTo('home', 'Home')}
        >
          <span className="text-[#F5F5F5]">SIDDHI</span>
          <span className="text-[#FF4FA3]"> / RATHOR</span>
        </h1>

        {/* LINKS */}
        <ul className="flex items-center gap-1.5 md:gap-4 font-mono text-[9px] md:text-[10px] tracking-wider uppercase font-semibold">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleScrollTo(link.id, link.name)}
                className={`relative px-2 py-1.5 transition-colors duration-200 ${
                  active === link.name ? "text-[#FF4FA3]" : "text-[#8A8A8A] hover:text-[#F5F5F5]"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
          <li className="ml-2 md:ml-4">
            <a 
              target="_blank"
              href="https://drive.google.com/file/d/11E7YRgGmKBA-q0paemxgnJZDwedSmET8/view?usp=sharing" 
              rel="noreferrer"
              className="px-3.5 py-1.5 border border-white/10 text-[#F5F5F5] hover:border-[#FF4FA3] hover:text-[#FF4FA3] transition-colors duration-200 text-[9px] md:text-[10px]"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
