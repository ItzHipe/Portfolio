import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BackgroundEffects from '@/components/layout/BackgroundEffects'
import MouseGlow from '@/components/layout/MouseGlow'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function Layout({ children }) {
  return (
    <div className="animated-grid-background relative min-h-screen overflow-x-clip font-sans text-foreground">
      <BackgroundEffects />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="pt-0 lg:pt-16">
        {children}
      </main>
      {/* Mobile floating theme toggle */}
      <div className="fixed right-4 bottom-6 z-50 lg:hidden">
        <ThemeToggle className="h-10 w-10" />
      </div>
      <Footer />
    </div>
  )
}
