
import { motion } from 'framer-motion';

const stack = [
  {
    category: "Visualization",
    items: [
      "Power BI solutions reducing manual reporting by 8-10 hours weekly",
      "Enterprise reporting for Finance, Supply Chain, and HR stakeholders",
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
      "Strategic Data Modelling for CEO Office and Sales Management",
      "Quality assurance and data wrangling across 50+ enterprise reports"
    ]
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
