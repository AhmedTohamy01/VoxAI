import CallCoverage from '@/components/Home/CallCoverage/CallCoverage'
import Hero from '@/components/Home/Hero/Hero'
import Onboarding from '@/components/Home/Onboarding/Onboarding'
import Testimonials from '@/components/Home/Testimonials/Testimonials'

/*---> Component <---*/
export default function HomeCompound() {
  return (
    <>
      <Hero />
      <CallCoverage />
      <Testimonials />
      <Onboarding />
    </>
  )
}
