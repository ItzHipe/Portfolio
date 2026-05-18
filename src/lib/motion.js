/** Shared motion presets — consistent, subtle, performance-friendly */

export const EASE = {
  out: [0.22, 1, 0.36, 1], // Cinematic out
  inOut: [0.65, 0, 0.35, 1],
  soft: [0.16, 1, 0.3, 1],
}

export const SPRING = {
  gentle: { type: 'spring', stiffness: 80, damping: 20, mass: 1 },
  snappy: { type: 'spring', stiffness: 120, damping: 20, mass: 1 },
  card: { type: 'spring', stiffness: 100, damping: 24, mass: 1 },
  navMinimal: { type: 'spring', stiffness: 120, damping: 25, mass: 0.8 },
  cinematic: { type: 'spring', stiffness: 70, damping: 25, mass: 1.2 },
}

export const VIEWPORT = {
  once: true,
  margin: '-60px',
  amount: 0.15,
}

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (step = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: step * 0.1,
      ease: EASE.out,
    },
  }),
}

export const staggerContainer = (stagger = 0.1, delayChildren = 0.05) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren },
  },
})

export const staggerItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE.out },
  },
}

export const staggerItemAlt = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE.out },
  },
}
