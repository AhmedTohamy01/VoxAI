import CallCoverage from '@/components/Home/CallCoverage/CallCoverage'
import Hero from '@/components/Home/Hero/Hero'
import Testimonials from '@/components/Home/Testimonials/Testimonials'

/*---> Component <---*/
export default function HomeCompound() {
  return (
    <>
      <Hero />
      <CallCoverage />
      <Testimonials />
    </>
  )
}
