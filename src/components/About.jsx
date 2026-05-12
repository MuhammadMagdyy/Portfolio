import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { PERSONAL } from '../data/portfolio';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

/* Language bar data */
const LANGS = [
  { name: 'Python',     pct: 38, color: 'bg-cyan-400'   },
  { name: 'TypeScript', pct: 27, color: 'bg-emerald-400' },
  { name: 'JavaScript', pct: 18, color: 'bg-amber-400'   },
  { name: 'Java',       pct: 10, color: 'bg-violet-400'  },
  { name: 'Other',      pct:  7, color: 'bg-zinc-500'    },
];

/* Sidebar social links */
const SIDE_LINKS = [
  { icon: 'GH', label: 'GitHub',   href: PERSONAL.github   },
  { icon: 'in', label: 'LinkedIn', href: PERSONAL.linkedin  },
  { icon: '⚡', label: 'LeetCode', href: PERSONAL.leetcode, amber: true },
  { icon: '💼', label: 'Upwork',   href: PERSONAL.upwork   },
  { icon: '✉',  label: 'Email',    href: `mailto:${PERSONAL.email}` },
];

export default function About() {
  return (
    <section id="about" className="dark:bg-[#09090b] bg-slate-50">
      <div className="max-w-[1060px] mx-auto section-pad">
        <SectionHeader eyebrow="About Me" title="Who" accent="I Am"
          subtitle="Passionate engineer bridging AI research and enterprise software — builder and defender." />

        {/* ── Main bio card ── */}
        <motion.div
          {...fadeUp()}
          className="
            shimmer-card rounded-2xl border dark:border-zinc-800 border-zinc-200
            dark:bg-zinc-900/70 bg-white p-7 mb-5
            transition-all duration-300
            hover:border-cyan-400/35 hover:shadow-cyber
          "
        >
          <div className="flex gap-6 flex-col sm:flex-row">

            {/* Avatar + side links */}
            <div className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.04, rotate: 1 }}
                className="
                  w-[152px] h-[152px] rounded-2xl
                  bg-gradient-to-br from-cyan-400 to-emerald-400
                  flex items-center justify-center
                  font-display font-black text-[48px] text-zinc-950
                  border-[3px] border-cyan-400/22 mb-4
                  shadow-[0_4px_24px_rgba(34,211,238,.18)]
                  transition-all duration-300
                  hover:shadow-[0_8px_36px_rgba(34,211,238,.32)]
                  cursor-default select-none
                "
              >
                MM
              </motion.div>
              <div className="flex flex-col gap-2">
                {SIDE_LINKS.map(({ icon, label, href, amber }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className={`
                      flex items-center gap-2 text-[11.5px] font-body
                      border dark:border-zinc-800 border-zinc-200 rounded-lg px-3 py-1.5
                      transition-all duration-200 group
                      ${amber
                        ? 'dark:text-zinc-400 text-zinc-500 dark:hover:border-amber-400/40 hover:border-amber-400/40 hover:text-amber-400 dark:hover:text-amber-400 dark:hover:bg-amber-400/5 hover:bg-amber-400/5'
                        : 'dark:text-zinc-400 text-zinc-500 dark:hover:border-cyan-400/40 hover:border-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-400 dark:hover:bg-cyan-400/5 hover:bg-cyan-400/5'
                      }
                    `}
                  >
                    <span className="w-[18px] text-center text-[13px]">{icon}</span>
                    {label}
                    {/* Left accent bar */}
                    <span className="absolute left-0 top-0 h-full w-[3px] rounded-l-lg bg-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bio text */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] dark:text-zinc-500 text-zinc-400">Professional Bio</span>
              </div>

              {PERSONAL.bio.map((para, i) => (
                <p key={i} className="text-[13px] dark:text-zinc-400 text-zinc-600 leading-[1.87] mb-3 font-body last:mb-0">
                  {para.text.split(new RegExp(`(${para.highlights.join('|')})`, 'g')).map((chunk, j) =>
                    para.highlights.includes(chunk)
                      ? <strong key={j} className={chunk.includes('Google') || chunk.includes('LeetCode') ? 'text-emerald-400' : 'dark:text-zinc-100 text-zinc-800 font-semibold'}>{chunk}</strong>
                      : chunk
                  )}
                </p>
              ))}

              {/* Meta grid */}
              <div className="mt-5 pt-5 border-t dark:border-zinc-800 border-zinc-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '📍', label: 'Location',  value: PERSONAL.location  },
                  { icon: '🎓', label: 'Education', value: PERSONAL.education  },
                  { icon: '✉',  label: 'Email',     value: PERSONAL.email, link: `mailto:${PERSONAL.email}` },
                  { icon: '🌍', label: 'Languages', value: 'Arabic · English · German (A1)' },
                ].map(({ icon, label, value, link }) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 3 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-[28px] h-[28px] rounded-lg dark:bg-zinc-800 bg-zinc-100 flex items-center justify-center text-[12px] flex-shrink-0 mt-0.5 transition-all duration-200 group-hover:bg-cyan-400/12 group-hover:scale-110">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-mono uppercase tracking-[0.15em] dark:text-zinc-600 text-zinc-400 mb-0.5">{label}</p>
                      {link
                        ? <a href={link} className="text-[12px] text-cyan-500 dark:text-cyan-400 hover:underline font-body">{value}</a>
                        : <p className="text-[12px] dark:text-zinc-300 text-zinc-700 font-body">{value}</p>
                      }
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Proof stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">
          {PERSONAL.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp(i * 0.07)}
              onClick={() => stat.link && window.open(stat.link, '_blank')}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`
                shimmer-card text-center rounded-xl border dark:border-zinc-800 border-zinc-200
                dark:bg-zinc-900/60 bg-white p-4
                transition-all duration-250
                ${stat.link ? 'cursor-pointer' : 'cursor-default'}
                ${stat.accent === 'amber'
                  ? 'hover:border-amber-400/35 hover:shadow-amber'
                  : stat.accent === 'sec'
                  ? 'hover:border-emerald-400/35 hover:shadow-sec'
                  : 'hover:border-cyan-400/35 hover:shadow-cyber'
                }
              `}
            >
              <p className={`font-display font-black text-[17px] mb-0.5 ${
                stat.accent === 'amber' ? 'text-amber-400'
                : stat.accent === 'sec'  ? 'text-emerald-400'
                : 'dark:text-zinc-100 text-zinc-900'
              }`}>
                {stat.value}
              </p>
              <p className="text-[10px] font-mono dark:text-zinc-400 text-zinc-600">{stat.label}</p>
              <p className={`text-[9px] mt-0.5 ${stat.accent === 'amber' ? 'text-amber-400/70' : stat.accent === 'sec' ? 'text-emerald-400/70' : 'text-emerald-400/70'}`}>
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── GitHub grid + lang bars ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Contribution graph */}
          <motion.div {...fadeUp(0.15)} className="shimmer-card rounded-xl border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/60 bg-white p-5 hover:border-cyan-400/30 transition-all duration-300">
            <div className="flex justify-between items-center mb-3">
              <p className="text-[12px] font-semibold dark:text-zinc-300 text-zinc-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" /> GitHub Activity
              </p>
              <span className="text-[10px] font-mono dark:text-zinc-500 text-zinc-400">MuhammadMagdyy</span>
            </div>
            <div className="rounded-lg border dark:border-zinc-800 border-zinc-100 dark:bg-black/25 bg-zinc-50 p-3 mb-3">
              <p className="text-[9px] font-mono dark:text-zinc-600 text-zinc-400 mb-2">contributions · last 6 months</p>
              <div className="grid gap-[3px]" style={{ gridTemplateColumns: 'repeat(26, 1fr)' }}>
                {Array.from({ length: 182 }).map((_, i) => {
                  const r = Math.random();
                  const bg = r > 0.88 ? 'bg-cyan-400' : r > 0.72 ? 'bg-cyan-400/55' : r > 0.52 ? 'bg-emerald-400/35' : 'dark:bg-zinc-800 bg-zinc-200';
                  return <div key={i} className={`h-[9px] rounded-[2px] ${bg}`} />;
                })}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[['18+', 'Repos'], ['42', 'Stars'], ['90+', 'PRs']].map(([v, l]) => (
                <div key={l} className="text-center rounded-xl dark:bg-zinc-800 bg-zinc-100 py-3 hover:dark:bg-zinc-700 transition-colors duration-200">
                  <p className="font-display font-black text-[16px] dark:text-zinc-100 text-zinc-800">{v}</p>
                  <p className="text-[9.5px] font-mono dark:text-zinc-500 text-zinc-400">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Language bars */}
          <motion.div {...fadeUp(0.22)} className="shimmer-card rounded-xl border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/60 bg-white p-5 hover:border-emerald-400/30 transition-all duration-300">
            <p className="text-[12px] font-semibold dark:text-zinc-300 text-zinc-700 flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Top Languages
            </p>
            <div className="space-y-4">
              {LANGS.map(({ name, pct, color }) => (
                <div key={name}>
                  <div className="flex justify-between text-[11px] mb-1.5">
                    <span className="font-mono dark:text-zinc-300 text-zinc-600">{name}</span>
                    <span className="font-mono dark:text-zinc-500 text-zinc-400">{pct}%</span>
                  </div>
                  <div className="h-[3px] w-full dark:bg-zinc-800 bg-zinc-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
                      className={`h-full rounded-full ${color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
