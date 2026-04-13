import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 85, color: "from-orange-500 to-red-500" },
  { name: "React", level: 80, color: "from-violet-500 to-indigo-500" },
  { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
  { name: "Spring Boot", level: 70, color: "from-green-400 to-emerald-600" },
  { name: "AWS & Cloud", level: 65, color: "from-blue-400 to-cyan-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
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
           className="text-center mb-20"
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-violet-400 mb-2">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Core <span className="text-orange-500 italic font-light">Skills</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-end mb-3">
                <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="text-sm font-mono text-gray-500 group-hover:text-violet-400 transition-colors duration-300">
                  {skill.level}%
                </span>
              </div>

              <div className="relative h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10 shadow-inner">
                {/* Glow Track */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <motion.div
                  className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
