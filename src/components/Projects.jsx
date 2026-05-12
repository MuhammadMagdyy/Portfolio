import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { PROJECTS, PERSONAL } from '../data/portfolio';

const ACCENT = {
  cyber: {
    card:    'hover:border-cyan-400/40 hover:shadow-cyber',
    icon:    'border-cyan-400/20 bg-cyan-400/10',
    iconTxt: 'text-cyan-400',
    badge:   'bg-cyan-400/8 text-cyan-400',
    name:    'group-hover:text-cyan-400',
    car:     { C: 'text-cyan-400', A: 'text-amber-400', R: 'text-emerald-400' },
    tag:     'hover:bg-cyan-400/12 hover:text-cyan-400',
    link:    'hover:text-cyan-400 hover:border-cyan-400/35 hover:bg-cyan-400/6',
    glow:    'from-cyan-400/4',
  },
  sec: {
    card:    'hover:border-emerald-400/40 hover:shadow-sec',
    icon:    'border-emerald-400/20 bg-emerald-400/10',
    iconTxt: 'text-emerald-400',
    badge:   'bg-emerald-400/8 text-emerald-400',
    name:    'group-hover:text-emerald-400',
    car:     { C: 'text-cyan-400', A: 'text-amber-400', R: 'text-emerald-400' },
    tag:     'hover:bg-emerald-400/12 hover:text-emerald-400',
    link:    'hover:text-emerald-400 hover:border-emerald-400/35 hover:bg-emerald-400/6',
    glow:    'from-emerald-400/4',
  },
};

function ProjectCard({ project, index }) {
  const a = ACCENT[project.accent] ?? ACCENT.cyber;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`
        shimmer-card group relative flex flex-col
        rounded-2xl border dark:border-zinc-800 border-zinc-200
        dark:bg-zinc-900/60 bg-white
        overflow-hidden transition-all duration-300
        hover:-translate-y-[3px]
        ${a.card}
      `}
    >
      {/* Radial glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${a.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none`} />

      {/* ── Top section ── */}
      <div className="relative p-5 pb-0">
        <div className="flex items-start justify-between mb-3">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: -6 }}
            className={`w-10 h-10 rounded-xl border text-[18px] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${a.icon} ${a.iconTxt}`}
          >
            {project.icon}
          </motion.div>

          {/* Right badges */}
          <div className="flex flex-col items-end gap-1.5">
            {project.featured && (
              <span className="flex items-center gap-1 border border-amber-400/30 bg-amber-400/8 rounded-full px-2 py-0.5 text-[8px] font-mono font-bold text-amber-400">
                <Star size={7} fill="currentColor" /> Featured
              </span>
            )}
            <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wide ${a.badge}`}>
              {project.badge}
            </span>
          </div>
        </div>

        <h3 className={`font-display font-bold text-[15px] mb-0.5 transition-colors duration-200 dark:text-zinc-100 text-zinc-900 ${a.name}`}>
          {project.name}
        </h3>
        <p className="text-[11px] dark:text-zinc-500 text-zinc-400 mb-3 font-body">{project.tagline}</p>
      </div>

      {/* ── CAR grid ── */}
      <div className="relative grid grid-cols-3 border-t dark:border-zinc-800 border-zinc-100 mx-5 divide-x dark:divide-zinc-800 divide-zinc-100">
        {[
          { label: 'Challenge', emoji: '⚡', color: a.car.C, body: project.challenge },
          { label: 'Action',    emoji: '🔧', color: a.car.A, body: project.action    },
          { label: 'Result',    emoji: '✅', color: a.car.R, body: project.result    },
        ].map(({ label, emoji, color, body }) => (
          <div
            key={label}
            className="p-3 transition-colors duration-200 hover:dark:bg-white/[0.025] hover:bg-zinc-50/80"
          >
            <p className={`text-[8.5px] font-mono font-bold uppercase tracking-[0.12em] mb-1.5 flex items-center gap-1 ${color}`}>
              {emoji} {label}
            </p>
            <p className="text-[11px] dark:text-zinc-400 text-zinc-600 leading-[1.6] font-body">{body}</p>
          </div>
        ))}
      </div>

      {/* ── Bottom: tags + links ── */}
      <div className="relative flex items-center justify-between px-5 py-3 border-t dark:border-zinc-800 border-zinc-100 mt-auto">
        <div className="flex flex-wrap gap-1.5 flex-1 mr-3">
          {project.tags.map(tag => (
            <span
              key={tag}
              className={`text-[9px] font-mono dark:bg-zinc-800 bg-zinc-100 dark:text-zinc-400 text-zinc-500 px-2 py-0.5 rounded-[4px] transition-all duration-150 cursor-default hover:-translate-y-[1px] ${a.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2 flex-shrink-0">
          {[
            { icon: <Github size={12} />, label: 'Code', href: project.github },
            { icon: <ExternalLink size={12} />, label: 'Demo', href: project.live },
          ].map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center gap-1 text-[10px] font-body font-semibold
                dark:text-zinc-500 text-zinc-400
                border border-transparent rounded-lg px-2.5 py-1.5
                transition-all duration-200
                ${a.link}
              `}
            >
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="dark:bg-[#09090b] bg-slate-50">
      <div className="max-w-[1060px] mx-auto section-pad">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects"
          subtitle="Every project shown in Challenge → Action → Result format — the real story behind the code."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex items-center gap-2 rounded-xl
              border dark:border-zinc-700 border-zinc-300
              dark:bg-zinc-800/50 bg-white
              dark:text-zinc-300 text-zinc-700
              px-6 py-3 text-[12px] font-display font-bold
              transition-all duration-200
              hover:border-cyan-400/50 dark:hover:border-cyan-400/50
              hover:shadow-[0_4px_16px_rgba(34,211,238,.12)]
            "
          >
            <Github size={15} />
            View all repositories on GitHub
            <ExternalLink size={12} className="dark:text-zinc-500 text-zinc-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
