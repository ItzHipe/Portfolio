import { projects, projectsContent } from '@/data/projects'
import SectionHeading from '@/components/ui/SectionHeading'
import FlagshipShowcase from '@/components/projects/FlagshipShowcase'
import ProjectsGrid from '@/components/projects/ProjectsGrid'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-flow relative overflow-x-clip section-padding"
      aria-labelledby="projects-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgb(var(--glow-teal)/0.06),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/80 via-transparent to-void"
      />

      <div className="section-container relative z-10">
        <SectionHeading
          tagline={projectsContent.tagline}
          title={projectsContent.title}
          subtitle={projectsContent.subtitle}
          align="left"
          className="max-w-2xl"
        />

        <div className="section-stack">
          <FlagshipShowcase />
          <ProjectsGrid projects={projects} />
        </div>
      </div>
    </section>
  )
}
