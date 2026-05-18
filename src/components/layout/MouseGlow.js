import { useEffect, useState, useRef } from 'react'

export default function MouseGlow() {
  const [isDesktop, setIsDesktop] = useState(true)
  const glowRef = useRef(null)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024)
    
    let ticking = false
    const updateMousePosition = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    if (window.innerWidth >= 1024) {
      window.addEventListener('mousemove', updateMousePosition, { passive: true })
      if (glowRef.current) {
        glowRef.current.style.opacity = '1'
      }
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  if (!isDesktop) return null

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[800px] w-[800px] rounded-full opacity-0 transition-opacity duration-700 ease-in-out"
      style={{
        background: 'radial-gradient(circle, rgb(var(--color-cyan) / 0.12) 0%, rgb(var(--color-purple) / 0.05) 30%, transparent 60%)',
        willChange: 'transform',
        transform: 'translate3d(-100%, -100%, 0)', // start offscreen
      }}
    />
  )
}
