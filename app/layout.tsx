import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry'
import Navbar from '@/components/Layout/Navbar/Navbar'

export const metadata: Metadata = {
  title: {
    default: 'ReceptaAI | AI-Powered Call Center Solutions',
    template: '%s | ReceptaAI',
  },
  description:
    'Transform your customer service with ReceptaAI — the next-generation AI call center solution. 24/7 intelligent agents, seamless integration, and superior customer experience.',
  openGraph: {
    title: 'ReceptaAI | AI-Powered Call Center Solutions',
    description:
      'ReceptaAI provides AI-driven call center solutions for modern businesses.',
    url: 'https://www.receptaai.com',
    siteName: 'ReceptaAI',
    type: 'website',
  } satisfies Metadata['openGraph'],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.receptaai.com',
  },
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <Navbar />
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
