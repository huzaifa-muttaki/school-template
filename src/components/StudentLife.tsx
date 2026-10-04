import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './ui/Reveal'
import Img from './ui/Img'
import { studentLife } from '../data/school'
import { useMediaQuery } from '../lib/hooks'

type Item = (typeof studentLife)[number]

function Story({ item, i }: { item: Item; i: number }) {
  const portrait = i % 2 === 0
  return (
    <figure className="group shrink-0 snap-start">
      <div
        className={`relative overflow-hidden bg-stone-300 ${
          portrait ? 'aspect-[4/5] w-[78vw] sm:w-[46vw] lg:w-auto' : 'aspect-[4/5] w-[78vw] sm:w-[46vw] lg:aspect-[4/3] lg:w-auto'
        } lg:h-[min(56vh,600px)]`}
      >
        <Img
          id={item.image}
          alt={`${item.title} at Nireka`}
          sizes="(min-width: 1024px) 45vw, 80vw"
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-lux group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="mt-6 flex w-0 min-w-full gap-5 pr-4">
        <span className="pt-1.5 text-[0.68rem] font-semibold tracking-[0.2em] text-gold-700 tabular-nums">
          {String(i + 1).padStart(2, '0')}
        </span>
        <span>
          <span className="block font-display text-[1.9rem] leading-none text-navy-900">{item.title}</span>
          <span className="mt-3 block text-[0.94rem] leading-relaxed text-charcoal/70">{item.text}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export default function StudentLife({ index = '04' }: { index?: string }) {
  const reduce = useReducedMotion()
  const desktop = useMediaQuery('(min-width: 1024px)')
  const pinned = desktop && !reduce

  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

  useLayoutEffect(() => {
    if (!pinned || !track.current) return
    const el = track.current
    const measure = () => setDistance(Math.max(0, el.scrollWidth - window.innerWidth))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [pinned])

  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  const heading = (
    <div className="container-site grid gap-8 lg:grid-cols-12 lg:items-end">
      <SectionHeading
        index={index}
        eyebrow="Student Life"
        className="lg:col-span-7"
        lines={['Life beyond', <em key="b" className="italic">the timetable.</em>]}
      />
      <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
        <p className="text-[1.02rem] leading-[1.8] text-charcoal/75">
          The friendships, passions and responsibilities that shape a person happen as much after the bell as before it.
        </p>
      </Reveal>
    </div>
  )

  if (!pinned) {
    return (
      <section ref={section} className="section-y overflow-hidden bg-ivory">
        {heading}
        <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-4 sm:scroll-px-8 sm:px-8 lg:px-12">
          {studentLife.map((item, i) => (
            <Story key={item.title} item={item} i={i} />
          ))}
          <span aria-hidden className="w-1 shrink-0" />
        </div>
      </section>
    )
  }

  return (
    <section ref={section} className="relative bg-ivory" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16">
        <motion.div
          ref={track}
          style={{ x }}
          className="flex w-max items-center gap-8 pl-12 pr-12 xl:gap-10 xl:pl-[max(4rem,calc((100vw-1440px)/2+4rem))] xl:pr-[max(4rem,calc((100vw-1440px)/2+4rem))]"
        >
          <div className="w-[min(30rem,34vw)] shrink-0 pr-8">
            <SectionHeading index={index} eyebrow="Student Life" lines={['Life beyond', <em key="b" className="italic">the timetable.</em>]} />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-sm text-[1.02rem] leading-[1.8] text-charcoal/75">
                The friendships, passions and responsibilities that shape a person happen as much after the bell as before it.
              </p>
            </Reveal>
          </div>
          {studentLife.map((item, i) => (
            <Story key={item.title} item={item} i={i} />
          ))}
        </motion.div>
        <div className="container-site mt-10 xl:mt-14">
          <div className="h-px w-full bg-navy-900/10">
            <motion.div className="h-px origin-left bg-gold-600" style={{ scaleX: progress }} />
          </div>
        </div>
      </div>
    </section>
  )
}
