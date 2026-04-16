import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

const GlitchText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const chars = "!@#$%^&*()_+{}:<>?|1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  useEffect(() => {
    // Scramble logic
    const scramble = () => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(() => 
          text.split("").map((_, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
        );

        if (iteration >= text.length) clearInterval(interval);
        iteration += 1/2.5; // FAST iteration
      }, 45); // FAST interval
    };

    // Glitch trigger loop
    const triggerGlitch = () => {
      setIsGlitching(true);
      scramble();
      setTimeout(() => setIsGlitching(false), 300);
      
      const nextGlitch = Math.random() * 3000 + 1000;
      setTimeout(triggerGlitch, nextGlitch);
    };

    const initialTimeout = setTimeout(triggerGlitch, 1000);
    return () => clearTimeout(initialTimeout);
  }, [text]);

  return (
    <span className="relative inline-block group">
      {/* Ghost text to lock width and prevent 'from' from moving */}
      <span className="invisible select-none pointer-events-none" aria-hidden="true">
        {text}
      </span>

      {/* Sliced/Displaced Layers */}
      {isGlitching && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.span 
            className="absolute text-red-500 opacity-70 blur-[1px] whitespace-nowrap"
            animate={{ 
              x: [-5, 5, -2, 0],
              y: [1, -1, 0],
              clipPath: [
                "inset(10% 0 70% 0)",
                "inset(50% 0 10% 0)",
                "inset(30% 0 30% 0)",
                "inset(0 0 0 0)"
              ]
            }}
            transition={{ duration: 0.15, repeat: 2 }}
          >
            {displayText}
          </motion.span>
          <motion.span 
            className="absolute text-blue-500 opacity-70 blur-[1px] whitespace-nowrap"
            animate={{ 
              x: [5, -5, 2, 0],
              y: [-1, 1, 0],
              clipPath: [
                "inset(70% 0 10% 0)",
                "inset(10% 0 50% 0)",
                "inset(40% 0 20% 0)",
                "inset(0 0 0 0)"
              ]
            }}
            transition={{ duration: 0.15, repeat: 2 }}
          >
            {displayText}
          </motion.span>
        </div>
      )}

      {/* Main Scrambling Text - Centered over Ghost */}
      <span className={`absolute inset-0 flex items-center justify-center z-10 transition-colors duration-100 whitespace-nowrap ${isGlitching ? 'text-zinc-50' : 'text-zinc-700'}`}>
        {displayText}
      </span>
    </span>
  );
};

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#09090b] text-zinc-50 border-b border-zinc-800 px-6 overflow-hidden">
      <div className="max-w-5xl w-full text-center py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={child}
            className="flex items-center justify-center gap-3 mb-12"
          >
             <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
             <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
               "In God we trust // <span className="text-zinc-500">All others must bring data."</span> 
               <span className="text-zinc-700 ml-3">— W. Edwards Deming</span>
             </span>
          </motion.div>

          <motion.h1 
            className="text-7xl md:text-[8rem] font-black mb-12 leading-[0.85] tracking-tighter uppercase flex flex-wrap justify-center items-center gap-x-6 md:gap-x-10"
          >
            <motion.span variants={child} className="text-zinc-50">Clarity</motion.span>
            <span className="flex items-center gap-x-6 md:gap-x-10">
              <motion.span variants={child} className="text-zinc-50">from</motion.span>
              <motion.span
                variants={child}
                className="italic font-serif normal-case text-4xl md:text-7xl leading-none"
              >
                <GlitchText text="Chaos." />
              </motion.span>
            </span>
          </motion.h1>
          
          <motion.p 
            variants={child}
            className="text-xl md:text-2xl text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            I build high-performance data systems and Power BI ecosystems that transform raw datasets into high-impact strategic assets.
          </motion.p>

          <motion.div 
            variants={child}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <a 
              href="#featured"
              className="group relative px-12 py-5 bg-zinc-50 text-black font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-white transition-all rounded-none overflow-hidden"
            >
              <span className="relative z-10">Featured Work</span>
              <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-[95%] transition-transform duration-300" />
            </a>
            <a 
              href="#stack"
              className="px-12 py-5 border border-zinc-800 text-zinc-50 font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-zinc-900 transition-all rounded-none"
            >
              Core Capabilities
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
