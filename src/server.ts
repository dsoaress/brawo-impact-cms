import 'dotenv/config'

import express from 'express'
import payload from 'payload'
import { mediaManagement } from 'payload-cloudinary-plugin'

const app = express()

app.use(
  mediaManagement(
    {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    },
    { folder: process.env.CLOUDINARY_FOLDER }
  )
)
app.get('/', (_, res) => res.redirect('/app'))

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGO_URL,
    express: app,
    onInit: async () => payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  })

  app.listen(Number(process.env.PORT))
}

start()
