import { motion } from 'framer-motion';

const ACCENT = {
  cyber:  'border-cyan-400/22 bg-cyan-400/7 text-cyan-400 hover:bg-cyan-400/18 hover:border-cyan-400/50',
  sec:    'border-emerald-400/22 bg-emerald-400/7 text-emerald-400 hover:bg-emerald-400/18 hover:border-emerald-400/50',
  amber:  'border-amber-400/22 bg-amber-400/7 text-amber-400 hover:bg-amber-400/18 hover:border-amber-400/50',
  violet: 'border-violet-400/22 bg-violet-400/7 text-violet-400 hover:bg-violet-400/18 hover:border-violet-400/50',
  gray:   'border-zinc-600/30 bg-zinc-700/20 text-zinc-400 hover:bg-zinc-700/40',
};

export default function Badge({ label, accent = 'cyber', className = '' }) {
  return (
    <motion.span
      whileHover={{ scale: 1.06, y: -1 }}
      whileTap={{ scale: 0.96 }}
      className={`
        inline-block rounded-full border px-3 py-[3px]
        text-[10.5px] font-medium font-body
        cursor-default select-none
        transition-all duration-200
        ${ACCENT[accent] ?? ACCENT.cyber}
        ${className}
      `}
    >
      {label}
    </motion.span>
  );
}
