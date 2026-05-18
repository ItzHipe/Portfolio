import { useEffect, useRef, useState } from 'react'
import { useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

const MAX_TILT = 3 // Even more subtle for premium feel

/**
 * Subtle pointer-based 3D tilt — desktop + fine pointer only.
 */
export function useCardTilt(enabled = true) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const [canTilt, setCanTilt] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanTilt(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const active = enabled && !reduceMotion && canTilt

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]), {
    stiffness: 140,
    damping: 30,
    mass: 1, // Cinematic spring mass
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]), {
    stiffness: 140,
    damping: 30,
    mass: 1,
  })

  const handleMove = (e) => {
    if (!active || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return {
    ref,
    style: active
      ? { rotateX, rotateY, transformStyle: 'preserve-3d', willChange: 'transform' }
      : undefined,
    handlers: active ? { onMouseMove: handleMove, onMouseLeave: handleLeave } : {},
    canTilt: active,
  }
}
