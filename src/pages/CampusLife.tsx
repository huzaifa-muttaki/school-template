import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Campus from '../components/Campus'
import StudentLife from '../components/StudentLife'
import AdmissionsCTA from '../components/AdmissionsCTA'
import Reveal from '../components/ui/Reveal'
import ImageReveal from '../components/ui/ImageReveal'
import { clubs, dayInLife, images } from '../data/school'
import { fadeUp, stagger, viewport } from '../lib/motion'
import { usePageTitle } from '../lib/hooks'

export default function CampusLife() {
  usePageTitle('Campus Life')
  return (
    <>
      <PageHero
        eyebrow="Campus Life"
        lines={['Twenty-eight acres', <em key="b" className="italic">of everyday wonder.</em>]}
        intro="An old estate house, new studios, a working woodland and wide playing fields — all within a few minutes’ walk of each other."
        image={images.garden}
        imageAlt="A garden path winding through the grounds"
      />

      <Campus index="01" showLink={false} />

      <StudentLife index="02" />

      {/* A day on the Hill */}
      <section className="section-y relative overflow-hidden bg-midnight text-ivory">
        <div aria-hidden className="grain absolute inset-0" />
        <div className="container-site relative">
          <SectionHeading index="03" eyebrow="A Day at Nireka" light lines={['Morning bell', <em key="b" className="italic">to evening prep.</em>]} />
          <motion.ol
            className="mt-16 grid gap-0 sm:grid-cols-2 lg:grid-cols-5"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.1)}
          >
            {dayInLife.map((d, i) => (
              <motion.li
                key={d.time}
                variants={fadeUp}
                className={`border-t border-ivory/15 py-8 sm:pr-8 lg:py-10 ${i % 2 === 1 ? 'sm:border-l sm:pl-8' : i > 0 ? 'lg:border-l lg:pl-8' : ''}`}
              >
                <p className="font-display text-[3rem] leading-none text-gold-300 tabular-nums">{d.time}</p>
                <h3 className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.2em]">{d.title}</h3>
                <p className="mt-3 text-[0.94rem] leading-relaxed text-ivory/60">{d.text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Clubs */}
      <section className="section-y bg-ivory">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-6">
            <SectionHeading index="04" eyebrow="Clubs & Societies" size="md" lines={['Seventy clubs,', <em key="b" className="italic">all student-run.</em>]} />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-lg text-[1.02rem] leading-[1.8] text-charcoal/75">
                Students propose them, run them and recruit for them, with a member of staff on hand to help. Some last a
                term, some have run for twenty years — and anyone can start a new one with five willing members.
              </p>
            </Reveal>
            <motion.ul
              className="mt-10 flex flex-wrap gap-2"
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={stagger(0.03)}
            >
              {clubs.map((c) => (
                <motion.li
                  key={c}
                  variants={fadeUp}
                  className="border border-navy-900/15 px-4 py-2.5 text-[0.85rem] text-navy-900 transition-colors duration-300 hover:border-navy-900 hover:bg-navy-900 hover:text-ivory"
                >
                  {c}
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="relative lg:col-span-5 lg:col-start-8">
            <ImageReveal id={images.chess} alt="A chess game in progress at the weekly club" sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5]" />
            <ImageReveal
              id={images.sheetMusic}
              alt="Sheet music open on a stand"
              sizes="20vw"
              delay={0.2}
              className="absolute -bottom-10 -left-10 hidden aspect-square w-[42%] border-[10px] border-ivory lg:block"
            />
          </div>
        </div>
      </section>

      {/* Boarding */}
      <section className="bg-ivory-200">
        <div className="grid lg:grid-cols-2">
          <ImageReveal id={images.meadow} alt="Morning light across the meadow beside the boarding houses" sizes="(min-width: 1024px) 50vw, 100vw" className="min-h-[460px] lg:min-h-[720px]" />
          <div className="container-site flex flex-col justify-center py-24 lg:ml-0 lg:max-w-[720px] lg:py-28 lg:pl-16 xl:pl-24">
            <SectionHeading index="05" eyebrow="Boarding" size="md" lines={['A second home', <em key="b" className="italic">on the estate.</em>]} />
            <Reveal delay={0.15}>
              <p className="mt-8 text-[1.02rem] leading-[1.8] text-charcoal/75">
                Two boarding houses, each looked after by resident house staff, offer full and weekly boarding from age
                eleven. Evenings mean supervised prep, supper together and weekends spent walking, cooking or exploring.
              </p>
              <dl className="mt-10 grid grid-cols-3 border-t border-navy-900/15 pt-8">
                {[
                  ['2', 'Houses'],
                  ['160', 'Boarders'],
                  ['24/7', 'Pastoral care'],
                ].map(([v, l]) => (
                  <div key={l} className="flex flex-col">
                    <dd className="order-1 font-display text-4xl text-navy-900">{v}</dd>
                    <dt className="order-2 mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-700">{l}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <AdmissionsCTA />
    </>
  )
}
