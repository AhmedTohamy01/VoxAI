import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
