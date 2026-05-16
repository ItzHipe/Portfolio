import { memo } from 'react'
import { motion } from 'framer-motion'

function ProjectsListOutput({ items, onRunCommand }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="terminal-rich-card my-2 divide-y divide-border/10"
    >
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onRunCommand?.(item.cmd)}
          className="focus-ring flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-smooth hover:bg-accent-cyan/5"
        >
          <span>
            <span className="font-mono text-sm text-foreground">{item.name}</span>
            <span className="ml-2 font-mono text-[10px] text-muted">{item.cmd}</span>
          </span>
          <span className="shrink-0 rounded-full border border-accent-teal/30 px-2 py-0.5 font-mono text-[10px] text-accent-teal">
            {item.status}
          </span>
        </button>
      ))}
    </motion.div>
  )
}

export default memo(ProjectsListOutput)
