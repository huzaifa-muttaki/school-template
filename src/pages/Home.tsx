import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Stats from '../components/Stats'
import Academics from '../components/Academics'
import Campus from '../components/Campus'
import StudentLife from '../components/StudentLife'
import Achievements from '../components/Achievements'
import PrincipalMessage from '../components/PrincipalMessage'
import News from '../components/News'
import Gallery from '../components/Gallery'
import AdmissionsCTA from '../components/AdmissionsCTA'
import { usePageTitle } from '../lib/hooks'

export default function Home() {
  usePageTitle()
  return (
    <>
      <Hero />
      <Introduction />
      <Stats />
      <Academics />
      <Campus />
      <StudentLife />
      <Achievements />
      <PrincipalMessage />
      <News />
      <Gallery preview index="08" />
      <AdmissionsCTA />
    </>
  )
}
