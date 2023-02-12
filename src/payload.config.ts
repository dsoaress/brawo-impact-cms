import dotenv from 'dotenv'
import path from 'path'
import { buildConfig } from 'payload/config'

import { Users } from './collections/users'

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug
  },
  collections: [Users],
  routes: {
    admin: '/app'
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  }
})
