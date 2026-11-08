import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {projectId, dataset} from './project.js'
import {schemaTypes} from './schemaTypes/index.js'

const SINGLETON = 'siteSettings'

export default defineConfig({
  name: 'default',
  title: 'Sothea Khmer Silver Handicrafts',
  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website content / មាតិកាគេហទំព័រ')
          .items([
            S.listItem()
              .title('Page text and photos / អត្ថបទ និងរូបភាព')
              .id(SINGLETON)
              .child(S.document().schemaType(SINGLETON).documentId(SINGLETON)),
            S.divider(),
            S.documentTypeListItem('product').title('Products / ផលិតផល'),
            S.documentTypeListItem('category').title('Categories / ប្រភេទ'),
            S.documentTypeListItem('review').title('Reviews / មតិអតិថិជន'),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => schemaType !== SINGLETON),
  },

  document: {
    actions: (actions, {schemaType}) =>
      schemaType === SINGLETON
        ? actions.filter(({action}) => ['publish', 'discardChanges', 'restore'].includes(action))
        : actions,
  },
})
