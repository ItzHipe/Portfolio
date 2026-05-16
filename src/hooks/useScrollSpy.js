import { useEffect, useState } from 'react'

/**
 * @param {string[]} sectionIds — order matters (top → bottom on page)
 * @param {number} offset — px from top (nav height + buffer)
 */
export function useScrollSpy(sectionIds, offset = 112) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (!sectionIds.length || typeof window === 'undefined') return

    const update = () => {
      const scrollPos = window.scrollY + offset
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) current = id
      }

      setActiveId((prev) => (prev === current ? prev : current))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [sectionIds, offset])

  return activeId
}
