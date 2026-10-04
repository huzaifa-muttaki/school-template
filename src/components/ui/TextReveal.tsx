import { motion } from 'framer-motion'
import { ease, viewport } from '../../lib/motion'

type Props = {
  lines: React.ReactNode[]
  className?: string
  lineClassName?: string
  delay?: number
  /** Animate on mount instead of on scroll (used in heroes). */
  immediate?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'p'
}

/** Masked line-by-line headline reveal. Each line slides up from behind its own mask. */
export default function TextReveal({ lines, className = '', lineClassName = '', delay = 0, immediate, as = 'h2' }: Props) {
  const Tag = motion[as]
  const trigger = immediate ? { animate: 'show' } : { whileInView: 'show', viewport }
  return (
    <Tag
      className={className}
      initial="hidden"
      {...trigger}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: delay } } }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={`block ${lineClassName}`}
            variants={{
              hidden: { y: '105%' },
              show: { y: '0%', transition: { duration: 1.1, ease } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
