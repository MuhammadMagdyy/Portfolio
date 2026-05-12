import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, accent, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 text-center"
    >
      {eyebrow && (
        <p className="mb-3 flex items-center justify-center gap-3 text-[10px] font-mono font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-zinc-400 dark:to-zinc-600 transition-all duration-500 group-hover:w-12" />
          {eyebrow}
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-zinc-400 dark:to-zinc-600" />
        </p>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight dark:text-zinc-50 text-zinc-900">
        {title}{' '}
        {accent && (
          <span className="gradient-text">{accent}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-md mx-auto text-[14px] dark:text-zinc-400 text-zinc-500 font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
