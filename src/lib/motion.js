/** Shared motion presets — consistent, subtle, performance-friendly */

export const EASE = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
}

export const SPRING = {
  gentle: { type: 'spring', stiffness: 130, damping: 24, mass: 0.75 },
  snappy: { type: 'spring', stiffness: 300, damping: 30 },
  card: { type: 'spring', stiffness: 400, damping: 32 },
  navMinimal: { type: 'spring', stiffness: 500, damping: 40, mass: 0.45 },
}

export const VIEWPORT = {
  once: true,
  margin: '-40px',
  amount: 0.12,
}

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (step = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      delay: step * 0.085,
      ease: EASE.out,
    },
  }),
}

export const staggerContainer = (stagger = 0.075, delayChildren = 0.04) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren },
  },
})

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: EASE.out },
  },
}

export const staggerItemAlt = {
  hidden: { opacity: 0, y: 14, x: -6 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.5, ease: EASE.out },
  },
}
