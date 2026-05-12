import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { CERTIFICATIONS, PERSONAL } from '../data/portfolio';

const ACCENT = {
  sec:    { chip: 'border-emerald-400/35 bg-emerald-400/8 text-emerald-400', icon: 'border-emerald-400/28 bg-emerald-400/10', skill: 'border-emerald-400/22 bg-emerald-400/8 text-emerald-400', link: 'text-emerald-500 dark:text-emerald-400 hover:text-emerald-300', card: 'hover:border-emerald-400/35 hover:shadow-sec' },
  cyber:  { chip: 'border-cyan-400/35 bg-cyan-400/8 text-cyan-400',         icon: 'border-cyan-400/28 bg-cyan-400/10',         skill: 'border-cyan-400/22 bg-cyan-400/8 text-cyan-400',         link: 'text-cyan-500 dark:text-cyan-400 hover:text-cyan-300',     card: 'hover:border-cyan-400/35 hover:shadow-cyber'   },
  amber:  { chip: 'border-amber-400/35 bg-amber-400/8 text-amber-400',       icon: 'border-amber-400/28 bg-amber-400/10',       skill: 'border-amber-400/22 bg-amber-400/8 text-amber-400',       link: 'text-amber-500 dark:text-amber-400 hover:text-amber-300',   card: 'hover:border-amber-400/35 hover:shadow-amber'  },
  violet: { chip: 'border-violet-400/35 bg-violet-400/8 text-violet-400',    icon: 'border-violet-400/28 bg-violet-400/10',    skill: 'border-violet-400/22 bg-violet-400/8 text-violet-400',    link: 'text-violet-500 dark:text-violet-400 hover:text-violet-300', card: 'hover:border-violet-400/35 hover:shadow-violet'},
};

/* ── Featured card (Google Cybersecurity) ───────────────────── */
function FeaturedCert({ cert }) {
  const a = ACCENT[cert.accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="
        shimmer-card relative overflow-hidden rounded-2xl
        border border-emerald-400/25 dark:bg-zinc-900/70 bg-white
        p-7 mb-5 transition-all duration-300
        hover:border-emerald-400/50 hover:shadow-sec hover:-translate-y-1
      "
    >
      {/* Background glow blobs */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-400/6 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-cyan-400/5 blur-2xl pointer-events-none" />

      <div className="relative">
        {/* Top badges */}
        <div className="flex items-center gap-3 flex-wrap mb-5">
          <div className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wide ${a.chip}`}>
            ★ Featured Certificate
          </div>
          <div className="flex items-center gap-1.5 rounded-full border dark:border-zinc-700 border-zinc-200 px-2.5 py-1">
            <ShieldCheck size={10} className="text-emerald-400" />
            <span className="text-[9.5px] font-mono dark:text-zinc-400 text-zinc-500 uppercase tracking-wider">Verified</span>
          </div>
        </div>

        <div className="flex items-start gap-5 flex-col sm:flex-row">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: -5 }}
            className={`w-[54px] h-[54px] rounded-2xl border flex items-center justify-center text-[24px] flex-shrink-0 transition-all duration-300 hover:shadow-sec ${a.icon}`}
          >
            {cert.icon}
          </motion.div>

          <div className="flex-1">
            <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
              <h3 className="font-display font-black text-[18px] sm:text-[20px] dark:text-zinc-50 text-zinc-900">{cert.name}</h3>
              <span className="font-mono text-[11px] dark:text-zinc-500 text-zinc-400">{cert.year}</span>
            </div>
            <p className="text-[12px] font-semibold text-emerald-400 mb-4">{cert.issuer}</p>
            <p className="text-[13px] dark:text-zinc-400 text-zinc-600 leading-[1.75] mb-5 font-body">{cert.desc}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {cert.skills.map(s => (
                <motion.span
                  key={s}
                  whileHover={{ scale: 1.05, y: -1 }}
                  className={`rounded-full border px-3 py-1 text-[11px] font-medium font-body cursor-default transition-all duration-200 ${a.skill}`}
                >
                  {s}
                </motion.span>
              ))}
            </div>

            <motion.a
              href={PERSONAL.certs}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-display font-bold text-[12px] px-5 py-2.5 transition-all duration-200 shadow-[0_4px_18px_rgba(52,211,153,.3)] hover:shadow-[0_6px_24px_rgba(52,211,153,.45)]"
            >
              View Certificate <ExternalLink size={13} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Secondary cert card ─────────────────────────────────────── */
function CertCard({ cert, index }) {
  const a = ACCENT[cert.accent] ?? ACCENT.cyber;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className={`shimmer-card group rounded-2xl border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/60 bg-white p-5 transition-all duration-300 hover:-translate-y-[3px] ${a.card}`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          className={`w-9 h-9 rounded-xl border flex items-center justify-center text-[16px] transition-all duration-300 ${a.icon}`}
        >
          {cert.icon}
        </motion.div>
        <div className="flex items-center gap-1.5 rounded-full border dark:border-zinc-700 border-zinc-200 px-2 py-0.5">
          <ShieldCheck size={9} className={a.link.split(' ')[0]} />
          <span className="text-[8.5px] font-mono dark:text-zinc-500 text-zinc-400 uppercase tracking-wide">Verified</span>
        </div>
      </div>

      <h3 className="font-display font-bold text-[13px] dark:text-zinc-100 text-zinc-900 mb-1 leading-tight">{cert.name}</h3>
      <p className={`text-[11px] font-semibold mb-3 ${a.link.split(' ')[0]}`}>{cert.issuer} · {cert.year}</p>
      <p className="text-[11.5px] dark:text-zinc-400 text-zinc-600 leading-[1.65] mb-3 font-body">{cert.desc}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {cert.skills.slice(0, 4).map(s => (
          <span key={s} className="text-[9.5px] font-mono dark:bg-zinc-800 bg-zinc-100 dark:text-zinc-400 text-zinc-500 px-2 py-0.5 rounded-[4px] transition-all duration-200 hover:-translate-y-[1px]">{s}</span>
        ))}
        {cert.skills.length > 4 && (
          <span className="text-[9.5px] font-mono dark:text-zinc-600 text-zinc-400">+{cert.skills.length - 4} more</span>
        )}
      </div>

      <a
        href={PERSONAL.certs}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 text-[11px] font-body font-semibold transition-colors duration-200 ${a.link}`}
      >
        View on LinkedIn <ExternalLink size={10} />
      </a>
    </motion.div>
  );
}

export default function Certifications() {
  const [featured, ...rest] = CERTIFICATIONS;
  return (
    <section id="certs" className="dark:bg-zinc-900/30 bg-zinc-50/60">
      <div className="max-w-[1060px] mx-auto section-pad">
        <SectionHeader
          eyebrow="Verified Expertise"
          title="Professional"
          accent="Certifications"
          subtitle="Industry credentials spanning AI, cloud infrastructure, full-stack development, and cybersecurity."
        />
        <FeaturedCert cert={featured} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
