import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { PERSONAL } from '../data/portfolio';
import profPic from '../public/professional-pic.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const LANGS = [
  { name: 'Java / Spring Boot', pct: 35, color: 'bg-orange-500 shadow-[0_0_10px_#f97316]' },
  { name: 'Python / FastAPI',   pct: 25, color: 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]'   },
  { name: 'TypeScript / React', pct: 25, color: 'bg-emerald-400 shadow-[0_0_10px_#34d399]' },
  { name: 'PostgreSQL / Redis', pct: 15, color: 'bg-indigo-500 shadow-[0_0_10px_#6366f1]'  },
];

export default function About() {
  return (
    <section id="about" className="dark:bg-[#09090b] bg-slate-50">
      <div className="max-w-[1060px] mx-auto section-pad">
        <SectionHeader eyebrow="About Me" title="Full-Stack" accent="Engineer"
          subtitle="Architecting resilient Java backends and intelligent AI frontends." />

        {/* ── Bio Card ── */}
        <motion.div {...fadeUp()} className="shimmer-card rounded-2xl border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/70 bg-white p-7 mb-5">
          <div className="flex gap-6 flex-col sm:flex-row">
            <div className="flex-shrink-0">
              <motion.div whileHover={{ scale: 1.02 }} className="relative w-[152px] h-[152px] rounded-2xl bg-gradient-to-br from-orange-500 via-cyan-400 to-emerald-400 border-[3px] border-white/10 mb-4 overflow-hidden">
                <img src={profPic} alt="Profile" className="w-full h-full object-cover" />
              </motion.div>
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-mono text-center dark:text-zinc-500 text-zinc-400 uppercase tracking-widest">Dev_Status: Available</span>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] dark:text-zinc-500 text-zinc-400">Environment: Full_Stack_Java</span>
              </div>
              
              <div className="space-y-4">
                <p className="text-[13.5px] dark:text-zinc-300 text-zinc-600 leading-[1.8] font-body">
                  Specialized in building **distributed Java systems** and **Spring Boot microservices**. I bridge the gap between complex backend logic and fluid user experiences, ensuring every pixel is backed by a secure, scalable architecture.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-orange-500/5 border border-orange-500/10 rounded-xl p-3">
                    <p className="text-[12px] dark:text-zinc-300 text-zinc-600 font-body">
                      <strong className="text-orange-500 font-mono">Backend:</strong> High-concurrency Java APIs, Spring Security, and JPA/Hibernate optimization.
                    </p>
                  </div>
                  <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3">
                    <p className="text-[12px] dark:text-zinc-300 text-zinc-600 font-body">
                      <strong className="text-emerald-500 font-mono">Frontend:</strong> Dynamic React interfaces powered by TypeScript and real-time state management.
                    </p>
                  </div>
                </div>

                <p className="text-[13.5px] dark:text-zinc-400 text-zinc-600 leading-[1.8] font-body">
                  From implementing **ASL Recognition** using Computer Vision to deploying **RAG Pipelines** in production, I focus on systems that are algorithmically sound and enterprise-ready.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Visual Engine Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Active System Threads (Full-Stack Focus) */}
          <motion.div {...fadeUp(0.15)} className="shimmer-card rounded-xl border dark:border-zinc-800 border-zinc-200 dark:bg-[#0c0c0e] bg-zinc-950 p-5 overflow-hidden relative">
            <div className="flex justify-between items-center mb-6">
               <p className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest">Active_Processes</p>
               <div className="text-[9px] font-mono text-zinc-600">CPU_LOAD: 12%</div>
            </div>
            
            <div className="space-y-5">
              {[
                { label: 'SPRING_BOOT_SVR', val: 95, color: 'bg-orange-500' },
                { label: 'REACT_HYDRATION', val: 90, color: 'bg-emerald-500' },
                { label: 'MICRO_SERVICE_MESH', val: 85, color: 'bg-indigo-500' },
                { label: 'ASL_CV_INFERENCE', val: 80, color: 'bg-cyan-500' }
              ].map((thread) => (
                <div key={thread.label} className="space-y-2">
                  <div className="flex justify-between font-mono text-[9px]">
                    <span className="text-zinc-500">{thread.label}</span>
                    <span className="text-emerald-400">ONLINE</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${thread.val}%` }}
                      className={`h-full ${thread.color}`} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technology Distribution */}
          <motion.div {...fadeUp(0.22)} className="shimmer-card rounded-xl border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/60 bg-white p-5">
            <p className="text-[11px] font-mono dark:text-zinc-500 text-zinc-400 mb-6 uppercase tracking-widest">Core_Skill_Matrix</p>
            <div className="space-y-5">
              {LANGS.map(({ name, pct, color }) => (
                <div key={name}>
                  <div className="flex justify-between text-[11px] mb-2 font-mono">
                    <span className="dark:text-zinc-100 text-zinc-800 font-bold">{name}</span>
                    <span className="text-zinc-500">{pct}%</span>
                  </div>
                  <div className="h-[3px] w-full dark:bg-zinc-800 bg-zinc-200 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      transition={{ duration: 1.2, ease: 'circOut' }}
                      className={`h-full ${color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Micro-labels for Tools */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['Docker', 'AWS', 'Redis', 'Spring Security', 'Redux', 'FastAPI'].map(tool => (
                <span key={tool} className="text-[8px] font-mono border dark:border-zinc-800 border-zinc-200 px-2 py-0.5 rounded text-zinc-500">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}