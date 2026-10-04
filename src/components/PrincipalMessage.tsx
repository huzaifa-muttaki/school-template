import SectionHeading from './SectionHeading'
import ImageReveal from './ui/ImageReveal'
import Reveal from './ui/Reveal'
import { TextLink } from './ui/Button'
import { principal } from '../data/school'

type Props = { index?: string; full?: boolean }

export default function PrincipalMessage({ index = '06', full = false }: Props) {
  return (
    <section className="section-y relative overflow-hidden bg-ivory">
      <div className="container-site grid gap-20 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="relative lg:col-span-5">
          <div aria-hidden className="absolute -top-4 bottom-12 left-12 right-0 border border-gold/50 sm:-top-6" />
          <ImageReveal
            id={principal.image}
            alt={`The ${principal.role}’s study, lined with books`}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="relative aspect-[4/5] w-[88%]"
            
          />
          <Reveal delay={0.3} className="absolute -bottom-8 right-0 bg-navy-900 px-6 py-5 text-ivory sm:px-8 sm:py-6">
            <p className="font-display text-2xl leading-none">{principal.name}</p>
            <p className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-300">
              {principal.role} · {principal.credentials}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading
            index={index}
            eyebrow="From the Head of School"
            size="md"
            lines={['A note from', <em key="b" className="italic">the old gate.</em>]}
          />
          <Reveal delay={0.15}>
            <figure className="relative mt-12">
              <span aria-hidden className="absolute -left-1 -top-12 select-none font-display text-[7rem] leading-none text-gold/35 sm:-left-8">
                &ldquo;
              </span>
              <blockquote className="relative font-display text-[1.75rem] italic leading-[1.3] text-navy-900 sm:text-[2.2rem]">
                {principal.quote}
              </blockquote>
            </figure>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 space-y-5 text-[1.02rem] leading-[1.8] text-charcoal/75">
              {(full ? principal.message : principal.message.slice(0, 1)).map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.35} className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
            <span className="font-display text-[2rem] italic text-navy-900/80" aria-hidden>
              {principal.firstLast}
            </span>
            {!full && <TextLink to="/about">Read the full letter</TextLink>}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
