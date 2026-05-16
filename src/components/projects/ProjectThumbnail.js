import { cn } from '@/lib/cn'

export default function ProjectThumbnail({ gradient, label, className }) {
  return (
    <div
      className={cn(
        'relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-elevated sm:rounded-2xl',
        className
      )}
    >
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br transition-transform duration-700 ease-out-expo group-hover:scale-110',
          gradient
        )}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgb(var(--color-border) / 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgb(var(--color-border) / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/20 to-transparent" />
      {label && (
        <span className="absolute bottom-3 left-3 font-mono text-xs uppercase tracking-widest text-accent-cyan/80">
          {label}
        </span>
      )}
    </div>
  )
}
