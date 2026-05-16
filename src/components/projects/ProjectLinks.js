import { GithubIcon, LinkArrow } from '@/components/ui/Icons'
import { cn } from '@/lib/cn'

const linkClass =
  'focus-ring inline-flex min-h-[2.5rem] items-center justify-center gap-2 rounded-xl border border-border/12 bg-elevated/50 px-3.5 text-xs font-medium text-foreground transition-smooth hover:border-accent-cyan/35 hover:text-accent-cyan sm:px-4 sm:text-sm'

export default function ProjectLinks({ github, demo, className }) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <GithubIcon className="h-4 w-4 shrink-0" />
          GitHub
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            linkClass,
            'border-transparent bg-gradient-to-r from-accent-teal to-accent-cyan font-semibold text-void hover:shadow-glow-sm'
          )}
        >
          Live Demo
          <LinkArrow className="h-4 w-4 shrink-0" />
        </a>
      )}
    </div>
  )
}
