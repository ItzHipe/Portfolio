import { cn } from '@/lib/cn'
import FadeIn from '@/components/animations/FadeIn'

export default function SectionHeading({
  tagline,
  title,
  subtitle,
  align = 'center',
  className,
  size = 'default',
}) {
  const alignClass =
    align === 'left'
      ? 'text-left items-start mr-auto'
      : align === 'right'
        ? 'text-right items-end ml-auto'
        : 'text-center items-center mx-auto'

  const titleSize =
    size === 'large'
      ? 'text-[1.875rem] sm:text-3xl lg:text-[2.625rem] lg:leading-[1.12]'
      : 'text-[1.625rem] leading-[1.15] sm:text-3xl md:text-[2rem] lg:text-[2.375rem] lg:leading-[1.12]'

  return (
    <FadeIn
      className={cn(
        'mb-10 flex max-w-3xl flex-col gap-2.5 md:mb-12 lg:mb-14',
        alignClass,
        className
      )}
    >
      {tagline && <p className="eyebrow">{tagline}</p>}
      <h2
        className={cn(
          'gradient-text lead-balanced font-display font-bold tracking-[-0.02em]',
          titleSize
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'prose-muted mt-0.5 text-[0.9375rem] md:text-base',
            align === 'center' && 'max-w-2xl',
            align === 'left' && 'max-w-xl'
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}
