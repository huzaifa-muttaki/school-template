import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { img } from '../lib/image'
import { ease } from '../lib/motion'
import type { GalleryItem } from '../data/school'

type Props = {
  items: GalleryItem[]
  index: number | null
  onClose: () => void
  onChange: (index: number) => void
}

export default function Lightbox({ items, index, onClose, onChange }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const open = index !== null
  const item = open ? items[index] : null

  const go = (dir: number) => index !== null && onChange((index + dir + items.length) % items.length)

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index])

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex flex-col bg-midnight text-ivory"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
        >
          <div className="container-site flex h-20 shrink-0 items-center justify-between" onClick={(e) => e.stopPropagation()}>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-ivory/60 tabular-nums">
              {String(index + 1).padStart(2, '0')} <span className="text-ivory/30">/ {String(items.length).padStart(2, '0')}</span>
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="-mr-2 flex h-11 w-11 items-center justify-center text-ivory/80 transition-colors hover:text-ivory"
              aria-label="Close image viewer"
            >
              <X strokeWidth={1.25} className="h-6 w-6" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={item.image}
                src={img(item.image, 1920)}
                alt={item.alt}
                className="max-h-full max-w-full cursor-grab object-contain active:cursor-grabbing"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1)
                  else if (info.offset.x > 80) go(-1)
                }}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </AnimatePresence>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                go(-1)
              }}
              className="absolute left-2 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center border border-ivory/20 text-ivory/80 transition-colors hover:bg-ivory hover:text-navy-900 sm:flex lg:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft strokeWidth={1.25} className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                go(1)
              }}
              className="absolute right-2 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center border border-ivory/20 text-ivory/80 transition-colors hover:bg-ivory hover:text-navy-900 sm:flex lg:right-8"
              aria-label="Next image"
            >
              <ChevronRight strokeWidth={1.25} className="h-6 w-6" />
            </button>
          </div>

          <div className="container-site flex min-h-24 shrink-0 items-center justify-between gap-6 py-5" onClick={(e) => e.stopPropagation()}>
            <p className="max-w-xl font-display text-lg italic text-ivory/85 sm:text-xl">{item.alt}</p>
            <p className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold-300 sm:block">{item.category}</p>
            <div className="flex gap-2 sm:hidden">
              <button type="button" onClick={() => go(-1)} className="flex h-11 w-11 items-center justify-center border border-ivory/20" aria-label="Previous image">
                <ChevronLeft strokeWidth={1.25} className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => go(1)} className="flex h-11 w-11 items-center justify-center border border-ivory/20" aria-label="Next image">
                <ChevronRight strokeWidth={1.25} className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
