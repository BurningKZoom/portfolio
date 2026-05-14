import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

const GlitchText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const chars = "!@#$%^&*()_+{}:<>?|1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  useEffect(() => {
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
        iteration += 1/2.5;
      }, 45);
    };

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
    <span className="relative inline-block">
      <span className="invisible select-none pointer-events-none" aria-hidden="true">
        {text}
      </span>

      {isGlitching && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Red/Cyan Offset (RGB Split) */}
          <motion.span 
            className="absolute text-red-500 opacity-60 blur-[2px] whitespace-nowrap scale-110"
            animate={{ 
              x: [-4, 4, -3, 3, 0],
              y: [2, -2, 1, -1, 0],
              filter: ["blur(2px)", "blur(4px)", "blur(1px)"],
              clipPath: [
                "inset(10% 0 70% 0)",
                "inset(80% 0 5% 0)",
                "inset(30% 0 40% 0)",
                "inset(0 0 0 0)"
              ]
            }}
            transition={{ duration: 0.1, repeat: 3 }}
          >
            {displayText}
          </motion.span>
          <motion.span 
            className="absolute text-cyan-500 opacity-60 blur-[2px] whitespace-nowrap scale-110"
            animate={{ 
              x: [4, -4, 3, -3, 0],
              y: [-2, 2, -1, 1, 0],
              filter: ["blur(2px)", "blur(4px)", "blur(1px)"],
              clipPath: [
                "inset(70% 0 10% 0)",
                "inset(5% 0 80% 0)",
                "inset(40% 0 30% 0)",
                "inset(0 0 0 0)"
              ]
            }}
            transition={{ duration: 0.1, repeat: 3 }}
          >
            {displayText}
          </motion.span>

          {/* Fuzzy/Grainy Overlay */}
          <motion.span 
            className="absolute text-zinc-100 opacity-40 blur-[6px] whitespace-nowrap scale-105"
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1.05, 1.1, 1.05],
            }}
            transition={{ duration: 0.05, repeat: 5 }}
          >
            {displayText}
          </motion.span>
        </div>
      )}

      <span className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-75 whitespace-nowrap ${isGlitching ? 'text-blue-400 brightness-150 skew-x-12' : 'text-zinc-100'}`}>
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center bg-[#09090b] pt-20 border-b border-zinc-800 overflow-hidden">
      {/* Structural Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fafafa 1px, transparent 1px), linear-gradient(90deg, #fafafa 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 max-w-5xl z-10 text-center"
      >
        <motion.div variants={item} className="mb-8">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500">
            "In God we trust // <span className="text-zinc-600">All others must bring data."</span> 
            <span className="text-zinc-700 ml-3">— W. Edwards Deming</span>
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-6xl md:text-9xl font-mono font-extrabold uppercase tracking-tighter leading-[0.85] text-zinc-100 mb-10">
          Clarity From <br />
          <GlitchText text="Chaos." />
        </motion.h1>

        <motion.p variants={item} className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
          I build high-performance data systems and Power BI ecosystems that transform raw datasets into high-impact strategic assets.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#featured" className="group relative bg-zinc-100 text-zinc-950 font-mono font-bold px-10 py-5 uppercase tracking-widest text-[11px] transition-all hover:bg-blue-500 hover:text-white">
            View Case Studies
          </a>
          <a href="#contact" className="group border border-zinc-800 text-zinc-100 font-mono font-bold px-10 py-5 uppercase tracking-widest text-[11px] transition-all hover:border-zinc-100">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Hero Metadata/Metrics Strip */}
      <div className="absolute bottom-0 w-full border-t border-zinc-800 py-8 bg-zinc-950/50 backdrop-blur-sm hidden md:block">
        <div className="container mx-auto px-6 max-w-5xl flex justify-between items-center">
          <div className="flex gap-16">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-600 mb-1">Status</span>
              <span className="text-[10px] font-mono text-zinc-300">AVAILABLE_FOR_PROJECTS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-600 mb-1">Location</span>
              <span className="text-[10px] font-mono text-zinc-300">REMOTE / GLOBAL</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-600 mb-1">Stack</span>
              <span className="text-[10px] font-mono text-zinc-300">SQL // BI // DATA_INFRA</span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
            System_v2.0.26 // [RE-DESIGNED]
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
