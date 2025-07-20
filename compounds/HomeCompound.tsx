import AnsweringModels from '@/components/Home/AnsweringModels/AnsweringModels'
import CallCoverage from '@/components/Home/CallCoverage/CallCoverage'
import Hero from '@/components/Home/Hero/Hero'
import Numbers from '@/components/Home/Numbers/Numbers'
import Onboarding from '@/components/Home/Onboarding/Onboarding'
import Testimonials from '@/components/Home/Testimonials/Testimonials'

/*---> Component <---*/
export default function HomeCompound() {
  return (
    <>
      <Hero />
      <CallCoverage />
      <Testimonials />
      <Numbers />
      <AnsweringModels />
      <Onboarding />
    </>
  )
}
