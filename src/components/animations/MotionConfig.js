import { LazyMotion, domAnimation, MotionConfig as FramerMotionConfig } from 'framer-motion'

export default function MotionConfig({ children }) {
  return (
    <LazyMotion features={domAnimation}>
      <FramerMotionConfig reducedMotion="user">
        {children}
      </FramerMotionConfig>
    </LazyMotion>
  )
}
