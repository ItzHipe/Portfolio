import { m as motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { EASE, VIEWPORT } from '@/lib/motion'

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  as: Component = motion.div,
  ...rest
}) {
  const hidden =
    direction === 'none'
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: direction === 'up' ? 8 : direction === 'down' ? -8 : 0,
          x: direction === 'left' ? 8 : direction === 'right' ? -8 : 0,
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
        hidden: { opacity: 0, y: 8 },
        visible: (step = 0) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: step * 0.1, ease: EASE.out },
        }),
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
