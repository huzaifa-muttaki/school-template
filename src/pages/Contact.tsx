import { useState, type FormEvent, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ImageReveal from '../components/ui/ImageReveal'
import Button from '../components/ui/Button'
import { images, school } from '../data/school'
import { ease } from '../lib/motion'
import { usePageTitle } from '../lib/hooks'

const subjects = ['Admissions question', 'Arrange a visit', 'Open Morning place', 'General question', 'Former students', 'Working at Nireka']

const departments = [
  { name: 'Admissions', email: school.admissionsEmail, phone: school.admissionsPhone },
  { name: 'Head of School’s Office', email: 'office@nireka.example', phone: '+1 (415) 555-0163' },
  { name: 'Former Students & Friends', email: 'friends@nireka.example', phone: '+1 (415) 555-0178' },
]

const fieldCls =
  'peer w-full border-0 border-b border-navy-900/25 bg-transparent px-0 pb-3 pt-2 text-[1rem] text-navy-900 transition-colors placeholder:text-transparent focus:border-navy-900 focus:outline-none focus:ring-0'

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col-reverse">
      {children}
      <label htmlFor={id} className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-stone-600 transition-colors peer-focus:text-gold-700">
        {label}
      </label>
    </div>
  )
}

function InfoBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-navy-900/15 py-7">
      <h3 className="eyebrow text-gold-700">{label}</h3>
      <div className="mt-4 text-[1.02rem] leading-relaxed text-navy-900">{children}</div>
    </div>
  )
}

