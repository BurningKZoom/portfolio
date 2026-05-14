import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#09090b]/95 backdrop-blur-md border-zinc-800 py-4' : 'bg-transparent border-transparent py-8'}`}>
      <div className="container mx-auto px-6 max-w-5xl flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="text-sm font-mono font-black tracking-tighter text-zinc-100">
            KZoom<span className="text-blue-500">_</span>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Live_v2.0</span>
          </div>
        </div>

        <div className="hidden md:flex gap-10 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-500">
          <a href="#about" className="hover:text-zinc-100 transition-colors">/About</a>
          <a href="#featured" className="hover:text-zinc-100 transition-colors">/Projects</a>
          <a href="#stack" className="hover:text-zinc-100 transition-colors">/Capabilities</a>
          <a href="#contact" className="text-blue-500 hover:text-zinc-100 transition-colors">/Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
