import { memo } from 'react'
import { motion } from 'framer-motion'

function HelpOutput({ groups }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="my-3 grid gap-6 px-1 sm:grid-cols-2"
    >
      {groups.map((group) => (
        <div key={group.title}>
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent-cyan/80">
          {'// '}{group.title}
          </p>
          <ul className="space-y-1.5 pl-4 border-l border-border/15">
            {group.cmds.map((cmd) => (
              <li key={cmd}>
                <code className="font-mono text-sm text-foreground/85">{cmd}</code>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  )
}

export default memo(HelpOutput)
