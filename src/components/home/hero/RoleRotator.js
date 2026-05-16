import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
      className="relative mt-2 h-[1.35em] overflow-hidden font-display text-2xl font-bold sm:text-3xl md:text-4xl"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="sr-only">Current role: {role}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={role}
          className="absolute inset-x-0 block bg-gradient-to-r from-accent-cyan via-accent-teal to-accent-purple bg-clip-text text-transparent"
          initial={{ y: 28, opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -28, opacity: 0, filter: 'blur(6px)' }}
          transition={springSnappy}
        >
          {role}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
