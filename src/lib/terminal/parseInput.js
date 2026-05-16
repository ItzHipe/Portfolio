/**
 * Parse raw terminal input into command + args.
 * Supports: ask "quoted question"
 * @param {string} raw
 */
export function parseInput(raw) {
  const trimmed = raw.trim()
  if (!trimmed) return { command: '', args: [], raw: '' }

  const askMatch = trimmed.match(/^ask\s+["'](.+)["']\s*$/i)
  if (askMatch) {
    return { command: 'ask', args: [askMatch[1]], raw: trimmed }
  }

  const askUnquoted = trimmed.match(/^ask\s+(.+)$/i)
  if (askUnquoted) {
    return { command: 'ask', args: [askUnquoted[1].trim()], raw: trimmed }
  }

  const parts = trimmed.split(/\s+/)
  const command = parts[0].toLowerCase()
  const args = parts.slice(1)

  return { command, args, raw: trimmed }
}
