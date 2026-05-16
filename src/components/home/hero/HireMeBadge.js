import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { scrollToSection } from '@/utils/scrollTo'

export default function HireMeBadge({ label, ringText, href }) {
  const reduceMotion = useReducedMotion()

  const handleClick = (e) => {
    e.preventDefault()
    scrollToSection(href)
  }

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="focus-ring group relative hidden h-36 w-36 sm:flex sm:h-40 sm:w-40 lg:h-44 lg:w-44"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      aria-label={label}
    >
      <motion.div
        className="absolute inset-0"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <Image
          src="/images/svgs/CircularText.svg"
          alt=""
          fill
          className="object-contain opacity-90 invert dark:invert"
          sizes="176px"
        />
      </motion.div>

      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-foreground/90 bg-foreground text-sm font-semibold text-void transition-transform duration-base group-hover:scale-105 sm:h-20 sm:w-20 sm:text-base">
          {label}
        </span>
      </span>

      <span className="sr-only">{ringText}</span>
    </motion.a>
  )
}
