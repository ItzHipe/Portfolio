import TerminalBackground from '@/components/terminal/TerminalBackground'
import InteractiveTerminal from '@/components/terminal/InteractiveTerminal'
import MobileBentoBox from '@/components/terminal/MobileBentoBox'

export default function TerminalSection() {
  return (
    <section
      id="terminal"
      className="section-flow relative overflow-hidden section-padding pb-24"
      aria-label="Terminal Interface"
    >
      <TerminalBackground />

      <div className="section-container relative z-10 max-w-4xl">
        <div className="hidden md:block">
          <InteractiveTerminal />
        </div>
        <MobileBentoBox />
      </div>
    </section>
  )
}
