
const About = () => {
  const experiences = [
    {
      period: "2023 - 25",
      title: "ISTE Technical Secretary",
      desc: "Organizing mass technical workshops and building college campaign sites."
    },
    {
      period: "2023",
      title: "Hackathon Runner-Up",
      desc: "Designed React workflows in NIT Trichy tech hackathon."
    },
    {
      period: "NOW",
      title: "Freelancing & Open Source",
      desc: "Developing web experiences using React, TypeScript & Node."
    }
  ];

  const skillList = [
    "React", "TypeScript", "JavaScript", "Java",
    "Next.js", "Tailwind CSS", "CSS / Sass", "Node.js",
    "Spring Boot", "MongoDB", "SQL", "Electron"
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid: About Me on Left, Experience & Skills on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: About Me Bio */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block bg-[#FF4FA3] text-[#050505] px-2.5 py-1 font-mono text-[10px] sm:text-[11px] uppercase font-bold tracking-widest rounded-sm shadow-[0_0_12px_rgba(255,79,163,0.3)]">
              ABOUT ME
            </span>
            
            <h2 className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl text-[#F5F5F5] leading-tight">
              Hello! I'm <span className="text-[#FF4FA3]">Siddhi Singh Rathor.</span>
            </h2>

            <div className="font-serif italic text-base sm:text-lg text-[#8A8A8A] leading-relaxed space-y-4">
              <p>
                Whether it is a serious project or a late-night experiment, I am usually designing, testing or building. I enjoy turning complex systems into experiences that feel clear, expressive and human.
              </p>
              <p>
                I care about fast, accessible interfaces, reliable data tools and thoughtful micro-interactions. I follow unusual ideas until they become useful, real things.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Experience and Skills Subgrid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Experience list */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-[#FF4FA3] text-[#050505] px-2.5 py-1 font-mono text-[10px] sm:text-[11px] uppercase font-bold tracking-widest rounded-sm shadow-[0_0_12px_rgba(255,79,163,0.3)]">
                  EXPERIENCE
                </span>
              </div>

              <div className="space-y-4">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#FF4FA3]/30 transition-all duration-300">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-mono text-xs sm:text-sm text-[#F5F5F5] uppercase tracking-wider font-bold">
                        {exp.title}
                      </h4>
                      <span className="font-mono text-xs text-[#FF4FA3] font-bold px-2 py-0.5 rounded bg-[#FF4FA3]/10 shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-serif italic text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills list grid */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-[#FF4FA3] text-[#050505] px-2.5 py-1 font-mono text-[10px] sm:text-[11px] uppercase font-bold tracking-widest rounded-sm shadow-[0_0_12px_rgba(255,79,163,0.3)]">
                  SKILLS
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {skillList.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#FF4FA3]/40 hover:bg-white/[0.05] transition-all duration-300 group">
                    <span className="w-2 h-2 rounded-full bg-[#FF4FA3] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_6px_#FF4FA3]" />
                    <span className="font-mono text-xs sm:text-sm text-[#E0E0E0] uppercase font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;