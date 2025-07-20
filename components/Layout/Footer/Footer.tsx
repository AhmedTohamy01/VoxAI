'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

/*---> Component <---*/
export default function Footer() {
  return (
    <FooterWrapper
      as={motion.footer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <FooterContent>
        <FooterTop>
          <LogoSection>
            <Link href="/">
              <Image
                src='/img/recepta-logo.avif'
                alt='ReceptaAI Logo'
                width={120}
                height={40}
              />
            </Link>
            <CompanyDescription>
              ReceptaAI is the leading AI-powered customer service platform that helps businesses deliver exceptional customer experiences through intelligent automation and human-like interactions.
            </CompanyDescription>
            <SocialLinks>
              <SocialLink href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter size={20} />
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin size={20} />
              </SocialLink>
              <SocialLink href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook size={20} />
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram size={20} />
              </SocialLink>
              <SocialLink href="https://youtube.com" target="_blank" aria-label="YouTube">
                <Youtube size={20} />
              </SocialLink>
            </SocialLinks>
          </LogoSection>

          <FooterColumns>
            <FooterColumn>
              <ColumnTitle>Product</ColumnTitle>
              <FooterLink href="/features">Features</FooterLink>
              <FooterLink href="/integrations">Integrations</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/api">API</FooterLink>
              <FooterLink href="/changelog">Changelog</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Solutions</ColumnTitle>
              <FooterLink href="/ecommerce">E-commerce</FooterLink>
              <FooterLink href="/healthcare">Healthcare</FooterLink>
              <FooterLink href="/financial">Financial Services</FooterLink>
              <FooterLink href="/education">Education</FooterLink>
              <FooterLink href="/enterprise">Enterprise</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Resources</ColumnTitle>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/documentation">Documentation</FooterLink>
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/webinars">Webinars</FooterLink>
              <FooterLink href="/case-studies">Case Studies</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Company</ColumnTitle>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/press">Press</FooterLink>
              <FooterLink href="/partners">Partners</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Legal</ColumnTitle>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/cookies">Cookie Policy</FooterLink>
              <FooterLink href="/security">Security</FooterLink>
              <FooterLink href="/compliance">Compliance</FooterLink>
            </FooterColumn>
          </FooterColumns>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            © 2024 ReceptaAI. All rights reserved.
          </Copyright>
          <ContactInfo>
            <ContactItem>
              <Mail size={16} />
              <span>support@receptaai.com</span>
            </ContactItem>
            <ContactItem>
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </ContactItem>
            <ContactItem>
              <MapPin size={16} />
              <span>San Francisco, CA</span>
            </ContactItem>
          </ContactInfo>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  )
}

/*---> Styles <---*/
const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #f5f0e7;
  padding: 60px 0 30px;
  margin-top: 80px;
`

const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const CompanyDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 14px;
  margin: 0;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
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

const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const FooterColumn = styled.div`
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

const FooterLink = styled(Link)`
  color: #b0b0b0;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  line-height: 1.4;

  &:hover {
    color: #ffffff;
  }
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`

const Copyright = styled.p`
  color: #b0b0b0;
  font-size: 14px;
  margin: 0;
`

const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #b0b0b0;
  font-size: 14px;

  svg {
    color: #f5f0e7;
  }
` 