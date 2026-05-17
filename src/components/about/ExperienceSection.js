import { experienceContent, educationContent } from '@/data/experience'
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

        <div className="mt-16">
          <SectionHeading
            title={educationContent.title}
            align="left"
            className="mb-10"
          />
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {educationContent.items.map((item) => (
              <StaggerItem key={item.id}>
                <article className="card-premium card-pad h-full transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="font-display text-lg font-semibold">
                    {item.degree}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-accent-cyan/80">
                    {item.period}
                  </p>
                  <p className="mt-2 text-sm font-medium">{item.institution}</p>
                  <p className="prose-muted mt-3 text-sm">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
