export type Id = string
export interface IdObject {
  id: Id
}

export interface Menu extends IdObject {
  name: string
}

export interface Category extends IdObject {
  name: string
}

export interface Product extends IdObject {
  title: string
  image: string
  description: string
  price: number
  hidden: boolean
}

export type Obj = Record<string, any>