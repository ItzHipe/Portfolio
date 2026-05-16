import { memo } from 'react'
import { motion } from 'framer-motion'
import { LinkArrow } from '@/components/ui/Icons'
import { cn } from '@/lib/cn'

function ProjectCardOutput({ project }) {
  const {
    name,
    tagline,
    category,
    status,
    description,
    stack,
    metrics,
    aiNote,
    links,
  } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="terminal-rich-card terminal-project-card my-3 overflow-hidden"
    >
      <div className="border-b border-border/10 bg-gradient-to-r from-accent-cyan/10 via-transparent to-accent-purple/10 px-4 py-3 sm:px-5">
        <motion.div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="font-display text-base font-semibold text-foreground sm:text-lg">
              {name}
            </p>
            <p className="font-mono text-xs text-accent-cyan/80">{tagline}</p>
          </div>
          <span
            className={cn(
              'rounded-full border px-2.5 py-0.5 font-mono text-[10px]',
              status === 'Live'
                ? 'border-accent-teal/40 text-accent-teal'
                : 'border-muted/30 text-muted'
            )}
          >
            {status}
          </span>
        </motion.div>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
          {category}
        </p>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <p className="text-sm leading-relaxed text-muted">{description}</p>

        {aiNote ? (
          <p className="rounded-lg border border-accent-purple/20 bg-accent-purple/5 px-3 py-2 font-mono text-xs text-foreground/80">
            <span className="text-accent-purple">AI ›</span> {aiNote}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border/15 bg-void/50 px-2 py-0.5 font-mono text-[10px] text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {metrics?.length ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-border/10 bg-surface/30 px-3 py-2"
              >
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted">
                  {m.label}
                </p>
                <p className="mt-0.5 font-mono text-xs text-accent-cyan">{m.value}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2 pt-1">
          {links?.github ? (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-action-btn focus-ring"
            >
              GitHub <LinkArrow className="h-3 w-3" />
            </a>
          ) : null}
          {links?.demo ? (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-action-btn focus-ring border-accent-cyan/30 text-accent-cyan"
            >
              Live Demo <LinkArrow className="h-3 w-3" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  )
}

export default memo(ProjectCardOutput)
