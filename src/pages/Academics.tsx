import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import AdmissionsCTA from '../components/AdmissionsCTA'
import Reveal from '../components/ui/Reveal'
import ImageReveal from '../components/ui/ImageReveal'
import Img from '../components/ui/Img'
import { disciplines, images, outcomes, stages } from '../data/school'
import { fadeUp, stagger, transition, viewport } from '../lib/motion'
import { usePageTitle } from '../lib/hooks'

const pillars = [
  { title: 'Inquiry', text: 'Lessons start from real questions, and students learn how to frame better ones.' },
  { title: 'Rigour', text: 'Ambitious goals, broken into steps every learner can climb.' },
  { title: 'Care', text: 'Small groups and attentive tutors, so nobody slips quietly out of view.' },
]

const disciplineImages = [images.glassware, images.books, images.stage, images.sheetMusic, images.libraryModern, images.workshop]

export default function Academics() {
  usePageTitle('Academics')
  return (
    <>
      <PageHero
        eyebrow="Academics"
        lines={['Learning that', <em key="b" className="italic">keeps unfolding.</em>]}
        intro="From first stories in the Early Years to a Senior Thesis at eighteen, every stage at Nireka builds on the one before it."
        image={images.library}
        imageAlt="Carved shelving and a stone fireplace in the Reading Hall"
      />

      {/* Philosophy */}
      <section className="section-y bg-ivory">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
          <SectionHeading index="01" eyebrow="Our Approach" size="md" className="lg:col-span-6" lines={['Questions first.', <em key="b" className="italic">Answers that last.</em>]} />
          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8 lg:pt-14">
            <p className="text-[1.04rem] leading-[1.85] text-charcoal/75">
              Our own curriculum blends careful subject knowledge with project work, discussion and making. Students
              revisit big ideas as they grow, connect subjects to one another and practise explaining what they think —
              and why.
            </p>
          </Reveal>
        </div>
        <motion.ul
          className="container-site mt-16 grid border-t border-navy-900/15 sm:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.1)}
        >
          {pillars.map((p, i) => (
            <motion.li key={p.title} variants={fadeUp} className={`border-b border-navy-900/15 py-10 sm:border-b-0 sm:pr-8 ${i > 0 ? 'sm:border-l sm:pl-8' : ''}`}>
              <h3 className="font-display text-[2rem] text-navy-900">{p.title}</h3>
              <p className="mt-3 text-[0.96rem] leading-relaxed text-charcoal/70">{p.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Stages */}
      <section className="bg-ivory-200 py-24 sm:py-28 lg:py-36">
        <div className="container-site">
          <SectionHeading index="02" eyebrow="Stages of Learning" lines={['Four stages,', <em key="b" className="italic">one thread.</em>]} />
        </div>
        <div className="container-site mt-16 space-y-24 lg:mt-24 lg:space-y-36">
          {stages.map((s, i) => {
            const flip = i % 2 === 1
            return (
              <article key={s.id} id={s.id} className="grid scroll-mt-28 gap-10 lg:grid-cols-12 lg:items-center lg:gap-10">
                <ImageReveal
                  id={s.image}
                  alt={`${s.title} at Nireka`}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] lg:col-span-6 ${flip ? 'lg:order-2 lg:col-start-7' : ''}`}
                />
                <Reveal delay={0.15} className={`lg:col-span-5 ${flip ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-8'}`}>
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-[4.5rem] italic leading-none text-gold/70">0{i + 1}</span>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold-700">{s.ages}</span>
                  </div>
                  <h3 className="mt-6 font-display text-display-md text-navy-900">{s.title}</h3>
                  <p className="mt-6 font-display text-[1.45rem] leading-snug text-navy-900/85">{s.summary}</p>
                  <p className="mt-5 text-[1rem] leading-[1.85] text-charcoal/75">{s.detail}</p>
                  <ul className="mt-8 border-t border-navy-900/15">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-4 border-b border-navy-900/15 py-4 text-[0.95rem] text-navy-900">
                        <span aria-hidden className="h-px w-5 bg-gold" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </article>
            )
          })}
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative overflow-hidden bg-navy-900 py-20 text-ivory sm:py-24">
        <div aria-hidden className="grain absolute inset-0" />
        <motion.dl
          className="container-site relative grid grid-cols-2 gap-y-12 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.1)}
        >
          {outcomes.map((o, i) => (
            <motion.div key={o.label} variants={fadeUp} className={`flex flex-col ${i % 2 === 1 ? 'border-l border-ivory/15 pl-6 sm:pl-10' : 'pr-6'} ${i === 2 ? 'lg:border-l lg:pl-10' : ''}`}>
              <dd className="order-1 font-display text-[clamp(3rem,6vw,5rem)] leading-none text-ivory">{o.value}</dd>
              <dt className="order-2 mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-300">{o.label}</dt>
            </motion.div>
          ))}
        </motion.dl>
      </section>

      {/* Disciplines */}
      <section className="section-y bg-ivory">
        <div className="container-site">
          <SectionHeading index="03" eyebrow="Areas of Study" lines={['Six fields,', <em key="b" className="italic">many crossings.</em>]} />
          <ul className="mt-16 border-t border-navy-900/15">
            {disciplines.map((d, i) => (
              <motion.li
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={transition()}
                className="group grid grid-cols-[2.5rem_1fr] items-center gap-x-4 border-b border-navy-900/15 py-8 sm:grid-cols-[3.5rem_1fr_1.2fr] sm:gap-x-8 md:grid-cols-[3.5rem_1fr_1.2fr_9rem]">
                  <span className="text-[0.7rem] font-semibold tracking-[0.2em] text-gold-700 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-[2.2rem] leading-none text-navy-900 transition-transform duration-700 ease-lux group-hover:translate-x-2 sm:text-[3rem]">{d.title}</h3>
                  <p className="col-start-2 mt-3 text-[0.96rem] leading-relaxed text-charcoal/70 sm:col-start-3 sm:mt-0">{d.text}</p>
                  <div className="hidden aspect-[4/3] overflow-hidden bg-stone-300 md:block">
                    <Img id={disciplineImages[i]} alt="" sizes="144px" widths={[320, 480]} className="h-full w-full object-cover grayscale transition-all duration-700 ease-lux group-hover:scale-110 group-hover:grayscale-0" />
                  </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <AdmissionsCTA />
    </>
  )
}
