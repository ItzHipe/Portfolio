/**
 * Smooth scroll to an in-page section by id.
 * @param {string} href - Hash link e.g. "#projects"
 */
export function scrollToSection(href) {
  if (typeof window === 'undefined' || !href?.startsWith('#')) return

  const id = href.slice(1)
  const element = document.getElementById(id)
  if (!element) return

  const nav = document.querySelector('header')
  const offset = (nav?.offsetHeight ?? 72) + 12
  const top = element.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}
