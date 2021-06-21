import { jsonPlaceHolderAPI } from '@monorepo-blog/axios'
import cron from 'node-cron'

import IUser from 'src/interfaces/IUser'
import Users from '@models/UserSchema'
import Companies from '@models/CompanySchema'

interface IUserData extends Omit<IUser, 'companyId'> {
  id?: number,
  company?: {
    name: string
    catchPhrase: string
    bs: string
  }
}

async function LoadUsersAndCompaniesService() {
  const { data } = await jsonPlaceHolderAPI.get<IUserData[]>('/users')
  const usersList = await Users.find()
  const companiesList = await Companies.find()

  await Promise.all(data.map(async dataUser => {
    const found = usersList.find(user => dataUser.username === user.username)

    if (!found) {
      let company = null
      const foundCompany = companiesList.find(company => company.name === dataUser.company?.name)

      if (foundCompany) company = foundCompany
      else {
        company = await Companies.create(dataUser.company)
      }

      const newUser = { ...dataUser, companyId: company._id, _id: dataUser.id }
      delete newUser.company
      delete newUser.id

      await Users.create(newUser)
    }
  }))
}

LoadUsersAndCompaniesService()
cron.schedule('* 0 1 * * *', LoadUsersAndCompaniesService)
