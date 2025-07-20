'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styled from 'styled-components'
import AnsweringModelCard from '../AnsweringModelCard/AnsweringModelCard'

/*---> Component <---*/
export default function AnsweringModels() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const aiBenefits = [
    'Instant responses',
    'Most cost-effective option',
    'Human agents on standby',
  ]

  const humanBenefits = [
    'Warm human interaction',
    'Complex call handling',
    'Client onboarding with empathy',
  ]
  return (
    <MainWrapper>
      <TextWrapper
        ref={ref}
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 3, ease: 'easeOut' }}
      >
        <Head>TAILORED FOR YOUR NEEDS</Head>
        <Title>
          Choose from AI-first or
          <br /> human-first answering
        </Title>
        <SubTitle>
          No matter who answers, every plan includes essentials like
          <br /> 24/7 call coverage, free spam blocking, lead qualification, and
          <br /> new client intake, so you never miss what matters.
        </SubTitle>
      </TextWrapper>
      <CardsWrapper>
        <AnsweringModelCard
          head='AI RECEPTIONIST'
          title='Efficient & Affordable'
          price='97.50'
          subTitle='AI-first answering is perfect for simple intake, scheduling new appointments, and handling general inquiries at any call volume.'
          benefits={aiBenefits}
          modelType='AI Receptionist'
          questionText='Why choose AI-first?'
        />
        <AnsweringModelCard
          head='Virtual receptionists'
          title='Friendly & Engaging'
          price='292.50'
          subTitle='Human receptionists handle every call with empathy, professionalism, and personalized service from start to finish — no matter how complicated.'
          benefits={humanBenefits}
          modelType='Virtual Receptionist'
          questionText='Why choose human-first?'
        />
      </CardsWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  /* border: 1px solid red; */
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px;
  background-color: #1a1a1a;
`

const TextWrapper = styled.div`
  /* border: 1px solid red; */
`

const Head = styled.div`
  /* border: 1px solid red; */
  font-size: 14px;
  font-weight: 500;
  color: #0075aa;
  margin-bottom: 20px;
  text-align: center;
`

const Title = styled.div`
  /* border: 1px solid red; */
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`

const SubTitle = styled.div`
  /* border: 1px solid red; */
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 80px;
`

const CardsWrapper = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`
