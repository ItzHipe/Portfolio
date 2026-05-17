import { aboutContent } from '@/data/about'
import SectionHeading from '@/components/ui/SectionHeading'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren'
import { cn } from '@/lib/cn'
import { buildingContent } from '@/data/building'
import { philosophyContent } from '@/data/philosophy'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-flow section-padding"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              tagline={aboutContent.tagline}
              title="About"
              subtitle={aboutContent.intro}
              align="left"
              className="mb-0 lg:sticky lg:top-28"
            />
          </div>

          <div className="lg:col-span-7">
            <StaggerContainer className="space-y-6 md:space-y-7" stagger={0.1}>
              {aboutContent.paragraphs.map((paragraph, i) => (
                <StaggerItem key={paragraph.slice(0, 24)} alt={i % 2 === 1}>
                  <p className="prose-editorial">{paragraph}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <StaggerContainer
              className="mt-10 grid grid-cols-3 gap-3 sm:mt-12 sm:gap-4"
              stagger={0.07}
            >
              {aboutContent.stats.map((stat, i) => (
                <StaggerItem key={stat.label}>
                  <div
                    className={cn(
                      'card-premium card-pad flex flex-col',
                      i === 1 && 'lg:-translate-y-1'
                    )}
                  >
                    <span className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-muted sm:text-xs">
                      {stat.label}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-14">
              <div className="mb-6">
                <p className="eyebrow">{buildingContent.tagline}</p>

                <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                  {buildingContent.title}
                </h3>
              </div>

              <StaggerContainer
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
                stagger={0.06}
              >
                {buildingContent.items.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="card-premium card-pad h-full">
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.detail}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div className="mt-14">
              <div className="mb-6">
                <p className="eyebrow">{philosophyContent.tagline}</p>

                <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                  {philosophyContent.title}
                </h3>
              </div>

              <StaggerContainer
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
                stagger={0.07}
              >
                {philosophyContent.principles.map((p, i) => (
                  <StaggerItem key={p.title} alt={i % 2 === 1}>
                    <div className="card-premium card-pad h-full">
                      <h3 className="font-display text-base font-semibold">
                        {p.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {p.detail}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
