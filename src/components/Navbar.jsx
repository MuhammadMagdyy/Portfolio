import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { NAV_LINKS, PERSONAL } from '../data/portfolio';
import Logo from './Logo'; 
import { useTranslation } from 'react-i18next'; 
import LanguageToggle from './LanguageToggle';

const SECTION_IDS = NAV_LINKS.map(l => l.href);

export default function Navbar() {
  const { t } = useTranslation();
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? isDark
            ? 'bg-[#09090b]/85 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_1px_0_rgba(255,255,255,.04)]'
            : 'bg-slate-50/90 backdrop-blur-xl border-b border-zinc-200/70 shadow-sm'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">

        {/* Logo Section */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 group"
        >
          <Logo />
        </motion.button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = activeId === href;
            // Standardizing the key to lowercase to match i18n.js
            const translationKey = label.toLowerCase().trim();

            return (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`
                  relative px-3 py-1.5 rounded-lg text-[12px] font-body font-medium
                  transition-all duration-200 group
                  ${isActive
                    ? 'text-cyan-400 bg-cyan-400/8'
                    : 'dark:text-zinc-400 text-zinc-600 dark:hover:text-zinc-100 hover:text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                  }
                `}
              >
                {/* Dynamically translated label */}
                {t(translationKey)}

                {/* Active underline */}
                <span
                  className={`
                    absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-cyan-400
                    transition-all duration-300
                    ${isActive ? 'w-[55%] opacity-100' : 'w-0 opacity-0'}
                  `}
                />
              </button>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Security badge - Now Translated */}
          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/7 px-2.5 py-1 transition-all duration-200 hover:bg-emerald-400/14">
            <Shield size={10} className="text-emerald-400" />
            <span className="text-[9.5px] font-mono font-semibold text-emerald-400 uppercase tracking-wider">
              {t('secured')}
            </span>
          </div>
          
          {/* <LanguageToggle /> */}

          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.9, rotate: 20 }}
            whileHover={{ scale: 1.08, rotate: 12 }}
            className="w-8 h-8 rounded-lg flex items-center justify-center dark:bg-zinc-800 bg-zinc-100 dark:hover:bg-zinc-700 hover:bg-zinc-200 border border-transparent dark:hover:border-cyan-400/30 hover:border-cyan-400/30 transition-all duration-200"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                exit={{   rotate:  90,  opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.18 }}
              >
                {isDark
                  ? <Sun  size={15} className="text-amber-400" />
                  : <Moon size={15} className="text-zinc-600"  />
                }
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center dark:bg-zinc-800 bg-zinc-100 dark:text-zinc-300 text-zinc-700 transition-all"
            aria-label="Menu"
          >
            {menuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{   height: 0,    opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden dark:bg-zinc-900/95 bg-white/95 backdrop-blur-xl border-t dark:border-zinc-800 border-zinc-200"
          >
            <ul className="px-4 py-3 space-y-1">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ x: -14, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.045 }}
                >
                  <button
                    onClick={() => scrollTo(href)}
                    className={`
                      w-full text-left px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all
                      ${activeId === href
                        ? 'bg-cyan-400/12 text-cyan-400'
                        : 'dark:text-zinc-300 text-zinc-700 dark:hover:bg-zinc-800 hover:bg-zinc-100'
                      }
                    `}
                  >
                    {t(label.toLowerCase().trim())}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}