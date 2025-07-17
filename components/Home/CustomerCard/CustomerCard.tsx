'use client'
import styled from 'styled-components'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

/*---> Types <---*/
interface Props {
  imageUrl: string
  text: string
  name: string
  company: string
}

/*---> Component <---*/
export default function CustomerCard({ imageUrl, text, name, company }: Props) {
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
      <ImageWrapper>
        <Image
          src={imageUrl}
          alt='customer photo'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </ImageWrapper>
      <TextWrapper>
        <Text>{text}</Text>
        <Name>{name}</Name>
        <Company>{company}</Company>
      </TextWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  /* border: 1px solid red; */
  background-color: white;
  width: 380px;
  min-width: 380px;
  height: 235px;
  border-radius: 12px;
  padding: 20px;
  background-color: #fdfdfd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  display: flex;
  gap: 15px;
`

const ImageWrapper = styled.div`
  /* border: 1px solid blue; */
  position: relative;
  width: 65px;
  min-width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
`

const TextWrapper = styled.div`
  /* border: 1px solid yellow; */
  line-height: 1.5;
`

const Text = styled.div`
  /* border: 1px solid yellow; */
  color: #282825;
  margin-bottom: 20px;
`

const Name = styled.div`
  /* border: 1px solid yellow; */
  font-size: 20px;
  color: #282825;
  font-weight: 600;
`

const Company = styled.div`
  /* border: 1px solid yellow; */
  color: #85857a;
  font-size: 12px;
  font-weight: 500;
`
