import { buildingContent } from '@/data/building'
import SectionHeading from '@/components/ui/SectionHeading'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren'

export default function BuildingSection() {
  return (
    <section
      id="building"
      className="section-padding-sm"
      aria-labelledby="building-heading"
    >
      <div className="section-container">
        <SectionHeading
          tagline={buildingContent.tagline}
          title={buildingContent.title}
          align="left"
          className="mb-6 max-w-lg sm:mb-8"
        />

        <StaggerContainer className="grid grid-cols-1 grid-gap sm:grid-cols-2" stagger={0.06}>
          {buildingContent.items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="card-premium card-pad h-full">
                <h3 className="font-display text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
