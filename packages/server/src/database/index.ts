import mongoose from 'mongoose'

const connectionUrl = 'mongodb+srv://monorepo-blog-API:I5AuLeIdWDwMsOZK@maincluster.eixmq.mongodb.net/monorepo-blog?retryWrites=true&w=majority'

export default mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(error => {
  console.log('Erro ao conectar com o banco de dados: ' + error)
})
