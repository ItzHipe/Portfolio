import { experienceContent } from '@/data/experience'
import SectionHeading from '@/components/ui/SectionHeading'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren'

function TimelineCard({ role, company, period, location, description }) {
  return (
    <article className="card-premium card-pad relative">
      <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="font-display text-lg font-semibold md:text-xl">
            {role}{' '}
            <span className="text-accent-cyan/85">@ {company}</span>
          </h3>
          <p className="font-mono text-xs uppercase tracking-wide text-subtle sm:text-sm">
            {period} · {location}
          </p>
        </div>
      </header>
      <p className="prose-muted text-sm md:text-base">
        {description} 
      </p>
    </article>
  )
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-flow section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="section-container">
        <SectionHeading
          title={experienceContent.title}
          subtitle={experienceContent.subtitle}
          align="left"
        />

        <StaggerContainer className="space-y-4 sm:space-y-5">
          {experienceContent.items.map((item) => (
            <StaggerItem key={item.id}>
              <TimelineCard {...item} />
            </StaggerItem>
          ))}
        </StaggerContainer>


      </div>
    </section>
  )
}
