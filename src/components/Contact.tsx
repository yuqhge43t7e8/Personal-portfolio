import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 -skew-x-12 transform translate-x-1/4" />
          
          <div className="grid lg:grid-cols-2 relative z-10">
            <div className="p-12 md:p-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's build something <span className="text-brand-blue">together</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-md">
                I'm currently looking for internships or junior roles. If you have a project in mind or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <a href="mailto:neesanprasai234@gmail.com" className="flex items-center gap-4 text-white hover:text-brand-blue transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email Me</p>
                    <p className="text-lg">neesanprasai234@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex gap-4 pt-6">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-white hover:bg-brand-blue transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-white hover:bg-brand-blue transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-12 md:p-20 bg-white/5 backdrop-blur-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl text-white focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl text-white focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl text-white focus:outline-none focus:border-brand-blue transition-colors resize-none"
                  />
                </div>
                <button className="w-full py-5 bg-brand-blue text-slate-900 font-bold rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-blue/20">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
