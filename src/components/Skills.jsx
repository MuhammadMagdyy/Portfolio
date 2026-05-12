import { motion } from 'framer-motion';
import Badge from './ui/Badge';
import SectionHeader from './ui/SectionHeader';
import { SKILLS } from '../data/portfolio';

/* Accent map → card + icon styles */
const CARD_ACCENT = {
  cyber:  { hover: 'hover:border-cyan-400/35 hover:shadow-cyber',   icon: 'border-cyan-400/20 bg-cyan-400/8 text-cyan-400',   chip: 'border-cyan-400/25 bg-cyan-400/7 text-cyan-400'   },
  sec:    { hover: 'hover:border-emerald-400/35 hover:shadow-sec',  icon: 'border-emerald-400/20 bg-emerald-400/8 text-emerald-400', chip: 'border-emerald-400/25 bg-emerald-400/7 text-emerald-400' },
  amber:  { hover: 'hover:border-amber-400/35 hover:shadow-amber',  icon: 'border-amber-400/20 bg-amber-400/8 text-amber-400', chip: 'border-amber-400/25 bg-amber-400/7 text-amber-400' },
  violet: { hover: 'hover:border-violet-400/35 hover:shadow-violet',icon: 'border-violet-400/20 bg-violet-400/8 text-violet-400',chip: 'border-violet-400/25 bg-violet-400/7 text-violet-400'},
};

function SkillCard({ group, index }) {
  const ac = CARD_ACCENT[group.accent] ?? CARD_ACCENT.cyber;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`
        shimmer-card group relative rounded-2xl
        border dark:border-zinc-800 border-zinc-200
        dark:bg-zinc-900/60 bg-white p-5
        transition-all duration-300
        ${group.wide ? 'lg:col-span-3 md:col-span-2' : ''}
        ${ac.hover}
      `}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className={`
            w-9 h-9 rounded-xl border flex items-center justify-center text-[16px]
            flex-shrink-0 transition-all duration-300
            group-hover:scale-110 group-hover:rotate-[-6deg]
            ${ac.icon}
          `}>
            {group.icon}
          </div>
          <div>
            <p className="font-display font-bold text-[13px] dark:text-zinc-100 text-zinc-900">{group.category}</p>
            <p className="text-[9.5px] font-mono dark:text-zinc-500 text-zinc-400">{group.skills.length} skills</p>
          </div>
        </div>

        {/* Cert chip */}
        {group.cert && (
          <motion.div
            whileHover={{ scale: 1.06 }}
            className={`
              flex items-center gap-1.5 rounded-full border px-2.5 py-1
              text-[8.5px] font-mono font-semibold transition-all duration-200
              ${ac.chip}
            `}
          >
            ✓ {group.cert.label}
          </motion.div>
        )}
      </div>

      {/* Badges */}
      <div className={`flex flex-wrap gap-[6px] ${group.wide ? 'max-w-3xl' : ''}`}>
        {group.skills.map(skill => (
          <Badge key={skill} label={skill} accent={group.accent} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="dark:bg-zinc-900/30 bg-zinc-50/60">
      <div className="max-w-[1060px] mx-auto section-pad">
        <SectionHeader
          eyebrow="Capabilities"
          title="Intelligence"
          accent="Stack"
          subtitle="Production-tested skills across AI, full-stack, cybersecurity, and enterprise systems. Hover the badges!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
