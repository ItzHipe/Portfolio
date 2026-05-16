import { memo } from 'react'
import { motion } from 'framer-motion'
import { LinkArrow } from '@/components/ui/Icons'

function LinkOutput({ label, href, external }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-2"
    >
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={!external && href.endsWith('.pdf') ? true : undefined}
        className="terminal-action-btn focus-ring inline-flex"
      >
        {label}
        <LinkArrow className="h-3.5 w-3.5" />
      </a>
    </motion.div>
  )
}

export default memo(LinkOutput)
