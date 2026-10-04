import { useId } from 'react'

type Props = { light?: boolean; compact?: boolean }

/**
 * Nireka mark — a rising wedge, a quarter-arch and a point of light —
 * drawn in the site palette, with the letter-spaced wordmark.
 */
export function NirekaMark({ className = '' }: { className?: string }) {
  // useId() yields ids like ":r0:"; colons break url(#…) references, so strip them
  const maskId = `nireka-mask-${useId().replace(/:/g, '')}`
  return (
    <svg viewBox="112 100 140 264" className={className} aria-hidden>
      <defs>
        {/* Carves a clean gap between the arch and the wedge on any background */}
        {/* Explicit region: the default (-10%/120% of the viewport from the origin) misses the offset viewBox */}
        <mask id={maskId} maskUnits="userSpaceOnUse" x="100" y="90" width="170" height="290">
          <rect x="100" y="90" width="170" height="290" fill="white" />
          <circle cx="123" cy="362" r="117" fill="black" />
        </mask>
      </defs>
      <polygon points="200,172 248,104 248,362 200,362" fill="currentColor" className="text-gold" mask={`url(#${maskId})`} />
      <path d="M123,253 A109,109 0 0 1 232,362 L195,362 A72,72 0 0 0 123,290 Z" fill="currentColor" className="text-gold" />
      <circle cx="143" cy="341" r="21" fill="currentColor" />
    </svg>
  )
}

export default function Logo({ light = true, compact = false }: Props) {
  const color = light ? 'text-ivory' : 'text-navy-900'
  return (
    <span className={`flex items-center gap-3 ${color}`}>
      <NirekaMark className="h-11 w-6 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.5rem] font-medium tracking-[0.3em]">NIREKA</span>
        {!compact && (
          <span className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.34em] opacity-70">International School</span>
        )}
      </span>
    </span>
  )
}
