import { useEffect, useRef, useState } from 'react'
import { useTypewriter } from '@/hooks/useTypewriter'

/**
 * Sequential terminal runner — one line at a time.
 * @param {import('@/data/terminal').TerminalCommand[]} commands
 * @param {{ active?: boolean }} options
 */
export function useTerminalSequence(commands, { active = false } = {}) {
  const [index, setIndex] = useState(-1)
  const [completed, setCompleted] = useState([])
  const [lineReady, setLineReady] = useState(false)
  const started = useRef(false)

  const current = index >= 0 && index < commands.length ? commands[index] : null
  const isRunning = active && index >= 0 && index < commands.length

  const { displayed, isComplete } = useTypewriter(current?.text ?? '', {
    enabled: isRunning && lineReady && current && !current.instant,
    speed: current?.typingSpeed ?? 16,
  })

  useEffect(() => {
    if (!active || started.current || !commands.length) return
    started.current = true
    setIndex(0)
  }, [active, commands.length])

  // Per-line delay before typing / instant
  useEffect(() => {
    if (!isRunning || !current) {
      setLineReady(false)
      return
    }

    setLineReady(false)
    const delay = current.delayBefore ?? 0
    const id = window.setTimeout(() => setLineReady(true), delay)
    return () => window.clearTimeout(id)
  }, [isRunning, current, index])

  // Instant lines
  useEffect(() => {
    if (!isRunning || !current?.instant || !lineReady) return

    setCompleted((prev) => [...prev, { ...current, rendered: current.text }])
    const after = current.delayAfter ?? 300
    const id = window.setTimeout(() => setIndex((i) => i + 1), after)
    return () => window.clearTimeout(id)
  }, [isRunning, current, lineReady])

  // Typed line completion
  useEffect(() => {
    if (!isRunning || !current || current.instant || !lineReady || !isComplete) return

    setCompleted((prev) => [...prev, { ...current, rendered: current.text }])
    const after = current.delayAfter ?? 300
    const id = window.setTimeout(() => setIndex((i) => i + 1), after)
    return () => window.clearTimeout(id)
  }, [isRunning, current, lineReady, isComplete])

  const isFinished = index >= commands.length
  const activeText = current && !current.instant ? displayed : ''

  return {
    completed,
    current,
    activeText,
    isTyping: isRunning && current && !current.instant && lineReady && !isComplete,
    isFinished,
    showCursor: isRunning && !isFinished && lineReady,
  }
}
