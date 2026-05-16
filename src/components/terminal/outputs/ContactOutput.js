import { memo } from 'react'
import { motion } from 'framer-motion'

function ContactOutput({ email, response, openTo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="terminal-rich-card my-2 p-4"
    >
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Email</p>
      <a
        href={`mailto:${email}`}
        className="focus-ring mt-1 inline-block font-mono text-sm text-accent-cyan hover:underline"
      >
        {email}
      </a>
      <p className="mt-3 text-xs text-muted">{response}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {openTo.map((label) => (
          <span
            key={label}
            className="rounded-md border border-accent-teal/25 bg-accent-teal/5 px-2 py-1 font-mono text-[10px] text-accent-teal"
          >
            {label}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default memo(ContactOutput)
