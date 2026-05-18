import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { applyAutocomplete, getSuggestions } from '@/lib/terminal/autocomplete'
import { executeCommand, EXECUTION_DELAY_MS } from '@/lib/terminal/executeCommand'
import { inputEntry, lineEntry } from '@/lib/terminal/entries'

const MAX_ENTRIES = 30

/**
 * Interactive terminal state — boot handled separately.
 * @param {{ onThemeToggle?: () => void, getTheme?: () => string, bootComplete?: boolean }} options
 */
export function useInteractiveTerminal({
  onThemeToggle,
  getTheme,
  bootComplete = false,
} = {}) {
  const [entries, setEntries] = useState([])
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isExecuting, setIsExecuting] = useState(false)
  const [readyAnnounced, setReadyAnnounced] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  const suggestions = useMemo(() => getSuggestions(input), [input])

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [entries, isExecuting, scrollToBottom])

  useEffect(() => {
    if (!bootComplete || readyAnnounced) return
    setReadyAnnounced(true)
    setEntries([
      lineEntry({
        text: 'Type help to explore.',
        lineType: 'output',
        prefix: '›',
      }),
    ])
  }, [bootComplete, readyAnnounced])

  const runCommand = useCallback(
    async (raw) => {
      const trimmed = raw.trim()
      if (!trimmed || isExecuting) return

      setEntries((prev) => [...prev, inputEntry(trimmed)])
      setCommandHistory((prev) => {
        const next = prev.filter((c) => c !== trimmed)
        return [...next, trimmed]
      })
      setHistoryIndex(-1)
      setInput('')
      setIsExecuting(true)

      await new Promise((r) => setTimeout(r, EXECUTION_DELAY_MS))

      const result = executeCommand(trimmed, { getTheme })

      if (result.sideEffects?.clear) {
        setEntries([])
      } else if (result.entries.length) {
        setEntries((prev) => {
          const next = [...prev, ...result.entries]
          return next.length > MAX_ENTRIES ? next.slice(-MAX_ENTRIES) : next
        })
      }

      if (result.sideEffects?.themeToggle) {
        onThemeToggle?.()
      }

      setIsExecuting(false)
      requestAnimationFrame(() => inputRef.current?.focus())
    },
    [isExecuting, getTheme, onThemeToggle]
  )

  const handleSubmit = useCallback(() => {
    runCommand(input)
  }, [input, runCommand])

  const navigateHistory = useCallback(
    (direction) => {
      if (!commandHistory.length) return

      setHistoryIndex((prev) => {
        const next =
          direction === 'up'
            ? prev < commandHistory.length - 1
              ? prev + 1
              : prev
            : prev > 0
              ? prev - 1
              : -1

        if (next === -1) {
          setInput('')
        } else {
          const idx = commandHistory.length - 1 - next
          setInput(commandHistory[idx] ?? '')
        }
        return next
      })
    },
    [commandHistory]
  )

  const handleTab = useCallback(() => {
    const completed = applyAutocomplete(input)
    if (completed) setInput(completed)
  }, [input])

  const applySuggestion = useCallback((suggestion) => {
    setInput(suggestion)
    inputRef.current?.focus()
  }, [])

  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  return {
    entries,
    input,
    setInput,
    commandHistory,
    suggestions,
    isExecuting,
    isInteractive: bootComplete,
    scrollRef,
    inputRef,
    handleSubmit,
    navigateHistory,
    handleTab,
    applySuggestion,
    focusInput,
    runCommand,
  }
}
