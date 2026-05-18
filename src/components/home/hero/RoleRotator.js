import { useEffect, useState } from 'react'
import { AnimatePresence, m as motion } from 'framer-motion'
import { springSnappy } from '@/components/home/hero/motion'

export default function RoleRotator({ roles }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!roles?.length) return
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 3200)
    return () => clearInterval(id)
  }, [roles])

  const role = roles[index]

  return (
    <div
      className="relative mt-2 h-[1.35em] overflow-hidden font-display text-lg font-medium sm:text-xl md:text-2xl"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="sr-only">Current role: {role}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={role}
          className="absolute inset-x-0 block text-accent-cyan/90"
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={springSnappy}
        >
          {role}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
