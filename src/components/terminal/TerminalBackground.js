export default function TerminalBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-elevated/40 to-void" />
      <div className="absolute left-1/2 top-1/3 h-[240px] w-[min(100%,420px)] -translate-x-1/2 rounded-full bg-accent-cyan/8 blur-[64px]" />
    </div>
  )
}
