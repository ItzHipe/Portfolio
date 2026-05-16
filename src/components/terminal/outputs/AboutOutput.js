import { memo } from 'react'
import { motion } from 'framer-motion'

function AboutOutput({ summary, highlights }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="terminal-rich-card my-2 space-y-3 p-4"
    >
      <p className="text-sm leading-relaxed text-muted">{summary}</p>
      <ul className="space-y-2 border-t border-border/10 pt-3">
        {highlights.map((h) => (
          <li key={h} className="flex gap-2 text-xs text-foreground/85">
            <span className="text-accent-cyan">▸</span>
            {h}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default memo(AboutOutput)
