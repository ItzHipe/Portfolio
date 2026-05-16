import { siteConfig } from '@/data/site'
import SocialLinks from '@/components/ui/SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/10 bg-elevated/80 py-8 backdrop-blur-md sm:py-10">
      <div className="section-container flex flex-col items-center justify-between gap-5 sm:gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold gradient-text">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            © {year} {siteConfig.author}. Crafted with Next.js & Framer Motion.
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  )
}
