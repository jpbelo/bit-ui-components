import React from 'react'
import { storiesOf } from '@storybook/react'

import ProductCard from '.'

const data = {
  name: 'SAPATOS TERREX_WM SPEED LD',
  price: 199.95,
  currency: '€',
  images: {
    cover: 'https://assets.adidas.com/images/w_600/5470fc4020014d0c8378aa3100bb63c5_9366/Sapatos_TERREX_WM_Speed_LD_Preto_EE3912.jpg',
  },
  url: 'https://www.adidas.pt/sapatos-terrex_wm-speed-ld/EE3912.html',
}

storiesOf('ProductCard').add('Product Card', () => <ProductCard {...data} />)
