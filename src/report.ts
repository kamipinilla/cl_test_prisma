import { Id } from './types'

export interface MenuReport {
  id: Id
  name: string
  categories: CategoryReport[]
}

interface CategoryReport {
  id: Id
  name: string
  products: ProductReport[]
}

interface ProductReport {
  id: Id
  title: string
  image: string
  description: string
  price: number
}