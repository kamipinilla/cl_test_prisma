import { get } from './rest'

interface SourceExternalProduct {
  id: number
  category: string

  title: string
  image: string
  description: string
  price: number
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
    const { title, image, description, price } = this.source
    return {
      id: this.getId(),

      title,
      image,
      description,
      price,

      hidden: false,
    }
  }
}

export async function getExternalProducts(): Promise<ExternalProduct[]> {
  const sourceExternalProducts: SourceExternalProduct[] = await get('https://fakestoreapi.com/products')
  const externalProducts = sourceExternalProducts.map(sourceExternalProduct => new ExternalProduct(sourceExternalProduct))
  return externalProducts
}