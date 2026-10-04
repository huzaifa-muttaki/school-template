import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import PrincipalMessage from '../components/PrincipalMessage'
import AdmissionsCTA from '../components/AdmissionsCTA'
import Reveal from '../components/ui/Reveal'
import ImageReveal from '../components/ui/ImageReveal'
import { images, leadership, timeline, values } from '../data/school'
import { fadeUp, stagger, viewport } from '../lib/motion'
import { usePageTitle } from '../lib/hooks'

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, '')
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export default function About() {
  usePageTitle('About')
  return (
    <>
      <PageHero
        eyebrow="About Nireka"
        lines={['A young school', <em key="b" className="italic">in an old house.</em>]}
        intro="Nireka opened in 2001 inside a restored hillside estate. A quarter of a century later it is a lively international school that still feels like a place where everyone knows your name."
        image={images.estate}
        imageAlt="The restored estate house at the heart of the campus"
      />

      {/* Story */}
      <section className="section-y bg-ivory">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
          <SectionHeading index="01" eyebrow="Our Story" size="md" className="lg:col-span-5" lines={['Built on a simple', <em key="b" className="italic">idea.</em>]} />
          <Reveal delay={0.15} className="space-y-6 text-[1.04rem] leading-[1.85] text-charcoal/75 lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p className="font-display text-[1.65rem] leading-snug text-navy-900">
              Our founding teachers wanted a school where questions mattered more than right answers — and where kindness
              was taught as carefully as calculus.
            </p>
            <p>
              They began with 160 students, a handful of rooms in the estate house and a library assembled from donations.
              Today more than 1,800 students from thirty-six countries share the same grounds, in buildings old and new.
            </p>
            <p>
              We remain independent, ambitious and personal. Each student has a tutor who follows their progress closely,
              a programme that asks a great deal of them and a community that notices when they grow.
            </p>
          </Reveal>
        </div>
        <div className="container-site mt-20 grid gap-4 sm:grid-cols-12 lg:mt-28">
          <ImageReveal id={images.libraryModern} alt="Study tables in the modern library wing" sizes="(min-width: 640px) 66vw, 100vw" className="aspect-[16/10] sm:col-span-8" />
          <ImageReveal id={images.staircase} alt="Worn stone steps leading up to the estate house" sizes="(min-width: 640px) 33vw, 100vw" delay={0.15} className="aspect-[4/5] sm:col-span-4 sm:mt-24" />
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section-y bg-ivory-200">
        <div className="container-site grid gap-16 md:grid-cols-2 md:gap-10">
          {[
            { label: 'Our Mission', text: 'To help every student think independently, act with care and find work worth doing.' },
            { label: 'Our Vision', text: 'Communities everywhere made stronger by people who learned, here, to listen first and then act.' },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 0.15} className={i === 1 ? 'md:border-l md:border-navy-900/15 md:pl-10 lg:pl-16' : 'lg:pr-10'}>
              <p className="eyebrow text-gold-700">{m.label}</p>
              <p className="mt-6 font-display text-display-sm text-navy-900">{m.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="container-site mt-24 lg:mt-32">
          <Reveal>
            <p className="eyebrow text-gold-700">
              <span>02</span>
              <span aria-hidden className="h-px w-8 bg-gold-700/50" />
              <span>Our Values</span>
            </p>
          </Reveal>
          <motion.ul
            className="mt-10 grid border-t border-navy-900/15 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.1)}
          >
            {values.map((v, i) => (
              <motion.li key={v.title} variants={fadeUp} className={`border-b border-navy-900/15 py-10 sm:pr-8 lg:border-b-0 ${i > 0 ? 'lg:border-l lg:pl-8' : ''} ${i % 2 === 1 ? 'sm:border-l sm:pl-8 lg:pl-8' : ''}`}>
                <span className="font-display text-xl italic text-gold-700">0{i + 1}</span>
                <h3 className="mt-6 font-display text-[2.4rem] leading-none text-navy-900">{v.title}</h3>
                <p className="mt-4 text-[0.96rem] leading-relaxed text-charcoal/70">{v.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-y relative overflow-hidden bg-navy-900 text-ivory">
        <div aria-hidden className="grain absolute inset-0" />
        <div className="container-site relative">
          <SectionHeading index="03" eyebrow="Heritage" light lines={['Twenty-five years,', <em key="b" className="italic">six chapters.</em>]} />
        </div>
        <div className="no-scrollbar relative mt-16 overflow-x-auto">
          <motion.ol
            className="container-site flex min-w-max gap-0 lg:grid lg:min-w-0 lg:grid-cols-6"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.1)}
          >
            {timeline.map((t) => (
              <motion.li key={t.year} variants={fadeUp} className="relative w-[72vw] max-w-[18rem] border-t border-ivory/20 pr-8 pt-10 sm:w-[40vw] lg:w-auto">
                <span aria-hidden className="absolute -top-[5px] left-0 h-[9px] w-[9px] rotate-45 bg-gold" />
                <p className="font-display text-5xl text-gold-300">{t.year}</p>
                <h3 className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.2em]">{t.title}</h3>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-ivory/60">{t.text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <PrincipalMessage index="04" full />

      {/* Leadership */}
      <section className="section-y bg-ivory-200">
        <div className="container-site">
          <SectionHeading index="05" eyebrow="Leadership" lines={['The people', <em key="b" className="italic">who lead us.</em>]} />
          <motion.ul
            className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger(0.12)}
          >
            {leadership.map((p, i) => (
              <motion.li key={p.name} variants={fadeUp} className={`group ${i % 2 === 1 ? 'lg:mt-20' : ''}`}>
                {/* Typographic monogram in place of a photograph — no real person represents a fictional role */}
                <div aria-hidden className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-navy-900 transition-colors duration-700 group-hover:bg-navy-800">
                  <span className="absolute inset-4 border border-gold/25 transition-colors duration-700 group-hover:border-gold/50" />
                  <span className="font-display text-[clamp(3rem,7vw,5.5rem)] italic leading-none text-gold-300">
                    {initials(p.name)}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight text-navy-900 sm:text-[1.7rem]">{p.name}</h3>
                <p className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-700">{p.role}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <AdmissionsCTA />
    </>
  )
}
