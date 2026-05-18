import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/cn'
import { SunIcon, MoonIcon } from '@/components/ui/Icons'
import { motion } from 'framer-motion'

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
        'focus-ring touch-target relative flex items-center justify-center rounded-full glass transition-[transform,box-shadow,color,background-color,border-color] duration-slow hover:scale-[1.03] active:scale-[0.97] text-foreground/70 hover:text-foreground hover:shadow-glow-sm overflow-hidden',
        className
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative flex h-5 w-5 items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0.4,
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <SunIcon className="h-5 w-5" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0.4 : 1,
            opacity: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <MoonIcon className="h-5 w-5" />
        </motion.div>
      </div>
    </button>
  )
}
