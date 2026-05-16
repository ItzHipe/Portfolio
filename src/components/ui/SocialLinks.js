import { socialLinks } from '@/data/site'
import { cn } from '@/lib/cn'
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/ui/Icons'

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  dribbble: DribbbleIcon,
}

export default function SocialLinks({ className, iconClassName = 'w-5 h-5' }) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {socialLinks.map(({ name, href, icon }) => {
        const Icon = iconMap[icon]
        if (!Icon) return null

        return (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full glass hover-glow hover:border-border-glow/40 hover:text-accent-cyan transition-smooth"
              aria-label={name}
            >
              <Icon className={iconClassName} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
