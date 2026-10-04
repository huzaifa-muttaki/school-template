import type { ReactNode } from 'react'
import TextReveal from './ui/TextReveal'
import Reveal from './ui/Reveal'

type Props = {
  index?: string
  eyebrow: string
  lines: ReactNode[]
  light?: boolean
  className?: string
  size?: 'lg' | 'md'
  as?: 'h1' | 'h2'
}

/** Numbered eyebrow + masked serif headline — the signature heading of the design system. */
export default function SectionHeading({ index, eyebrow, lines, light, className = '', size = 'lg', as = 'h2' }: Props) {
  return (
    <div className={className}>
      <Reveal y={12}>
        <p className={`eyebrow ${light ? 'text-gold-300' : 'text-gold-700'}`}>
          {index && <span className="tabular-nums">{index}</span>}
          <span aria-hidden className={`h-px w-8 ${light ? 'bg-gold-300/60' : 'bg-gold-700/50'}`} />
          <span>{eyebrow}</span>
        </p>
      </Reveal>
      <TextReveal
        as={as}
        lines={lines}
        className={`mt-6 font-display font-normal ${size === 'lg' ? 'text-display-lg' : 'text-display-md'} ${light ? 'text-ivory' : 'text-navy-900'}`}
      />
    </div>
  )
}
