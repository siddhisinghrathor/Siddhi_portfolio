import { motion } from "framer-motion";
import { Trophy, Users, Code, FileBadge } from "lucide-react";

const milestones = [
  {
    icon: <Trophy className="w-5 h-5 text-orange-400" />,
    title: "NIT Trichy Hackathon Runner-Up",
    date: "2023",
    desc: "Secured 2nd place out of 100+ competing teams by developing a scalable React architecture under extreme time constraints."
  },
  {
    icon: <Users className="w-5 h-5 text-violet-400" />,
    title: "ISTE Secretary",
    date: "2023 - Present",
    desc: "Leading technical initiatives, organizing mass-scale workshops, and bridging the gap between students and modern tech stacks."
  },
  {
    icon: <Code className="w-5 h-5 text-emerald-400" />,
    title: "Solved 600+ DSA Problems",
    date: "Continuous",
    desc: "Rigorous focus on algorithmic optimization and data structures across multiple platforms to ensure highly performant logic."
  },
  {
    icon: <FileBadge className="w-5 h-5 text-blue-400" />,
    title: "Technical Certifications",
    date: "2022 - Present",
    desc: "Comprehensive training verified in advanced Java interoperability, RESTful services, and robust frontend deployment architectures."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 md:py-48 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-600/5 blur-[150px] mix-blend-screen rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="text-center mb-20"
        >
          
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Achievements
          </h3>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 gap-12 flex flex-col">
          {milestones.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-1 p-2 rounded-full border border-white/10 bg-[#0a0a0a] group-hover:bg-white/5 transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                {item.icon}
              </div>

              {/* Content Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-500 hover:shadow-[0_10px_30px_rgba(139,92,246,0.05)] hover:border-white/10 hover:bg-white/[0.04]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">{item.title}</h4>
                    <span className="text-xs font-mono text-orange-400/80 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 self-start md:self-auto">{item.date}</span>
                </div>
                <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
