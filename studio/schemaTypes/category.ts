import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'discipline',
      title: 'Discipline',
      type: 'string',
      description: 'Associates this category with a discipline for color-coding',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'BJJ', value: 'bjj' },
          { title: 'Urban Kiz', value: 'kiz' },
        ],
      },
      initialValue: 'general',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
