import { motion } from 'framer-motion';

const stack = [
  {
    category: "Visualization",
    items: [
      "Power BI solutions reducing manual reporting by 8-10 hours weekly",
      "Real-time Grafana dashboards driving a 20% increase in call volume",
      "Tableau and Excel modeling for enhanced operational visibility"
    ]
  },
  {
    category: "Data Architecture & Modeling",
    items: [
      "Optimized SQL & Power BI architectures for 25-40% faster refresh",
      "Star schema design and Databricks engineering for scalable BI",
      "Advanced SQL (CTEs, Window Functions) for complex transformations"
    ]
  },
  {
    category: "Strategy & Enablement",
    items: [
      "Operational efficiency enhancements of 20-50% through BI",
      "Internal training programs increasing report publishing by 10-30%",
      "Strategic Data Modelling for CEO Office and Sales Management"
    ]
  }
];

const Skills = () => {
  return (
    <section id="stack" className="py-24 bg-[#09090b] text-zinc-50 border-b border-zinc-800 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-24">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-blue-500 mb-6">Capabilities // Stack</h2>
          <h3 className="text-5xl md:text-7xl font-mono font-extrabold uppercase tracking-tighter text-zinc-100">Technical Engine.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-zinc-800 bg-zinc-950/20">
          {stack.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 border-r border-b border-zinc-800 hover:bg-zinc-900/10 transition-colors"
            >
              <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-zinc-500 mb-10 pb-4 border-b border-zinc-900 min-h-[3.5rem] flex items-end">
                {group.category}
              </h4>
              <ul className="space-y-8">
                {group.items.map((item, i) => (
                  <li key={i} className="text-xs text-zinc-400 font-mono tracking-tighter uppercase group flex items-start gap-4 hover:text-zinc-100 transition-colors">
                    <span className="w-1.5 h-1.5 bg-zinc-800 mt-0.5 group-hover:bg-blue-500 transition-colors" />
                    <span className="leading-relaxed">{item}</span>
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
