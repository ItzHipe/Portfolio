import { memo } from 'react'
import { m as motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { SPRING, VIEWPORT } from '@/lib/motion'
import ProjectStatus from '@/components/projects/ProjectStatus'
import ProjectLinks from '@/components/projects/ProjectLinks'
import { flagshipProject } from '@/data/projects'

function ConfidenceBar({ value }) {
  return (
    <div
      className="mt-2 h-1.5 overflow-hidden rounded-full bg-void/80"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-accent-teal via-accent-cyan to-accent-purple transition-[width] duration-700 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

function VisionMockup({ prediction, reduceMotion }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
      <div className="rounded-xl border border-accent-cyan/15 bg-void/60 p-4 sm:p-5">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent-cyan/80">
          Leaf upload
        </p>
        <div className="relative flex aspect-[4/3] flex-col items-center justify-center rounded-lg border border-dashed border-accent-cyan/25 bg-elevated/25">
          {!reduceMotion && (
            <div
              className="pointer-events-none absolute inset-x-4 top-1/2 h-px bg-accent-cyan/50"
              style={{ animation: 'scan 3s ease-in-out infinite' }}
            />
          )}
          <p className="text-center text-xs text-muted">
            Image → preprocess → <span className="text-accent-cyan">infer</span>
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-accent-purple/15 bg-void/60 p-4 sm:p-5">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent-purple/80">
          Prediction record
        </p>
        <div className="space-y-3 rounded-lg border border-border/10 bg-elevated/20 p-4">
          <div>
            <p className="text-xs text-muted">Condition</p>
            <p className="mt-1 font-display text-lg font-bold text-foreground">
              {prediction.disease}
            </p>
          </div>
          <div>
            <div className="flex justify-between text-xs">
              <span className="text-muted">Confidence</span>
              <span className="font-mono text-accent-teal">{prediction.confidence}%</span>
            </div>
            <ConfidenceBar value={prediction.confidence} />
          </div>
          <p className="text-xs text-accent-teal/90">{prediction.health}</p>
        </div>
      </div>
    </div>
  )
}

function FlagshipShowcaseInner() {
  const project = flagshipProject
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group relative overflow-hidden rounded-[1.75rem] border border-accent-cyan/15 bg-elevated/25 p-px shadow-glow-lg transition-transform duration-slow ease-out-expo hover:-translate-y-1"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={SPRING.gentle}
      aria-labelledby="flagship-project-title"
    >
      <div 
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full" 
        style={{ background: 'radial-gradient(circle, rgb(var(--color-cyan) / 0.1) 0%, transparent 70%)' }}
      />

      <div className="relative rounded-[calc(1.75rem-1px)] bg-void/80 p-6 sm:p-8 lg:p-9">
        <header className="mb-7 flex flex-col gap-5 sm:mb-8 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-cyan">
                Flagship · AI
              </span>
              <ProjectStatus status={project.status} />
            </div>
            <h3
              id="flagship-project-title"
              className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {project.title}
            </h3>
            <p className="mt-2 font-mono text-xs text-accent-cyan/75">{project.category}</p>
            <p className="prose-editorial mt-4 max-w-xl">{project.description}</p>
          </div>
          <ProjectLinks github={project.links.github} demo={project.links.demo} className="shrink-0" />
        </header>

        <VisionMockup prediction={project.prediction} reduceMotion={reduceMotion} />

        <div className="mt-7 grid gap-5 sm:mt-8 sm:gap-6 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">Architecture</p>
            <p className="text-sm leading-relaxed text-muted">{project.architecture}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Engineering focus</p>
            <ul className="space-y-2">
              {project.challenges.map((c) => (
                <li key={c} className="text-sm text-muted">
                  <span className="text-accent-cyan/80">—</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-border/8 pt-5 sm:gap-2 sm:pt-6">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border/10 px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default memo(FlagshipShowcaseInner)
