import Image from 'next/image'
import { articlesContent } from '@/data/articles'
import SectionHeading from '@/components/ui/SectionHeading'
import { LinkArrow } from '@/components/ui/Icons'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren'

function ArticleCard({ title, description, readTime, href, image }) {
  return (
    <article className="card-premium group overflow-hidden">
      {image && (
        <div className="relative aspect-video w-full overflow-hidden bg-elevated">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between gap-2">
          {readTime && (
            <span className="font-mono text-xs text-accent-cyan">{readTime}</span>
          )}
          <a
            href={href}
            className="focus-ring text-muted transition-smooth hover:text-accent-cyan"
            aria-label={`Read ${title}`}
          >
            <LinkArrow />
          </a>
        </div>
        <h3 className="font-display text-lg font-semibold leading-snug transition-smooth group-hover:text-accent-cyan">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-dark/70 dark:text-light/70">
          {description}
        </p>
      </div>
    </article>
  )
}

export default function ArticlesSection() {
  return (
    <section
      id="articles"
      className="section-flow section-padding"
      aria-labelledby="articles-heading"
    >
      <div className="section-container">
        <SectionHeading
          tagline={articlesContent.tagline}
          title={articlesContent.title}
          subtitle={articlesContent.subtitle}
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articlesContent.items.map((article) => (
            <StaggerItem
              key={article.id}
              className={article.image ? 'sm:col-span-2 lg:col-span-1' : undefined}
            >
              <ArticleCard {...article} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
