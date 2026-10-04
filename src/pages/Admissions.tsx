import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ImageReveal from '../components/ui/ImageReveal'
import Button from '../components/ui/Button'
import { admissionSteps, faqs, fees, images, keyDates, school } from '../data/school'
import { ease, fadeUp, stagger, viewport } from '../lib/motion'
import { usePageTitle } from '../lib/hooks'

function Faq({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0)
  const id = `faq-${i}`
  return (
    <li className="border-b border-navy-900/15">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full items-center justify-between gap-6 py-7 text-left"
        >
          <span className="font-display text-[1.5rem] leading-snug text-navy-900 sm:text-[1.85rem]">{q}</span>
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center border border-navy-900/20 text-navy-900 transition-all duration-500 ease-lux group-hover:border-navy-900 ${open ? 'rotate-45 bg-navy-900 text-ivory' : ''}`}>
            <Plus className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-8 text-[1rem] leading-[1.8] text-charcoal/75">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function Admissions() {
  usePageTitle('Admissions')
  return (
    <>
      <PageHero
        eyebrow="Admissions 2027–28"
        lines={['Joining', <em key="b" className="italic">Nireka.</em>]}
        intro="We look for students who are curious, kind and ready to have a go. Our admissions team will walk your family through each stage, at your pace."
        image={images.estateDrive}
        imageAlt="The driveway leading up to the estate house"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#process" variant="light">See the Steps</Button>
          <Button to="/contact" variant="outline-light">Book a Visit</Button>
        </div>
      </PageHero>

      {/* Welcome */}
      <section className="section-y bg-ivory">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
          <SectionHeading index="01" eyebrow="Welcome" size="md" className="lg:col-span-6" lines={['No two families', <em key="b" className="italic">arrive the same way.</em>]} />
          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8 lg:pt-14">
            <p className="text-[1.04rem] leading-[1.85] text-charcoal/75">
              Some families plan years ahead; others are relocating next month. Either way, we start by listening — to
              what your child enjoys, what they find hard and what you hope school will give them.
            </p>
            <figure className="mt-10 border-l-2 border-gold pl-6">
              <blockquote className="font-display text-[1.45rem] italic leading-snug text-navy-900">
                “The question we ask is never ‘Is this child impressive?’ It is ‘Will this child be happy and stretched here?’”
              </blockquote>
              <figcaption className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-700">
                Rafael Ostrand · Director of Admissions
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-20 bg-ivory-200 py-24 sm:py-28 lg:py-36">
        <div className="container-site">
          <SectionHeading index="02" eyebrow="The Process" lines={['Five steps,', <em key="b" className="italic">no surprises.</em>]} />
          <motion.ol
            className="mt-16 grid gap-0 md:grid-cols-5"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.12)}
          >
            {admissionSteps.map((s, i) => (
              <motion.li key={s.title} variants={fadeUp} className="relative flex gap-6 border-l border-navy-900/15 pb-12 pl-8 md:block md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pr-6 md:pt-10">
                <span aria-hidden className="absolute -left-[5px] top-1 h-[9px] w-[9px] rotate-45 bg-gold md:-top-[5px] md:left-0" />
                <span className="font-display text-5xl italic leading-none text-gold/80">{i + 1}</span>
                <div>
                  <h3 className="font-display text-[1.9rem] leading-none text-navy-900 md:mt-6">{s.title}</h3>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-charcoal/70">{s.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Dates + visit */}
      <section className="relative overflow-hidden bg-navy-900 text-ivory">
        <div aria-hidden className="grain absolute inset-0" />
        <div className="relative grid lg:grid-cols-2">
          <div className="container-site py-24 sm:py-28 lg:ml-auto lg:mr-0 lg:max-w-[720px] lg:py-36 lg:pr-16">
            <SectionHeading index="03" eyebrow="Key Dates" light size="md" lines={['Dates for', <em key="b" className="italic">2027–28.</em>]} />
            <dl className="mt-12 border-t border-ivory/15">
              {keyDates.map((d) => (
                <Reveal key={d.label} y={12} className="flex items-baseline justify-between gap-6 border-b border-ivory/15 py-6">
                  <dt className="text-[1rem] text-ivory/80">{d.label}</dt>
                  <dd className="shrink-0 font-display text-2xl italic text-gold-300">{d.date}</dd>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={0.2} className="mt-12">
              <Button to="/contact" variant="gold">Reserve an Open Morning Place</Button>
            </Reveal>
          </div>
          <ImageReveal id={images.libraryModern} alt="Study tables in the modern library wing" sizes="(min-width: 1024px) 50vw, 100vw" className="min-h-[420px] lg:min-h-full" />
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="section-y scroll-mt-20 bg-ivory">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading index="04" eyebrow="Fees & Scholarships" size="md" lines={['Clear fees,', <em key="b" className="italic">real support.</em>]} />
            <Reveal delay={0.15}>
              <p className="mt-8 text-[1rem] leading-[1.8] text-charcoal/75">
                Annual tuition for 2027–28 covers lunches, learning materials, local trips and most after-school
                activities. Means-tested bursaries are available at every stage — please ask us in confidence.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="min-w-0 lg:col-span-7 lg:col-start-6">
            {/* Phones: stacked fee list */}
            <dl className="border-t border-navy-900 sm:hidden">
              {fees.map((f) => (
                <div key={f.stage} className="border-b border-navy-900/15 py-6">
                  <dt className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-[1.5rem] text-navy-900">{f.stage}</span>
                    <span className="text-sm text-charcoal/60">Ages {f.ages}</span>
                  </dt>
                  <dd className="mt-3 flex gap-8 text-[0.95rem] tabular-nums text-navy-900">
                    <span><span className="mr-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-700">Day</span>{f.day}</span>
                    <span><span className="mr-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-700">Boarding</span>{f.boarding}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="hidden overflow-x-auto sm:block">
              <table className="w-full min-w-[520px] text-left">
                <caption className="sr-only">Annual tuition fees by stage, 2027–28</caption>
                <thead>
                  <tr className="border-b border-navy-900 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-navy-900">
                    <th scope="col" className="py-4 pr-4 font-semibold">Stage</th>
                    <th scope="col" className="py-4 pr-4 font-semibold">Ages</th>
                    <th scope="col" className="py-4 pr-4 text-right font-semibold">Day</th>
                    <th scope="col" className="py-4 text-right font-semibold">Boarding</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f) => (
                    <tr key={f.stage} className="border-b border-navy-900/15">
                      <th scope="row" className="py-6 pr-4 font-display text-[1.5rem] font-normal text-navy-900">{f.stage}</th>
                      <td className="py-6 pr-4 text-[0.95rem] text-charcoal/70">{f.ages}</td>
                      <td className="py-6 pr-4 text-right text-[1rem] tabular-nums text-navy-900">{f.day}</td>
                      <td className="py-6 text-right text-[1rem] tabular-nums text-navy-900">{f.boarding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {['Academic', 'Arts & Music', 'Sport'].map((s) => (
                <div key={s} className="border-t border-gold pt-5">
                  <p className="font-display text-xl text-navy-900">{s} Awards</p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">Partial fee awards from age eleven, reviewed each year.</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-ivory-200">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading index="05" eyebrow="Questions" size="md" lines={['Questions', <em key="b" className="italic">families ask.</em>]} />
            <Reveal delay={0.15}>
              <p className="mt-8 text-[1rem] leading-[1.8] text-charcoal/75">
                Something we haven’t covered? Write to us and a member of the admissions team will reply personally.
              </p>
              <a href={`mailto:${school.admissionsEmail}`} className="link-underline mt-4 inline-block text-navy-900">
                {school.admissionsEmail}
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-navy-900/15">
              {faqs.map((f, i) => (
                <Faq key={f.q} {...f} i={i} />
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-site text-center">
          <Reveal>
            <p className="eyebrow text-gold-700">When you’re ready</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-display-lg text-navy-900">
              Let’s find a time <em className="italic">to talk.</em>
            </h2>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/contact" variant="dark">Start an Application</Button>
              <Button to="/contact" variant="outline-dark">Arrange a Visit</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
