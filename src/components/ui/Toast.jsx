import { AnimatePresence, motion } from 'framer-motion';

export default function Toast({ show, message = '✓ Copied!' }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0,   scale: 1   }}
          exit={{   opacity: 0, y: -8,   scale: 0.9 }}
          transition={{ duration: 0.22 }}
          className="
            fixed top-4 left-1/2 -translate-x-1/2 z-[999]
            bg-zinc-900 dark:bg-zinc-800
            border border-emerald-400/30
            text-emerald-400
            text-[11px] font-mono font-semibold
            px-4 py-2.5 rounded-xl
            shadow-[0_4px_20px_rgba(52,211,153,.25)]
            whitespace-nowrap
          "
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
