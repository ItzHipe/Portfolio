import { philosophyContent } from '@/data/philosophy'
import SectionHeading from '@/components/ui/SectionHeading'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren'

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="section-flow section-padding-sm"
      aria-labelledby="philosophy-heading"
    >
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              tagline={philosophyContent.tagline}
              title={philosophyContent.title}
              align="left"
              className="mb-0"
            />
          </div>
          <StaggerContainer className="lg:col-span-8 grid grid-cols-1 grid-gap sm:grid-cols-2" stagger={0.07}>
            {philosophyContent.principles.map((p, i) => (
              <StaggerItem key={p.title} alt={i % 2 === 1}>
                <div className="card-premium card-pad h-full">
                  <h3 className="font-display text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
