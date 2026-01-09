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
  getNumbersData,
  getAnsweringModelsData,
  getOnboardingData,
} from '@/lib/sanity.queries'

/*---> Component <---*/
export default async function HomeCompound() {
  const heroData = await getHeroData()
  const callCoverageData = await getCallCoverageData()
  const testimonialsData = await getTestimonialsData()
  const numbersData = await getNumbersData()
  const answeringModelsData = await getAnsweringModelsData()
  const onboardingData = await getOnboardingData()

  return (
    <>
      <Hero heroData={heroData} />
      <CallCoverage callCoverageData={callCoverageData} />
      <Testimonials testimonialsData={testimonialsData} />
      <Numbers numbersData={numbersData} />
      <AnsweringModels answeringModelsData={answeringModelsData} />
      <Onboarding onboardingData={onboardingData} />
    </>
  )
}
