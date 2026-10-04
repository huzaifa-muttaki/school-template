import SectionHeading from './SectionHeading'
import ImageReveal from './ui/ImageReveal'
import Reveal from './ui/Reveal'
import { TextLink } from './ui/Button'
import { images } from '../data/school'

export default function Introduction() {
  return (
    <section id="introduction" className="section-y relative overflow-hidden bg-ivory">
      <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 lg:pt-6">
          <SectionHeading index="01" eyebrow="Introduction" lines={['A place to', <em key="b" className="italic">grow into.</em>]} />
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-[30ch] font-display text-display-sm text-navy-900/90">
              At Nireka, learning is never confined to a timetable.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-6 max-w-lg text-[1.02rem] leading-[1.8] text-charcoal/75">
              Students here are encouraged to ask awkward questions, try unfamiliar things and work out who they want to
              become. Since 2001, families from thirty-six countries have chosen Nireka for exactly that — on a restored
              hillside estate where old stone and new ideas share the same paths.
            </p>
          </Reveal>
          <Reveal delay={0.35} className="mt-10">
            <TextLink to="/about">Discover our story</TextLink>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:mt-24">
          <div className="relative">
          <ImageReveal
            id={images.colonnade}
            alt="The carved stone arcade along the south front of the estate house"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/5] w-full"
          />
          <ImageReveal
            id={images.cloister}
            alt="Sunlight falling through a stone cloister"
            sizes="(min-width: 1024px) 20vw, 50vw"
            delay={0.25}
            className="absolute -bottom-12 -left-6 hidden aspect-square w-[46%] border-[10px] border-ivory sm:block lg:-left-[34%] lg:bottom-[12%]"
          />
          </div>
          <p className="mt-5 text-right text-[0.7rem] uppercase tracking-[0.22em] text-stone-600 sm:mt-6">
            The South Arcade · Restored 2001
          </p>
        </div>
      </div>
    </section>
  )
}