export default function Contact() {
  usePageTitle('Contact')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Demonstration only — no backend. Replace with your form provider.
    setSent(true)
  }

  return (
    <>
      <PageHero
        compact
        eyebrow="Contact"
        lines={['Say hello', <em key="b" className="italic">to Nireka.</em>]}
        intro="Thinking about joining us, planning a visit or simply curious? Send us a note and the right person will reply."
        image={images.courtyard}
        imageAlt="The arcaded stone courtyard near the main entrance"
      />

      <section className="section-y bg-ivory">
        <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Details */}
          <div className="lg:col-span-4">
            <Reveal>
              <InfoBlock label="Address">
                <address className="not-italic">
                  {school.name}
                  {school.address.map((l) => (
                    <span key={l} className="block text-charcoal/70">{l}</span>
                  ))}
                </address>
              </InfoBlock>
              <InfoBlock label="Telephone">
                <a href={`tel:${school.phone.replace(/[^+\d]/g, '')}`} className="link-underline">{school.phone}</a>
              </InfoBlock>
              <InfoBlock label="Email">
                <a href={`mailto:${school.email}`} className="link-underline">{school.email}</a>
              </InfoBlock>
              <InfoBlock label="Office Hours">
                <dl className="space-y-2">
                  {school.hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4 text-[0.95rem]">
                      <dt className="text-charcoal/70">{h.days}</dt>
                      <dd className="text-right">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </InfoBlock>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <SectionHeading eyebrow="Send an Enquiry" size="md" lines={['What can we', <em key="b" className="italic">help with?</em>]} />
            <Reveal delay={0.15} className="mt-12">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="border border-gold/50 bg-ivory-50 p-10 sm:p-14"
                    role="status"
                  >
                    <span className="flex h-14 w-14 items-center justify-center bg-navy-900 text-gold-300">
                      <Check className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                    </span>
                    <p className="mt-8 font-display text-[2.2rem] leading-tight text-navy-900">Thank you — message received.</p>
                    <p className="mt-4 max-w-md text-[1rem] leading-relaxed text-charcoal/75">
                      We have your message and will reply within two working days.
                    </p>
                    <button type="button" onClick={() => setSent(false)} className="link-underline mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-navy-900">
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
                    <Field id="name" label="Full Name">
                      <input id="name" name="name" autoComplete="name" required placeholder="Full name" className={fieldCls} />
                    </Field>
                    <Field id="email" label="Email">
                      <input id="email" name="email" type="email" autoComplete="email" required placeholder="Email" className={fieldCls} />
                    </Field>
                    <Field id="phone" label="Phone">
                      <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone" className={fieldCls} />
                    </Field>
                    <Field id="subject" label="Subject">
                      <select id="subject" name="subject" required defaultValue="" className={`${fieldCls} cursor-pointer appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230C1A2E' stroke-width='1.2'/%3E%3C/svg%3E")] bg-[length:12px_8px] bg-[right_2px_center] bg-no-repeat pr-6`}>
                        <option value="" disabled>Select a subject</option>
                        {subjects.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </Field>
                    <div className="sm:col-span-2">
                      <Field id="message" label="Message">
                        <textarea id="message" name="message" rows={5} required placeholder="Message" className={`${fieldCls} resize-none`} />
                      </Field>
                    </div>
                    <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-sm text-[0.82rem] leading-relaxed text-stone-600">
                        Your details are used only to answer this message.
                      </p>
                      <Button type="submit" variant="dark">Send Enquiry</Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map + campus */}
      <section className="bg-ivory-200">
        <div className="grid lg:grid-cols-2">
          <Reveal className="relative min-h-[420px] overflow-hidden bg-[#E9E3D7] lg:min-h-[600px]" y={0}>
            {/* Stylised map placeholder — swap for an embedded map provider */}
            <svg aria-hidden className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 600">
              <rect width="800" height="600" fill="#E9E3D7" />
              <path d="M0 420 C 180 380, 260 470, 420 430 S 680 330, 800 360 L800 600 L0 600Z" fill="#D9E0E3" />
              <g fill="#DCE3D2">
                <ellipse cx="560" cy="170" rx="120" ry="80" />
                <ellipse cx="160" cy="140" rx="90" ry="60" />
              </g>
              <g stroke="#FBF9F5" strokeWidth="14" fill="none" strokeLinecap="round">
                <path d="M-20 260 L820 230" />
                <path d="M380 -20 C 360 200, 420 380, 380 620" />
              </g>
              <g stroke="#FBF9F5" strokeWidth="6" fill="none" strokeLinecap="round">
                <path d="M-20 120 L300 200 L520 300 L820 320" />
                <path d="M120 -20 L200 620" />
                <path d="M620 -20 L560 620" />
                <path d="M0 520 L800 470" />
              </g>
              <g stroke="#CFC6B6" strokeWidth="1" fill="none">
                <path d="M0 60 L800 40" />
                <path d="M0 340 L800 300" />
                <path d="M260 0 L300 600" />
                <path d="M700 0 L680 600" />
              </g>
            </svg>
            <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-full">
              <span className="absolute left-1/2 top-full h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/30 motion-safe:animate-ping" />
              <span className="flex h-12 w-12 items-center justify-center bg-navy-900 text-gold-300 shadow-xl">
                <MapPin className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-ivory p-6 shadow-[0_20px_60px_-20px_rgba(8,18,33,0.35)] sm:right-auto sm:max-w-xs">
              <p className="font-display text-2xl text-navy-900">Nireka Estate</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{school.address.join(', ')}</p>
              <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-700">Visitors please use the Ridgeway Lane gate</p>
            </div>
          </Reveal>
          <ImageReveal id={images.estateDrive} alt="The driveway leading up to the estate house" sizes="(min-width: 1024px) 50vw, 100vw" className="min-h-[420px] lg:min-h-[600px]" />
        </div>
      </section>

      {/* Departments */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-site">
          <p className="eyebrow text-gold-700">Direct Contacts</p>
          <div className="mt-8 grid border-t border-navy-900/15 md:grid-cols-3">
            {departments.map((d, i) => (
              <div key={d.name} className={`border-b border-navy-900/15 py-8 md:border-b-0 md:pr-8 ${i > 0 ? 'md:border-l md:pl-8' : ''}`}>
                <h3 className="font-display text-[1.7rem] text-navy-900">{d.name}</h3>
                <a href={`mailto:${d.email}`} className="link-underline mt-4 inline-block text-[0.95rem] text-charcoal/80">{d.email}</a>
                <a href={`tel:${d.phone.replace(/[^+\d]/g, '')}`} className="mt-1 block text-[0.95rem] text-charcoal/80">{d.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
