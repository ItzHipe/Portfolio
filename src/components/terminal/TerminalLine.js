import { memo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import TerminalCursor from '@/components/terminal/TerminalCursor'

const typeStyles = {
  system: 'text-muted/60',
  command: 'text-foreground/80',
  output: 'text-muted/80',
  success: 'text-accent-cyan/80',
  banner: 'font-normal text-muted/70 tracking-[0.1em]',
}

function TerminalLine({
  prefix = '›',
  text,
  type = 'system',
  isActive,
  showCursor,
  className,
  animate = true,
}) {
  const isWelcome = type === 'success' && text?.toLowerCase().includes('welcome')

  const Wrapper = animate ? motion.div : 'div'
  const motionProps = animate
    ? {
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      }
    : {}

  return (
    <Wrapper
      {...motionProps}
      className={cn(
        'font-mono text-[12.5px] leading-[1.8] sm:text-[13.5px]',
        typeStyles[type] ?? typeStyles.system,
        isWelcome && 'text-glow text-accent-cyan',
        className
      )}
    >
      {prefix ? (
        <span className="mr-2 inline-block min-w-[1.25rem] select-none text-accent-cyan/60">
          {prefix}
        </span>
      ) : null}
      <span className="break-words">{text}</span>
      {isActive && showCursor ? <TerminalCursor /> : null}
    </Wrapper>
  )
}

export default memo(TerminalLine)
