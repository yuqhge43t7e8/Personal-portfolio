import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Modern SaaS Landing Page",
    description: "A fully responsive landing page built with Tailwind CSS focusing on clean typography and conversion-optimized layout.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "Tailwind CSS", "Motion"],
    github: "https://github.com",
    learningOutcome: "Mastered Tailwind's grid system and responsive utility classes."
  },
  {
    id: 2,
    title: "Interactive Task Manager",
    description: "A JavaScript-powered todo application with local storage persistence and drag-and-drop functionality.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "CSS", "Local Storage"],
    github: "https://github.com",
    learningOutcome: "Deepened understanding of DOM manipulation and state management."
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application fetching data from OpenWeather API with dynamic background changes.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "API Integration", "Tailwind"],
    github: "https://github.com",
    learningOutcome: "Learned how to handle asynchronous API calls and JSON data."
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "A simple Python-based CLI tool to track daily expenses and generate monthly reports.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "File I/O", "CLI"],
    github: "https://github.com",
    learningOutcome: "Understood basic programming logic and data structures in Python."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured <span className="text-brand-pink">Projects</span></h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              These projects represent my learning milestones. Each one solved a specific problem and taught me something new.
            </p>
          </div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-blue font-bold hover:underline">
            View all on GitHub <Github size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform">
                    <Github size={20} />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-blue rounded-full text-white hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-blue transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-start gap-3 text-sm">
                    <div className="mt-1 text-brand-orange">
                      <Code2 size={16} />
                    </div>
                    <p className="text-slate-500 italic">
                      <span className="font-bold text-slate-700 dark:text-slate-300 not-italic">Learning Outcome:</span> {project.learningOutcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
