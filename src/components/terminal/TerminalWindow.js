import { m as motion } from 'framer-motion'
import { cn } from '@/lib/cn'

function WindowControl({ color, label }) {
  return (
    <span
      className={cn('h-3 w-3 rounded-full transition-transform duration-base hover:scale-110', color)}
      aria-hidden
    >
      <span className="sr-only">{label}</span>
    </span>
  )
}

export default function TerminalWindow({ title, children, className }) {
  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-xl border border-accent-cyan/20 bg-elevated/95 shadow-glow-lg backdrop-blur-lg sm:rounded-2xl',
        'terminal-window-reflection',
        className
      )}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 70, damping: 25, mass: 1.2 }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.06] to-transparent"
      />

      <div className="flex items-center gap-3 border-b border-border/10 bg-void/60 px-4 py-3 sm:px-5">
        <div className="flex gap-2">
          <WindowControl color="bg-[#ff5f57]" label="Close" />
          <WindowControl color="bg-[#febc2e]" label="Minimize" />
          <WindowControl color="bg-[#28c840]" label="Maximize" />
        </div>
        <p className="flex-1 truncate text-center font-mono text-[11px] text-muted sm:text-xs">
          {title}
        </p>
        <div className="w-[52px]" aria-hidden />
      </div>

      <div className="relative">{children}</div>
    </motion.div>
  )
}
