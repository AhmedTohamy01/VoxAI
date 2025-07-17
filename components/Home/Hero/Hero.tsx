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
        <Title>
          24/7 Phone Support
          <br /> Zero Headcount
        </Title>
        <SubTitle>
          Recepta AI is the #1 receptionist to help small businesses capture
          <br /> every call — day or night <br />
          We answer, book, and follow up automatically <br />
          No hiring, no missed opportunities, no stress
        </SubTitle>
        <ButtonsWrapper>
          <StyledButton>Discover Recepta</StyledButton>
          <StyledButton>Request demo</StyledButton>
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
          src='/img/ai-agent-4.png'
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
`

const SubTitle = styled.div`
  /* border: 1px solid red; */
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 40px;
`

const ButtonsWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const StyledButton = styled(Button)`
  /* border: 1px solid red; */
  background: linear-gradient(to bottom, #044f71, #0075aa) !important;
  color: #ffffff !important;
  border: none;
  width: 190px;
  height: 55px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 28px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
  transition: box-shadow 0.3s ease;

  &:hover,
  &:focus {
    filter: brightness(0.92);
    color: #ffffff !important;
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.25);
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

  @media (max-width: 1024px) {
    width: 100%;
  }
`
