import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
// navLinks removed for mobile menu — only theme toggle kept
import SocialLinks from '@/components/ui/SocialLinks'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/cn'
 
const ANIMATION_DURATION = 320 // ms — matches CSS transition duration
 
export default function MobileMenu({ isOpen, onClose, activeSection }) {
  const [mounted, setMounted] = useState(false)
  // `visible` controls DOM presence; `animating` drives the CSS class
  const [visible, setVisible] = useState(false)
  const [animating, setAnimating] = useState(false)
 
  useEffect(() => setMounted(true), [])
  const [topOffset, setTopOffset] = useState(null)
 
  // Open: mount → next frame → animate in; Close: animate out → unmount
  useEffect(() => {
    if (isOpen) {
      // Prevent layout shift when hiding scrollbar
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`
      document.body.style.overflow = 'hidden'

      // Align menu content with header/button
      const header = document.querySelector('header')
      const headerHeight = header ? Math.round(header.getBoundingClientRect().height) : 0
      setTopOffset(headerHeight)

      setVisible(true)
      // next frame -> start animating
      requestAnimationFrame(() => setAnimating(true))
    } else {
      // animate out
      setAnimating(false)
      const timer = setTimeout(() => {
        setVisible(false)
        document.body.style.overflow = 'unset'
        document.body.style.paddingRight = ''
        setTopOffset(null)
      }, ANIMATION_DURATION)
      return () => clearTimeout(timer)
    }
  }, [isOpen])
 
  // Keyboard: Escape closes the menu
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])
 
  // (scroll lock handled in isOpen effect above)
 
  if (!mounted || !visible) return null
 
  return createPortal(
    <>
      {/* ─── CSS Keyframes (injected once) ─── */}
      <style>{`
        @keyframes mmBackdropIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes mmBackdropOut { from { opacity: 1 } to { opacity: 0 } }
 
        @keyframes mmPanelIn  { from { opacity: 0; transform: translateY(24px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
        @keyframes mmPanelOut { from { opacity: 1; transform: translateY(0) scale(1) }       to { opacity: 0; transform: translateY(16px) scale(0.97) } }
 
        @keyframes mmLinkIn  { from { opacity: 0; transform: translateX(-12px) } to { opacity: 1; transform: translateX(0) } }
 
        @keyframes mmBottomIn { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
 
        @keyframes mmGlowPulse { 0%, 100% { opacity: 0.10 } 50% { opacity: 0.18 } }
      `}</style>
 
      {/* ─── Root overlay ─── */}
      <div
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-modal="true"
        role="dialog"
        className="fixed inset-0 z-[999] lg:hidden"
        onClick={onClose}
        style={{
          animation: `${animating ? 'mmBackdropIn' : 'mmBackdropOut'} ${ANIMATION_DURATION}ms cubic-bezier(0.22,1,0.36,1) both`,
        }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" />
 
        {/* Ambient Glow — subtle pulse */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-1/2 top-[-120px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
            style={{ animation: 'mmGlowPulse 4s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-[-120px] right-[-80px] h-[260px] w-[260px] rounded-full bg-fuchsia-500/10 blur-3xl"
            style={{ animation: 'mmGlowPulse 5s ease-in-out infinite 1s' }}
          />
        </div>
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }}
          />
        </div>
 
        {/* ─── Panel ─── */}
        <div
          className="relative z-10 flex h-full flex-col overflow-y-auto px-4 pt-16 pb-6 sm:px-5 sm:pt-20 sm:pb-8"
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: `${animating ? 'mmPanelIn' : 'mmPanelOut'} ${ANIMATION_DURATION}ms cubic-bezier(0.22,1,0.36,1) both`,
          }}
        >
          <div className="flex min-h-full flex-col">
 
            {/* Close Button */}
            <div className="flex justify-end mb-2">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="focus-ring -mr-1 inline-flex items-center justify-center rounded-full bg-white/6 p-2 text-white/80 hover:bg-white/12 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
 
            {/* Mobile: remove nav links — show only ThemeToggle centered */}
            <div className="flex flex-1 items-center justify-center">
              <ThemeToggle />
            </div>
 
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}