import type { CollectionConfig } from 'payload/types'

import { slugField } from '../fields/slug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    description: 'Pages',
    defaultColumns: ['title', 'slug', 'published']
  },
  labels: {
    plural: 'Pages',
    singular: 'page'
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre',
      admin: {
        description: 'Titre de la page',
        placeholder: 'Exemple: À propos'
      }
    },
    slugField(),
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Contenu',
      admin: {
        description: 'Contenu de la page'
      }
    },
    {
      name: 'published',
      type: 'checkbox',
      label: 'Publié',
      admin: {
        description: 'Publier la page',
        position: 'sidebar'
      }
    }
  ]
}
