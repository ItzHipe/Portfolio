import { memo } from 'react'
import { motion } from 'framer-motion'

function AchievementsOutput({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="terminal-rich-card my-2 grid gap-2 p-3 sm:grid-cols-2"
    >
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="rounded-lg border border-border/10 bg-surface/40 p-3"
        >
          <p className="font-mono text-xs font-medium text-foreground">{item.title}</p>
          <p className="mt-1.5 font-mono text-[11px] text-accent-cyan/90">{item.metric}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default memo(AchievementsOutput)
