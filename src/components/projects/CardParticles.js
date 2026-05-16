import { motion } from 'framer-motion'

const particles = [
  { left: '12%', top: '20%', delay: 0 },
  { left: '78%', top: '35%', delay: 0.3 },
  { left: '45%', top: '70%', delay: 0.6 },
]

export default function CardParticles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-base group-hover:opacity-100"
    >
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent-cyan/70 shadow-[0_0_6px_rgb(var(--glow-teal)/0.8)]"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -8, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
