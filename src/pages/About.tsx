import siddhiImg from "../assets/images/siddhi_clean.png";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid: Bio on Left, Frameless Portrait on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Playful Bio */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Title & Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-block bg-[#FF4FA3] text-[#050505] px-3 py-1 font-mono text-[10px] sm:text-[11px] uppercase font-bold tracking-widest rounded-sm shadow-[0_0_12px_rgba(255,79,163,0.4)]">
                  ABOUT ME
                </span>
                <span className="font-mono text-xs text-[#8A8A8A] uppercase tracking-wider">
                  ✦ CREATIVE DEV
                </span>
              </div>
              
              <h2 className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl text-[#F5F5F5] leading-tight">
                HEYY YOUU <span className="text-[#FF4FA3] font-sans font-bold">:)</span>
              </h2>

              <div className="font-serif italic text-base sm:text-lg text-[#A0A0A0] leading-relaxed space-y-4 max-w-2xl">
                <p>
                  Hi, I'm <strong className="text-[#F5F5F5] not-italic font-sans font-semibold">Siddhi Singh Rathor</strong>. Whether it is a serious project or a late-night experiment, I am usually designing, testing or building. I enjoy turning complex systems into experiences that feel clear, expressive and human.
                </p>
                <p>
                  I care about fast, accessible interfaces, reliable data tools and thoughtful micro-interactions. I follow unusual ideas until they become useful, real things.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Frameless Cutout Portrait with Organic Doodle Accents */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Ambient Pink Glow behind Portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#FF4FA3]/15 blur-[90px] rounded-full -z-10 pointer-events-none" />

            {/* Doodle "Hello!" floating title stamp */}
            <div className="absolute -top-8 right-6 sm:right-12 z-20 select-none pointer-events-none transform rotate-12">
              <span className="font-serif italic text-3xl sm:text-4xl text-[#FF4FA3] font-bold drop-shadow-[0_4px_12px_rgba(255,79,163,0.6)]">
                Hello! ✦
              </span>
            </div>

            {/* Floating Doodle Accents */}
            <div className="absolute top-4 left-6 z-20 text-[#FF4FA3]/80 animate-pulse text-2xl select-none">
              ★
            </div>
            <div className="absolute bottom-12 -right-2 z-20 text-[#FF4FA3]/60 text-3xl select-none rotate-45">
              ✦
            </div>

            {/* Pure Frameless Image Cutout */}
            <div className="relative max-w-[380px] w-full flex justify-center">
              <img
                src={siddhiImg}
                alt="Siddhi Singh Rathor Portrait"
                loading="eager"
                className="w-full h-auto object-contain filter contrast-[1.05] brightness-[1.02] hover:scale-[1.02] transition-transform duration-500 drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;