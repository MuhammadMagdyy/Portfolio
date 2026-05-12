import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Shield, Terminal } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { PERSONAL, TYPEWRITER_WORDS } from '../data/portfolio';
import HeroBackground from './HeroBackground';

/* ── Animation variants ───────────────────────────────────────── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function HeroBg() {
  return (
    // FIXED: Changed 'relative' to 'absolute' to ensure it pins to the section edges
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* 1. The Neural/Matrix Component stays at the very bottom */}
      <HeroBackground />
      
      {/* 2. Grid - Ensure this is transparent enough to see the animation through it */}
      <div className="absolute inset-0 bg-grid-dark dark:bg-grid-dark bg-grid-light bg-[length:44px_44px] opacity-20" />
      
      {/* 3. Top glow */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full blur-3xl opacity-50"
        style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.15), transparent 70%)' }}
      />
      
      {/* 4. Bottom-right glow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-20 -right-16 w-[400px] h-[400px] rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.1), transparent 70%)' }}
      />
      
      {/* 5. Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t dark:from-[#09090b] from-slate-50 to-transparent" />
    </div>
  );
}

export default function Hero() {
  const { displayed, cursor } = useTypewriter(TYPEWRITER_WORDS);

  return (
    // FIXED: Removed the solid BG classes from here so the HeroBg can show through
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBg />

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Main Content: Now Centered */}
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Availability badge */}
            <motion.div variants={item} className="mb-8">
              <motion.div
                whileHover={{ scale: 1.03, y: -1 }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/6 px-5 py-2 cursor-default transition-all duration-200 hover:bg-emerald-400/12 hover:border-emerald-400/50"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[12px] font-mono font-semibold text-emerald-400 tracking-wide">Available for new opportunities</span>
              </motion.div>
            </motion.div>

            {/* Eyebrow */}
            <motion.p variants={item} className="mb-3 font-mono text-[12px] tracking-[0.25em] uppercase text-zinc-400 dark:text-zinc-500">
              {PERSONAL.name} — Cairo, Egypt
            </motion.p>

            {/* Headline: Scaled up for visual weight */}
            <motion.h1
              variants={item}
              className="font-display font-black text-[clamp(36px,7vw,72px)] leading-[1.02] tracking-tight dark:text-zinc-50 text-zinc-900 mb-5"
            >
              Full Stack Developer<br />
              <span className="gradient-text">&amp; AI Engineer</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={item} className="flex items-center gap-2 h-7 mb-6">
              <Terminal size={18} className="text-cyan-400 flex-shrink-0" />
              <span className="font-mono text-[15px] dark:text-zinc-300 text-zinc-600">
                {displayed}
                <span
                  className="inline-block w-[2px] h-[16px] ml-[1px] bg-cyan-400 align-middle transition-opacity duration-100"
                  style={{ opacity: cursor ? 1 : 0 }}
                />
              </span>
            </motion.div>

            {/* Description: Centered max width */}
            <motion.p variants={item} className="max-w-[650px] text-[15px] dark:text-zinc-400 text-zinc-600 leading-[1.8] mb-10 font-body">
              Building intelligent, scalable systems — RAG-powered AI pipelines, ERP extensions, and full-stack apps — with a security-first mindset backed by the{' '}
              <span className="text-emerald-400 font-semibold">Google Cybersecurity Certificate</span>.
            </motion.p>

            {/* CTAs: Centered wrap */}
            <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { label: 'View Projects', icon: <ChevronRight size={14} />, action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), style: 'primary' },
                { label: 'Hire on Upwork', icon: <ExternalLink size={13} />, action: () => window.open(PERSONAL.upwork, '_blank'), style: 'outline' },
                { label: 'Security Cert', icon: <Shield size={13} />, action: () => document.getElementById('certs')?.scrollIntoView({ behavior: 'smooth' }), style: 'sec' },
              ].map(({ label, icon, action, style }) => (
                <motion.button
                  key={label}
                  onClick={action}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    flex items-center gap-2 rounded-xl px-6 py-3 text-[13px] font-display font-bold
                    transition-all duration-200 relative overflow-hidden
                    ${style === 'primary' ? 'bg-cyan-500 hover:bg-cyan-400 text-zinc-950 shadow-[0_4px_20px_rgba(34,211,238,.35)]' : ''}
                    ${style === 'outline' ? 'border dark:border-zinc-700 border-zinc-300 dark:bg-zinc-800/50 bg-white text-zinc-700 dark:text-zinc-300 hover:border-cyan-400/50' : ''}
                    ${style === 'sec'     ? 'border border-emerald-400/35 bg-emerald-400/8 text-emerald-400 hover:bg-emerald-400/16' : ''}
                  `}
                >
                  {label} {icon}
                </motion.button>
              ))}
            </motion.div>

            {/* Education Sign-off: Visual vertical line for flow */}
            <motion.div variants={item} className="flex flex-col items-center gap-3">
              <div className="w-px h-10 bg-gradient-to-b from-cyan-400/50 to-transparent" />
              <span className="text-[11px] font-mono dark:text-zinc-600 text-zinc-400 uppercase tracking-[0.3em]">
                {PERSONAL.education}
              </span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}