import { MotionConfig as FramerMotionConfig } from 'framer-motion'

export default function MotionConfig({ children }) {
  return (
    <FramerMotionConfig reducedMotion="user">
      {children}
    </FramerMotionConfig>
  )
}
