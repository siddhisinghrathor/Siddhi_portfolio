import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // reset after 3s
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-violet-400 mb-2">Get in touch</h2>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="text-orange-500 italic font-light">Build</span> Together
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-lg mb-12">
            Have an opportunity, idea, or just want to connect?
            <br/>I’m always open to conversations.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 max-w-md mx-auto relative"
        >
          {/* Subtle form background glow */}
          <div className="absolute inset-0 bg-violet-600/5 blur-3xl -z-10 rounded-full" />

          <div className="relative group">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-6 py-4 rounded-xl 
                bg-white/[0.03] border border-white/10 text-white placeholder-gray-500
                focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05]
                transition-all duration-300 shadow-[0_0_0_transparent] focus:shadow-[0_0_20px_rgba(139,92,246,0.15)] hover-target"
            />
          </div>

          <div className="relative group">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-6 py-4 rounded-xl 
                bg-white/[0.03] border border-white/10 text-white placeholder-gray-500
                focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05]
                transition-all duration-300 shadow-[0_0_0_transparent] focus:shadow-[0_0_20px_rgba(139,92,246,0.15)] hover-target"
            />
          </div>

          <div className="relative group">
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-6 py-4 rounded-xl resize-none
                bg-white/[0.03] border border-white/10 text-white placeholder-gray-500
                focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05]
                transition-all duration-300 shadow-[0_0_0_transparent] focus:shadow-[0_0_20px_rgba(139,92,246,0.15)] hover-target"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitted}
            className={`w-full py-4 rounded-xl font-medium tracking-wide transition-all duration-300 relative overflow-hidden group hover-target ${
              isSubmitted ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-violet-500"
            }`}
          >
             <span className="relative z-10 flex items-center justify-center gap-2">
               {isSubmitted ? (
                 <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>Message Sent Successfully!</motion.span>
               ) : (
                 "Send Message"
               )}
             </span>
             {!isSubmitted && (
               <div className="absolute inset-0 bg-violet-600 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></div>
             )}
          </button>

        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
