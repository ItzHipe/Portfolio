import { useState, useMemo } from 'react'
import { navLinks, siteConfig, socialLinks } from '@/data/site'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useScrolled } from '@/hooks/useScrolled'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import NavLink from '@/components/layout/NavLink'
import MobileMenu from '@/components/layout/MobileMenu'
import ThemeToggle from '@/components/ui/ThemeToggle'
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/ui/Icons'
import { cn } from '@/lib/cn'
import { scrollToSection } from '@/utils/scrollTo'

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  dribbble: DribbbleIcon,
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const scrolled = useScrolled(32)

  const sectionIds = useMemo(
    () => navLinks.map((link) => link.href.replace('#', '')),
    []
  )
  const activeSection = useScrollSpy(sectionIds)

  const handleLogoClick = (e) => {
    e.preventDefault()
    scrollToSection('#home')
  }

  return (
    <header
      className={cn(
        'hidden lg:block fixed inset-x-0 top-0 z-50 h-14 border-b transition-all duration-slow ease-out-expo md:h-16',
        scrolled
          ? 'bg-void/75 backdrop-blur-xl border-border/10 shadow-glass-sm'
          : 'border-transparent bg-void/30 backdrop-blur-md'
      )}
    >
      <div className="section-container flex h-full items-center justify-between gap-3 lg:gap-4">
        <nav
          className="hidden min-w-0 items-center gap-2 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={activeSection === link.href.slice(1)}
              variant="desktop"
            />
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-3 ml-auto">
          <a 
            href="https://hipe.dev/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-full border border-border/20 glass px-4 py-1.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-cyan/50 hover:text-accent-cyan hover:shadow-glow-sm"
          >
            Resume
          </a>
          <ul className="hidden items-center gap-1 sm:flex">
            {socialLinks.map(({ name, href, icon }) => {
              const Icon = iconMap[icon]
              if (!Icon) return null
              return (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring touch-target flex items-center justify-center p-2 text-foreground/50 transition-colors duration-200 hover:text-foreground"
                    aria-label={name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              )
            })}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            className={cn(
              'focus-ring touch-target relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden',
              menuOpen && 'text-foreground'
            )}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={cn(
                'h-px w-5 bg-current transition-transform duration-300 ease-out origin-center',
                menuOpen && 'translate-y-[7px] rotate-45'
              )}
            />
            <span
              className={cn(
                'h-px w-5 bg-current transition-opacity duration-200',
                menuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'h-px w-5 bg-current transition-transform duration-300 ease-out origin-center',
                menuOpen && '-translate-y-[7px] -rotate-45'
              )}
            />
          </button>
        </div>
      </div>

      {!isDesktop && (
        <MobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          activeSection={activeSection}
        />
      )}
    </header>
  )
}
