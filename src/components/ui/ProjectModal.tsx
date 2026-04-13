import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import React, { useEffect } from "react";

export type ProjectType = {
  title: string;
  desc: string;
  tags: string[];
  problem: string;
  solution: string;
  features: string[];
  flow: { step: string; title: string; desc: string }[];
};

type ProjectModalProps = {
  project: ProjectType | null;
  onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <React.Fragment key="project-modal">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(139,92,246,0.15)] pointer-events-auto no-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors z-50 hover-target"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Background Ambient Glows inside modal */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

              <div className="p-8 md:p-12 relative z-10">
                {/* 1. OVERVIEW section */}
                <div className="mb-16">
                  <motion.h4 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="text-violet-400 text-sm tracking-[0.2em] uppercase font-semibold mb-3"
                  >
                    Case Study
                  </motion.h4>
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 font-light max-w-3xl leading-relaxed"
                  >
                    {project.desc}
                  </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                    className="p-8 rounded-2xl bg-white/[0.02] border border-white/5"
                  >
                    <h3 className="text-xl font-medium text-orange-400 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                      The Problem
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{project.problem}</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                    className="p-8 rounded-2xl bg-white/[0.02] border border-white/5"
                  >
                    <h3 className="text-xl font-medium text-violet-400 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                      The Solution
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{project.solution}</p>
                  </motion.div>
                </div>

                {/* 2. VISUAL FLOW */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-white mb-8">Process & Architecture</h3>
                  <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x">
                    {project.flow.map((step, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + (idx * 0.1) }}
                        className="min-w-[280px] flex-1 p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 shrink-0 snap-start group hover:border-violet-500/30 transition-colors"
                      >
                        <span className="text-5xl font-black text-white/5 mb-4 block group-hover:text-white/10 transition-colors">
                          {step.step}
                        </span>
                        <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 3. TECH STACK */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-white mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, idx) => (
                      <motion.span 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + (idx * 0.05) }}
                        className="px-4 py-2 rounded-full bg-violet-600/10 text-violet-300 border border-violet-500/20 font-medium text-sm hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* 4. FEATURES & HIGHLIGHTS */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Key Highlights</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + (idx * 0.05) }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap gap-4 justify-end">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/30 transition-colors hover-target group">
                        Source Code
                    </a>
                    <a href="https://google.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors hover-target group shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Live Preview <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
              </div>
            </motion.div>
          </div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
