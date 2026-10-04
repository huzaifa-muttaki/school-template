import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, MotionConfig, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

const pages = {
  About: () => import('./pages/About'),
  Academics: () => import('./pages/Academics'),
  Admissions: () => import('./pages/Admissions'),
  CampusLife: () => import('./pages/CampusLife'),
  Achievements: () => import('./pages/Achievements'),
  News: () => import('./pages/News'),
  NewsArticle: () => import('./pages/NewsArticle'),
  Gallery: () => import('./pages/Gallery'),
  Contact: () => import('./pages/Contact'),
  NotFound: () => import('./pages/NotFound'),
}

const About = lazy(pages.About)
const Academics = lazy(pages.Academics)
const Admissions = lazy(pages.Admissions)
const CampusLife = lazy(pages.CampusLife)
const Achievements = lazy(pages.Achievements)
const News = lazy(pages.News)
const NewsArticle = lazy(pages.NewsArticle)
const Gallery = lazy(pages.Gallery)
const Contact = lazy(pages.Contact)
const NotFound = lazy(pages.NotFound)

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  return <motion.div aria-hidden className="fixed inset-x-0 top-0 z-[55] h-[2px] origin-left bg-gold" style={{ scaleX }} />
}

function PageFallback() {
  return <div className="min-h-screen bg-midnight" aria-busy="true" aria-label="Loading page" />
}

/** After a route change, jump to the hash target if there is one (waiting briefly for lazy content). */
function useHashScroll(hash: string, pathname: string) {
  useEffect(() => {
    if (!hash) return
    let tries = 0
    const timer = window.setInterval(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el || ++tries > 30) {
        window.clearInterval(timer)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
    return () => window.clearInterval(timer)
  }, [hash, pathname])
}

export default function App() {
  const location = useLocation()
  useHashScroll(location.hash, location.pathname)

  // Warm the remaining page chunks once the browser is idle, so navigation feels instant.
  useEffect(() => {
    const warm = () => Object.values(pages).forEach((load) => load())
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number }
    if (w.requestIdleCallback) w.requestIdleCallback(warm)
    else window.setTimeout(warm, 2000)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ivory focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-navy-900"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => {
          if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
        }}
      >
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
          <main id="main">
            <Suspense fallback={<PageFallback />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsArticle />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  )
}
