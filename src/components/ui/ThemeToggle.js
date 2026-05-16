import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/cn'

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
        'focus-ring touch-target relative flex items-center justify-center rounded-full glass transition-[transform,box-shadow] duration-base hover:scale-[1.03] active:scale-[0.97]',
        className
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Image
        src={
          isDark
            ? '/images/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg'
            : '/images/svgs/moon-filled-to-sunny-filled-loop-transition.svg'
        }
        alt=""
        width={24}
        height={24}
        className="h-6 w-6"
      />
    </button>
  )
}
