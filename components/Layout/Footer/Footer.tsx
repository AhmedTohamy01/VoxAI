'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react'
import { useRef } from 'react'

/*---> Component <---*/
export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Custom X (Twitter) Icon Component
  const XIcon = ({ size = 20 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
    </svg>
  )

  return (
    <FooterWrapper
      // ref={ref}
      // as={motion.div}
      // initial={{ opacity: 0, y: 50 }}
      // animate={isInView ? { opacity: 1, y: 0 } : {}}
      // transition={{ duration: 3, ease: 'easeOut' }}
    >
      <FooterContent>
        {/* Main Content Section */}
        <MainSection>
          <MainColumns>
            <MainColumn>
              <ColumnTitle>Products</ColumnTitle>
              <MainLink href='/ai-receptionist'>AI Receptionist</MainLink>
              <MainLink href='/outreach-campaigns'>Outreach Campaigns</MainLink>
              <MainLink href='/chat'>Chat</MainLink>
              <MainLink href='/plans-pricing'>Plans & pricing</MainLink>
              <MainLink href='/how-it-works'>How it works</MainLink>
              <MainLink href='/what-we-do'>What we do</MainLink>
              <MainLink href='/cities-we-serve'>Cities we serve</MainLink>
              <MainLink href='/client-reviews'>Client reviews</MainLink>
              <MainLink href='/case-studies'>Case studies</MainLink>
            </MainColumn>

            <MainColumn>
              <ColumnTitle>Solutions</ColumnTitle>
              <MainLink href='/appointment-booking'>
                Appointment booking
              </MainLink>
              <MainLink href='/crm-integration'>CRM integration</MainLink>
              <MainLink href='/call-recording'>
                Call recording & transcriptions
              </MainLink>
              <MainLink href='/call-intelligence'>
                Call intelligence & analytics
              </MainLink>
              <MainLink href='/bilingual-answering'>
                Bilingual answering
              </MainLink>
              <MainLink href='/after-hours-answering'>
                After-hours answering
              </MainLink>
              <MainLink href='/payment-collection'>Payment collection</MainLink>
            </MainColumn>

            <MainColumn>
              <ColumnTitle>Industries</ColumnTitle>
              <MainLink href='/home-services'>Home services</MainLink>
              <MainLink href='/software-saas'>Software & SaaS</MainLink>
              <MainLink href='/marketing-agencies'>Marketing agencies</MainLink>
              <MainLink href='/general-contractors'>
                General contractors
              </MainLink>
              <MainLink href='/finance'>Finance</MainLink>
              <MainLink href='/medical-wellness'>Medical & wellness</MainLink>
              <MainLink href='/hiring-staffing'>Hiring & staffing</MainLink>
              <MainLink href='/insurance'>Insurance</MainLink>
            </MainColumn>

            <MainColumn>
              <ColumnTitle>Partners</ColumnTitle>
              <MainLink href='/small-business'>Small business</MainLink>
              <MainLink href='/mid-market'>Mid-market</MainLink>
              <MainLink href='/enterprise'>Enterprise</MainLink>
              <MainLink href='/franchise'>Franchise</MainLink>
              <MainLink href='/agency'>Agency</MainLink>
              <MainLink href='/consultant'>Consultant</MainLink>
            </MainColumn>

            <MainColumn>
              <ColumnTitle>Company</ColumnTitle>
              <MainLink href='/referral-affiliates'>
                Referral affiliates
              </MainLink>
              <MainLink href='/resellers'>Resellers</MainLink>
              <MainLink href='/wholesale'>Wholesale</MainLink>
              <MainLink href='/integrations'>Integrations</MainLink>
              <MainLink href='/partner-testimonials'>
                Partner testimonials
              </MainLink>
            </MainColumn>

            <MainColumn>
              <ColumnTitle>Resources</ColumnTitle>
              <MainLink href='/support-training'>Support & training</MainLink>
              <MainLink href='/blog-news'>Blog & news</MainLink>
              <MainLink href='/press-room'>Press room</MainLink>
              <MainLink href='/share-feedback'>Share feedback</MainLink>
              <MainLink href='/developer-api'>Developer API</MainLink>
              <MainLink href='/corporate-careers'>Corporate careers</MainLink>
              <MainLink href='/contact-us'>Contact us</MainLink>
            </MainColumn>
          </MainColumns>
        </MainSection>

        {/* Bottom Section */}
        <BottomSection>
          <BottomLeft>
            <Link href='/'>
              <Image
                src='/img/recepta-logo.avif'
                alt='ReceptaAI Logo'
                width={50}
                height={50}
              />
            </Link>
            <CopyrightText>
              VoxAI, INC. ©{new Date().getFullYear()} ALL RIGHTS RESERVED
            </CopyrightText>
          </BottomLeft>
          <BottomCenter>
            <SocialLinks>
              <SocialLink
                href='https://facebook.com'
                target='_blank'
                aria-label='Facebook'
              >
                <Facebook size={20} />
              </SocialLink>
              <SocialLink
                href='https://x.com'
                target='_blank'
                aria-label='X (Twitter)'
              >
                <XIcon size={20} />
              </SocialLink>
              <SocialLink
                href='https://linkedin.com'
                target='_blank'
                aria-label='LinkedIn'
              >
                <Linkedin size={20} />
              </SocialLink>
              <SocialLink
                href='https://instagram.com'
                target='_blank'
                aria-label='Instagram'
              >
                <Instagram size={20} />
              </SocialLink>
            </SocialLinks>
          </BottomCenter>
          <BottomRight>
            <LegalLink href='/terms'>TERMS OF SERVICE</LegalLink>
            <LegalLink href='/privacy'>PRIVACY POLICY</LegalLink>
            <LegalLink href='/transparency'>TRANSPARENCY IN COVERAGE</LegalLink>
          </BottomRight>
        </BottomSection>
      </FooterContent>

      {/* Floating Chat Bubble */}
      <FloatingChatBubble href='/chat' aria-label='Chat with us'>
        <MessageCircle size={24} />
      </FloatingChatBubble>
    </FooterWrapper>
  )
}

/*---> Styles <---*/
const FooterWrapper = styled.footer`
  color: #ffffff;
  position: relative;
  padding-top: 40px;
`

const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const MainSection = styled.div`
  padding: 40px 0;
`

const MainColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ColumnTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px 0;
`

const MainLink = styled(Link)`
  color: #b0b0b0;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  line-height: 1.4;

  &:hover {
    color: #ffffff;
  }
`

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`

const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CopyrightText = styled.p`
  color: #b0b0b0;
  font-size: 12px;
  margin: 0;
`

const BottomCenter = styled.div`
  display: flex;
  justify-content: center;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #f5f0e7;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`

const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    align-items: center;
  }
`

const LegalLink = styled(Link)`
  color: #b0b0b0;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`

const FloatingChatBubble = styled(Link)`
  position: fixed;
  bottom: 30px;
  width: 60px;
  height: 60px;
  background: linear-gradient(to bottom, #044f71, #0075aa);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(4, 79, 113, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;

  /* Position relative to the 1440px max-width container */
  left: calc(50% + 720px - 30px);
  transform: translateX(-100%);

  @media (max-width: 1440px) {
    left: auto;
    right: 30px;
    transform: none;
  }

  &:hover {
    filter: brightness(0.92);
    transform: translateX(-100%) scale(1.1);

    @media (max-width: 1440px) {
      transform: scale(1.1);
    }
  }
`
