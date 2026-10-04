import { useEffect, useState } from 'react'
import { school } from '../data/school'

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)
  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])
  return matches
}

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${school.name}` : `${school.name} — ${school.tagline}`
  }, [title])
}
