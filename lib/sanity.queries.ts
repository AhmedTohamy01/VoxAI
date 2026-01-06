import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export interface HeroData {
  title: string
  subtitle: string
  primaryButton: {
    text: string
    url: string
  }
  secondaryButton: {
    text: string
    url: string
  }
  heroImageUrl: string
  heroImageAlt?: string
}

export interface CallCoverageData {
  head: string
  title: string
  subtitle: string
  imageUrl: string
  imageAlt?: string
}

export async function getHeroData(): Promise<HeroData | null> {
  try {
    const hero = await client.fetch(`
      *[_type == "hero"][0] {
        title,
        subtitle,
        primaryButton {
          text,
          url
        },
        secondaryButton {
          text,
          url
        },
        heroImage
      }
    `)

    if (!hero) {
      return null
    }

    // Build image URL using Sanity's image URL builder
    const imageUrl = hero.heroImage
      ? urlFor(hero.heroImage).width(1000).height(450).url()
      : ''

    return {
      title: hero.title || '',
      subtitle: hero.subtitle || '',
      primaryButton: {
        text: hero.primaryButton?.text || '',
        url: hero.primaryButton?.url || '',
      },
      secondaryButton: {
        text: hero.secondaryButton?.text || '',
        url: hero.secondaryButton?.url || '',
      },
      heroImageUrl: imageUrl,
      heroImageAlt: hero.heroImage?.alt || 'hero image',
    }
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return null
  }
}

export async function getCallCoverageData(): Promise<CallCoverageData | null> {
  try {
    const callCoverage = await client.fetch(`
      *[_type == "callCoverage"][0] {
        head,
        title,
        subtitle,
        image
      }
    `)

    if (!callCoverage) {
      return null
    }

    // Build image URL using Sanity's image URL builder
    const imageUrl = callCoverage.image
      ? urlFor(callCoverage.image).width(500).height(300).url()
      : ''

    return {
      head: callCoverage.head || '',
      title: callCoverage.title || '',
      subtitle: callCoverage.subtitle || '',
      imageUrl: imageUrl,
      imageAlt: callCoverage.image?.alt || 'Call coverage image',
    }
  } catch (error) {
    console.error('Error fetching call coverage data:', error)
    return null
  }
}
