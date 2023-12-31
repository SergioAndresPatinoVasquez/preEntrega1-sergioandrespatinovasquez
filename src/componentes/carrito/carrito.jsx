import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './carrito.css';
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, clear, total, borrarProducto } = useContext(CartContext);

    return (

        <div className='title'>

            {carrito.length
                ?
                <>
                    <h1>Carrito</h1>

                    <table>
                        <thead>
                            <tr>
                                <th className='th-imagen'>Imagen</th>
                                <th className='th-articulo'>Artículo</th>
                                <th className='th-referencia'>Referencia</th>
                                <th className='th-precio-unitario'>Precio</th>
                                <th className='th-unidades'>Unidades</th>
                                <th className='th-subtotal'>Subtotal</th>
                                <th >Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>


                            {carrito.map((product) => (<tr key={product.id}>
                                <td className='th-imagen'><img className='carrito-img' src={product.img} alt={product.name} /></td>
                                <td className='th-articulo'><h2>{product.name}</h2></td>
                                <td className='th-referencia'><p className='carrito-items'>{product.reference}</p></td>
                                <td className='th-precio-unitario'><p className='carrito-items'>${product.price}</p></td>
                                <td className='th-unidades'><p className='carrito-items'>{product.count}</p></td>
                                <td className='th-subtotal'><p className='carrito-items'>${product.price * product.count}</p></td>
                                <td><button className='eliminar' onClick={() => borrarProducto(product.id)}>X</button></td>

                            </tr>))}


                        </tbody>
                    </table>

                    <div>
                        <p className='total-pagar'>Total a pagar : ${total()}</p>
                        <div className='botones-carrito'>
                            <button className='boton-carrito' onClick={clear}>Vaciar Carrito</button>
                            <Link to='/checkout'><button className='boton-carrito'>Terminar Compra</button></Link>
                        </div>
                    </div>


                </>

                :
                <div className='comprar-carrito'>
                    <h1>¡Tu carrito está vacio!</h1>
                    <Link to='/' ><button className='ir-comprar'>Ir a comprar</button></Link>
                </div>
            }



        </div>
    )
}

export default Carrito