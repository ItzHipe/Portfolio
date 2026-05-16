import { memo } from 'react'
import HelpOutput from '@/components/terminal/outputs/HelpOutput'
import WhoamiOutput from '@/components/terminal/outputs/WhoamiOutput'
import AboutOutput from '@/components/terminal/outputs/AboutOutput'
import SkillsOutput from '@/components/terminal/outputs/SkillsOutput'
import TableOutput from '@/components/terminal/outputs/TableOutput'
import ProjectsListOutput from '@/components/terminal/outputs/ProjectsListOutput'
import ProjectCardOutput from '@/components/terminal/outputs/ProjectCardOutput'
import ExperienceOutput from '@/components/terminal/outputs/ExperienceOutput'
import AchievementsOutput from '@/components/terminal/outputs/AchievementsOutput'
import ContactOutput from '@/components/terminal/outputs/ContactOutput'
import LinkOutput from '@/components/terminal/outputs/LinkOutput'

function TerminalRichOutput({ blockType, data, onRunCommand }) {
  switch (blockType) {
    case 'help':
      return <HelpOutput groups={data.groups} />
    case 'whoami':
      return <WhoamiOutput {...data} />
    case 'about':
      return <AboutOutput {...data} />
    case 'skills':
      return <SkillsOutput groups={data.groups} />
    case 'table':
      return <TableOutput title={data.title} rows={data.rows} />
    case 'projects':
      return <ProjectsListOutput items={data.items} onRunCommand={onRunCommand} />
    case 'project':
      return <ProjectCardOutput project={data} />
    case 'experience':
      return <ExperienceOutput items={data.items} />
    case 'achievements':
      return <AchievementsOutput items={data.items} />
    case 'contact':
      return <ContactOutput {...data} />
    case 'link':
      return <LinkOutput {...data} />
    default:
      return null
  }
}

export default memo(TerminalRichOutput)
