import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
    description: 'Images utilisées sur le site'
  },
  labels: {
    plural: 'Des médias',
    singular: 'médias'
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Texte alternatif',
      admin: {
        description:
          "Ceci est utilisé à des fins d'accessibilité. Il n'est pas visible pour l'utilisateur.",
        placeholder: "Exemple: Une photo d'un homme souriant utilisant un ordinateur portable"
      }
    }
  ],
  upload: {
    staticURL: '/media',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*']
  }
}
