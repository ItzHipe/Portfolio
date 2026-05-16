import { memo } from 'react'
import { motion } from 'framer-motion'

function WhoamiOutput({ name, role, location, focus }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="terminal-rich-card my-2 p-4"
    >
      <p className="font-display text-lg font-semibold text-foreground">{name}</p>
      <p className="mt-1 font-mono text-sm text-accent-cyan/90">{role}</p>
      <p className="mt-2 text-xs text-muted">{location}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {focus.map((item) => (
          <span
            key={item}
            className="rounded-md border border-accent-teal/20 bg-accent-teal/5 px-2 py-1 font-mono text-[11px] text-accent-teal"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default memo(WhoamiOutput)
