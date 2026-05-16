import { TERMINAL_COMMANDS, PROJECT_ALIASES } from '@/data/terminal/config'

/**
 * @param {string} input - current input line
 * @returns {string[]}
 */
export function getSuggestions(input) {
  const trimmed = input.trimStart()
  if (!trimmed) return TERMINAL_COMMANDS.slice(0, 6)

  const lower = trimmed.toLowerCase()

  if (lower.startsWith('project ')) {
    const partial = lower.slice(8)
    return PROJECT_ALIASES.filter((p) => p.startsWith(partial)).map(
      (p) => `project ${p}`
    )
  }

  if (lower.startsWith('ask ')) {
    return ['ask "tell me about FarmLens"', 'ask "what technologies does Jay use?"']
  }

  const matches = TERMINAL_COMMANDS.filter((cmd) => cmd.startsWith(lower))
  const projectSuggest =
    'project'.startsWith(lower) && !matches.includes('project')
      ? ['project farmlens', 'project cropsense']
      : []

  return [...new Set([...matches, ...projectSuggest])].slice(0, 8)
}

/**
 * @param {string} input
 * @returns {string | null} completed line
 */
export function applyAutocomplete(input) {
  const suggestions = getSuggestions(input)
  if (!suggestions.length) return null

  const trimmed = input.trimStart()
  const lower = trimmed.toLowerCase()
  const best = suggestions.find((s) => s.toLowerCase().startsWith(lower)) ?? suggestions[0]

  if (best.toLowerCase() === lower) {
    const next = suggestions[suggestions.indexOf(best) + 1]
    return next ?? best
  }

  return best
}
