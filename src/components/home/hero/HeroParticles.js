import { useMemo } from 'react'
import { motion } from 'framer-motion'

const PARTICLE_COUNT = 18

function createParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${8 + ((i * 17) % 84)}%`,
    top: `${6 + ((i * 23) % 88)}%`,
    size: i % 3 === 0 ? 3 : 2,
    duration: 4 + (i % 5),
    delay: (i % 7) * 0.4,
  }))
}

export default function HeroParticles() {
  const particles = useMemo(() => createParticles(PARTICLE_COUNT), [])

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-[5] overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-accent-cyan/60 shadow-[0_0_8px_rgb(var(--glow-teal)/0.6)]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.55, 0.15],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  )
}
