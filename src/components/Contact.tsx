import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Interested in working together? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Let’s connect.
              </span>
            </h3>
            
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
              I'm currently looking for new opportunities and would love to hear about your project or just say hi.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:your-email@example.com"
                className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={20} />
                <span>Email Me</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/jiramate-hachai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-blue-400 font-black">in</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-24 pt-8 border-t border-gray-900/50 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} KZOOM_. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
