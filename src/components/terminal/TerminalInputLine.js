import { memo, useCallback } from 'react'
import TerminalSuggestions from '@/components/terminal/TerminalSuggestions'
import { terminalConfig } from '@/data/terminal/config'
import { cn } from '@/lib/cn'

function TerminalInputLine({
  input,
  onChange,
  onSubmit,
  onTab,
  onHistoryUp,
  onHistoryDown,
  suggestions,
  onSelectSuggestion,
  disabled,
  inputRef,
  promptUser = terminalConfig.user,
  promptHost = terminalConfig.hostname,
  promptCwd = terminalConfig.cwd,
}) {
  const prompt = `${promptUser}@${promptHost}:${promptCwd}$`

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        onSubmit()
        return
      }
      if (e.key === 'Tab') {
        e.preventDefault()
        onTab()
        return
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        onHistoryUp()
        return
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        onHistoryDown()
      }
    },
    [onSubmit, onTab, onHistoryUp, onHistoryDown]
  )

  return (
    <div className="relative shrink-0 border-t border-border/8 bg-void/60 px-4 py-3 sm:px-5 sm:py-3.5">
      <TerminalSuggestions
        suggestions={suggestions}
        visible={!disabled && input.length > 0}
        onSelect={onSelectSuggestion}
      />

      <label htmlFor="terminal-input" className="sr-only">
        Terminal command input
      </label>

      <div className="flex items-center gap-2 font-mono text-xs leading-none sm:text-[13px]">
        <span className="hidden shrink-0 text-accent-cyan/75 sm:inline">{prompt}</span>
        <span className="shrink-0 text-accent-cyan/75 sm:hidden">$</span>
        <div className="relative min-w-0 flex-1">
          <input
            id="terminal-input"
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            className={cn(
              'w-full bg-transparent py-1 text-foreground outline-none placeholder:text-muted/35',
              'caret-accent-cyan'
            )}
            placeholder={disabled ? 'Booting…' : 'help'}
            aria-describedby="terminal-hint"
          />
        </div>
      </div>

      <p id="terminal-hint" className="mt-2 hidden font-mono text-[10px] text-muted/45 sm:block">
        Enter · Tab · ↑↓ · <kbd className="text-accent-cyan/65">help</kbd>
      </p>
    </div>
  )
}

export default memo(TerminalInputLine)
