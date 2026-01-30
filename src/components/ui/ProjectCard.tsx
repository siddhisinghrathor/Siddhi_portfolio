import ShapeBlur from "./ShapeBlur";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  variation?: number;
};

const ProjectCard = ({ title, description, variation = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative overflow-hidden rounded-2xl 
      bg-white/5 border border-white/10 
      p-8 h-80 group cursor-pointer
      transition-all duration-500 hover:border-orange-500/50"
    >
      {/* SHADER BACKGROUND */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="absolute inset-0 z-0 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700"
      >
        <ShapeBlur
          variation={variation}
          shapeSize={1.5}
          roundness={0.4}
          borderSize={0.05}
          circleSize={0.4}
          circleEdge={1}
        />
      </motion.div>

      {/* OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/50 z-10 backdrop-blur-[1px] group-hover:bg-black/30 transition-all duration-500" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="w-12 h-1 bg-orange-500 mt-2 transform origin-left transition-all duration-500 group-hover:w-24" />
          <p className="text-gray-400 text-sm mt-6 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center space-x-2 text-sm text-orange-400 font-medium 
          translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span>View Project</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
