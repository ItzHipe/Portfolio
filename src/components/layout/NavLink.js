import { cn } from '@/lib/cn'
import { scrollToSection } from '@/utils/scrollTo'
import { motion } from 'framer-motion'

export default function NavLink({
  href,
  label,
  isActive,
  onNavigate,
  variant = 'desktop',
}) {
  const handleClick = (e) => {
    e.preventDefault()
    scrollToSection(href)
    onNavigate?.()
  }

  const isDesktop = variant === 'desktop'

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'focus-ring relative font-medium transition-colors duration-300',
        isDesktop && 'px-3.5 py-1.5 text-sm tracking-wide rounded-full',
        !isDesktop &&
          'block w-full border-l-2 py-3 pl-4 pr-2 text-base transition-[border-color,color,padding] duration-300',
        isDesktop &&
          cn(
            'text-foreground/60 hover:text-foreground',
            isActive && 'text-foreground'
          ),
        !isDesktop &&
          cn(
            'border-transparent text-muted hover:text-foreground',
            isActive && 'border-accent-cyan pl-5 text-foreground'
          )
      )}
    >
      {isDesktop && isActive && (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-0 -z-10 rounded-full bg-foreground/[0.04] dark:bg-foreground/[0.08]"
          transition={{ type: 'spring', stiffness: 350, damping: 30, mass: 1 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </a>
  )
}
