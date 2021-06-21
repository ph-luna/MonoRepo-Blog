import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:7777'
})

export const jsonPlaceHolderAPI = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
})
