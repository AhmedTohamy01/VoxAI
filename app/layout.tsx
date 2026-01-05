'use client'
import Navbar from '@/components/Layout/Navbar/Navbar'
import Footer from '@/components/Layout/Footer/Footer'
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry'
import { Roboto } from 'next/font/google'
import styled from 'styled-components'
import { usePathname } from 'next/navigation'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isStudioRoute = pathname?.startsWith('/studio')

  return (
    <html lang='en'>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          {!isStudioRoute && (
            <StickyNavbarWrapper>
              <Navbar />
            </StickyNavbarWrapper>
          )}
          <main>{children}</main>
          {!isStudioRoute && <Footer />}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

/*---> Styles <---*/
const StickyNavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`
