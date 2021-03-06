import { Request, Response, Router } from 'express'

import Posts from '@models/PostSchema'
import Users from '@models/UserSchema'
import Companies from '@models/CompanySchema'

import ServerError from '../errors/ServerError'

const postsRouter = Router()

postsRouter.get('/', async(req: Request, res: Response) => {
  const { username, companyname } = req.query

  if (username) {
    const user = await Users.findOne({ username: username.toString() }).catch((error) => {
      throw new ServerError(error)
    })

    if (user === null) {
      throw new ServerError('Usuário não encontrado.')
    }

    const posts = await Posts.find({ userId: user._id })

    return res.json({ posts })
  }

  if (companyname) {
    const company = await Companies.findOne({ name: companyname.toString() })

    if (!company) return res.status(404).json({ message: 'Compania não encontrada.' })

    const users = await Users.find({ companyId: company._id })

    const posts = await Promise.all(users.map(async user => {
      return await Posts.find({ userId: user._id })
    }))

    return res.json({ posts })
  }

  const posts = await Posts.find()

  const responsePosts = await Promise.all(posts.map(async post => {
    const user = await Users.findById(post.userId)

    if (user) {
      const company = await Companies.findById(user.companyId)

      if (company) {
        return {
          title: post.title,
          body: post.body,
          author: {
            username: user.username,
            name: user.name,
            company: company.name
          }
        }
      }
    }
  }))

  return res.json({ responsePosts })
})

export default postsRouter
