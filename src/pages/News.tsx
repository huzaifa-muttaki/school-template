import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { FeatureStory, Meta } from '../components/News'
import Img from '../components/ui/Img'
import Reveal from '../components/ui/Reveal'
import { events, formatDate, images, news, type NewsItem } from '../data/school'
import { ease, fadeUp, stagger, viewport } from '../lib/motion'
import { usePageTitle } from '../lib/hooks'

const filters = ['All', ...Array.from(new Set(news.map((n) => n.category)))] as const

function StoryCard({ item }: { item: NewsItem }) {
  return (
    <Link to={`/news/${item.slug}`} className="group block">
      <div className="aspect-[4/3] overflow-hidden bg-stone-300">
        <Img id={item.image} alt="" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-lux group-hover:scale-[1.04]" />
      </div>
      <div className="mt-6">
        <Meta item={item} />
        <h3 className="mt-3 font-display text-[1.65rem] leading-[1.15] text-navy-900">{item.title}</h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/70">{item.excerpt}</p>
        <span className="mt-5 inline-block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-navy-900">
          <span className="link-underline group-hover:bg-[length:100%_1px]">Read more</span>
        </span>
      </div>
    </Link>
  )
}

export default function NewsPage() {
  usePageTitle('News & Events')
  const [filter, setFilter] = useState<string>('All')
  const sorted = useMemo(() => [...news].sort((a, b) => b.date.localeCompare(a.date)), [])
  const items = filter === 'All' ? sorted : sorted.filter((n) => n.category === filter)
  const [feature, ...rest] = items

  return (
    <>
      <PageHero
        compact
        eyebrow="News & Events"
        lines={['Notes from', <em key="b" className="italic">the estate.</em>]}
        image={images.lectureTheatre}
        imageAlt="Tiered seating in the lecture theatre"
      />

      <section className="bg-ivory pb-24 pt-16 sm:pb-32 sm:pt-20">
        <div className="container-site">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter stories by category">
            {filters.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                className={`shrink-0 border px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  filter === c ? 'border-navy-900 bg-navy-900 text-ivory' : 'border-navy-900/20 text-navy-900 hover:border-navy-900'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mt-12"
            >
              {feature && (
                <div className="border-b border-navy-900/15 pb-16">
                  <FeatureStory item={feature} />
                </div>
              )}
              {rest.length > 0 && (
                <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((n) => (
                    <StoryCard key={n.slug} item={n} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="section-y relative overflow-hidden bg-navy-900 text-ivory">
        <div aria-hidden className="grain absolute inset-0" />
        <div className="container-site relative grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Upcoming Events" light size="md" lines={['Coming up', <em key="b" className="italic">this term.</em>]} />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-sm text-[1rem] leading-[1.8] text-ivory/65">
                Families are warmly invited to most events. Entry is usually free, though a few evenings ask you to reserve a seat.
              </p>
            </Reveal>
          </div>
          <motion.ul className="border-t border-ivory/15 lg:col-span-8" initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.1)}>
            {events.map((e) => (
              <motion.li key={e.title} variants={fadeUp} className="grid grid-cols-[4.5rem_1fr] items-center gap-6 border-b border-ivory/15 py-7 sm:grid-cols-[6rem_1fr_auto] sm:gap-10">
                <time dateTime={e.date} className="flex flex-col">
                  <span className="font-display text-5xl leading-none text-gold-300">{formatDate(e.date, { day: '2-digit' })}</span>
                  <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ivory/60">{formatDate(e.date, { month: 'short', year: 'numeric' })}</span>
                </time>
                <div>
                  <h3 className="font-display text-[1.6rem] leading-tight sm:text-[2rem]">{e.title}</h3>
                  <p className="mt-1.5 text-sm text-ivory/60 sm:hidden">{e.time} · {e.place}</p>
                </div>
                <p className="hidden text-right text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ivory/60 sm:block">
                  {e.time}
                  <span className="mt-1 block font-normal normal-case tracking-normal text-ivory/50">{e.place}</span>
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  )
}
