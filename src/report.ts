export interface MenuReport {
  id: string
  name: string
  categories: CategoryReport[]
}

interface CategoryReport {
  id: string
  name: string
  products: ProductReport[]
}

interface ProductReport {
  id: string
  title: string
  image: string
  price: number
  description: string
}