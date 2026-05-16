import { useRef, useState, useEffect, memo } from 'react'
import { useInView } from 'framer-motion'
import TerminalLine from '@/components/terminal/TerminalLine'
import { useTerminalSequence } from '@/hooks/useTerminalSequence'

function TerminalBootSequence({ commands, banner, onComplete }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [active, setActive] = useState(false)
  const completedRef = useRef(false)

  const allCommands = banner ? [banner, ...commands] : commands

  const { completed, current, activeText, showCursor, isFinished } =
    useTerminalSequence(allCommands, { active })

  useEffect(() => {
    if (isInView) setActive(true)
  }, [isInView])

  useEffect(() => {
    if (isFinished && !completedRef.current) {
      completedRef.current = true
      onComplete?.()
    }
  }, [isFinished, onComplete])

  return (
    <div ref={ref} className="space-y-2.5 sm:space-y-3">
      {completed.map((line) => (
        <TerminalLine
          key={line.id}
          prefix={line.prefix}
          text={line.rendered}
          type={line.type}
          animate={false}
        />
      ))}

      {current ? (
        <TerminalLine
          prefix={current.prefix}
          text={activeText}
          type={current.type}
          isActive
          showCursor={showCursor}
          animate={false}
        />
      ) : null}
    </div>
  )
}

export default memo(TerminalBootSequence)
