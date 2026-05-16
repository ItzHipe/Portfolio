/** Shared Framer Motion configs for the hero section */
export const springSnappy = {
  type: 'spring',
  stiffness: 260,
  damping: 24,
}

export const springSoft = {
  type: 'spring',
  stiffness: 120,
  damping: 18,
}

export const springFloat = {
  type: 'spring',
  stiffness: 40,
  damping: 12,
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springSoft,
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springSoft,
  },
}
