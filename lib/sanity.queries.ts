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
