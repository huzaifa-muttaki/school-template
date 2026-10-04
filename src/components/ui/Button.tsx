import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type Variant = 'light' | 'gold' | 'outline-light' | 'dark' | 'outline-dark'

const variants: Record<Variant, string> = {
  light: 'bg-ivory text-navy-900 hover:bg-white',
  gold: 'bg-gold text-midnight hover:bg-gold-400',
  'outline-light': 'border border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory hover:text-navy-900',
  dark: 'bg-navy-900 text-ivory hover:bg-navy-700',
  'outline-dark': 'border border-navy-900/25 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-ivory',
}

type Props = {
  to?: string
  href?: string
  variant?: Variant
  children: ReactNode
  arrow?: boolean
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

export default function Button({ to, href, variant = 'light', children, arrow = true, className = '', type = 'button', onClick }: Props) {
  const cls = `group inline-flex items-center justify-center gap-3 px-7 py-[1.05rem] text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ease-lux ${variants[variant]} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-500 ease-lux group-hover:translate-x-1"
          strokeWidth={1.5}
        />
      )}
    </>
  )
  if (to)
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {inner}
      </Link>
    )
  if (href)
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    )
  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  )
}

/** Quiet text link with an animated underline and arrow. */
export function TextLink({ to, children, light = false, className = '' }: { to: string; children: ReactNode; light?: boolean; className?: string }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] ${light ? 'text-ivory' : 'text-navy-900'} ${className}`}
    >
      <span className="link-underline">{children}</span>
      <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform duration-500 ease-lux group-hover:translate-x-1" strokeWidth={1.5} />
    </Link>
  )
}
