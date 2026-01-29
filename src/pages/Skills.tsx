import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 85 },
  { name: "React", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "Spring Boot", level: 70 },
  { name: "AWS & Cloud", level: 65 },
];

const Skills = () => {
  return (
    <section className="">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="space-y-8">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-400">
                  {skill.level}%
                </span>
              </div>

              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-violet-600/30"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
