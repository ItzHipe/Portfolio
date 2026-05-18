import { useEffect, useState, useRef } from 'react'

export function useScrollSpy(sectionIds, rootMargin = '-20% 0px -40% 0px') {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')
  const visibleSections = useRef(new Map())

  useEffect(() => {
    if (!sectionIds.length || typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleSections.current.set(entry.target.id, entry.isIntersecting)
        })

        // Find the first section in the array that is currently intersecting
        const active = sectionIds.find((id) => visibleSections.current.get(id))
        if (active) {
          setActiveId(active)
        }
      },
      { rootMargin, threshold: 0.1 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds, rootMargin])

  return activeId
}
