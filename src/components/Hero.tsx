import { motion } from 'motion/react';
import { ArrowRight, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold tracking-wide uppercase">
            Available for Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Frontend Developer <br />
            <span className="text-gradient">In Progress</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
            Hi, I'm <span className="font-bold text-slate-900 dark:text-white">Neesan Prasai</span>. 
            Building clean, responsive, and user-centric web experiences while constantly evolving my craft.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
            >
              View Projects <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">
              <Github size={24} />
            </a>
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />
            <p className="text-sm font-medium">Passionate about UI/UX & Clean Code</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" 
              alt="Developer workspace" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative floating cards */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl z-20 border border-slate-100 dark:border-slate-700"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-lime rounded-lg flex items-center justify-center text-slate-900 font-bold">JS</div>
              <div>
                <p className="text-xs text-slate-400">Current Focus</p>
                <p className="text-sm font-bold">JavaScript ES6+</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl z-20 border border-slate-100 dark:border-slate-700"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-slate-900 font-bold">TW</div>
              <div>
                <p className="text-xs text-slate-400">Styling Expert</p>
                <p className="text-sm font-bold">Tailwind CSS</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
