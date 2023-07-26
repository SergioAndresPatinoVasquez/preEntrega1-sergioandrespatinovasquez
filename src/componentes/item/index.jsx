import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  return (
        
          <div className='cards'>
            <img className='card-img' src={product.img} alt={product.name} />
              {console.log(product.name)}
              <p className='card-title'>{product.name}</p>
              <p className='card-description'>{product.reference}</p>
              <p className='card-price'>Precio ${product.price}</p>
              <Link to={`/item/${product.id}`}><button className='card-button'>Ver detalle</button></Link>
              
          </div>
      
  
  )
}

export default Item