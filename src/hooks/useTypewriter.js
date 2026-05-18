import { useEffect, useRef, useState } from 'react'

const CHUNK = 1

/**
 * Batched typewriter — fewer React updates than per-character.
 */
export function useTypewriter(text, { enabled = true, speed = 16, onComplete } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    if (!enabled) {
      setDisplayed('')
      setIsComplete(false)
      return
    }

    if (!text) {
      setDisplayed('')
      setIsComplete(true)
      onCompleteRef.current?.()
      return
    }

    setDisplayed('')
    setIsComplete(false)
    let index = 0
    let cancelled = false
    let timeoutId

    const tick = () => {
      if (cancelled) return
      index = Math.min(index + CHUNK, text.length)
      setDisplayed(text.slice(0, index))
      if (index >= text.length) {
        setIsComplete(true)
        onCompleteRef.current?.()
        return
      }
      timeoutId = window.setTimeout(tick, speed)
    }

    timeoutId = window.setTimeout(tick, speed)

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [text, enabled, speed])

  return { displayed, isComplete }
}
