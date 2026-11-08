import {defineField, defineType} from 'sanity'

export const review = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Reviewer name',
      type: 'string',
      description: 'As shown on Google.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Stars',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.required().min(1).max(5).integer(),
    }),
    defineField({
      name: 'text',
      title: 'Review text',
      type: 'localeText',
      description: 'Copy the review exactly as written. Add a Khmer version only if you have one; otherwise the English shows in both languages.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Year',
      type: 'string',
      description: 'For example 2026.',
    }),
    defineField({
      name: 'note',
      title: 'Note (optional)',
      type: 'localeString',
      description: 'For example: Translated from French',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Smaller numbers show first.',
    }),
  ],
  orderings: [{title: 'Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {
    select: {title: 'name', subtitle: 'text.en', rating: 'rating'},
    prepare: ({title, subtitle, rating}) => ({
      title: `${'★'.repeat(rating || 0)} ${title || ''}`,
      subtitle,
    }),
  },
})
