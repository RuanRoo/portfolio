import { useCallback, useRef } from 'react'

export function useScrollSnap() {
  const observer = useRef<IntersectionObserver | null>(null)

  const observeElement = useCallback((element: HTMLElement, offset: number = 0) => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const y = entry.target.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.current.observe(element)
  }, [])

  return { observeElement }
}

