import { useState, useCallback, memo, useRef } from 'react'
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
  const themeRef = useRef(theme)
  
  // Sync ref
  if (themeRef.current !== theme) {
    themeRef.current = theme
  }

  const getTheme = useCallback(() => themeRef.current, [])

  const terminal = useInteractiveTerminal({
    bootComplete,
    onThemeToggle: toggleTheme,
    getTheme,
  })

  const handleBootComplete = useCallback(() => {
    setBootComplete(true)
    requestAnimationFrame(() => terminal.inputRef.current?.focus({ preventScroll: true }))
  }, [terminal.inputRef])

  return (
    <div
      className={cn(
        'terminal-shell terminal-scanlines relative flex flex-col overflow-hidden rounded-xl border border-border/10 bg-void/80 backdrop-blur-sm shadow-glass',
        'min-h-[min(50vh,420px)] max-h-[min(70vh,560px)] sm:min-h-[380px]'
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.01] via-transparent to-accent-cyan/[0.015]"
      />

      <div className="shrink-0 border-b border-border/5 px-4 py-3 sm:px-6 sm:py-4">
        <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted/60 sm:text-[11px]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-cyan/70 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></span>
          Terminal
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
