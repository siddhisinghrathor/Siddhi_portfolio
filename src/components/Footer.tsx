import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-lg font-bold text-white tracking-widest uppercase mb-2">
              Siddhi <span className="text-orange-500 font-light">Rathor</span>
            </h2>
            <p className="text-sm text-gray-500 font-light">
              Built with React, Three.js, and a focus on performance & user experience.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium flex items-center gap-1 hover-target hover:-translate-y-1 transform">
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium flex items-center gap-1 hover-target hover:-translate-y-1 transform">
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm font-medium flex items-center gap-1 hover-target hover:-translate-y-1 transform">
              Email <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          
        </div>
        
        <div className="mt-12 text-center text-xs text-gray-600 font-light">
          &copy; {new Date().getFullYear()} Siddhi Singh Rathor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
