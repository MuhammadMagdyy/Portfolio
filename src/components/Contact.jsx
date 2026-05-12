import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, CheckCheck, ExternalLink, Github, Linkedin, Shield } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Toast from './ui/Toast';
import { PERSONAL } from '../data/portfolio';

const SOCIAL_LINKS = [
  { icon: <Github size={18} />,  label: 'GitHub',   href: PERSONAL.github,   color: 'default' },
  { icon: <Linkedin size={18} />,label: 'LinkedIn',  href: PERSONAL.linkedin, color: 'default' },
  { icon: '⚡',                  label: 'LeetCode',  href: PERSONAL.leetcode, color: 'amber'   },
  { icon: '💼',                  label: 'Upwork',    href: PERSONAL.upwork,   color: 'sec'     },
  { icon: <Mail size={18} />,    label: 'Email',     href: `mailto:${PERSONAL.email}`, color: 'default' },
  { icon: <Shield size={18} />,  label: 'Certs',     href: PERSONAL.certs,    color: 'sec'     },
];

const QUICK_FACTS = [
  { emoji: '🧠', label: 'Specialisation', value: 'AI/RAG · Full Stack · Cybersecurity'      },
  { emoji: '⚡', label: 'LeetCode',       value: 'leetcode.com/u/MuhammadMagdyy',  link: PERSONAL.leetcode },
  { emoji: '🎓', label: 'Education',      value: 'BSc MET · German University in Cairo'     },
  { emoji: '🌍', label: 'Languages',      value: 'Arabic (Native) · English (Pro) · German (A1)' },
  { emoji: '📅', label: 'Experience',     value: 'Ulm University · Mansour Group (SAP)'     },
];

export default function Contact() {
  const [copied, setCopied]       = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL.email).then(() => {
      setCopied(true);
      setShowToast(true);
      setTimeout(() => { setCopied(false); setShowToast(false); }, 2400);
    });
  };

  return (
    <section id="contact" className="dark:bg-[#09090b] bg-slate-50">
      <Toast show={showToast} message="✓ Email copied to clipboard!" />

      <div className="max-w-[1060px] mx-auto section-pad">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Build Something"
          accent="Intelligent"
          subtitle="Open to full-time roles, AI consulting, and freelance projects. Average response under 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[860px] mx-auto">

          {/* ── Left: contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="shimmer-card rounded-2xl border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/60 bg-white p-6 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-cyber"
          >
            <p className="text-[9.5px] font-mono uppercase tracking-[0.2em] dark:text-zinc-500 text-zinc-400 mb-4 flex items-center gap-2">
              <Mail size={12} className="text-cyan-400" /> Direct Contact
            </p>

            <h3 className="font-display font-bold text-[18px] dark:text-zinc-100 text-zinc-900 mb-2">Say hello 👋</h3>
            <p className="text-[13px] dark:text-zinc-400 text-zinc-600 font-body leading-relaxed mb-5">
              Whether you have a project idea, a role to fill, or just want to connect — my inbox is always open.
            </p>

            {/* Copy email button */}
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="
                w-full flex items-center justify-between
                border dark:border-zinc-700 border-zinc-200
                dark:bg-zinc-800/60 bg-zinc-50
                rounded-xl px-4 py-3 mb-5
                transition-all duration-200
                hover:border-cyan-400/55
                hover:shadow-[0_4px_14px_rgba(34,211,238,.12)]
                group
              "
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail size={14} className="text-cyan-400 flex-shrink-0" />
                <span className="font-mono text-[11.5px] dark:text-zinc-300 text-zinc-700 truncate">{PERSONAL.email}</span>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={copied ? 'check' : 'copy'}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1,   opacity: 1 }}
                  exit={{   scale: 0.6,  opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {copied
                    ? <CheckCheck size={14} className="text-emerald-400" />
                    : <Copy       size={14} className="dark:text-zinc-500 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                  }
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Social grid */}
            <p className="text-[9.5px] font-mono uppercase tracking-[0.2em] dark:text-zinc-500 text-zinc-400 mb-3">
              🌐 Find Me Online
            </p>
            <div className="grid grid-cols-3 gap-2">
              {SOCIAL_LINKS.map(({ icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`
                    flex flex-col items-center gap-1.5 rounded-xl
                    border dark:border-zinc-800 border-zinc-200
                    dark:bg-zinc-800/40 bg-zinc-50
                    py-3 px-2 transition-all duration-200
                    ${color === 'amber'
                      ? 'dark:text-amber-400 text-amber-500 hover:border-amber-400/40 hover:shadow-amber hover:bg-amber-400/5'
                      : color === 'sec'
                      ? 'dark:text-emerald-400 text-emerald-500 hover:border-emerald-400/40 hover:shadow-sec hover:bg-emerald-400/5'
                      : 'dark:text-zinc-400 text-zinc-500 hover:border-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-400 hover:shadow-cyber hover:bg-cyan-400/4'
                    }
                  `}
                >
                  <span className="text-[18px] leading-none">
                    {typeof icon === 'string' ? icon : icon}
                  </span>
                  <span className="text-[9px] font-mono">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: availability + facts ── */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Availability card */}
            <div className="rounded-xl border border-emerald-400/22 bg-emerald-400/5 dark:bg-emerald-400/5 p-5 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-[0.12em]">Currently Available</span>
              </div>
              <p className="font-display font-bold text-[16px] dark:text-zinc-100 text-zinc-900 mb-2">Open to opportunities</p>
              <p className="text-[13px] dark:text-zinc-400 text-zinc-600 font-body leading-relaxed">
                Full-time engineering roles, AI consulting, and freelance development — remote or Cairo-based.
              </p>
            </div>

            {/* Quick facts */}
            {QUICK_FACTS.map(({ emoji, label, value, link }) => (
              <motion.div
                key={label}
                whileHover={{ x: 3 }}
                className="flex items-center gap-3 border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/60 bg-white rounded-xl px-4 py-3 transition-all duration-200 hover:border-cyan-400/30 hover:dark:border-cyan-400/30 group"
              >
                <span className="text-[18px] flex-shrink-0 transition-transform duration-200 group-hover:scale-110">{emoji}</span>
                <div className="min-w-0">
                  <p className="text-[9px] font-mono uppercase tracking-[0.14em] dark:text-zinc-500 text-zinc-400 mb-0.5">{label}</p>
                  {link
                    ? <a href={link} target="_blank" rel="noopener noreferrer" className="text-[12px] text-amber-400 hover:text-amber-300 transition-colors font-body">{value}</a>
                    : <p className="text-[12px] dark:text-zinc-300 text-zinc-700 font-body truncate">{value}</p>
                  }
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
