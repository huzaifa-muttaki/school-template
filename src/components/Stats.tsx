import { motion } from 'framer-motion'
import Counter from './ui/Counter'
import { stats } from '../data/school'
import { fadeUp, stagger, viewport } from '../lib/motion'

export default function Stats() {
  return (
    <section aria-label="Nireka in numbers" className="bg-ivory pb-24 pt-8 sm:pb-32 lg:pt-20">
      <motion.dl
        className="container-site grid grid-cols-2 border-t border-navy-900/15 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.1)}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className={`flex flex-col border-navy-900/15 pb-2 pt-10 sm:pt-14 ${
              i % 2 === 1 ? 'border-l pl-5 sm:pl-8' : 'pr-5'
            } ${i === 2 ? 'lg:border-l lg:pl-8' : ''} ${i > 1 ? 'mt-0 border-t lg:border-t-0' : ''} lg:px-8 ${i === 0 ? 'lg:pl-0' : ''}`}
          >
            <dt className="order-2 mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-navy-900">{s.label}</dt>
            <dd className="order-1 font-display text-[clamp(3.25rem,7vw,6rem)] font-normal leading-none text-navy-900">
              <Counter value={s.value} />
              <span className="text-gold">{s.suffix}</span>
            </dd>
            <dd className="order-3 mt-2 text-sm text-stone-600">{s.note}</dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  )
}
