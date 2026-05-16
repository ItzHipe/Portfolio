import TerminalBackground from '@/components/terminal/TerminalBackground'
import TerminalWindow from '@/components/terminal/TerminalWindow'
import InteractiveTerminal from '@/components/terminal/InteractiveTerminal'
import { terminalConfig } from '@/data/terminal'

export default function TerminalSection() {
  return (
    <section
      id="terminal"
      className="section-flow relative overflow-hidden section-padding"
      aria-labelledby="terminal-heading"
    >
      <TerminalBackground />

      <div className="section-container relative z-10">
        <div className="mb-8 text-center md:mb-10">
          <p className="eyebrow mb-2">Engineering Console</p>
          <h2
            id="terminal-heading"
            className="gradient-text text-2xl font-bold sm:text-3xl md:text-4xl"
          >
            Developer Runtime
          </h2>
          <p className="prose-muted mx-auto mt-3 max-w-lg text-sm sm:text-base">
            Type <code className="font-mono text-accent-cyan/90">help</code> or{' '}
            <code className="font-mono text-accent-cyan/80">project farmlens</code> — a shell
            built into this portfolio, not pasted on.
          </p>
        </div>

        <TerminalWindow title={terminalConfig.title}>
          <InteractiveTerminal />
        </TerminalWindow>
      </div>
    </section>
  )
}
