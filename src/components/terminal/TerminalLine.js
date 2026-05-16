import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import TerminalCursor from '@/components/terminal/TerminalCursor'

const typeStyles = {
  system: 'text-accent-cyan/90',
  command: 'text-foreground/90',
  output: 'text-muted',
  success: 'text-accent-teal',
  banner: 'font-semibold text-accent-purple/90 tracking-[0.2em]',
}

export default function TerminalLine({
  prefix = '>',
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
        initial: { opacity: 0, x: -4 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
      }
    : {}

  return (
    <Wrapper
      {...motionProps}
      className={cn(
        'font-mono text-[13px] leading-[1.65] sm:text-sm md:text-[15px]',
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
