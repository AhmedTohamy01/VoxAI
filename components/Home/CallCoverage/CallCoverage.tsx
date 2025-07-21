'use client'
import styled from 'styled-components'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/*---> Component <---*/
export default function CallCoverage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
          <Head>24/7/365 ANSWERING</Head>
          <Title>Total call coverage, powered by AI + humans</Title>
          <SubTitle>
            Whether it's after-hours or the midday rush, AI Receptionist and our
            live agents ensure your calls are always answered, so you never lose
            a lead.
          </SubTitle>
        </TextWrapper>
        <ImageWrapper
          ref={ref}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 3, ease: 'easeOut' }}
        >
          <Image
            src='/img/ai-agent-2.webp'
            alt='Ai agent image'
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </ImageWrapper>
      </ContentWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  /* border: 1px solid red; */
  background-color: white;
  height: fit-content;
`

const ContentWrapper = styled.div`
  /* border: 1px solid red; */
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 80px 40px 80px;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
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

  @media (max-width: 1150px) {
    font-size: 38px;
  }

  @media (max-width: 1024px) {
    font-size: 32px;
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
`

const TextWrapper = styled.div`
  /* border: 1px solid red; */
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ImageWrapper = styled.div`
  /* border: 1px solid red; */
  position: relative;
  height: 300px;
  width: 500px;
  width: 50%;

  /* Dissolve all edges (top, bottom, left, right) into background */
  mask-image: linear-gradient(to top, transparent 0%, black 20%),
    linear-gradient(to bottom, transparent 0%, black 20%),
    linear-gradient(to left, transparent 0%, black 20%),
    linear-gradient(to right, transparent 0%, black 20%);
  mask-composite: intersect;
  -webkit-mask-image: linear-gradient(to top, transparent 0%, black 20%),
    linear-gradient(to bottom, transparent 0%, black 20%),
    linear-gradient(to left, transparent 0%, black 20%),
    linear-gradient(to right, transparent 0%, black 20%);
  -webkit-mask-composite: destination-in;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 100%;
  }
`
