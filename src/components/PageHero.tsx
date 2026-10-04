import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Img from './ui/Img'
import TextReveal from './ui/TextReveal'
import { ease } from '../lib/motion'

type Props = {
  eyebrow: string
  lines: ReactNode[]
  intro?: string
  image: string
  imageAlt?: string
  /** Shorter variant for utility pages (News, Gallery, Contact). */
  compact?: boolean
  position?: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, lines, intro, image, imageAlt = '', compact, position = 'center', children }: Props) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      ref={ref}
      className={`relative isolate flex overflow-hidden bg-midnight text-ivory ${
        compact ? 'min-h-[68svh] lg:min-h-[64vh]' : 'min-h-[82svh] lg:min-h-[86vh]'
      }`}
    >
      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <motion.div className="h-full w-full" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease }}>
          <Img id={image} alt={imageAlt} priority sizes="100vw" widths={[828, 1280, 1920, 2560]} className="h-full w-full object-cover" style={{ objectPosition: position }} />
        </motion.div>
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-midnight/50 to-midnight/30" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight/70 to-transparent" />
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <div className="container-site flex flex-col justify-end pb-16 pt-36 sm:pb-20 lg:pb-24">
        <motion.p
          className="eyebrow text-gold-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        >
          <span aria-hidden className="h-px w-8 bg-gold-300/60" />
          {eyebrow}
        </motion.p>
        <TextReveal as="h1" immediate delay={0.4} lines={lines} className="mt-6 max-w-5xl font-display text-display-xl font-normal" />
        {(intro || children) && (
          <motion.div
            className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease }}
          >
            {intro && <p className="max-w-xl text-[1.05rem] font-light leading-relaxed text-ivory/80 sm:text-lg lg:col-span-6">{intro}</p>}
            {children && <div className="lg:col-span-6 lg:justify-self-end">{children}</div>}
          </motion.div>
        )}
      </div>
    </section>
  )
}
