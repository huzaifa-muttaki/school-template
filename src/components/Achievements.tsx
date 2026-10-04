import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './ui/Reveal'
import { TextLink } from './ui/Button'
import { achievements } from '../data/school'
import { fadeUp, stagger, viewport } from '../lib/motion'

type Props = { index?: string; limit?: number; showLink?: boolean }

export default function Achievements({ index = '05', limit = 5, showLink = true }: Props) {
  const items = achievements.slice(0, limit)
  return (
    <section className="section-y relative overflow-hidden bg-midnight text-ivory">
      <div aria-hidden className="grain absolute inset-0" />
      <div className="container-site relative grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              index={index}
              eyebrow="Distinction"
              light
              size="md"
              lines={['Work worth', <em key="c" className="italic">celebrating.</em>]}
            />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-sm text-[1.02rem] leading-[1.8] text-ivory/65">
                The milestones we mark each year — showcases, prizes and fellowships that recognise effort, originality and generosity.
              </p>
            </Reveal>
            {showLink && (
              <Reveal delay={0.25} className="mt-10">
                <TextLink to="/achievements" light>See every highlight</TextLink>
              </Reveal>
            )}
          </div>
        </div>

        <motion.ol
          className="border-t border-ivory/15 lg:col-span-8"
          initial="hidden"
          whileInView="show"
          viewport={{ ...viewport, amount: 0.1 }}
          variants={stagger(0.08)}
        >
          {items.map((a) => (
            <motion.li
              key={a.title}
              variants={fadeUp}
              className="group grid grid-cols-[3.5rem_1fr] gap-x-4 border-b border-ivory/15 py-8 transition-colors duration-500 hover:bg-ivory/[0.03] sm:grid-cols-[5rem_1fr_auto] sm:gap-x-8 sm:py-10 lg:px-4"
            >
              <span className="pt-2 text-[0.75rem] font-semibold tracking-[0.18em] text-gold-300 tabular-nums">{a.year}</span>
              <div>
                <h3 className="font-display text-[1.7rem] leading-tight transition-transform duration-700 ease-lux group-hover:translate-x-2 sm:text-[2.3rem]">
                  {a.title}
                </h3>
                <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ivory/60">{a.body}</p>
              </div>
              <span className="col-start-2 mt-4 self-start text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ivory/50 sm:col-start-3 sm:mt-3">
                {a.category}
              </span>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
