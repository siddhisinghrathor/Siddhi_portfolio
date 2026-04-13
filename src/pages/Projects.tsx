import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import ProjectModal, { type ProjectType } from "../components/ui/ProjectModal";

const projects: ProjectType[] = [
  {
    title: "Vardhishnu NGO Platform",
    desc: "A comprehensive digital transformation platform built for Vardhishnu NGO to operate community outreach programs seamlessly.",
    tags: ["React", "Express Hub", "MongoDB", "Tailwind CSS"],
    problem: "Vardhishnu relied on paper trails and disconnected systems to manage widespread volunteer orientation data and charity outreaches.",
    solution: "Designed and deployed a scalable MERN stack web app establishing a digital ecosystem for volunteer logging and transparent donation routing.",
    features: ["Digital Volunteer Onboarding", "Real-time Event Management", "Donation Integration Hub", "Custom Admin Dashboard"],
    githubLink: "https://github.com/raunak234362/Vardhishnu",
    liveLink: "https://vardhishnuorg.vercel.app/",
    enableImageScroll: true,
    flow: [
      { step: "01", title: "Outreach", desc: "Volunteers create secure accounts and register for specific impact events." },
      { step: "02", title: "Action", desc: "Data is routed to the NGO dashboard giving administrators oversight in real-time." },
      { step: "03", title: "Impact", desc: "Donors directly track organizational milestones and securely allocate funds." }
    ]
  },
  {
    title: "Fall Risk Detection",
    desc: "ML-based fall detection system utilizing sensor data analysis.",
    tags: ["Python", "Machine Learning", "Data Science", "TensorFlow"],
    problem: "Elderly care facilities face delayed response times during fall incidents because traditional monitoring is largely passive and disjointed.",
    solution: "Implemented an active machine learning model deployed on edge devices to parse accelerometer data and predict fall incidents in milliseconds.",
    features: ["Sub-second fall detection accuracy", "Edge-device deployment", "Automated alerts to caregivers", "Longitudinal risk analytics"],
    flow: [
      { step: "01", title: "Capture", desc: "IoT sensors capture continuous 3-axis movement data streams." },
      { step: "02", title: "Process", desc: "ML model classifies anomalies against the trained baseline immediately." },
      { step: "03", title: "Alert", desc: "High-priority webhook events are dispatched to nursing stations." }
    ]
  },
  {
    title: "Replica Payment",
    desc: "UI clone of a modern payment dashboard with complex state.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Redux"],
    problem: "Payment gateway interfaces are notoriously rigid, making it difficult for designers to experiment with micro-interactions and smooth flows.",
    solution: "Built a fully interactive, pixel-perfect clone of an enterprise payment dashboard demonstrating complex state management and fluid animations.",
    features: ["Fluid micro-interactions", "Robust Redux state management", "Dark/Light mode native support", "Responsive adaptive layout"],
    flow: [
      { step: "01", title: "Initiate", desc: "User triggers payment intent and dynamic form unlocks smoothly." },
      { step: "02", title: "Validate", desc: "Client-side formatting and immediate validation feedback loops." },
      { step: "03", title: "Finalize", desc: "Success animation transitions seamlessly into the receipt view." }
    ]
  },
];

const TiltCard = ({ project, index, onClick }: { project: ProjectType; index: number; onClick: () => void }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    // Disable heavy 3D effect on mobile
    if (window.innerWidth < 768) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const rX = (y / rect.height - 0.5) * -15;
    const rY = (x / rect.width - 0.5) * 15;

    rotateX.set(rX);
    rotateY.set(rY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group relative h-[420px] rounded-[1.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all hover:-translate-y-2 duration-500 cursor-pointer hover-target shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)] flex flex-col overflow-hidden"
    >
      {/* Magic Hover Border & Inner Light (hidden on mobile via group-hover logic normally, but opacity 0 initially) */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block"
        style={{
          background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.4), transparent 60%)`,
        }}
      />
      
      {/* Internal Reflection Glow */}
      <motion.div 
        className="absolute inset-[1px] rounded-[1.4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen pointer-events-none hidden md:block"
        style={{
          background: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, rgba(249, 115, 22, 0.15), transparent 80%)`,
        }}
      />

      <div 
        style={{ transform: "translateZ(40px)" }} 
        className="p-8 flex flex-col h-full relative z-10"
      >
        {/* Placeholder for project image mock/gradient */}
        <div className="w-full h-32 shrink-0 mb-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-orange-500/5 border border-white/5 relative overflow-hidden flex items-center justify-center pointer-events-none">
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+PC9zdmc+')] opacity-20" />
             <span className="text-white/30 font-mono text-xs uppercase tracking-[0.2em] group-hover:text-violet-300 transition-colors duration-300">Preview Layout</span>
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-2xl text-white font-bold mb-2 tracking-tight group-hover:text-orange-400 transition-colors pointer-events-none">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed font-light pointer-events-none mb-4">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto mb-6 pointer-events-none">
            {project.tags.slice(0, 3).map((tag: string, i: number) => (
              <span key={i} className="text-[10px] px-3 py-1 rounded-full bg-white/5 text-violet-300 border border-white/10 uppercase tracking-widest font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center text-sm font-semibold text-violet-400 pointer-events-none shrink-0 group-hover:text-orange-400 transition-colors">
          View Project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] mix-blend-screen rounded-full" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] mix-blend-screen rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-violet-400 mb-2">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16 text-white">
            Selected <span className="text-orange-500 italic font-light">Works</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((p, i) => (
            <TiltCard key={i} project={p} index={i} onClick={() => setSelectedProject(p)} />
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
