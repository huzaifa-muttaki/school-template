import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Img from './ui/Img'
import Button from './ui/Button'
import TextReveal from './ui/TextReveal'
import Reveal from './ui/Reveal'
import { images, keyDates } from '../data/school'

export default function AdmissionsCTA() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-midnight text-ivory">
      <motion.div className="absolute inset-x-0 -bottom-[20%] -top-[20%] -z-10" style={{ y }}>
        <Img id={images.vault} alt="" sizes="100vw" className="h-full w-full object-cover" />
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-midnight/70" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight via-midnight/60 to-midnight/30" />
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <div className="container-site grid gap-16 py-28 sm:py-36 lg:grid-cols-12 lg:items-end lg:py-44">
        <div className="lg:col-span-8">
          <Reveal y={12}>
            <p className="eyebrow text-gold-300">
              <span aria-hidden className="h-px w-8 bg-gold-300/60" />
              Now welcoming families for 2027–28
            </p>
          </Reveal>
          <TextReveal
            className="mt-8 font-display text-display-xl font-normal"
            lines={['Come and', <em key="b" className="italic text-gold-300">see for yourself.</em>]}
          />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-ivory/80">
              Walk the estate, sit in on a lesson and meet the people who would know your child by name.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/admissions" variant="gold">Start an Application</Button>
            <Button to="/contact" variant="outline-light">Arrange a Visit</Button>
          </Reveal>
        </div>

        <Reveal delay={0.35} className="lg:col-span-4">
          <div className="border-t border-ivory/20 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h3 className="eyebrow text-ivory/60">Key Dates</h3>
            <dl className="mt-6 space-y-5">
              {keyDates.map((d) => (
                <div key={d.label} className="flex items-baseline justify-between gap-6 border-b border-ivory/10 pb-5 last:border-0">
                  <dt className="text-[0.95rem] text-ivory/80">{d.label}</dt>
                  <dd className="shrink-0 font-display text-xl italic text-gold-300">{d.date}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
