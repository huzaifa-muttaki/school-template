import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Img from '../components/ui/Img'
import Reveal from '../components/ui/Reveal'
import { Meta, RowStory } from '../components/News'
import NotFound from './NotFound'
import { news } from '../data/school'
import { ease } from '../lib/motion'
import { usePageTitle } from '../lib/hooks'

export default function NewsArticle() {
  const { slug } = useParams()
  const item = news.find((n) => n.slug === slug)
  usePageTitle(item?.title ?? 'Story not found')
  if (!item) return <NotFound />

  const more = news.filter((n) => n.slug !== item.slug).slice(0, 3)
  const [lead, ...body] = item.body

  return (
    <>
      <header className="relative isolate flex min-h-[78svh] overflow-hidden bg-midnight text-ivory">
        <motion.div className="absolute inset-0 -z-10" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease }}>
          <Img id={item.image} alt="" priority sizes="100vw" widths={[828, 1280, 1920, 2560]} className="h-full w-full object-cover" />
        </motion.div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/30" />
        <div className="container-site flex flex-col justify-end pb-16 pt-36 sm:pb-20">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease }}>
            <Link to="/news" className="group mb-10 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ivory/70 hover:text-ivory">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.5} aria-hidden /> All news
            </Link>
            <Meta item={item} light />
            <h1 className="mt-6 max-w-4xl font-display text-display-lg font-normal">{item.title}</h1>
          </motion.div>
        </div>
      </header>

      <article className="bg-ivory py-20 sm:py-28">
        <div className="container-site">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <p className="font-display text-[1.65rem] leading-[1.45] text-navy-900 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[5.2rem] first-letter:leading-[0.8] first-letter:text-gold-600 sm:text-[1.85rem]">
                {lead}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-6 text-[1.06rem] leading-[1.9] text-charcoal/80">
                {body.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <section className="bg-ivory-200 py-20 sm:py-28">
        <div className="container-site">
          <p className="eyebrow text-gold-700">More from Nireka</p>
          <div className="mt-8 grid border-t border-navy-900/15 lg:grid-cols-3 lg:gap-10">
            {more.map((n) => (
              <div key={n.slug} className="min-w-0 border-b border-navy-900/15 lg:border-b-0">
                <RowStory item={n} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
