import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name / ឈ្មោះ',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'key',
      title: 'Short ID',
      type: 'slug',
      description: 'Used by the website. Click Generate once and leave it.',
      options: {source: 'name.en'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order on the page',
      type: 'number',
      description: 'Smaller numbers show first.',
    }),
  ],
  orderings: [{title: 'Order on the page', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {
    select: {title: 'name.en', subtitle: 'name.km'},
  },
})
