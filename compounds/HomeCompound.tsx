import AnsweringModels from '@/components/Home/AnsweringModels/AnsweringModels'
import CallCoverage from '@/components/Home/CallCoverage/CallCoverage'
import Hero from '@/components/Home/Hero/Hero'
import Numbers from '@/components/Home/Numbers/Numbers'
import Onboarding from '@/components/Home/Onboarding/Onboarding'
import Testimonials from '@/components/Home/Testimonials/Testimonials'
import { getHeroData } from '@/lib/sanity.queries'

/*---> Component <---*/
export default async function HomeCompound() {
  const heroData = await getHeroData()

  return (
    <>
      <Hero heroData={heroData} />
      <CallCoverage />
      <Testimonials />
      <Numbers />
      <AnsweringModels />
      <Onboarding />
    </>
  )
}
