import { motion } from 'motion/react';
import { Layout, Code, Zap } from 'lucide-react';

const services = [
  {
    icon: <Layout className="text-brand-blue" />,
    title: "Responsive Design",
    description: "Building websites that look great on all devices, from mobile phones to large desktop monitors."
  },
  {
    icon: <Code className="text-brand-pink" />,
    title: "Frontend Development",
    description: "Converting designs into clean, semantic HTML and efficient Tailwind CSS code."
  },
  {
    icon: <Zap className="text-brand-yellow" />,
    title: "UI Improvements",
    description: "Analyzing existing interfaces and suggesting/implementing modern UI enhancements for better UX."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What I <span className="text-brand-lime">Can Do</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I offer focused services tailored to my current strengths, ensuring high-quality results for every task.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
