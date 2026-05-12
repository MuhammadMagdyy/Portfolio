import { motion } from 'framer-motion';

const ACCENT_STYLES = {
  cyber:  { dot: 'border-cyan-400 bg-cyan-400/10 text-cyan-400',     org: 'text-cyan-400',     period: 'hover:border-cyan-400 hover:text-cyan-400',     tag: 'hover:bg-cyan-400/12 hover:text-cyan-400'     },
  sec:    { dot: 'border-emerald-400 bg-emerald-400/10 text-emerald-400', org: 'text-emerald-400', period: 'hover:border-emerald-400 hover:text-emerald-400', tag: 'hover:bg-emerald-400/12 hover:text-emerald-400' },
  violet: { dot: 'border-violet-400 bg-violet-400/10 text-violet-400', org: 'text-violet-400',   period: 'hover:border-violet-400 hover:text-violet-400',   tag: 'hover:bg-violet-400/12 hover:text-violet-400'   },
};

function TimelineItem({ item, isEdu = false }) {
  const s = ACCENT_STYLES[item.accent] ?? ACCENT_STYLES.cyber;

  return (
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Timeline dot */}
      <div className={`absolute -left-[30px] top-[5px] w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center text-[9px] z-10 transition-transform duration-300 group-hover:scale-110 ${s.dot}`}>
        {item.icon}
        {/* Ring pulse on hover */}
        <span className="absolute inset-[-4px] rounded-full border border-current opacity-0 group-hover:opacity-40 group-hover:animate-ping" />
      </div>

      {/* Card */}
      <div className="
        rounded-[14px] border dark:border-zinc-800 border-zinc-200
        dark:bg-zinc-900/60 bg-white p-5
        transition-all duration-300
        group-hover:border-zinc-700 dark:group-hover:border-zinc-600
        group-hover:translate-x-1
        group-hover:shadow-[0_4px_20px_rgba(0,0,0,.15)]
      ">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-display font-bold text-[14px] dark:text-zinc-100 text-zinc-900">
            {item.role ?? item.degree}
          </h3>
          <span className={`font-mono text-[10px] dark:text-zinc-500 text-zinc-400 border dark:border-zinc-800 border-zinc-200 rounded-full px-2 py-0.5 flex-shrink-0 transition-all duration-200 ${s.period}`}>
            {item.period}
          </span>
        </div>

        {/* Org */}
        <p className={`text-[12px] font-semibold mb-3 ${s.org}`}>
          {item.org} <span className="dark:text-zinc-500 text-zinc-400 font-normal">· {item.location}</span>
        </p>

        {/* Bullets */}
        <ul className="space-y-2 mb-3">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-[12px] dark:text-zinc-400 text-zinc-600 leading-[1.6] font-body transition-colors duration-200 group-hover:dark:text-zinc-300 group-hover:text-zinc-700">
              <span className="dark:text-zinc-600 text-zinc-400 flex-shrink-0 text-[14px] mt-[-1px] transition-colors duration-200 group-hover:text-cyan-400">›</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Achievement box (education only) */}
        {isEdu && item.achievement && (
          <div className="mb-3 px-3 py-2 rounded-lg bg-violet-400/6 border border-violet-400/18 transition-all duration-200 group-hover:bg-violet-400/10 group-hover:border-violet-400/30">
            <p className="text-[9px] font-mono text-violet-400 uppercase tracking-[0.12em] mb-1">Activities &amp; Achievements</p>
            <p className="text-[12px] dark:text-zinc-400 text-zinc-600 font-body">{item.achievement}</p>
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map(tag => (
            <span
              key={tag}
              className={`text-[9px] font-mono dark:bg-zinc-800 bg-zinc-100 dark:text-zinc-400 text-zinc-500 px-2 py-0.5 rounded-[4px] transition-all duration-200 cursor-default ${s.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline({ items, isEdu = false }) {
  return (
    <div className="relative pl-8 max-w-[720px] mx-auto">
      {/* Gradient line */}
      <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-cyan-400 via-emerald-400 to-violet-400 rounded-full" />

      <div className="space-y-6">
        {items.map((item, i) => (
          <TimelineItem key={i} item={item} isEdu={isEdu} />
        ))}
      </div>
    </div>
  );
}
