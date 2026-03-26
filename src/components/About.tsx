import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white border-b border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest text-blue-500 text-sm">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
              Driving decisions through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 underline decoration-2 underline-offset-8">scalable architecture</span>.
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-medium">
              <p>
                As a BI Analyst with a deep-seated passion for data infrastructure, I don't just build reports—I build ecosystems. My background in Power BI and Databricks has taught me that the most beautiful dashboard is worthless if the underlying data model isn't optimized for performance and reliability.
              </p>
              <p>
                Currently, I specialize in SQL optimization and complex data modeling, but my trajectory is aimed firmly at <span className="text-white font-bold border-b border-blue-500/50">Data Engineering</span>. I'm moving beyond the "what" of data to master the "how"—building the robust pipelines that make enterprise-scale analytics possible.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800"
          >
            <h3 className="text-xl font-mono text-blue-400 mb-8 tracking-wider uppercase">My Core Philosophy</h3>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-tight">Performance-First</h4>
                  <p className="text-sm text-gray-400">If a query takes more than 10 seconds, it's a technical debt. I prioritize DAX and SQL optimization in every build.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-tight">Impact &gt; Metrics</h4>
                  <p className="text-sm text-gray-400">Data is a tool for strategy. I focus on actionable insights that reduce operational costs or unlock new revenue.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-tight">Data Integrity</h4>
                  <p className="text-sm text-gray-400">Consistency is non-negotiable. I implement rigorous validation checks at the source to ensure absolute trust.</p>
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
