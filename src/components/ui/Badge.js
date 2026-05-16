import { cn } from '@/lib/cn'

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent-cyan neon-border',
        className
      )}
    >
      {children}
    </span>
  )
}
