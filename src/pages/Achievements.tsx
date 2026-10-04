import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import AchievementsList from '../components/Achievements'
import AdmissionsCTA from '../components/AdmissionsCTA'
import Reveal from '../components/ui/Reveal'
import ImageReveal from '../components/ui/ImageReveal'
import Counter from '../components/ui/Counter'
import { images, testimonials } from '../data/school'
import { ease, fadeUp, stagger, viewport } from '../lib/motion'
import { usePageTitle } from '../lib/hooks'

const honours = [
  { value: 60, suffix: '+', label: 'Student research projects presented each year' },
  { value: 42, suffix: '', label: 'Prototype teams at the 2026 Innovators Showcase' },
  { value: 24, suffix: '', label: 'School sports teams across twelve sports' },
  { value: 11, suffix: '', label: 'Student compositions premiered last season' },
]

const features = [
  {
    eyebrow: 'Innovation · 2026',
    title: 'Inside the Young Innovators Showcase',
    text: 'Each spring the Making Studios open to families for an afternoon of working prototypes. This year’s favourite was a low-cost seed dryer built from reclaimed window frames — designed, tested and redesigned by four Year 10 students over a single term.',
    image: images.workshop,
    alt: 'Workbenches and tools in the Ridgeway Making Studios',
  },
  {
    eyebrow: 'Music · 2024',
    title: 'An evening of new music',
    text: 'For the Composers’ Evening, eleven students wrote original pieces for the school’s chamber ensembles. Rehearsals began in January; by May the Concert Hall was full for eleven premieres — and one encore nobody had planned.',
    image: images.concertHall,
    alt: 'Rows of seats facing the stage in the Concert Hall',
  },
]

function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = (d: number) => setI((v) => (v + d + testimonials.length) % testimonials.length)
  return (
    <section className="section-y bg-ivory-200">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SectionHeading index="04" eyebrow="In Their Words" size="md" lines={['What our community', <em key="b" className="italic">tells us.</em>]} />
        </div>
        <div className="lg:col-span-8">
          <div className="relative min-h-[300px] sm:min-h-[260px]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease }}
              >
                <blockquote className="font-display text-[1.9rem] italic leading-[1.25] text-navy-900 sm:text-[2.5rem]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <span className="block font-display text-xl text-navy-900">{t.name}</span>
                  <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-700">{t.detail}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-10 flex items-center justify-between border-t border-navy-900/15 pt-6">
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-navy-900 tabular-nums">
              {String(i + 1).padStart(2, '0')} <span className="text-stone-500">/ {String(testimonials.length).padStart(2, '0')}</span>
            </p>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="flex h-12 w-12 items-center justify-center border border-navy-900/20 text-navy-900 transition-colors hover:bg-navy-900 hover:text-ivory">
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="flex h-12 w-12 items-center justify-center border border-navy-900/20 text-navy-900 transition-colors hover:bg-navy-900 hover:text-ivory">
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Achievements() {
  usePageTitle('Achievements')
  return (
    <>
      <PageHero
        eyebrow="Achievements"
        lines={['Proud moments,', <em key="b" className="italic">shared widely.</em>]}
        intro="Showcases, prizes and fellowships that celebrate effort and originality — and the persistence behind every finished piece of work."
        image={images.vault}
        imageAlt="A vaulted stone ceiling seen from below"
      />

      <section className="section-y bg-ivory">
        <div className="container-site">
          <SectionHeading index="01" eyebrow="By the Numbers" lines={['A year', <em key="b" className="italic">in numbers.</em>]} />
          <motion.dl
            className="mt-16 grid grid-cols-2 border-t border-navy-900/15 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.1)}
          >
            {honours.map((h, i) => (
              <motion.div key={h.label} variants={fadeUp} className={`flex flex-col pb-4 pt-10 ${i % 2 === 1 ? 'border-l border-navy-900/15 pl-5 sm:pl-8' : 'pr-5'} ${i === 2 ? 'lg:border-l lg:pl-8' : ''} ${i > 1 ? 'border-t border-navy-900/15 lg:border-t-0' : ''}`}>
                <dd className="order-1 font-display text-[clamp(3rem,6vw,5rem)] leading-none text-navy-900">
                  <Counter value={h.value} />
                  <span className="text-gold">{h.suffix}</span>
                </dd>
                <dt className="order-2 mt-4 max-w-[16rem] text-[0.92rem] leading-snug text-charcoal/70">{h.label}</dt>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </section>

      <AchievementsList index="02" limit={6} showLink={false} />

      <section className="section-y bg-ivory">
        <div className="container-site">
          <SectionHeading index="03" eyebrow="In Focus" lines={['The stories', <em key="b" className="italic">behind the work.</em>]} />
          <div className="mt-16 space-y-24 lg:space-y-32">
            {features.map((f, i) => (
              <article key={f.title} className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-10">
                <ImageReveal id={f.image} alt={f.alt} sizes="(min-width: 1024px) 58vw, 100vw" className={`aspect-[16/11] lg:col-span-7 ${i % 2 ? 'lg:order-2 lg:col-start-6' : ''}`} />
                <Reveal delay={0.15} className={`lg:col-span-4 ${i % 2 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-9'}`}>
                  <p className="eyebrow text-gold-700">{f.eyebrow}</p>
                  <h3 className="mt-5 font-display text-display-sm text-navy-900">{f.title}</h3>
                  <p className="mt-5 text-[1rem] leading-[1.85] text-charcoal/75">{f.text}</p>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <AdmissionsCTA />
    </>
  )
}
