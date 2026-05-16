import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BackgroundEffects from '@/components/layout/BackgroundEffects'

export default function Layout({ children }) {
  return (
    <div className="animated-grid-background relative min-h-screen overflow-x-clip font-sans text-foreground">
      <BackgroundEffects />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
