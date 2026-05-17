import { FadeInHero } from '@/components/animations/FadeIn'
import HeroCTA from './HeroCTA'
import RoleRotator from './RoleRotator'

export default function HeroIntro({ content }) {
  return (
    <div className="flex flex-col justify-center py-6 sm:py-8 lg:py-10 lg:pl-2 xl:pl-6">
      <FadeInHero delay={0}>
        <p className="eyebrow mb-3">{content.name}</p>
        <div className="font-mono text-xs text-muted sm:text-sm">
          <RoleRotator roles={content.roles} />
        </div>
        <h1
          id="hero-heading"
          className="lead-balanced mt-4 max-w-[16ch] font-display text-[2.25rem] font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:max-w-none sm:text-5xl md:text-[3.1rem] lg:text-[3.4rem] xl:leading-[1.06]"
        >
          {content.headline}
        </h1>
        <p className="prose-editorial mt-6 sm:mt-7 md:max-w-md lg:max-w-lg">
          {content.bio}
        </p>
        <HeroCTA ctas={content.ctas} />
      </FadeInHero>
    </div>
  )
}