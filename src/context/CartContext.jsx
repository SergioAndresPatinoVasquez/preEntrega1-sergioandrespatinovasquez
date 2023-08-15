import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
  // useEffect(()=>{
  //   const colectionProductos = collection(db, 'productos')
  //   productos.map((item)=> addDoc(colectionProductos, item))
  // },[])

  const [carrito, setCarrito]= useState(carritoInicial);

  const agregarAlCarrito = (producto, count) => {
    const itemAgregado = {...producto, count}

    const nuevoCarrito = [...carrito]
    const estaEnElCarrito = nuevoCarrito.find((item)=> item.id === itemAgregado.id)

    if(estaEnElCarrito){
      estaEnElCarrito.count = estaEnElCarrito.count + count;
      setCarrito(nuevoCarrito);
    }else{
      nuevoCarrito.push(itemAgregado);
      setCarrito(nuevoCarrito);
    }
    
  }

  useEffect(()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
  },[carrito])

  const borrarProducto = (id) => {
     setCarrito(carrito.filter((item)=> item.id !== id))
  }

  const clear = () => {
    setCarrito([])
  }
  
  const cantidadCarrito =()=>{
    return carrito.reduce((acc, prod) => acc + prod.count,0);
  }

  const total = () =>{
    return carrito.reduce((acc, item) => acc + item.count*item.price,0)
  }

  return (
    <CartContext.Provider value={{
        cantidadCarrito,
        carrito,
        clear,
        agregarAlCarrito,
        borrarProducto,
        total}}>

        {children}

    </CartContext.Provider>    
    )
      
}

