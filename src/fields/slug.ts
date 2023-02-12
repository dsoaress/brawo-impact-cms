import type { Field } from 'payload/types'

import { deepMerge } from '../utils/deep-merge'
import { formatSlug } from '../utils/format-slug'

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field

export const slugField: Slug = (fieldToUse = 'title', overrides) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      index: true,
      admin: {
        description: "URL de l'actualité. Ne pas modifier.",
        position: 'sidebar',
        readOnly: true
      },
      hooks: {
        beforeValidate: [formatSlug(fieldToUse)]
      }
    },
    overrides
  )
