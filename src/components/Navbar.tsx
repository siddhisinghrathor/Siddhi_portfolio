import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 
      w-[90%] max-w-6xl 
      bg-white/10 backdrop-blur-lg 
      border border-white/20 
      rounded-full px-6 py-3 
      z-50 shadow-lg"
    >
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-sm md:text-base font-semibold tracking-wide">

          <span className="text-orange-600">Siddhi Singh R@thor</span>
        </h1>

        {/* LINKS */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => setActive(link)}
              className={`cursor-pointer transition-all
                ${
                  active === link
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-violet-400"
                }`}
            >
              {link}
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
