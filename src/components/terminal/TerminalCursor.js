import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

export default function TerminalCursor({ className, visible = true }) {
  if (!visible) return null

  return (
    <motion.span
      aria-hidden
      className={cn(
        'ml-[2px] inline-block h-[1.15em] w-[0.55em] translate-y-[0.1em] rounded-[2px] bg-accent-cyan shadow-[0_0_10px_rgb(var(--glow-teal)/0.6)]',
        className
      )}
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
    />
  )
}
