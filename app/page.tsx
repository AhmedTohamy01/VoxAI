import HomeCompound from '@/compounds/HomeCompound'
import { Metadata } from 'next'

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

export default function Home() {
  return <HomeCompound />
}
