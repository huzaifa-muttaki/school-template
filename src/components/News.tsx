import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './ui/Reveal'
import Img from './ui/Img'
import { TextLink } from './ui/Button'
import { formatDate, news, type NewsItem } from '../data/school'
import { fadeUp, stagger, viewport } from '../lib/motion'

export function Meta({ item, light = false }: { item: NewsItem; light?: boolean }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${light ? 'text-ivory/75' : 'text-stone-600'}`}>
      <span className={light ? 'text-gold-300' : 'text-gold-700'}>{item.category}</span>
      <span aria-hidden className="hidden h-px w-5 bg-current opacity-50 sm:block" />
      <time dateTime={item.date}>{formatDate(item.date)}</time>
    </p>
  )
}

function ReadMore({ small = false }: { small?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold uppercase tracking-[0.2em] text-navy-900 ${small ? 'text-[0.66rem]' : 'text-[0.7rem]'}`}>
      <span className="link-underline group-hover:bg-[length:100%_1px]">Read more</span>
      <ArrowUpRight
        aria-hidden
        className="h-4 w-4 transition-transform duration-500 ease-lux group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        strokeWidth={1.5}
      />
    </span>
  )
}

/** Featured story with large imagery. */
export function FeatureStory({ item }: { item: NewsItem }) {
  return (
    <Link to={`/news/${item.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-300 lg:aspect-[16/11]">
        <Img
          id={item.image}
          alt=""
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-lux group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-7">
        <Meta item={item} />
        <h3 className="mt-4 max-w-2xl font-display text-[2rem] leading-[1.1] text-navy-900 sm:text-[2.6rem]">{item.title}</h3>
        <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-charcoal/70">{item.excerpt}</p>
        <div className="mt-6">
          <ReadMore />
        </div>
      </div>
    </Link>
  )
}

/** Compact row story: thumbnail + text. */
export function RowStory({ item }: { item: NewsItem }) {
  return (
    <Link to={`/news/${item.slug}`} className="group grid grid-cols-[7rem_1fr] gap-5 py-7 sm:grid-cols-[10rem_1fr] sm:gap-7">
      <div className="aspect-[4/5] overflow-hidden bg-stone-300 sm:aspect-square">
        <Img
          id={item.image}
          alt=""
          sizes="160px"
          widths={[320, 480]}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-col">
        <Meta item={item} />
        <h3 className="mt-3 font-display text-[1.4rem] leading-[1.15] text-navy-900 sm:text-[1.65rem]">{item.title}</h3>
        <div className="mt-auto pt-4">
          <ReadMore small />
        </div>
      </div>
    </Link>
  )
}

const homeOrder = ['sustainable-design-studio', 'annual-ideas-forum', 'autumn-concert', 'open-morning-2027']

export default function News({ index = '07' }: { index?: string }) {
  const [feature, ...rest] = homeOrder.map((s) => news.find((n) => n.slug === s)!)
  return (
    <section className="section-y bg-ivory-200">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading index={index} eyebrow="News & Events" lines={['News from', <em key="b" className="italic">Nireka.</em>]} />
          <Reveal delay={0.2} className="shrink-0">
            <TextLink to="/news">All news & events</TextLink>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <FeatureStory item={feature} />
          </Reveal>
          <motion.div
            className="divide-y divide-navy-900/15 border-y border-navy-900/15 lg:col-span-5 lg:self-start"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.1)}
          >
            {rest.map((item) => (
              <motion.div key={item.slug} variants={fadeUp}>
                <RowStory item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
