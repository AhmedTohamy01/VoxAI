'use client'
import styled from 'styled-components'
import { Button } from 'antd'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/*---> Component <---*/
export default function Hero() {
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const isInView = useInView(imageRef, { once: true, margin: '-100px' })

  return (
    <MainWrapper>
      <TextWrapper
        ref={textRef}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <Title>Never miss another customer</Title>
        <SubTitle>
          Get the #1 rated receptionist service designed specifically
          <br /> for small businesses.
          <br /> Delivering excellence in every call.
        </SubTitle>
        <ButtonsWrapper>
          <StyledButton>AI Receptionist</StyledButton>
          <StyledButton>Human Receptionists</StyledButton>
        </ButtonsWrapper>
      </TextWrapper>
      <ImageWrapper
        ref={imageRef}
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 3, ease: 'easeOut' }}
      >
        <Image
          src='/img/ai-agent-4.avif'
          alt='hero image'
          fill
          style={{
            objectFit: 'cover',
            zIndex: -1,
            objectPosition: 'center',
          }}
        />
      </ImageWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  /* border: 1px solid red; */
  max-width: 1440px;
  margin: 0 auto;
  padding: 150px 80px 0px 80px;

  @media (max-width: 768px) {
    padding: 100px 20px 0px 20px;
  }

  @media (max-width: 480px) {
    padding: 80px 15px 0px 15px;
  }
`

const TextWrapper = styled.div`
  /* border: 1px solid red; */
`

const Title = styled.div`
  /* border: 1px solid red; */
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 12px;
  }
`

const SubTitle = styled.div`
  /* border: 1px solid red; */
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
    br {
      display: none;
    }
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 25px;
  }
`

const ButtonsWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`

const StyledButton = styled(Button)`
  /* border: 1px solid red; */
  background: linear-gradient(to bottom, #044f71, #0075aa) !important;
  color: #ffffff !important;
  border: none;
  /* width: fit-content; */
  min-width: 190px;
  height: 55px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 28px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
  transition: box-shadow 0.3s ease;
  padding: 0px 20px;

  &:hover,
  &:focus {
    filter: brightness(0.92);
    color: #ffffff !important;
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.25);
  }

  @media (max-width: 768px) {
    height: 50px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    min-width: 100%;
    height: 45px;
    font-size: 15px;
  }
`

const ImageWrapper = styled.div`
  /* border: 1px solid red; */
  position: relative;
  z-index: -1;
  width: 1000px;
  height: 450px;
  margin: 150px auto 100px auto;

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

  @media (max-width: 1150px) {
    width: 100%;
    height: 400px;
    margin: 120px auto 80px auto;
  }

  @media (max-width: 768px) {
    height: 300px;
    margin: 80px auto 60px auto;
  }

  @media (max-width: 480px) {
    height: 250px;
    margin: 60px auto 40px auto;
  }
`
