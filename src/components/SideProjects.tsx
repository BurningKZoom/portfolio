
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
    <section id="side-projects" className="py-24 bg-[#0a0a0a] text-zinc-50 border-b border-zinc-800 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-20">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">Laboratory & Experiments</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Side Projects.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sideProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900/20 border border-zinc-800 p-8 hover:bg-zinc-900/40 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest block mb-1">{project.client}</span>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <h4 className="text-2xl font-bold uppercase tracking-tight group-hover:text-blue-500 transition-colors cursor-pointer">
                        {project.title}
                      </h4>
                    </a>
                  </div>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl text-zinc-700 group-hover:text-zinc-50 transition-colors duration-500"
                  >
                    {project.link}
                  </a>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {project.metrics.slice(0, 2).map((metric, i) => (
                    <div key={i} className="border-l border-zinc-800 pl-3">
                      <span className="text-[9px] font-mono uppercase text-zinc-500 block">{metric.label}</span>
                      <span className="text-xs font-bold text-zinc-300 uppercase">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`text-[8px] font-mono border px-2 py-1 uppercase tracking-wider ${
                        tag === "Vibe Code" ? "border-blue-500/50 text-blue-400 bg-blue-500/5" : "border-zinc-800 text-zinc-500"
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
