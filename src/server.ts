import 'dotenv/config'

import express from 'express'
import payload from 'payload'

const app = express()

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
