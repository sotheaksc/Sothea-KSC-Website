import {defineField, defineType} from 'sanity'

export const localeString = defineType({
  name: 'localeString',
  title: 'Text in English and Khmer',
  type: 'object',
  options: {columns: 2},
  fields: [
    defineField({name: 'en', title: 'English', type: 'string'}),
    defineField({name: 'km', title: 'ខ្មែរ', type: 'string'}),
  ],
})

export const localeText = defineType({
  name: 'localeText',
  title: 'Paragraph in English and Khmer',
  type: 'object',
  fields: [
    defineField({name: 'en', title: 'English', type: 'text', rows: 3}),
    defineField({name: 'km', title: 'ខ្មែរ', type: 'text', rows: 3}),
  ],
})
