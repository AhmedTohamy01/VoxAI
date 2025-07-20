'use client'
import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

/*---> Component <---*/
export default function Navbar() {
  const [showShadow, setShowShadow] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowShadow(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <MainWrapper
      $showshadow={showShadow}
      ref={ref}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <ContentWrapper>
        <Link href={'/'}>
          <Image
            src='/img/recepta-logo.avif'
            alt='company logo'
            width={50}
            height={50}
          />
        </Link>
        <PhoneLoginWrapper>
          <a href='tel:+1 555 123 4567' aria-label="Call us">
            <PhoneIcon />
          </a>
          <a href='tel:+1 555 123 4567' aria-label="Call us">
            <PhoneNumber>+1 (333) 123-4567</PhoneNumber>
          </a>
          <StyledButton>Login</StyledButton>
        </PhoneLoginWrapper>
      </ContentWrapper>
      <LinksWrapper>
        <NavLink>Products</NavLink>
        <NavLink>Solutions</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Partners</NavLink>
        <NavLink>Company</NavLink>
      </LinksWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div<{ $showshadow: boolean }>`
  /* border: 1px solid blue; */
  height: 70px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 8px 80px 30px 80px;
  z-index: 999;
  background-color: #282825;
  transition: box-shadow 0.3s ease;
  box-shadow: ${({ $showshadow }) =>
    $showshadow ? '0 4px 10px rgba(255, 255, 255, 0.08)' : 'none'};
`

const ContentWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PhoneLoginWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  gap: 10px;
`

const PhoneNumber = styled.div`
  /* border: 1px solid red; */
  cursor: pointer;
`

const StyledButton = styled(Button)`
  /* border: 1px solid red; */
  background: linear-gradient(to bottom, #044f71, #0075aa) !important;
  color: #ffffff !important;
  border: none;
  padding: 5px 15px;

  border-radius: 28px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
  transition: box-shadow 0.3s ease;
  margin: 0 auto !important;

  &:hover,
  &:focus {
    filter: brightness(0.92);
    color: #ffffff !important;
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.25);
  }
`

const LinksWrapper = styled.div`
  /* border: 1px solid blue; */
  width: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: -35px;

  @media (max-width: 1100px) {
    padding-right: 50px;
  }
`

const NavLink = styled.div`
  /* border: 1px solid red; */
  cursor: pointer;
`

const PhoneIcon = styled(Phone)`
  /* border: 1px solid red; */
  color: #f5f0e7;
  width: 20px;
  margin-top: 4px;
  margin-right: -2px;
`
