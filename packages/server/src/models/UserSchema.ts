import mongoose, { Schema, Document } from 'mongoose'

import IUser from 'src/interfaces/IUser'

export interface IUserMongoose extends IUser, Omit<Document, '_id'> {}

const UserSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phone: String,

  website: String,

  companyId: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },

  address: {
    street: {
      type: String
    },
    suite: {
      type: String
    },
    city: {
      type: String
    },
    zipcode: {
      type: String
    },
    geo: [{
      lat: {
        type: String
      },
      lng: {
        type: String
      }
    }]
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

}, { _id: false })

export default mongoose.model<IUserMongoose>('User', UserSchema)
