import { parseInput } from '@/lib/terminal/parseInput'
import { lineEntry, richEntry } from '@/lib/terminal/entries'
import { matchAiQuery } from '@/data/terminal/aiPatterns'
import { terminalProjects } from '@/data/terminal/projects'
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
import { TERMINAL_COMMANDS } from '@/data/terminal/config'
import { socialLinks } from '@/data/site'

const HELP_GROUPS = [
  {
    title: 'Profile',
    cmds: ['whoami', 'about', 'skills', 'stack', 'experience', 'achievements'],
  },
  {
    title: 'Projects',
    cmds: ['projects', 'project farmlens', 'project cropsense', 'project experiments'],
  },
  {
    title: 'Actions',
    cmds: ['contact', 'resume', 'github', 'linkedin', 'theme', 'clear'],
  },
  {
    title: 'AI',
    cmds: ['ask "tell me about FarmLens"'],
  },
]

/**
 * @param {string} raw
 * @param {{ getTheme?: () => string }} ctx
 * @returns {{ entries: object[], sideEffects?: { themeToggle?: boolean, clear?: boolean } }}
 */
export function executeCommand(raw, ctx = {}) {
  const { command, args } = parseInput(raw)

  if (!command) {
    return { entries: [] }
  }

  switch (command) {
    case 'help':
      return {
        entries: [
          lineEntry({ text: 'Available commands — type to explore:', lineType: 'system' }),
          richEntry('help', { groups: HELP_GROUPS, all: TERMINAL_COMMANDS }),
        ],
      }

    case 'whoami':
      return { entries: [richEntry('whoami', whoamiContent)] }

    case 'about':
      return { entries: [richEntry('about', aboutContent)] }

    case 'skills':
      return { entries: [richEntry('skills', { groups: skillsGroups })] }

    case 'stack':
      return { entries: [richEntry('table', { title: 'Technology stack', rows: stackRows })] }

    case 'projects':
      return {
        entries: [
          lineEntry({ text: `${projectsList.length} systems loaded:`, lineType: 'system' }),
          richEntry('projects', { items: projectsList }),
        ],
      }

    case 'project': {
      const slug = args[0]?.toLowerCase()
      if (!slug) {
        return {
          entries: [
            lineEntry({
              text: 'Usage: project <name> — e.g. project farmlens',
              lineType: 'error',
            }),
          ],
        }
      }
      const project = terminalProjects[slug]
      if (!project) {
        return {
          entries: [
            lineEntry({
              text: `Unknown project "${slug}". Try: ${Object.keys(terminalProjects).join(', ')}`,
              lineType: 'error',
            }),
          ],
        }
      }
      return { entries: [richEntry('project', project)] }
    }

    case 'experience':
      return { entries: [richEntry('experience', { items: experienceTimeline })] }

    case 'achievements':
      return { entries: [richEntry('achievements', { items: achievements })] }

    case 'contact':
      return { entries: [richEntry('contact', contactInfo)] }

    case 'resume':
      return {
        entries: [
          lineEntry({
            text: 'Opening resume.pdf — download started.',
            lineType: 'success',
          }),
          richEntry('link', {
            label: 'Download Resume',
            href: '/resume.pdf',
            external: false,
          }),
        ],
      }

    case 'github': {
      const gh = socialLinks.find((s) => s.icon === 'github')
      return {
        entries: [
          richEntry('link', {
            label: 'GitHub Profile',
            href: gh?.href ?? 'https://github.com',
            external: true,
          }),
        ],
      }
    }

    case 'linkedin': {
      const li = socialLinks.find((s) => s.icon === 'linkedin')
      return {
        entries: [
          richEntry('link', {
            label: 'LinkedIn Profile',
            href: li?.href ?? 'https://linkedin.com',
            external: true,
          }),
        ],
      }
    }

    case 'clear':
      return { entries: [], sideEffects: { clear: true } }

    case 'theme': {
      const theme = ctx.getTheme?.() ?? 'dark'
      return {
        entries: [
          lineEntry({
            text: `Toggling theme (${theme} → ${theme === 'dark' ? 'light' : 'dark'})...`,
            lineType: 'system',
          }),
        ],
        sideEffects: { themeToggle: true },
      }
    }

    case 'ask': {
      const query = args.join(' ')
      const match = matchAiQuery(query)
      if (!match) {
        return {
          entries: [
            lineEntry({
              text: 'Usage: ask "your question"',
              lineType: 'error',
            }),
          ],
        }
      }
      const entries = [
        lineEntry({ text: 'AI › processing query...', lineType: 'system', prefix: '◆' }),
        lineEntry({ text: match.answer, lineType: 'output' }),
      ]
      if (match.rich?.type === 'project-hint' && match.rich.projectId) {
        const project = terminalProjects[match.rich.projectId]
        if (project) entries.push(richEntry('project', project))
      }
      if (match.rich?.type === 'skills-hint') {
        entries.push(richEntry('skills', { groups: skillsGroups }))
      }
      return { entries }
    }

    default:
      return {
        entries: [
          lineEntry({
            text: `Command not found: ${command}. Type 'help' for available commands.`,
            lineType: 'error',
          }),
        ],
      }
  }
}

export const EXECUTION_DELAY_MS = 90
