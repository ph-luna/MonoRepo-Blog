import React, { useEffect, useState } from 'react'
import { api } from '@monorepo-blog/axios'

interface IPost {
  title: string
  body: string
  author: {
    username: string
    name: string
    company: string
  }
}

const Main: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [allPosts, setAllPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    function fetchPosts() {
      return api.get<{ responsePosts: IPost[] }>('/posts').then(request => {
        setPosts(request.data.responsePosts)
        setAllPosts(request.data.responsePosts)
        setIsLoading(false)
      })
    }

    fetchPosts()
  }, [])

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.toLowerCase()

    if (!value) {
      setPosts(allPosts)
      return
    }

    const filteredPosts = allPosts.filter(post => {
      const { name, username, company } = post.author

      if (name.toLowerCase().search(value) !== -1) return true
      else if (username.toLowerCase().search(value) !== -1) return true
      else if (company.toLowerCase().search(value) !== -1) return true
      else return false
    })

    setPosts(filteredPosts)
  }

  return (
    <div className="w-full min-h-screen bg-indigo-200 flex flex-col items-center py-4">
      <div className="w-11/12 max-w-screen-md p-4 fixed inset-x-auto bg-gray-100 mt-2">
        <input type="text" onChange={handleSearch} placeholder="Filtrar por usuário, empresa ou autor" className="w-full bg-transparent p-2 focus:outline-none text-gray-500" />
      </div>
      <div className="bg-gray-100 rounded-xl shadow-2xl flex flex-col items-center p-4 max-w-screen-md w-11/12 pt-16">
        {isLoading
          ? (
            <div className="loader" />
          )
          : (
            posts.length === 0
              ? (
                <p>Nenhuma postagem encontrada.</p>
              )
              : (
                posts.map((post, index) => (
                  <div className="bg-gray-300 flex-col flex my-4" key={`_postcard_${index}`}>
                    <h3 className="text-center text-xl py-1 mx-4 my-2 text-indigo-600 border-b-2 border-indigo-600">{post.title}</h3>
                    <p className="w-full text-gray-900 text-justify px-4">{post.body}</p>
                    <div className="w-full flex flex-col py-2 px-4 bg-gray-600 mt-8 text-white">
                      <p className="w-full text-right"> {`${post.author.name} (${post.author.username})`}</p>
                      <p className="text-sm italic w-full text-right">{post.author.company}</p>
                    </div>
                  </div>
                ))))}
      </div>
    </div>
  )
}

export default Main
