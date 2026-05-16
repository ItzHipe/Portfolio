import { memo } from 'react'
import { motion } from 'framer-motion'

function ExperienceOutput({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="terminal-rich-card my-2 space-y-0 divide-y divide-border/10"
    >
      {items.map((item) => (
        <div key={item.role} className="px-4 py-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-mono text-sm text-foreground">{item.role}</p>
            <p className="font-mono text-[10px] text-accent-cyan/70">{item.period}</p>
          </div>
          <p className="mt-0.5 text-xs text-accent-teal/80">{item.org}</p>
          <p className="mt-2 text-xs leading-relaxed text-muted">{item.detail}</p>
        </div>
      ))}
    </motion.div>
  )
}

export default memo(ExperienceOutput)
