import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#09090b] border-t border-zinc-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-blue-500 mb-8">Contact // Connection</h2>
            <h3 className="text-5xl md:text-7xl font-mono font-extrabold mb-10 leading-[0.9] text-zinc-100 uppercase tracking-tighter">
              Let's <br /> Connect.
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium max-w-md">
              I'm always open to discussing new projects, technical strategy, or potential opportunities in the data space.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-0 border border-zinc-800 bg-zinc-950/20"
          >
            <a 
              href="mailto:hjiramate@gmail.com"
              className="group flex items-center justify-between p-10 border-b border-zinc-800 hover:bg-zinc-100 hover:text-zinc-950 transition-all"
            >
              <div className="flex items-center gap-6">
                <Mail size={24} className="text-blue-500 group-hover:text-zinc-950 transition-colors" />
                <span className="text-xl font-mono font-bold uppercase tracking-tight">Email Me</span>
              </div>
              <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/jiramate-hachai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-10 hover:bg-zinc-100 hover:text-zinc-950 transition-all"
            >
              <div className="flex items-center gap-6">
                <span className="text-2xl font-mono font-black text-blue-500 group-hover:text-zinc-950 transition-colors">IN</span>
                <span className="text-xl font-mono font-bold uppercase tracking-tight">LinkedIn</span>
              </div>
              <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-32 py-12 border-t border-zinc-800 bg-zinc-950/50">
        <div className="container mx-auto px-6 max-w-5xl flex justify-between items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500">
            © {new Date().getFullYear()} KZoom_. ALL_RIGHTS_RESERVED.
          </p>
          <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
            Built_with_React // Tailwind_v4 // Framer_Motion
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
