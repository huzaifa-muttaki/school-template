import PageHero from '../components/PageHero'
import Gallery from '../components/Gallery'
import { images } from '../data/school'
import { usePageTitle } from '../lib/hooks'

export default function GalleryPage() {
  usePageTitle('Gallery')
  return (
    <>
      <PageHero
        compact
        eyebrow="Gallery"
        lines={['The estate,', <em key="b" className="italic">in pictures.</em>]}
        intro="Halls, studios, sports grounds and woodland — a visual walk through the places where Nireka learns."
        image={images.cloister}
        imageAlt="Sunlight falling through a stone cloister"
      />
      <Gallery />
    </>
  )
}
