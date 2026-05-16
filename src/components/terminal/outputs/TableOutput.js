import { memo } from 'react'
import { motion } from 'framer-motion'

function TableOutput({ title, rows }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="terminal-rich-card my-2 overflow-hidden p-0"
    >
      {title ? (
        <p className="border-b border-border/10 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-accent-cyan/70">
          {title}
        </p>
      ) : null}
      <table className="w-full font-mono text-xs">
        <tbody>
          {rows.map((row) => (
            <tr key={row.layer} className="border-b border-border/5 last:border-0">
              <td className="w-[28%] px-4 py-2.5 text-accent-teal/90">{row.layer}</td>
              <td className="px-4 py-2.5 text-muted">{row.tools}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}

export default memo(TableOutput)
