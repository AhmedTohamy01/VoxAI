import AnsweringModels from '@/components/Home/AnsweringModels/AnsweringModels'
import CallCoverage from '@/components/Home/CallCoverage/CallCoverage'
import Hero from '@/components/Home/Hero/Hero'
import Numbers from '@/components/Home/Numbers/Numbers'
import Onboarding from '@/components/Home/Onboarding/Onboarding'
import Testimonials from '@/components/Home/Testimonials/Testimonials'
import {
  getHeroData,
  getCallCoverageData,
  getTestimonialsData,
} from '@/lib/sanity.queries'

/*---> Component <---*/
export default async function HomeCompound() {
  const heroData = await getHeroData()
  const callCoverageData = await getCallCoverageData()
  const testimonialsData = await getTestimonialsData()

  return (
    <>
      <Hero heroData={heroData} />
      <CallCoverage callCoverageData={callCoverageData} />
      <Testimonials testimonialsData={testimonialsData} />
      <Numbers />
      <AnsweringModels />
      <Onboarding />
    </>
  )
}
