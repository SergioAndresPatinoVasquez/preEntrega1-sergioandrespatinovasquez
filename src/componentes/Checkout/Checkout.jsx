import React, { useEffect, useState } from 'react'
import './Checkout.css'
import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../services/firebase';

const Checkout = () => {
    const { carrito, clear, total } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const [pedidoId, setPedidoId] = useState("");

    const [datosFormulario, setFormulario] = useState([]);

    const [errorEmail, setErroremail] = useState(false);


    const comprar = (data) => {

        setFormulario(data)

        const pedido = {
            cliente: data,
            productos: carrito,
            total: total(),
            date: serverTimestamp()
        }


        if (pedido.cliente.email === pedido.cliente.reemail) {
            setErroremail(false)
            const pedidosRef = collection(db, "pedidos");
            addDoc(pedidosRef, pedido)
                .then((doc) => {
                    console.log(doc)
                    setPedidoId(doc.id);
                    clear([]);
                })
        } else {
            setErroremail(true)
        }
    }


    if (pedidoId) {
        return (
            <div>
                <h1>¡ {datosFormulario.nombre}, Muchas Gracias Por Tu Compra !</h1>
                <p className='pedidoId'> Tu pedido fue generado con exito, tu número de pedido es : {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className='container-contacto'>

            <h1 className='contacto'>Finaliza tu compra </h1>
            <form className='formulario' onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder='Ingresa tu nombre' {...register("nombre", { required: true })} />
                <input type="number" placeholder='Ingresa tu teléfono' {...register("telefono", { required: true })} />
                <input type="email" placeholder='Ingresa tu e-mail' {...register("email", { required: true })} />
                <input type="email" placeholder='Repite tu e-mail' {...register("reemail", { required: true })} />

                <button className='enviar' type='submit'>Generar Orden </button>

                {errorEmail ? <p className='errorEmail'>¡Por favor verifique su email!</p> : <p></p>}
            </form>

        </div>
    )
}

export default Checkout