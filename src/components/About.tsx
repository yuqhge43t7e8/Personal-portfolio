import { motion } from 'motion/react';
import { User, Target, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" 
                alt="Neesan Prasai" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-8 bg-brand-orange rounded-2xl text-white shadow-xl max-w-[240px]">
              <p className="text-3xl font-bold mb-1">100%</p>
              <p className="text-sm font-medium opacity-90">Dedicated to learning and growth every single day.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Building the Future, <br /><span className="text-brand-pink">One Pixel at a Time</span></h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center text-brand-blue">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Who I Am</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    I'm a passionate frontend developer based in Nepal, currently on an exciting journey to master the art of web development. I believe that great software is built with curiosity and persistence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center text-brand-pink">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">My Goal</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    My immediate goal is to contribute to meaningful projects where I can apply my skills in HTML, Tailwind CSS, and JavaScript while learning from experienced developers in a professional environment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center text-brand-yellow">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">My Mindset</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    I don't just write code; I solve problems. I'm a fast learner who thrives on challenges and is always looking for ways to improve UI performance and user experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
