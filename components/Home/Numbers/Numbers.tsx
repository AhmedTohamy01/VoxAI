'use client'
import styled from 'styled-components'
import { Button } from 'antd'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/*---> Component <---*/
export default function Numbers() {
  return (
    <MainWrapper>
      <NumberBlock>
        <Number>80%</Number>
        <Text>
          of callers hang up if they reach your
          <br /> business voicemail — and call your
          <br /> competitors instead
        </Text>
      </NumberBlock>
      <NumberBlock>
        <Number>$77K+</Number>
        <Text>
          in expected costs to hire and train an<br /> in-house receptionist — who
          only<br /> answers during their working hours
        </Text>
      </NumberBlock>
      <NumberBlock>
        <Number>24/7</Number>
        <Text>
          call coverage when you sign up for<br /> Smith.ai — with human or AI<br />
          receptionists available to answer every<br /> time
        </Text>
      </NumberBlock>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  /* border: 1px solid red; */
  max-width: 1440px;
  margin: 0 auto;
  padding: 150px 80px 0px 80px;
  background-color: #1a1a1a;
  height: 500px;
  display: flex;
  justify-content: space-between;
`

const NumberBlock = styled.div`
  border: 1px solid red;
  width: fit-content;
  height: 225px;
`

const Number = styled.div`
  border: 1px solid red;
  font-size: 110px;
  font-weight: 700;
  background: linear-gradient(90deg, #0075aa, #044f71 55%, #044f71);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Text = styled.div`
  border: 1px solid red;
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
