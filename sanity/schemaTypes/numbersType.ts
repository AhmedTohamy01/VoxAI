import { SparklesIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const numbersType = defineType({
  name: 'numbers',
  title: 'Numbers Section',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stat',
          fields: [
            defineField({
              name: 'number',
              title: 'Number',
              type: 'number',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'suffix',
              title: 'Suffix',
              type: 'string',
              description:
                'Add suffix like %, K+, /7, etc. For currency, use $K+ (will display as $77K+). Leave empty if no suffix needed.',
              placeholder: '%, $K+, /7, etc.',
            }),
            defineField({
              name: 'text',
              title: 'Description Text',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              number: 'number',
              suffix: 'suffix',
              text: 'text',
            },
            prepare({ number, suffix, text }) {
              return {
                title: `${number}${suffix || ''}`,
                subtitle: text,
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      stats: 'stats',
    },
    prepare({ stats }) {
      return {
        title: 'Numbers Section',
        subtitle: `${stats?.length || 0} statistics`,
      }
    },
  },
})
