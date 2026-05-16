import { AnimatePresence, motion } from 'framer-motion'
import { navLinksExtended } from '@/data/site'
import NavLink from '@/components/layout/NavLink'
import SocialLinks from '@/components/ui/SocialLinks'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-40 bg-void/80 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-label="Close menu"
          />
          <motion.nav
            id="mobile-nav"
            className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,300px)] flex-col border-l border-border/10 bg-void p-6 lg:hidden"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Mobile navigation"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Navigation
              </span>
              <ThemeToggle />
            </div>

            <ul className="flex flex-col gap-0.5">
              {navLinksExtended.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    isActive={activeSection === link.href.slice(1)}
                    onNavigate={onClose}
                    variant="mobile"
                  />
                </li>
              ))}
            </ul>

            <div className="mt-auto border-t border-border/10 pt-6">
              <SocialLinks className="justify-start gap-3" />
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
