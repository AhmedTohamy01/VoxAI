'use client'
import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'
import { Phone, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

/*---> Component <---*/
export default function Navbar() {
  const [showShadow, setShowShadow] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ref = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowShadow(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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

        {/* Desktop Phone and Login */}
        <PhoneLoginWrapper className='desktop-only'>
          <a href='tel:+1 555 123 4567' aria-label='Call us'>
            <PhoneIcon />
          </a>
          <a href='tel:+1 555 123 4567' aria-label='Call us'>
            <PhoneNumber>+1 (333) 123-4567</PhoneNumber>
          </a>
          <StyledButton>Login</StyledButton>
        </PhoneLoginWrapper>

        {/* Mobile Menu Button */}
        <MenuButton
          className='mobile-only'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuButton>
      </ContentWrapper>

      {/* Desktop Navigation Links */}
      <LinksWrapper className='desktop-only'>
        <NavLink>Products</NavLink>
        <NavLink>Solutions</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Partners</NavLink>
        <NavLink>Company</NavLink>
      </LinksWrapper>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenuOverlay
            ref={menuRef}
            as={motion.div}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={e => {
              if (e.target === e.currentTarget) {
                setIsMenuOpen(false)
              }
            }}
          >
            <MobileMenuContent>
              <MobileMenuHeader>
                <Link href={'/'} onClick={() => setIsMenuOpen(false)}>
                  <Image
                    src='/img/recepta-logo.avif'
                    alt='company logo'
                    width={40}
                    height={40}
                  />
                </Link>
                <CloseButton onClick={toggleMenu}>
                  <X size={24} />
                </CloseButton>
              </MobileMenuHeader>

              <MobileNavLinks>
                <MobileNavLink onClick={() => setIsMenuOpen(false)}>
                  Products
                </MobileNavLink>
                <MobileNavLink onClick={() => setIsMenuOpen(false)}>
                  Solutions
                </MobileNavLink>
                <MobileNavLink onClick={() => setIsMenuOpen(false)}>
                  Pricing
                </MobileNavLink>
                <MobileNavLink onClick={() => setIsMenuOpen(false)}>
                  Partners
                </MobileNavLink>
                <MobileNavLink onClick={() => setIsMenuOpen(false)}>
                  Company
                </MobileNavLink>
                <MobileNavLink onClick={() => setIsMenuOpen(false)}>
                  <MobilePhoneSection>
                    <a href='tel:+1 555 123 4567' aria-label='Call us'>
                      <PhoneIcon />
                    </a>
                    <a href='tel:+1 555 123 4567' aria-label='Call us'>
                      <PhoneNumber>+1 (333) 123-4567</PhoneNumber>
                    </a>
                  </MobilePhoneSection>
                </MobileNavLink>
                <MobileLoginButton>Login</MobileLoginButton>
              </MobileNavLinks>
            </MobileMenuContent>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
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

  @media (max-width: 1024px) {
    padding: 8px 40px 30px 40px;
  }

  @media (max-width: 768px) {
    padding: 8px 20px 30px 20px;
  }
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
  color: #f5f0e7;
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
  color: #f5f0e7;
  transition: color 0.3s ease;

  &:hover {
    color: #0075aa;
  }
`

const PhoneIcon = styled(Phone)`
  /* border: 1px solid red; */
  color: #f5f0e7;
  width: 20px;
  margin-top: 4px;
  margin-right: -2px;
`

// Mobile Menu Styles
const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #f5f0e7;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 1150px) {
    display: block;
  }
`

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  backdrop-filter: blur(4px);

  @media (min-width: 1151px) {
    display: none;
  }
`

const MobileMenuContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: #282825;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #f5f0e7;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const MobileNavLinks = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  margin-top: -20px;
`

const MobileNavLink = styled.div`
  /* border: 1px solid red; */
  color: #f5f0e7;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  padding: 12px 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: color 0.3s ease;

  &:hover {
    color: #0075aa;
  }
`

const MobilePhoneSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`

const MobileLoginButton = styled(Button)`
  background: linear-gradient(to bottom, #044f71, #0075aa) !important;
  color: #ffffff !important;
  border: none;
  width: 100%;
  height: 50px;
  font-size: 16px;
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

// Responsive utility classes
const globalStyles = `
  .desktop-only {
    @media (max-width: 1150px) {
      display: none !important;
    }
  }

  .mobile-only {
    @media (min-width: 1151px) {
      display: none !important;
    }
  }
`

// Add global styles to document
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = globalStyles
  document.head.appendChild(style)
}
