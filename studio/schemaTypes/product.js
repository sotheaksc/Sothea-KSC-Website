import {defineArrayMember, defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name / ឈ្មោះ',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description / ពិពណ៌នា',
      type: 'localeText',
    }),
    defineField({
      name: 'category',
      title: 'Category / ប្រភេទ',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Photos / រូបភាព',
      type: 'array',
      description: 'The first photo is the one shown in the collection grid. Drag to reorder.',
      of: [defineArrayMember({type: 'image', options: {hotspot: true}})],
      options: {layout: 'grid'},
      validation: (rule) => rule.required().min(1),
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
    select: {title: 'name.en', subtitle: 'name.km', media: 'images.0'},
  },
})
