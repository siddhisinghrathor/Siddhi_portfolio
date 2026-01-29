
const projects = [
  {
    title: "GlobalEduConnect",
    desc: "Full stack education platform using Java & React",
  },
  {
    title: "Fall Risk Detection",
    desc: "ML-based fall detection system",
  },
  {
    title: "Replica Payment",
    desc: "UI clone of a modern payment dashboard",
  },
];

const Projects = () => {
  return (
    <section className="relative h-screen ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 right-1/4 
     
          w-96 h-96 bg-orange-500/30 blur-[120px]"
        />
        <div
          className="absolute top-1/2 right-1/5
          -translate-x-1/2 -translate-y-1/2 
          w-96 h-96 bg-violet-500/30 blur-[120px]"
        />
          {/* <div
          className="absolute bottom-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-96 h-96 bg-violet-500/30 blur-[120px]"
        /> */}
          {/* <div
          className="absolute  
         
          w-96 h-96 bg-violet-500/30 blur-[120px]"
        /> */}
      </div>

        <h2 className="text-3xl md:text-4xl font-bold text-violet-600 mb-12">
                Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl 
                bg-white/5 border border-white/10 
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl hover:bg-orange-600/10 hover:text-white"
            >
              <h3 className="text-xl text-orange-600 font-semibold">
                {p.title}
              </h3>

              <p className="text-gray-400 mt-4 text-sm">
                {p.desc}
              </p>

              <span className="inline-block mt-6 text-sm text-violet-400 
                opacity-0 group-hover:opacity-100 transition">
                View Project →
              </span>
            </div>
          ))}
        </div>
        </div>
       
      
    </section>
  );
};

export default Projects;
