import { contactContent } from '@/data/contact'
import { siteConfig } from '@/data/site'
import FadeIn from '@/components/animations/FadeIn'
import Button from '@/components/ui/Button'
import SocialLinks from '@/components/ui/SocialLinks'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-flow section-padding pb-20 md:pb-28"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        <FadeIn className="card-premium relative mx-auto max-w-2xl overflow-hidden p-8 text-center sm:p-10 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent-cyan/10 blur-[80px]"
          />

          <p className="eyebrow mb-3">Contact</p>
          <h2
            id="contact-heading"
            className="gradient-text text-balance font-display text-3xl font-bold tracking-tight md:text-4xl"
          >
            {contactContent.title}
          </h2>
          <p className="prose-muted mx-auto mt-4 max-w-md text-base">
            {contactContent.subtitle}
          </p>

          <FadeIn delay={0.08} className="mt-8">
            <Button
             href={`mailto:${contactContent.email}`}
             size="md"
            className="btn-tactile font-mono tracking-wide"
            >
              {contactContent.email}
            </Button>
          </FadeIn>

          <FadeIn delay={0.14} className="mt-8">
            <p className="mb-4 text-sm text-subtle">Elsewhere</p>
            <SocialLinks className="justify-center" />
          </FadeIn>

          <p className="mt-10 font-mono text-[11px] text-subtle">
            Designed and developed by {siteConfig.name}.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
