
import { motion } from 'framer-motion';

const stack = [
  {
    category: "Visualization",
    items: ["Power BI (Premium/Pro)", "DAX / Power Query (M)", "Grafana / Tableau", "Storytelling with Data"]
  },
  {
    category: "Data Engineering",
    items: ["SQL (CTEs / Window Functions)", "Databricks / Spark SQL", "Star Schema / Modeling", "ETL Optimization"]
  },
  {
    category: "Analysis & Logic",
    items: ["Python / Pandas", "Financial Forecasting", "A/B Testing Analytics", "Business Process Mapping"]
  }
];

const Skills = () => {
  return (
    <section id="stack" className="py-24 bg-[#09090b] text-zinc-50 border-b border-zinc-800 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-20">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-4">Core Competencies</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">The Tech Engine.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stack.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-900 pb-4">
                {group.category}
              </h4>
              <ul className="space-y-6">
                {group.items.map((item, i) => (
                  <li key={i} className="text-sm text-zinc-400 font-mono tracking-tighter uppercase group flex items-center gap-4 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-zinc-900 group-hover:bg-blue-500 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
