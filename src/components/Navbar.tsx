import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 border-b ${scrolled ? 'bg-[#09090b]/90 backdrop-blur-md border-zinc-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-sm font-black tracking-tighter uppercase">KZOOM<span className="text-blue-500">_</span></div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
          <a href="#featured" className="hover:text-white transition-colors">Featured</a>
          <a href="#stack" className="hover:text-white transition-colors">Stack</a>
          <a href="#" className="hover:text-white transition-colors">Experience</a>
          <a href="mailto:your-email@example.com" className="text-zinc-50 hover:text-blue-500 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
