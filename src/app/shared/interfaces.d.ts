export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Adress,
  phone: string,
  website: string,
  company: Company,
  comment: string
}

export interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface Adress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo
}

export interface Geo {
  lat: string,
  lng: string
}
