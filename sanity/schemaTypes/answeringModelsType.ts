import {SparklesIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const answeringModelsType = defineType({
  name: 'answeringModels',
  title: 'Answering Models Section',
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
      name: 'models',
      title: 'Answering Models',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'model',
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
              name: 'price',
              title: 'Price',
              type: 'string',
              description: 'Price value (e.g., "97.50" will display as "As low as $97.50/month")',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'subTitle',
              title: 'Subtitle',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'benefits',
              title: 'Benefits',
              type: 'array',
              of: [{type: 'string'}],
              validation: (rule) => rule.required().min(1),
            }),
            defineField({
              name: 'modelType',
              title: 'Model Type',
              type: 'string',
              description: 'Used in button text (e.g., "AI Receptionist", "Virtual Receptionist")',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'questionText',
              title: 'Question Text',
              type: 'string',
              description: 'Text that appears before benefits list',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'modelType',
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
      models: 'models',
    },
    prepare({title, models}) {
      return {
        title: title || 'Answering Models Section',
        subtitle: `${models?.length || 0} models`,
      }
    },
  },
})
