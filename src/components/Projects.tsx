
import { motion } from 'framer-motion';

const projects = [
  {
    title: "OPEX Security & Performance Redesign",
    client: "Financial Operations",
    impact: "85% Faster Load Time",
    description: "Reduced report latency from 20s to 3s while securing sensitive financial data through a scalable SQL-driven security bridge and optimized semantic models.",
    problem: "Legacy security was non-scalable and inconsistent. Visuals were suffering from ~20s load times.",
    metrics: [
      { label: "Performance", value: "20s → 3s Load" },
      { label: "Security", value: "Dynamic RLS" },
      { label: "Governance", value: "Standardized" }
    ],
    tags: ["SQL", "RLS", "DAX", "Performance Tuning"],
    link: "↗"
  },
  {
    title: "Inventory WIP Aging Analytics",
    client: "Supply Chain & Ops",
    impact: "Working Capital Optimization",
    description: "Optimized working capital by integrating disconnected inventory and production data to identify and reduce slow-moving materials across 120+ day aging buckets.",
    problem: "Disconnected data made it impossible to identify slow-moving materials versus items actively tied to production.",
    metrics: [
      { label: "Granularity", value: "Product/Site/Whse" },
      { label: "Aging", value: "0 - 120+ Days" },
      { label: "Impact", value: "Reduced Holding Cost" }
    ],
    tags: ["Data Modeling", "Inventory Control", "WIP Analysis", "Wrangling"],
    link: "↗"
  },
  {
    title: "Manufacturing KPI Ecosystem",
    client: "Production Ops",
    impact: "Single Source of Truth",
    description: "Accelerated executive decision-making by consolidating scattered cost and productivity metrics into a centralized, real-time performance model.",
    problem: "Scattered metrics were causing slow response times and inconsistent reporting across departments.",
    metrics: [
      { label: "Latency", value: "Real-Time Tracking" },
      { label: "Decision Speed", value: "Significant Boost" },
      { label: "Fragmentation", value: "Eliminated" }
    ],
    tags: ["KPI Design", "BPR", "Process Mapping", "DAX"],
    link: "↗"
  },
  {
    title: "Real-Time Call Center Analytics",
    client: "Ops & Marketing",
    impact: "20% Volume Increase",
    description: "Increased service capacity by 20% through real-time Grafana dashboards that optimized resource allocation and marketing attribution accuracy.",
    problem: "Operations lacked visibility into real-time volume, leading to inefficient resource allocation.",
    metrics: [
      { label: "Engagement", value: "+20% Volume" },
      { label: "Efficiency", value: "20-50% Boost" },
      { label: "Latency", value: "< 1s Update" }
    ],
    tags: ["Grafana", "Real-Time", "Marketing BI", "SQL"],
    link: "↗"
  }
];

const Projects = () => {
  return (
    <section id="featured" className="py-24 bg-[#09090b] text-zinc-50 border-b border-zinc-800 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-20">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-4">Featured Case Studies</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Strategic Impact.</h3>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative border-t border-zinc-800 py-16 px-6 -mx-6 group-hover:bg-zinc-900/30 transition-all duration-500">
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                  
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest">{project.client}</span>
                      <span className="w-1 h-1 bg-zinc-800 rounded-full" />
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{project.impact}</span>
                    </div>
                    <h4 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h4>
                    <div className="space-y-6 mb-10">
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600 block mb-2">The Challenge</span>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">{project.problem}</p>
                      </div>
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600 block mb-2">The Solution</span>
                        <p className="text-zinc-100 text-lg leading-relaxed max-w-2xl font-normal italic">
                          "{project.description}"
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-mono border border-zinc-800 px-3 py-1.5 text-zinc-500 uppercase tracking-[0.2em] group-hover:border-zinc-700 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/3">
                    <div className="grid grid-cols-1 gap-8 p-8 bg-zinc-950/50 border border-zinc-900 rounded-sm shadow-2xl group-hover:border-blue-500/30 transition-all">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex flex-col border-l-2 border-zinc-800 pl-4 group-hover:border-blue-500 transition-colors">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">{metric.label}</span>
                          <span className="text-xl font-black text-zinc-50 uppercase">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-end">
                      <span className="text-4xl text-zinc-900 group-hover:text-zinc-50 transition-colors duration-700 cursor-pointer">
                        {project.link}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
