
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
    <section id="about" className="py-24 md:py-32 relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Large Illustration Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative border border-white/10 bg-[#0a0a0a]/40 p-2 aspect-[3/4] w-full max-w-[400px] mx-auto flex flex-col justify-between group">
              
              {/* Image Placeholder Area */}
              <div className="w-full h-[90%] bg-[#080808] border border-white/5 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                {/* Blueprint lines on placeholder */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,79,163,0.02)_10%,transparent_90%)] pointer-events-none" />
                <span className="font-mono text-[9px] text-[#8A8A8A] uppercase tracking-wider mb-2">
                  [ ABOUT ILLUSTRATION PLACEHOLDER ]
                </span>
                <span className="font-mono text-[7px] text-[#8A8A8A]/50 uppercase">
                  REPLACE WITH ARTWORK
                </span>
              </div>

              {/* Quote caption stamp */}
              <div className="p-3 border-t border-white/10 font-mono text-[8px] sm:text-[9px] text-[#8A8A8A] uppercase tracking-wider leading-relaxed">
                Remember, every model is a human opinion embedded in mathematics.
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Bio details, Experience, and Skills */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Bio Title & Info */}
            <div className="space-y-4">
              <span className="inline-block bg-[#FF4FA3] text-[#050505] px-2 py-0.5 font-mono text-[9px] uppercase font-bold tracking-widest">
                ABOUT ME
              </span>
              
              <h2 className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl text-[#F5F5F5] leading-tight">
                Hello! I'm <span className="text-[#FF4FA3]">Siddhi Singh Rathor.</span>
              </h2>

              <div className="font-serif italic text-sm sm:text-base text-[#8A8A8A] leading-relaxed space-y-4 max-w-xl">
                <p>
                  Whether it is a serious project or a late-night experiment, I am usually designing, testing or building. I enjoy turning complex systems into experiences that feel clear, expressive and human.
                </p>
                <p>
                  I care about fast, accessible interfaces, reliable data tools and thoughtful micro-interactions. I follow unusual ideas until they become useful, real things.
                </p>
              </div>
            </div>

            {/* Experience and Skills Subgrid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
              
              {/* Experience list */}
              <div className="space-y-6">
                <h3 className="font-serif italic font-normal text-xl text-[#F5F5F5] border-b border-white/5 pb-2">
                  Experience
                </h3>
                <div className="space-y-4">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="grid grid-cols-4 gap-2 items-start">
                      <span className="col-span-1 font-mono text-[10px] text-[#FF4FA3] font-bold">
                        {exp.period}
                      </span>
                      <div className="col-span-3 space-y-1">
                        <h4 className="font-mono text-[10px] text-[#F5F5F5] uppercase tracking-wider font-bold">
                          {exp.title}
                        </h4>
                        <p className="font-serif italic text-[11px] text-[#8A8A8A] leading-normal">
                          {exp.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills list grid */}
              <div className="space-y-6">
                <h3 className="font-serif italic font-normal text-xl text-[#F5F5F5] border-b border-white/5 pb-2">
                  Skills
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {skillList.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-mono text-[10px] text-[#8A8A8A] uppercase">
                      <span className="w-1.5 h-1.5 bg-[#FF4FA3] rounded-full opacity-60" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: 3 Polaroid Image Boxes */}
        <div className="mt-20 border-t border-white/5 pt-16">
          <div className="text-center mb-10">
            <span className="font-mono text-[8px] text-[#8A8A8A] tracking-widest uppercase">
              EVERY FRAME IS ART.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            {/* Polaroid 1 */}
            <div className="bg-[#0a0a0a]/60 border border-white/10 p-4 pb-8 shadow-md relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/5 backdrop-blur-sm -rotate-2 border border-white/5" />
              <div className="bg-[#050505] border border-white/5 aspect-[4/3] flex flex-col items-center justify-center text-[9px] font-mono text-[#8A8A8A]/40 mb-3">
                [ FRAME 01 ]
              </div>
              <div className="font-mono text-[7px] text-center text-[#8A8A8A]/70 uppercase tracking-widest">
                FIG. 01 / SNAPSHOT
              </div>
            </div>

            {/* Polaroid 2 */}
            <div className="bg-[#0a0a0a]/60 border border-white/10 p-4 pb-8 shadow-md relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/5 backdrop-blur-sm rotate-1 border border-white/5" />
              <div className="bg-[#050505] border border-white/5 aspect-[4/3] flex flex-col items-center justify-center text-[9px] font-mono text-[#8A8A8A]/40 mb-3">
                [ FRAME 02 ]
              </div>
              <div className="font-mono text-[7px] text-center text-[#8A8A8A]/70 uppercase tracking-widest">
                FIG. 02 / SNAPSHOT
              </div>
            </div>

            {/* Polaroid 3 */}
            <div className="bg-[#0a0a0a]/60 border border-white/10 p-4 pb-8 shadow-md relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/5 backdrop-blur-sm -rotate-1 border border-white/5" />
              <div className="bg-[#050505] border border-white/5 aspect-[4/3] flex flex-col items-center justify-center text-[9px] font-mono text-[#8A8A8A]/40 mb-3">
                [ FRAME 03 ]
              </div>
              <div className="font-mono text-[7px] text-center text-[#8A8A8A]/70 uppercase tracking-widest">
                FIG. 03 / SNAPSHOT
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;