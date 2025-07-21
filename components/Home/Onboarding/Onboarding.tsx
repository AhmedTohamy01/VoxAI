'use client'
import styled from 'styled-components'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from 'antd'

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
          <ButtonsWrapper>
            <StyledButton>Create an AI Receptionist</StyledButton>
            <StyledOutlineButton>Want help? Contact us.</StyledOutlineButton>
          </ButtonsWrapper>
        </TextWrapper>
        <ImageMaskWrapper>
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
        </ImageMaskWrapper>
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

  @media (max-width: 1024px) {
    padding: 40px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
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
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`

const TextWrapper = styled.div`
  /* border: 1px solid red; */
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const ImageMaskWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 500px;
  width: 50%;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;
    background:
      linear-gradient(to top, #fff 0%, transparent 20%),
      linear-gradient(to bottom, #fff 0%, transparent 20%),
      linear-gradient(to left, #fff 0%, transparent 20%),
      linear-gradient(to right, #fff 0%, transparent 20%);
    background-blend-mode: lighten;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const ImageWrapper = styled(motion.div)`
  position: absolute;
  inset: 0;
`

const ButtonsWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  gap: 20px;

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 0px;
  }
`

const StyledButton = styled(Button)`
  /* border: 1px solid red; */
  background: linear-gradient(to bottom, #044f71, #0075aa) !important;
  color: #ffffff !important;
  border: none;
  width: 100%;
  height: 55px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 28px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
  transition: box-shadow 0.3s ease;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    filter: brightness(0.92);
    color: #ffffff !important;
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.25);
  }
`

const StyledOutlineButton = styled(Button)`
  background: transparent !important;
  /* color: #ffffff !important; */
  border: 2px solid #0075aa !important;
  width: 100%;
  height: 55px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 28px;
  box-shadow: 0 4px 12px rgba(0, 117, 170, 0.25);
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: transparent !important; /* keep it transparent */
    color: black !important;
    border-color: #00aaff !important; /* slightly brighter border on hover */
    box-shadow: 0 6px 16px rgba(0, 117, 170, 0.4); /* a bit stronger but same hue */
  }

  &:active {
    transform: scale(0.98); /* optional: subtle click effect */
  }
`
