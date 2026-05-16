import HeroIntro from '@/components/home/hero/HeroIntro'
import HeroProfile from '@/components/home/hero/HeroProfile'
import HeroAmbient from '@/components/home/hero/HeroAmbient'
import { heroContent } from '@/data/home'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-x-clip bg-void pb-20 pt-[5.25rem] sm:pb-24 md:pt-28 lg:min-h-screen lg:pb-28"
      aria-labelledby="hero-heading"
    >
      <HeroAmbient />

      <div className="section-container relative z-10 grid flex-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div className="order-2 lg:order-1">
          <HeroProfile
            name={heroContent.name}
            profileImage={heroContent.profileImage}
            profileFallback={heroContent.profileFallback}
          />
        </div>

        <div className="order-1 lg:order-2 lg:py-2">
          <HeroIntro content={heroContent} />
        </div>
      </div>
    </section>
  )
}
