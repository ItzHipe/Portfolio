import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren'
import HeroCTA from './HeroCTA'
import RoleRotator from './RoleRotator'

export default function HeroIntro({ content }) {
  return (
    <StaggerContainer
      className="flex flex-col justify-center py-6 sm:py-8 lg:py-10 lg:pl-2 xl:pl-6"
      stagger={0.15}
      delayChildren={0.1}
      disableOnMobile
    >
      <StaggerItem>
        <div className="font-mono text-xs text-muted sm:text-sm">
          <RoleRotator roles={content.roles} />
        </div>
      </StaggerItem>
      
      <StaggerItem>
        <h1
          id="hero-heading"
          className="lead-balanced mt-4 max-w-[16ch] font-display text-[2.25rem] font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:max-w-none sm:text-5xl md:text-[3.1rem] lg:text-[3.4rem] xl:leading-[1.06]"
        >
          {content.headline}
        </h1>
      </StaggerItem>

      <StaggerItem>
        <p className="prose-editorial mt-6 sm:mt-7 md:max-w-md lg:max-w-lg">
          {content.bio}
        </p>
      </StaggerItem>

      <StaggerItem>
        <div className="mt-8 sm:mt-10">
          <HeroCTA ctas={content.ctas} />
        </div>
      </StaggerItem>
    </StaggerContainer>
  )
}