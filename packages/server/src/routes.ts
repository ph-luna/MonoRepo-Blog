import { Router } from 'express'

import postsController from '@controllers/PostsController'

const serverRouter = Router()

serverRouter.use('/posts', postsController)

export default serverRouter
