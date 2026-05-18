import { motion } from 'framer-motion'

export default function BackgroundEffects() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="hero-glow opacity-40" />
      <div 
        className="absolute -left-[20%] top-[-5%] h-[min(600px,70vw)] w-[min(600px,70vw)] rounded-full opacity-60"
        style={{ background: 'radial-gradient(circle, rgb(var(--color-purple) / 0.12) 0%, transparent 60%)' }}
      />
      <div 
        className="absolute -right-[15%] top-[28%] h-[450px] w-[450px] rounded-full opacity-50"
        style={{ background: 'radial-gradient(circle, rgb(var(--color-cyan) / 0.1) 0%, transparent 65%)' }}
      />
    </div>
  )
}
