import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { allPages, primaryNav, school } from '../data/school'
import { ease } from '../lib/motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()
  const menuButton = useRef<HTMLButtonElement>(null)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 40)
    setHidden(y > 480 && y > prev + 4)
    if (y < prev - 4) setHidden(false)
  })

  // Close the menu on navigation
  useEffect(() => setOpen(false), [location.pathname])

  // Lock scroll + Escape to close while the menu is open
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      menuButton.current?.focus()
    }
  }, [open])

  const solid = scrolled && !open

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden && !open ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease }}
      >
        <div
          className={`transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-lux ${
            solid ? 'bg-ivory/90 shadow-[0_1px_0_rgba(12,26,46,0.08)] backdrop-blur-md' : 'bg-transparent'
          }`}
        >
          {/* Soft top fade keeps light text legible over any hero image */}
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-midnight/50 to-transparent transition-opacity duration-500 ${
              solid ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <nav
            aria-label="Primary"
            className={`container-site relative flex items-center justify-between transition-[height] duration-500 ease-lux ${
              solid ? 'h-[72px]' : 'h-[88px] lg:h-[104px]'
            }`}
          >
            <Link to="/" aria-label={`${school.name} — home`} className="relative z-10">
              <Logo light={!solid} />
            </Link>

            <ul className="hidden items-center gap-9 lg:flex">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `group relative py-2 text-[0.8rem] font-medium tracking-[0.06em] transition-colors duration-300 ${
                        solid ? 'text-navy-900/80 hover:text-navy-900' : 'text-ivory/85 hover:text-ivory'
                      } ${isActive ? (solid ? '!text-navy-900' : '!text-ivory') : ''}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          aria-hidden
                          className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-gold transition-transform duration-500 ease-lux ${
                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                to="/admissions"
                className={`group hidden items-center gap-3 px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ease-lux md:inline-flex ${
                  solid
                    ? 'bg-navy-900 text-ivory hover:bg-navy-700'
                    : 'border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-navy-900'
                }`}
              >
                Begin Your Journey
                <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
              <button
                ref={menuButton}
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Close menu' : 'Open menu'}
                className={`relative z-10 -mr-2 flex h-11 w-11 items-center justify-center lg:hidden ${
                  solid ? 'text-navy-900' : 'text-ivory'
                }`}
              >
                {open ? <X strokeWidth={1.25} className="h-6 w-6" /> : <Menu strokeWidth={1.25} className="h-6 w-6" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-midnight text-ivory lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="container-site flex flex-1 flex-col pb-10 pt-28">
              <motion.ul
                className="flex flex-col"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.25 } } }}
              >
                {allPages.map((item, i) => (
                  <motion.li
                    key={item.to}
                    className="border-b border-ivory/10"
                    variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `flex items-baseline gap-5 py-3.5 font-display text-[2rem] leading-tight transition-colors sm:text-[2.6rem] ${
                          isActive ? 'text-gold-300' : 'text-ivory hover:text-gold-300'
                        }`
                      }
                    >
                      <span className="font-sans text-[0.65rem] tracking-[0.2em] text-ivory/40 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="mt-auto grid gap-6 pt-12 text-sm text-ivory/65 sm:grid-cols-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.6 } }}
              >
                <div>
                  <p className="eyebrow mb-3 text-gold-300">Admissions</p>
                  <a href={`mailto:${school.admissionsEmail}`} className="block hover:text-ivory">{school.admissionsEmail}</a>
                  <a href={`tel:${school.admissionsPhone.replace(/[^+\d]/g, '')}`} className="mt-1 block hover:text-ivory">{school.admissionsPhone}</a>
                </div>
                <Link
                  to="/admissions"
                  className="group inline-flex items-center justify-between gap-3 self-end bg-gold px-6 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-midnight"
                >
                  Begin Your Journey
                  <ArrowRight aria-hidden className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
