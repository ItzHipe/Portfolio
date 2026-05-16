import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import TerminalLine from '@/components/terminal/TerminalLine'
import { useTerminalSequence } from '@/hooks/useTerminalSequence'
import { terminalConfig } from '@/data/terminal'

export default function TerminalBody({ commands, banner }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState(false)

  const allCommands = banner ? [banner, ...commands] : commands

  const { completed, current, activeText, showCursor } = useTerminalSequence(
    allCommands,
    { active }
  )

  useEffect(() => {
    if (isInView) setActive(true)
  }, [isInView])

  const prompt = `${terminalConfig.user}@${terminalConfig.hostname}:${terminalConfig.cwd}$`

  return (
    <div
      ref={ref}
      className="terminal-scanlines relative min-h-[280px] p-4 font-mono sm:min-h-[320px] sm:p-5 md:p-6"
    >
      <p className="mb-4 text-[11px] text-muted/80 sm:text-xs">
        <span className="text-accent-teal">●</span> connected —{' '}
        <span className="text-accent-cyan/80">{terminalConfig.hostname}</span>{' '}
        <span className="text-muted/50">({terminalConfig.version})</span>
      </p>

      <div className="space-y-2.5 sm:space-y-3" role="log" aria-live="polite" aria-relevant="additions">
        {completed.map((line) => (
          <TerminalLine
            key={line.id}
            prefix={line.prefix}
            text={line.rendered}
            type={line.type}
          />
        ))}

        {current && (
          <TerminalLine
            prefix={current.prefix}
            text={activeText}
            type={current.type}
            isActive
            showCursor={showCursor}
          />
        )}
      </div>

      <p className="mt-5 text-[11px] text-muted/60 sm:text-xs">
        <span className="text-accent-cyan/70">{prompt}</span>
        <span className="ml-2 animate-pulse text-muted/40">_</span>
      </p>
    </div>
  )
}
