import { useRef, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './ui/Reveal'
import Img from './ui/Img'
import { TextLink } from './ui/Button'
import { facilities } from '../data/school'
import { ease } from '../lib/motion'

type Props = { index?: string; showLink?: boolean }

export default function Campus({ index = '03', showLink = true }: Props) {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const current = facilities[active]

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const dir = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const next = (active + dir + facilities.length) % facilities.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <section className="section-y relative overflow-hidden bg-navy-900 text-ivory">
      <div aria-hidden className="grain absolute inset-0" />
      <div className="container-site relative grid lg:grid-cols-12 lg:gap-10">
        {/* On mobile this column dissolves so the image can sit between intro and tabs */}
        <div className="contents lg:col-span-5 lg:flex lg:flex-col">
          <SectionHeading index={index} eyebrow="The Campus" className="order-1" light lines={['A campus that', <em key="b" className="italic">teaches, too.</em>]} />
          <Reveal delay={0.15} className="order-2">
            <p className="mt-8 max-w-md text-[1.02rem] leading-[1.8] text-ivory/70">
              Twenty-eight acres of restored estate, woodland and new studios — each space shaped around the way
              people actually learn.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="order-4 mt-10 lg:mt-auto lg:pt-14">
            <div role="tablist" aria-label="Campus facilities" aria-orientation="vertical" onKeyDown={onKeyDown} className="border-t border-ivory/15">
              {facilities.map((f, i) => {
                const selected = i === active
                return (
                  <button
                    key={f.id}
                    ref={(el) => (tabs.current[i] = el)}
                    role="tab"
                    id={`facility-tab-${f.id}`}
                    aria-selected={selected}
                    aria-controls="facility-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className="group flex w-full items-center gap-6 border-b border-ivory/15 py-4 text-left sm:py-5"
                  >
                    <span className={`text-[0.68rem] font-semibold tracking-[0.2em] tabular-nums transition-colors ${selected ? 'text-gold-300' : 'text-ivory/40'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-display text-[1.6rem] leading-none transition-all duration-500 ease-lux sm:text-[1.85rem] ${
                        selected ? 'translate-x-2 text-ivory' : 'text-ivory/50 group-hover:text-ivory/80'
                      }`}
                    >
                      {f.label}
                    </span>
                    <span
                      aria-hidden
                      className={`ml-auto h-px bg-gold-300 transition-all duration-700 ease-lux ${selected ? 'w-12' : 'w-0'}`}
                    />
                  </button>
                )
              })}
            </div>
            {showLink && <TextLink to="/campus-life" light className="mt-10">See campus life</TextLink>}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-3 mt-12 lg:order-none lg:col-span-7 lg:mt-0">
          <div
            id="facility-panel"
            role="tabpanel"
            aria-labelledby={`facility-tab-${current.id}`}
            className="relative aspect-[4/5] overflow-hidden bg-navy-800 sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[640px]"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={current.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease }}
              >
                <Img id={current.image} alt={current.title} sizes="(min-width: 1024px) 58vw, 100vw" className="h-full w-full object-cover" />
              </motion.div>
            </AnimatePresence>
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, ease }}
                  className="max-w-lg"
                >
                  <h3 className="font-display text-3xl sm:text-4xl">{current.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory/75">{current.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
