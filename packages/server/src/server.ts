import 'express-async-errors'
import './database'
import './services/LoadUsersAndCompaniesService'
import './services/LoadPostsService'

import express from 'express'
import cors from 'cors'

import routes from './routes'
import GlobalExceptionError from './errors/GlobalExceptionHandler'

const server = express()
const PORT = process.env.PORT || 7777 // skr skr skr

server.use(cors())

server.use(express.json())

server.use(routes)

server.use(GlobalExceptionError)

server.listen(PORT, () => {
  console.log('🚀 O servidor está online! PORTA: ' + PORT)
})
