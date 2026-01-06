'use client'
import styled from 'styled-components'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CallCoverageData } from '@/lib/sanity.queries'

interface CallCoverageProps {
  callCoverageData: CallCoverageData | null
}

/*---> Component <---*/
export default function CallCoverage({ callCoverageData }: CallCoverageProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Fallback data if Sanity data is not available
  const head = callCoverageData?.head || '24/7/365 ANSWERING'
  const title = callCoverageData?.title || 'Total call coverage, powered by AI + humans'
  const subtitle = callCoverageData?.subtitle || 'Whether it\'s after-hours or the midday rush, AI Receptionist and our live agents ensure your calls are always answered, so you never lose a lead.'
  const imageUrl = callCoverageData?.imageUrl || '/img/ai-agent-2.webp'
  const imageAlt = callCoverageData?.imageAlt || 'Ai agent image'

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
        <ImageMaskWrapper>
          <ImageWrapper
            ref={ref}
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 3, ease: 'easeOut' }}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
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

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ImageWrapper = styled(motion.div)`
  position: absolute;
  inset: 0;
`
