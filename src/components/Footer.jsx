import { motion } from 'framer-motion';
import { Github, Linkedin, Shield } from 'lucide-react';
import { PERSONAL } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark:bg-zinc-900/50 bg-zinc-100/60 border-t dark:border-zinc-800 border-zinc-200">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Logo + name */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -1 }}
            className="flex items-center gap-3"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center font-display font-black text-[13px] text-zinc-950">
              M
            </div>
            <div className="text-left">
              <p className="font-display font-bold text-[13px] dark:text-zinc-200 text-zinc-800">{PERSONAL.name}</p>
              <p className="text-[10px] dark:text-zinc-500 text-zinc-400 font-body">Full Stack Developer &amp; AI Engineer</p>
            </div>
          </motion.button>

          {/* Security badge */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/6 px-3 py-1.5 cursor-default transition-all duration-200 hover:bg-emerald-400/12 hover:border-emerald-400/50"
          >
            <Shield size={11} className="text-emerald-400" />
            <span className="text-[9.5px] font-mono font-medium text-emerald-400">Google Cybersecurity Certified</span>
          </motion.div>

          {/* Social icons */}
          <div className="flex items-center gap-2.5">
            {[
              { icon: <Github size={14} />,   href: PERSONAL.github,   label: 'GitHub'   },
              { icon: <Linkedin size={14} />, href: PERSONAL.linkedin, label: 'LinkedIn' },
              { icon: '⚡',                   href: PERSONAL.leetcode, label: 'LeetCode', amber: true },
            ].map(({ icon, href, label, amber }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  w-8 h-8 rounded-lg flex items-center justify-center text-[13px]
                  border dark:border-zinc-700 border-zinc-300
                  dark:bg-zinc-800 bg-zinc-200
                  transition-all duration-200
                  ${amber
                    ? 'text-amber-400 dark:hover:border-amber-400/50 hover:border-amber-400/50 dark:hover:bg-amber-400/10'
                    : 'dark:text-zinc-400 text-zinc-600 dark:hover:text-zinc-100 hover:text-zinc-900 dark:hover:border-cyan-400/40 hover:border-cyan-400/40 dark:hover:bg-cyan-400/8'
                  }
                `}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t dark:border-zinc-800/60 border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10.5px] dark:text-zinc-600 text-zinc-400 font-body">
            © {year} {PERSONAL.name} · Built with React 18, Tailwind CSS &amp; Framer Motion
          </p>
          <p className="text-[10.5px] font-mono dark:text-zinc-600 text-zinc-400">
            cairo, egypt · remote friendly
          </p>
        </div>
      </div>
    </footer>
  );
}
