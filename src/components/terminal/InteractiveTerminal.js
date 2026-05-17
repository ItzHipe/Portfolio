import { useState, useCallback, memo } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { useInteractiveTerminal } from '@/hooks/useInteractiveTerminal'
import { terminalBootCommands, terminalBanner, terminalConfig } from '@/data/terminal'
import TerminalBootSequence from '@/components/terminal/TerminalBootSequence'
import TerminalEntry from '@/components/terminal/TerminalEntry'
import TerminalInputLine from '@/components/terminal/TerminalInputLine'
import { cn } from '@/lib/cn'

function InteractiveTerminal() {
  const [bootComplete, setBootComplete] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const terminal = useInteractiveTerminal({
    bootComplete,
    onThemeToggle: toggleTheme,
    getTheme: () => theme,
  })

  const handleBootComplete = useCallback(() => {
    setBootComplete(true)
    requestAnimationFrame(() => terminal.inputRef.current?.focus({ preventScroll: true }))
  }, [terminal.inputRef])

  return (
    <div
      className={cn(
        'terminal-shell terminal-scanlines relative flex flex-col overflow-hidden',
        'min-h-[min(68vh,560px)] max-h-[min(82vh,680px)] sm:min-h-[500px]'
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.03] via-transparent to-accent-purple/[0.02]"
      />

      <div className="shrink-0 border-b border-border/8 px-4 py-3 sm:px-5">
        <p className="font-mono text-[11px] leading-relaxed text-muted/80 sm:text-xs">
          <span className="text-accent-teal">●</span>{' '}
          <span className="text-accent-cyan/80">{terminalConfig.hostname}</span>
          <span className="text-muted/45"> · {terminalConfig.version}</span>
          {bootComplete ? (
            <span className="text-accent-teal/75"> · interactive</span>
          ) : (
            <span className="text-muted/50"> · booting</span>
          )}
        </p>
      </div>

      <div
        ref={terminal.scrollRef}
        className="terminal-scroll terminal-line-gap flex-1 overflow-y-auto overflow-x-hidden px-4 py-4 sm:px-5 sm:py-5"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
        onClick={terminal.focusInput}
      >
        <TerminalBootSequence
          commands={terminalBootCommands}
          banner={terminalBanner}
          onComplete={handleBootComplete}
        />

        {terminal.entries.map((entry) => (
          <TerminalEntry
            key={entry.id}
            entry={entry}
            onRunCommand={terminal.runCommand}
          />
        ))}

        {terminal.isExecuting ? (
          <p className="flex items-center gap-2 font-mono text-[11px] text-muted/55 sm:text-xs">
            <span className="inline-block h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-accent-cyan" />
            executing
          </p>
        ) : null}
      </div>

      <TerminalInputLine
        input={terminal.input}
        onChange={terminal.setInput}
        onSubmit={terminal.handleSubmit}
        onTab={terminal.handleTab}
        onHistoryUp={() => terminal.navigateHistory('up')}
        onHistoryDown={() => terminal.navigateHistory('down')}
        suggestions={terminal.suggestions}
        onSelectSuggestion={terminal.applySuggestion}
        disabled={!bootComplete || terminal.isExecuting}
        inputRef={terminal.inputRef}
      />
    </div>
  )
}

export default memo(InteractiveTerminal)
