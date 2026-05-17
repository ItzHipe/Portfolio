import { cn } from '@/lib/cn'

const statusStyles = {
Live:
  'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
'In Development':
  'border-cyan-400/40 bg-cyan-400/10 text-cyan-300',
Research:
  'border-violet-400/40 bg-violet-400/10 text-violet-300',
Active:
  'border-teal-400/40 bg-teal-400/10 text-teal-300',
Completed:
  'border-slate-400/40 bg-slate-400/10 text-slate-300',
Deprecated:
  'border-rose-500/40 bg-rose-500/10 text-rose-300',
}

export default function ProjectStatus({ status }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider sm:text-xs',
        statusStyles[status] || statusStyles.Live
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_6px_currentColor]" />
      {status}
    </span>
  )
}
