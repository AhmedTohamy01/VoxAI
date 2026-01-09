'use client'
import styled from 'styled-components'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CustomerCard from '../CustomerCard/CustomerCard'
import { TestimonialsData } from '@/lib/sanity.queries'
import { customersCards } from '../../../utils/constants'

interface TestimonialsProps {
  testimonialsData: TestimonialsData | null
}

/*---> Component <---*/
export default function Testimonials({ testimonialsData }: TestimonialsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Fallback data if Sanity data is not available
  const head = testimonialsData?.head || 'IMMEDITAE IMPACT'
  const title = testimonialsData?.title || 'Trusted by 3,500+ growing businesses'
  const subtitle =
    testimonialsData?.subtitle ||
    'Unblock growth with call handling that fits your business — and your clients. From answering and screening to qualification and scheduling, our receptionists keep things running smoothly.'

  // Use Sanity data if available, otherwise fallback to constants
  const cardsToDisplay = testimonialsData?.customerCards || customersCards

  return (
    <MainWrapper>
      <ContentWrapper>
        <TextWrapper
          ref={ref}
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 3, ease: 'easeOut' }}
        >
          <Head>{head}</Head>
          <Title>{title}</Title>
          <SubTitle>
            {subtitle.split('\n').map((line, index, array) => (
              <span key={index}>
                {line}
                {index < array.length - 1 && <br />}
              </span>
            ))}
          </SubTitle>
        </TextWrapper>
        <CardsWrapper>
          {cardsToDisplay.map((card: any, index: number) => (
            <CustomerCard
              key={card._id || card.id || index}
              imageUrl={card.imageUrl}
              text={card.text}
              name={card.name}
              company={card.company}
            />
          ))}
        </CardsWrapper>
      </ContentWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  /* border: 1px solid blue; */
  background-color: white;
  height: fit-content;
`

const ContentWrapper = styled.div`
  /* border: 1px solid red; */
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 80px 40px 80px;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 15px 30px 15px;
  }
`

const Head = styled.div`
  /* border: 1px solid red; */
  font-size: 14px;
  font-weight: 500;
  color: #044f71;
  margin-bottom: 20px;
`

const Title = styled.div`
  /* border: 1px solid red; */
  font-size: 48px;
  font-weight: 700;
  color: #282825;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`

const SubTitle = styled.div`
  /* border: 1px solid red; */
  font-size: 24px;
  font-weight: 500;
  color: #282825;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    br {
      display: none;
    }
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

const TextWrapper = styled.div`
  /* border: 1px solid red; */
  width: 70%;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin-bottom: 25px;
  }
`

const CardsWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`
