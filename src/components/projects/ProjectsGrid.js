import ProjectCard from '@/components/projects/ProjectCard'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren'
import { cn } from '@/lib/cn'

export default function ProjectsGrid({ projects }) {
  return (
    <StaggerContainer
      className="grid grid-cols-1 grid-gap md:grid-cols-2"
      aria-label="Project grid"
    >
      {projects.map((project) => (
        <StaggerItem
          key={project.id}
          className={cn(
            'flex h-full',
            project.size === 'large' && 'md:col-span-2 lg:col-span-1'
          )}
        >
          <ProjectCard {...project} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
