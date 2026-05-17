import Head from 'next/head'
import dynamic from 'next/dynamic'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/home/Hero'
import AboutSection from '@/components/about/AboutSection'
import { siteConfig } from '@/data/site'

const TerminalSection = dynamic(
  () => import('@/components/terminal/TerminalSection'),
  { loading: () => <SectionPlaceholder height="min(72vh, 520px)" /> }
)

const ExperienceSection = dynamic(
  () => import('@/components/about/ExperienceSection'),
  { loading: () => <SectionPlaceholder /> }
)

const AchievementsSection = dynamic(
  () => import('@/components/about/AchievementsSection'),
  { loading: () => <SectionPlaceholder /> }
)

const ProjectsSection = dynamic(
  () => import('@/components/projects/ProjectsSection'),
  { loading: () => <SectionPlaceholder /> }
)

const SkillsSection = dynamic(
  () => import('@/components/skills/SkillsSection'),
  { loading: () => <SectionPlaceholder /> }
)

const ContactSection = dynamic(
  () => import('@/components/contact/ContactSection'),
  { loading: () => <SectionPlaceholder /> }
)

function SectionPlaceholder({ height = '240px' }) {
  return (
    <div
      className="section-container py-16"
      style={{ minHeight: height }}
      aria-hidden
    />
  )
}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords} />
        <meta name="author" content={siteConfig.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={siteConfig.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.ogDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <SkillsSection />
        <TerminalSection />
        <ContactSection />
      </Layout>
    </>
  )
}
