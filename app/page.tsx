import HomeCompound from '@/compounds/HomeCompound'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'VoxAI | AI-Powered Call Center Solutions',
    template: '%s | VoxAI',
  },
  description:
    'Transform your customer service with VoxAI — the next-generation AI call center solution. 24/7 intelligent agents, seamless integration, and superior customer experience.',
  openGraph: {
    title: 'VoxAI | AI-Powered Call Center Solutions',
    description:
      'VoxAI provides AI-driven call center solutions for modern businesses.',
    url: 'https://www.VoxAI.com',
    siteName: 'VoxAI',
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
    canonical: 'https://www.VoxAI.com',
  },
}

// Enable ISR (Incremental Static Regeneration)
// This will revalidate the page every 60 seconds, so changes in Sanity Studio
// will be reflected within a minute
export const revalidate = 60

export default function Home() {
  return <HomeCompound />
}
