import { memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/cn'

function TerminalSuggestions({ suggestions, visible, onSelect, activeIndex = 0 }) {
  return (
    <AnimatePresence>
      {visible && suggestions.length > 0 ? (
        <motion.ul
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15 }}
          className="absolute bottom-full left-0 right-0 z-20 mb-1 max-h-36 overflow-y-auto rounded-lg border border-border/15 bg-elevated/95 py-1 shadow-glow backdrop-blur-xl"
          role="listbox"
          aria-label="Command suggestions"
        >
          {suggestions.map((suggestion, i) => (
            <li key={suggestion} role="option" aria-selected={i === activeIndex}>
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault()
                  onSelect(suggestion)
                }}
                className={cn(
                  'focus-ring w-full px-3 py-1.5 text-left font-mono text-xs transition-smooth',
                  i === activeIndex
                    ? 'bg-accent-cyan/10 text-accent-cyan'
                    : 'text-muted hover:bg-white/5 hover:text-foreground'
                )}
              >
                {suggestion}
              </button>
            </li>
          ))}
        </motion.ul>
      ) : null}
    </AnimatePresence>
  )
}

export default memo(TerminalSuggestions)
