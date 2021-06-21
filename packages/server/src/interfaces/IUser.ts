export default interface IUser {
  _id: number
  name: string
  username: string
  email: string
  phone?: string
  website?: string
  address: {
    street: string
    suit: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  companyId: string
}
