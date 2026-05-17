import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/cn'
import { SunIcon, MoonIcon } from '@/components/ui/Icons'

export default function ThemeToggle({ className }) {
  const { isDark, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <span
        className={cn('inline-block h-10 w-10 rounded-full glass', className)}
        aria-hidden
      />
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'focus-ring touch-target relative flex items-center justify-center rounded-full glass transition-[transform,box-shadow,color] duration-base hover:scale-[1.03] active:scale-[0.97] text-foreground/70 hover:text-foreground',
        className
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  )
}
