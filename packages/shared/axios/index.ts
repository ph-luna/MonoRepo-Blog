const axios = require('axios')

const api = axios.create({
  baseURL: 'http://localhost:7777'
})

const jsonPlaceHolderAPI = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
})

module.exports = {
  api, jsonPlaceHolderAPI
}
