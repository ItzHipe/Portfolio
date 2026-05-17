import { skillsContent } from '@/data/skills'
import SectionHeading from '@/components/ui/SectionHeading'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren'
import { cn } from '@/lib/cn'

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-flow section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        <SectionHeading
          title={skillsContent.title}
          subtitle={skillsContent.subtitle}
          align="left"
          className="max-w-xl"
        />

        <StaggerContainer className="grid grid-cols-1 grid-gap sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {skillsContent.categories.map((category, i) => (
            <StaggerItem key={category.id} alt={i === 1}>
              <div
                className="card-premium card-pad h-full transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="mb-4 font-display text-lg font-semibold tracking-tight text-foreground">
                <p className="mb-5 text-sm leading-relaxed text-muted">
                  {category.description}
                </p>
                  {category.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border/10 bg-elevated/60 px-2.5 py-1.5 font-mono text-xs tracking-wide text-foreground/80 transition-colors duration-300 hover:border-accent-cyan/20 hover:bg-elevated"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
