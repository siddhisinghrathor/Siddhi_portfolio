import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-5 left-1/2 -translate-x-1/2 
      w-[90%] max-w-5xl 
      transition-all duration-300
      ${scrolled ? "bg-black/40 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl" : "bg-white/5 border-white/5 backdrop-blur-md"}
      border 
      rounded-full px-6 py-4 
      z-50`}
    >
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-sm md:text-base font-medium tracking-widest uppercase hover-target cursor-pointer" onClick={() => handleScrollTo('home', 'Home')}>
          <span className="text-white hover:text-violet-400 transition-colors duration-300">Siddhi </span>
          <span className="text-orange-500 font-light">Rathor</span>
        </h1>

        {/* LINKS */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleScrollTo(link.id, link.name)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-target
                  ${active === link.name ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                {active === link.name && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </button>
            </li>
          ))}
          <li className="ml-2">
            <a 
            target="_blank"
              href="https://drive.google.com/file/d/11E7YRgGmKBA-q0paemxgnJZDwedSmET8/view?usp=sharing" download
              className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover-target"
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
