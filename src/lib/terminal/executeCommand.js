import { parseInput } from '@/lib/terminal/parseInput'
import { lineEntry, richEntry } from '@/lib/terminal/entries'
import { terminalProjects } from '@/data/terminal/projects'
import { socialLinks } from '@/data/site'
import { TERMINAL_COMMANDS } from '@/data/terminal/config'
import {
  whoamiContent,
  aboutContent,
  stackRows,
  skillsGroups,
  projectsList,
  experienceTimeline,
  achievements,
  contactInfo,
} from '@/data/terminal/content'

export { TERMINAL_COMMANDS }

export function executeCommand(raw, ctx = {}) {
  const { command, args } = parseInput(raw)

  if (!command) {
    return { entries: [] }
  }

  const blank = lineEntry({ text: '', lineType: 'output', prefix: '' })

  switch (command) {
    case 'help':
      return {
        entries: [
          blank,
          lineEntry({
            text: `→ Available commands: ${TERMINAL_COMMANDS.join(', ')}`,
            lineType: 'output',
            prefix: '',
          }),
          blank,
        ],
      }

    case 'whoami':
      return {
        entries: [blank, richEntry('whoami', whoamiContent), blank],
      }

    case 'about':
      return {
        entries: [blank, richEntry('about', aboutContent), blank],
      }

    case 'projects':
      return {
        entries: [blank, richEntry('projects', { items: projectsList }), blank],
      }

    case 'contact':
      return {
        entries: [blank, richEntry('contact', contactInfo), blank],
      }

    case 'resume':
      return {
        entries: [
          blank,
          lineEntry({ text: '→ Opening resume...', lineType: 'success', prefix: '' }),
          richEntry('link', {
            label: 'Download / View Resume',
            href: '/resume.pdf',
            external: false,
          }),
          blank,
        ],
      }

    case 'github': {
      const gh = socialLinks.find((s) => s.icon === 'github')
      return {
        entries: [
          blank,
          richEntry('link', {
            label: '→ Open GitHub Profile',
            href: gh?.href || 'https://github.com/ItzHipe',
            external: true,
          }),
          blank,
        ],
      }
    }

    case 'linkedin': {
      const li = socialLinks.find((s) => s.icon === 'linkedin') || socialLinks.find((s) => s.name.toLowerCase() === 'linkedin')
      return {
        entries: [
          blank,
          richEntry('link', {
            label: '→ Open LinkedIn Profile',
            href: li?.href || 'https://linkedin.com',
            external: true,
          }),
          blank,
        ],
      }
    }

    case 'clear':
      return { entries: [], sideEffects: { clear: true } }

    default:
      return {
        entries: [
          blank,
          lineEntry({
            text: `→ Command not found. Type 'help' to see available commands.`,
            lineType: 'error',
            prefix: '',
          }),
          blank,
        ],
      }
  }
}

export const EXECUTION_DELAY_MS = 60

