import React from 'react'
import Item from '../item'

const ItemList = ({productos}) => {
  return (
    <div className='cards-container'>
        {productos.map((product)=><Item key={product.id} product={product} />)}     
    </div>
  )
}

export default ItemList