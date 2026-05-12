// src/styles/theme.ts

export const THEMES = {
  cyber: {
    accent:  'cyan-400',
    shadow:  'hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]',
    border:  'hover:border-cyan-400/40',
    glow:    'from-cyan-400/10',
    ring:    'ring-cyan-400/20',
    badge:   'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
  },
  sec: {
    accent:  'emerald-400',
    shadow:  'hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]',
    border:  'hover:border-emerald-400/40',
    glow:    'from-emerald-400/10',
    ring:    'ring-emerald-400/20',
    badge:   'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  },
  amber: {
    accent:  'amber-400',
    shadow:  'hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]',
    border:  'hover:border-amber-400/40',
    glow:    'from-amber-400/10',
    ring:    'ring-amber-400/20',
    badge:   'bg-amber-400/10 text-amber-400 border-amber-400/20',
  },
  violet: {
    accent:  'violet-400',
    shadow:  'hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]',
    border:  'hover:border-violet-400/40',
    glow:    'from-violet-400/10',
    ring:    'ring-violet-400/20',
    badge:   'bg-violet-400/10 text-violet-400 border-violet-400/20',
  },
};

/**
 * Helper to safely get theme classes without ternary spam in components
 */
export const getTheme = (key: string) => THEMES[key as keyof typeof THEMES] || THEMES.cyber;