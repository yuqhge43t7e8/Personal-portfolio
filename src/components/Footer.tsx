export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#" className="text-2xl font-bold tracking-tighter">
            NP<span className="text-brand-blue">.</span>
          </a>
          <p className="text-slate-500 text-sm mt-2">Building with passion and purpose.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="#about" className="text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors">Projects</a>
          <a href="#contact" className="text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors">Contact</a>
        </div>
        
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Neesan Prasai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
