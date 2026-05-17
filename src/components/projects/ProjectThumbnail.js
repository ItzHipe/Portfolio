import { cn } from '@/lib/cn'
import Image from 'next/image'

export default function ProjectThumbnail({
  gradient,
  label,
  image,
  className,
}) {
  return (
    <div
      className={cn(
        'relative aspect-[16/10] w-full overflow-hidden rounded-xl ring-1 ring-white/10 bg-elevated sm:rounded-2xl',
        className
      )}
    >
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={label || 'Project preview'}
            fill
            className="object-contain bg-elevated p-2 transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-void/45 via-transparent to-transparent" />
        </div>
      ) : (
        <>
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
        </>
      )}
      {label && (
        <span className="absolute bottom-3 left-3 font-mono text-xs uppercase tracking-widest text-accent-cyan/65">
          {label}
        </span>
      )}
    </div>
  )
}
