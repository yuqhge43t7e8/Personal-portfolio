import { motion } from 'motion/react';
import { JourneyStep } from '../types';

const steps: JourneyStep[] = [
  {
    year: "Early 2024",
    title: "The Spark",
    description: "Discovered the world of web development and wrote my first 'Hello World' in HTML."
  },
  {
    year: "Mid 2024",
    title: "Styling Mastery",
    description: "Dived deep into CSS and discovered Tailwind CSS, which changed how I think about design."
  },
  {
    year: "Late 2024",
    title: "Logic & Interaction",
    description: "Started learning JavaScript to make my static pages interactive and dynamic."
  },
  {
    year: "2025",
    title: "Modern Frameworks",
    description: "Exploring React and building more complex projects while practicing Python for logic."
  }
];

export default function Journey() {
  return (
    <section id="journey" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Learning <span className="text-brand-orange">Journey</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My path as a developer is defined by consistent growth and a hunger for knowledge.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-100 dark:bg-slate-800 hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full">
                  <div className={`p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-2 block">{step.year}</span>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-brand-orange border-4 border-white dark:border-slate-950 shadow-xl flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
