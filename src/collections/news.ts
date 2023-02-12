import type { CollectionConfig } from 'payload/types'

import { slugField } from '../fields/slug'

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
    description: 'Actualités'
  },
  labels: {
    plural: 'Actualités',
    singular: 'actualité'
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
        description: "Titre de l'actualité",
        placeholder: 'Exemple: Nouvelle fonctionnalité'
      }
    },
    slugField(),
    {
      name: 'cover',
      type: 'upload',
      required: true,
      label: 'Couverture',
      relationTo: 'media',
      admin: {
        description: "Image de couverture de l'actualité"
      }
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      label: 'Publié le',
      admin: {
        description: "Date de publication de l'actualité",
        position: 'sidebar'
      }
    },
    {
      name: 'author',
      type: 'relationship',
      required: true,
      label: 'Auteur',
      relationTo: 'team',
      admin: {
        description: "Auteur de l'actualité",
        position: 'sidebar'
      }
    },
    {
      name: 'published',
      type: 'radio',
      required: true,
      label: 'Publié',
      options: [
        {
          label: 'Oui',
          value: 'true'
        },
        {
          label: 'Non',
          value: 'false'
        }
      ],
      defaultValue: 'false',
      admin: {
        description: "Publier l'actualité",
        position: 'sidebar'
      }
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      label: 'Extrait',
      admin: {
        description: "Extrait de l'actualité",
        placeholder: 'Exemple: Une nouvelle fonctionnalité a été ajoutée au site',
        position: 'sidebar'
      }
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Contenu',
      admin: {
        description: "Contenu de l'actualité"
      }
    }
  ]
}
