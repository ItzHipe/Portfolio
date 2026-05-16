import { cn } from '@/lib/cn'
import { scrollToSection } from '@/utils/scrollTo'

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
        'focus-ring font-medium transition-colors duration-200',
        isDesktop && 'relative px-3 py-2 text-sm tracking-wide',
        !isDesktop &&
          'block w-full border-l-2 py-3 pl-4 pr-2 text-base transition-[border-color,color,padding] duration-200',
        isDesktop &&
          cn(
            'text-foreground/55 hover:text-foreground/90',
            isActive && 'text-foreground'
          ),
        !isDesktop &&
          cn(
            'border-transparent text-muted hover:text-foreground',
            isActive && 'border-foreground/80 pl-5 text-foreground'
          )
      )}
    >
      {label}
    </a>
  )
}
