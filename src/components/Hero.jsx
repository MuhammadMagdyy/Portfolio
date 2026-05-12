import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, ChevronRight, Shield, Terminal } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { PERSONAL, TYPEWRITER_WORDS } from '../data/portfolio';

/* ── Animation variants ───────────────────────────────────────── */
const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Background grid + glows ─────────────────────────────────── */
function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-dark dark:bg-grid-dark bg-grid-light bg-[length:44px_44px] opacity-100" />
      {/* Top glow */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full bg-radial-[ellipse] from-cyan-400/9 to-transparent blur-3xl"
        style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.09), transparent 70%)' }}
      />
      {/* Bottom-right glow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-20 -right-16 w-[300px] h-[300px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.055), transparent 70%)' }}
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t dark:from-[#09090b] from-slate-50 to-transparent" />
    </div>
  );
}

/* ── Floating profile card ───────────────────────────────────── */
function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 16 }}
      animate={{ opacity: 1, scale: 1,    y: 0  }}
      transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ animation: 'float 6s ease-in-out infinite' }}
      className="
        w-[220px] flex-shrink-0
        rounded-2xl border dark:border-zinc-800 border-zinc-200
        dark:bg-zinc-900/80 bg-white/90
        backdrop-blur-sm p-6
        shadow-[0_8px_40px_rgba(0,0,0,.25)]
        transition-all duration-300
        hover:border-cyan-400/35 hover:shadow-cyber
      "
    >
      {/* Avatar */}
      <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 mx-auto mb-4 flex items-center justify-center font-display font-black text-[26px] text-zinc-950 border-[3px] border-cyan-400/25 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(34,211,238,.3)]">
        MM
      </div>
      <p className="font-display font-bold text-[13.5px] text-center dark:text-zinc-100 text-zinc-900 mb-1">{PERSONAL.name}</p>
      <p className="text-[10px] font-mono dark:text-zinc-500 text-zinc-400 text-center mb-4 leading-relaxed">
        Full Stack AI Engineer<br />Cairo, Egypt · Remote
      </p>

      {/* Stat grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          { v: '18+', l: 'Repos',       link: PERSONAL.github   },
          { v: '5',   l: 'Certs',       link: null               },
          { v: 'LC',  l: 'LeetCode',    link: PERSONAL.leetcode, amber: true },
          { v: '<24h', l: 'Reply',      link: null               },
        ].map(({ v, l, link, amber }) => (
          <div
            key={l}
            onClick={() => link && window.open(link, '_blank')}
            className={`
              text-center rounded-xl dark:bg-zinc-800 bg-zinc-100 py-2 px-1
              transition-all duration-200
              ${link ? 'cursor-pointer hover:scale-[1.04]' : 'cursor-default'}
              ${amber ? 'dark:hover:bg-amber-400/10 hover:border-amber-400/25' : 'dark:hover:bg-cyan-400/10'}
            `}
          >
            <p className={`font-display font-black text-[15px] ${amber ? 'text-amber-400' : 'dark:text-zinc-100 text-zinc-900'}`}>{v}</p>
            <p className="text-[9px] font-mono dark:text-zinc-500 text-zinc-400">{l}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 border-t dark:border-zinc-800 border-zinc-200 pt-3">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-mono text-emerald-400">Open to work</span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { displayed, cursor } = useTypewriter(TYPEWRITER_WORDS);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-[#09090b] bg-slate-50">
      <HeroBg />

      <div className="relative z-10 max-w-[1060px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center justify-between gap-14 flex-wrap lg:flex-nowrap">

          {/* ── Left column ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex-1 min-w-[280px]"
          >
            {/* Availability badge */}
            <motion.div variants={item} className="mb-6">
              <motion.div
                whileHover={{ scale: 1.03, y: -1 }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/6 px-4 py-1.5 cursor-default transition-all duration-200 hover:bg-emerald-400/12 hover:border-emerald-400/50"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono font-semibold text-emerald-400">Available for opportunities</span>
              </motion.div>
            </motion.div>

            {/* Eyebrow */}
            <motion.p variants={item} className="mb-2 font-mono text-[11px] tracking-[0.18em] uppercase text-zinc-400 dark:text-zinc-500">
              {PERSONAL.name} — Cairo, Egypt
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-display font-black text-[clamp(30px,4.5vw,56px)] leading-[1.04] tracking-tight dark:text-zinc-50 text-zinc-900 mb-3"
            >
              Full Stack Developer<br />
              <span className="gradient-text">&amp; AI Engineer</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={item} className="flex items-center gap-2 h-7 mb-5">
              <Terminal size={14} className="text-cyan-400 flex-shrink-0" />
              <span className="font-mono text-[13.5px] dark:text-zinc-300 text-zinc-600">
                {displayed}
                <span
                  className="inline-block w-[2px] h-[15px] ml-[1px] bg-cyan-400 align-middle transition-opacity duration-100"
                  style={{ opacity: cursor ? 1 : 0 }}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p variants={item} className="max-w-[500px] text-[13.5px] dark:text-zinc-400 text-zinc-600 leading-[1.82] mb-7 font-body">
              Building intelligent, scalable systems — RAG-powered AI pipelines, ERP extensions, and full-stack apps — with a security-first mindset backed by the{' '}
              <span className="text-emerald-400 font-semibold">Google Cybersecurity Certificate</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-7">
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
                    flex items-center gap-2 rounded-xl px-5 py-2.5 text-[12px] font-display font-bold
                    transition-all duration-200 relative overflow-hidden
                    ${style === 'primary' ? 'bg-cyan-500 hover:bg-cyan-400 text-zinc-950 shadow-[0_4px_18px_rgba(34,211,238,.35)] hover:shadow-[0_6px_24px_rgba(34,211,238,.5)]' : ''}
                    ${style === 'outline' ? 'border dark:border-zinc-700 border-zinc-300 dark:bg-zinc-800/50 bg-white text-zinc-700 dark:text-zinc-300 dark:hover:border-cyan-400/50 hover:border-cyan-400/50 hover:shadow-[0_4px_14px_rgba(34,211,238,.1)]' : ''}
                    ${style === 'sec'     ? 'border border-emerald-400/35 bg-emerald-400/8 text-emerald-400 hover:bg-emerald-400/16 hover:border-emerald-400/6 hover:shadow-[0_4px_18px_rgba(52,211,153,.25)]' : ''}
                  `}
                >
                  {label} {icon}
                </motion.button>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-2.5">
              {[
                { icon: 'GH', label: 'GitHub',   href: PERSONAL.github,   color: 'default' },
                { icon: 'in', label: 'LinkedIn',  href: PERSONAL.linkedin, color: 'default' },
                { icon: 'LC', label: 'LeetCode',  href: PERSONAL.leetcode, color: 'amber'   },
                { icon: '✉',  label: 'Email',     href: `mailto:${PERSONAL.email}`, color: 'default' },
              ].map(({ icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-9 h-9 rounded-xl flex items-center justify-center text-[12px] font-mono font-semibold
                    border dark:border-zinc-800 border-zinc-200
                    dark:bg-zinc-800/60 bg-white
                    transition-all duration-200
                    ${color === 'amber'
                      ? 'text-amber-400 dark:hover:border-amber-400/50 hover:border-amber-400/50 hover:shadow-[0_4px_14px_rgba(251,191,36,.25)]'
                      : 'dark:text-zinc-400 text-zinc-600 dark:hover:text-zinc-100 hover:text-zinc-900 dark:hover:border-cyan-400/40 hover:border-cyan-400/40 hover:shadow-[0_4px_14px_rgba(34,211,238,.15)]'
                    }
                  `}
                >
                  {icon}
                </motion.a>
              ))}
              <div className="w-px h-5 dark:bg-zinc-700 bg-zinc-300 mx-1" />
              <span className="text-[10px] font-mono dark:text-zinc-600 text-zinc-400">{PERSONAL.education}</span>
            </motion.div>
          </motion.div>

          {/* ── Right column — profile card ── */}
          <div className="hidden lg:block">
            <ProfileCard />
          </div>

        </div>
      </div>
    </section>
  );
}
