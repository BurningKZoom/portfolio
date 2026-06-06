import { useState } from 'react';
import { motion } from 'framer-motion';

const sideProjects = [
  {
    title: "Wanneelog",
    client: "Personal Product",
    impact: "Trip Execution Companion",
    description: "A mobile first trip execution app that turns imported Wanderlog plans into a practical day by day travel cockpit for next stops, accommodations, Google Maps handoff, and planned versus actual spending.",
    problem: "Travel plans are useful before the trip, but during the trip users need a cleaner execution view: what to do next, where to go, what it costs, and what still needs attention.",
    metrics: [
      { label: "Mode", value: "Local First MVP" },
      { label: "Import", value: "Wanderlog Links" },
      { label: "Budget", value: "Plan vs Actual" }
    ],
    tags: ["Product Design", "Next.js", "TypeScript", "Tailwind", "LocalStorage"],
    link: "↗",
    url: "https://wanneelog.vercel.app/"
  },
  {
    title: "Arise",
    client: "Personal Product",
    impact: "Discipline Progression System",
    description: "A local first discipline app inspired by Solo Leveling style progression, turning habits into rank based quests with scaling goals, Hunter XP, recovery mode, and promotion locks.",
    problem: "Habit trackers often feel flat after setup. Arise adds progression pressure, rank caps, recovery rules, and XP rewards so daily discipline feels more like a game system.",
    metrics: [
      { label: "Ranks", value: "F → S Quests" },
      { label: "Progression", value: "Hunter XP" },
      { label: "Recovery", value: "Miss Handling" }
    ],
    tags: ["Product Design", "React", "TypeScript", "Vite", "LocalStorage"],
    link: "↗",
    url: "https://arise-burningkzoom.vercel.app/"
  },
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

const sideProjectTabs = ["Wanneelog", "Arise", "8Bid", "Sushi Calc"];

const SideProjects = () => {
  const [activeSideProjectIndex, setActiveSideProjectIndex] = useState(0);
  const activeSideProject = sideProjects[activeSideProjectIndex];

  const goToNextSideProject = () => {
    setActiveSideProjectIndex((current) => (current + 1) % sideProjects.length);
  };

  const goToPreviousSideProject = () => {
    setActiveSideProjectIndex((current) =>
      current === 0 ? sideProjects.length - 1 : current - 1
    );
  };

  return (
    <section id="side-projects" className="py-24 bg-[#09090b] text-zinc-50 border-b border-zinc-800 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-24">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-blue-500 mb-6">Laboratory // Experiments</h2>
          <h3 className="text-5xl md:text-7xl font-mono font-extrabold uppercase tracking-tighter text-zinc-100">Side Projects.</h3>
        </div>

        <div
          role="tablist"
          aria-label="Side projects"
          className="mb-8 flex gap-2 overflow-x-auto border-y border-zinc-800 py-3 md:overflow-visible"
        >
          {sideProjects.map((project, idx) => (
            <button
              key={project.title}
              type="button"
              role="tab"
              aria-selected={activeSideProjectIndex === idx}
              aria-controls="side-project-panel"
              id={`side-project-tab-${idx}`}
              onClick={() => setActiveSideProjectIndex(idx)}
              className={`shrink-0 border px-4 py-3 text-left font-mono text-[10px] font-bold tracking-[0.16em] transition-colors md:min-w-40 ${
                activeSideProjectIndex === idx
                  ? "border-blue-500 bg-blue-500/10 text-blue-400"
                  : "border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-200"
              }`}
            >
              {sideProjectTabs[idx]}
            </button>
          ))}
        </div>

        <motion.div
          key={activeSideProject.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          role="tabpanel"
          id="side-project-panel"
          aria-labelledby={`side-project-tab-${activeSideProjectIndex}`}
          className="group relative bg-zinc-950/20 border border-zinc-800 p-8 transition-all duration-500 hover:bg-zinc-900/10 md:p-10"
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-start gap-8 mb-8">
              <div>
                <span className="text-[9px] font-mono text-blue-500 uppercase tracking-widest block mb-2">{activeSideProject.client}</span>
                <a href={activeSideProject.url} target="_blank" rel="noopener noreferrer">
                  <h4 className="text-2xl font-mono font-bold uppercase tracking-tight group-hover:text-blue-500 transition-colors cursor-pointer">
                    {activeSideProject.title}
                  </h4>
                </a>
              </div>
              <a 
                href={activeSideProject.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-3xl font-mono text-zinc-800 group-hover:text-zinc-50 transition-colors duration-500"
              >
                {activeSideProject.link}
              </a>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-3xl font-medium">
              {activeSideProject.description}
            </p>

            <div className="grid grid-cols-1 gap-0 border border-zinc-800 bg-zinc-950/30 mb-10 sm:grid-cols-3">
              {activeSideProject.metrics.map((metric, i) => (
                <div key={i} className={`p-5 ${i !== activeSideProject.metrics.length - 1 ? 'border-b border-zinc-800 sm:border-b-0 sm:border-r' : ''}`}>
                  <span className="text-[9px] font-mono uppercase text-zinc-600 block mb-1 tracking-widest">{metric.label}</span>
                  <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-tight">{metric.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {activeSideProject.tags.map(tag => (
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

        <div className="mt-8 flex flex-col gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            {String(activeSideProjectIndex + 1).padStart(2, "0")} / {String(sideProjects.length).padStart(2, "0")}
          </span>
          <div className="grid grid-cols-2 gap-3 sm:flex">
            <button
              type="button"
              onClick={goToPreviousSideProject}
              className="border border-zinc-800 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:border-blue-500 hover:text-blue-400"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={goToNextSideProject}
              className="border border-blue-500/60 bg-blue-500/10 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-blue-400 transition-colors hover:border-blue-400 hover:bg-blue-500/20"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideProjects;
