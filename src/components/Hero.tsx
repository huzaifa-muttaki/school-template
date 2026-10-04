import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Img from './ui/Img'
import Button from './ui/Button'
import TextReveal from './ui/TextReveal'
import { images, school } from '../data/school'
import { ease } from '../lib/motion'

const facts = ['Ages 3 – 18', 'Day & Boarding', '36 Nationalities']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative isolate h-[100svh] min-h-[640px] overflow-hidden bg-midnight text-ivory">
      {/* Cinematic image: slow settle on load, gentle parallax on scroll */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: imageY }}>
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.8, ease }}
        >
          <Img
            id={images.hero}
            alt="The main building of the Nireka estate, framed by trees"
            priority
            widths={[828, 1280, 1920, 2560]}
            className="h-full w-full object-cover object-[60%_center]"
          />
        </motion.div>
      </motion.div>

      {/* Tonal grading: deep navy from the base and left edge */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy-900/30 mix-blend-multiply" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-midnight/55 to-midnight/25" />
      {/* Deepens the sky so the scene reads as early evening rather than overcast */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-3/4 bg-gradient-to-b from-midnight/85 via-midnight/45 to-transparent" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight/75 via-midnight/25 to-transparent" />
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-site flex h-full flex-col justify-end pb-28 sm:pb-32 lg:pb-36"
      >
        <motion.p
          className="eyebrow text-gold-300"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
        >
          <span>{school.name}</span>
          <span aria-hidden className="hidden h-px w-8 bg-gold-300/60 sm:block" />
          <span className="hidden sm:inline">Est. {school.founded}</span>
        </motion.p>

        <TextReveal
          as="h1"
          immediate
          delay={0.65}
          className="mt-6 max-w-[14ch] font-display text-display-2xl font-normal sm:mt-8"
          lines={['Every question', <em key="b" className="font-normal italic text-ivory/95">opens a door.</em>]}
        />

        <div className="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-12 lg:items-end">
          <motion.p
            className="max-w-xl text-[1.02rem] font-light leading-relaxed text-ivory/80 sm:text-lg lg:col-span-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25, ease }}
          >
            A school where curiosity is taken seriously, every learner is known by name, and young people grow the
            confidence to leave their own mark on the world.
          </motion.p>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease }}
          >
            <Button to="/about" variant="light">Discover Nireka</Button>
            <Button to="/admissions" variant="outline-light">Admissions 2027–28</Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Base rail */}
      <motion.div
        className="absolute inset-x-0 bottom-0 border-t border-ivory/15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.7 }}
      >
        <div className="container-site flex h-16 items-center justify-between text-[0.68rem] font-medium uppercase tracking-[0.24em] text-ivory/60 sm:h-20">
          <ul className="flex gap-6 sm:gap-10">
            {facts.map((f, i) => (
              <li key={f} className={i === 2 ? 'hidden sm:block' : ''}>{f}</li>
            ))}
          </ul>
          <a href="#introduction" className="group flex items-center gap-3 hover:text-ivory">
            <span className="hidden sm:inline">Scroll</span>
            <span aria-hidden className="relative block h-8 w-px overflow-hidden bg-ivory/20">
              <motion.span
                className="absolute inset-x-0 top-0 h-1/2 bg-gold-300"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
            <span className="sr-only">to introduction</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
