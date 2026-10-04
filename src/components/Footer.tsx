import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import Logo from './Logo'
import { allPages, school } from '../data/school'

const socialIcons = { Instagram, Facebook, LinkedIn: Linkedin, YouTube: Youtube } as const

const admissionsLinks = [
  { label: 'Steps to Join', to: '/admissions#process' },
  { label: 'Fees & Support', to: '/admissions#fees' },
  { label: 'Arrange a Visit', to: '/contact' },
  { label: 'Open Morning', to: '/news/open-morning-2027' },
]

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="relative overflow-hidden bg-midnight text-ivory">
      <div className="container-site">
        {/* Closing statement */}
        <div className="flex flex-col justify-between gap-10 border-b border-ivory/10 py-20 sm:py-24 lg:flex-row lg:items-end">
          <p className="font-display text-display-xl font-normal">
            Question. Create. <em className="italic text-gold-300">Belong.</em>
          </p>
          <div className="w-full max-w-md">
            <h2 className="eyebrow text-ivory/60">The Nireka Letter</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ivory/65">
              Stories, events and admissions news — once a month, never more.
            </p>
            {subscribed ? (
              <p className="mt-6 flex items-center gap-3 border-b border-gold/60 pb-4 text-[0.95rem] text-ivory" role="status">
                <Check className="h-4 w-4 text-gold-300" strokeWidth={1.5} aria-hidden /> Thank you — you’re on the list.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="group mt-6 flex items-center border-b border-ivory/30 transition-colors focus-within:border-gold">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full bg-transparent py-4 text-[0.95rem] text-ivory placeholder:text-ivory/40 focus:outline-none"
                />
                <button type="submit" aria-label="Subscribe" className="flex h-11 w-11 shrink-0 items-center justify-center text-ivory transition-colors hover:text-gold-300">
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-focus-within:translate-x-1" strokeWidth={1.5} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" aria-label={`${school.name} — home`} className="inline-block">
              <Logo />
            </Link>
            <address className="mt-8 not-italic leading-relaxed text-ivory/60">
              {school.address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
            <ul className="mt-8 flex gap-2">
              {school.socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons]
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={`${school.shortName} on ${s.label}`}
                      className="flex h-11 w-11 items-center justify-center border border-ivory/15 text-ivory/70 transition-colors duration-300 hover:border-gold hover:text-gold-300"
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-6">
            <h2 className="eyebrow text-gold-300">Explore</h2>
            <ul className="mt-6 space-y-3 text-[0.95rem] text-ivory/70">
              {allPages.slice(1).map((p) => (
                <li key={p.to}>
                  <Link to={p.to} className="link-underline hover:text-ivory">{p.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="eyebrow text-gold-300">Admissions</h2>
            <ul className="mt-6 space-y-3 text-[0.95rem] text-ivory/70">
              {admissionsLinks.map((p) => (
                <li key={p.label}>
                  <Link to={p.to} className="link-underline hover:text-ivory">{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-gold-300">Contact</h2>
            <ul className="mt-6 space-y-3 text-[0.95rem] text-ivory/70">
              <li>
                <a href={`tel:${school.phone.replace(/[^+\d]/g, '')}`} className="link-underline hover:text-ivory">{school.phone}</a>
              </li>
              <li>
                <a href={`mailto:${school.email}`} className="link-underline hover:text-ivory">{school.email}</a>
              </li>
              <li>
                <a href={`mailto:${school.admissionsEmail}`} className="link-underline hover:text-ivory">{school.admissionsEmail}</a>
              </li>
              <li className="pt-3 text-ivory/50">Mon – Fri · 08:00 – 17:30</li>
            </ul>
          </div>
        </div>

        <p className="border-t border-ivory/10 pt-8 text-[0.75rem] leading-relaxed text-ivory/60">{school.disclaimer}</p>
        <div className="flex flex-col gap-4 py-8 text-[0.75rem] text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Website template demonstration.</p>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-ivory">Privacy</a></li>
            <li><a href="#" className="hover:text-ivory">Safeguarding</a></li>
            <li><a href="#" className="hover:text-ivory">Accessibility</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
