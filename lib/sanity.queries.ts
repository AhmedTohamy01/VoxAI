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

export interface CustomerCard {
  imageUrl: string
  imageAlt?: string
  text: string
  name: string
  company: string
}

export interface TestimonialsData {
  head: string
  title: string
  subtitle: string
  customerCards: CustomerCard[]
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

export async function getTestimonialsData(): Promise<TestimonialsData | null> {
  try {
    const testimonials = await client.fetch(`
      *[_type == "testimonials"][0] {
        head,
        title,
        subtitle,
        customerCards[] {
          image,
          text,
          name,
          company
        }
      }
    `)

    if (!testimonials) {
      return null
    }

    // Build image URLs for each customer card
    const customerCards: CustomerCard[] = testimonials.customerCards
      ? testimonials.customerCards.map((card: any) => ({
          imageUrl: card.image
            ? urlFor(card.image).width(65).height(65).url()
            : '',
          imageAlt: card.image?.alt || 'customer photo',
          text: card.text || '',
          name: card.name || '',
          company: card.company || '',
        }))
      : []

    return {
      head: testimonials.head || '',
      title: testimonials.title || '',
      subtitle: testimonials.subtitle || '',
      customerCards: customerCards,
    }
  } catch (error) {
    console.error('Error fetching testimonials data:', error)
    return null
  }
}
