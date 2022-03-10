import { PrismaClient } from '@prisma/client'
import { getMenuId } from '../src/config'

const prisma = new PrismaClient()

async function setup(): Promise<void> {
  const menuId = getMenuId()
  const menu = await prisma.menu.findUnique({
    where: {
      id: menuId,
    },
  })
  if (menu !== null) {
    console.log('Database already setup')
    return
  }

  await prisma.menu.create({
    data: {
      id: menuId,
      name: 'Backend Test Menu',
      categories: {
        create: [
          {
            id: 'electronics',
            name: 'electronics',
            products: {
              create: [
                {
                  id: '13',
                  title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
                  image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
                  price: 599,
                  description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
                },
                {
                  id: '14',
                  title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
                  image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
                  price: 999.99,
                  description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
                  hidden: true,
                },
                {
                  id: '82',
                  title: 'Samsung Galaxy Watch 4',
                  image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
                  price: 250,
                  description: 'Companion smartwatch to Samsung phones running on Wear OS 3.0',
                }
              ],
            },
          },
          {
            id: "men's clothing",
            name: "men's clothing",
            products: {
              create: [
                {
                  id: '2',
                  title: 'Mens Casual Premium Slim Fit T-Shirts ',
                  image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
                  price: 22.3,
                  description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
                  hidden: true
                },
                {
                  id: '28',
                  title: 'Mens jeans Premium Slim Fit',
                  image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._.jpg',
                  price: 27.3,
                  description: 'Slim fit jeans for men.',
                }
              ]
            }
          },
          {
            id: 'jewelery',
            name: 'jewelery',
            products: {
              create: [
                {
                  id: '5',
                  title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                  image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
                  price: 695,
                  description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                },
                {
                  id: '7',
                  title: 'White Gold Plated Princess',
                  image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
                  price: 9.99,
                  description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
                },
              ],
            },
          },
        ],
      },
    },
  })
}

setup()