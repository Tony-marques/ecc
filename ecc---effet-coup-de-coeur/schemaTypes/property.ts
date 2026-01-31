import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'property',
  title: 'Bien immobilier',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre (Français)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      description: '🇬🇧 Optionnel - Si vide, la version française sera utilisée',
    }),
    defineField({
      name: 'city',
      title: 'Ville / City',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Nom de la ville (utilisé pour FR et EN)',
    }),
    defineField({
      name: 'summary',
      title: 'Résumé (Français)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'summaryEn',
      title: 'Summary (English)',
      type: 'text',
      rows: 3,
      description: '🇬🇧 Optionnel - Si vide, la version française sera utilisée',
    }),
    defineField({
      name: 'capacity',
      title: 'Capacité (personnes)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'bedrooms',
      title: 'Chambres',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'airbnbUrl',
      title: 'URL Airbnb',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Une seule image par bien',
    }),
    defineField({
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          {title: 'En attente', value: 'pending'},
          {title: 'Publié', value: 'published'},
        ],
      },
      initialValue: 'pending',
    }),
    defineField({
      name: 'createdAt',
      title: 'Date de création',
      type: 'date',
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
    }),
    defineField({
      name: 'isNew',
      title: 'Afficher le badge "Nouveau"',
      type: 'boolean',
      description: 'Cochez pour afficher le badge "Nouveau" sur ce bien',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      city: 'city',
      media: 'images.0',
      status: 'status',
    },
    prepare(selection) {
      const {title, city, media, status} = selection
      return {
        title: title,
        subtitle: `${city} - ${status === 'published' ? 'Publié' : 'En attente'}`,
        media: media,
      }
    },
  },
})
