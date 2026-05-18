import { m as motion } from 'framer-motion'
import { scrollToSection } from '@/utils/scrollTo'

export default function ScrollIndicator() {
  return (
    <motion.button
      type="button"
      onClick={() => scrollToSection('#about')}
      className="focus-ring absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-muted lg:bottom-8"
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      aria-label="Scroll to about section"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] sm:text-xs">
        Scroll
      </span>
      <span
        className="flex h-9 w-5 items-start justify-center rounded-full border border-accent-cyan/20 p-1"
      >
        <motion.span
          className="h-1.5 w-1 rounded-full bg-accent-cyan shadow-[0_0_8px_rgb(var(--glow-teal)/0.5)]"
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </span>
    </motion.button>
  )
}
