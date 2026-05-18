import { m as motion } from 'framer-motion'
import {
  staggerContainer,
  staggerItem,
  staggerItemAlt,
  VIEWPORT,
} from '@/lib/motion'
import { useEffect, useState } from 'react'

export function StaggerContainer({
  children,
  className,
  stagger = 0.085,
  delayChildren = 0.05,
  disableOnMobile = false,
}) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    const onChange = () => setIsMobile(mq.matches)
    onChange()
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  if (disableOnMobile && isMobile) {
    return <div className={className}>{children}</div>
  }

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
