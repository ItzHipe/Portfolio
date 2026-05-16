import { achievementsContent } from '@/data/achievements'
import SectionHeading from '@/components/ui/SectionHeading'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren'
import { cn } from '@/lib/cn'

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="section-flow section-padding-sm"
      aria-labelledby="achievements-heading"
    >
      <div className="section-container">
        <SectionHeading
          tagline={achievementsContent.tagline}
          title={achievementsContent.title}
          align="left"
          className="mb-8 md:mb-10"
        />

        <StaggerContainer className="grid grid-cols-1 grid-gap md:grid-cols-3" stagger={0.07}>
          {achievementsContent.items.map((item, i) => (
            <StaggerItem key={item.title} alt={i === 1}>
              <article
                className={cn(
                  'card-premium card-pad h-full',
                  i === 1 && 'md:-translate-y-1'
                )}
              >
                <p className="font-mono text-xs text-accent-cyan">{item.year}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted">{item.org}</p>
                <p className="mt-2 text-sm text-subtle">{item.detail}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
