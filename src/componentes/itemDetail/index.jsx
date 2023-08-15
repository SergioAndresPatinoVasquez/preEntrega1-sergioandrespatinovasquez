import React, { useContext, useState } from 'react'
import ItemCount from '../itemCount'
import { CartContext } from '../../context/CartContext'



const ItemDetail = ({ producto }) => {

  const {carrito, agregarAlCarrito} = useContext(CartContext);
  console.log(carrito);

const [count, setCount] = useState(1)

const sumar = () =>{
    if(count < producto.stock){
        setCount(count+1)
    }
}
const restar = () =>{
    if(count>1){
        setCount(count-1)
    }
}


  return (

        <div className='item-detail'>

              <div className='item-producto'>              

                <p className='detail'><span>Detalle del producto : </span>{producto.name}.</p>
                <p className='detail'> <span>Referencia :</span> {producto.reference}.</p>
                <p className='detail'> <span>Stock : </span>{producto.stock} unidades.</p>
                <p className='detail'><span>Precio :</span> ${producto.price}</p>
                <p className='detail'><span>Descripción del producto :</span> {producto.description}</p>
                            
                <ItemCount stock={producto.stock}  count={count} handleAgregar={()=>{ agregarAlCarrito(producto, count)}} sumar={sumar} restar={restar} onAdd={()=>{agregarAlCarrito(producto)}} />
              
              </div>

              <div className='item-img'>
              <img className='detail-img' src={producto.img} alt={producto.name} />
              </div>

              
        </div>  
        

  )
}

export default ItemDetail