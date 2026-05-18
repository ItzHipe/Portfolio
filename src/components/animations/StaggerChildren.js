import { m as motion } from 'framer-motion'
import {
  staggerContainer,
  staggerItem,
  staggerItemAlt,
  VIEWPORT,
} from '@/lib/motion'

export function StaggerContainer({
  children,
  className,
  stagger = 0.085,
  delayChildren = 0.05,
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, alt = false }) {
  return (
    <motion.div className={className} variants={alt ? staggerItemAlt : staggerItem}>
      {children}
    </motion.div>
  )
}
