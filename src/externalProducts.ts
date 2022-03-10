import { get } from './rest'

interface SourceExternalProduct {
  id: number
  category: string

  title: string
  image: string
  price: number
  description: string
  rating: {
    rate: number
    count: number
  }
}

export class ExternalProduct {
  private source: SourceExternalProduct

  constructor(source: SourceExternalProduct) {
    this.source = source
  }

  public getCategory(): string {
    return this.source.category
  }

  public getId(): string {
    return this.source.id.toString()
  }

  public getProductUpdate() {
    const { title, image, price, description } = this.source
    return {
      id: this.getId(),

      title,
      image,
      price,
      description,

      hidden: false,
    }
  }
}

export async function getExternalProducts(): Promise<ExternalProduct[]> {
  const sourceExternalProducts: SourceExternalProduct[] = await get('https://fakestoreapi.com/products')
  const externalProducts = sourceExternalProducts.map(sourceExternalProduct => new ExternalProduct(sourceExternalProduct))
  return externalProducts
}