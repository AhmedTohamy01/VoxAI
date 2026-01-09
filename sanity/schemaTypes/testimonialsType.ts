import { SparklesIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const testimonialsType = defineType({
  name: 'testimonials',
  title: 'Testimonials Section',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'head',
      title: 'Head',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'customerCards',
      title: 'Customer Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'customerCard',
          fields: [
            defineField({
              name: 'image',
              title: 'Customer Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alternative text',
                  type: 'string',
                }),
              ],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Testimonial Text',
              type: 'text',
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'name',
              title: 'Customer Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'company',
              title: 'Company Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'company',
              media: 'image',
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'customerCards.0.image',
    },
  },
})
