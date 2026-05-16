import { memo } from 'react'
import { motion } from 'framer-motion'

function HelpOutput({ groups }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="terminal-rich-card my-2 grid gap-3 sm:grid-cols-2"
    >
      {groups.map((group) => (
        <div key={group.title} className="rounded-lg border border-border/10 bg-surface/40 p-3">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent-cyan/70">
            {group.title}
          </p>
          <ul className="space-y-1">
            {group.cmds.map((cmd) => (
              <li key={cmd}>
                <code className="font-mono text-xs text-foreground/85">{cmd}</code>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  )
}

export default memo(HelpOutput)
