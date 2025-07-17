'use client'
import styled from 'styled-components'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/*---> Component <---*/
export default function Onboarding() {
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const isImageRefInView = useInView(imageRef, { once: true, margin: '-100px' })
  const isTextRefInView = useInView(textRef, { once: true, margin: '-100px' })

  return (
    <MainWrapper>
      <ContentWrapper>
        <TextWrapper
          ref={textRef}
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={isTextRefInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 3, ease: 'easeOut' }}
        >
          <Head>EASY ONBOARDING</Head>
          <Title>Get set up in minutes</Title>
          <SubTitle>
            Create your receptionist in 15 minutes and start receiving calls
            immediately. Try it for 30 days risk-free with our money-back
            guarantee.
          </SubTitle>
        </TextWrapper>
        <ImageWrapper
          ref={imageRef}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={isImageRefInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 3, ease: 'easeOut' }}
        >
          <Image
            src='/img/ai-agent-5.avif'
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
  padding: 80px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
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
`

const SubTitle = styled.div`
  /* border: 1px solid red; */
  font-size: 24px;
  font-weight: 500;
  color: #282825;
`

const TextWrapper = styled.div`
  /* border: 1px solid red; */
  width: 50%;
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
`
