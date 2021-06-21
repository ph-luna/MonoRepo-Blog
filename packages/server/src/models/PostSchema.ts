import mongoose, { Schema, Document } from 'mongoose'

import IPost from 'src/interfaces/IPost'

export interface IPostMongoose extends IPost, Omit<Document, '_id'> {}

const PostSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },

  userId: {
    type: Number,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

})

export default mongoose.model<IPostMongoose>('Post', PostSchema)
