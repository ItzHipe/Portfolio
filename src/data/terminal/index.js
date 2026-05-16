export { terminalConfig, TERMINAL_COMMANDS, PROJECT_ALIASES } from '@/data/terminal/config'
export {
  terminalBootCommands,
  terminalBanner,
  terminalBootCommands as terminalCommandsLegacy,
} from '@/data/terminal/boot'
export * from '@/data/terminal/content'
export { terminalProjects } from '@/data/terminal/projects'
export { matchAiQuery } from '@/data/terminal/aiPatterns'

/** Backward-compatible boot export */
export { terminalBootCommands as terminalCommands } from '@/data/terminal/boot'
