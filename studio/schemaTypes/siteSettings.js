import {defineArrayMember, defineField, defineType} from 'sanity'

const str = (name, title, group, description) =>
  defineField({name, title, type: 'localeString', group, description})

const para = (name, title, group, description) =>
  defineField({name, title, type: 'localeText', group, description})

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Page text and photos',
  type: 'document',
  groups: [
    {name: 'brand', title: 'Shop name', default: true},
    {name: 'home', title: 'Top of page'},
    {name: 'craft', title: 'Our craft'},
    {name: 'collection', title: 'Collection'},
    {name: 'services', title: 'Services'},
    {name: 'reviews', title: 'Reviews'},
    {name: 'location', title: 'Location'},
    {name: 'social', title: 'Social media'},
  ],
  fields: [
    // Shop name
    str('shopName', 'Shop name / ឈ្មោះហាង', 'brand'),
    defineField({
      name: 'logo',
      title: 'Logo / ឡូហ្គោ',
      type: 'image',
      group: 'brand',
      description: 'Use a PNG with a transparent background so it looks right in light and dark mode.',
    }),

    // Top of page
    str('heroEyebrow', 'Small line above the title', 'home'),
    str('heroTitle', 'Main title / ចំណងជើងធំ', 'home'),
    para('heroLede', 'Intro paragraph / សេចក្តីណែនាំ', 'home'),
    defineField({
      name: 'heroBackground',
      title: 'Background photo / រូបផ្ទៃខាងក្រោយ',
      type: 'image',
      group: 'home',
      description: 'A wide photo with dark space on the left works best. The text sits on the left side.',
    }),
    defineField({name: 'heroImage', title: 'Main photo (no longer used)', type: 'image', group: 'home', hidden: true}),
    defineField({name: 'heroCaption', title: 'Caption (no longer used)', type: 'localeString', group: 'home', hidden: true}),
    str('heroAlt', 'Background photo description', 'home', 'Describe the photo for people using screen readers.'),
    defineField({name: 'heroSide1', title: 'Small photo 1 (no longer used)', type: 'image', group: 'home', hidden: true}),
    defineField({name: 'heroSide2', title: 'Small photo 2 (no longer used)', type: 'image', group: 'home', hidden: true}),
    str('fact1', 'Fact 1 (hand icon)', 'home'),
    str('fact2', 'Fact 2 (calendar icon)', 'home'),
    str('fact3', 'Fact 3 (map pin)', 'home'),

    // Our craft
    str('craftEyebrow', 'Small line above the title', 'craft'),
    str('craftTitle', 'Section title', 'craft'),
    para('craftText', 'Section intro', 'craft'),
    defineField({
      name: 'techniques',
      title: 'Techniques (3 cards) / បច្ចេកទេស',
      type: 'array',
      group: 'craft',
      validation: (rule) => rule.max(3),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'technique',
          fields: [
            defineField({name: 'title', title: 'Name', type: 'localeString'}),
            defineField({name: 'text', title: 'Description', type: 'localeText'}),
            defineField({name: 'image', title: 'Photo', type: 'image', options: {hotspot: true}}),
          ],
          preview: {
            select: {title: 'title.en', subtitle: 'title.km', media: 'image'},
          },
        }),
      ],
    }),
    str('markTitle', 'សធ mark: title', 'craft'),
    para('markText', 'សធ mark: text', 'craft'),

    // Collection
    str('colEyebrow', 'Small line above the title', 'collection'),
    str('colTitle', 'Section title', 'collection'),
    para('colText', 'Section intro', 'collection'),

    // Services
    str('svcEyebrow', 'Small line above the title', 'services'),
    str('svcTitle', 'Section title', 'services'),
    para('svcText', 'Section intro', 'services'),
    defineField({
      name: 'svcBackground',
      title: 'Background photo / រូបផ្ទៃខាងក្រោយ',
      type: 'image',
      group: 'services',
      description: 'A wide, detailed photo. It is darkened so the text stays readable.',
    }),
    defineField({
      name: 'services',
      title: 'Services / សេវាកម្ម',
      type: 'array',
      group: 'services',
      description: 'Each service is one card. Drag to reorder.',
      validation: (rule) => rule.max(6),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'service',
          fields: [
            defineField({name: 'image', title: 'Photo', type: 'image', options: {hotspot: true}}),
            defineField({name: 'title', title: 'Service name', type: 'localeString'}),
            defineField({name: 'text', title: 'Description', type: 'localeText'}),
            defineField({
              name: 'metals',
              title: 'Metals (separate with commas)',
              type: 'localeString',
              description: 'For example: Silver, Copper / ប្រាក់, ស្ពាន់',
            }),
          ],
          preview: {select: {title: 'title.en', subtitle: 'title.km', media: 'image'}},
        }),
      ],
    }),

    // Reviews
    str('rvEyebrow', 'Small line above the title', 'reviews'),
    str('rvTitle', 'Section title', 'reviews'),
    defineField({name: 'googleRating', title: 'Google rating', type: 'number', group: 'reviews', description: 'For example 4.8', validation: (rule) => rule.min(0).max(5)}),
    defineField({name: 'googleReviewCount', title: 'Number of Google reviews', type: 'number', group: 'reviews'}),
    defineField({name: 'googleReviewsUrl', title: 'Google reviews link', type: 'url', group: 'reviews', description: 'Used by the "Write a review" and "See all reviews" buttons.'}),

    // Location
    str('inviteEyebrow', 'Invitation (40+ band): small line at the top', 'location'),
    str('inviteYears', 'Invitation: words next to "40+"', 'location'),
    str('inviteTitle', 'Invitation: title', 'location'),
    para('inviteText', 'Invitation: text', 'location'),
    str('inviteStat1', 'Invitation: words under "1990"', 'location'),
    str('inviteStat2Num', 'Invitation: second highlight', 'location'),
    str('inviteStat2', 'Invitation: words under the second highlight', 'location'),
    str('inviteBtn', 'Invitation: map button', 'location'),
    str('inviteCall', 'Invitation: call button', 'location'),
    str('locEyebrow', 'Small line above the title', 'location'),
    str('locTitle', 'Section title', 'location'),
    para('locText', 'Section intro', 'location'),
    str('rowAreaVal', 'Area / តំបន់', 'location'),
    str('rowAddressVal', 'Address / អាសយដ្ឋាន', 'location'),
    str('rowPhoneVal', 'Phone / ទូរស័ព្ទ', 'location'),
    str('rowHoursVal', 'Opening hours / ម៉ោងបើក', 'location'),
    para('rowOrdersVal', 'Orders / កុម្ម៉ង់', 'location'),
    defineField({name: 'signImage', title: 'Shop sign photo / រូបផ្លាកហាង', type: 'image', group: 'location'}),
    str('signCaption', 'Caption under the sign photo', 'location'),
    defineField({name: 'mapsUrl', title: 'Google Maps link', type: 'url', group: 'location'}),
    defineField({name: 'latitude', title: 'Map pin latitude', type: 'number', group: 'location'}),
    defineField({name: 'longitude', title: 'Map pin longitude', type: 'number', group: 'location'}),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook link',
      type: 'url',
      group: 'social',
      description: 'Leave empty to hide the Facebook button.',
    }),
    defineField({
      name: 'telegramUrl',
      title: 'Telegram link',
      type: 'url',
      group: 'social',
      description: 'For example https://t.me/username. Leave empty to hide the button.',
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'TikTok link',
      type: 'url',
      group: 'social',
      description: 'Leave empty to hide the button.',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram link',
      type: 'url',
      group: 'social',
      description: 'Leave empty to hide the button.',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Page text and photos'}),
  },
})
