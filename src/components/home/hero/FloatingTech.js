import { motion } from 'framer-motion'
import { springFloat } from '@/components/home/hero/motion'

export default function FloatingTech({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          className={`absolute ${item.style} z-20`}
          animate={{
            y: [0, i % 2 === 0 ? -10 : 10, 0],
            rotate: [0, i % 2 === 0 ? 2 : -2, 0],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.25,
          }}
        >
          <motion.span
            className="glass inline-block rounded-full border border-accent-cyan/20 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-accent-cyan shadow-glow-sm sm:text-xs"
            whileHover={{ scale: 1.06, borderColor: 'rgb(var(--color-border-glow) / 0.5)' }}
            transition={springFloat}
          >
            {item.label}
          </motion.span>
        </motion.div>
      ))}
    </>
  )
}
