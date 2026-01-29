

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/5 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">SIDDHI SINGH R@THOR</h1>
        <ul className="flex space-x-6 font-medium">
          <li>
            <a href="#home" className="hover:text-indigo-600 text-indigo-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-600 text-orange-600">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-orange-600 text-orange-600">
              Projects
            </a>
          </li>
          <li>
           <a href="#skills" className="hover:text-orange-600 text-orange-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-600 text-indigo-600"> 
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
