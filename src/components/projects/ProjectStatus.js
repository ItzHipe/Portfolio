import { cn } from '@/lib/cn'

const statusStyles = {
  Live: 'border-accent-teal/40 bg-accent-teal/10 text-accent-teal',
  'In Development': 'border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan',
  Research: 'border-accent-purple/30 bg-accent-purple/10 text-accent-purple',
}

export default function ProjectStatus({ status }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider sm:text-xs',
        statusStyles[status] ?? statusStyles.Live
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_6px_currentColor]" />
      {status}
    </span>
  )
}
