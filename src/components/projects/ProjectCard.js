import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { SPRING } from '@/lib/motion'
import { useCardTilt } from '@/hooks/useCardTilt'
import ProjectThumbnail from '@/components/projects/ProjectThumbnail'
import ProjectStatus from '@/components/projects/ProjectStatus'
import ProjectLinks from '@/components/projects/ProjectLinks'

export default function ProjectCard({
  title,
  category,
  description,
  highlights = [],
  tags = [],
  status,
  featured,
  size = 'default',
  links,
  thumbnail,
  image,
}) {
  const { ref, style, handlers, canTilt } = useCardTilt(true)

  return (
    <motion.article
      ref={ref}
      style={style}
      {...handlers}
      className={cn(
        'card-premium group relative flex h-full w-full flex-col p-px',
        featured && 'border-accent-purple/12'
      )}
      whileHover={canTilt ? undefined : { y: -2 }}
      transition={SPRING.card}
    >
      <div className="pointer-events-none absolute inset-0 card-inner bg-gradient-to-br from-accent-cyan/[0.03] via-transparent to-accent-purple/[0.05] opacity-0 transition-opacity duration-base group-hover:opacity-100" />

      <div className="card-inner relative flex h-full flex-col overflow-hidden bg-void/55">
        {thumbnail && (
          <ProjectThumbnail
            gradient={thumbnail.gradient}
            label={thumbnail.label}
            image={image}
          />
        )}

        <div className="flex flex-1 flex-col card-pad">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
            <div className="flex flex-wrap items-center gap-2">
              {featured && (
                <span className="rounded-full border border-accent-purple/20 bg-accent-purple/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-purple">
                  Featured
                </span>
              )}
              <ProjectStatus status={status} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">
              {category}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold leading-snug tracking-[-0.02em] text-foreground transition-colors duration-base group-hover:text-accent-cyan sm:text-[1.35rem]">
            {title}
          </h3>

          <p className="prose-muted mt-2.5 flex-1 text-sm leading-[1.7] sm:text-[0.9375rem]">
            {description}
          </p>

          {highlights.length > 0 && (
            <ul className="mt-4 space-y-1.5 border-t border-border/8 pt-4">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2 text-xs leading-relaxed text-muted sm:text-sm">
                  <span className="shrink-0 text-accent-teal/80" aria-hidden>
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-border/10 bg-elevated/50 px-2 py-0.5 font-mono text-[10px] leading-relaxed text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>

          <ProjectLinks github={links?.github} demo={links?.demo} className="mt-auto pt-5" />
        </div>
      </div>
    </motion.article>
  )
}
