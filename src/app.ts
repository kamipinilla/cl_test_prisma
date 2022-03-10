import { PrismaClient, PrismaPromise } from '@prisma/client'
import { getMenuId } from './config'
import { getExternalProducts } from './externalProducts'
import { MenuReport } from './report'

const prisma = new PrismaClient()

export default async function app(): Promise<MenuReport> {
  await update()
  return await getMenuReport()
}

async function update(): Promise<void> {
  const extProducts = await getExternalProducts()
  const menuId = getMenuId()
  const updates: PrismaPromise<any>[] = extProducts.map(extProduct => {
    const productId = extProduct.getId()
    const productUpdate = extProduct.getProductUpdate()
    const category = extProduct.getCategory()
    return prisma.product.upsert({
      where: {
        id: productId,
      },
      update: productUpdate,
      create: {
        ...productUpdate,
        categories: {
          connectOrCreate: {
            where: {
              id: category,
            },
            create: {
              id: category,
              name: category,
              menus: {
                connect: {
                  id: menuId,
                },
              },
            },
          },
        },
      },
    })
  })
  await prisma.$transaction(updates)
}

async function getMenuReport(): Promise<MenuReport> {
  return await prisma.menu.findUnique({
    where: {
      id: getMenuId(),
    },
    rejectOnNotFound: true,
    include: {
      categories: {
        include: {
          products: {
            where: {
              hidden: false,
            },
            select: {
              id: true,
              title: true,
              image: true,
              description: true,
              price: true,
            }
          },
        },
      },   
    },
  })
}