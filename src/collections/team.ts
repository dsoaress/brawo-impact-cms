import type { CollectionConfig } from 'payload/types'

export const Team: CollectionConfig = {
  slug: 'team',
  admin: {
    useAsTitle: 'name',
    description: "Membres de l'équipe",
    defaultColumns: ['name', 'role', 'image', 'order']
  },
  labels: {
    plural: 'Équipe',
    singular: "membre de l'équipe"
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom',
      admin: {
        description: "Nom du membre de l'équipe",
        placeholder: 'Exemple: John Doe'
      }
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      label: 'Fonction',
      admin: {
        description: "Fonction du membre de l'équipe",
        placeholder: 'Exemple: Développeur'
      }
    },
    {
      name: 'image',
      type: 'upload',
      required: true,
      label: 'Image',
      relationTo: 'media',
      admin: {
        description: "Image du membre de l'équipe"
      }
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      label: 'Commande',
      admin: {
        description: "Ordre d'affichage du membre de l'équipe"
      }
    }
  ]
}
