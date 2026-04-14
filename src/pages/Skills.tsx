import { motion } from "framer-motion";

const skills = [
  { name: "React", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { name: "Tailwind CSS", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  { name: "CSS", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
  { name: "Bootstrap", color: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
  { name: "Electron", color: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
  { name: "TypeScript", color: "bg-blue-600/10 text-blue-500 border-blue-600/20" },
  { name: "Next.js", color: "bg-white/10 text-white border-white/20" },
  { name: "Java", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { name: "Express.js", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { name: "Node.js", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  { name: "JavaScript", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  { name: "Spring Boot", color: "bg-green-600/10 text-green-500 border-green-600/20" },
  { name: "MongoDB", color: "bg-emerald-600/10 text-emerald-500 border-emerald-600/20" },
  { name: "SQL", color: "bg-orange-400/10 text-orange-300 border-orange-400/20" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-violet-600/5 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-violet-400 mb-2">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Core <span className="text-orange-500 italic font-light">Skills</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`px-4 py-3 rounded-xl border ${skill.color} text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-opacity-20 cursor-default text-center flex items-center justify-center`}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
