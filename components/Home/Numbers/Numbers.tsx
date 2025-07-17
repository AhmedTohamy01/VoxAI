'use client'
import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
export default function Numbers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  function useCountUp(start: boolean, end: number, duration = 2000) {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!start) return

      let current = 0
      const incrementTime = 30
      const steps = duration / incrementTime
      const step = end / steps

      const interval = setInterval(() => {
        current += step
        if (current >= end) {
          current = end
          clearInterval(interval)
        }
        setCount(Math.floor(current))
      }, incrementTime)

      return () => clearInterval(interval)
    }, [start, end, duration])

    return count
  }

  const count1 = useCountUp(isInView, 80)
  const count2 = useCountUp(isInView, 77)
  const count3 = useCountUp(isInView, 24)

  return (
    <MainWrapper ref={ref}>
      <NumberBlock>
        <Number>{count1}%</Number>
        <Text>
          of callers hang up if they reach your
          <br /> business voicemail — and call your
          <br /> competitors instead
        </Text>
      </NumberBlock>
      <NumberBlock>
        <Number>${count2}K+</Number>
        <Text>
          in expected costs to hire and train an
          <br /> in-house receptionist — who only
          <br /> answers during their working hours
        </Text>
      </NumberBlock>
      <NumberBlock>
        <Number>{count3}/7</Number>
        <Text>
          call coverage when you sign up for
          <br /> Smith.ai — with human or AI
          <br />
          receptionists available to answer every
          <br /> time
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
  padding: 80px 80px 40px 80px;
  background-color: #1a1a1a;
  display: flex;
  justify-content: space-between;
`

const NumberBlock = styled.div`
  /* border: 1px solid red; */
  width: fit-content;
  height: 225px;
`

const Number = styled.div`
  /* border: 1px solid red; */
  font-size: 110px;
  font-weight: 700;
  background: linear-gradient(90deg, #0075aa, #044f71 55%, #044f71);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`

const Text = styled.div`
  /* border: 1px solid red; */
  text-align: center;
  font-size: 20px;
  line-height: 1.5;
`
