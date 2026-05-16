import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

export default function TerminalCursor({ className, visible = true }) {
  if (!visible) return null

  return (
    <motion.span
      aria-hidden
      className={cn(
        'ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.1em] rounded-[1px] bg-accent-cyan shadow-[0_0_8px_rgb(var(--glow-teal)/0.9)]',
        className
      )}
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.49, 0.5, 1] }}
    />
  )
}
