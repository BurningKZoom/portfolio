import { motion } from 'framer-motion';
import { Target, Zap, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#09090b] text-white border-b border-zinc-800 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-blue-500 mb-8">About // Strategy</h2>
            <h3 className="text-4xl md:text-6xl font-mono font-extrabold mb-10 leading-[0.9] text-zinc-100 uppercase tracking-tighter">
              Decision <br /> Infrastructure.
            </h3>
            <div className="space-y-8 text-zinc-400 text-lg leading-relaxed font-medium max-w-xl">
              <p>
                As a BI Analyst and Data Infrastructure specialist, I build the ecosystems that power enterprise decisions. I don't just build dashboards—I design the underlying architecture for performance and absolute reliability.
              </p>
              <p>
                Specializing in SQL optimization and complex data modeling, I focus on the "how" of data: building the robust pipelines that make strategic analytics possible at scale.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950/30 border border-zinc-800 p-10 relative"
          >
            {/* Structural Accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-500/30" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-blue-500/30" />

            <h3 className="text-xs font-mono text-zinc-500 mb-12 tracking-[0.3em] uppercase">Core_Philosophies.exe</h3>
            
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-12 h-12 border border-zinc-800 flex items-center justify-center text-blue-500 group-hover:border-blue-500 transition-colors">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-mono font-bold mb-2 uppercase tracking-widest text-zinc-100">Performance-First</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-mono">If a query takes more than 10 seconds, it's a technical debt. I prioritize DAX and SQL optimization in every build.</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-12 h-12 border border-zinc-800 flex items-center justify-center text-blue-500 group-hover:border-blue-500 transition-colors">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-mono font-bold mb-2 uppercase tracking-widest text-zinc-100">Impact over Metrics</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-mono">Data is a strategic tool. I focus on actionable insights that reduce costs or unlock new revenue streams.</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-12 h-12 border border-zinc-800 flex items-center justify-center text-blue-500 group-hover:border-blue-500 transition-colors">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-mono font-bold mb-2 uppercase tracking-widest text-zinc-100">Data Integrity</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-mono">Consistency is non-negotiable. I implement rigorous validation at the source to ensure absolute trust.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
