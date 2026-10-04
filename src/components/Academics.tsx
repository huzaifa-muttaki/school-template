import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './ui/Reveal'
import Img from './ui/Img'
import { TextLink } from './ui/Button'
import { disciplines, stages } from '../data/school'
import { ease, fadeUp, stagger, viewport } from '../lib/motion'

export default function Academics() {
  const [active, setActive] = useState(1)

  return (
    <section className="section-y bg-ivory-200">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            index="02"
            eyebrow="Academics"
            className="lg:col-span-7"
            lines={['Deep thinking.', <em key="b" className="italic">Wide horizons.</em>]}
          />
          <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.02rem] leading-[1.8] text-charcoal/75">
              One connected path from a three-year-old’s first “why?” to an eighteen-year-old’s independent thesis —
              ambitious, personal and open to the world.
            </p>
            <TextLink to="/academics" className="mt-8">How we teach</TextLink>
          </Reveal>
        </div>

        {/* Desktop: expanding panels */}
        <Reveal className="mt-16 hidden h-[620px] gap-3 lg:flex xl:h-[680px]">
          {stages.map((stage, i) => {
            const isActive = active === i
            return (
              <motion.article
                key={stage.id}
                className="group relative overflow-hidden bg-navy-900 text-ivory"
                animate={{ flexGrow: isActive ? 3.2 : 1 }}
                transition={{ duration: 0.9, ease }}
                style={{ flexBasis: 0 }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <Img
                  id={stage.image}
                  alt=""
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-lux ${
                    isActive ? 'scale-100' : 'scale-110'
                  }`}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,18,33,0.6),rgba(8,18,33,0.1)_28%,rgba(8,18,33,0.35)_55%,rgba(8,18,33,0.95))]"
                />
                <div aria-hidden className={`absolute inset-0 bg-midnight/40 transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-100'}`} />

                <div className="relative flex h-full flex-col justify-between p-8 xl:p-10">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-2xl italic text-gold-300">0{i + 1}</span>
                    <span
                      className={`whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ivory/70 transition-opacity duration-500 ${
                        isActive ? 'opacity-100 delay-300' : 'opacity-0'
                      }`}
                    >
                      {stage.ages}
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className={`absolute bottom-8 left-8 rotate-180 whitespace-nowrap font-display text-[2rem] leading-none transition-opacity duration-500 [writing-mode:vertical-rl] xl:bottom-10 xl:left-10 ${
                      isActive ? 'opacity-0' : 'opacity-100 delay-300'
                    }`}
                  >
                    {stage.title}
                  </span>
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
                    transition={{ duration: 0.6, ease, delay: isActive ? 0.3 : 0 }}
                    className="w-[min(28rem,40vw)]"
                  >
                    <h3 className="whitespace-nowrap font-display text-[2.6rem] leading-none xl:text-5xl">{stage.title}</h3>
                    <div className="max-w-md">
                      <p className="mt-5 text-[0.98rem] leading-relaxed text-ivory/80">{stage.summary}</p>
                      <Link
                        to={`/academics#${stage.id}`}
                        tabIndex={isActive ? 0 : -1}
                        className="mt-7 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ivory"
                      >
                        <span className="link-underline">Discover {stage.title}</span>
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                      </Link>
                    </div>
                  </motion.div>
                </div>
                {/* Collapsed panels remain reachable by keyboard */}
                {!isActive && (
                  <button
                    type="button"
                    className="absolute inset-0 z-10 cursor-pointer"
                    aria-label={`Show ${stage.title}`}
                    onClick={() => setActive(i)}
                  />
                )}
              </motion.article>
            )
          })}
        </Reveal>

        {/* Mobile & tablet: stacked editorial rows */}
        <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-x-6 lg:hidden">
          {stages.map((stage, i) => (
            <Reveal key={stage.id} delay={(i % 2) * 0.1}>
              <Link to={`/academics#${stage.id}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-300">
                  <Img id={stage.image} alt="" sizes="(min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105" />
                  <span className="absolute left-5 top-5 font-display text-2xl italic text-ivory drop-shadow">0{i + 1}</span>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-3xl text-navy-900">{stage.title}</h3>
                  <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-700">{stage.ages}</span>
                </div>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-charcoal/70">{stage.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Disciplines index */}
        <div className="mt-24 grid gap-10 lg:mt-32 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow text-gold-700">Areas of Study</p>
            <p className="mt-5 max-w-xs font-display text-2xl leading-snug text-navy-900">
              Six fields of study, taught as one conversation.
            </p>
          </Reveal>
          <motion.ul
            className="grid border-t border-navy-900/15 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.07)}
          >
            {disciplines.map((d, i) => (
              <motion.li key={d.title} variants={fadeUp} className="group border-b border-navy-900/15 py-8 sm:pr-8">
                <div className="flex items-baseline gap-4">
                  <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-gold-700 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-[1.9rem] leading-none text-navy-900 transition-transform duration-500 ease-lux group-hover:translate-x-1">
                    {d.title}
                  </h3>
                </div>
                <p className="mt-4 pl-9 text-[0.94rem] leading-relaxed text-charcoal/70">{d.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
