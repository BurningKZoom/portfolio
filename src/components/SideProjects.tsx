import { motion } from 'framer-motion';

const sideProjects = [
  {
    title: "8Bid: Animated Desktop Companion",
    client: "Personal Project",
    impact: "Productivity & Fun",
    description: "An interactive productivity timer designed to combat office syndrome by prompting users to 'bid' (stretch) at regular intervals, featuring animated companions via Document Picture-in-Picture.",
    problem: "Standard timers are boring and easily buried under other windows.",
    metrics: [
      { label: "Feature", value: "Doc PiP Support" },
      { label: "Tech", value: "React 19 + Vite" },
      { label: "Engagement", value: "Animated Sprites" }
    ],
    tags: ["Vibe Code", "React", "TypeScript", "PiP API", "Vite"],
    link: "↗",
    url: "https://BurningKZoom.github.io/8Bid/"
  },
  {
    title: "Kaiten Sushi Price Calculator",
    client: "Personal Project",
    impact: "Utility & Convenience",
    description: "A lightweight, mobile-responsive web utility for real-time cost tracking at conveyor belt sushi restaurants, supporting various restaurant-specific pricing models.",
    problem: "Keeping track of total spend at sushi restaurants with multiple plate tiers is mentally taxing.",
    metrics: [
      { label: "Performance", value: "Zero Dependencies" },
      { label: "UX", value: "Mobile-First" },
      { label: "Accuracy", value: "Preset Pricing" }
    ],
    tags: ["Vibe Code", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "↗",
    url: "https://burningkzoom.github.io/Kaiten-sushi-calc/"
  }
];

const SideProjects = () => {
  return (
    <section id="side-projects" className="py-24 bg-[#09090b] text-zinc-50 border-b border-zinc-800 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-24">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-blue-500 mb-6">Laboratory // Experiments</h2>
          <h3 className="text-5xl md:text-7xl font-mono font-extrabold uppercase tracking-tighter text-zinc-100">Side Projects.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-zinc-800">
          {sideProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-950/20 border-r border-b border-zinc-800 p-10 hover:bg-zinc-900/10 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-[9px] font-mono text-blue-500 uppercase tracking-widest block mb-2">{project.client}</span>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <h4 className="text-2xl font-mono font-bold uppercase tracking-tight group-hover:text-blue-500 transition-colors cursor-pointer">
                        {project.title}
                      </h4>
                    </a>
                  </div>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-3xl font-mono text-zinc-800 group-hover:text-zinc-50 transition-colors duration-500"
                  >
                    {project.link}
                  </a>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-10 flex-grow font-medium">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  {project.metrics.slice(0, 2).map((metric, i) => (
                    <div key={i} className="border-l border-zinc-800 pl-4">
                      <span className="text-[9px] font-mono uppercase text-zinc-600 block mb-1 tracking-widest">{metric.label}</span>
                      <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-tight">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`text-[8px] font-mono border px-2 py-1 uppercase tracking-[0.2em] transition-colors ${
                        tag === "Vibe Code" ? "border-blue-500/50 text-blue-500 bg-blue-500/5" : "border-zinc-800 text-zinc-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideProjects;
