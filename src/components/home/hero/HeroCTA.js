import { LinkArrow } from '@/components/ui/Icons'
import { cn } from '@/lib/cn'
import { scrollToSection } from '@/utils/scrollTo'

const actionBase =
  'focus-ring btn-tactile inline-flex min-h-[2.75rem] items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium sm:px-6 sm:text-base'

export default function HeroCTA({ ctas }) {
  const handleClick = (e, cta) => {
    if (cta.href?.startsWith('#')) {
      e.preventDefault()
      scrollToSection(cta.href)
    }
  }

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
      {ctas.map((cta) => {
        if (cta.variant === 'contact') {
          return (
            <a
              key={cta.id}
                href={cta.href}
                onClick={(e) => handleClick(e, cta)}
                className={cn(
                  actionBase,
                  'min-h-0 px-1 py-1 text-foreground underline decoration-foreground/35 underline-offset-[6px] hover:decoration-accent-cyan'
                )}
              >
                {cta.label}
              </a>
          )
        }

        if (cta.variant === 'primary') {
          return (
            <a
              key={cta.id}
                href={cta.href}
                onClick={(e) => handleClick(e, cta)}
                className={cn(
                  actionBase,
                  'border border-foreground/90 bg-foreground text-void shadow-none hover:bg-foreground/90'
                )}
              >
                {cta.label}
              </a>
          )
        }

        return (
          <a
            key={cta.id}
              href={cta.href}
              download={cta.download || undefined}
              onClick={(e) => handleClick(e, cta)}
              className={cn(
                actionBase,
                'border border-border/15 bg-elevated/70 text-foreground hover:border-accent-cyan/25'
              )}
            >
              {cta.label}
              <LinkArrow className="h-4 w-4 shrink-0 opacity-70" />
            </a>
        )
      })}
    </div>
  )
}
