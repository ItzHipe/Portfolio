import { memo } from 'react'
import { motion } from 'framer-motion'

function SkillsOutput({ groups }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="terminal-rich-card my-2 space-y-3 p-4"
    >
      {groups.map((group) => (
        <div key={group.label}>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border/15 bg-elevated/80 px-2 py-1 font-mono text-[11px] text-foreground/90"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default memo(SkillsOutput)
