import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './ui/Reveal'
import Img from './ui/Img'
import Lightbox from './Lightbox'
import { TextLink } from './ui/Button'
import { gallery, type GalleryItem } from '../data/school'
import { ease } from '../lib/motion'

const spans: Record<GalleryItem['size'], string> = {
  feature: 'col-span-2 row-span-2',
  tall: 'row-span-2',
  wide: 'col-span-2',
  standard: '',
}

const categories = ['All', 'Campus', 'Learning', 'Arts', 'Sport', 'Outdoors'] as const

type Props = {
  /** Preview mode for the homepage: fewer images, no filters, heading + link. */
  preview?: boolean
  index?: string
}

export function GalleryGrid({ items, onOpen }: { items: GalleryItem[]; onOpen: (i: number) => void }) {
  return (
    <motion.ul layout className="grid grid-flow-dense auto-rows-[44vw] grid-cols-2 gap-2 sm:auto-rows-[30vw] sm:gap-3 md:auto-rows-[19vw] md:grid-cols-4 xl:auto-rows-[260px]">
      <AnimatePresence mode="popLayout" initial={false}>
        {items.map((item, i) => (
          <motion.li
            key={item.image}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6, ease }}
            className={`relative ${spans[item.size]}`}
          >
            <button
              type="button"
              onClick={() => onOpen(i)}
              className="group relative block h-full w-full overflow-hidden bg-stone-300"
              aria-label={`View image: ${item.alt}`}
            >
              <Img
                id={item.image}
                alt={item.alt}
                sizes={item.size === 'feature' || item.size === 'wide' ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-lux group-hover:scale-[1.06]"
              />
              <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between gap-4 p-4 text-left text-ivory opacity-0 transition-all duration-500 ease-lux group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:p-5"
              >
                <span>
                  <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold-300">{item.category}</span>
                  <span className="mt-1.5 hidden font-display text-lg leading-tight sm:block">{item.alt}</span>
                </span>
                <Expand className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              </span>
            </button>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  )
}

export default function Gallery({ preview = false, index = '08' }: Props) {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All')
  const [open, setOpen] = useState<number | null>(null)

  const items = useMemo(() => {
    // Chosen so the preview tiles into two clean bands on a four-column grid
    if (preview) return [0, 1, 2, 3, 4, 6, 7].map((i) => gallery[i])
    return filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)
  }, [preview, filter])

  return (
    <section className={`${preview ? 'section-y' : 'pb-24 pt-16 sm:pb-32 sm:pt-20'} bg-ivory`}>
      <div className="container-site">
        {preview ? (
          <div className="mb-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <SectionHeading index={index} eyebrow="Gallery" lines={['Seen around', <em key="b" className="italic">the estate.</em>]} />
            <Reveal delay={0.2} className="shrink-0">
              <TextLink to="/gallery">Open the gallery</TextLink>
            </Reveal>
          </div>
        ) : (
          <div className="no-scrollbar -mx-5 mb-10 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter gallery">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={`shrink-0 border px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  filter === c ? 'border-navy-900 bg-navy-900 text-ivory' : 'border-navy-900/20 text-navy-900 hover:border-navy-900'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <Reveal y={40}>
          <GalleryGrid items={items} onOpen={setOpen} />
        </Reveal>
      </div>

      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </section>
  )
}
