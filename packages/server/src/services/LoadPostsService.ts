import { jsonPlaceHolderAPI } from '@monorepo-blog/axios'
import cron from 'node-cron'

import IPost from 'src/interfaces/IPost'
import Posts from '@models/PostSchema'

interface IPostData extends IPost {
  id: number
}

async function LoadPostsService() {
  const { data } = await jsonPlaceHolderAPI.get<IPostData[]>('/posts')
  const postsList = await Posts.find()

  await Promise.all(data.map(async dataPost => {
    const found = postsList.find(post => dataPost.id === post._id)

    if (!found) {
      await Posts.create({
        _id: dataPost.id,
        userId: dataPost.userId,
        title: dataPost.title,
        body: dataPost.body
      })
    }
  }))
}

LoadPostsService()
cron.schedule('* 15 1 * * *', LoadPostsService)
