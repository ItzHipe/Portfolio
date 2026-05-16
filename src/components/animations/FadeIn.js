import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { EASE, VIEWPORT } from '@/lib/motion'

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.52,
  direction = 'up',
  as: Component = motion.div,
  ...rest
}) {
  const hidden =
    direction === 'none'
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: direction === 'up' ? 18 : direction === 'down' ? -18 : 0,
          x: direction === 'left' ? 12 : direction === 'right' ? -12 : 0,
        }

  const visible = {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration, delay, ease: EASE.out },
  }

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{ hidden, visible }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export function FadeInHero({ children, className, delay = 0, ...rest }) {
  return (
    <motion.div
      className={cn(className)}
      custom={delay}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: (step = 0) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 0.52, delay: step * 0.085, ease: EASE.out },
        }),
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
