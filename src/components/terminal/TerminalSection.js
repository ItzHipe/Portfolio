import TerminalBackground from '@/components/terminal/TerminalBackground'
import TerminalWindow from '@/components/terminal/TerminalWindow'
import InteractiveTerminal from '@/components/terminal/InteractiveTerminal'
import { terminalConfig } from '@/data/terminal'

export default function TerminalSection() {
  return (
    <section
      id="terminal"
      className="section-flow relative overflow-hidden section-padding pb-24"
      aria-label="Terminal Interface"
    >
      <TerminalBackground />

      <div className="section-container relative z-10 max-w-4xl">
        <InteractiveTerminal />
      </div>
    </section>
  )
}
