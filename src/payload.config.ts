import dotenv from 'dotenv'
import path from 'path'
import { buildConfig } from 'payload/config'
import computeBlurhash from 'payload-blurhash-plugin'
import cloudinaryPlugin from 'payload-cloudinary-plugin/dist/plugins'

import { Media } from './collections/media'
import { News } from './collections/news'
import { Pages } from './collections/pages'
import { Team } from './collections/team'
import { Users } from './collections/users'

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug
  },
  collections: [Users, Team, News, Pages, Media],
  routes: {
    admin: '/app'
  },
  plugins: [cloudinaryPlugin(), computeBlurhash()],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    disable: true
  }
})
