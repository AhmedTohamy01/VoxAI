'use client'
import { Button } from 'antd'
import { motion, useInView } from 'framer-motion'
import { CircleCheck } from 'lucide-react'
import { useRef } from 'react'
import styled from 'styled-components'

/*---> Types <---*/
type Props = {
  head: string
  title: string
  price: string
  subTitle: string
  benefits: string[]
  modelType: string
  questionText: string
}

/*---> Component <---*/
export default function AnsweringModelCard({
  head,
  title,
  price,
  subTitle,
  benefits,
  modelType,
  questionText,
}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <MainWrapper
      ref={ref}
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 3, ease: 'easeOut' }}
    >
      <Head>{head}</Head>
      <Title>{title}</Title>
      <Price>As low as ${price}/month</Price>
      <SubTitle>{subTitle}</SubTitle>
      <StyledButton>View Pricing for {modelType}</StyledButton>
      <StyledOutlineButton>Learn More About {modelType}</StyledOutlineButton>
      <Divider />
      <QuestionText>{questionText}</QuestionText>
      {benefits.map((benefit, index) => (
        <AnswerText key={index}>
          <CheckMarkIcon />
          {benefit}
        </AnswerText>
      ))}
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  /* border: 1px solid red; */
  width: 577px;
  border-radius: 20px;
  padding: 35px;
  background-color: #282825;

  @media (max-width: 1024px) {
    width: 500px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 16px;
  }
`

const Head = styled.div`
  /* border: 1px solid red; */
  font-size: 14px;
  font-weight: 500;
  color: #0075aa;
  margin-bottom: 20px;
`

const Title = styled.div`
  /* border: 1px solid red; */
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

const Price = styled.div`
  /* border: 1px solid red; */
  font-size: 20px;
  font-weight: 700;
  font-style: italic;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

const SubTitle = styled.div`
  /* border: 1px solid red; */
  font-size: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 25px;
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

  @media (max-width: 768px) {
    height: 50px;
    font-size: 16px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    height: 45px;
    font-size: 15px;
  }
`

const StyledOutlineButton = styled(Button)`
  background: transparent !important;
  color: #ffffff !important;
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
    color: #ffffff !important;
    border-color: #00aaff !important; /* slightly brighter border on hover */
    box-shadow: 0 6px 16px rgba(0, 117, 170, 0.4); /* a bit stronger but same hue */
  }

  &:active {
    transform: scale(0.98); /* optional: subtle click effect */
  }

  @media (max-width: 768px) {
    height: 50px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    height: 45px;
    font-size: 15px;
  }
`

const Divider = styled.div`
  border: 1px solid #857c77;
  margin: 30px 0px;

  @media (max-width: 768px) {
    margin: 25px 0px;
  }

  @media (max-width: 480px) {
    margin: 20px 0px;
  }
`

const Text = styled.div`
  /* border: 1px solid red; */
  font-size: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 25px;
  }
`

const QuestionText = styled.div`
  /* border: 1px solid red; */
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

const AnswerText = styled.div`
  /* border: 1px solid red; */
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    gap: 6px;
  }
`

const CheckMarkIcon = styled(CircleCheck)`
  /* border: 1px solid red; */
  color: #3fd653;
  width: 25px;
  height: 25px;

  @media (max-width: 768px) {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`
