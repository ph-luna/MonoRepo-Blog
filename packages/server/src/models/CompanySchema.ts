import mongoose, { Schema, Document } from 'mongoose'

import ICompany from 'src/interfaces/ICompany'

export interface ICompanyMongoose extends ICompany, Document {}

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true
  },

  catchPhrase: {
    type: String,
    required: true
  },

  bs: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

})

export default mongoose.model<ICompanyMongoose>('Company', CompanySchema)
