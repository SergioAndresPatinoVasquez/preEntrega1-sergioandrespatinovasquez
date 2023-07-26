import React from 'react'
import ItemCount from '../itemCount'
import { useState } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";


// const override = {
//   position: 'absolute',
//   transform: 'translate3d(-50%, -50%, 0)',
//   left: '50%',
//   right: '50%',
//   top: '50%',
//   bottom: '50%',

// };


const ItemDetail = ({ producto }) => {

  // const [loading, setLoading] = useState(true)

  // setTimeout(() => {
  //   setLoading(false)
  // }, 2000)

  const onAdd = (cantidad) => {
    console.log('compraste', cantidad)
  }
  return (

        <div className='item-detail'>

              <div className='item-producto'>              

                <p className='detail'><span>Detalle del producto : </span>{producto.name}.</p>
                <p className='detail'> <span>Referencia :</span> {producto.reference}.</p>
                <p className='detail'> <span>Stock : </span>{producto.stock} unidades.</p>
                <p className='detail'><span>Precio :</span> ${producto.price}</p>
                <p className='detail'><span>Descripción del producto :</span> {producto.description}</p>
                            
                <ItemCount stock={producto.stock} onAdd={onAdd} />
              
              </div>

              <div className='item-img'>
              <img className='detail-img' src={producto.img} alt={producto.name} />
              </div>

              
        </div>  
        

  )
}

export default ItemDetail