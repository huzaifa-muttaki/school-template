import Button from '../components/ui/Button'
import Img from '../components/ui/Img'
import { images } from '../data/school'
import { usePageTitle } from '../lib/hooks'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-midnight text-ivory">
      <Img id={images.forest} alt="" priority sizes="100vw" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-midnight/70 to-midnight/40" />
      <div className="container-site pb-24 pt-40">
        <p className="eyebrow text-gold-300">Error 404</p>
        <h1 className="mt-6 max-w-3xl font-display text-display-xl font-normal">
          This path doesn’t <em className="italic">lead anywhere.</em>
        </h1>
        <p className="mt-6 max-w-md text-lg font-light text-ivory/75">
          The page you were looking for has moved or never existed. Let’s get you back on track.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/" variant="light">Return Home</Button>
          <Button to="/contact" variant="outline-light">Contact Us</Button>
        </div>
      </div>
    </section>
  )
}
