import { motion } from 'motion/react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'HTML5', level: 'Intermediate', percentage: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 'Intermediate', percentage: 80, category: 'Frontend' },
  { name: 'JavaScript', level: 'Beginner', percentage: 60, category: 'Frontend' },
  { name: 'React', level: 'Beginner', percentage: 45, category: 'Frontend' },
  { name: 'Python', level: 'Beginner', percentage: 50, category: 'Programming' },
  { name: 'Git/GitHub', level: 'Beginner', percentage: 55, category: 'Tools' },
  { name: 'Responsive Design', level: 'Intermediate', percentage: 75, category: 'Frontend' },
  { name: 'UI/UX Basics', level: 'Beginner', percentage: 65, category: 'Tools' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My <span className="text-brand-blue">Skillset</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm constantly expanding my toolkit. Here's a transparent look at my current technical proficiency as I grow as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Frontend', 'Programming', 'Tools'].map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${
                  category === 'Frontend' ? 'bg-brand-blue' : 
                  category === 'Programming' ? 'bg-brand-pink' : 'bg-brand-yellow'
                }`} />
                {category}
              </h3>
              
              <div className="space-y-6">
                {skills.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{skill.level}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          category === 'Frontend' ? 'bg-brand-blue' : 
                          category === 'Programming' ? 'bg-brand-pink' : 'bg-brand-yellow'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
